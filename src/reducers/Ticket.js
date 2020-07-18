import * as types from '../constants/ActionType';
// var data = JSON.parse(localStorage.getItem('visitorTypeList'));
// var initialState = data ? data : [];

var initialState = {quantity: 0};

var Ticket = (state = initialState, action) => {
    var {  id, qty, price } = action;
    var index = -1;
    switch (action.type) {
        case types.ADD_VISITOR_TYPE_CART:
            index = state.findIndex(myItem => myItem.visitorTypeId == id)
            if (index !== -1) { //found
                state[index].quantity = qty;
            } else {
                state.push({
                    visitorTypeId: id,
                    quantity: qty,
                    myPrice: price
                })
            }
            // localStorage.setItem('visitorTypeList', JSON.stringify(state));
            return [...state];
        case types.REMOVE_VISITORTYPE:
            state = [];
            return [...state];
        default: return state;
    }
}


export default Ticket;