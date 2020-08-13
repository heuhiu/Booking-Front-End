import React, { Component } from 'react';
import { connect } from 'react-redux';
import './AboutUsComp.css';
import Menu from '../../../components/Menu/Menu';
import { getUserLogin, showLoader, hideLoader, fetchAllCategory, fetchAllCity } from '../../../actions/index';
import callApi from '../../../config/utils/apiCaller';
import FullPageLoader from '../../../components/FullPageLoader/FullPageLoader';
import axios from 'axios';
import * as Config from '../../../constants/ConfigAPI';

//Home page
class PolicynPrivacy extends Component {

    constructor(props) {
        super(props);
        this.state = {

        }
    }


    render() {
        return (
            <div>
                <div>PolicynPrivacy</div>
                <FullPageLoader />
            </div>
        );
    }

}

// export default HomePage;

const mapStateToProps = state => {
    return {
        loader: state.Loader
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

export default connect(mapStateToProps, mapDispatchToProps)(PolicynPrivacy);
