import React, { Component } from 'react';
import {
  CardElement,
  injectStripe,
  StripeProvider,
  Elements,
} from 'react-stripe-elements';
import { connect } from 'react-redux';
import callApi from '../../../config/utils/apiCaller';
import { Link, Redirect } from 'react-router-dom';
import { showLoader, hideLoader } from '../../../actions/index';
import FullPageLoader from '../../../components/FullPageLoader/FullPageLoader';

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
    // debugger
    evt.preventDefault();

    const { orderDetail, visitorType, loggedUser } = this.props;

    if (orderDetail.state.orderStatus) {
      console.log(orderDetail.state.orderStatus);

    } else {
      console.log("khong ton tai status");
    }

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
      userId: loggedUser.id,
      firstName: loggedUser.firstName,
      lastName: loggedUser.lastName,
      mail: loggedUser.mail,
      phoneNumber: loggedUser.phoneNumber,
      totalPayment: orderDetail.state.totalPayment,
      purchaseDay: new Date(),
      redemptionDate: orderDetail.state.redemptionDate,
      orderItems: orderItems,
      id: orderDetail.state.orderStatus ? orderDetail.state.orderId : null,
      placeId: orderDetail.state.place.id
    }



    if (this.props.stripe) {
      this.props.stripe.createToken()
        .then(res => {
          console.log(res.token.id);
          // const paymentToken = res.token.id;
          const paymentToken = res.token.id;
          let data = new FormData();
          const myStatus = "existed";
          const myNewStatus = "new";
          // if(orderDetail.state.orderStatus) {
          //   data.append('action', myStatus);
          //   } else {
          //   data.append('action', "new");
          //   }
          data.append('order', JSON.stringify(order));
          data.append('token', paymentToken);
          data.append('action', orderDetail.state.orderStatus ? myStatus : myNewStatus);

          //  callApi('payment', 'POST', data) 
          //   .then (res => {
          //     console.log(res);
          //     if (res) {
          //       this.props.history.push({
          //         pathname: '/paymentSucess',
          //         state: { orderDetail: orderDetail }
          //       })
          //     }
          //   })
          //   .catch(function (error) {
          //     if (error.response) {
          //       console.log(error.response);
          //     }
          //   });
          this.callPayment(data, orderDetail);

        })
    } else {
      console.log("Stripe.js hasn't loaded yet.");
    }

  };

  callPayment = async (data, orderDetail) => {
    const { showLoader, hideLoader } = this.props;
    showLoader();
    await callApi('payment', 'POST', data)
      .then(res => {
        console.log(res);
        hideLoader();
        if (res) {
          this.props.history.push({
            pathname: '/paymentSucess',
            state: { orderDetail: orderDetail }
          })
        }
      })
      .catch(function (error) {
        if (error.response) {
          hideLoader();
          alert("error")
          console.log(error.response);
        }
      });
  }

  render() {
    const { orderDetail, showLoader, hideLoader } = this.props;
    console.log(this.props.loggedUser);
    var dateType = {
      weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
    };

    const prnDt = orderDetail.state.redemptionDate.toLocaleDateString('vi', dateType);
    // showLoader();
    return (

      <div className="CardDemo">
        {/* <FullPageLoader /> */}
        {/* <form onSubmit={this.handleSubmit.bind(this)}> */}

        {/* <CardElement
          onChange={this.handleChange}
          {...createOptions()}
        /> */}

        <div className="error" role="alert">
          {this.state.errorMessage}
        </div>
        <div
          className="paymentMethodBox row">
          <div className="row">
            <div className="col">
              <label>Số thẻ</label>

            </div>
          </div>
          <div className="row">

            <div className="col-12">
              {/* <input type="number" className="inputPayment form-control" placeholder="Số thẻ" /> */}
              <CardElement
                onChange={this.handleChange}
                {...createOptions()}
              />
            </div>
            <br></br>
            <br></br>
            <div
              className="lockLogoPayment col-1">
              <svg width="20" height="22" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17 10H3C1.89543 10 1 10.8954 1 12V19C1 20.1046 1.89543 21 3 21H17C18.1046 21 19 20.1046 19 19V12C19 10.8954 18.1046 10 17 10Z" stroke="#A5A5A5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M5 10V6C5 4.67392 5.52678 3.40215 6.46447 2.46447C7.40215 1.52678 8.67392 1 10 1C11.3261 1 12.5979 1.52678 13.5355 2.46447C14.4732 3.40215 15 4.67392 15 6V10" stroke="#A5A5A5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <div className="moreInfor col">
              <p>
                Thông tin giao dịch của bạn được mã hóa an toàn bởi các hệ thống thanh toán uy tín.
              </p>
            </div>
          </div>

          {/* <div className="pdt-30 row">
            <div className="col-12">
              <div className="row">
                <div className="col">
                  <label>Ngày hết hạn</label>
                  <div>{prnDt}</div> */}
          {/* <div className="dropup">
                    <button type="button" className="myCall" data-toggle="dropdown">
                      Ngày &nbsp;
                        <svg width="22" height="13" viewBox="0 0 22 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 0.999999L11 12L21 1" stroke="#FF7062" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>

                    </button>
                    <div className="dropdown-menu">
                      <a className="dropdown-item" href="/#">Link 1</a>
                      <a className="dropdown-item" href="/#">Link 2</a>
                      <a className="dropdown-item" href="/#">Link 3</a>
                    </div>
                  </div> */}

        </div>
        {/* <div className="col-3">
                  <label>&nbsp;</label>
                  <div className="dropdown">
                    <button type="button" aria-haspopup="true" className="myCall" data-toggle="dropdown">
                      Tháng &nbsp;
                                                                                <svg width="22" height="13" viewBox="0 0 22 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 0.999999L11 12L21 1" stroke="#FF7062" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>

                    </button>
                    <div className="dropdown-menu">
                      <a className="dropdown-item" href="/#">Link 1</a>
                      <a className="dropdown-item" href="/#">Link 2</a>
                      <a className="dropdown-item" href="/#">Link 3</a>
                    </div>
                  </div>
                </div>
               */}
        {/* <div className="col">
                  <label>Mã bảo mật</label>
                  <input type="number" className="inputPayment form-control" placeholder="Mã bảo mật" />
                </div> */}

        {/* </div>
            </div> */}

        {/* </div>
        </div> */}
        {/* <Link 
          to={{
            pathname: '/paymentSucess',
            state: orderDetail
          }}> */}
        <button className="proceedPaymentBtn"
          onClick={this.handleSubmit.bind(this)}>
          Pay
          </button>
        {/* </Link> */}
        {/* </form> */}
      </div>
    );
  }
}

const CardForm = injectStripe(_CardForm);

class CardDemo extends Component {
  render() {
    const { orderDetail, visitorType, loggedUser,showLoader, hideLoader } = this.props;
    console.log(orderDetail.state.place.id);
    // console.log(visitorType);
    // console.log(loggedUser)
    return (

      <StripeProvider apiKey='pk_test_51Gs1CYGtpdysubsWvXC2vynpAmqeGq1vGggeXCHQsepXXX5TOxNBKlLFHBsar57TIkYsMYWuTSFg5H40uHBL4TW200nIV10yG5'>
        <Elements>
          <CardForm
            history={this.props.history}
            loggedUser={loggedUser}
            orderDetail={orderDetail}
            visitorType={visitorType}
            showLoader={showLoader}
            hideLoader={hideLoader}
          />
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
    showLoader: () => {
      dispatch(showLoader())
    },
    hideLoader: () => {
      dispatch(hideLoader())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CardDemo);