import React, { Component } from 'react';
import { Link } from "react-router-dom";

class CustomerForm extends Component {
    constructor(props) {
        super(props);
        if (this.props.isEditing) {
            this.state = {
                customerData: this.props.customerData,
                displaySubmitForm : true
            }
        } else {
            this.state = {
                customerData: {
                    "customer_name": "",
                    "contact_person": "",
                    "phone_contact": "",
                    "email_contact": "",
                    "organisation_address": "",
                    "organisation_description": "",                
                   "active": 1
                },
                displaySubmitForm : true
            }
        }
    }

    updateField = (e) => {
        const { name, value } = e.target;

        this.setState({
            customerData: {
                ...this.state.customerData,
                [name]: value,
            }
        })
    }

    submitForm = (e) => {
        e.preventDefault();

        let url = '', method = '';

        if (this.props.isEditing) {
            url = `/api/customers/${this.props.match.params.id}`
            method = 'PUT';
        } else {
            url = `/api/customers`
            method = 'POST';
        }
        console.log("Data from form", this.state.customerData);
        fetch(url, {
        method,
        body: JSON.stringify(this.state.customerData),
        headers:{
            'Content-Type': 'application/json'
        }
        }).then(res => res.text())
        .then(response => {
            console.log('Success:', response),
            this.setState({displaySubmitForm:false});
        })
        .catch(error => console.error('Error:', error));
    }

    render () {
        if(this.state.displaySubmitForm) {
            return (
                <form onSubmit={this.submitForm}>
                    <h2>
                        {`${this.props.isEditing ? "Edit" : "Add"} Customer`}
                    </h2>

                    <div className="form-group">
                        <label htmlFor="customer_name">
                            customer Title
                        </label>
                        <input type="text" className="form-control" id="customer_name" name="customer_name" value={this.state.customerData.customer_name} onChange={this.updateField} />
                    </div>    
                    <div className="form-group">
                        <label htmlFor="contact_person">
                            customer Category
                        </label>
                        <input type="text" className="form-control" id="contact_person" name="contact_person" value={this.state.customerData.contact_person} onChange={this.updateField} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="organisation_address">
                            customer Description
                        </label>
                        <textarea type="text" className="form-control" id="organisation_address" name="organisation_address" value={this.state.customerData.organisation_address} onChange={this.updateField} maxLength="400" rows="2" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="phone_contact">
                            Organization Name
                        </label>
                        <input type="text" className="form-control" id="phone_contact" name="phone_contact" value={this.state.customerData.phone_contact} onChange={this.updateField} maxLength="100" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email_contact">
                            email_contact 
                        </label>
                        <input type="text" className="form-control" id="email_contact" name="email_contact" value={this.state.customerData.email_contact} onChange={this.updateField} maxLength="100"/>
                    </div>    
                    <button type="submit" className="btn btn-primary">Update</button>
                </form>
            )    
        } else {
            return(

                <div key={this.state.customerData.id} className="card mb-4">
        
                <div className="card-header">
                <h5 className="card-title">{this.state.customerData.customer_name}</h5>
               
                </div>
                <div className="card-body">
                  <div className="row">
                      <div className="col-md-8">
                              <p className="card-text">{this.state.customerData.organisation_address}</p>
                          <Link to="#" className="btn btn-danger">
                            Read more...
                          </Link>
                      </div>
                      
        
                  </div>
        
                </div>
                <div className="card-footer">
                  <Link to={`/Customers/edit/${this.state.customerData.id}`} className="btn btn-outline-danger network-edit-button btn-sm"> Edit</Link>
                  <Link to={`/Customers/delete/${this.state.customerData.id}`} className="btn btn-outline-danger btn-sm">Delete</Link>
                  </div>        
              </div>
            )
        }
    }
}

export default CustomerForm;