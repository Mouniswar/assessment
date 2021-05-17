import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { createEmployee } from '../actions/index';

class Modal extends React.Component {
    onSubmit =(formValues) => {
        console.log(formValues);
        this.props.createEmployee(formValues);
    }

    render() {
        return ReactDOM.createPortal(
            <div onClick={this.props.onDismiss} className="ui dimmer modals visible active">
                <div onClick={e => e.stopPropagation()} className="ui standard modal visible active">
                    <div className="header">Add Employee</div>
                    <div className="content">
                            <form className="ui form" style={{width:'50%', height:'auto',margin:'0px auto'}}
                            onSubmit={this.props.handleSubmit(this.onSubmit)}
                            >
                                <div className="field">
                                        <label>First Name</label>
                                        <Field
                                            name="firstname"
                                            label="Name"
                                            type="text"
                                            component="input"
                                        />
                                    </div>
                                    <div className="field">
                                        <label>Last Name</label>
                                        <Field
                                            name="lastnae"
                                            type="text"
                                            label="lastname"
                                            component="input"
                                        />
                                    </div>
                                    <div className="field">
                                        <label>EMail</label>
                                        <Field
                                            name="email"
                                            type="text"
                                            label="email"
                                            component="input"
                                        />
                                    </div>
                                    <div className="field">
                                        <label>Phone Number</label>
                                        <Field
                                            name="Phone"
                                            type="text"
                                            label="phone"
                                            component="input"
                                        />
                                    </div>
                                    <button className="ui primary button">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>,
            document.querySelector('#modal')
        )
    } 
}


const SignUpForm = reduxForm({form:'signup'})(Modal);


export default connect(null, { createEmployee})(SignUpForm);

