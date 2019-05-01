import React from 'react';
import CustomerForm from './customer-form';

class EditCustomer extends React.Component {
    state = {
        isLoading: true,
        message: 'Hang in there...',
        customerData: null
    }

    componentDidMount() {
        const url = '/api/customers'
        const id = this.props.match.params.id;

        // TODO handle failure (404)

        fetch(`${url}/${id}`)
        .then(
            response => response.json()
        ).then(
            data => this.setState({
                isLoading: false,
                customerData: data
            })
        )
        // .catch(error => this.setState({
        //     message: error
        // })) 
    }

    render() {
        return (
            this.state.isLoading ? 
                <div>{this.state.message}</div>
                :
                <CustomerForm {...this.props} customerData={this.state.customerData} id={this.props.match.params.id} isEditing={true} />
        )
    }
}

export default EditCustomer;