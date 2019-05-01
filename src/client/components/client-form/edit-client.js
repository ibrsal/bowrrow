import React, { Component } from 'react';
import ClientForm from './client-form';

// export default (props) => {
//     // Do the fetching, and render the form only when the data is here
//     return (
//         <ClientForm {...props} isEditing={true} />
//     )
// }

class EditClient extends Component {
    state = {
        isLoading: true,
        message: 'Hang in there...',
        clientData: null
    }

    componentDidMount() {
        const url = '/api/clients'
        const id = this.props.match.params.id;

        // TODO handle failure (404)

        fetch(`${url}/${id}`)
        .then(
            response => response.json()
        ).then(
            data => this.setState({
                isLoading: false,
                clientData: data
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
                <ClientForm {...this.props} clientData={this.state.clientData} id={this.props.match.params.id} isEditing={true} />
        )
    }
}

export default EditClient;