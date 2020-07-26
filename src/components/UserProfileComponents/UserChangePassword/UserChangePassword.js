import React, { Component } from 'react';
import { connect } from 'react-redux';
import testImg from '../../../img/Detailpic.png'

function FormError(props) {
    if (props.isHidden) { return null; }
    return (
        <div style={{ color: "red", position: 'absolute' }} className="form-warning">
            {props.errorMessage}
        </div>
    )
}

class UserChangePassword extends Component {

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
                isInputValid: false,
                errorMessage: ''
            },
            phoneNumber: {
                value: '',
                isInputValid: false,
                errorMessage: ''
            },
            myfirstName: {
                value: '',
                isInputValid: false,
                errorMessage: ''
            },
            dob: {
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

    validateInput = (type, checkingText) => {
        var regexp = '';
        var checkingResult = '';
        switch (type) {
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
                        errorMessage: 'Email có dạng abc@xyz.ghi(.xnh)'
                    };
                }
            case "password":
                regexp = /^(?!.* )(?=.*\d)(?=.*[A-Z]).{8,20}$/;
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
                regexp = /^[^\s].+[^\s]$/;
                checkingResult = regexp.exec(checkingText);
                if (checkingResult !== null) {
                    return {
                        isInputValid: true,
                        errorMessage: ''
                    };
                } else {
                    return {
                        isInputValid: false,
                        errorMessage: 'Không có kí tự trắng ở đầu và cuối'
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
                        errorMessage: 'Không có kí tự trắng ở đầu và cuối'
                    };
                }
            case "dob":
                regexp = /^(?:(?:(?:(?:(?:[1-9]\d)(?:0[48]|[2468][048]|[13579][26])|(?:(?:[2468][048]|[13579][26])00))(\/|-|\.)(?:0?2\1(?:29)))|(?:(?:[1-9]\d{3})(\/|-|\.)(?:(?:(?:0?[13578]|1[02])\2(?:31))|(?:(?:0?[13-9]|1[0-2])\2(?:29|30))|(?:(?:0?[1-9])|(?:1[0-2]))\2(?:0?[1-9]|1\d|2[0-8])))))$/;
                checkingResult = regexp.exec(checkingText.toString());
                if (checkingResult !== null) {
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
                        errorMessage: 'Số điện thoại chứa 10-11 số'
                    };
                }
            default:
                return null;
        }
    }

    toggleShow = () => {
        this.setState({
            visibility: !this.state.visibility
        });
    }

    handleInputValidation = event => {
        const { check } = this.state;
        const { name } = event.target;
        const { isInputValid, errorMessage } = this.validateInput(name, this.state[name].value);
        const newState = { ...this.state[name] }; /* dummy object */
        newState.isInputValid = isInputValid;
        newState.errorMessage = errorMessage;
        console.log(check);
        if (name === "dob" && check === false) {
            this.setState({
                check: true
            })
            console.log(check);
        } else if (name === "dob" && check === true) {
            this.setState({
                check: false
            })
        }
        this.setState({
            [name]: newState,
        })
        console.log(check);
    }
    render() {
        const { loggedUser } = this.props;
        return (
            <div
                className="col">
                <div className="rightBoxUserDetail">
                    <div style={{ padding: "30px" }} >
                        <div className="row">
                            <div className="col-6">
                                <div id="inline">
                                    <div className="bulletListCustome"></div>
                                    <div className="content">Đổi mật khẩu</div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="mrt-30 col-12">
                            <div className="row">

                                <div>
                                    <div className="wrap-input100">
                                        <input
                                            className="input100"
                                            ref={(input) => { this.pass = input; }}
                                            type={this.state.visibility ? "password" : "text"}
                                            // type="password"
                                            name="password"
                                            placeholder=" "
                                            onChange={this.handleInput}
                                            onBlur={this.handleInputValidation}
                                            required
                                        />
                                        <span className="focus-input100"></span>
                                        <span className="label-input100">Mật khẩu</span>
                                        <span
                                            onClick={this.toggleShow}
                                            style={{ marginLeft: "87%", paddingRight: "0px", cursor: "pointer" }}
                                            className="label-input99">
                                            {this.state.visibility
                                                ?
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                    <path d="M14.12 14.12C13.8454 14.4148 13.5141 14.6512 13.1462 14.8151C12.7782 14.9791 12.3809 15.0673 11.9781 15.0744C11.5753 15.0815 11.1752 15.0074 10.8016 14.8565C10.4281 14.7056 10.0887 14.4811 9.80385 14.1962C9.51897 13.9113 9.29439 13.572 9.14351 13.1984C8.99262 12.8249 8.91853 12.4247 8.92563 12.0219C8.93274 11.6191 9.02091 11.2219 9.18488 10.8539C9.34884 10.4859 9.58525 10.1547 9.88 9.88003M17.94 17.94C16.2306 19.243 14.1491 19.9649 12 20C5 20 1 12 1 12C2.24389 9.68192 3.96914 7.65663 6.06 6.06003L17.94 17.94ZM9.9 4.24002C10.5883 4.0789 11.2931 3.99836 12 4.00003C19 4.00003 23 12 23 12C22.393 13.1356 21.6691 14.2048 20.84 15.19L9.9 4.24002Z" stroke="#E3E3E3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                    <path d="M1 1L23 23" stroke="#E3E3E3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                                :
                                                <svg width="24" height="18" viewBox="0 0 24 18" fill="none">
                                                    <path d="M1 9C1 9 5 1 12 1C19 1 23 9 23 9C23 9 19 17 12 17C5 17 1 9 1 9Z" stroke="#E3E3E3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                    <path d="M12 12C13.6569 12 15 10.6569 15 9C15 7.34315 13.6569 6 12 6C10.3431 6 9 7.34315 9 9C9 10.6569 10.3431 12 12 12Z" stroke="#E3E3E3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                            }
                                        </span>

                                    </div>
                                    <FormError
                                        type="password"
                                        isHidden={this.state.password.isInputValid}
                                        errorMessage={this.state.password.errorMessage} />
                                    <br></br>
                                </div>

                            </div>
                        </div>
                        <div className="mrt-30 col-12">
                            <div className="row">

                                <div>
                                    <div className="wrap-input100">
                                        <input
                                            className="input100"
                                            ref={(input) => { this.pass = input; }}
                                            type={this.state.visibility ? "password" : "text"}
                                            // type="password"
                                            name="password"
                                            placeholder=" "
                                            onChange={this.handleInput}
                                            onBlur={this.handleInputValidation}
                                            required
                                        />
                                        <span className="focus-input100"></span>
                                        <span className="label-input100">Mật khẩu</span>
                                        <span
                                            onClick={this.toggleShow}
                                            style={{ marginLeft: "87%", paddingRight: "0px", cursor: "pointer" }}
                                            className="label-input99">
                                            {this.state.visibility
                                                ?
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                    <path d="M14.12 14.12C13.8454 14.4148 13.5141 14.6512 13.1462 14.8151C12.7782 14.9791 12.3809 15.0673 11.9781 15.0744C11.5753 15.0815 11.1752 15.0074 10.8016 14.8565C10.4281 14.7056 10.0887 14.4811 9.80385 14.1962C9.51897 13.9113 9.29439 13.572 9.14351 13.1984C8.99262 12.8249 8.91853 12.4247 8.92563 12.0219C8.93274 11.6191 9.02091 11.2219 9.18488 10.8539C9.34884 10.4859 9.58525 10.1547 9.88 9.88003M17.94 17.94C16.2306 19.243 14.1491 19.9649 12 20C5 20 1 12 1 12C2.24389 9.68192 3.96914 7.65663 6.06 6.06003L17.94 17.94ZM9.9 4.24002C10.5883 4.0789 11.2931 3.99836 12 4.00003C19 4.00003 23 12 23 12C22.393 13.1356 21.6691 14.2048 20.84 15.19L9.9 4.24002Z" stroke="#E3E3E3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                    <path d="M1 1L23 23" stroke="#E3E3E3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                                :
                                                <svg width="24" height="18" viewBox="0 0 24 18" fill="none">
                                                    <path d="M1 9C1 9 5 1 12 1C19 1 23 9 23 9C23 9 19 17 12 17C5 17 1 9 1 9Z" stroke="#E3E3E3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                    <path d="M12 12C13.6569 12 15 10.6569 15 9C15 7.34315 13.6569 6 12 6C10.3431 6 9 7.34315 9 9C9 10.6569 10.3431 12 12 12Z" stroke="#E3E3E3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                            }
                                        </span>

                                    </div>
                                    <FormError
                                        type="password"
                                        isHidden={this.state.password.isInputValid}
                                        errorMessage={this.state.password.errorMessage} />
                                    <br></br>
                                </div>


                                <div>
                                    <div className="wrap-input100">
                                        <input
                                            className="input100"
                                            ref={(input) => { this.pass = input; }}
                                            type={this.state.visibility ? "password" : "text"}
                                            // type="password"
                                            name="password"
                                            placeholder=" "
                                            onChange={this.handleInput}
                                            onBlur={this.handleInputValidation}
                                            required
                                        />
                                        <span className="focus-input100"></span>
                                        <span className="label-input100">Mật khẩu</span>
                                        <span
                                            onClick={this.toggleShow}
                                            style={{ marginLeft: "87%", paddingRight: "0px", cursor: "pointer" }}
                                            className="label-input99">
                                            {this.state.visibility
                                                ?
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                    <path d="M14.12 14.12C13.8454 14.4148 13.5141 14.6512 13.1462 14.8151C12.7782 14.9791 12.3809 15.0673 11.9781 15.0744C11.5753 15.0815 11.1752 15.0074 10.8016 14.8565C10.4281 14.7056 10.0887 14.4811 9.80385 14.1962C9.51897 13.9113 9.29439 13.572 9.14351 13.1984C8.99262 12.8249 8.91853 12.4247 8.92563 12.0219C8.93274 11.6191 9.02091 11.2219 9.18488 10.8539C9.34884 10.4859 9.58525 10.1547 9.88 9.88003M17.94 17.94C16.2306 19.243 14.1491 19.9649 12 20C5 20 1 12 1 12C2.24389 9.68192 3.96914 7.65663 6.06 6.06003L17.94 17.94ZM9.9 4.24002C10.5883 4.0789 11.2931 3.99836 12 4.00003C19 4.00003 23 12 23 12C22.393 13.1356 21.6691 14.2048 20.84 15.19L9.9 4.24002Z" stroke="#E3E3E3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                    <path d="M1 1L23 23" stroke="#E3E3E3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                                :
                                                <svg width="24" height="18" viewBox="0 0 24 18" fill="none">
                                                    <path d="M1 9C1 9 5 1 12 1C19 1 23 9 23 9C23 9 19 17 12 17C5 17 1 9 1 9Z" stroke="#E3E3E3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                    <path d="M12 12C13.6569 12 15 10.6569 15 9C15 7.34315 13.6569 6 12 6C10.3431 6 9 7.34315 9 9C9 10.6569 10.3431 12 12 12Z" stroke="#E3E3E3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                            }
                                        </span>

                                    </div>
                                    <FormError
                                        type="password"
                                        isHidden={this.state.password.isInputValid}
                                        errorMessage={this.state.password.errorMessage} />
                                    <br></br>
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

export default connect(mapStateToProps, mapDispatchToProps)(UserChangePassword);