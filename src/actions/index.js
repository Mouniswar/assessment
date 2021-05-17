import axios from 'axios';


export const createEmployee = (formValues) => {
    return async(dispatch) => {
        const res = await axios.post('http://localhost:3002/employees', {...formValues});

        dispatch({type: 'CREATE_EMPLOYEE', payload: res.data})
    }
}

export const fetchEmployees = (formValues) => {
    return async(dispatch) => {
        const res = await axios.get('http://localhost:3002/employees');

        dispatch({type: 'FETCH_EMPLOYEES', payload: res.data})
    }
}


