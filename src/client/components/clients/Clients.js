import React from "react";
import { Link } from "react-router-dom";

import './Clients.css';

class Clients extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isLoaded: false,
    }
  }

  componentDidMount() {

    fetch('/api/clients')
      .then(res => res.json())
      .then(json => {
        this.setState({
          isLoaded: true,
          items: json,
        })
      });
  }

  render() {

    const { isLoaded, items } = this.state;
    console.log(items);
    if (!isLoaded) {
      return <div> Loading.... </div>;
    }
    else {
      return (
        <div>
          <div className="container"> 
          <div className="row">
          <div className="col">
          <h1>Clients</h1> <br />
            <Link className="btn btn-outline-danger btn-lg btn-block client-add-button" to="/Clients/add">Add New Client</Link>
            <div className="card-columns">

            {items.map(item => (
              <div key={item.id} class="card">
              <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
                <p className="card-text"><strong>Services</strong><br />
                  <span>{item.email}</span> <br />
                  <strong>Availability</strong><br />
                  <span>{item.titel}</span> <br />
                </p>
                <a href={`/clientcustomers/${item.id}`} class="btn btn-danger">Read more..</a>
                <Link to={`/Clients/edit/${item.id}`}  className="btn btn-outline-danger btn-sm pull-right"> Edit</Link>                
              </div>
              </div>
              ))}
            </div>
          </div>
          </div>
          </div>
        </div>
      );
    }
  }
}

export default Clients;
