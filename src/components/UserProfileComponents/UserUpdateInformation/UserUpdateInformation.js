import React, { Component } from 'react';
import { connect } from 'react-redux';
import callApi from '../../../config/utils/apiCaller';
import { getUserLogin, showLoader, hideLoader } from '../../../actions/index';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import * as regex from '../../../constants/Regex';
import './UserUpdateInformation.css'
import DatePicker, { registerLocale } from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import vi from "date-fns/locale/vi";
import { format } from 'date-fns';
registerLocale("vi", vi);

function FormError(props) {
    if (props.isHidden) { return null; }
    return (
        <div style={{ color: "red", position: 'absolute' }} className="form-warning">
            {props.errorMessage}
        </div>
    )
}

class UserUpdateInformation extends Component {

    constructor(props) {
        super(props);
        const { loggedUser } = this.props;
        this.state = {
            email: {
                value: '',
                isInputValid: false,
                errorMessage: ''
            },
            password: {
                value: '',
                isInputValid: false,
                errorMessage: ''
            },
            RePassword: {
                value: '',
                isInputValid: false,
                errorMessage: ''
            },
            lastName: {
                value: '',
                isInputValid: true,
                errorMessage: ''
            },
            phoneNumber: {
                value: '',
                isInputValid: true,
                errorMessage: ''
            },
            myfirstName: {
                value: '',
                isInputValid: true,
                errorMessage: ''
            },
            dob: {
                value: '',
                isInputValid: true,
                errorMessage: ''
            },
            // startDate: this.convertDateToLocalVN(loggedUser.dob),
            // startDate: new Date("2014/02/08"),
        }
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
            case "email":
                // regexp = /^([a-zA-Z0-9_\-.]+)@([a-zA-Z0-9_\-.]+).([a-zA-Z]{2,5})$/;
                regexp = regex.EMAIL;
                checkingResult = regexp.exec(checkingText);
                if (checkingResult !== null) {
                    return {
                        isInputValid: true,
                        errorMessage: ''
                    };
                } else {
                    return {
                        isInputValid: false,
                        errorMessage: 'Email có dạng abc@xyz.ghi(.xnh)'
                    };
                }
            case "myfirstName":
                regexp = regex.FIRST_NAME;
                checkingResult = regexp.exec(checkingText);
                if (checkingResult !== null || this.state.myfirstName.value === '') {
                    return {
                        isInputValid: true,
                        errorMessage: ''
                    };
                } else {
                    return {
                        isInputValid: false,
                        errorMessage: 'không chứa khoảng trắng ở đầu và cuối!'
                    };
                }
            case "lastName":
                // regexp = /^[^\s].+[^\s]$/;
                regexp = regex.LAST_NAME;
                checkingResult = regexp.exec(checkingText);
                if (checkingResult !== null || this.state.lastName.value === '') {
                    return {
                        isInputValid: true,
                        errorMessage: ''
                    };
                } else {
                    return {
                        isInputValid: false,
                        errorMessage: 'không chứa khoảng trắng ở đầu và cuối!'
                    };
                }
            case "dob":
                regexp = regex.DATE_OF_BIRTH;
                checkingResult = regexp.exec(checkingText.toString());
                if (checkingResult !== null || this.state.dob.value === '') {
                    // if (true) {
                    return {
                        isInputValid: true,
                        errorMessage: ''
                    };
                } else {
                    return {
                        isInputValid: false,
                        errorMessage: 'Không đúng định dạng'
                    };
                }
            case "phoneNumber":
                // regexp = /^\d{10,11}$/;
                regexp = regex.PHONE_NUMBER;
                checkingResult = regexp.exec(checkingText);
                if (checkingResult !== null || this.state.phoneNumber.value === '') {
                    return {
                        isInputValid: true,
                        errorMessage: ''
                    };
                } else {
                    return {
                        isInputValid: false,
                        errorMessage: 'Số điện thoại chứa 10-11 số'
                    };
                }
            default:
                return null;
        }
    }

    handleInputValidation = event => {
        const { check } = this.state;
        const { name } = event.target;
        const { isInputValid, errorMessage } = this.validateInput(name, this.state[name].value);
        const newState = { ...this.state[name] }; /* dummy object */
        newState.isInputValid = isInputValid;
        newState.errorMessage = errorMessage;
        // console.log(check);
        if (name === "dob" && check === false) {
            this.setState({
                check: true
            })
            // console.log(check);
        } else if (name === "dob" && check === true) {
            this.setState({
                check: false
            })
        }
        this.setState({
            [name]: newState,
        })
        // console.log(check);
    }

    updateUserDetail = () => {
        const { dob, myfirstName, lastName, phoneNumber } = this.state;
        const { loggedUser } = this.props;
        const id = loggedUser.id;
        if (myfirstName.value === '' && lastName.value === '' &&
            phoneNumber.value === '' && dob.value === '') {
            toast.error('Vui lòng điền thông tin bạn muốn thay đổi', {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        } else if (lastName.isInputValid === false) {
            toast.error('Không chứa kí tự đặc biệt!', {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        } else if (myfirstName.isInputValid === false) {
            toast.error('Không chứa kí tự đặc biệt!', {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        } else if (phoneNumber.isInputValid === false) {
            toast.error('Số điện thoại chứa 10-11 số!', {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        } else if (dob.isInputValid === false) {
            toast.error('Không đúng định dạng!', {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
        else {
            this.callAPIChangeUserInfor(id);
            // id, mail, password, firstName, lastName, dob, phoneNumber, status, roleKey, userType
            // callApi(`userClient/${id}`, 'PUT',
            //     {
            //         firstName: myfirstName.value !== '' ? myfirstName.value : loggedUser.firstName,
            //         lastName: lastName.value !== '' ? lastName.value : loggedUser.lastName,
            //         dob: dob.value ? dob.value !== '' : loggedUser.dob,
            //         phoneNumber: phoneNumber.value !== '' ? phoneNumber.value : loggedUser.phoneNumber,
            //     })
            //     .then(res => {
            //         console.log(res);
            //         this.props.fetchUserDetail(res.data);
            //         toast.success('Thay đổi thông tin thành công!', {
            //             position: "bottom-right",
            //             autoClose: 5000,
            //             hideProgressBar: false,
            //             closeOnClick: true,
            //             pauseOnHover: true,
            //             draggable: true,
            //             progress: undefined,
            //         });
            //     }).catch(function (error) {
            //         if (error.response) {
            //             console.log(error.response.data);
            //         }
            //     });
        }
    }

    callAPIChangeUserInfor = async (id) => {
        const { dob, myfirstName, lastName, phoneNumber } = this.state;
        const { loggedUser, showLoader, hideLoader } = this.props;
        // console.log(dob.value);
        showLoader();
        await callApi(`userClient/${id}`, 'PUT',
            {
                firstName: myfirstName.value !== '' ? myfirstName.value : loggedUser.firstName,
                lastName: lastName.value !== '' ? lastName.value : loggedUser.lastName,
                dob: dob.value !== '' ? dob.value : loggedUser.dob,
                phoneNumber: phoneNumber.value !== '' ? phoneNumber.value : loggedUser.phoneNumber,
            })
            .then(res => {
                // console.log(res);
                this.props.fetchUserDetail(res.data);
                hideLoader();
                toast.success('Thay đổi thông tin thành công!', {
                    position: "bottom-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
            }).catch(function (error) {
                if (error.response) {
                    hideLoader();
                    console.log(error.response.data);
                }
            });
    }
    handleChange = date => {
        this.setState({
            startDate: date
        });
    }

    convertDateToLocalVN = (date) => {
        if (date !== undefined) {
            return this.formatter.format(Date.parse(date));
        }
    }

    formatter = new Intl.DateTimeFormat("vi-VN", {
        year: "numeric",
        month: "long",
        day: "2-digit",
    });

    render() {
        const { dob, myfirstName, lastName, phoneNumber, startDate } = this.state;
        const { loggedUser } = this.props;
        // console.log(loggedUser.dob);
        // console.log(this.convertDateToLocalVN(loggedUser.dob));
        // console.log(new Date())
        // console.log(format(new Date(), 'yyyy/MM/dd'))


        // console.log(myfirstName.value);
        // console.log(lastName.value);
        // console.log(phoneNumber.value);
        // console.log(dob.value);
        // console.log(lastName.isInputValid);
        return (
            <div
                className="col">
                {/* <form
                onSubmit={this.updateUserDetail}
                > */}
                <ToastContainer />
                {/* <div className="rightBoxUserDetail">
                    <div style={{ padding: "30px" }} >
                        <div className="row">
                            <div className="col-12">
                                <div id="inline">
                                    <div className="bulletListCustome"></div>
                                    <div className="content">Chỉnh sửa tài khoản</div>
                                </div>
                                <div className="col-12">
                                    <p className="attention">Thông tin này sẽ được tự động nhập vào đơn hàng của bạn. Thông tin của bạn sẽ được mã hoá và không chia sẻ với bên thứ 3</p>
                                </div>
                                <div className="mrt-30 col-12">
                                    <div className="row">
    
                                        <div className="col">
                                            <div className="wrap-input100">
                                                <input
                                                    className="input100"
                                                    type="text"
                                                    name="lastName"
                                                    onChange={this.handleInput}
                                                    onBlur={this.handleInputValidation}
                                                    placeholder={loggedUser.lastName}

                                                />
                                                <span className="focus-input100"></span>
                                                <span className="label-input100">Họ</span>
                                            </div>
                                            <FormError
                                                type="lastName"
                                                isHidden={this.state.lastName.isInputValid}
                                                errorMessage={this.state.lastName.errorMessage} />
                                        </div>
                                        <div className="col">
                                            <div className="wrap-input100">
                                                <input
                                                    className="input100"

                                                    ref={(input) => { this.myfirstName = input; }}
                                                    type="text"
                                                    name="myfirstName"
                                                    onChange={this.handleInput}
                                                    onBlur={this.handleInputValidation}
                                                    placeholder={loggedUser.firstName}
                                                />

                                                <span className="focus-input100"></span>
                                                <span className="label-input100">Tên</span>

                                            </div>
                                            <FormError
                                                type="myfirstName"
                                                isHidden={this.state.myfirstName.isInputValid}
                                                errorMessage={this.state.myfirstName.errorMessage} />
                                            <br></br>
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

                                        <div className="col">
                                            <div className="wrap-input100">
                                                <input
                                                    className="input100"
d
                                                    ref={(input) => { this.phoneNumber = input; }}
                                                    type="text"
                                                    name="phoneNumber"
                                                    onChange={this.handleInput}
                                                    onBlur={this.handleInputValidation}
                                                    placeholder={loggedUser.phoneNumber}
                                                />
                                                <span className="focus-input100"></span>
                                                <span className="label-input100">Số Điện thoại</span>

                                            </div>
                                            <FormError
                                                type="phoneNumber"
                                                isHidden={this.state.phoneNumber.isInputValid}
                                                errorMessage={this.state.phoneNumber.errorMessage} />
                                        </div>
                                      
                                        <div className="col">
                                            <div onClick={this.showDate} className="wrap-input100">
                                                <input
                                                    className="input100"
                                                    ref={(input) => { this.dob = input; }}
                                                    type="date"
                                                    name="dob"
                                                    onChange={this.handleInput}
                                                    onBlur={this.handleInputValidation}
                                                    placeholder={loggedUser.dob}
                                                // required
                                                />
                                                <span className="focus-input100"></span>
                                                <span className="label-input98">Ngày sinh</span>
                                            </div>
                                            <FormError
                                                type="dob"
                                                isHidden={this.state.dob.isInputValid}
                                                errorMessage={this.state.dob.errorMessage} />
                                        </div>

                                    </div>
                                    <div className="mrt-30 row">
                                        <div className="col">
                                            <label className="cmt">Số điện thoại sử dụng để xác thực giao dịch</label>
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
                                            <button type="submit"
                                                onClick={this.updateUserDetail}
                                                className="proceedPaymentBtn">Lưu thông tin</button>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div> */}
                <div className="rightBoxUserDetail">
                    <div style={{ padding: "30px" }} >
                        <div className="row">
                            <div className="col-12">
                                <div id="inline">
                                    <div className="bulletListCustome"></div>
                                    <div className="content">Chỉnh sửa tài khoản</div>
                                </div>
                                <div className="col-12">
                                    <p className="attention">Thông tin này sẽ được tự động nhập vào đơn hàng của bạn. Thông tin của bạn sẽ được mã hoá và không chia sẻ với bên thứ 3</p>
                                </div>
                                <div className="mrt-30 col-12">
                                    <div className="row">
                                        <div className="col">
                                            <span className="labelHolder"> Tên </span><span className="turnRed">*</span>
                                            <div className="customWrap-input100">
                                                <input
                                                    className="input100"
                                                    type="text"
                                                    name="myfirstName"
                                                    onChange={this.handleInput}
                                                    onBlur={this.handleInputValidation}
                                                    placeholder={loggedUser.firstName}
                                                />
                                            </div>
                                            <label className="cmt">Như trên CMND (không dấu)</label>
                                        </div>
                                        <div className="col">
                                            <span className="labelHolder"> Họ </span><span className="turnRed">*</span>
                                            <div className="customWrap-input100">
                                                <input
                                                    className="input100"
                                                    type="text"
                                                    name="lastName"
                                                    onChange={this.handleInput}
                                                    onBlur={this.handleInputValidation}
                                                    placeholder={loggedUser.lastName}
                                                />
                                            </div>
                                            <label className="cmt">Như trên CMND (không dấu)</label>
                                        </div>
                                    </div>
                                </div>

                                <div className="mrt-30 col-12">
                                    <div className="row">

                                        <div className="col">
                                            <span className="labelHolder"> Số điện thoại </span><span className="turnRed">*</span>
                                            <div className="customWrap-input100">
                                                <input
                                                    className="input100"
                                                    type="text"
                                                    name="phoneNumber"
                                                    onChange={this.handleInput}
                                                    onBlur={this.handleInputValidation}
                                                    placeholder={loggedUser.phoneNumber}
                                                />
                                            </div>
                                            <label className="cmt">Số điện thoại sử dụng để xác thực giao dịch</label>
                                        </div>
                                        <div className="col">
                                            <label>Email</label><span className="turnRed"> *</span>
                                            <input type="text" disabled value={loggedUser.mail} className="textDisable form-control"
                                                placeholder="Họ" />
                                            <label className="cmt">(Vé của bạn sẽ được gửi về địa chỉ email trên,
                                            xin vui lòng kiểm tra kỹ thông tin.)
                                            </label>
                                        </div>
                                        {/* <div className="col">
                                            <span className="labelHolder"> Ngày sinh </span><span className="turnRed">*</span>
                                            <div onClick={this.showDate} className="customWrap-input100">
                                                <input
                                                    className="input100"
                                                    // ref={(input) => { this.dob = input; }}
                                                    type="date"
                                                    name="dob"
                                                    onChange={this.handleInput}
                                                    onBlur={this.handleInputValidation}
                                                    placeholder={loggedUser.dob}
                                                    disabled
                                                />
                                                
                                                <DatePicker
                                                    className="input100"
                                                    dateFormat="dd/MM/yyyy"
                                                    selected={this.state.startDate}
                                                    onChange={this.handleChange}
                                                    open={false}
                                                />
                                            </div>
                                            <label className="cmt">(Vé của bạn sẽ được gửi về địa chỉ email trên,
                                            xin vui lòng kiểm tra kỹ thông tin.)
                                            </label>
                                        </div> */}
                                    </div>
                                </div>
                                <div className="pdt-30 col-12">
                                    <div className="row">
                                        <div className="col-3">
                                            <button type="submit"
                                                onClick={this.updateUserDetail}
                                                className="proceedPaymentBtn">Lưu</button>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                {/* </form> */}
            </div>

        );
    }

}

// export default UserUpdateInformation;
const mapStateToProps = state => {
    return {
        loggedUser: state.User
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        fetchUserDetail: (user) => {
            dispatch(getUserLogin(user))
        },
        showLoader: () => {
            dispatch(showLoader())
        },
        hideLoader: () => {
            dispatch(hideLoader())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserUpdateInformation);