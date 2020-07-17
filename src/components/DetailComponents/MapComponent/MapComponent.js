import React, { Component } from 'react';
import { connect } from 'react-redux';
import './MapComponent.css';
import googleMapDemo from '../../../img/googleMapDemo.png';

class MapComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return (
            <div className="row no-gutters">
                <div
                    className="col-6"
                    style={{
                        overflow: "hidden",
                        backgroundSize: "cover",
                        backgroundPosition: "center"
                    }}
                >
                    <img src={googleMapDemo} alt="FAIL TO LOAD" width="auto" height="auto" />
                </div>

                <div
                    style={{ paddingLeft: "30px" }}
                    className="col-6">
                    <p className="p1">Liên hệ đối tác</p>
                    <p className="p2">
                        <svg width="20" height="24" viewBox="0 0 20 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M19 10C19 17 10 23 10 23C10 23 1 17 1 10C1 7.61305 1.94821 5.32387 3.63604 3.63604C5.32387 1.94821 7.61305 1 10 1C12.3869 1 14.6761 1.94821 16.364 3.63604C18.0518 5.32387 19 7.61305 19 10Z" stroke="#FF7062" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M10 13C11.6569 13 13 11.6569 13 10C13 8.34315 11.6569 7 10 7C8.34315 7 7 8.34315 7 10C7 11.6569 8.34315 13 10 13Z" stroke="#FF7062" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>  
                        &nbsp;
                        567 Hai Bà Trưng, Phường Minh An, Hội An, Quảng Nam, Vietnam
                    </p>
                    <p className="p3">
                        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20.8881 15.9201V18.9201C20.8892 19.1986 20.8322 19.4743 20.7206 19.7294C20.6091 19.9846 20.4454 20.2137 20.2402 20.402C20.035 20.5902 19.7927 20.7336 19.5289 20.8228C19.265 20.912 18.9855 20.9452 18.7081 20.9201C15.631 20.5857 12.6751 19.5342 10.0781 17.8501C7.66194 16.3148 5.61345 14.2663 4.07812 11.8501C2.38809 9.2413 1.33636 6.27109 1.00812 3.1801C0.983127 2.90356 1.01599 2.62486 1.10462 2.36172C1.19324 2.09859 1.33569 1.85679 1.52288 1.65172C1.71008 1.44665 1.93792 1.28281 2.19191 1.17062C2.44589 1.05843 2.72046 1.00036 2.99812 1.0001H5.99812C6.48342 0.995321 6.95391 1.16718 7.32188 1.48363C7.68985 1.80008 7.93019 2.23954 7.99812 2.7201C8.12474 3.68016 8.35957 4.62282 8.69812 5.5301C8.83266 5.88802 8.86178 6.27701 8.78202 6.65098C8.70227 7.02494 8.51698 7.36821 8.24812 7.6401L6.97812 8.9101C8.40167 11.4136 10.4746 13.4865 12.9781 14.9101L14.2481 13.6401C14.52 13.3712 14.8633 13.1859 15.2372 13.1062C15.6112 13.0264 16.0002 13.0556 16.3581 13.1901C17.2654 13.5286 18.2081 13.7635 19.1681 13.8901C19.6539 13.9586 20.0975 14.2033 20.4146 14.5776C20.7318 14.9519 20.9003 15.4297 20.8881 15.9201Z" stroke="#FF7062" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        &nbsp;
                        +1231209380913
                    </p>
                </div>
            </div >
        );
    }

}

export default MapComponent;
