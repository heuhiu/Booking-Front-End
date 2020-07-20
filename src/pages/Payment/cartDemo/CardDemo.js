import React, { Component } from 'react';
import {
  CardElement,
  injectStripe,
  StripeProvider,
  Elements,
} from 'react-stripe-elements';
import { connect } from 'react-redux';
import callApi from '../../../config/utils/apiCaller';
// You can customize your Elements to give it the look and feel of your site.
const createOptions = () => {
  return {
    style: {
      base: {
        fontSize: '16px',
        color: '#424770',
        fontFamily: 'Open Sans, sans-serif',
        letterSpacing: '0.025em',
        '::placeholder': {
          color: '#aab7c4',
        },
      },
      invalid: {
        color: '#c23d4b',
      },
    }
  }
};

class _CardForm extends Component {
  state = {
    errorMessage: '',
  };

  handleChange = ({ error }) => {
    if (error) {
      this.setState({ errorMessage: error.message });
    }
  };

  handleSubmit = (evt) => {
    debugger
    evt.preventDefault();
    const { orderDetail, visitorType, loggedUser } = this.props;
    // console.log(orderDetail.state.ticketTypeID);
    // console.log(orderDetail.state.ticketName);
    // const ticketName = orderDetail.state.ticketName;
    // console.log(orderDetail.state.totalPayment);
    // const totalPayment = orderDetail.state.totalPayment;
    // console.log(visitorType);
    // console.log(loggedUser);

    var orderItems = [];
    var item = {
      visitorTypeId: null,
      visitorTypeName: null,
      quantity: null
    }
    for (let index = 0; index < visitorType.length; index++) {
      item = {
        visitorTypeId: visitorType[index].visitorTypeId,
        quantity: visitorType[index].quantity
      }
      orderItems.push(item)
    }

    var order = {
      ticketTypeId: orderDetail.state.ticketTypeID,
      ticketTypeName: orderDetail.state.ticketName,
      userId: 1,
      firstName: loggedUser.firstName,
      lastName: loggedUser.lastName,
      mail: loggedUser.mail,
      phoneNumber: loggedUser.phoneNumber,
      totalPayment: orderDetail.state.totalPayment,
      purchaseDay: new Date(),
      redemptionDate: orderDetail.state.redemptionDate,
      orderItems: orderItems
    }



    if (this.props.stripe) {
      this.props.stripe.createToken()
        .then(res => {
          console.log(res.token.id);
          // const paymentToken = res.token.id;
          const paymentToken = res.token.id;
          let data = new FormData();
          data.append('order', JSON.stringify(order));
          data.append('token', paymentToken);
          callApi('payment', 'POST', data)
            .then(res => {
              console.log(res);
            })
            .catch(function (error) {
              if (error.response) {
                console.log(error)
              }
            });
        })
    } else {
      console.log("Stripe.js hasn't loaded yet.");
    }
  };

  render() {
    console.log(this.props.loggedUser);
    return (
      
      <div className="CardDemo">
        {/* <form onSubmit={this.handleSubmit.bind(this)}> */}

          Card details
            <CardElement
            onChange={this.handleChange}
            {...createOptions()}
          />

          <div className="error" role="alert">
            {this.state.errorMessage}
          </div>
          <button onClick={this.handleSubmit.bind(this)}>Pay</button>
        {/* </form> */}
      </div>
    );
  }
}

const CardForm = injectStripe(_CardForm);

class CardDemo extends Component {
  render() {
    const { orderDetail, visitorType, loggedUser } = this.props;
    console.log(orderDetail);
    console.log(visitorType);
    console.log(loggedUser)
    return (

      <StripeProvider apiKey='pk_test_51Gs1CYGtpdysubsWvXC2vynpAmqeGq1vGggeXCHQsepXXX5TOxNBKlLFHBsar57TIkYsMYWuTSFg5H40uHBL4TW200nIV10yG5'>
        <Elements>
          <CardForm loggedUser={loggedUser} orderDetail={orderDetail} visitorType={visitorType} />
        </Elements>
      </StripeProvider>
    );
  }
}
// export default CardDemo;

const mapStateToProps = state => {
  return {
      visitorType: state.Ticket,
      loggedUser: state.User
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CardDemo);