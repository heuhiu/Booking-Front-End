import React from 'react';
import HomePage from '../pages/HomePage/HomePage';
import NotFoundPage from '../pages/NotFoundPage/NotFoundPage';
import VerifyEmail from '../pages/Authen/VerifyEmail/VerifyEmail';
import CfMail from '../pages/Authen/confirmedMail/CfMail';
import LoginComp from '../pages/Authen/LoginComponent/LoginComp';
import RegisterComp from '../pages/Authen/RegisterComponent/RegisterComp';
import SearchedPlace from '../pages/SearchedPlace/SearchedPlace';
import MyMul from '../components/HomepageComponents/Search/MyMul';


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
        path: '/SearchedPlace',
        exact: false,
        main: ({ match,history,location }) => 
        <SearchedPlace history={history} location={location} match={match} />  
    },
    {
        path: '/mul',
        exact: false,
        main: ({ match,history,location }) => 
        <MyMul history={history} location={location} match={match} />  
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