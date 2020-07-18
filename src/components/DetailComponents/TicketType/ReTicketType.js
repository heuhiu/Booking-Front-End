import React, { Component } from 'react';
import { connect } from 'react-redux';
import './ReTicketType.css';
import axios from 'axios';
import MyCounter2 from '../AddSub/MyCounter2';
class TicketType extends Component {

    constructor(props) {
        super(props);
        this.state = {
            ticketTypeState: []
        }
    }
    componentWillMount = () => {
        var placeChoosed = JSON.parse(localStorage.getItem('placeChoosed'));
        axios.get('http://localhost:8090/ticketType', {
            params: {
                //place ID
                placeId: placeChoosed.id,
            }
        }).then(res => {
            // console.log(res.data.listResult);
            this.setState({
                ticketTypeState: res.data.listResult
            }
                // , () => {
                //     this.setState({
                //         visitorTypeState: this.getTicketType().visitorTypes
                //     })
                // }
            )
        }).catch(function (error) {
            console.log(error.response);
        });
    }
    showVisitorTypes = (ticketTypeState) => {
        var result = null;
        if (ticketTypeState.length > 0) {
            result = ticketTypeState.map((item, index) => {
                return (
                    <div
                        key={index}
                        style={{ paddingTop: "40px" }}
                        className="row no-gutters">
                        <div className="col-12">
                            <div
                                className="row no-gutters"
                                style={{
                                    marginBottom: "10px",
                                    background: "#FFFFFF",
                                    border: "2px solid #E3E3E3",
                                    boxSizing: 'border-box',
                                    borderRadius: '10px',
                                }}
                            >
                                <div className="col-5"
                                    style={{ display: "table" }}
                                >
                                    <p className="myTitleType">
                                        {item.typeName}
                                    </p>
                                </div>

                                <div
                                    className="col"
                                    style={{ display: "table" }}
                                >
                                    <p className="myTitlePrice">đ {item.price}</p>
                                </div>
                                {/* <div>còn lại: {item.remaining}</div> */}
                                <div className="col-4">
                                    {/* AddSub comp */}
                                    <div className="quantityBox">
                                        {/* <MyCounter
                                            item={item}
                                        /> */}
                                    </div >
                                    {/* End AddSub comp */}
                                </div>
                            </div>
                        </div>
                    </div>
                );
            });
        }
        else if (ticketTypeState.length === 0) {
            return (
                <p>Not Found</p>
            );
        }

        return result;
    }
    // cancelPolicy: null
    // conversionMethod: null
    // effectiveTime: null
    // gameId: [1]
    // id: 1
    // placeId: 1
    // reservationInfo: null
    // ticketDescription: null
    // typeName: "Vé vào cổng"
    // visitorTypes: (3) [{…}, {…}, {…}]
    showTicketTypes = (array) => {
        var result = null;
        if (array.length > 0) {
            result = array.map((item, index) => {
                return (
                    <div key={index}>
                        <div>{item.id}</div>
                        <div>{item.typeName}</div>
                        <MyCounter2 item={item} />
                        {/* <div className="row">
                            <div className="col-lg-6 col-md-8">
                                <ul className="nav nav-pills" role="tablist">
                                    <li className="nav-item">
                                        <a className="nav-link active" href="#dashboard-1" role="tab" data-toggle="tab">
                                            {item.id} - {item.typeName}
                                        </a>
                                    </li>
                                </ul>
                                <div className="tab-content tab-space">
                                    <div className="tab-pane active" id="dashboard-1">
                                        <MyCounter2 item={item} />
                                    </div>
                                </div>
                            </div>
                        </div> */}
                        
                    </div>
                );
            });
        }
        else if (array.length === 0) {
            return (
                <p>Not Found</p>
            );
        }
        return result;
    }
    
    render() {
        // console.log(this.state.ticketTypeState);
        return (
            <div className="container mt-5">
                <div className="row">
                    {this.showTicketTypes(this.state.ticketTypeState)}
                </div>
                <div className="row">
                    <div className="col-lg-6 col-md-8">
                        <ul className="nav nav-pills" role="tablist">
                            <li className="nav-item">
                                <a className="nav-link active" href="#dashboard-1" role="tab" data-toggle="tab">
                                    Dashboard
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#schedule-1" role="tab" data-toggle="tab">
                                    Schedule
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#tasks-1" role="tab" data-toggle="tab">
                                    Tasks
                                </a>
                            </li>
                        </ul>
                        <div className="tab-content tab-space">
                            <div className="tab-pane active" id="dashboard-1">
                                Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits.
                            <br></br>
                            Dramatically visualize customer directed convergence without revolutionary ROI.
                            </div>
                            <div className="tab-pane" id="schedule-1">
                                Efficiently unleash cross-media information without cross-media value. Quickly maximize timely deliverables for real-time schemas.
                            <br></br>Dramatically maintain clicks-and-mortar solutions without functional solutions.
                            </div>
                            <div className="tab-pane" id="tasks-1">
                                Completely synergize resource taxing relationships via premier niche markets. Professionally cultivate one-to-one customer service with robust ideas.
                            <br></br>
                            Dynamically innovate resource-leveling customer service for state of the art customer service.
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        );
    }

}


export default connect(null, null)(TicketType);

// export default TicketType;
