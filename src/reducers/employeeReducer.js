import _ from 'lodash';

const employeeReducers = (state,action) => {
    switch (action.type) {
        case 'CREATE_EMPLOYEE':
            return {...state, [action.payload.id]:action.payload}
        case 'FETCH_EMPLOYEES':
            return {...state, ..._.mapKeys(action.payload, 'id')}
        default:
            return {...state};
    }
}

export default employeeReducers;

