import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { getUserLogin } from '../../../actions/index';

class CfMail extends Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }

    componentWillMount = () => {
        const urlParams = new URLSearchParams(window.location.search);
        const myParam = urlParams.get('token');
        console.log(myParam);
        axios.get('http://localhost:8090/user/active', {
            params: {
                token: myParam
            }
        }).then(res => {
            var jwtDecode = require('jwt-decode');
            //set state
            if (res.data) {
                console.log(res.data.token);
                localStorage.setItem('tokenLogin', JSON.stringify(res.data));
                var decoded = jwtDecode(res.data.token);
                this.props.fetchUserDetail(decoded.user);
                console.log(decoded.user);
                // alert("will push to home page if sucess");
                this.props.history.push("/");
            }
        }).catch(function (error) {
            console.log(error.response);
        });
    }

    render() {

        return (
            <div>
                <h1>Verify success !</h1>
            </div>
        );
    }

}

// export default CfMail;
const mapDispatchToProps = (dispatch, props) => {
    return {
        fetchUserDetail: (user) => {
            dispatch(getUserLogin(user))
        }
    }
}

export default connect(null, mapDispatchToProps)(CfMail);