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

            // <div className="quantityBox" >
            //     <button onClick={this.IncrementItem}>Click to increment by 1</button>
            //     <button onClick={this.DecreaseItem}>Click to decrease by 1</button>
            //     <button onClick={this.ToggleClick}>
            //         {this.state.show ? 'Hide number' : 'Show number'}
            //     </button>
            //     {this.state.show ? <h2>{this.state.clicks}</h2> : ''}
            // </div>

            <div className="quantityBox">
                <div 
                style={{textAlign: "center"}}
                class="row no-gutters">
                    <div className="quantityBtn">
                        <p>-</p>
                    </div>
                    <div className="quantityBtn">

                    </div>
                    <div className="quantityBtn">
                        +
                    </div>
                </div>
            </div >

        );
    }
}

export default AddSub;