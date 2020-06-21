import React from 'react';
import HomePage from '../pages/HomePage/HomePage';
import NotFoundPage from '../pages/NotFoundPage/NotFoundPage';
import Login from '../pages/Login/Login';
import Register from '../pages/Register/Register';
import VerifyEmail from '../pages/VerifyEmail/VerifyEmail';
import CfMail from '../pages/Authen/confirmedMail/CfMail';


const routers = [
    {
        path: '/Login',
        exact: false,
        main: ({ history,location }) => <Login history={history} location={location} />  

    },
    {
        path: '/Register',
        exact: false,
        main: ({ history,location }) => <Register history={history} location={location} />  
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