import React, { Component } from 'react';
import { connect } from 'react-redux';
import Banner from '../../components/HomepageComponents/HeaderBanner/Banner';
import './style.css';
import Slick1 from '../../components/HomepageComponents/Carousel/Slick1';
class HomePage extends Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return (
            <div>
                <Banner />
                <Slick1 />
            </div>
        );
    }

}

export default HomePage;
