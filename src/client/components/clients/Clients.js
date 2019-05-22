import React from "react";
import { Link } from "react-router-dom";
import classNames from 'classnames';
import LoginContext from '../contexts/login';
import './Clients.css';

class Clients extends React.Component {
static contextType=LoginContext;
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
  renderAddNewEventButton = () => (
    <a className={`btn btn-outline-danger add-event-btn ${classNames({ disabled: !this.context.isLoggedIn })}`} href="/Clients/add">ADD NEW EVENT</a> 
  )
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
          {this.renderAddNewEventButton()}

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
