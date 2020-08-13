import React, { Component } from 'react';
// import { connect } from 'react-redux';
import './About.css';
import Menu from '../../components/Menu/Menu';
import Footer2 from '../../components/Footer/Footer2/Footer2';
import UserProfileComp from '../../components/UserProfileComponents/UserProfileComp';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import FullPageLoader from '../../components/FullPageLoader/FullPageLoader';
import AboutUsMenu from '../../components/AboutUsComponents/AboutUsMenu';
import SubMenuAboutUs from '../../components/AboutUsComponents/SubMenuAboutUs';

class AboutUs extends Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return (
            <div style={{background: "#F2F2F2"}}>
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
                        <AboutUsMenu />
                    </div>
                   
                    {/* Right part */}
                    <div className={`col`}>
                       {this.showContentMenus(SubMenuAboutUs)}
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

export default AboutUs;
