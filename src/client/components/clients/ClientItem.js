import React from "react";
import { Link } from "react-router-dom";
import LoginContext from '../contexts/login';
import './Clients.css';
import Qr from '../qr/Qr'

class ClientItem extends React.Component {
static contextType=LoginContext;
  

  componentDidMount() {

  }
 
  render() {

    const {id, username,email,phone,titel } =  this.props.item;
    console.log(this.props.item);
  
      return (
        <Link to={`/users/${id}`}>

        <div>

            <div className="card-body">
            <h5 className="card-title">{username}</h5>
                        <p className="card-text">
                          <strong>Services</strong>
                          <br />
                          <span>{email}</span> <br />
                          <strong>Availability</strong>
                          <br />
                          <Qr  value={phone} name={ username } />                       

                          <span>{titel}</span> <br />
                        </p>
                        <a
                          href={`/clientcustomers/${id}`}
                          className="btn btn-danger"
                        >
                          Read more..
                        </a>
                        <Link
                          to={`/Clients/edit/${id}`}
                          className="btn btn-outline-danger btn-sm pull-right"
                        >
                          {" "}
                          Edit
                        </Link>
                      </div>
        </div>
        </Link>
      );
    
  }
}

export default ClientItem;
