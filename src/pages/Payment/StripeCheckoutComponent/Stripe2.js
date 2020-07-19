import React, { Component } from 'react';
import './cart.css'
// import { CardElement } from "@stripe/react-stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { ElementsConsumer, CardElement } from "@stripe/react-stripe-js";
import callApi from "../../../config/utils/apiCaller";
import { loadStripe } from "@stripe/stripe-js";
const stripePromise = loadStripe('pk_test_51Gs1h2GNT0lWowJdNu2saBCmJ2BzwKowJQuTGkUmxcFxHHY6L80y8GAQhAsEUV30KWLeEn2zXxRspwDJEHdIgMKv00ZCZWEaKE');
const CARD_ELEMENT_OPTIONS = {
    iconStyle: "solid",
    hidePostalCode: true,
    style: {
        base: {
            iconColor: "rgb(240, 57, 122)",
            color: "rgb(240, 57, 122)",
            fontSize: "16px",
            fontFamily: '"Open Sans", sans-serif',
            fontSmoothing: "antialiased",
            "::placeholder": {
                color: "#CFD7DF"
            }
        },
        invalid: {
            color: "#e5424d",
            ":focus": {
                color: "#303238"
            }
        }
    }
};

function CardSection() {
    return <CardElement options={CARD_ELEMENT_OPTIONS} />;
}
//   ------------------------------------------------------------------
class CheckoutForm extends React.Component {
     handleSubmit = async event => {
        event.preventDefault();
    
        const { stripe, elements } = this.props;
        if (!stripe || !elements) {
            console.log("FAIL");
            console.log(stripe);
            console.log(elements);
            return;
        }
    
        const card = elements.getElement(CardElement);
        const result = await stripe.createToken(card);
        if (result.error) {
            console.log(result.error.message);
        } else {
            console.log(result.token);
            // pass the token to your backend API
            callApi('payment', 'POST', {
                stripeToken: result.token.id,
                payDate: "",
                mail: "",
                name: "",
                totalPayment: 200,
                methodKey: ""
            }).then(res => {
                console.log(res.data);
            }).catch(function (error) {
                if (error.response) {
                    console.log(error)
                }
            });
        }
    };
    render() {
        return (
            <div>
                <div class="product-info">
                    <h3 className="product-title">Apple MacBook Pro</h3>
                    <h4 className="product-price">$999</h4>
                </div>
                {/* <form  */}
                {/* // onSubmit={this.handleSubmit} */}
                {/* > */}
                    <CardSection />
                    <button onClick={this.handleSubmit} className="btn-pay">Buy Now</button>
                {/* </form> */}
            </div>
        );
    }
}
function InjectedCheckoutForm() {
    return (
        <ElementsConsumer>
            {({ stripe, elements }) => (
                <CheckoutForm stripe={stripe} elements={elements} />
            )}
        </ElementsConsumer>
    );
}


//   ----------------------------------------------------
class Stripe2 extends Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return (
            <div>
                <div className="App">
                    <div className="product">
                        <img
                            src="https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress"
                            alt="laptop"
                            style={{ width: "100%", height: "auto" }}
                        />
                        <div>
                            {
                                <Elements stripe={stripePromise}>
                                    <CheckoutForm />
                                </Elements>
                            }
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

export default Stripe2;
