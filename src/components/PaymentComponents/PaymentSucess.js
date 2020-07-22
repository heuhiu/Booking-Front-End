import React, { Component } from 'react';
import { connect } from 'react-redux';
import Banner from '../../components/HomepageComponents/HeaderBanner/Banner';
import './PaymentSucess.css';
import Footer2 from '../../components/Footer/Footer2/Footer2';
import Menu from '../Menu/Menu';
import { ProgressBar, Step } from "react-step-progress-bar";
import testImg from '../../img/Detailpic.png'
import { Redirect } from 'react-router-dom';
//Home page
class PaymentSucess extends Component {

    constructor(props) {
        super(props);
        this.state = {
            myPercen: 100,
        }
    }
    convertCurrecyToVnd = (currency) => {
        return currency.toLocaleString('it-IT', { style: 'currency', currency: 'VND' })
    }



    showVisitorTypeNameChoosed = (VisitorTypeArr, type) => {
        var result = null;
        if (VisitorTypeArr.length > 0) {
            result = VisitorTypeArr.map((item, index) => {
                // console.log(item.visitorTypeName);
                // <p>{item.visitorTypeName}</p>
                if (type === 1) {
                    return (
                        <p key={index} >{item.visitorTypeName}: {item.quantity} vé</p>
                    )
                } else if(type ===2 ) {
                    return (
                        <span key={index} className="typeDetail2">{item.quantity}x {item.visitorTypeName}<br></br></span> 
                    )
                }
            });
        }
        return result;
    }


