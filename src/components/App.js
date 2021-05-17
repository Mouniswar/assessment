import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import EmployeeCreate from './EmployeeCreate';
import EmployeeList from './EmployeeList';

const App = () => {
    return (
        <div className="ui container">
            <BrowserRouter>
                <Route path="/" exact component={EmployeeList} />
                <Route path="/add" exact component={EmployeeCreate} />
            </BrowserRouter> 
        </div>
    );
}
export default App;