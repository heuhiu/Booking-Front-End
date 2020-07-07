import React, { Component } from 'react';
import './App.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import routers from './config/routes';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row, Col} from 'react-bootstrap';
class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
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

export default App;
