import React from "react";

class SearchBar extends React.Component {
  render() {
    return (
      <div className="container search-bar">
        <form>
          <div className=" align-items-center">
            <div className="col-auto">
              
              <input
                type="text"
                className="form-control mb-3"
                id="inlineFormInput"
                placeholder="User name"
              />
            </div>
            <br/>
            <div className="col-auto">
              <div className="input-group mb-3">
                
                <input
                  type="text"
                  className="form-control"
                  id="inlineFormInputGroup"
                  placeholder="Email"
                />
              </div>
            </div>
            <br/>
            <div className="col-auto">
              <div className="input-group mb-3">
                
                <input
                  type="text"
                  className="form-control"
                  id="inlineFormInputGroup"
                  placeholder="Phone number"
                />
              </div>
            </div>
            <br/>
            <div className="col-auto">
              <div className="form-select mb-3">
                <select className="custom-select" id="inputGroupSelect02">
                  <option defaultValue>Choose type of user ...</option>
                  <option value="2">Customer</option>
                  <option value="3">Client</option>
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
