import { combineReducers } from 'redux';
import User from './User';
import Ticket from './Ticket';

const myReducers = combineReducers({
    User,
    Ticket
});
export default myReducers;