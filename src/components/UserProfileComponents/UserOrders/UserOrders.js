import React, { Component } from 'react';
import { connect } from 'react-redux';
import './UserOrder.css';
import testImg from '../../../img/Detailpic.png'
import callApi from '../../../config/utils/apiCaller';
import TopOrders from '../TopOrders/TopOrders';
import { Link } from 'react-router-dom';
import { showLoader, hideLoader } from '../../../actions/index';
import { Collapse } from 'react-bootstrap';

class UserOrders extends Component {
    formatter = new Intl.DateTimeFormat("vi-VN", {
        year: "numeric",
        month: "long",
        day: "2-digit",
        // hour: 'numeric',
        // minute: 'numeric',
        // second: 'numeric'
    });
    constructor(props) {
        super(props);
        this.state = {
            UserOrders: [],
            open: true,
            open2: true,
            arrowAnimation: false
        }
    }

    convertCurrecyToVnd = (currency) => {
        return currency.toLocaleString('it-IT', { style: 'currency', currency: 'VND' })
    }

    getAllOrder = async (id) => {
        const { showLoader, hideLoader, loggedUser } = this.props;
        showLoader();
        const userId = loggedUser.id;
        let data = new FormData();
        data.append('uid', userId);
        await callApi(`order/user/${id}`, 'POST', data)
            .then(res => {
                // console.log(res);
                this.setState({
                    UserOrders: res.data
                })
                hideLoader();
            }).catch(function (error) {
                if (error.response) {
                    hideLoader();
                    console.log(error.response.data);
                }
            });
    }

    componentDidMount = () => {
        var jwtDecode = require('jwt-decode');
        var tokenLogin = JSON.parse(localStorage.getItem('tokenLogin'));
        if (tokenLogin) {
            var decoded = jwtDecode(tokenLogin);
            // console.log(decoded);
            const id = decoded.user.userId;
            callApi(`userClient/${id}`, 'GET', null)
                .then(res => {
                    // console.log(res.data.id);
                    this.getAllOrder(res.data.id);
                }).catch(function (error) {
                    if (error.response) {
                        console.log(error.response.data);
                    }
                });
        }
    }
    showStatus = (status) => {
        /* PAID, UNPAID, SENT, EXPIRED */
        var myStatus = "";
        if (status === "PAID") {
            myStatus = "Đang xử lý";
        }
        if (status === 'UNPAID') {
            myStatus = "Chờ thanh toán";
        }
        if (status === 'SENT') {
            myStatus = "Thành công";
        }
        if (status === 'EXPIRED') {
            myStatus = "Hết hạn";
        }
        return myStatus;
    }
    toggleArrow = () => {
        this.setState({
            arrowAnimation: true
        })
    }
    showOrders = (topOrders) => {
        const topOrd = topOrders.orderItems
        var result = null;
        if (topOrders.length > 0) {
            result = topOrders.map((item, index) => {
                return (
                    <div key={index}
                            className="detailTicketBoxDetail row no-gutters">
                            <div
                                className="detailTicketBox2Detail col-12">
                                <div className={`detailTicketChild${item.status} col-12`}>
                                    <div className="row no-gutters">
                                        <div className="col-4">
                                            <p style={{ fontSize: "12px" }}>Mã đơn hàng: #{item.orderCode} </p>
                                        </div>
                                        <div className="col-4">
                                            <p style={{ visibility: item.status === "UNPAID" ? "hidden" : "visible", fontSize: "12px" }}>Thanh toán: &nbsp;
                                            {/* {item.purchaseDay} */}
                                                {this.formatter.format(Date.parse(item.purchaseDay))}   
                                            </p>
                                        </div>
                                        <div className="col-4">
                                            <p className="pushRight">{this.showStatus(item.status)}</p>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-6">
                                            <p>Số tiền thanh toán: {this.convertCurrecyToVnd(item.totalPayment)}</p>
                                        </div>
                                        <div className="col-6">
                                            <Link to={{
                                                pathname: `/userProfile/myOrder/${item.id}`
                                            }}>
                                                <p className="pushRight2">
                                                    Xem chi tiết
                                            </p>
                                            </Link>
                                        </div>
                                    </div>
                                </div>

                                <div style={{ margin: "20px 30px 20px 30px" }} className="row no-gutters">
                                    <div
                                        className="col-3">
                                        <img className="detailImg"
                                            height="15px"
                                            src={item.place.imageLink}
                                            alt="FAIL TO LOAD" />
                                    </div>
                                    <div
                                        style={{ marginLeft: "20px" }}
                                        className="col">
                                        <div className="row">
                                            <div className="col"><h1 className="nameDetail">Vé {item.place.name}</h1></div>
                                        </div>
                                        <div className="row">
                                            <div className="col-3"><span className="ticketTypeDetail">Loại vé: </span></div>
                                            <div className="col"><span className="ticketTypeDetail">{item.ticketTypeName}</span></div>
                                        </div>
                                        <div className="row">
                                            <div className="col-3">
                                                <span className="redemDetail">
                                                    Thời gian:
                                        </span>
                                            </div>
                                            <div className="col">
                                                <span className="redemDetail">
                                                    {this.formatter.format(Date.parse(item.redemptionDate))}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                );
            });
        }

        else if (topOrders.length === 0) {
            return (
                <p style={{ visibility: this.props.loader === false ? "visible" : "hidden" }}>Not Found</p>
            );
        }
        return result;
    }

    render() {
        const { UserOrders } = this.state;
        return (
            <div className="col">
                <div style={{ paddingTop: "0px" }} className="rightBoxUserDetail2">
                    <div
                        style={{ padding: "30px" }} >
                        <div
                         onClick={() => this.setState({ open: !this.state.open })}
                         aria-controls="example-collapse-text"
                         aria-expanded={this.state.open}
                        className="labelPointer row no-gutters">
                            <div className="col-6">
                                <div id="inline">
                                    <div className="bulletListCustome"></div>
                                    <div className="content">Đặt chỗ gần đây </div>
                                </div>
                            </div>
                            <div className="col">
                                
                            </div>
                        </div>
                        <Collapse in={this.state.open}>
                            <div id="example-collapse-text">
                                <TopOrders UserOrders={UserOrders} />
                            </div>
                        </Collapse>
                    </div>
                </div>
                <div style={{ marginTop: "30px" }} className="rightBoxUserDetail2">
                    <div
                        style={{ padding: "30px" }} >
                        <div 
                        onClick={() => this.setState({ open2: !this.state.open2 })}
                        aria-controls="example-collapse-text2"
                        aria-expanded={this.state.open2}
                        className="labelPointer row">
                            <div className="col-6">
                                <div id="inline">
                                    <div className="bulletListCustome"></div>
                                    <div className="content">Lịch sử đặt chỗ</div>
                                </div>
                            </div>
                        </div>
                        {/* {this.showOrders(UserOrders)} */}
                        <Collapse in={this.state.open2}>
                            <div id="example-collapse-text2">
                                {this.showOrders(UserOrders)}
                            </div>
                        </Collapse>
                    </div>
                </div>
            </div>

        );

    }

}

// export default UserOrders;
const mapStateToProps = state => {
    return {
        loggedUser: state.User,
        loader: state.Loader
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        showLoader: () => {
            dispatch(showLoader())
        },
        hideLoader: () => {
            dispatch(hideLoader())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserOrders);