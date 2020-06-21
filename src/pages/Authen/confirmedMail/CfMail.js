import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

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
            //set state
            if (res.data) {
                alert("will push to home page if sucess");
                this.props.push('/');
            }
        }).catch(function (error) {
            console.log(error.response);
        });
    }

    render() {

        return (
            <div>
                Confirm page
            </div>
        );
    }

}

export default CfMail;
