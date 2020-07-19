import React from "react";
import { ElementsConsumer, CardElement } from "@stripe/react-stripe-js";
import callApi from '../../../config/utils/apiCaller';
import CardSection from "./CardSection";

class CheckoutForm extends React.Component {
    handleSubmit = async event => {
        event.preventDefault();

        const { stripe, elements } = this.props;
        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);
        const result = await stripe.createToken(card);

        
        if (result.error) {
            console.log(result.error.message);
        } else {
            console.log(result.token);
            callApi('payment', 'POST', {
                stripeToken: result.token.id,
            })
            .then(res => {
                console.log(res.data);
            })
            .catch(function (error) {
                if (error.response) {
                    console.log(error)
                }
            });

        }

    };

    render() {
        const {orderDetail, elements} = this.props;
        console.log(orderDetail);
        console.log(elements);
        return (
            <div>
                <div class="product-info">
                    <h3 className="product-title">Apple MacBook Pro</h3>
                    <h4 className="product-price">$999</h4>
                </div>
                <form onSubmit={this.handleSubmit}>
                    <CardSection />
                    <button disabled={!this.props.stripe} className="btn-pay">
                        Buy Now
                    </button>
                </form>
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

    }
}

// export default connect(mapStateToProps, mapDispatchToProps)(TotalPayment);


export default function InjectedCheckoutForm() {
    return (
        <ElementsConsumer>
            {({ stripe, elements, orderDetail }) => (
                <CheckoutForm stripe={stripe} elements={elements} orderDetail={orderDetail}/>
            )}
        </ElementsConsumer>
    );
}