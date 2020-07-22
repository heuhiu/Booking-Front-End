import React, { Component } from 'react';
// import { connect } from 'react-redux';
import './UserProfile.css';
import Menu from '../../components/Menu/Menu';
import Footer2 from '../../components/Footer/Footer2/Footer2';
import UserProfileComp from '../../components/UserProfileComponents/UserProfileComp';

//Home page
class UserProfile extends Component {

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
                <UserProfileComp />
                <Footer2 />
            </div>
        );
    }

}

export default UserProfile;