    render() {
        const { visitorType, location, loggedUser } = this.props;
        // console.log(this.props.location);
        console.log(location);

        // console.log(location.state.orderDetail.state.ticketName);
        // console.log(location.state.orderDetail.state.totalPayment);



        if (location.state === undefined) {
            return (
                <Redirect to="/" />
            )
        } else {
            console.log(location.state.orderDetail.state.redemptionDate);
            var dateType = {
                weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
            };
            const prnDt = location.state.orderDetail.state.redemptionDate.toLocaleDateString('vi', dateType);
            const ticketName = location.state.orderDetail.state.ticketName;
            const totalPayment = location.state.orderDetail.state.totalPayment;
            const userEmail = loggedUser.mail;

            return (
                <div
                    style={{ backgroundColor: "#F2F2F2", fontFamily: "Inter" }}
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
                                        <h1 className="step1h">Bước 4: Xử lý đặt chỗ</h1>
                                    </div>
                                    <hr style={{ border: "1.2px solid #E3E3E3", borderRadius: "2px" }} />
                                    <div className="row">
                                        <div className="col-4" >
                                            <div className="circleCoffee">

                                            </div>
                                        </div>
                                        <div className="col-4" >
                                            <div className="circleCoffee">
                                                <div className="coffeLogo">
                                                    <svg
                                                        // style={{padding: "20px"}}
                                                        // viewBox="70 160 800 190" preserveAspectRatio="xMaxYMax meet"
                                                        width="112" height="106" viewBox="0 0 112 106" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M82.667 38.3003H87.5837C92.7996 38.3003 97.8019 40.3653 101.49 44.041C105.178 47.7167 107.25 52.702 107.25 57.9002C107.25 63.0985 105.178 68.0838 101.49 71.7595C97.8019 75.4352 92.7996 77.5002 87.5837 77.5002H82.667" stroke="white" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />
                                                        <path d="M4 38.3003H82.6667V82.4001C82.6667 87.5984 80.5946 92.5837 76.9064 96.2594C73.2182 99.9351 68.2159 102 63 102H23.6667C18.4507 102 13.4484 99.9351 9.76023 96.2594C6.07202 92.5837 4 87.5984 4 82.4001V38.3003Z" stroke="white" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />
                                                        <path d="M23.667 4V18.7" stroke="white" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />
                                                        <path d="M43.334 4V18.7" stroke="white" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />
                                                        <path d="M63 4V18.7" stroke="white" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-4" >
                                            <div className="circleCoffee">

                                            </div>
                                        </div>
                                        <div
                                            style={{ textAlign: "center" }}
                                            className="col-12">
                                            <p className="mrt-30 mp1">Vé của bạn sẽ được gửi về địa chỉ email dưới đây trong vòng ít giờ tới</p>
                                            <p className="mp2">{userEmail}</p>
                                        </div>

                                        <div className="col-12"
                                        >
                                            <div
                                                className="detailTicketHeaderBox row">
                                                <div className="leftHeader col-4">
                                                    <span >Chi tiết đơn hàng</span>
                                                </div>
                                                <div className="col-4">

                                                </div>
                                                <div
                                                    style={{ textAlign: "right" }}
                                                    className="rightHeader col-4">
                                                    <span><svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M13.9381 5C14.9149 5.19057 15.8125 5.66826 16.5162 6.37194C17.2199 7.07561 17.6976 7.97326 17.8881 8.95L13.9381 5ZM13.9381 1C15.9674 1.22544 17.8597 2.13417 19.3044 3.57701C20.749 5.01984 21.6601 6.91101 21.8881 8.94L13.9381 1ZM20.8881 16.92V19.92C20.8892 20.1985 20.8322 20.4742 20.7206 20.7293C20.6091 20.9845 20.4454 21.2136 20.2402 21.4019C20.035 21.5901 19.7927 21.7335 19.5289 21.8227C19.265 21.9119 18.9855 21.9451 18.7081 21.92C15.631 21.5856 12.6751 20.5341 10.0781 18.85C7.66194 17.3147 5.61345 15.2662 4.07812 12.85C2.38809 10.2412 1.33636 7.27099 1.00812 4.18C0.983127 3.90347 1.01599 3.62476 1.10462 3.36162C1.19324 3.09849 1.33569 2.85669 1.52288 2.65162C1.71008 2.44655 1.93792 2.28271 2.19191 2.17052C2.44589 2.05833 2.72046 2.00026 2.99812 2H5.99812C6.48342 1.99522 6.95391 2.16708 7.32188 2.48353C7.68985 2.79999 7.93019 3.23945 7.99812 3.72C8.12474 4.68007 8.35957 5.62273 8.69812 6.53C8.83266 6.88792 8.86178 7.27691 8.78202 7.65088C8.70227 8.02485 8.51698 8.36811 8.24812 8.64L6.97812 9.91C8.40167 12.4135 10.4746 14.4864 12.9781 15.91L14.2481 14.64C14.52 14.3711 14.8633 14.1858 15.2372 14.1061C15.6112 14.0263 16.0002 14.0555 16.3581 14.19C17.2654 14.5286 18.2081 14.7634 19.1681 14.89C19.6539 14.9585 20.0975 15.2032 20.4146 15.5775C20.7318 15.9518 20.9003 16.4296 20.8881 16.92Z" stroke="#FF7062" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg> &nbsp;Hỗ trợ</span>
                                                </div>
                                            </div>
                                            <div
                                                className="detailTicketBox row">
                                                <div
                                                    className="detailTicketBox2 col-12">
                                                    <h3>{ticketName}</h3>
                                                    <div className="row no-gutters">
                                                        <div
                                                            className="col-3">
                                                            <img className="detailImg" src={testImg} alt="FAIL TO LOAD" />
                                                        </div>
                                                        <div
                                                        style={{marginLeft: "20px"}}
                                                            className="col-7">
                                                                
                                                            <div className="row">
                                                                <div className="col-3"><span className="typeDetail">Loại vé: </span></div>
                                                                <div className="col"><span className="typeDetail2">[Vé cứng] vé tiêu chuẩn</span></div>
                                                            </div>
                                                            <div className="row">
                                                                <div className="col-3"><span className="typeDetail">Thời gian: </span></div>
                                                                <div className="col"> <span className="typeDetail2">{prnDt}</span></div>
                                                            </div>
                                                            <div className="row">
                                                                <div className="col-3"><span className="typeDetail">Số lượng: </span></div>
                                                                <div className="col">{this.showVisitorTypeNameChoosed(visitorType, 2)}</div>
                                                            </div>


                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* </form> */}
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
                                            {this.showVisitorTypeNameChoosed(visitorType, 1)}
                                        </div>
                                    </div>

                                    <hr style={{ border: "1.5px solid #E3E3E3", borderRadius: "2px" }} />
                                    <div className="row no-gutters">
                                        <div className="col-5">
                                            <p>Tổng: </p>
                                        </div>
                                        <div style={{ textAlign: "right" }} className="col">
                                            <p> {this.convertCurrecyToVnd(totalPayment)}</p>
                                        </div>
                                    </div>
                                    <div className="row no-gutters">
                                        <div className="col-5">
                                            <p>Giảm giá: </p>
                                        </div>
                                        <div style={{ textAlign: "right" }} className="col">
                                            <p>0 đ</p>
                                        </div>
                                    </div>
                                    <div className="row no-gutters">
                                        <div className="col">
                                            <p>Số tiền thanh toán: </p>
                                        </div>
                                        <div style={{ textAlign: "right" }} className="col">
                                            <span className="totalPaymentRightPart">
                                                {this.convertCurrecyToVnd(totalPayment)}
                                            </span>
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

}

// export default PaymentSucess;
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

export default connect(mapStateToProps, mapDispatchToProps)(PaymentSucess);