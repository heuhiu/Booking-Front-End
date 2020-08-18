import React, { Component } from 'react';
import { connect } from 'react-redux';
import Banner from '../../components/HomepageComponents/HeaderBanner/Banner';
import './NotLogin.css';
import Slick1 from '../../components/HomepageComponents/Carousel/CarouselVQTD/Slick1';
import Slick2 from '../../components/HomepageComponents/Carousel/CarouselDDHD/Slick2';
import Menu from '../../components/Menu/Menu';
import Footer2 from '../../components/Footer/Footer2/Footer2';
import { getUserLogin, showLoader, hideLoader, fetchAllCategory, fetchAllCity } from '../../actions/index';
import callApi from '../../config/utils/apiCaller';
import FullPageLoader from '../../components/FullPageLoader/FullPageLoader';
import CarouselCategories from '../../components/HomepageComponents/Carousel/CarouselCategories/CarouselCategories';
import axios from 'axios';
// import API_URL from '../../constants/ConfigAPI';
import * as Config from '../../constants/ConfigAPI';

//Home page
class NotLogin extends Component {

    constructor(props) {
        super(props);
        this.state = {

        }
    }



    render() {
        const { loader } = this.props;
        return (
            <div>
                <Menu />
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <div className="container"
                    style={{ fontFamily: 'Inter' }}>
                    <div className='row '>
                        <div className="col-12">
                            <h1>Bạn cần đăng nhập để thực hiện chức năng này</h1>
                        </div>
                    </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(NotLogin);
