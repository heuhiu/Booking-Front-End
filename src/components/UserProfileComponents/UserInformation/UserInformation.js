import React, { Component } from 'react';
import { connect } from 'react-redux';
// import testImg from '../../../img/Detailpic.png';
// import callApi from '../../../config/utils/apiCaller';
import TopOrders from '../TopOrders/TopOrders';
import { Link } from 'react-router-dom';
import { showLoader, hideLoader } from '../../../actions/index';
import { Collapse } from 'react-bootstrap';

class UserInformation extends Component {

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
            topOrders: [],
            open: true,
            open2: true,
        }
    }

    // showTopOrder = (topOrders) => {
    //     const topOrd= topOrders.orderItems
    //     var result = null;
    //     if (topOrders.length > 0) {
    //         result = topOrders.map((item, index) => {
    //             console.log(item);
    //             // var dateType = {
    //             //     weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
    //             // };
    //             // console.log(item.redemptionDate);
    //             // console.log(new Date())
    //             // var prnDt = item.redemptionDate.toLocaleDateString('vi', dateType);
    //             // console.log(prnDt);
    //             // console.log(new Intl.DateTimeFormat('en-US', {year: 'numeric', month: 
    //             // '2-digit',day: '2-digit'}).format(new Date()));

    //             return (
    //                 <div key={index}
    //                 className="detailTicketBoxDetail row no-gutters">
    //                 <div
    //                     className="detailTicketBox2Detail col-12">

    //                     <div className="detailTicketChild col-12">
    //                         <div className="row">
    //                             <div className="col-4">
    //                                 <p>Mã đơn hàng: : 3485970104 </p>
    //                             </div>
    //                             <div className="col-4">
    //                                 <p>Thời gian: (thanh toán?) : 
    //                                 {this.formatter.format(Date.parse(item.purchaseDay))} 
    //                                 </p>
    //                                 <p>Temp: {item.status}</p>
    //                             </div>
    //                             <div className="col-4">
    //                                 <p className="pushRight">Thành công</p>
    //                             </div>
    //                         </div>
    //                         <div className="row">
    //                             <div className="col-6">
    //                                 <p>Số tiền thanh toán: {item.totalPayment}</p>
    //                             </div>
    //                             <div className="col-6">
    //                                 <p className="pushRight2">Xem chi tiết</p>
    //                                 {/* <Link to={{
    //                                             pathname: `/userProfile/myOrder/${item.id}`
    //                                         }}>
    //                                             <p className="pushRight2">
    //                                                 Xem chi tiết
    //                                         </p>
    //                                 </Link> */}
    //                             </div>
    //                         </div>
    //                     </div>

    //                     <div style={{ margin: "30px" }} className="row no-gutters">
    //                         <div
    //                             className="col-3">
    //                             <img className="detailImg" src={testImg} alt="FAIL TO LOAD" />
    //                         </div>
    //                         <div
    //                             style={{ marginLeft: "20px" }}
    //                             className="col">
    //                             <div className="row">
    //                             <div className="col"><span className="nameDetail">{item.ticketTypeName}</span></div>
    //                             </div>
    //                             <div className="row">
    //                                 <div className="col-3"><span className="ticketTypeDetail">Loại vé: </span></div>
    //                                 <div className="col"><span className="ticketTypeDetail">[Vé cứng] vé tiêu chuẩn</span></div>
    //                             </div>
    //                             <div className="row">
    //                                 <div className="col-3">
    //                                     <span className="redemDetail">
    //                                     Thời gian:  
    //                                     </span>
    //                                 </div>
    //                                 <div className="col">
    //                                     <span className="redemDetail">
    //                                     {this.formatter.format(Date.parse(item.redemptionDate))} 
    //                                     </span>
    //                                 </div>
    //                             </div>
    //                         </div>
    //                     </div>
    //                 </div>
    //             </div>

    //            );
    //         });
    //     }
    //     else if (topOrders.length === 0) {
    //         return (
    //             <p>Not Found</p>
    //         );
    //     }
    //     return result;
    // }

    // getTop3Order = async (id) =>{
    //     const {showLoader, hideLoader} = this.props;
    //     showLoader();
    //     await callApi(`order/top3/${id}`, 'GET', null)
    //     .then(res => {
    //         console.log(res);
    //         this.setState({
    //             topOrders: res.data
    //         })
    //         hideLoader();
    //     }).catch(function (error) {
    //         if (error.response) {
    //             hideLoader();
    //             console.log(error.response.data);
    //         }
    //     });
    // }

    // componentDidMount = async () => {
    //     const {showLoader, hideLoader} = this.props;
    //     showLoader();
    //     var jwtDecode = require('jwt-decode');
    //     var tokenLogin = JSON.parse(localStorage.getItem('tokenLogin'));
    //     if (tokenLogin) {
    //         var decoded = jwtDecode(tokenLogin);
    //         console.log(decoded);
    //         const id = decoded.user.userId;
    //         showLoader();
    //         await callApi(`userClient/${id}`, 'GET', null)
    //             .then(res => {
    //                 console.log(res.data.id);
    //                 this.getTop3Order(res.data.is);
    //                 //  callApi(`order/top3/${res.data.id}`, 'GET', null)
    //                 //     .then(res => {
    //                 //         console.log(res);
    //                 //         this.setState({
    //                 //             topOrders: res.data
    //                 //         })
    //                 //         hideLoader();
    //                 //     }).catch(function (error) {
    //                 //         if (error.response) {
    //                 //             console.log(error.response.data);
    //                 //         }
    //                 //     });
    //             }).catch(function (error) {
    //                 if (error.response) {
    //                     hideLoader();
    //                     console.log(error.response.data);
    //                 }
    //             });
    //     }
    // }

    render() {
        const { loggedUser } = this.props;
        // console.log(this.state.topOrders);
        return (
            // <div
            //                     className="datepickerBtn"
            //                     onClick={() => this.setState({ open: !this.state.open })}
            //                     aria-controls="example-collapse-text"
            //                     aria-expanded={this.state.open}
            //                 >


            //             </div>
            //     <Collapse in={this.state.open}>
            //     <div
            //         id="example-collapse-text">

            //     </div>
            // </Collapse>
            <div
                className="col">
                <div className="rightBoxUserDetail">
                    <div
                        style={{ padding: "30px" }} >
                        <div
                         onClick={() => this.setState({ open: !this.state.open })}
                         aria-controls="example-collapse-text"
                         aria-expanded={this.state.open}
                        className="labelPointer row">
                            <div
                                className="col-8">
                                <div id="inline">
                                    <div className="bulletListCustome"></div>
                                    <div className="content">Thông tin tài khoản </div>
                                </div>
                            </div>

                            <div className="col-4">
                                <div onClick={this.triggerUpdateUserPart} className="UpdateDetail1" >
                                    <Link className="UpdateDetail1" to="/userProfile/ediProfile">Chỉnh sửa</Link>
                                </div>
                            </div>
                        </div>
                        <Collapse in={this.state.open}>
                            <div
                                id="example-collapse-text">
                                <div className="row">
                                    <div className="col-12">
                                        <div className="row">
                                            <div className="col-3">
                                                <span className="detail1">Họ tên:
                                        </span>
                                            </div>
                                            <div className="col">
                                                <span className="detail2">
                                                    {loggedUser.firstName} {loggedUser.lastName}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="row">
                                            <div className="col-3">
                                                <span className="detail1">Email:

                                        </span>
                                            </div>
                                            <div className="col">
                                                <span className="detail2">
                                                    {loggedUser.mail}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="row">
                                            <div className="col-3">
                                                <span className="detail1">Điện thoại:
                                        </span>
                                            </div>
                                            <div className="col">
                                                <span className="detail2">
                                                    {loggedUser.phoneNumber}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Collapse>
                    </div>
                </div>

                {/* item */}

                <div style={{ marginTop: "30px" }} className="rightBoxUserDetail2">
                    <div
                        style={{ padding: "30px" }} >
                        <div 
                        onClick={() => this.setState({ open2: !this.state.open2 })}
                        aria-controls="example-collapse-text2"
                        aria-expanded={this.state.open2}
                        className="labelPointer row">
                            <div className="col-8">
                                <div id="inline">
                                    <div className="bulletListCustome"></div>
                                    <div className="content">Đặt chỗ gần đây</div>
                                </div>
                            </div>
                            <div className="col-4">
                                <div className="UpdateDetail1" ><Link className="UpdateDetail1" to="/userProfile/myOrders">Xem tất cả</Link></div>
                            </div>
                        </div>
                        <Collapse in={this.state.open2}>
                            <div id="example-collapse-text2">
                                <TopOrders />
                            </div>
                        </Collapse>
                    </div>
                </div>
                {/* end */}
            </div>

        );
    }

}

// export default UserInformation;
const mapStateToProps = state => {
    return {
        loggedUser: state.User
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

export default connect(mapStateToProps, mapDispatchToProps)(UserInformation);