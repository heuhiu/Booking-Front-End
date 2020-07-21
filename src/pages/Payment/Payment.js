import React, { Component } from 'react';
// import { connect } from 'react-redux';
import './payment.css';
import "react-step-progress-bar/styles.css";
import { ProgressBar, Step } from "react-step-progress-bar";
import Menu from '../../components/Menu/Menu';
import Footer2 from '../../components/Footer/Footer2/Footer2';
import { Accordion, Card, Button } from 'react-bootstrap'
import CardDemo from './cartDemo/CardDemo';
import { connect } from 'react-redux';


function FormError(props) {
    if (props.isHidden) { return null; }
    return (
        <div style={{ color: "red", position: 'absolute' }} className="form-warning">
            {props.errorMessage}
        </div>
    )
}

//Payment
class Payment extends Component {

    constructor(props) {
        super(props);
        this.myRef1 = React.createRef()
        this.myRef2 = React.createRef()
        this.state = {
            myPercen: 0,
            nameToCall: "Anh",
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
    scrollToStep1 = () => window.scrollTo({ top: this.myRef1.current.offsetTop, behavior: 'smooth' });
    scrollToStep2 = () => window.scrollTo({ top: this.myRef2.current.offsetTop, behavior: 'smooth' });

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

    showVisitorTypeNameChoosed = (VisitorTypeArr) => {
        var result = null;
        if (VisitorTypeArr.length > 0) {
            result = VisitorTypeArr.map((item, index) => {
                console.log(item.visitorTypeName);
                // <p>{item.visitorTypeName}</p>
                return(
                <p>{item.visitorTypeName}: {item.quantity}</p>
                )
            });
        }
        return result;
    }
    render() {

        const { location, visitorType } = this.props;
        console.log(visitorType);
        var dateType = {
            weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
        };
        const prnDt = location.state.redemptionDate.toLocaleDateString('vi', dateType);

        console.log(location.state);
        console.log(location.state.ticketTypeID);
        console.log(location.state.ticketName);
        console.log(location.state.totalPayment);
        console.log(location.state.redemptionDate);
        console.log(this.state.email.value);
        // var x = 1000;
        // x = x.toLocaleString('it-IT', {style : 'currency', currency : 'VND'});
        const totalPayment = location.state.totalPayment.toLocaleString('it-IT', { style: 'currency', currency: 'VND' });

        const myLocation = location;
        const ticketName = myLocation.state.ticketName;
        const { accomplished } = this.state;
        const { loggedUser } = this.props;
        console.log(loggedUser);
        return (

            <div
                style={{ backgroundColor: "#F2F2F2" }}
            >
                {/* {this.scrollToStep1()} */}
                <Menu />
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <div
                    style={{
                        fontFamily: "Inter"
                    }}
                    className="container">
                    <div
                        className="row">
                        <div
                            style={{
                                height: "auto"
                            }}
                            className="col-8 no-gutters">
                            {/* process bar */}
                            <div>
                                <div
                                    style={{
                                        padding: "0rem 7rem 0rem 7rem"
                                    }}
                                    className="progressbar col-12">
                                    <ProgressBar
                                        percent={this.state.myPercen}
                                        filledBackground="linear-gradient(to right, #fefb72, #FF7062)"
                                    >
                                        <Step transition="scale">
                                            {({ accomplished }) => (
                                                <div onClick={this.scrollToStep1}>
                                                    <div
                                                        onClick={this.scrollToStep1, () => { this.setState({ myPercen: 0 }) }}
                                                        style={{
                                                            filter: `grayscale(${accomplished ? 0 : 80}%)`,
                                                            border: "1px solid",
                                                            borderRadius: "50%",
                                                            width: "30px",
                                                            height: "30px",
                                                            background: "#FF7062",
                                                            textAlign: "center",
                                                            color: "white",
                                                            display: "table"
                                                        }}
                                                    >
                                                        <p style={{
                                                            textAlign: "center",
                                                            verticalAlign: "middle",
                                                            display: "table-cell"
                                                        }}>1</p>
                                                    </div>
                                                </div>
                                            )}
                                        </Step>
                                        <Step transition="scale">
                                            {({ accomplished }) => (
                                                // <img
                                                //     style={{ filter: `grayscale(${accomplished ? 0 : 80}%)` }}
                                                //     width="30"
                                                //     src="https://vignette.wikia.nocookie.net/pkmnshuffle/images/9/97/Pikachu_%28Smiling%29.png/revision/latest?cb=20170410234508"
                                                // />
                                                <div onClick={this.scrollToStep2}>
                                                    <div
                                                        onClick={() => { this.setState({ myPercen: 50 }) }}
                                                        style={{
                                                            filter: `grayscale(${accomplished ? 0 : 80}%)`,
                                                            border: "1px solid",
                                                            borderRadius: "50%",
                                                            width: "30px",
                                                            height: "30px",
                                                            background: "#FF7062",
                                                            textAlign: "center",
                                                            color: "white",
                                                            display: "table"
                                                        }}
                                                    >
                                                        <p style={{
                                                            textAlign: "center",
                                                            verticalAlign: "middle",
                                                            display: "table-cell"
                                                        }}>2</p>
                                                    </div>
                                                </div>
                                            )}
                                        </Step>
                                        <Step transition="scale">
                                            {({ accomplished }) => (
                                                <div>
                                                    <div
                                                        onClick={() => { this.setState({ myPercen: 100 }) }}
                                                        style={{
                                                            filter: `grayscale(${accomplished ? 0 : 80}%)`,
                                                            border: "1px solid",
                                                            borderRadius: "50%",
                                                            width: "30px",
                                                            height: "30px",
                                                            background: "#FF7062",
                                                            textAlign: "center",
                                                            color: "white",
                                                            display: "table"
                                                        }}
                                                    >
                                                        <p style={{
                                                            textAlign: "center",
                                                            verticalAlign: "middle",
                                                            display: "table-cell"
                                                        }}>3</p>
                                                    </div>

                                                </div>
                                            )}
                                        </Step>
                                    </ProgressBar>
                                </div>
                            </div>

                            {/* Step 1 */}
                            {/* <form> */}
                            <div
                                className="borderBox col-12">
                                <div className="col-12">
                                    <h1 className="step1h">Bước 1:Xác nhận thông tin khách du lịch</h1>
                                </div>
                                <hr style={{ border: "1.2px solid #E3E3E3", borderRadius: "2px" }} />
                                <div ref={this.myRef1} className="col-12 alertStep1">
                                    <p>
                                        Xin đảm bảo thông tin điền vào là chính xác.
                                        Bạn sẽ không thể thay đổi thông tin sau khi thanh toán
                                        </p>
                                </div>
                                <div className="col-12">
                                    <div id="inline">
                                        <div className="bulletListCustome"></div>
                                        <div className="content">Thông tin liên lạc</div>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <p className="attention">Chúng tôi sẽ thông báo mọi thay đổi về đơn hàng cho bạn</p>
                                </div>
                                <div className="mrt-30 col-12">
                                    <div className="row">
                                        <div className="col-3">
                                            <label>Danh xưng</label>
                                            <div className="dropdown">
                                                <button type="button" className="myCall" data-toggle="dropdown">
                                                    {this.state.nameToCall} &nbsp;
                                                    <svg style={{ textAlign: "left" }} width="22" height="13" viewBox="0 0 22 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M1 0.999999L11 12L21 1" stroke="#FF7062" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg>

                                                </button>
                                                <div className="dropdown-menu">
                                                    <a className="dropdown-item" onClick={() => { this.setState({ nameToCall: "Anh" }) }}>Anh</a>
                                                    <a className="dropdown-item" onClick={() => { this.setState({ nameToCall: "Chị" }) }}>Chị</a>
                                                    <a className="dropdown-item" onClick={() => { this.setState({ nameToCall: "Em" }) }}>Em</a>
                                                    <a className="dropdown-item" onClick={() => { this.setState({ nameToCall: "Cô" }) }}>Cô</a>
                                                    <a className="dropdown-item" onClick={() => { this.setState({ nameToCall: "Dì" }) }}>Dì</a>
                                                </div>
                                            </div>

                                        </div>
                                        <div className="col">
                                            <label>Họ</label>
                                            <input type="text" disabled value={loggedUser.lastName} className="inputPayment form-control"
                                                placeholder="Họ" />

                                        </div>
                                        {/* <div className="col">
                                            <div className="wrap-input100">
                                                <input
                                                    className="input100"
                                                    // ref={(input) => { this.mailInput = input; }}
                                                    type="text"
                                                    name="lastName"
                                                    onChange={this.handleInput}
                                                    onBlur={this.handleInputValidation}
                                                    required
                                                    disabled
                                                    value={loggedUser.lastName ? loggedUser.lastName : ""}
                                                />
                                                <span className="focus-input100"></span>
                                                <span className="label-input100">Họ</span>
                                            </div>
                                            <FormError
                                                type="lastName"
                                                isHidden={this.state.lastName.isInputValid}
                                                errorMessage={this.state.lastName.errorMessage} />
                                        </div> */}


                                        <div className="col">
                                            <label>Tên</label>
                                            <input type="text"
                                                disabled
                                                value={loggedUser.firstName ? loggedUser.firstName : ""}
                                                className="inputPayment form-control" placeholder="Tên" />
                                        </div>
                                        {/* <div className="col">
                                            <div className="wrap-input100">
                                                <input
                                                    className="input100"
                                                    ref={(input) => { this.mailInput = input; }}
                                                    type="text"
                                                    name="firstName"
                                                    onChange={this.handleInput}
                                                    onBlur={this.handleInputValidation}
                                                    required
                                                    disabled
                                                    value={loggedUser.firstName ? loggedUser.firstName : ""}
                                                />
                                                <span className="focus-input100"></span>
                                                <span className="label-input100">Tên</span>
                                            </div>
                                            <FormError
                                                type="firstName"
                                                isHidden={this.state.firstName.isInputValid}
                                                errorMessage={this.state.firstName.errorMessage} />
                                        </div> */}
                                    </div>
                                    {/* <div className="row">
                                        <div className="col">

                                        </div>
                                        <div className="col">
                                            <label className="cmt">Như trên CMND (không dấu)</label>
                                        </div>
                                        <div className="col">
                                            <label className="cmt">Như trên CMND (không dấu)</label>
                                        </div>
                                    </div> */}
                                </div>

                                <div className="mrt-30 col-12">
                                    <div className="row">
                                        <div className="col">
                                            <label>Số điện thoại</label>
                                            <input type="number"
                                                disabled
                                                value={loggedUser.phoneNumber}
                                                className="inputPayment form-control" />
                                        </div>
                                        {/* <div className="col">
                                            <div className="wrap-input100">
                                                <input
                                                    className="input100"
                                                    ref={(input) => { this.mailInput = input; }}
                                                    type="text"
                                                    name="phoneNumb"
                                                    onChange={this.handleInput}
                                                    onBlur={this.handleInputValidation}
                                                    required
                                                    disabled
                                                    value={loggedUser.phoneNumber}
                                                />
                                                <span className="focus-input100"></span>
                                                <span className="label-input100">Số điện thoại xác thực</span>
                                            </div>
                                            <FormError
                                                type="phoneNumb"
                                                isHidden={this.state.phoneNumb.isInputValid}
                                                errorMessage={this.state.phoneNumb.errorMessage} />
                                        </div> */}
                                        <div className="col">
                                            <label>Địa chỉ Email</label>
                                            <input type="text"
                                                disabled
                                                value={loggedUser.mail}
                                                className="inputPayment form-control" placeholder="Email" />
                                        </div>
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
                                                    disabled
                                                    value={loggedUser.mail}

                                                />
                                                <span className="focus-input100"></span>
                                                <span className="label-input100">{loggedUser.mail}</span>
                                            </div>
                                            <FormError
                                                type="email"
                                                isHidden={this.state.email.isInputValid}
                                                errorMessage={this.state.email.errorMessage} />
                                        </div> */}
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
                                            <button onClick={this.scrollToStep2} className="proceedPaymentBtn">Tiến hành thanh toán</button>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            {/* </form> */}


                            {/* Step 2 */}
                            <form>
                                <div ref={this.myRef2}
                                    style={{

                                        marginTop: "50px"
                                    }}
                                    className="borderBox col-12">
                                    <div className="col-12">
                                        <h1 className="step2h">Bước 2: Xác nhận để thanh toán</h1>
                                    </div>
                                    <hr style={{ border: "1.2px solid #E3E3E3", borderRadius: "2px" }} />
                                    <div className="col-12 alertStep2">
                                        <p>
                                            <svg width="20" height="22" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M17 10H3C1.89543 10 1 10.8954 1 12V19C1 20.1046 1.89543 21 3 21H17C18.1046 21 19 20.1046 19 19V12C19 10.8954 18.1046 10 17 10Z" stroke="#197ACF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                <path d="M5 10V6C5 4.67392 5.52678 3.40215 6.46447 2.46447C7.40215 1.52678 8.67392 1 10 1C11.3261 1 12.5979 1.52678 13.5355 2.46447C14.4732 3.40215 15 4.67392 15 6V10" stroke="#197ACF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg> &nbsp;

                                        Tất cả thông tin của thẻ sẽ được mã hoá, bảo mật và bảo vệ

                                    </p>
                                    </div>

                                    <Accordion className="pdt-30 pdb-30" defaultActiveKey="0">
                                        <Card id="cardHeade">
                                            <Accordion.Toggle id="cardHeade2" as={Card.Header} eventKey="0">
                                                MoMo E-Wallet
                                            </Accordion.Toggle>
                                            <Accordion.Collapse eventKey="0">
                                                <Card.Body>
                                                    <h1>NOT AVAIABLE YET</h1>
                                                </Card.Body>
                                            </Accordion.Collapse>
                                        </Card>
                                        <Card id="cardHeade">
                                            <Accordion.Toggle id="cardHeade2" as={Card.Header} eventKey="1">
                                                Thẻ Credit/Debit
                                            </Accordion.Toggle>
                                            <Accordion.Collapse eventKey="1">
                                                <Card.Body>
                                                    <div
                                                        className="paymentMethodBox row">
                                                        <div> <CardDemo orderDetail={myLocation} /></div>
                                                    </div>
                                                    {/* <div
                                                        className="paymentMethodBox row">
                                                        <div className="row">
                                                            <div className="col">
                                                                <label>Số thẻ</label>
                                                            </div>
                                                        </div>
                                                        <div className="row">

                                                            <div className="col">
                                                                <input type="number" className="inputPayment form-control" placeholder="Số thẻ" />
                                                            </div>
                                                            <div
                                                                className="lockLogoPayment col-1">
                                                                <svg width="20" height="22" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M17 10H3C1.89543 10 1 10.8954 1 12V19C1 20.1046 1.89543 21 3 21H17C18.1046 21 19 20.1046 19 19V12C19 10.8954 18.1046 10 17 10Z" stroke="#A5A5A5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                                    <path d="M5 10V6C5 4.67392 5.52678 3.40215 6.46447 2.46447C7.40215 1.52678 8.67392 1 10 1C11.3261 1 12.5979 1.52678 13.5355 2.46447C14.4732 3.40215 15 4.67392 15 6V10" stroke="#A5A5A5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                                </svg>
                                                            </div>
                                                            <div className="moreInfor col">
                                                                <p>
                                                                    Thông tin giao dịch của bạn được mã hóa an toàn bởi các hệ thống thanh toán uy tín.
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <div className="pdt-30 row">
                                                            <div className="col-12">
                                                                <div className="row">
                                                                    <div className="col-3">
                                                                        <label>Ngày hết hạn</label>
                                                                        <div className="dropup">
                                                                            <button type="button" className="myCall" data-toggle="dropdown">
                                                                                Ngày &nbsp;
                                                                                <svg width="22" height="13" viewBox="0 0 22 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                    <path d="M1 0.999999L11 12L21 1" stroke="#FF7062" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                                                </svg>

                                                                            </button>
                                                                            <div className="dropdown-menu">
                                                                                <a className="dropdown-item" href="/#">Link 1</a>
                                                                                <a className="dropdown-item" href="/#">Link 2</a>
                                                                                <a className="dropdown-item" href="/#">Link 3</a>
                                                                            </div>
                                                                        </div>

                                                                    </div>
                                                                    <div className="col-3">
                                                                        <label>&nbsp;</label>
                                                                        <div className="dropdown">
                                                                            <button type="button" aria-haspopup="true" className="myCall" data-toggle="dropdown">
                                                                                Tháng &nbsp;
                                                                                <svg width="22" height="13" viewBox="0 0 22 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                    <path d="M1 0.999999L11 12L21 1" stroke="#FF7062" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                                                </svg>

                                                                            </button>
                                                                            <div className="dropdown-menu">
                                                                                <a className="dropdown-item" href="/#">Link 1</a>
                                                                                <a className="dropdown-item" href="/#">Link 2</a>
                                                                                <a className="dropdown-item" href="/#">Link 3</a>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col">
                                                                        <label>Mã bảo mật</label>
                                                                        <input type="number" className="inputPayment form-control" placeholder="Mã bảo mật" />
                                                                    </div>

                                                                </div>
                                                            </div>

                                                        </div>
                                                    </div>
                                                */}
                                                </Card.Body>
                                            </Accordion.Collapse>
                                        </Card>
                                    </Accordion>
                                </div>
                            </form>

                        </div>

                        {/* Right part */}
                        <div className="col">
                            <div
                                className="rightPartPayment">
                                <h1>{ticketName}</h1>
                                <p>Tour mở dành cho tối đa 12 khách</p>
                                <hr style={{ border: "1.5px solid #E3E3E3", borderRadius: "2px" }} />
                                <div className="row no-gutters">
                                    <div style={{ marginRight: "-15px" }} className="col">
                                        <p>Ngày tham quan: </p>
                                    </div>
                                    <div style={{ textAlign: "right" }} className="col">
                                        <p>{prnDt}</p>
                                    </div>
                                </div>
                                <div className="row no-gutters">
                                    <div className="col">
                                        <p>Áp dụng cho: </p>
                                    </div>
                                    <div style={{ textAlign: "right" }} className="col">
                                        {/* <p>Người lớn : 2</p> */}
                                        {this.showVisitorTypeNameChoosed(visitorType)}
                                    </div>
                                </div>

                                <hr style={{ border: "1.5px solid #E3E3E3", borderRadius: "2px" }} />
                                <div className="row no-gutters">
                                    <div className="col-5">
                                        <p>Tổng: </p>
                                    </div>
                                    <div style={{ textAlign: "right" }} className="col">
                                        <p> {totalPayment}</p>
                                    </div>
                                </div>
                                <div className="row no-gutters">
                                    <div className="col-5">
                                        <p>Giảm giá: </p>
                                    </div>
                                    <div style={{ textAlign: "right" }} className="col">
                                        <p>đ 0</p>
                                    </div>
                                </div>
                                <div className="row no-gutters">
                                    <div className="col">
                                        <p>Số tiền thanh toán: </p>
                                    </div>
                                    <div style={{ textAlign: "right" }} className="col">
                                        <span className="totalPaymentRightPart">{totalPayment}</span>
                                    </div>
                                </div>

                                <div
                                    style={{ marginTop: "20px" }}
                                    className="progressbar col-12">
                                    <ProgressBar
                                        percent={this.state.myPercen}
                                        filledBackground="linear-gradient(to right, #fefb72, #FF7062)"
                                    >
                                        <Step transition="scale">
                                            {({ accomplished }) => (
                                                <div onClick={this.scrollToStep1}>
                                                    <div
                                                        onClick={this.scrollToStep1, () => { this.setState({ myPercen: 0 }) }}
                                                        style={{
                                                            filter: `grayscale(${accomplished ? 0 : 80}%)`,
                                                            border: "1px solid",
                                                            borderRadius: "50%",
                                                            width: "30px",
                                                            height: "30px",
                                                            background: "#FF7062",
                                                            textAlign: "center",
                                                            color: "white",
                                                            display: "table"
                                                        }}
                                                    >
                                                        <p style={{
                                                            textAlign: "center",
                                                            verticalAlign: "middle",
                                                            display: "table-cell"
                                                        }}>1</p>
                                                    </div>
                                                </div>
                                            )}
                                        </Step>
                                        <Step transition="scale">
                                            {({ accomplished }) => (
                                                // <img
                                                //     style={{ filter: `grayscale(${accomplished ? 0 : 80}%)` }}
                                                //     width="30"
                                                //     src="https://vignette.wikia.nocookie.net/pkmnshuffle/images/9/97/Pikachu_%28Smiling%29.png/revision/latest?cb=20170410234508"
                                                // />
                                                <div onClick={this.scrollToStep2}>
                                                    <div
                                                        onClick={() => { this.setState({ myPercen: 50 }) }}
                                                        style={{
                                                            filter: `grayscale(${accomplished ? 0 : 80}%)`,
                                                            border: "1px solid",
                                                            borderRadius: "50%",
                                                            width: "30px",
                                                            height: "30px",
                                                            background: "#FF7062",
                                                            textAlign: "center",
                                                            color: "white",
                                                            display: "table"
                                                        }}
                                                    >
                                                        <p style={{
                                                            textAlign: "center",
                                                            verticalAlign: "middle",
                                                            display: "table-cell"
                                                        }}>2</p>
                                                    </div>
                                                </div>
                                            )}
                                        </Step>
                                        <Step transition="scale">
                                            {({ accomplished }) => (
                                                <div>
                                                    <div
                                                        onClick={() => { this.setState({ myPercen: 100 }) }}
                                                        style={{
                                                            filter: `grayscale(${accomplished ? 0 : 80}%)`,
                                                            border: "1px solid",
                                                            borderRadius: "50%",
                                                            width: "30px",
                                                            height: "30px",
                                                            background: "#FF7062",
                                                            textAlign: "center",
                                                            color: "white",
                                                            display: "table"
                                                        }}
                                                    >
                                                        <p style={{
                                                            textAlign: "center",
                                                            verticalAlign: "middle",
                                                            display: "table-cell"
                                                        }}>3</p>
                                                    </div>

                                                </div>
                                            )}
                                        </Step>
                                    </ProgressBar>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer2 />
            </div >
        );
    }

}


const mapStateToProps = state => {
    return {
        loggedUser: state.User,
        visitorType: state.Ticket
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Payment);