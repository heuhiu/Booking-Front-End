import React, { Component } from 'react';
import { connect } from 'react-redux';
import './test.css';
import callApi from '../../../config/utils/apiCaller';
import { getUserLogin, showLoader, hideLoader } from '../../../actions/index';
import { Link } from 'react-router-dom';
import backG from '../../../img/LoginPaper.png';
import Menu from '../../../components/Menu/Menu';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import FullPageLoader from '../../../components/FullPageLoader/FullPageLoader'
import * as regex from '../../../constants/Regex';
import { Redirect } from 'react-router-dom';

function FormError(props) {
    if (props.isHidden) { return null; }
    return (
        <div style={{ color: "red", position: 'absolute' }} className="form-warning">
            {props.errorMessage}
        </div>
    )
}

class LoginComp extends Component {

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
            visibility: true
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
                regexp = /./;
                checkingResult = regexp.exec(checkingText);
                if (checkingResult !== null) {
                    return {
                        isInputValid: true,
                        errorMessage: ''
                    };
                } else {
                    return {
                        isInputValid: false,
                        errorMessage: 'Password không để trống'
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

    onLogin = async (e) => {
        // showLoader();
        const { email, password } = this.state;
        const { showLoader, hideLoader } = this.props;
        e.preventDefault();
        // if (true) {
        //     setTimeout(() => {
        //         this.mailInput.focus();
        //         this.pass.focus();
        //         this.mailInput.focus();
        //     }, 1);
        // }
        if (this.mailInput && email.isInputValid === false) {
            setTimeout(() => {

                this.mailInput.focus();

            }, 1);
        } else if (this.pass && password.isInputValid === false) {
            setTimeout(() => {

                this.pass.focus();

            }, 1);
        }


        if (email.isInputValid === false ||
            password.isInputValid === false) {
            e.preventDefault();
            e.stopPropagation();
        }
        else {
            // console.log("GO to susscess")
            var jwtDecode = require('jwt-decode');
            showLoader();
            await callApi('login', 'POST', {
                mail: email.value,
                password: password.value
            }).then(res => {
                // console.log(res);
                localStorage.setItem('tokenLogin', JSON.stringify(res.data));
                var decoded = jwtDecode(res.data);
                // console.log(decoded.user);
                //data will be store in localStorage
                // this.props.fetchUserDetail(decoded.user);s
                // console.log(this.props.history);
                hideLoader();
                this.props.history.push("/");
            }).catch(function (error) {
                if (error.response) {
                    // Request made and server responded
                    console.log(error.response.data);
                    if (error.response.data === "ACCOUNT_NOT_ACTIVATED") {
                        // alert("ACCOUNT_NOT_ACTIVATED");
                        hideLoader();
                        toast.error('Tài khoản chưa được kích hoạt, vui lòng kiểm tra mail!', {
                            position: "bottom-right",
                            autoClose: 5000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                        });

                    } else if(error.response.data === "NOT_EMAIL_SIGNED_IN"){
                        hideLoader();
                        toast.error('Tài khoản chưa được đăng kí!', {
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
                        // if (error.response.data.toString() === 'WRONG_USERNAME_PASSWORD') {
                        // alert("Wrong User Name or Password");
                        hideLoader();
                        toast.error('Sai mật khẩu hoặc tài khoản!', {
                            position: "bottom-right",
                            autoClose: 5000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                        });
                    }
                    hideLoader();
                    // }
                    // history.push("/login");
                }
            });
        }
    }


    toggleShow = () => {
        this.setState({
            visibility: !this.state.visibility
        });
    }

    render() {
        const { UserDetail } = this.props;
        console.log(UserDetail.id)
        if (UserDetail.id !== undefined) {
            return (
                <Redirect to="/" />
            )
        } else
            return (
                <div>
                    <Menu />
                    <ToastContainer />
                    <div className="limiter">
                        <div className="container-login100">
                            <div className="wrap-login100">

                                <div
                                    style={{ backgroundImage: "url(" + backG + ")" }}
                                    className="login100-more ">
                                </div>

                                <form
                                    className="was-validated login100-form validate-form"
                                    onSubmit={this.onLogin}
                                    noValidate
                                >

                                    <div style={{ marginTop: "100px" }} className="loginPanel1">
                                        Đăng nhập
                            </div>

                                    <div className="wrap-input100">
                                        <input
                                            className="input100"
                                            ref={(input) => { this.mailInput = input; }}
                                            type="text"
                                            name="email"
                                            maxLength="320"
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
                                    <br></br>
                                    <div className="row no-gutters">
                                        <div className="col wrap-input100">
                                            <input
                                                className="input100"
                                                ref={(input) => { this.pass = input; }}
                                                type={this.state.visibility ? "password" : "text"}
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
                                    </div>
                                    <FormError
                                        type="password"
                                        isHidden={this.state.password.isInputValid}
                                        errorMessage={this.state.password.errorMessage} />
                                    <br></br>
                                    <div className="flex-sb-m w-full p-t-3 p-b-32">
                                    </div>
                                    <div className="container-login100-form-btn">
                                        <button type="submit" className="login100-form-btn">
                                            Đăng nhập
						        </button>
                                    </div>
                                    {/* <div className="text-center p-t-46 p-b-20">
                                <button
                                    formnovaidate="true"
                                    className="fbBtn1"
                                    type="">
                                    <svg width="8" height="16" viewBox="0 0 10 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10 0H7.27273C6.0672 0 4.91104 0.526784 4.05861 1.46447C3.20617 2.40215 2.72727 3.67392 2.72727 5V8H0V12H2.72727V20H6.36364V12H9.09091L10 8H6.36364V5C6.36364 4.73478 6.45942 4.48043 6.6299 4.29289C6.80039 4.10536 7.03162 4 7.27273 4H10V0Z" fill="#197ACF" />
                                    </svg>
                                        &emsp;
                                            Đăng nhập với FaceBook
                                        </button>
                            </div> */}
                                    <div className="mrt-30 row det">
                                        <div className="col">
                                            <p className="det1">Chưa có tài khoản? &emsp;
                                            <Link to="/register"><i className="det2">Đăng kí ngay</i></Link>
                                            </p>
                                            {/* <p className="det1">Không thể truy cập?</p> */}
                                            <Link to='/forgotPassword'><p className="det1">Quên mật khẩu?</p></Link>
                                        </div>
                                    </div>
                                    <br></br>
                                    <div className="row det">
                                        <div className="col">
                                            <p className="det1">Với việc tiếp tục truy cập, bạn sẽ đồng ý với <i className="det2">điều khoản của chúng tôi</i> </p>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <FullPageLoader />
                </div>
            );
    }

}
const mapStateToProps = state => {
    return {
        loader: state.Loader,
        UserDetail: state.User,
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

export default connect(mapStateToProps, mapDispatchToProps)(LoginComp);
