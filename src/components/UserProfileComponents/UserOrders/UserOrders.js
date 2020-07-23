import React, { Component } from 'react';
// import { connect } from 'react-redux';
import './UserOrder.css';
import testImg from '../../../img/Detailpic.png'

//Home page
class UserOrders extends Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return (
            <div
                className="detailTicketBoxDetail row no-gutters">
                <div
                    className="detailTicketBox2Detail col-12">
                    {/* <h3>{ticketName}</h3> */}

                    <div className="detailTicketChild col-12">
                        <div className="row">
                            <div className="col-4">
                                <p>Đặt chỗ số: 3485970104 </p>
                            </div>
                            <div className="col-4">
                                <p>Thời gian: 20/6/2020 16:36</p>
                            </div>
                            <div className="col-4">
                                <p className="pushRight">Thành công</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-6">
                                <p>Số tiền thanh toán: <span>đ 1,030,000</span></p>
                            </div>
                            <div className="col-6">
                                <p className="pushRight2">Xem chi tiết</p>
                            </div>
                        </div>
                    </div>

                    <div style={{ margin: "30px" }} className="row no-gutters">
                        <div
                            className="col-3">
                            <img className="detailImg" src={testImg} alt="FAIL TO LOAD" />
                        </div>
                        <div
                            style={{ marginLeft: "20px" }}
                            className="col">
                            <div className="row">
                                <div className="col"><span className="nameDetail">Vé Vinwonders Nam Hội An</span></div>
                            </div>
                            <div className="row">
                                <div className="col-3"><span className="ticketTypeDetail">Loại vé: </span></div>
                                <div className="col"><span className="ticketTypeDetail">[Vé cứng] vé tiêu chuẩn</span></div>
                            </div>
                            <div className="row">
                                <div className="col-3"><span className="redemDetail">Thời gian: </span></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

export default UserOrders;
