import React, { Component } from 'react';
import { connect } from 'react-redux';
import callApi from '../../../config/utils/apiCaller';
import { getUserLogin, showLoader, hideLoader } from '../../../actions/index';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import * as regex from '../../../constants/Regex';

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
            }
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
            case "password":
                // regexp = /^(?!.* )(?=.*\d)(?=.*[A-Z]).{8,20}$/;
                regexp = regex.PASSWORD;
                checkingResult = regexp.exec(checkingText);
                if (checkingResult !== null) {
                    return {
                        isInputValid: true,
                        errorMessage: ''
                    };
                } else {
                    return {
                        isInputValid: false,
                        errorMessage: 'Mật khẩu phải từ 8-20 kí tự, bao gồm số và chữ, có ít nhất 1 chữ cái viết hoa'
                    };
                }
            case "RePassword":
                const { password } = this.state;
                if (checkingText === password.value && checkingText !== null) {
                    return {
                        isInputValid: true,
                        errorMessage: ''
                    };
                }
                if (checkingText !== password.value) {
                    return {
                        isInputValid: false,
                        errorMessage: 'Mật khẩu không khớp'
                    };
                }
                else {
                    return {
                        isInputValid: false,
                        errorMessage: 'Mật khẩu không khớp'
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
                        errorMessage: 'Có ísst nhất 3 kí tự và không có khoảng trắng ở đầu và cuối'
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
                        errorMessage: 'Có ít nhất 3 kí tự và không có khoảng trắng ở đầu và cuối'
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
        // console.log(id);
        // console.log(myfirstName.value);
        // console.log(lastName.value);
        // console.log(phoneNumber.value);
        // console.log(dob.value);
        if (myfirstName.value === '' && lastName.value === '' &&
            phoneNumber.value === '' && dob.value === '') {
            toast.error('Tên Có ít nhất 3 kí tự và không có khoảng trắng ở đầu và cuối', {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        } else if (lastName.isInputValid === false) {
            toast.error('Họ có ít nhất 3 kí tự và không có khoảng trắng ở đầu và cuối', {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        } else if (myfirstName.isInputValid === false) {
            toast.error('Tên có ít nhất 3 kí tự và khác số!', {
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
                dob:  dob.value !== '' ? dob.value : loggedUser.dob,
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

    render() {
        const { dob, myfirstName, lastName, phoneNumber } = this.state;
        const { loggedUser } = this.props;
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
                                                // required

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
                                                    // type="text"
                                                    // name="email"
                                                    // required
                                                    ref={(input) => { this.myfirstName = input; }}
                                                    type="text"
                                                    name="myfirstName"
                                                    onChange={this.handleInput}
                                                    onBlur={this.handleInputValidation}
                                                // required
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
                                                    // type="text"
                                                    // name="email"
                                                    // required
                                                    ref={(input) => { this.phoneNumber = input; }}
                                                    type="text"
                                                    name="phoneNumber"
                                                    onChange={this.handleInput}
                                                    onBlur={this.handleInputValidation}
                                                // required
                                                />
                                                <span className="focus-input100"></span>
                                                <span className="label-input100">Số Điện thoại</span>

                                            </div>
                                            <FormError
                                                type="phoneNumber"
                                                isHidden={this.state.phoneNumber.isInputValid}
                                                errorMessage={this.state.phoneNumber.errorMessage} />
                                        </div>
                                        {/* <div className="col">
                                                                <label>Địa chỉ Email</label>
                                                                <input type="text"
                                                                    disabled
                                                                    value={loggedUser.mail}
                                                                    className="inputPayment form-control" placeholder="Email" />
                                                            </div> */}
                                        {/* <div className="col">
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
                                                <span className="label-input100">Email</span>
                                            </div>
                                            <FormError
                                                type="email"
                                                isHidden={this.state.email.isInputValid}
                                                errorMessage={this.state.email.errorMessage} />
                                        </div> */}
                                        <div className="col">
                                            <div onClick={this.showDate} className="wrap-input100">
                                                <input
                                                    // style={{visibility: this.state.check ? "hidden" : "visible"}}
                                                    className="input100"
                                                    ref={(input) => { this.dob = input; }}
                                                    // type={this.state.check ? "date" : "text"}
                                                    type="date"
                                                    name="dob"

                                                    onChange={this.handleInput}
                                                    onBlur={this.handleInputValidation}
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