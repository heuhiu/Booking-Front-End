import React, { Component } from 'react';
import './App.scss';
import './custom.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { connect } from 'react-redux';
import { getUserLogin, showLoader, hideLoader, checkTokenLogin } from './actions/index';
import callApi from './config/utils/apiCaller';
import routers from './config/routes';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import {
    BrowserView,
} from "react-device-detect";
class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            checkFetchUser: false,
            checkToken: false
        }
    }

    // callApifechUser = async (id, data) => {
    //     const { showLoader, hideLoader } = this.props;
    //     showLoader()
    //     await callApi(`userClient/${id}`, 'GET', null)
    //         .then(res => {
    //             // console.log(res);
    //             this.props.fetchUserDetail(data);
    //             this.setState({
    //                 checkFetchUser: true
    //             }, () => {
    //                 // if (this.state.checkFetchUser === true && this.state.checkToken === true) {
    //                 hideLoader();
    //                 // }
    //             })
    //         }).catch(function (error) {
    //             if (error.response) {
    //                 console.log(error.response.data);
    //             }
    //         });
    // }

    componentDidMount = async () => {
        const { showLoader, hideLoader } = this.props;
        var jwtDecode = require('jwt-decode');
        var tokenLogin = JSON.parse(localStorage.getItem('tokenLogin'));
        if (tokenLogin) {
            showLoader();
            var decoded = jwtDecode(tokenLogin);
            // console.log(decoded);
            const id = decoded.user.userId;
            // this.props.fetchUserDetail(decoded.user);
            await callApi("login/checkToken", 'POST', null)
                .then(async res =>  {
                    this.setState({ checkToken: true })
                    console.log(1);
                    await callApi(`userClient/${id}`, 'GET', null)
                        .then(res => {
                            // console.log(res);
                            this.props.fetchUserDetail(res.data);
                            console.log(2);
                            hideLoader();
                        }).catch(function (error) {
                            if (error.response) {
                                console.log(error.response.data);
                            }
                        });
                        console.log(3);
                    // this.callApifechUser(id, res.data)
                }).catch(function (error) {
                    if (error.response) {
                        hideLoader();
                        localStorage.removeItem('tokenLogin');
                        window.location.reload();
                    }
                });

        }
    }
    // checkLogin = async () => {
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
    //             .then(res => {
    //                 this.setState({ checkToken: true })
    //                 console.log(res);
    //                 callApi(`userClient/${id}`, 'GET', null)
    //                     .then(res => {
    //                         // console.log(res);
    //                         this.props.fetchUserDetail(res.data);
    //                         hideLoader();
    //                     }).catch(function (error) {
    //                         if (error.response) {
    //                             console.log(error.response.data);
    //                         }
    //                     });
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
        // this.checkLogin();
        return (
            <BrowserView>
                <Router>
                    <Container style={{ padding: "0px" }} fluid={true}>
                        <Row noGutters={true}>
                            <Col md={12}>{this.showContentMenus(routers)}</Col>
                        </Row>
                    </Container>
                </Router >
            </BrowserView>
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

// export default App;
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
        },
    }
}

export default connect(null, mapDispatchToProps)(App);
