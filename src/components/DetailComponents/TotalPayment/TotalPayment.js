import React, { Component } from 'react';
import { connect } from 'react-redux';
import './TotalPayment.css';
// import { vi } from 'date-fns/locale';
import { removeVisitorType } from '../../../actions/index';

class TotalPayment extends Component {

    constructor(props) {
        super(props);
        this.state = {
            totalPrice: 0,
            discount: 0
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

    render() {
        const { visitorType, totalPayment } = this.props;
        // console.log(visitorType);
        return (
            <div>
                <div className="row-12 no-gutters">
                    <div className="row ">
                        <div className="col">
                            <p className="titlePayment">Tổng</p>
                        </div>
                        <div className="col">
                            <p
                                className="pPayment"
                            >đ {totalPayment}</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <p className="titlePayment">Giảm giá</p>
                        </div>
                        <div className="col">
                            <p
                                className="pPayment"
                            >đ 0</p>
                        </div>
                    </div>
                    <div className="row ">
                        <div className="col">
                            <p className="titlePayment">Số tiền thanh toán</p>
                        </div>
                        <div className="col">
                            <p className="pPayment">
                                đ {totalPayment}
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
                            <button className="bookingBtn">
                                Đặt vé ngay
                            </button>
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

export default connect(mapStateToProps, mapDispatchToProps)(TotalPayment);

// export default TotalPayment;
