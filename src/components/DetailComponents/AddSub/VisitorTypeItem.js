import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchVisitor2, removeZeroQuantity,removeZeroQuantity2 } from '../../../actions/index';
import './AddSub.css';
// import axios from 'axios';
// import { isFirstDayOfMonth } from 'date-fns';
// const radioToolbar = "radio-toolbar";
// import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// var quantity = 0;

class VisitorTypeItem extends Component {

    constructor(props) {
        super(props);
        this.state = {
            quantity: 0
        }
    }

    render() {
        const { item, index, visitorType } = this.props;
        var myQuan = 0
        if (visitorType !== undefined) {
            myQuan = visitorType.quantity
        }
        return (
            <div key={index} style={{ paddingTop: "40px" }} className="row no-gutters">
                <div className="col-12">
                    <div className="row no-gutters" style={{
                        marginBottom: "10px",
                        background: "#FFFFFF",
                        border: "2px solid #E3E3E3",
                        boxSizing: 'border-box',
                        borderRadius: '10px',
                    }}>
                        <div className="col-lg-7 col-md-7 col-sm-7 col-xs-7" style={{ display: "table" }} >
                            <p style={{ width: "300px" }} className="myTitleType">
                                {item.typeName}
                            </p>
                            {/* <span className="myTitleType">Còn lại: {item.remaining - myQuan} vé</span> */}
                        </div>
                        <div className="responsivetable col-lg-3 col-md-4 col-sm-3 col-xs-1" style={{  }} >
                        </div>
                        <div className="col-lg-2 col-md-2 col-sm-3 col-xs-4">
                            <div className="row no-gutter quantityBox">
                                <div style={{ textAlign: "center" }} className="row no-gutters">
                                    <div className="quantityBtn col"
                                        onClick={() => this.onUpdateQuantity(item, myQuan - 1)}><p>-</p>
                                    </div>
                                    <div className="quantityBtn2 col">
                                        <p> {myQuan} </p>
                                    </div>
                                    <div className="quantityBtn col"
                                        onClick={() => this.onUpdateQuantity(item, myQuan + 1)}><p>+</p>
                                    </div>
                                </div>
                            </div >
                        </div>
                        {/* ------- */}
                       
                    </div>
                </div>
            </div>
        );
    }


    onUpdateQuantity = (item, quantity) => {
        const { fetchVisitor2, removeZeroQuantity } = this.props;
        // console.log(item)
        // console.log(quantity)
        // if (item.remaining - quantity === -1 ) {
        //     toast.error(`Loại vé dành cho ${item.typeName} đã hết`, {
        //         position: "bottom-right",
        //         autoClose: 5000,
        //         hideProgressBar: true,
        //         closeOnClick: true,
        //         pauseOnHover: true,
        //         draggable: true,
        //         progress: undefined,
        //     });
        // }
        // else 
        // window.scrollTo(0, 0)
        if (quantity >= 0
            // && (item.remaining - quantity) >=0 
        ) {
            fetchVisitor2(item.id, quantity, item.price, item.typeName, item.remaining);
            // removeZeroQuantity();
            this.forceUpdate()
        }
        // else if(quantity === 0) {
        //     removeZeroQuantity(item.id);
        // }
    }

}
const mapStateToProps = state => {
    return {
        // visitorType: state.Ticket
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        fetchVisitor2: (id, qty, price, name, remaining) => {
            dispatch(fetchVisitor2(id, qty, price, name, remaining))
        },
        // removeZeroQuantity: (removeId) => {
        //     dispatch(removeZeroQuantity(removeId))
        // },
        // removeZeroQuantity2: (removeId) => {
        //     dispatch(removeZeroQuantity2(removeId))
        // }
    }
}

// export default MyCounter;
export default connect(mapStateToProps, mapDispatchToProps)(VisitorTypeItem);
