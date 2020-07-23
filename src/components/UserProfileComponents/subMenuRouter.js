import React from 'react';
import UserInformation from './UserInformation/UserInformation';
import UserUpdateInformation from './UserUpdateInformation/UserUpdateInformation';
import UserOrders from './UserOrders/UserOrders';



const subMenuRouter = [
    {
        path: '/userProfile/myProfile',
        exact: false,
        main: ({ history, location }) => <UserInformation history={history} location={location} />
    },
    {
        path: '/userProfile/ediProfile',
        exact: false,
        main: ({ history, location }) => <UserUpdateInformation history={history} location={location} />
    },
    {
        path: '/userProfile/myOrders',
        exact: false,
        main: ({ history, location }) => <UserOrders history={history} location={location} />
    },
];
export default subMenuRouter;