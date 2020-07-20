import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchVisitor2 } from '../../../actions/index';
import './AddSub.css';
// const radioToolbar = "radio-toolbar";
class MyCounter extends Component {

    constructor(props) {
        super(props);
        this.state = {
            quantity: 0,
            myId: 0,
            price: 0,
        }
    }

    getMyList = (data) => {
        var { item } = this.props;
        // console.log(item.id);
        // var element = [];
        var qty = 0;
        if (data !== null) {
            const index = data.findIndex(myItem => myItem.visitorTypeId == item.id)
            if (index !== -1) {

                for (let index = 0; index < data.length; index++) {
                    qty = data[index].quantity;
                }
            }
        }
        return qty;
    }

    render() {
        var { item } = this.props;
        var data = JSON.parse(localStorage.getItem('visitorTypeList'));
        if (data !== null) {
            // console.log(data);
            // console.log(this.getMyList(data));
        }
        return (
            <div>
                <div
                    style={{ textAlign: "center" }}
                    className="row no-gutters">
                    <div className="quantityBtn"
                        onClick={() => this.onUpdateQuantity
                            (item, this.state.quantity - 1)}
                    >
                        <p>-</p>
                    </div>
                    <div className="quantityBtn2">
                        <p>
                            {this.state.quantity}
                        </p>
                    </div>
                    <div className="quantityBtn"
                        onClick={() => this.onUpdateQuantity
                            (item, this.state.quantity + 1)}
                    >
                        <p>+</p>
                    </div>
                </div>
            </div>
        );
    }


    onUpdateQuantity = (item, quantity) => {
        const { fetchVisitor2 } = this.props;
        if (quantity >= 0) {
            // var { onUpdateProductInCart, onChangeMessage } = this.props;
            this.setState({
                quantity: quantity,
                myId: item.id,
                price: item.price
            }
                , () => {
                    fetchVisitor2(this.state.myId, this.state.quantity, this.state.price);
                }
            );

        }


    }

}
const mapStateToProps = state => {
    return {
        visitorType: state.Ticket
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
export default connect(mapStateToProps, mapDispatchToProps)(MyCounter);
