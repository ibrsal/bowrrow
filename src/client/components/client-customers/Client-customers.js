import React from "react";

class ClientCustomers extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
          customers: [],
        clientid : null
        };
  
     
    }
  //fetch data using API
    componentDidMount() {
        fetch(`/api/clientcustomers/${this.props.match.params.id}`)
          .then(response => response.json())
          .then(data => {
            console.log("------>",data);
            this.setState({ customers: data });
          });
      }
  
   
  
    render() {
        console.log("clientcustomers");

      return (
        <div className="container"> 
        <h1>Customers</h1> 
{this.props.match.params.id}
        </div>
      );
    }
  }

  export default ClientCustomers;