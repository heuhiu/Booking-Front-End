import React, { Component } from 'react';
import { connect } from 'react-redux';
import Banner from '../../components/HomepageComponents/HeaderBanner/Banner';
import './style.css';
import Slick1 from '../../components/HomepageComponents/Carousel/CarouselVQTD/Slick1';
import Slick2 from '../../components/HomepageComponents/Carousel/CarouselDDHD/Slick2';
import Menu from '../../components/Menu/Menu';
import Footer2 from '../../components/Footer/Footer2/Footer2';
import { getUserLogin, showLoader, hideLoader } from '../../actions/index';
import callApi from '../../config/utils/apiCaller';
import FullPageLoader from '../../components/FullPageLoader/FullPageLoader';

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
    //         console.log(decoded);
    //         const id = decoded.user.userId;
    //         // this.props.fetchUserDetail(decoded.user);
    //         callApi(`userClient/${id}`, 'GET', null)
    //             .then(res => {
    //                 console.log(res);
    //                 this.props.fetchUserDetail(res.data);
    //             }).catch(function (error) {
    //                 if (error.response) {
    //                     console.log(error.response.data);
    //                 }
    //             });
    //     }
    // }
    
    componentWillMount = () => {

    }

    componentDidMount = () => {
        var jwtDecode = require('jwt-decode');
        var tokenLogin = JSON.parse(localStorage.getItem('tokenLogin'));
        if (tokenLogin) {
            var decoded = jwtDecode(tokenLogin);
            console.log(decoded);
            const id = decoded.user.userId;
            // this.props.fetchUserDetail(decoded.user);
            callApi("login/checkToken", 'POST', null)
                .then(res => {
                    console.log(res);
                    callApi(`userClient/${id}`, 'GET', null)
                        .then(res => {
                            console.log(res);
                            this.props.fetchUserDetail(res.data);
                        }).catch(function (error) {
                            if (error.response) {
                                console.log(error.response.data);
                            }
                        });
                }).catch(function (error) {
                    if (error.response) {
                        localStorage.removeItem('tokenLogin');
                        window.location.reload();
                    }
                });
        }
    }

    render() {
        return (
            <div>
                <Menu />
                <Banner />
                <Slick2 />
                <Slick1 />
                <Footer2 />
                <FullPageLoader />
            </div>
        );
    }

}

// export default HomePage;

const mapStateToProps = state => {
    return {
        // visitorType: state.Ticket
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        fetchUserDetail: (user) => {
            dispatch(getUserLogin(user))
        },
        showLoader: () => {
            dispatch(showLoader())
        },
        hideLoader: () => {
            dispatch(hideLoader())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
