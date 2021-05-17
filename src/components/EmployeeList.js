import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchEmployees} from '../actions'

class EmployeeList extends React.Component {
    componentDidMount() {
        console.log(`Compoent Mounted`)
        this.props.fetchEmployees();
        console.log(this.props)
    }

    render() {
        console.log(this.props.employee);
        if(!this.props.employee) {
            return;
        }
        const renderEmployees = this.props.employee.map((empl) => {
            return (
                <tbody key={empl.id}>
                    <tr>
                    <td>{empl.firstname}</td>
                    <td>{empl.lastnae}</td>
                    <td>{empl.email}</td>
                    <td>
                        <button className="ui primary button">Update</button>
                        <button className="ui negative button">Delete</button>
                        <button className="ui primary button">View</button>
                    </td>
                    </tr>
                </tbody>
            )
        })


        return (
            <div style={{marginTop:'30px'}}>
                <Link to='/add' className="ui primary button">Add Employee</Link>
                <table className="ui celled table">
                    <thead>
                        <tr>
                            <th>Employee First Name</th>
                            <th>Employee Last Name</th>
                            <th>Employee Email ID</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    {renderEmployees}
                </table>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {employee: state.emp.emps}
}


export default connect(mapStateToProps, { fetchEmployees})(EmployeeList);