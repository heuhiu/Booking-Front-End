import React, { Component } from 'react';
import { connect } from 'react-redux';
import Banner from '../../components/HomepageComponents/HeaderBanner/Banner';
import './style.css';
import Slick1 from '../../components/HomepageComponents/Carousel/CarouselVQTD/Slick1';
import Slick2 from '../../components/HomepageComponents/Carousel/CarouselDDHD/Slick2';
import Menu from '../../components/Menu/Menu';
import Footer2 from '../../components/Footer/Footer2/Footer2';
import { getUserLogin, showLoader, hideLoader, fetchAllCategory, fetchAllCity } from '../../actions/index';
import callApi from '../../config/utils/apiCaller';
import FullPageLoader from '../../components/FullPageLoader/FullPageLoader';
import CarouselCategories from '../../components/HomepageComponents/Carousel/CarouselCategories/CarouselCategories';

//Home page
class HomePage extends Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }

    componentWillMount = () => {

        var jwtDecode = require('jwt-decode');
        var tokenLogin = JSON.parse(localStorage.getItem('tokenLogin'));
        if (tokenLogin) {
            var decoded = jwtDecode(tokenLogin);
            // console.log(decoded);
            const id = decoded.user.userId;
            callApi("login/checkToken", 'POST', null)
                .then(res => {
                    // console.log(res);
                    callApi(`userClient/${id}`, 'GET', null)
                        .then(res => {
                            // console.log(res);
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
            this.getCategories();
        }
    }

    getCategories = async () => {
        const { showLoader, hideLoader } = this.props;
        showLoader();
        // //get City list
        // await callApi('city', 'GET', null)
        //     .then(res => {
        //         this.props.fetchAllCity(res.data);
        //     }).catch(function (error) {
        //         if (error.response) {
        //             console.log(error.response.data);
        //         }
        //     });
        // //get Categories list
        // await callApi('categories', 'GET', null)
        //     .then(res => {
        //         this.props.fetchAllCategory(res.data);
        //         hideLoader();
        //     }).catch(function (error) {
        //         if (error.response) {
        //             console.log(error.response.data);
        //         }
        //     });
        Promise.all([
            await callApi('city', 'GET', null)
                .then(res => {
                    this.props.fetchAllCity(res.data);
                }).catch(function (error) {
                    if (error.response) {
                        console.log(error.response.data);
                    }
                }),
            //get Categories list
            await callApi('categories', 'GET', null)
                .then(res => {
                    this.props.fetchAllCategory(res.data);
                }).catch(function (error) {
                    if (error.response) {
                        console.log(error.response.data);
                    }
                })
        ]).then(
            hideLoader()
        );
    }

    render() {
        return (
            <div>
                <Menu />
                <Banner />
                <Slick2 />
                <Slick1 />
                <CarouselCategories
                />
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
        fetchAllCity: (listCity) => {
            dispatch(fetchAllCity(listCity))
        },
        fetchAllCategory: (listCategory) => {
            dispatch(fetchAllCategory(listCategory))
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
