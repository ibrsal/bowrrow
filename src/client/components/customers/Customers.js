import React from "react";
import { Link } from "react-router-dom";

class Customers extends React.Component {

  constructor(props) {
    super(props);
    this.state = { customers: [] };

  }
  //fetch data using API
  componentDidMount() {
    fetch("/api/customers")
      .then(response => response.json())
      .then(data => {
        console.log("------>",data);
        this.setState({ customers: data });
      });
  }
  //Read data using console
  //Display data using list
  //Add style to it or follow List view from Group1
  render() {
    console.log(this.state.customers);
    const { customers } = this.state;
    if (customers.length <= 0) {
      return "Loading";
    } else {
      return (
        <div className="container"> 
        <h1>Customers</h1> 
        <br/>
            <Link className="btn btn-outline-danger btn-lg btn-block mentor-add-button" to="/Customers/add">Add customer</Link>
            {customers.map(item => (
              <div key={item.id} className="card mb-4">
        
                <div className="card-header">
                <h5 className="card-title">{item.customer_name}</h5>
               
                </div>
                <div className="card-body">
                  <div className="row">
                      <div className="col-md-8">
                              <p className="card-text">{item.phone_contact}</p>
                          <p className="card-text">Place : {item.organisation_address}</p>
                          <Link to="#" className="btn btn-danger">
                            Read more...
                          </Link>
                      </div>
                      <div className="col-md-4">
                          <img
                        className="customer-image rounded"
                        src={item.customer_theme_image}
                        alt={item.customer_title}
                        />
                      </div>
        
                  </div>
        
                </div>
                <div className="card-footer">
                  <Link to={`/Customers/edit/${item.id}`} className="btn btn-outline-danger network-edit-button btn-sm"> Edit</Link>
                  <Link to={`/Customers/delete/${item.id}`} className="btn btn-outline-danger btn-sm">Delete</Link>
                  </div>        
              </div>
            ))}
        </div>
      );
    }
  }
}

export default Customers;