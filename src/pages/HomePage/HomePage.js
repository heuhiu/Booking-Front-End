import React, { Component } from 'react';
import { connect } from 'react-redux';
import Banner from '../../components/HomepageComponents/HeaderBanner/Banner';
import './style.css';
import Slick1 from '../../components/HomepageComponents/Carousel/CarouselVQTD/Slick1';
import Slick2 from '../../components/HomepageComponents/Carousel/CarouselDDHD/Slick2';
import Menu from '../../components/Menu/Menu';
import Footer2 from '../../components/Footer/Footer2/Footer2';
import {  getUserLogin, showLoader, hideLoader, fetchAllCategory, fetchAllCity } from '../../actions/index';
import callApi from '../../config/utils/apiCaller';
import FullPageLoader from '../../components/FullPageLoader/FullPageLoader';
import CarouselCategories from '../../components/HomepageComponents/Carousel/CarouselCategories/CarouselCategories';
import axios from 'axios';
// import API_URL from '../../constants/ConfigAPI';
import * as Config from '../../constants/ConfigAPI';

//Home page
class HomePage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            topCity: [],
            id1: -1,
            id2: -1,
            id3: -1,
            listData1: [],
            listData2: [],
            listData3: [],
        }
    }

    componentDidMount = async () => {
        var jwtDecode = require('jwt-decode');
        var tokenLogin = JSON.parse(localStorage.getItem('tokenLogin'));
        if (tokenLogin) {
            var decoded = jwtDecode(tokenLogin);
            // console.log(decoded);
            const id = decoded.user.userId;
            await callApi("login/checkToken", 'POST', null)
                .then(async res => {
                    // console.log(res);
                    await callApi(`userClient/${id}`, 'GET', null)
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
        }
        // this.props.checkTokenLogin();
        this.getCategoriesnCity();
    }

    getCategoriesnCity = async () => {
        const { showLoader, hideLoader } = this.props;
        showLoader();
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
                }),
            await callApi("topCity", 'GET', null)
                .then(res => {
                    var listCityId = [];
                    for (let index = 0; index < res.data.length; index++) {
                        const element = res.data[index].id;
                        // console.log(element)
                        listCityId.push(element);
                    }
                    // console.log(listCityId)
                    this.setState({
                        topCity: res.data,
                        id1: listCityId[0],
                        id2: listCityId[1],
                        id3: listCityId[2],
                    }, () => {

                    })
                }).catch(function (error) {
                    if (error.response) {
                        console.log(error.response.data);
                    }
                }),
            await axios.get(`${Config.API_URL}/topPlace`, {
                params: {
                    cityId: this.state.id1
                }
                }).then(res => {
                    // console.log(res.data);
                    this.setState({
                        listData1: res.data
                    })
                }).catch(function (error) {
                    console.log(error);
                }),
            await axios.get(`${Config.API_URL}/topPlace`, {
                params: {
                    cityId: this.state.id2
                }
                }).then(res => {
                    // console.log(res.data);
                    this.setState({
                        listData2: res.data
                    })
                }).catch(function (error) {
                    console.log(error);
                }),
            await axios.get(`${Config.API_URL}/topPlace`, {
                params: {
                    cityId: this.state.id3
                }
                }).then(res => {
                    // console.log(res.data);
                    this.setState({
                        listData3: res.data
                    })
                }).catch(function (error) {
                    console.log(error);
                }),
        ]).then(
            hideLoader()
        );
    }

    render() {
        // console.log(this.props.UserDetail)
        const { topCity, listData1, listData2, listData3 } = this.state;
        return (
            <div>
                <Menu />
                <Banner />
                <div style={{ display: this.props.loader.loading === true ? "none" : "" }}>
                    <br></br>
                    <Slick2 topCity={topCity} />
                    <Slick1
                        listData1={listData1}
                        listData2={listData2}
                        listData3={listData3}
                        topCity={topCity} />

                    <CarouselCategories />
                </div>
                <Footer2 />
                <FullPageLoader />
            </div>
        );
    }

}

// export default HomePage;

const mapStateToProps = state => {
    return {
        loader: state.Loader,
        UserDetail: state.User,
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
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
