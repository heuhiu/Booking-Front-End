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
        var { match } = this.props;
        var token = match.params.token;
        console.log(token);
        axios.get('http://localhost:8090/user/active', {
            params: {
                token
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
