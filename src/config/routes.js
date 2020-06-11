import React from 'react';
import HomePage from '../pages/HomePage/HomePage';
import NotFoundPage from '../pages/NotFoundPage/NotFoundPage';


const routers = [
    {
        path: '/',
        exact: true,
        main: ({ history }) => <HomePage  history={history}  />  
    },
    {
        path: '',
        exact: false,
        main: ({ history }) => <NotFoundPage history={history} />
    }
];
export default routers;