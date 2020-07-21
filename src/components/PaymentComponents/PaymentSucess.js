import React, { Component } from 'react';
// import { connect } from 'react-redux';
import Banner from '../../components/HomepageComponents/HeaderBanner/Banner';
import './style.css';
import Footer2 from '../../components/Footer/Footer2/Footer2';

//Home page
class HomePage extends Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return (
            <div>
                <Menu />
                    <h1>SSSSSSSSSSSSSSS</h1>
                <Footer2 />
            </div>
        );
    }

}

export default HomePage;
