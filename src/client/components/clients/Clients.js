import React from "react";
import LoginContext from "../contexts/login";
import "./Clients.css";
import ClientItem from "./ClientItem";
class Clients extends React.Component {
  static contextType = LoginContext;
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isLoaded: false
    };
  }

  componentDidMount() {
    fetch("/api/clients")
      .then(res => res.json())
      .then(json => {
        this.setState({
          isLoaded: true,
          items: json
        });
      });
  }
 
  render() {
    const { isLoaded, items } = this.state;
    console.log(items);
    if (!isLoaded) {
      return <div> Loading.... </div>;
    } else {
      return (
        <div>
          <div className="container">
            <div className="row">
              <div className="col">
                <h1>Clients</h1> <br />
                <div className="card-columns">
                  {items.map(item => (
                    <div key={item.id} className="card">
                                 <ClientItem key={item.id} item={item} />

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
