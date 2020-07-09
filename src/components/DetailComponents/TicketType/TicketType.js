import React, { Component, useState } from 'react';
import { connect } from 'react-redux';
import './TicketType.css';
import { Button, Collapse } from 'react-bootstrap';
import DatePicker, { registerLocale } from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { format } from "date-fns";
import vi from "date-fns/locale/vi";
import AddSub from '../AddSub/AddSub';
registerLocale("vi", vi);
const radioToolbar = "radio-toolbar";

class TicketType extends Component {

    constructor(props) {
        super(props);
        this.state = {
            dob: { value: '1-1-1' },
            startDate: new Date(),
            open: false,
            apple: "aa"
        }
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
    render() {
        console.log(this.state.dob);
        var formattedDate = format(this.state.startDate, "dd/MM/yyyy");
        console.log(formattedDate);
        const ExampleCustomInput = ({ value, onClick }) => (
            <button className="example-custom-input" onClick={onClick}>
                {value}
            </button>
        );
        var dateType = {
            weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
        };
        var prnDt = this.state.startDate.toLocaleDateString('vi', dateType);
        console.log(prnDt);
        return (
            <div
                className="ticketBox"
                style={{ fontFamily: 'Inter' }}
            >
                <div className="row no-gutters">
                    <div className="col-4">
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
                        <input type="radio" id="radioApple" name="radioFruit" value={this.state.apple} />
                        <label htmlFor="radioApple">Tour mở dành cho tối đa 12 khách</label>

                        <input
                            style={{}}
                            type="radio" id="radioBanana" name="radioFruit" value="1s" />
                        <label htmlFor="radioBanana">Couple Tour</label>

                        <input type="radio" id="radioOrange" name="radioFruit" value="2ss" />
                        <label htmlFor="radioOrange">Tour gia đình 4 người</label>
                    </div>
                </div>

                <div className="row no-gutters">
                    <div className="col-2">
                        <h3
                            style={{ paddingLeft: "10px", marginTop: "40px" }}
                            className="myTitle">Số lượng</h3>
                    </div>
                    <div className="col-3.5">
                        <AddSub />
                    </div>


                </div>
                <hr style={{ border: "1.5px solid #E3E3E3", borderRadius: "2px" }} />


            </div >
        );
    }

}

export default TicketType;
