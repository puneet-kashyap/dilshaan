import {combineReducers} from 'redux';
import { reducer as formReducer } from 'redux-form'
import UserReducer from './reducer-users';

const allReducers = combineReducers({
  form: formReducer,
  users: UserReducer,
})

export default allReducers;
