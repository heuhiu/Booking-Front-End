import React, { Component } from 'react';
import { connect } from 'react-redux';
import './style.css';

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
                    <div className="row h-100 align-items-center">
                        <div className="col-12 text-center">
                            <h1 className="font-weight-light">Some awesome introduction</h1>
                            <p className="lead">A great starter layout for a landing page</p>
                            <div className="block-17 my-4">
                                <form action="" method="post" className="d-block d-flex">
                                    <div className="fields d-block d-flex">
                                        <div className="textfield-search one-third">
                                            <input type="text" className="form-control" placeholder="Ex: food, service, hotel" />
                                        </div>
                                        <div className="select-wrap one-third">
                                            <div className="icon"><span className="fas fa-arrow-down"></span></div>
                                            <select name="" id="" className="form-control" placeholder="Keyword search">
                                                <option value="">Where</option>
                                                <option value="">San Francisco USA</option>
                                                <option value="">Berlin Germany</option>
                                                <option value="">Lodon United Kingdom</option>
                                                <option value="">Paris Italy</option>
                                            </select>
                                        </div>
                                    </div>
                                    <input type="submit" className="search-submit btn btn-primary" value="Search" />
                                </form>
                            </div>

                        </div>
                    </div>
                </div>
            </header>
        );
    }

}

export default Banner;
