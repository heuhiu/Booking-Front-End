import * as types from '../constants/ActionType';
import { showLoader, hideLoader } from '../actions/index';
import callApi from '../config/utils/apiCaller';
import { connect } from 'react-redux';

// var data = JSON.parse(localStorage.getItem('USER'));
// var inititalState = ({});
// var initialState = data ? data : [];

var initialState = [];


var User = (state = initialState, action) => {
    var checkLogin = async () => {
        var jwtDecode = require('jwt-decode');
        var tokenLogin = JSON.parse(localStorage.getItem('tokenLogin'));
        if (tokenLogin) {
            var decoded = jwtDecode(tokenLogin);
            // console.log(decoded);
            const id = decoded.user.userId;
            // this.props.fetchUserDetail(decoded.user);
            await callApi("login/checkToken", 'POST', null)
                .then(res => {
                    this.setState({ checkToken: true })
                    console.log(res);
                    callApi(`userClient/${id}`, 'GET', null)
                        .then(res => {
                            // console.log(res);
                            // this.props.fetchUserDetail(res.data);
                            return res.data;
                        }).catch(function (error) {
                            if (error.response) {
                                console.log(error.response.data);
                            }
                        });
                    // this.callApifechUser(id, res.data)
                }).catch(function (error) {
                    if (error.response) {
                        hideLoader();
                        localStorage.removeItem('tokenLogin');
                        window.location.reload();
                    }
                });
        }
    }
    switch (action.type) {
        case types.GET_USER_LOGIN:
            state = action.user;
            // localStorage.setItem('USER', JSON.stringify(state));
            return state;
        case types.REMOVE_USER_LOGIN:
            state = [];
            // localStorage.setItem('USER', JSON.stringify(state));
            return state;
        case types.CHECK_TOKEN_LOGIN:
            var jwtDecode = require('jwt-decode');
            var tokenLogin = JSON.parse(localStorage.getItem('tokenLogin'));
            if (tokenLogin) {
                var decoded = jwtDecode(tokenLogin);
                // console.log(decoded);
                const id = decoded.user.userId;
                // this.props.fetchUserDetail(decoded.user);
                 callApi("login/checkToken", 'POST', null)
                    .then(res => {
                        this.setState({ checkToken: true })
                        console.log(res);
                        callApi(`userClient/${id}`, 'GET', null)
                            .then(res => {
                                console.log(res);
                                // this.props.fetchUserDetail(res.data);
                                // return res.data;
                                state = res.data;
                            }).catch(function (error) {
                                if (error.response) {
                                    console.log(error.response.data);
                                }
                            });
                        // this.callApifechUser(id, res.data)
                    }).catch(function (error) {
                        if (error.response) {
                            hideLoader();
                            localStorage.removeItem('tokenLogin');
                            window.location.reload();
                        }
                    });
                }
                // localStorage.setItem('USER', JSON.stringify(state));
                return state;
        default: return state;
    }
}

export default User;
