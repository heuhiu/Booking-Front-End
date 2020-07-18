import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchVisitor2 } from '../../../actions/index';
import './AddSub.css';
import axios from 'axios';
import { isFirstDayOfMonth } from 'date-fns';
// const radioToolbar = "radio-toolbar";
var quantity = 0;

class VisitorTypeItem extends Component {

    constructor(props) {
        super(props);
        this.state = {
            quantity: 0
        }
    }


    render() {
        const { item, index, visitorType } = this.props;
        debugger
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
                        <div className="col-5" style={{ display: "table" }} >
                            <p className="myTitleType"> {item.typeName} </p>
                        </div>

                        <div className="col" style={{ display: "table" }} >
                            <p className="myTitlePrice">đ {item.price}</p>
                        </div>
                        <div className="col-4">
                            <div className="quantityBox">
                                <div style={{ textAlign: "center" }} className="row no-gutters">
                                    <div className="quantityBtn"
                                        onClick={() => this.onUpdateQuantity(item, myQuan - 1)}><p>-</p>
                                    </div>
                                    <div className="quantityBtn2">
                                        <p> {myQuan} </p>
                                    </div>
                                    <div className="quantityBtn"
                                        onClick={() => this.onUpdateQuantity(item, myQuan + 1)}><p>+</p>
                                    </div>
                                </div>
                            </div >
                        </div>
                    </div>
                </div>
            </div>
        );
    }


    onUpdateQuantity = (item, quantity) => {
        const { fetchVisitor2, visitorType } = this.props;
        if (quantity >= 0) {
            fetchVisitor2(item.id, quantity, item.price);
            this.forceUpdate()
            
        }
        // this.setState({
        //     myId: item.id,
        //     price: item.price
        // }
        //     , () => {
        //         fetchVisitor2(this.state.myId, quantity, this.state.price);
        //     }
        // );




    }

}
const mapStateToProps = state => {
    return {
        // visitorType: state.Ticket
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        fetchVisitor2: (id, qty, price) => {
            dispatch(fetchVisitor2(id, qty, price))
        }
    }
}

// export default MyCounter;
export default connect(mapStateToProps, mapDispatchToProps)(VisitorTypeItem);
