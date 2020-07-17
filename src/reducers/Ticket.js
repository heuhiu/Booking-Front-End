import * as types from '../constants/ActionType';
var data = JSON.parse(localStorage.getItem('visitorTypeList'));
var initialState = data ? data : [];
var temp = [];

// var inititalState = '';
var check = true;

var Ticket = (state = initialState, action) => {
    var { item, id, qty, price } = action;
    var index = -1;
    var index2 = -1;
    switch (action.type) {
        // case types.ADD_VISITOR_TYPE_CART:
        //     // const result = state.filter(state => state.visitorTypeId > 6);

        //     if (check === true) {
        //         state.push({
        //             item
        //         })
        //         console.log("change check");
        //         check = false;

        //     }

        //     const huhu = getItemList2(state).item;
        //     console.log(getItemList2(state).item);
        //     console.log(item);


        //     console.log(getItemList(item).visitorTypeId);//37
        //     if (getItemList(huhu) !== null) {
        //         console.log(getItemList(huhu).visitorTypeId);//36
        //     }

        //     const anotherList1 = getItemList(item);
        //     const anotherList2 = getItemList(huhu);
        //     console.log(anotherList1);
        //     console.log(anotherList2);
        //     if (getItemList(huhu) !== null) {
        //         console.log("wtf");
        //         index = getItemList2(state).item.findIndex(myItem => myItem.visitorTypeId == anotherList1.visitorTypeId)
        //         index2 = item.findIndex(myItem => myItem.visitorTypeId == anotherList1.visitorTypeId)
        //     }
        //     console.log(index + " " + index2);
        //     if (index !== -1) {
        //         console.log("dub");
        //         getItemList2(state).item[index].ticketQuantity = anotherList1.ticketQuantity
        //         localStorage.setItem('visitorTypeList', JSON.stringify(getItemList2(state)));
        //     } else {
        //         console.log("fuck it");
        //         state.push({
        //             item
        //         })
        //         console.log(state);
        //         // var myIndex = state.findIndex(myItem2 => myItem2.visitorTypeId == anotherList1.visitorTypeId)
        //         // if(index !== -1){
        //         //     console.log(state[myIndex]);
        //         // }
        //         localStorage.setItem('visitorTypeList', JSON.stringify(state));
        //     }


        //     // initialState = state
        //     // console.log(state.slice(-1)[0]);
        //     console.log("-----------------------------------------------")
        case types.ADD_VISITOR_TYPE_CART:
            // console.log(id + " " + qty + " " + price);
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
            localStorage.setItem('visitorTypeList', JSON.stringify(state));
            // console.log("-----------------------------------------------")
            return [...state];
        default: return state;
    }
}



var findProductInState = (state, item) => {
    var index = -1;
    if (state.length >= 0) {
        for (var i = 1; i < state.length; i++) {
            if (state[i].visitorTypeId === item.visitorTypeId) {
                index = i;
                break;
            }
        }
    }
    return index;
}

var getItemList = (state) => {
    if (state === undefined) {
        return null;
    }
    else {
        var element = [];
        for (let index = 0; index < state.length; index++) {
            element = state[index];
        }
        return element;
    }
}

var getItemList2 = (state) => {
    var element = [];
    for (let index = 0; index < state.length; index++) {
        element = state[index];
    }
    return element
}



export default Ticket;