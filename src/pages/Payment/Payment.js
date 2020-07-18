import React, { Component } from 'react';
// import { connect } from 'react-redux';
import './payment.css';
import "react-step-progress-bar/styles.css";
import { ProgressBar, Step } from "react-step-progress-bar";
import Menu from '../../components/Menu/Menu';
import Footer2 from '../../components/Footer/Footer2/Footer2';

//Payment
class Payment extends Component {

    constructor(props) {
        super(props);
        this.state = {
            myPercen: 0
        }
    }

    render() {
        const { accomplished } = this.state;
        return (
            <div>
                <Menu />
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <div
                    style={{ border: "solid 1px black" }}
                    className="container">
                    <div
                        style={{ border: "solid 1px green" }}
                        className="row">
                        <div
                            style={{ border: "solid 1px blue" }}
                            className="col-8">

                            <ProgressBar
                                percent={this.state.myPercen}
                                filledBackground="linear-gradient(to right, #fefb72, #FF7062)"
                            >
                                <Step
                                    transition="scale">
                                    {({ accomplished }) => (
                                        <div
                                        onClick={() => { this.setState({ myPercen: 0 }) }}
                                        style={{
                                            filter: `grayscale(${accomplished ? 0 : 80}%)`,
                                            border: "1px solid",
                                            borderRadius: "50%",
                                            width: "30px",
                                            height: "30px",
                                            background: "#FF7062",
                                            textAlign: "center",
                                            color: "white"
                                        }}
                                    >
                                        <p>1</p>
                                    </div>
                                    )}
                                </Step>
                                <Step transition="scale">
                                    {({ accomplished }) => (
                                        // <img
                                        //     style={{ filter: `grayscale(${accomplished ? 0 : 80}%)` }}
                                        //     width="30"
                                        //     src="https://vignette.wikia.nocookie.net/pkmnshuffle/images/9/97/Pikachu_%28Smiling%29.png/revision/latest?cb=20170410234508"
                                        // />
                                        <div
                                                onClick={() => { this.setState({ myPercen: 50 }) }}
                                                style={{
                                                    filter: `grayscale(${accomplished ? 0 : 80}%)`,
                                                    border: "1px solid",
                                                    borderRadius: "50%",
                                                    width: "30px",
                                                    height: "30px",
                                                    background: "#FF7062",
                                                    textAlign: "center",
                                                    color: "white"
                                                }}
                                            >
                                                <p>2</p>
                                            </div>
                                    )}
                                </Step>
                                <Step transition="scale">
                                    {({ accomplished }) => (
                                        <div>
                                            <div
                                                onClick={() => { this.setState({ myPercen: 100 }) }}
                                                style={{
                                                    filter: `grayscale(${accomplished ? 0 : 80}%)`,
                                                    border: "1px solid",
                                                    borderRadius: "50%",
                                                    width: "30px",
                                                    height: "30px",
                                                    background: "#FF7062",
                                                    textAlign: "center",
                                                    color: "white"
                                                }}
                                            >
                                                <p>3</p>
                                            </div>
                                            
                                        </div>
                                    )}
                                </Step>
                            </ProgressBar>

                        </div>
                        <div
                            style={{ border: "solid 1px red" }}
                            className="col-4">
                            <button onClick={() => { this.setState({ myPercen: 0 }) }}>Step 1</button>
                            <button onClick={() => { this.setState({ myPercen: 50 }) }}>Step 2</button>
                            <button onClick={() => { this.setState({ myPercen: 100 }) }}>Step 3</button>
                        </div>
                    </div>
                </div>
                <Footer2 />
            </div>
        );
    }

}


export default Payment;
