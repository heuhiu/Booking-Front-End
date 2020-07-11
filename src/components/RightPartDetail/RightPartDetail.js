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
            style={{border: "1px solid #FF7062",
            padding: "1rem", margin: "1rem", position: "fixed", top: "0px"
            }}
            >
                Righrt pảt
            </div>
        );
    }

}

export default RightPartDetail;
