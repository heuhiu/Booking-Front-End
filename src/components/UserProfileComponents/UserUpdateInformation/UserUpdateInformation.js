import React, { Component } from 'react';
import { connect } from 'react-redux';
import callApi from '../../../config/utils/apiCaller';

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

    updateUserDetail = () => {
        const { email, firstName, lastName, phoneNumb } = this.state;
        console.log(lastName.value);
        console.log(firstName.value);
        console.log(phoneNumb.value);
        console.log(email.value);
        // callApi('city', 'GET', null)
        // .then(res => {

        // }).catch(function (error) {
        //     if (error.response) {
        //         console.log(error.response.data);
        //     }
        // });
    }
    render() {
        const { loggedUser } = this.props;
        return (
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
                                                <span className="label-input100">Email</span>
                                            </div>
                                            <FormError
                                                type="email"
                                                isHidden={this.state.email.isInputValid}
                                                errorMessage={this.state.email.errorMessage} />
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
                                            <button onClick={this.updateUserDetail} className="proceedPaymentBtn">Lưu thông tin</button>
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

// export default UserUpdateInformation;
const mapStateToProps = state => {
    return {
        loggedUser: state.User
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserUpdateInformation);