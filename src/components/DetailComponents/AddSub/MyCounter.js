import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchVisitor2 } from '../../../actions/index';

class MyCounter extends Component {

    constructor(props) {
        super(props);
        this.state = {
            quantity: 0,
            totalPrice: 0,
            myId: 0,
            price: 0,
            orderItems: [
                {
                    visitorTypeId: 0,
                    ticketQuantity: 0
                }
            ]
        }
    }

    render() {
        var { item } = this.props;
        var { quantity, totalPrice, orderItems } = this.state;
        // console.log(quantity + " " + item.typeName);
        // console.log(totalPrice);
        // console.log(orderItems);
        return (
            <div>
                <h5><p>id :{item.id}</p>
                    <strong>{item.typeName}</strong><div>{item.price}</div>
                </h5>

                <div className="center-on-small-only">

                    <div className="btn-group radio-group" data-toggle="buttons">
                        <label
                            onClick={() => this.onUpdateQuantity
                                (item, quantity - 1)}
                            className="btn btn-sm btn-primary
                            btn-rounded waves-effect waves-light"
                        >
                            <a href="/#">—</a>
                        </label>
                        &nbsp;&nbsp;
                        <span className="qty">{quantity} </span>
                        &nbsp;&nbsp;
                        <label
                            onClick={() => this.onUpdateQuantity
                                (item, quantity + 1)}
                            className="btn btn-sm btn-primary
                                                btn-rounded waves-effect waves-light"
                        >
                            <a href="/#">+</a>
                        </label>
                    </div>
                </div>
                <div>{this.showSubTotal(item.price, quantity)}</div>
            </div>
        );
    }

    showSubTotal = (price, quantity) => {
        return price * quantity;
    }

    onUpdateQuantity = (item, quantity) => {
        const { fetchVisitor } = this.props;
        if (quantity >= 0) {
            // var { onUpdateProductInCart, onChangeMessage } = this.props;
            this.setState({
                quantity: quantity,
                myId : item.id,
                price : item.price
                // orderItems: [
                //     {
                //         visitorTypeId: item.id,
                //         ticketQuantity: quantity
                //     }
                // ]
            }
            // , () => {
            //     fetchVisitor(this.state.orderItems);
            // }
            );

        }
    }

    componentDidUpdate = () => {
        const {fetchVisitor, fetchVisitor2} = this.props;
        // fetchVisitor(this.state.orderItems);
        fetchVisitor2(this.state.myId, this.state.quantity, this.state.price);
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        // fetchVisitor: (item) => {
        //     dispatch(fetchVisitor(item))
        // },
        fetchVisitor2: (id, qty, price) => {
            dispatch(fetchVisitor2(id, qty, price))
        }
    }
}

// export default MyCounter;
export default connect(null, mapDispatchToProps)(MyCounter);
