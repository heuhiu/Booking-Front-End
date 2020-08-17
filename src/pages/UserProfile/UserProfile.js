import React, { Component } from 'react';
import { connect } from 'react-redux';
import './UserProfile.css';
import Menu from '../../components/Menu/Menu';
import Footer2 from '../../components/Footer/Footer2/Footer2';
import UserProfileComp from '../../components/UserProfileComponents/UserProfileComp';
import { Switch, Route, BrowserRouter as Router, Redirect } from 'react-router-dom';
import subMenu from '../../components/UserProfileComponents/subMenuRouter';
import UserMenu from '../../components/UserProfileComponents/UserMenu';
import FullPageLoader from '../../components/FullPageLoader/FullPageLoader';
import callApi from '../../config/utils/apiCaller';
import { getUserLogin, showLoader, hideLoader } from '../../actions/index';

class UserProfile extends Component {

    constructor(props) {
        super(props);
        this.state = {
            UserDetail: []
        }
    }
    // componentWillMount = async () => {
    //     const { showLoader, hideLoader } = this.props;
    //     var jwtDecode = require('jwt-decode');
    //     var tokenLogin = JSON.parse(localStorage.getItem('tokenLogin'));
    //     if (tokenLogin) {
    //         showLoader();
    //         var decoded = jwtDecode(tokenLogin);
    //         // console.log(decoded);
    //         const id = decoded.user.userId;
    //         // this.props.fetchUserDetail(decoded.user);
    //         await callApi("login/checkToken", 'POST', null)
    //             .then(async res =>  {
    //                 this.setState({ checkToken: true })
    //                 console.log(1);
    //                 await callApi(`userClient/${id}`, 'GET', null)
    //                     .then(res => {
    //                         // console.log(res);
    //                         // this.props.fetchUserDetail(res.data);
    //                         this.setState({
    //                             UserDetail: res.data
    //                         })
    //                         console.log(2);
    //                         hideLoader();
    //                     }).catch(function (error) {
    //                         if (error.response) {
    //                             console.log(error.response.data);
    //                         }
    //                     });
    //                     console.log(3);
    //                 // this.callApifechUser(id, res.data)
    //             }).catch(function (error) {
    //                 if (error.response) {
    //                     hideLoader();
    //                     localStorage.removeItem('tokenLogin');
    //                     window.location.reload();
    //                 }
    //             });

    //     }
    // }
    render() {
        // console.log(this.props.UserDetail.id)
        // console.log(this.props.history.action);
        if (this.props.history.action === "POP") {
            // console.log(this.props.history.action);
            if (this.props.UserDetail.id === undefined) {
                return (
                    <div style={{ background: "#F2F2F2" }}>
                        <Menu />
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        {/* <UserProfileComp /> */}
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

            } else {
                return (
                    <div style={{ background: "#F2F2F2" }}>
                        <Menu />
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        {/* <UserProfileComp /> */}
                        <div className="container"
                            style={{ fontFamily: 'Inter' }}>
                            <div className='row '>
                                {/* Left part */}
                                <div className="col-4">
                                    <UserMenu />
                                </div>

                                {/* Right part */}
                                <div className={`col`}>
                                    {this.showContentMenus(subMenu)}
                                </div>
                            </div>
                        </div>

                        <Footer2 />
                        <FullPageLoader />
                    </div>
                );
            }
        } else
            return (
                
                <div style={{ background: "#F2F2F2" }}>
                    <Menu />
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    {/* <UserProfileComp /> */}
                    <div className="container"
                        style={{ fontFamily: 'Inter' }}>
                        <div className='row '>
                            {/* Left part */}
                            <div className="col-4">
                                <UserMenu />
                            </div>

                            {/* Right part */}
                            <div className={`col`}>
                                {this.showContentMenus(subMenu)}
                            </div>
                        </div>
                    </div>

                    <Footer2 />
                    <FullPageLoader />
                </div>
            );
    }

    showContentMenus = (routes) => {
        var result = null;
        if (routes.length > 0) {
            result = routes.map((route, index) => {
                return (<Route
                    key={index}
                    path={route.path}
                    exact={route.exact}
                    component={route.main}
                />
                );
            });
        }
        return <Switch>{result}</Switch>
    }
}

// export default UserProfile;
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
        showLoader: () => {
            dispatch(showLoader())
        },
        hideLoader: () => {
            dispatch(hideLoader())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);