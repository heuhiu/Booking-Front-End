import React, { Component } from 'react';
import { connect } from 'react-redux';
import './TicketType.css';
import DatePicker, { registerLocale } from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { format } from "date-fns";
import vi from "date-fns/locale/vi";
registerLocale("vi", vi);

class TicketType extends Component {

    constructor(props) {
        super(props);
        this.state = {
            dob: { value: '1-1-1' },
            startDate: new Date()
        }
    }

    handleInput = event => {
        const { name, value } = event.target;
        const newState = { ...this.state[name] }; /* dummy object */
        newState.value = value;
        this.setState({ [name]: newState });
    }

    // ok = (data) => {
    //     return (
    //         data.map(data => (
    //             <li>{data}</li>
    //         ))
    //     )
    // }
    handleChange = date => {
        this.setState({
            startDate: date
        });
    };
    render() {
        console.log(this.state.dob);
        var formattedDate = format(this.state.startDate, "dd/MM/yyyy");
        console.log(formattedDate);
        // if (this.state.dob.value !== null) {
        const answer_array2 = formattedDate.split('/');
        const ExampleCustomInput = ({ value, onClick }) => (
            <button className="example-custom-input" onClick={onClick}>
                {value}
            </button>
        );
        return (
            <div
                className="ticketBox"
                style={{ fontFamily: 'Inter' }}
            >
                <p>Vui Lòng chọn ngày tham quan</p>
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
                <h1>{answer_array2.slice(0, 1)} tháng {answer_array2.slice(1, 2)} năm {answer_array2.slice(2)}  </h1>
                <DatePicker
                    selected={this.state.startDate}
                    onnChange={this.handleChange}
                    dateFormat="MM/yyyy"
                    showMonthYearPicker
                    showFullMonthYearPicker
                />
            </div >
        );
    }

}

export default TicketType;
