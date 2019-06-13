import React from "react";

class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      clientData: {
        username: "",
        email: "",
        password:"",
        phone: "",
        address: "",
        title: "",
        type: "",
        active: 1
      },
      newuserdata:{
        username: "",
        email: ""
      }
    };
  }
  updateField = e => {
    const { name, value } = e.target;

    this.setState({
      clientData: {
        ...this.state.clientData,
        [name]: value
      }
    });
  };
  submitForm = e => {
    e.preventDefault();

    let url = `/api/clients`;
    let method = "POST";

    fetch(url, {
      method,
      body: JSON.stringify(this.state.clientData),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => res.text())
      .then(response => {
const response2=JSON.parse(response);
        console.log("Success:");
        console.log("response:  " + response );
        console.log(response2);
        this.setState({
          newuserdata: {
            email:response2.email ,
      password: response2.password
          }
        });
        console.log(this.state.newuserdata)
//
fetch("/api/auth/login", {
  method: "POST",
  body: JSON.stringify(this.state.newuserdata),
  headers: {
    "Content-Type": "application/json"
  }
})
  .then(res => {
    return res.json();
  })
  .then(response => {
    console.log("Success:", JSON.stringify(response));
    localStorage.setItem('authToken', response.token);

    // TODO maybe add a message showing "Logged in Successfully";
    // Or use react context, to show a logout button instead of login in the header

    this.props.history.push('/');
  })
  .catch(error => console.error("Error:", error));


        // TODO redirect to the Clients list page (/Clients)
      
      })
      .catch(error => console.error("Error:", error));
  };
  render() {
    return (
      <div className="container search-bar">
        <form onSubmit={this.submitForm}>
          <div className=" align-items-center">
            <div className="col-auto">
              <input
                type="email"
                className="form-control mb-3"
                name="username"
                id="inlineFormInput"
                placeholder="User name"
                onChange={this.updateField}
              />
            </div>
            <br />
            <div className="col-auto">
              <input
                 type="password"
                className="form-control mb-3"
                name="password"
                id="inlineFormInput"
                placeholder="password"
                onChange={this.updateField}
              />
            </div>
            <br />
            <div className="col-auto">
              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  name="email"
                  id="inlineFormInputGroup"
                  placeholder="Email"
                  onChange={this.updateField}
                />
              </div>
            </div>
            <br />
            <div className="col-auto">
              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  name="phone"
                  id="inlineFormInputGroup"
                  placeholder="Phone number"
                  onChange={this.updateField}
                />
              </div>
            </div>
            <br />
            <div className="col-auto">
              <div className="form-select mb-3">
                <select
                  className="custom-select"
                  id="inputGroupSelect02"
                  name="type"
                  onChange={this.updateField}
                >
                  <option defaultValue>Choose type of user ...</option>
                  <option value="Customer">Customer</option>
                  <option value="Client">Client</option>
                </select>
              </div>
            </div>
            <div className="col-auto">
              <button type="submit" className="btn btn-primary mb-3">
                Register
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
export default SearchBar;
