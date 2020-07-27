import React, { Component } from 'react';
// import { connect } from 'react-redux';
import './style.css';
import Search from '../Search/Search';
// import { Container, Row, Col } from 'react-bootstrap';

const classes = 'masthead mg-10'

class Banner extends Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }
    render() {
        return (
            <header className={classes}>
                <div className="container h-100">
                    <div className="row h-100 align-items-center ">
                        <div className="col-12 text-center">
                            <h1 className="introduction">
                            Tự do khám phá trải nghiệm du lịch 
                            </h1>
                            <p className="des">Khám phá và đặt trước các hoạt động du lịch đặc sắc với giá độc quyền
</p>
                            <div className="block-17">
                                <Search />
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        );
    }

}

export default Banner;
