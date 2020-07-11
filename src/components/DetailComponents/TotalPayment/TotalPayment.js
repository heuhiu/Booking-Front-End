import React, { Component } from 'react';
import { connect } from 'react-redux';
import './TotalPayment.css';

class TotalPayment extends Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }
    render() {
        return (
            <div>
                <div className="row-12 no-gutters">
                    <div className="row ">
                        <div className="col">
                            <p className="titlePayment">Tổng</p>
                        </div>
                        <div className="col">
                            <p
                                className="pPayment"
                            >đ 1,100,000</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <p className="titlePayment">Giảm giá</p>
                        </div>
                        <div className="col">
                            <p
                                className="pPayment"
                            >đ 70,000</p>
                        </div>
                    </div>
                    <div className="row ">
                        <div className="col">
                            <p className="titlePayment">Số tiền thanh toán</p>
                        </div>
                        <div className="col">
                            <p
                                className="pPayment"
                            >đ 1,030,000</p>
                        </div>
                    </div>
                </div>
                <br></br>
                <div className="row-12 no-gutters">
                    <div className="row no-gutters">
                        <div
                            style={{ display: "table" }}
                            className="col-5">
                            <p className="deleteAllTitle"
                            >Xóa tất cả</p>
                        </div>
                        <div className="col"
                            style={{ padding: "0px" }}
                        >
                            <button className="bookingBtn">
                                Đặt vé ngay
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

export default TotalPayment;
