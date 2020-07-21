import React, { Component } from 'react';
import { connect } from 'react-redux';
import './ReTicketType.css';
import VisitorTypeList from '../AddSub/VisitorTypeList';
import { removeVisitorType, fetchVisitor2 } from '../../../actions/index';
import './TicketType.css';
import { Collapse } from 'react-bootstrap';
import DatePicker, { registerLocale } from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import vi from "date-fns/locale/vi";
import TotalPayment from '../TotalPayment/TotalPayment';
// import format from 'react';
import MyCounter from '../AddSub/MyCounter';
import axios from 'axios';
import { el } from 'date-fns/locale';
registerLocale("vi", vi);
const radioToolbar = "radio-toolbar";


class ReTicketType extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dob: { value: '1-1-1' },
            startDate: new Date(),
            open: false,
            apple: "aa",
            activeDay: [0, 6],
            ticketTypeId: 0,
            ticketName: 'default',

            ticketTypeState: [],
            typeChoosing: 1,
            orderDetail: [],
            total: 0,
        }
    }

    handleInput = event => {
        const { name, value } = event.target;
        const newState = { ...this.state[name] }; /* dummy object */
        newState.value = value;
        this.setState({ [name]: newState });
    }

    handleChange = date => {
        this.setState({
            startDate: date
        });
    };

    isWeekday = (Date) => {
        const { activeDay } = this.state;
        const day = Date.getDay()
        var fullList = [0, 1, 2, 3, 4, 5, 6];
        fullList = fullList.filter(val => !activeDay.includes(val));
        return day !== activeDay[0] && day !== activeDay[1]
    }

    componentWillMount = () => {
        var { ticketType } = this.props;
        console.log(ticketType);
        this.setState({
            ticketTypeState: ticketType
        })
        this.props.removeVisitorType();
        this.setDefaultTicketType(ticketType);
    }

    resetOrder = (e) => {
        this.props.removeVisitorType()
        this.setState({
            total: 0
        })
        // console.log(e.target);
        // console.log(e.target.innerHTML);
        // console.log(e.target.href.split('#')[1]);
        var ticketTypeId = e.target.href.split('#')[1];
        var ticketName = e.target.innerHTML + "";
        // console.log(ticketName);
        if (ticketTypeId) {
            this.setState({
                ticketTypeId: ticketTypeId,
                ticketName: ticketName
            })
        }

    }

    setDefaultTicketType = (ticketTypes) => {
        var result = null;
        if (ticketTypes.length > 0) {
            result = ticketTypes.map((ticketType, index) => {
                if (index == 0) {
                    console.log(ticketType.id);
                    console.log(ticketType.typeName);
                    this.setState({
                        ticketTypeId: ticketType.id,
                        ticketName: ticketType.typeName
                    })
                } 
            });
        }
    }
    
    showTicketTypeName = (ticketTypes) => {
        var result = null;
        if (ticketTypes.length > 0) {
            result = ticketTypes.map((ticketType, index) => {
                if (index == 0) {
                    return (
                        <li key={index} className="nav-item"
                            onClick={this.resetOrder}>
                            <a className="nav-link active" 
                            href={`#${ticketType.id}`} role="tab" data-toggle="tab">
                                {ticketType.typeName}
                            </a>
                        </li>
                    );
                } else {
                    return (
                        <li key={index} className="nav-item" onClick={this.resetOrder}>
                            <a className="nav-link" href={`#${ticketType.id}`} role="tab" data-toggle="tab" >
                                {ticketType.typeName}
                            </a>
                        </li>
                    );
                }
            });
        }
        return result;
    }

    showTicketTypeContent = (ticketTypes) => {
        var result = null;
        if (ticketTypes.length > 0) {
            result = ticketTypes.map((ticketType, index) => {
                if (index == 0) {
                    return (
                        <div key={index} className="tab-pane active" id={`${ticketType.id}`}>
                            <VisitorTypeList id={ticketType.id} item={ticketType.visitorTypes} />
                        </div>
                    );
                } else {
                    return (
                        <div key={index} className="tab-pane" id={`${ticketType.id}`}>
                            <VisitorTypeList id={ticketType.id} item={ticketType.visitorTypes} />
                        </div>
                    );
                }
            });
        }
        return result;
    }

    getTotalMoney = () => {
        var result = 0;
        var { ticket } = this.props
        for (var i = 0; i < ticket.length; i++) {
            result = result + ticket[i].myPrice * ticket[i].quantity
        }
        return result;
    }

    render() {
        const ExampleCustomInput = ({ value, onClick }) => (
            <button className="example-custom-input" onClick={onClick}>
                {value}
            </button>
        );
        console.log(this.state.startDate);

        var dateType = {
            weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
        };
        var prnDt = this.state.startDate.toLocaleDateString('vi', dateType);
        const { ticketTypeId, ticketName, startDate } = this.state;
        console.log(ticketTypeId);
        console.log(ticketName);
        // console.log(prnDt);
        

        const { ticketType } = this.props;
        // var total = this.getTotalMoney().toLocaleString('it-IT', {style : 'currency', currency : 'VND'});
        var total = this.getTotalMoney();;

        return (
            <div>
                <div
                    className="ticketBox"
                    style={{ fontFamily: 'Inter' }}
                >
                    <div className="row no-gutters">
                        <div className="col-5">
                            <div
                                className="datepickerBtn"
                                onClick={() => this.setState({ open: !this.state.open })}
                                aria-controls="example-collapse-text"
                                aria-expanded={this.state.open}
                            >
                                <div
                                    style={{ padding: "10px" }}
                                    className="row no-gutters">
                                    <div className="col">
                                        <h6
                                            className="myTitle"
                                            style={{ marginBottom: "0px" }}
                                        >
                                            Vui Lòng chọn ngày tham quan
                                    </h6>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-5"
                            style={{
                                border: "2px solid #E3E3E3",
                                borderRadius: "10px"
                            }}
                        >
                            <div
                                className="datepickerBtn"
                                onClick={() => this.setState({ open: !this.state.open })}
                                aria-controls="example-collapse-text"
                                aria-expanded={this.state.open}
                            >
                                <div
                                    style={{ padding: "10px" }}
                                    className="row no-gutters">
                                    <div className="col myTitle">
                                        <h6
                                            className="myTitle"
                                            style={{ marginBottom: "0px" }}
                                        >
                                            {prnDt}
                                        </h6>
                                    </div>
                                    <div className="col-1">
                                        <svg width="22" height="13" viewBox="0 0 22 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1 0.999999L11 12L21 1" stroke="#FF7062" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </div>
                                </div>
                            </div>

                        </div>


                    </div>
                    <div className="row no-gutters"
                        style={{ marginTop: "10px" }}
                    >
                        <div className="col-4">

                        </div>
                        <div>
                            <Collapse in={this.state.open}>
                                <div
                                    id="example-collapse-text">
                                    <DatePicker
                                        locale="vi"
                                        filterDate={this.isWeekday}
                                        selected={this.state.startDate}
                                        onChange={this.handleChange}
                                        dateFormat="dd/MM/yyyy"
                                        showMonthDropdown
                                        showYearDropdown
                                        yearDropdownItemNumber={15}
                                        scrollableYearDropdown
                                        customInput={<ExampleCustomInput />}
                                        inline
                                        calendarClassName="myCalender"
                                    />
                                </div>
                            </Collapse>
                        </div>
                    </div>
                    <div className="row no-gutters">
                        <div className="col-12">
                            <h3
                                style={{ paddingLeft: "10px" }}
                                className="myTitle">Loại vé
                        </h3>
                        </div>
                        <div className={`col-12 ${radioToolbar}`}>
                            <div className="row">
                                <div className="col-12">
                                    <ul className="nav nav-pills" role="tablist">
                                        {this.showTicketTypeName(ticketType)}
                                    </ul>
                                    <div className="tab-content tab-space">
                                        {this.showTicketTypeContent(ticketType)}
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <br></br>
                    <hr style={{ border: "1.5px solid #E3E3E3", borderRadius: "2px" }} />
                    <div className="row">
                        <div className="col-5">
                        </div>
                        <div className="col-7">
                            {/* {total} */}
                            <TotalPayment
                                ticketTypeID={ticketTypeId}
                                ticketName={ticketName}
                                totalPayment={total}
                                redemptionDate={startDate}
                            />
                        </div>
                    </div>
                </div >
            </div>


        );
    }
}

const mapStateToProps = state => {
    return {
        ticket: state.Ticket
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        removeVisitorType: () => {
            dispatch(removeVisitorType())
        },
        fetchVisitor2: (id, qty, price) => {
            dispatch(fetchVisitor2(id, qty, price))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ReTicketType);

// export default TicketType;
