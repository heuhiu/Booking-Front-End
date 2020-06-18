import React, { Component } from 'react';
import { connect } from 'react-redux';
import Banner from '../../components/HomepageComponents/HeaderBanner/Banner';
import './style.css';
import Slick1 from '../../components/HomepageComponents/Carousel/CarouselVQTD/Slick1';
import Slick2 from '../../components/HomepageComponents/Carousel/CarouselDDHD/Slick2';
import Menu from '../../components/Menu/Menu';
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
                <Banner />
                <Slick2 />
                <Slick1 />
            </div>
        );
    }

}

export default HomePage;
