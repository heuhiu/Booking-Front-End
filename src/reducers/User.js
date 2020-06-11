import * as types from '../constants/ActionType';

var inititalState = ({

});


var User = (state = inititalState, action) => {
    switch (action.type) {
        case types.GET_USER_LOGIN:
            state = action.user;
            return state;
        default: return state;
    }
}

export default User;