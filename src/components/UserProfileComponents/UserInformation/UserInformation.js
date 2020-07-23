import React, { Component } from 'react';
import { connect } from 'react-redux';
import testImg from '../../../img/Detailpic.png'
class UserInformation extends Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        const {loggedUser} = this.props;
        return (
            <div
                className="col">
                <div className="rightBoxUserDetail">
                    <div style={{ padding: "30px" }} >
                        <div className="row">
                            <div className="col-6">
                                <div id="inline">
                                    <div className="bulletListCustome"></div>
                                    <div className="content">Thông tin tài khoản</div>
                                </div>
                            </div>

                            <div className="col-6">
                                <div onClick={this.triggerUpdateUserPart} className="UpdateDetail1" >Chỉnh sửa</div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-12">
                                <div className="row">
                                    <div className="col-3">
                                    <span className="detail1">Họ tên: 
                                
                                </span>
                                    </div>
                                    <div className="col">
                                    <span className="detail1"> 
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
                                    <span className="detail1">
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
                                    <span className="detail1">
                                {loggedUser.phoneNumber}
                                </span>
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

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserInformation);