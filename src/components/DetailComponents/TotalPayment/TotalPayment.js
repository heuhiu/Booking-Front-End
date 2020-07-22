import React, { Component } from 'react';
import { connect } from 'react-redux';
import './TotalPayment.css';
import { Link, Redirect } from 'react-router-dom';
// import { vi } from 'date-fns/locale';
import { removeVisitorType } from '../../../actions/index';
import callApi from '../../../config/utils/apiCaller';
import { withRouter } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class TotalPayment extends Component {
    notify = () => toast("Wow so easy !");

    constructor(props) {
        super(props);
        this.state = {
            totalPrice: 0,
            discount: 0,
            checkLoginFlag: true
        }
    }

    myTotal = (visitorType) => {
        var total = 0;
        if (visitorType.length >= 0) {
            for (let index = 0; index < visitorType.length; index++) {
                const qty = visitorType[index].quantity;
                const pri = visitorType[index].myPrice;
                total = total + (qty * pri);
            }
        }
        return total;
    }

    reset = () => {
        localStorage.removeItem("visitorTypeList");
        this.props.removeVisitorType();
    }

    convertCurrecyToVnd = (currency) => {
        return currency.toLocaleString('it-IT', { style: 'currency', currency: 'VND' })
    }

    checkLogin = (e) => {
        e.preventDefault();
        const { history } = this.props;
        const { totalPayment, ticketTypeID, ticketName, redemptionDate } = this.props;
        if (false) {
            alert("fillt di dkm");
        } else {
            callApi('login/checkToken', 'post', null)
                .then(res => {
                    if(totalPayment === 0) {
                        toast.error('Vui lòng chọn ít nhất một loại vé!', {
                            position: "bottom-right",
                            autoClose: 5000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                        });
                    } else if (redemptionDate === null) {
                        toast.error('Vui lòng chọn ngày sử dụng vé!', {
                            position: "bottom-right",
                            autoClose: 5000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                        });
                    } else {
                        this.props.history.push({
                            pathname: '/payment',
                            state: { ticketTypeID, ticketName, totalPayment, redemptionDate }
                        })
                    }
                    

                }).catch(function (error) {
                    // if (error.response) {
                    //     console.log(error.response.data);
                    // }
                    // toast.error("Vui lòng đăng nhập trước khi đặt vé")
                    toast.error('Vui lòng đăng nhập trước khi đặt vé!', {
                        position: "bottom-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    });
                });
        }
    }
    // test=()=>{
    //     this.setState({
    //         checkLoginFlag: false
    //     })
    // }
    render() {
        const { visitorType, totalPayment, ticketTypeID, ticketName, redemptionDate } = this.props;
        console.log(ticketTypeID);
        console.log(ticketName);
        console.log(redemptionDate);
        console.log(totalPayment);
        return (
            <div>
                {/* <div>
        <button onClick={this.notify}>Notify !</button> */}
                <ToastContainer />
                {/* </div> */}
                <div className="row-12 no-gutters">
                    <div className="row ">
                        <div className="col">
                            <p className="titlePayment">Tổng</p>
                        </div>
                        <div className="col">
                            <p
                                className="pPayment"
                            > {this.convertCurrecyToVnd(totalPayment)}</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <p className="titlePayment">Giảm giá</p>
                        </div>
                        <div className="col">
                            <p
                                className="pPayment"
                            > 0 đ</p>
                        </div>
                    </div>
                    <div className="row ">
                        <div className="col">
                            <p className="titlePayment">Số tiền thanh toán</p>
                        </div>
                        <div className="col">
                            <p className="pPayment">
                                {this.convertCurrecyToVnd(totalPayment)}
                            </p>
                        </div>
                    </div>
                </div>
                <br></br>
                <div className="row-12 no-gutters">
                    <div className="row no-gutters">
                        {/* <div
                            onClick={this.reset}
                            style={{ display: "table" }}
                            className="col-5">
                            <p className="deleteAllTitle"
                            >Xóa tất cả</p>
                        </div> */}
                        <div className="col"
                            style={{ padding: "0px" }}
                        >
                            {/* <Link to={{
                                pathname: "/payment",
                                state: { ticketTypeID, ticketName, totalPayment, redemptionDate }
                            }} >

                                <button className="bookingBtn">
                                    Đặt vé ngay
                            </button>
                            </Link> */}
                            <form onSubmit={this.checkLogin}>
                                <span style={{ visibility: this.state.checkLoginFlag === true ? "hidden" : "visible" }} >Vui Lòng đăng nhập trước khi đặt vé</span>
                                <button
                                    // onClick={this.checkLogin}
                                    type="submit"
                                    className="bookingBtn">
                                    Đặt vé ngay
                            </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

const mapStateToProps = state => {
    return {
        visitorType: state.Ticket
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        removeVisitorType: () => {
            dispatch(removeVisitorType())
        }
    }
}

// export default connect(mapStateToProps, mapDispatchToProps)(TotalPayment);
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(TotalPayment));

// export default TotalPayment;
