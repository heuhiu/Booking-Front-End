import React, { Component } from 'react';
import { connect } from 'react-redux';

class NotFoundPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return (
            <div className="container">
                <p>This is Not Found Page</p>
                <p>This is Not Found Page</p>
                <p>This is Not Found Page</p>
                <p>This is Not Found Page</p>
                <p>This is Not Found Page</p>
                <p>This is Not Found Page</p>
                <p>This is Not Found Page</p>
                <p>This is Not Found Page</p>
                <p>This is Not Found Page</p>
            </div>
        );
    }

}

export default NotFoundPage;
