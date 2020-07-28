import React, { Component } from 'react';
import { connect } from 'react-redux';
import './UserProfile.css';
import Menu from '../Menu/Menu';
import Footer2 from '../Footer/Footer2/Footer2';
import testImg from '../../img/Detailpic.png';
import callApi from '../../config/utils/apiCaller'
import { showLoader, hideLoader } from '../../actions/index';


function FormError(props) {
    if (props.isHidden) { return null; }
    return (
        <div style={{ color: "red", position: 'absolute' }} className="form-warning">
            {props.errorMessage}
        </div>
    )
}
class UserProfileComp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: {
                value: '',
                isInputValid: false,
                errorMessage: ''
            },
            lastName: {
                value: '',
                isInputValid: false,
                errorMessage: ''
            },
            phoneNumb: {
                value: '',
                isInputValid: false,
                errorMessage: ''
            },
            email: {
                value: '',
                isInputValid: false,
                errorMessage: ''
            }
        }
    }
    triggerUpdateUserPart = () => {
        this.targetElement.click();
    }
    handleInput = event => {
        const { name, value } = event.target;
        const newState = { ...this.state[name] }; /* dummy object */
        newState.value = value;
        this.setState({ [name]: newState });
    }
    componentDidMount = () => {
        window.scrollTo(0, 0)
    }
    validateInput = (type, checkingText) => {
        var regexp = '';
        var checkingResult = '';
        switch (type) {
            case "firstName":
                regexp = /^^[^\s].+[^\s]$/;
                checkingResult = regexp.exec(checkingText);
                if (checkingResult !== null) {
                    return {
                        isInputValid: true,
                        errorMessage: ''
                    };
                } else {
                    return {
                        isInputValid: false,
                        errorMessage: 'firstName format wrong'
                    };
                }
            case "lastName":
                regexp = /^^[^\s].+[^\s]$/;
                checkingResult = regexp.exec(checkingText);
                if (checkingResult !== null) {
                    return {
                        isInputValid: true,
                        errorMessage: ''
                    };
                } else {
                    return {
                        isInputValid: false,
                        errorMessage: 'lastName not null'
                    };
                }
            case "phoneNumb":
                regexp = /^\d{10,11}$/;
                checkingResult = regexp.exec(checkingText);
                if (checkingResult !== null) {
                    return {
                        isInputValid: true,
                        errorMessage: ''
                    };
                } else {
                    return {
                        isInputValid: false,
                        errorMessage: 'phoneNumb format wrong'
                    };
                }
            case "email":
                regexp = /^([a-zA-Z0-9_\-.]+)@([a-zA-Z0-9_\-.]+).([a-zA-Z]{2,5})$/;
                checkingResult = regexp.exec(checkingText);
                if (checkingResult !== null) {
                    return {
                        isInputValid: true,
                        errorMessage: ''
                    };
                } else {
                    return {
                        isInputValid: false,
                        errorMessage: 'email not null'
                    };
                }
            default:
                return null;
        }
    }

    handleInputValidation = event => {
        const { name } = event.target;
        const { isInputValid, errorMessage } = this.validateInput(name, this.state[name].value);
        const newState = { ...this.state[name] }; /* dummy object */
        newState.isInputValid = isInputValid;
        newState.errorMessage = errorMessage;
        this.setState({ [name]: newState })
    }

    updateUserDetail = async () => {
        const { email, firstName, lastName, phoneNumb } = this.state;
        const {hideLoader, showLoader} = this.props;
        
        await callApi('city', 'GET', null)
        .then(res => {
            
        }).catch(function (error) {
            if (error.response) {
                console.log(error.response.data);
            }
        });
    }

    render() {

        const { email, firstName, lastName, phoneNumb } = this.state;
        const { loggedUser } = this.props;
        console.log(email.value);
        console.log(firstName.value);
        console.log(lastName.value);
        console.log(phoneNumb.value);
        return (
            <div className="container"
                style={{ fontFamily: 'Inter' }}>
                <div className='row '>
                    {/* Left part */}
                    {/* <div
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
                                    <span className="detail3">{loggedUser.firstName} {loggedUser.lastName}</span>
                                </div>
                            </div>
                            <hr style={{ border: "1.5px solid #E3E3E3", borderRadius: "2px" }} />


                            <div className="mr-20 nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                                <a className={`nav-link active `} id="v-pills-home-tab" data-toggle="pill" href="#v-pills-detail" role="tab" aria-controls="v-pills-detail" aria-selected="true">
                                    <p>
                                        <svg width="20" height="22" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M19 21.0002V18.7779C19 17.5992 18.5259 16.4687 17.682 15.6352C16.8381 14.8017 15.6935 14.3335 14.5 14.3335H5.5C4.30653 14.3335 3.16193 14.8017 2.31802 15.6352C1.47411 16.4687 1 17.5992 1 18.7779V21.0002" stroke="#5B5B5B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M10 9.88889C12.4853 9.88889 14.5 7.89904 14.5 5.44444C14.5 2.98985 12.4853 1 10 1C7.51472 1 5.5 2.98985 5.5 5.44444C5.5 7.89904 7.51472 9.88889 10 9.88889Z" stroke="#5B5B5B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                        &nbsp; Thông tin tài khoản
                                    </p>
                                </a>
                                <a className={`nav-link `} id="v-pills-home-tab" data-toggle="pill" href="#v-pills-home" role="tab" aria-controls="v-pills-home" aria-selected="true">
                                    <p ref={target => this.targetElement = target}>
                                        <svg width="20" height="22" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M19 21.0002V18.7779C19 17.5992 18.5259 16.4687 17.682 15.6352C16.8381 14.8017 15.6935 14.3335 14.5 14.3335H5.5C4.30653 14.3335 3.16193 14.8017 2.31802 15.6352C1.47411 16.4687 1 17.5992 1 18.7779V21.0002" stroke="#5B5B5B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M10 9.88889C12.4853 9.88889 14.5 7.89904 14.5 5.44444C14.5 2.98985 12.4853 1 10 1C7.51472 1 5.5 2.98985 5.5 5.44444C5.5 7.89904 7.51472 9.88889 10 9.88889Z" stroke="#5B5B5B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                        &nbsp; Chỉnh sửa hồ sơ
                                    </p>
                                </a>
                                <a className={`nav-link `} id="v-pills-profile-tab" data-toggle="pill" href="#v-pills-profile" role="tab" aria-controls="v-pills-profile" aria-selected="false">
                                    <p>
                                        <svg width="21" height="26" viewBox="0 0 21 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M12.875 1H3.375C2.74511 1 2.14102 1.25022 1.69562 1.69562C1.25022 2.14102 1 2.74511 1 3.375V22.375C1 23.0049 1.25022 23.609 1.69562 24.0544C2.14102 24.4998 2.74511 24.75 3.375 24.75H17.625C18.2549 24.75 18.859 24.4998 19.3044 24.0544C19.7498 23.609 20 23.0049 20 22.375V8.125L12.875 1Z" stroke="#5B5B5B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M12.875 1V8.125H20" stroke="#5B5B5B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M15.25 14.0625H5.75" stroke="#5B5B5B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M15.25 18.8125H5.75" stroke="#5B5B5B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M8.125 9.3125H6.9375H5.75" stroke="#5B5B5B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                        &nbsp; Đặt chỗ của tôi
                                    </p>
                                </a>
                                <a className={`nav-link  `} id="v-pills-messages-tab" data-toggle="pill" href="#v-pills-messages" role="tab" aria-controls="v-pills-messages" aria-selected="false">
                                    <p>
                                        <svg width="24" height="26" viewBox="0 0 24 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M20.2 11.7998H3.4C2.07452 11.7998 1 12.8743 1 14.1998V22.5998C1 23.9253 2.07452 24.9998 3.4 24.9998H20.2C21.5255 24.9998 22.6 23.9253 22.6 22.5998V14.1998C22.6 12.8743 21.5255 11.7998 20.2 11.7998Z" stroke="#5B5B5B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M5.80078 11.8V7C5.80078 5.4087 6.43292 3.88258 7.55814 2.75736C8.68336 1.63214 10.2095 1 11.8008 1C13.3921 1 14.9182 1.63214 16.0434 2.75736C17.1686 3.88258 17.8008 5.4087 17.8008 7V11.8" stroke="#5B5B5B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                        &nbsp; Đổi mật khẩu
                                     </p>
                                </a>
                            </div>

                        </div>
                    </div>
                   */}
                    {/* Right part */}

                    <div className={`col`}>
                        <div className="tab-content" id="v-pills-tabContent">
                            <div className="tab-pane fade show active" id="v-pills-detail" role="tabpanel" aria-labelledby="v-pills-detail-tab">
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
                                                    <span className="detail1">Họ tên: {loggedUser.firstName} {loggedUser.lastName}</span>
                                                </div>
                                                <div className="col-12">
                                                    <span className="detail1">Email: {loggedUser.mail}</span>
                                                </div>
                                                <div className="col-12">
                                                    <span className="detail1">Điện thoại: {loggedUser.phoneNumber}</span>
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

                            </div>
                            <div className="tab-pane fade show" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">
                                <div
                                    className="col">
                                    <div className="rightBoxUserDetail">
                                        <div style={{ padding: "30px" }} >
                                            <div className="row">
                                                <div className="col-12">
                                                    <div id="inline">
                                                        <div className="bulletListCustome"></div>
                                                        <div className="content">Chỉnh sửa tài khoản</div>
                                                    </div>
                                                    <div className="col-12">
                                                        <p className="attention">Chúng tôi sẽ thông báo mọi thay đổi về đơn hàng cho bạn</p>
                                                    </div>
                                                    <div className="mrt-30 col-12">
                                                        <div className="row">
                                                            {/* <div className="col">
                                                                <label>Họ</label>
                                                                <input type="text" disabled value={loggedUser.lastName} className="inputPayment form-control"
                                                                    placeholder="Họ" />

                                                            </div> */}
                                                            <div className="col">
                                                                <div className="wrap-input100">
                                                                    <input
                                                                        className="input100"
                                                                        // ref={(input) => { this.mailInput = input; }}
                                                                        type="text"
                                                                        name="lastName"
                                                                        onChange={this.handleInput}
                                                                        onBlur={this.handleInputValidation}
                                                                        required

                                                                    />
                                                                    <span className="focus-input100"></span>
                                                                    <span className="label-input100">Họ</span>
                                                                </div>
                                                                <FormError
                                                                    type="lastName"
                                                                    isHidden={this.state.lastName.isInputValid}
                                                                    errorMessage={this.state.lastName.errorMessage} />
                                                            </div>


                                                            {/* <div className="col">
                                                                <label>Tên</label>
                                                                <input type="text"
                                                                    disabled
                                                                    value={loggedUser.firstName ? loggedUser.firstName : ""}
                                                                    className="inputPayment form-control" placeholder="Tên" />
                                                            </div> */}
                                                            <div className="col">
                                                                <div className="wrap-input100">
                                                                    <input
                                                                        className="input100"
                                                                        ref={(input) => { this.mailInput = input; }}
                                                                        type="text"
                                                                        name="firstName"
                                                                        onChange={this.handleInput}
                                                                        onBlur={this.handleInputValidation}
                                                                        required
                                                                    // disabled
                                                                    // value={loggedUser.firstName ? loggedUser.firstName : ""}
                                                                    />
                                                                    <span className="focus-input100"></span>
                                                                    <span className="label-input100">Tên</span>
                                                                </div>
                                                                <FormError
                                                                    type="firstName"
                                                                    isHidden={this.state.firstName.isInputValid}
                                                                    errorMessage={this.state.firstName.errorMessage} />
                                                            </div>
                                                        </div>
                                                        <div className="mrt-30 row">
                                                            <div className="col">
                                                                <label className="cmt">Như trên CMND (không dấu)</label>
                                                            </div>
                                                            <div className="col">
                                                                <label className="cmt">Như trên CMND (không dấu)</label>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="mrt-30 col-12">
                                                        <div className="row">
                                                            {/* <div className="col">
                                                                <label>Số điện thoại</label>
                                                                <input type="number"
                                                                    disabled
                                                                    value={loggedUser.phoneNumber}
                                                                    className="inputPayment form-control" />
                                                            </div> */}
                                                            <div className="col">
                                                                <div className="wrap-input100">
                                                                    <input
                                                                        className="input100"
                                                                        ref={(input) => { this.mailInput = input; }}
                                                                        type="text"
                                                                        name="phoneNumb"
                                                                        onChange={this.handleInput}
                                                                        onBlur={this.handleInputValidation}
                                                                        required

                                                                    />
                                                                    <span className="focus-input100"></span>
                                                                    <span className="label-input100">Số điện thoại xác thực</span>
                                                                </div>
                                                                <FormError
                                                                    type="phoneNumb"
                                                                    isHidden={this.state.phoneNumb.isInputValid}
                                                                    errorMessage={this.state.phoneNumb.errorMessage} />
                                                            </div>
                                                            {/* <div className="col">
                                                                <label>Địa chỉ Email</label>
                                                                <input type="text"
                                                                    disabled
                                                                    value={loggedUser.mail}
                                                                    className="inputPayment form-control" placeholder="Email" />
                                                            </div> */}
                                                            <div className="col">
                                                                <div className="wrap-input100">
                                                                    <input
                                                                        className="input100"
                                                                        ref={(input) => { this.mailInput = input; }}
                                                                        type="text"
                                                                        name="email"
                                                                        onChange={this.handleInput}
                                                                        onBlur={this.handleInputValidation}
                                                                        required
                                                                    />
                                                                    <span className="focus-input100"></span>
                                                                    <span className="label-input100">{loggedUser.mail}</span>
                                                                </div>
                                                                <FormError
                                                                    type="email"
                                                                    isHidden={this.state.email.isInputValid}
                                                                    errorMessage={this.state.email.errorMessage} />
                                                            </div>
                                                        </div>
                                                        <div className="mrt-30 row">
                                                            <div className="col">
                                                                <label className="cmt">Số điện thoại xác thực</label>
                                                            </div>
                                                            <div className="col">
                                                                <label className="cmt">(Vé của bạn sẽ được gửi về địa chỉ email trên,
                                                                xin vui lòng kiểm tra kỹ thông tin.)
                                                                </label>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="pdt-30 col-12">
                                                        <div className="row">
                                                            <div className="col">
                                                            </div>
                                                            <div className="col">
                                                                <button onClick={this.updateUserDetail} className="proceedPaymentBtn">Lưu thông tin</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                          
                            <div className="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">
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
                                                    <span className="detail1">Họ tên: {loggedUser.firstName} {loggedUser.lastName}</span>
                                                </div>
                                                <div className="col-12">
                                                    <span className="detail1">Email: {loggedUser.mail}</span>
                                                </div>
                                                <div className="col-12">
                                                    <span className="detail1">Điện thoại: {loggedUser.phoneNumber}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div className="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab">Content 3</div>
                        </div>
                    </div>
                </div>
            </div>
      
      );
    }

}

// export default UserProfileComp;
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

export default connect(mapStateToProps, mapDispatchToProps)(UserProfileComp);