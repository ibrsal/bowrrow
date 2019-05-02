import React from "react";

class ClientCustomers extends React.Component {
    constructor(props) {
      super(props);
      this.state = {customers: []};
  
     
    }
  
   
  
   
  
    render() {
        console.log("clientcustomers");
      return (
        <div className="container"> 
        <h1>Customers</h1> 

        </div>
      );
    }
  }

  export default ClientCustomers;