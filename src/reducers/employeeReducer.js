const INITIAL_STATE = {
    emps: []
}

const employeeReducers = (state = INITIAL_STATE,action) => {
    switch (action.type) {
        case 'CREATE_EMPLOYEE':
            return {...state, [action.payload.id]:action.payload}
        case 'FETCH_EMPLOYEES':
            return {...state, emps: action.payload}
        default:
            return {...state};
    }
}

export default employeeReducers;

