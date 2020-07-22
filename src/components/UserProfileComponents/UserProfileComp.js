import React, { Component } from 'react';
// import { connect } from 'react-redux';
import './UserProfile.css';
import Menu from '../Menu/Menu';
import Footer2 from '../Footer/Footer2/Footer2';
import testImg from '../../img/Detailpic.png'

class UserProfileComp extends Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return (
            <div className="container"
                style={{ fontFamily: 'Inter' }}>
                <div className='row '>
                    <div
                        className="col-4">
                        <div className="leftPartUserDetail">
                            <div className="outer row no-gutters">
                                <div className="inner circleCamera">
                                    <div className="CameraLogo">
                                        <svg width="62" height="53" viewBox="0 0 62 53" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M59.4173 44.875C59.4173 46.2674 58.873 47.6027 57.904 48.5873C56.9351 49.5719 55.6209 50.125 54.2506 50.125H7.75065C6.38037 50.125 5.0662 49.5719 4.09727 48.5873C3.12833 47.6027 2.58398 46.2674 2.58398 44.875V16C2.58398 14.6076 3.12833 13.2723 4.09727 12.2877C5.0662 11.3031 6.38037 10.75 7.75065 10.75H18.084L23.2507 2.875H38.7506L43.9173 10.75H54.2506C55.6209 10.75 56.9351 11.3031 57.904 12.2877C58.873 13.2723 59.4173 14.6076 59.4173 16V44.875Z" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M30.9993 39.625C36.7063 39.625 41.3327 34.924 41.3327 29.125C41.3327 23.326 36.7063 18.625 30.9993 18.625C25.2924 18.625 20.666 23.326 20.666 29.125C20.666 34.924 25.2924 39.625 30.9993 39.625Z" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <div style={{ paddingTop: "0px" }} className="outer row no-gutters">
                                <div className="inner circleCamera">
                                    <span className="detail3">Tran Duong</span>
                                </div>

                            </div>

                            <hr style={{ border: "1.5px solid #E3E3E3", borderRadius: "2px" }} />
                            <div className="row">
                                <div className="mr-20 col-12"><p>
                                    <svg width="20" height="22" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M19 21.0002V18.7779C19 17.5992 18.5259 16.4687 17.682 15.6352C16.8381 14.8017 15.6935 14.3335 14.5 14.3335H5.5C4.30653 14.3335 3.16193 14.8017 2.31802 15.6352C1.47411 16.4687 1 17.5992 1 18.7779V21.0002" stroke="#5B5B5B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M10 9.88889C12.4853 9.88889 14.5 7.89904 14.5 5.44444C14.5 2.98985 12.4853 1 10 1C7.51472 1 5.5 2.98985 5.5 5.44444C5.5 7.89904 7.51472 9.88889 10 9.88889Z" stroke="#5B5B5B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                    &nbsp; Chỉnh sửa hồ sơ</p></div>
                                <div className="mr-20 col-12"><p>
                                    <svg width="21" height="26" viewBox="0 0 21 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12.875 1H3.375C2.74511 1 2.14102 1.25022 1.69562 1.69562C1.25022 2.14102 1 2.74511 1 3.375V22.375C1 23.0049 1.25022 23.609 1.69562 24.0544C2.14102 24.4998 2.74511 24.75 3.375 24.75H17.625C18.2549 24.75 18.859 24.4998 19.3044 24.0544C19.7498 23.609 20 23.0049 20 22.375V8.125L12.875 1Z" stroke="#5B5B5B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M12.875 1V8.125H20" stroke="#5B5B5B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M15.25 14.0625H5.75" stroke="#5B5B5B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M15.25 18.8125H5.75" stroke="#5B5B5B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M8.125 9.3125H6.9375H5.75" stroke="#5B5B5B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                    &nbsp; Đặt chỗ của tôi</p></div>
                                <div className="mr-20 col-12"><p>
                                    <svg width="24" height="26" viewBox="0 0 24 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M20.2 11.7998H3.4C2.07452 11.7998 1 12.8743 1 14.1998V22.5998C1 23.9253 2.07452 24.9998 3.4 24.9998H20.2C21.5255 24.9998 22.6 23.9253 22.6 22.5998V14.1998C22.6 12.8743 21.5255 11.7998 20.2 11.7998Z" stroke="#5B5B5B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M5.80078 11.8V7C5.80078 5.4087 6.43292 3.88258 7.55814 2.75736C8.68336 1.63214 10.2095 1 11.8008 1C13.3921 1 14.9182 1.63214 16.0434 2.75736C17.1686 3.88258 17.8008 5.4087 17.8008 7V11.8" stroke="#5B5B5B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                     &nbsp; Đổi mật khẩu</p></div>
                            </div>
                        </div>
                    </div>

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
                                        <div className="UpdateDetail1" >Chỉnh sửa</div>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-12">
                                        <span className="detail1">Họ tên: Trần Dương</span>
                                    </div>
                                    <div className="col-12">
                                        <span className="detail1">Email: duongtase05454@fpt.edu.vn</span>
                                    </div>
                                    <div className="col-12">
                                        <span className="detail1">Điện thoại: (+84)23 123 1231</span>
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

                </div>
            </div>
        );
    }

}

export default UserProfileComp;
