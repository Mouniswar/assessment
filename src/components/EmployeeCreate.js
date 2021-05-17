import React from 'react';
import Modal from './Modal';
import history from '../history';

const EmployeeCreate = () => {
    return (
        <Modal 
            onDismiss={() => history.push('/')}
        />
    )
}

export default EmployeeCreate;