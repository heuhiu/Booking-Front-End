import React, { Component } from 'react';
import { connect } from 'react-redux';
import './RightPartDetail.css';


class RightPartDetail extends Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }
    render() {
        return (
            <div
            className="rightPart"
            >
                <p>Sticky Information</p>
            </div>
        );
    }

}

export default RightPartDetail;
