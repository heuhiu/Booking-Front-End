import React, { Component } from 'react';
import './AddSub.css';
const radioToolbar = "radio-toolbar";

class AddSub extends Component {
    constructor(props) {
        super(props);
        this.state = {
            clicks: 0,
            show: true
        };
    }

    IncrementItem = () => {
        this.setState({ clicks: this.state.clicks + 1 });
    }
    DecreaseItem = () => {
        if (this.state.clicks === 0) {
            this.setState({ clicks: this.state.clicks });
        } else {
            this.setState({ clicks: this.state.clicks - 1 });
        }

    }
    ToggleClick = () => {
        this.setState({ show: !this.state.show });
    }

    render() {
        return (
            <div className="quantityBox">
                <div
                    style={{ textAlign: "center" }}
                    className="row no-gutters">
                    <div className="quantityBtn"
                        onClick={this.DecreaseItem}>
                        <p>-</p>
                    </div>
                    <div className="quantityBtn2">
                        <p>{this.state.clicks}</p>
                    </div>
                    <div className="quantityBtn"
                        onClick={this.IncrementItem}>
                        <p>+</p>
                    </div>
                </div>
            </div >

        );
    }
}

export default AddSub;