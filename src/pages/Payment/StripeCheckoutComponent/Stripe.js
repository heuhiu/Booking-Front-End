import React, { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { CardElement, Elements, useElements, useStripe } from '@stripe/react-stripe-js';

import './stripe.css';
import callApi from "../../../config/utils/apiCaller";

const CARD_OPTIONS = {
    iconStyle: 'solid',
    style: {
        base: {
            iconColor: '#c4f0ff',
            color: '#fff',
            fontWeight: 500,
            fontFamily: 'Roboto, Open Sans, Segoe UI, sans-serif',
            fontSize: '16px',
            fontSmoothing: 'antialiased',
            ':-webkit-autofill': {
                color: '#ff7062',
            },
            '::placeholder': {
                color: '#87bbfd',
            },
        },
        invalid: {
            iconColor: '#ffc7ee',
            color: '#ffc7ee',
        },
    },
};

const CardField = ({ onChange }) => (
    <div className="FormRow">
        <CardElement options={CARD_OPTIONS} onChange={onChange} />
    </div>
);

const Field = ({
    label,
    id,
    type,
    placeholder,
    required,
    autoComplete,
    value,
    onChange,
}) => (
        <div className="FormRow">
            <label htmlFor={id} className="FormRowLabel">
                {label}
            </label>
            <input
                className="FormRowInput"
                id={id}
                type={type}
                placeholder={placeholder}
                required={required}
                autoComplete={autoComplete}
                value={value}
                onChange={onChange}
            />
        </div>
    );

const SubmitButton = ({ processing, error, children, disabled }) => (
    <button
        className={`SubmitButton ${error ? 'SubmitButton--error' : ''}`}
        type="submit"
        disabled={processing || disabled}
    >
        {processing ? 'Processing...' : children}
    </button>
);

const ErrorMessage = ({ children }) => (
    <div className="ErrorMessage" role="alert">
        <svg width="16" height="16" viewBox="0 0 17 17">
            <path
                fill="#FFF"
                d="M8.5,17 C3.80557963,17 0,13.1944204 0,8.5 C0,3.80557963 3.80557963,0 8.5,0 C13.1944204,0 17,3.80557963 17,8.5 C17,13.1944204 13.1944204,17 8.5,17 Z"
            />
            <path
                fill="#6772e5"
                d="M8.5,7.29791847 L6.12604076,4.92395924 C5.79409512,4.59201359 5.25590488,4.59201359 4.92395924,4.92395924 C4.59201359,5.25590488 4.59201359,5.79409512 4.92395924,6.12604076 L7.29791847,8.5 L4.92395924,10.8739592 C4.59201359,11.2059049 4.59201359,11.7440951 4.92395924,12.0760408 C5.25590488,12.4079864 5.79409512,12.4079864 6.12604076,12.0760408 L8.5,9.70208153 L10.8739592,12.0760408 C11.2059049,12.4079864 11.7440951,12.4079864 12.0760408,12.0760408 C12.4079864,11.7440951 12.4079864,11.2059049 12.0760408,10.8739592 L9.70208153,8.5 L12.0760408,6.12604076 C12.4079864,5.79409512 12.4079864,5.25590488 12.0760408,4.92395924 C11.7440951,4.59201359 11.2059049,4.59201359 10.8739592,4.92395924 L8.5,7.29791847 L8.5,7.29791847 Z"
            />
        </svg>
        {children}
    </div>
);


const CheckoutForm = () => {
    const stripe = useStripe();
    const elements = useElements();
    const [error, setError] = useState(null);
    const [cardComplete, setCardComplete] = useState(false);
    const [processing, setProcessing] = useState(false);
    const [paymentMethod, setPaymentMethod] = useState(null);
    const [token, setToken] = useState(null);
    const [billingDetails, setBillingDetails] = useState({
        email: '',
        phone: '',
        name: '',
    });

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            // Stripe.js has not loaded yet. Make sure to disable
            // form submission until Stripe.js has loaded.
            return;
        }

        if (error) {
            elements.getElement('card').focus();
            return;
        }

        if (cardComplete) {
            setProcessing(true);
        }



        const payload = await stripe.createPaymentMethod({
            type: 'card',
            card: elements.getElement(CardElement),
            billing_details: billingDetails,
        });


        setProcessing(false);

        if (payload.error) {
            setError(payload.error);
        } else {
            setPaymentMethod(payload.paymentMethod);
            console.log(payload.paymentMethod);
            console.log(payload.paymentMethod.id);
            console.log(billingDetails);
            console.log(billingDetails.email);
            callApi('payment', 'POST', {
                stripeToken: payload.paymentMethod.id,
                payDate: "",
                mail: billingDetails.email,
                name: billingDetails.name,
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
    
    // var stripe2 = ('pk_test_51Gs1h2GNT0lWowJdNu2saBCmJ2BzwKowJQuTGkUmxcFxHHY6L80y8GAQhAsEUV30KWLeEn2zXxRspwDJEHdIgMKv00ZCZWEaKE');

    // stripe2.tokens.create(
    //     {
    //         card: {
    //             number: '4242424242424242',
    //             exp_month: 7,
    //             exp_year: 2021,
    //             cvc: '314',
    //         },
    //     },
    //     function (err, token) {
    //         callApi('payment', 'POST', {
    //             stripeToken: token.id,
    //             payDate: "",
    //             mail: "",
    //             name: "",
    //             totalPayment: 200,
    //             methodKey: ""
    //         }).then(res => {
    //             console.log(res.data);
    //         }).catch(function (error) {
    //             if (error.response) {
    //                 console.log(error)
    //             }
    //         });
    //     }
    // );
    return paymentMethod ? (
        <div className="Result">
            <p >
                Token: {paymentMethod.id}</p>
            <p >
                Mail: {billingDetails.email}</p>
            <p >
                Name:{billingDetails.name}
            </p>
            <p >
                Phone: {billingDetails.phone}
            </p>
        </div>
    ) : (
            <form className="Form" onSubmit={handleSubmit}>
                <fieldset className="FormGroup">
                    <Field
                        label="Name"
                        id="name"
                        type="text"
                        placeholder="Jane Doe"
                        required
                        autoComplete="name"
                        value={billingDetails.name}
                        onChange={(e) => {
                            setBillingDetails({ ...billingDetails, name: e.target.value });
                        }}
                    />
                    <Field
                        label="Email"
                        id="email"
                        type="email"
                        placeholder="janedoe@gmail.com"
                        required
                        autoComplete="email"
                        value={billingDetails.email}
                        onChange={(e) => {
                            setBillingDetails({ ...billingDetails, email: e.target.value });
                        }}
                    />
                    <Field
                        label="Phone"
                        id="phone"
                        type="tel"
                        placeholder="(941) 555-0123"
                        required
                        autoComplete="tel"
                        value={billingDetails.phone}
                        onChange={(e) => {
                            setBillingDetails({ ...billingDetails, phone: e.target.value });
                        }}
                    />
                </fieldset>
                <fieldset className="FormGroup">
                    <CardField
                        onChange={(e) => {
                            setError(e.error);
                            setCardComplete(e.complete);
                        }}
                    />
                </fieldset>
                {error && <ErrorMessage>{error.message}</ErrorMessage>}
                <SubmitButton
                    processing={processing}
                    error={error}
                    disabled={!stripe}>
                    {/* {this.props.totalPayment} $ */}
        Purchase
      </SubmitButton>
            </form>
        );
};

const ELEMENTS_OPTIONS = {
    fonts: [
        {
            cssSrc: 'https://fonts.googleapis.com/css?family=Roboto',
        },
    ],
};

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
// const stripePromise = loadStripe('pk_test_6pRNASCoBOKtIshFeQd4XMUh');
const stripePromise = loadStripe('pk_test_51Gs1h2GNT0lWowJdNu2saBCmJ2BzwKowJQuTGkUmxcFxHHY6L80y8GAQhAsEUV30KWLeEn2zXxRspwDJEHdIgMKv00ZCZWEaKE');

const Stripe = () => {
    return (
        <div className="AppWrapper">
            <Elements stripe={stripePromise} options={ELEMENTS_OPTIONS}>
                <CheckoutForm />
            </Elements>
        </div>
    );
};

export default Stripe;