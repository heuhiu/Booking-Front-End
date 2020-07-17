import * as types from '../constants/ActionType';
import callApi from '../config/utils/apiCaller';
import axios from 'axios';



// export const actFetchlistAllParkRequest = () => {
//     return (dispatch) => {
//         return callApi('parks', 'GET', null).then(res => {
//             // console.log(res.data);
//             dispatch(actFetchlistAllPark(res.data))
//         });
//     };
// }

// export const actFetchlistAllPark = (a) => {
//     return {
//         type: types.FETCH_PARK,
//         a
//     }
// }

// export const actNameP = (nameP) => {
//     return {
//         type: types.SEARCH_PARK_BY_NAME,
//         nameP
//     }
// }

// export const getParkID = (id) => {
//     return {
//         type: types.GET_PARK_ID,
//         id
//     }
// }

export const getUserLogin = (user) => {
    return {
        type: types.GET_USER_LOGIN,
        user
    }
}

// export const actAddToCart = (product, quantity) => {
//     return {
//         type : types.ADD_TO_CART,
//         product : product,
//         quantity : quantity
//     }
// }

export const actUpdateProductIncart = (product, quantity) => {
  return {
      type : types.UPDATE_TICKET,
      product,
      quantity
  }
}

export const addVisitorTypeCart = (item) => {
  return {
      type : types.ADD_VISITOR_TYPE_CART,
      item,
      
  }
}

export const fetchVisitor = (item) => {
  return {
      type: types.ADD_VISITOR_TYPE_CART,
      item
  }
}

export const fetchVisitor2 = (id, qty, price) => {
  return {
      type: types.ADD_VISITOR_TYPE_CART,
      id,
      qty,
      price
  }
}