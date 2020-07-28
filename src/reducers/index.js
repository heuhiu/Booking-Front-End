import { combineReducers } from 'redux';
import User from './User';
import Ticket from './Ticket';
import Loader from './Loader';

const myReducers = combineReducers({
    User,
    Ticket,
    Loader
});
export default myReducers;