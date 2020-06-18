import * as types from '../constants/ActionType';
var data = JSON.parse(localStorage.getItem('USER'));
// var inititalState = ({});
var initialState = data ? data : [];


var User = (state = initialState, action) => {
    switch (action.type) {
        case types.GET_USER_LOGIN:
            state = action.user;
            localStorage.setItem('USER', JSON.stringify(state));
            return state;
        default: return state;
    }
}

export default User;