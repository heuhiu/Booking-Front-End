import React, { Component } from 'react';
import './App.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Rectangle from './img/Rectangle 17.png';
import routers from './config/routes';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import Menu from './components/Menu/Menu';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return (
            <Router>
                <div className="container-fluid">
                    {/* <div className="row no-gutters">
                        <div className="col-12">
                            <Menu />
                        </div>
                    </div> */}
                    <div className="row no-gutters">
                        <div className="col-12">
                            {this.showContentMenus(routers)}
                        </div>
                    </div>
                </div >
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
