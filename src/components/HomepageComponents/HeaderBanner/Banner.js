import React, { Component } from 'react';
import { connect } from 'react-redux';
import './style.css';
import Search from '../Search/Search';

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
                            <h1 className="introduction">Some awesome introduction</h1>
                            <p className="des">A great starter layout for a landing page</p>
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
