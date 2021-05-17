import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import employeeReducer from './employeeReducer';

export default combineReducers({
    form: formReducer,
    emp: employeeReducer
})