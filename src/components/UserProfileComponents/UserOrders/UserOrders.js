import React, { Component } from 'react';
import { connect } from 'react-redux';
import './UserOrder.css';
import testImg from '../../../img/Detailpic.png'
import callApi from '../../../config/utils/apiCaller';
//Home page
class UserOrders extends Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }

    componentDidMount = () => {
        const { loggedUser } = this.props;
        const id = loggedUser.userId;
        console.log(id);
        callApi(`order/user/${id}`, 'GET', {
            id: id,
        }).then(res => {
            console.log(res)
        }).catch(function (error) {
            if (error.response) {
                console.log(error.response.data);
            }
        });
    }

    render() {
        return (
            <div>
                <div className="rightBoxUserDetail2">
                    <div style={{ padding: "30px" }} >
                        <div className="row">

                            <div className="col-6">
                                <div id="inline">
                                    <div className="bulletListCustome"></div>
                                    <div className="content">Đặt chỗ gần đây</div>
                                </div>
                            </div>

                            <div className="col-6">
                                <div className="UpdateDetail1" >Chỉnh sửa</div>
                            </div>
                        </div>
                        {/* item */}
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
                                            <div className="col"><span className="">Vé Vinwonders Nam Hội An</span></div>
                                        </div>
                                        <div className="row">
                                            <div className="col-3"><span className="">Loại vé: </span></div>
                                            <div className="col"><span className="">[Vé cứng] vé tiêu chuẩn</span></div>
                                        </div>
                                        <div className="row">
                                            <div className="col-3"><span className="">Thời gian: </span></div>
                                        </div>
                                    </div>
                                </div>
                            </div>


                        </div>
                        {/* end item */}
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
                    </div>
                </div>

                <div className="rightBoxUserDetail2">
                    <div style={{ padding: "30px" }} >
                        <div className="row">

                            <div className="col-6">
                                <div id="inline">
                                    <div className="bulletListCustome"></div>
                                    <div className="content">Lịch sử đặt chỗ</div>
                                </div>
                            </div>

                            <div className="col-6">
                                <div className="UpdateDetail1" >Chỉnh sửa</div>
                            </div>
                        </div>
                        {/* item */}
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
                                            <div className="col"><span className="">Vé Vinwonders Nam Hội An</span></div>
                                        </div>
                                        <div className="row">
                                            <div className="col-3"><span className="">Loại vé: </span></div>
                                            <div className="col"><span className="">[Vé cứng] vé tiêu chuẩn</span></div>
                                        </div>
                                        <div className="row">
                                            <div className="col-3"><span className="">Thời gian: </span></div>
                                        </div>
                                    </div>
                                </div>
                            </div>


                        </div>
                        {/* end item */}
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
                    </div>
                </div>
            </div>

        );
    }

}

// export default UserOrders;
const mapStateToProps = state => {
    return {
        loggedUser: state.User
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserOrders);