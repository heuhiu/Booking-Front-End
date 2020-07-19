import React, {Component} from "react";
import "../payment.css";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe("pk_test_51Gs1h2GNT0lWowJdNu2saBCmJ2BzwKowJQuTGkUmxcFxHHY6L80y8GAQhAsEUV30KWLeEn2zXxRspwDJEHdIgMKv00ZCZWEaKE");

// const MainStripe = () => {
//   const { orderDetail } = this.props;
//   return (
//     <div className="App">
//       <div className="product">
//         <img
//           src="https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress"
//           alt="laptop"
//           style={{ width: "100%", height: "auto" }}
//         />
//         <div>
//           <Elements stripe={stripePromise}>
//             <CheckoutForm orderDetail={orderDetail} />
//           </Elements>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MainStripe;

class MainStripe extends Component {

  constructor(props) {
      super(props);
      this.state = {
      }
  }

  render() {
    const { orderDetail } = this.props;
    console.log(orderDetail);
      return (
        <div className="App">
               <div className="product">
                 <img
                  src="https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress"
                  alt="laptop"
                  style={{ width: "100%", height: "auto" }}
                />
                <div>
                  <Elements stripe={stripePromise}>
                    <CheckoutForm osssss={orderDetail}/>
                  </Elements>
                </div>
              </div>
            </div>
      );
  }

}

export default MainStripe;