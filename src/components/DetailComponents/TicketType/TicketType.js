import React, { Component } from 'react';
import { connect } from 'react-redux';
import './TicketType.css';
import { Collapse } from 'react-bootstrap';
import DatePicker, { registerLocale } from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
// import { format } from "date-fns";
import vi from "date-fns/locale/vi";
// import AddSub from '../AddSub/AddSub';
// import { actUpdateProductIncart } from '../../../actions/index';
// import callApi from '../../../config/utils/apiCaller';
import TotalPayment from '../TotalPayment/TotalPayment';
// import { id } from 'date-fns/locale';
import MyCounter from '../AddSub/MyCounter';
import axios from 'axios';
import { el } from 'date-fns/locale';
registerLocale("vi", vi);
const radioToolbar = "radio-toolbar";

class TicketType extends Component {

    constructor(props) {
        super(props);
        this.state = {
            dob: { value: '1-1-1' },
            startDate: new Date(),
            open: false,
            apple: "aa",
            activeDay: [0, 6],
            visitorTypeState: []
        }
    }

    componentWillMount = () => {
        var placeChoosed = JSON.parse(localStorage.getItem('placeChoosed'));
        // get Ticket Type
        axios.get('http://localhost:8090/ticketType', {
            params: {
                //place ID
                placeId: placeChoosed.id,
            }
        }).then(res => {
            console.log(res.data.listResult);
            this.setState({
                ticketTypeState: res.data.listResult
            }, () => {
                // console.log(this.getTicketType().visitorTypes);
                this.setState({
                    visitorTypeState: this.getTicketType().visitorTypes
                })
            }
            )


            // localStorage.setItem('ticketType', JSON.stringify(res));

        }).catch(function (error) {
            console.log(error.response);
        });



    }

    showVisitorType2 = (type) => {
        console.log(type);
        var result = null;
        if (type.length > 0) {
            result = type.map((item, index) => {
                return (
                    <div>{item}</div>
                );
            });
        }
        else if (type.length === 0) {
            return (
                <p>Not Found</p>
            );
        }
        return result;
    }

    getTicketType = () => {
        const { ticketTypeState } = this.state;
        var element = [];
        if (ticketTypeState !== undefined) {
            for (let index = 0; index < ticketTypeState.length; index++) {
                element = ticketTypeState[index];
            }
        }
        return element;
    }

    showVisitorTypes = (ticketTypeState) => {
        var result = null;
        if (ticketTypeState.length > 0) {
            result = ticketTypeState.map((item, index) => {
                return (
                    <div
                        key={index}
                        style={{ paddingTop: "40px" }}
                        className="row no-gutters">
                        <div className="col-12">
                            <div
                                className="row no-gutters"
                                style={{
                                    marginBottom: "10px",
                                    background: "#FFFFFF",
                                    border: "2px solid #E3E3E3",
                                    boxSizing: 'border-box',
                                    borderRadius: '10px',
                                }}
                            >
                                <div className="col-5"
                                    style={{ display: "table" }}
                                >
                                    <p className="myTitleType">
                                        {item.typeName}
                                    </p>
                                </div>

                                <div
                                    className="col"
                                    style={{ display: "table" }}
                                >
                                    <p className="myTitlePrice">đ {item.price}</p>
                                </div>
                                {/* <div>còn lại: {item.remaining}</div> */}
                                <div className="col-4">
                                    {/* AddSub comp */}
                                    <div className="quantityBox">
                                        {/* <div
                                            style={{ textAlign: "center" }}
                                            className="row no-gutters">
                                            <div className="quantityBtn"
                                                onClick={this.DecreaseItem}>
                                                <p>-</p>
                                            </div>
                                            <div className="quantityBtn2">
                                                <p>{item.id}</p>
                                            </div>
                                            <div className="quantityBtn"
                                                onClick={() => this.IncrementItem(
                                                    this.setState({
                                                        counters: this.state.counters + 1,
                                                    }, () => {
                                                        // this.setState({
                                                        //     adultTicketTotalPrice: this.state.counters * 100
                                                        // })
                                                    }
                                                    )
                                                )}>
                                                <p>+</p>
                                            </div>
                                        </div>
                                 */}
                                        <MyCounter
                                            item={item}
                                        />
                                    </div >
                                    {/* End AddSub comp */}
                                </div>
                            </div>
                        </div>
                    </div>
                );
            });
        }
        else if (ticketTypeState.length === 0) {
            return (
                <p>Not Found</p>
            );
        }

        return result;
    }

    setGender(event) {
        console.log(event.target.value);
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

    render() {
        // var formattedDate = format(this.state.startDate, "dd/MM/yyyy");
        const ExampleCustomInput = ({ value, onClick }) => (
            <button className="example-custom-input" onClick={onClick}>
                {value}
            </button>
        );
        var dateType = {
            weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
        };
        var prnDt = this.state.startDate.toLocaleDateString('vi', dateType);
        // console.log(prnDt);
        const { visitorTypeState, ticketTypeState } = this.state;
        // console.log(visitorTypeState);
        // console.log(ticketTypeState);
        // console.log(this.getTicketType().typeName);
        return (

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

                    <div
                        className={`col-12 ${radioToolbar}`}
                        onChange={this.setGender.bind(this)}
                    >
                        <input
                            type="radio" id="radioApple" name="radioFruit" value={this.state.apple} />
                        <label htmlFor="radioApple">
                            {/* {ticketTypeState[0].typeName} */}
                            Tour mở dành cho tối đa 12 khách
                        </label>

                        <input
                            type="radio" id="radioApple" name="radioFruit" value={this.state.apple} />
                        <label htmlFor="radioApple">Tour mở dành cho tối đa 12 khách</label>

                        <input
                            type="radio" id="radioBanana" name="radioFruit" value="1s" />
                        <label htmlFor="radioBanana">Couple Tour</label>

                        <input type="radio" id="radioOrange" name="radioFruit" value="2ss" />
                        <label htmlFor="radioOrange">Tour gia đình 4 người</label>
                    </div>
                </div>
                {/* Vititor types */}
                {this.showVisitorTypes(visitorTypeState)}
                {/* End vititor types */}
                <br></br>
                <hr style={{ border: "1.5px solid #E3E3E3", borderRadius: "2px" }} />
                <div className="row">
                    <div className="col-5">
                    </div>
                    <div className="col-7">
                        <TotalPayment />
                    </div>
                </div>
            </div >
        );
    }

}


export default connect(null, null)(TicketType);

// export default TicketType;
