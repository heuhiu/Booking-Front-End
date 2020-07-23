import React, { Component } from 'react';
import './App.scss';
import './custom.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { connect } from 'react-redux';
import { getUserLogin } from './actions/index';
import callApi from './config/utils/apiCaller';
import routers from './config/routes';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import {Container, Row, Col} from 'react-bootstrap';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }
    componentDidMount = () => {
        var jwtDecode = require('jwt-decode');
        var tokenLogin = JSON.parse(localStorage.getItem('tokenLogin'));
        if (tokenLogin) {
            var decoded = jwtDecode(tokenLogin);
            console.log(decoded);
            const id = decoded.user.userId;
            // this.props.fetchUserDetail(decoded.user);
            callApi(`userClient/${id}`, 'GET', null)
            .then(res => {
                console.log(res);
                this.props.fetchUserDetail(res.data);
            }).catch(function (error) {
                if (error.response) {
                    console.log(error.response.data);
                }
            });
        }
    }
    render() {
        return (
            <Router>
                {/* <div className="container-fluid">
                    <div className="row no-gutters">
                        <div className="col-12">
                            {this.showContentMenus(routers)}
                        </div>
                    </div>
                </div > */}
                <Container style={{padding: "0px"}} fluid={true}>
                    <Row noGutters={true}>
                        <Col md={12}>{this.showContentMenus(routers)}</Col>
                    </Row>
                </Container>
            </Router >
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
        }
    }
}

export default connect(null, mapDispatchToProps)(App);
