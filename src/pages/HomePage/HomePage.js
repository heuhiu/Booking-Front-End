import React, { Component } from 'react';
import { connect } from 'react-redux';
import Banner from '../../components/HomepageComponents/HeaderBanner/Banner';
import './style.css';
import Slick1 from '../../components/HomepageComponents/Carousel/CarouselVQTD/Slick1';
import Slick2 from '../../components/HomepageComponents/Carousel/CarouselDDHD/Slick2';
import Menu from '../../components/Menu/Menu';
import Footer2 from '../../components/Footer/Footer2/Footer2';
import { getUserLogin } from '../../actions/index';
//Home page
class HomePage extends Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }

    // componentDidMount = () => {
    //     var jwtDecode = require('jwt-decode');
    //     var tokenLogin = JSON.parse(localStorage.getItem('tokenLogin'));
    //     if (tokenLogin) {
    //         var decoded = jwtDecode(tokenLogin);
    //         console.log(decoded.user);
    //         //data will be store in localStorage
    //         this.props.fetchUserDetail(decoded.user);
    //     }
    // }

    render() {
        return (
            <div>
                <Menu />
                <Banner />
                <Slick2 />
                <Slick1 />
                <Footer2 />
            </div>
        );
    }

}

// export default HomePage;

const mapDispatchToProps = (dispatch, props) => {
    return {
        fetchUserDetail: (user) => {
            dispatch(getUserLogin(user))
        }
    }
}

export default connect(null, mapDispatchToProps)(HomePage);
