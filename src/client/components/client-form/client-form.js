import React, { Component } from 'react';

/*
TODOs
1. Call the server and save the data in the DB
  1.a Turn the form data into json object
  1.b Call the appropriate endpoint
2. Validation
*/
class ClientForm extends Component {
    constructor(props) {
        super(props);
        if (this.props.isEditing) {
            this.state = {
                clientData: this.props.clientData
            }
        } else {
            this.state = {
                clientData: {
                    "name": "",
                    "email": "",
                    "phone": "",
                    "address": "",
                    "title": "",
                    "active": 1
                }
            }
        }
    }

    updateField = (e) => {
        const { name, value } = e.target;

        this.setState({
            clientData: {
                ...this.state.clientData,
                [name]: value,
            }
        })
    }

    submitForm = (e) => {
        e.preventDefault();

        let url = '', method = '';

        if (this.props.isEditing) {
            url = `/api/clients/${this.props.match.params.id}`
            method = 'PUT';
        } else {
            url = `/api/clients`
            method = 'POST';
        }
        deleteClient = () =>{
            console.log("deleting.....");
            protectedFetch(`/api/clients/${this.props.match.params.id}`,{
              method: 'DELETE'
            }).then(res => res.json())
            .then(response=> {
              console.log('deelete :', response);
              this.setState({
                isActive : false
            });
            
            })
    
        }

        fetch(url, {
            method,
            body: JSON.stringify(this.state.clientData),
            headers: {
                'Content-Type': 'application/json',
                'Authorization' : localStorage.getItem('authToken'),
            }
        }).then(res => res.text())
            .then(response => {
                console.log('Success:', response)
                // TODO redirect to the Clients list page (/Clients)
            })
            .catch(error => console.error('Error:', error));
    }

    render() {
        return (
            <form onSubmit={this.submitForm}>
                <div className='form-group card px-lg-5'>
                    <h2 className='card-header mt-4'>
                        {`${this.props.isEditing ? "Edit" : "Add"} Client`}
                    </h2>
                    <div className='row mt-4'>

                        <div className='col'>
                            <label>
                                First Name
                                <input className='form-control mb-2 mr-sm-2 mb-sm-0' name="name" value={this.state.clientData.name} onChange={this.updateField} />
                            </label>
                        </div>
                        <div className='col'>
                            <label>
                                Last Name
                                <input className='form-control mb-2 mr-sm-2 mb-sm-0' name="email" value={this.state.clientData.email} onChange={this.updateField} />
                            </label>
                        </div>

                    </div>

                    <div className='row'>
                        <div className='col'>
                            <label>
                                Email
                                <input className='form-control mb-2 mr-sm-2 mb-sm-0 ' name="phone" value={this.state.clientData.phone} onChange={this.updateField} />
                            </label>
                        </div>

                        <div className='col'>
                            <label>
                                Gender
                                <input className='form-control mb-2 mr-sm-2 mb-sm-0 ' name="address" value={this.state.clientData.address} onChange={this.updateField} />
                            </label>
                        </div>
                    </div>
                    <div mt-3>
                        <label className=' mt-3'>
                            Profile Picture
                            <input className='form-control-file' type='file' name="title" value={this.state.clientData.title} onChange={this.updateField} />
                        </label>
                    </div>
                    
                   
                   

                   
                    <div className='mb-4 mt-3'>
                        <button className='btn btn-warning' type="submit">Save</button>
                        <button className='btn btn-primary ml-4' type="cancel">Cancel</button>
                    </div>

                </div>
            </form>

        )
    }
}

export default ClientForm;