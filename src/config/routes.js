import React from 'react';
import HomePage from '../pages/HomePage/HomePage';
import NotFoundPage from '../pages/NotFoundPage/NotFoundPage';
import Register from '../pages/Authen/Register/Register';
import VerifyEmail from '../pages/Authen/VerifyEmail/VerifyEmail';
import CfMail from '../pages/Authen/confirmedMail/CfMail';
import Login from '../pages/Authen/Login/Login';
import LoginComp from '../pages/Authen/LoginComponent/LoginComp';
import RegisterComp from '../pages/Authen/RegisterComponent/RegisterComp';


const routers = [
    {
        path: '/Login',
        exact: false,
        main: ({ history,location }) => <LoginComp history={history} location={location} />  

    },
    {
        path: '/Register',
        exact: false,
        main: ({ history,location }) => <RegisterComp history={history} location={location} />  
    },
    {
        path: '/Verify',
        exact: false,
        main: ({ history,location }) => <VerifyEmail history={history} location={location} />  

    },
    {
        path: '/confirmMail',
        exact: false,
        main: ({ match,history,location }) => 
        <CfMail history={history} location={location} match={match} />  

    },
    {
        path: '/',
        exact: true,
        main: ({ history,location }) => <HomePage history={history} location={location} />  
    },
    {
        path: '',
        exact: false,
        main: ({ history,location }) => <NotFoundPage history={history} location={location} />  

    }
];
export default routers;