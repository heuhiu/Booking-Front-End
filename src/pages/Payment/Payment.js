import React, { Component } from 'react';
// import { connect } from 'react-redux';
import './payment.css';
import "react-step-progress-bar/styles.css";
import { ProgressBar, Step } from "react-step-progress-bar";
import Menu from '../../components/Menu/Menu';
import Footer2 from '../../components/Footer/Footer2/Footer2';
import { Accordion, Card, Button } from 'react-bootstrap'
import CardDemo from './cartDemo/CardDemo';

//Payment
class Payment extends Component {

    constructor(props) {
        super(props);
        this.myRef1 = React.createRef()
        this.myRef2 = React.createRef()
        this.state = {
            myPercen: 0
        }
    }
    scrollToStep1 = () => window.scrollTo({ top: this.myRef1.current.offsetTop, behavior: 'smooth' });
    scrollToStep2 = () => window.scrollTo({ top: this.myRef2.current.offsetTop, behavior: 'smooth' });

    render() {
        const { location } = this.props;
        console.log(location.state);
        console.log(location.state.ticketTypeID);
        console.log(location.state.ticketName);
        const myLocation = location;
        const { accomplished } = this.state;
        return (
            <div
                style={{ backgroundColor: "#F2F2F2" }}
            >
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
                            <form>
                                <div
                                    // style={{
                                    //     border: "solid 1px blue",
                                    //     height: "auto",
                                    //     marginTop: "50px"
                                    // }}
                                    className="borderBox col-12">
                                    <div className="col-12">
                                        <h1 className="step1h">Bước 1: Điền thông tin khách du lịch</h1>
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
                                    <div className="col-12">
                                        <div className="row">
                                            <div className="col-3">
                                                <label>Danh xưng</label>
                                                <div className="dropdown">
                                                    <button type="button" className="myCall" data-toggle="dropdown">
                                                        Anh &nbsp;
                                                    <svg width="22" height="13" viewBox="0 0 22 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M1 0.999999L11 12L21 1" stroke="#FF7062" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
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
                                                <label>Họ</label>
                                                <input type="text" className="inputPayment form-control" placeholder="Họ" />
                                            </div>
                                            <div className="col">
                                                <label>Tên</label>
                                                <input type="text" class="inputPayment form-control" placeholder="Tên" />
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col">

                                            </div>
                                            <div className="col">
                                                <label className="cmt">Như trên CMND (không dấu)</label>
                                            </div>
                                            <div className="col">
                                                <label className="cmt">Như trên CMND (không dấu)</label>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="pdt-30 col-12">
                                        <div className="row">
                                            <div className="col">
                                                <label>Số điện thoại</label>
                                                <input type="number" className="inputPayment form-control" />
                                            </div>
                                            <div className="col">
                                                <label>Địa chỉ Email</label>
                                                <input type="text" class="inputPayment form-control" placeholder="Email" />
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col">
                                                <label className="cmt">Số điện thoại xác thực</label>
                                            </div>
                                            <div className="col">
                                                <label className="cmt">(Vé của bạn sẽ được gửi về địa chỉ email,
                                                xin vui lòng kiểm tra kỹ thông tin)
                                                </label>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="pdt-30 col-12">
                                        <div className="row">
                                            <div className="col">
                                            </div>
                                            <div className="col">
                                                <button className="proceedPaymentBtn">Tiến hành thanh toán</button>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </form>


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
                                                <path d="M17 10H3C1.89543 10 1 10.8954 1 12V19C1 20.1046 1.89543 21 3 21H17C18.1046 21 19 20.1046 19 19V12C19 10.8954 18.1046 10 17 10Z" stroke="#197ACF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                                <path d="M5 10V6C5 4.67392 5.52678 3.40215 6.46447 2.46447C7.40215 1.52678 8.67392 1 10 1C11.3261 1 12.5979 1.52678 13.5355 2.46447C14.4732 3.40215 15 4.67392 15 6V10" stroke="#197ACF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
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
                                                    <div
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
                                                                    <path d="M17 10H3C1.89543 10 1 10.8954 1 12V19C1 20.1046 1.89543 21 3 21H17C18.1046 21 19 20.1046 19 19V12C19 10.8954 18.1046 10 17 10Z" stroke="#A5A5A5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                                                    <path d="M5 10V6C5 4.67392 5.52678 3.40215 6.46447 2.46447C7.40215 1.52678 8.67392 1 10 1C11.3261 1 12.5979 1.52678 13.5355 2.46447C14.4732 3.40215 15 4.67392 15 6V10" stroke="#A5A5A5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
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
                                                                                    <path d="M1 0.999999L11 12L21 1" stroke="#FF7062" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
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
                                                                                    <path d="M1 0.999999L11 12L21 1" stroke="#FF7062" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
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
                                {/* <button onClick={() => { this.setState({ myPercen: 0 }) }}>Step 1</button>
                            <button onClick={() => { this.setState({ myPercen: 50 }) }}>Step 2</button>
                            <button onClick={() => { this.setState({ myPercen: 100 }) }}>Step 3</button> */}
                                <h1>Tour phố cổ Hội An 2 ngày 1 đêm</h1>
                                <p>Tour mở dành cho tối đa 12 khách</p>
                                <hr style={{ border: "1.5px solid #E3E3E3", borderRadius: "2px" }} />
                                <div className="row no-gutters">
                                    <div style={{ marginRight: "-15px" }} className="col">
                                        <p>Ngày tham quan: </p>
                                    </div>
                                    <div style={{ textAlign: "right" }} className="col">
                                        <p>Thứ 06, 03 tháng 07, 2020</p>
                                    </div>
                                </div>
                                <div className="row no-gutters">
                                    <div className="col">
                                        <p>Áp dụng cho: </p>
                                    </div>
                                    <div style={{ textAlign: "right" }} className="col">
                                        <p>Người lớn : 2</p>
                                    </div>
                                </div>

                                <hr style={{ border: "1.5px solid #E3E3E3", borderRadius: "2px" }} />
                                <div className="row no-gutters">
                                    <div className="col-5">
                                        <p>Tổng: </p>
                                    </div>
                                    <div style={{ textAlign: "right" }} className="col">
                                        <p>đ 4,600,000</p>
                                    </div>
                                </div>
                                <div className="row no-gutters">
                                    <div className="col-5">
                                        <p>Giảm giá: </p>
                                    </div>
                                    <div style={{ textAlign: "right" }} className="col">
                                        <p>đ 2,000,000</p>
                                    </div>
                                </div>
                                <div className="row no-gutters">
                                    <div className="col">
                                        <p>Số tiền thanh toán: </p>
                                    </div>
                                    <div style={{ textAlign: "right" }} className="col">
                                        <span className="totalPaymentRightPart">đ 2,600,000</span>
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


export default Payment;
