import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "@material/card/dist/mdc.card.min.css";

import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Customers from "./components/customers/customers";
import Homepage from "./components/home/HomePage";
import Clients from "./components/clients/Clients";
import Networking from "./components/networking/Networking";
import NetworkingItemDetails from "./components/networking/Network-item-details";
import Company from "./components/networking/Company";
import ClientForms from "./components/client-form";
import NetworkForms from "./components/networking-form";
import CustomerForms from "./components/customer-form";
import SearchBar from "./components/search-bar/SearchBar";
import ClientCustomers from './components/client-customers/Client-customers'
import Login from "./components/login";
import Logout from "./components/logout";
import Signup from './components/signup/signup';
import LoginContext, { loadContextValue } from './components/contexts/login';

class App extends Component {
  render() {
    const contextValue = loadContextValue();

    return (
      <div id="app">
              <LoginContext.Provider value={contextValue}>

        <header>
          <Header />
        </header>
        <main>
        <SearchBar />

          <Switch>
            <Route exact path="/" component={Homepage} />
            <Route exact path="/Customers" component={Customers} />
            <Route exact path="/Customers/add" component={CustomerForms.AddCustomer} />
            <Route exact path={`/Customers/edit/:id`} component={CustomerForms.EditCustomer} />

            <Route exact path="/Clients" component={Clients} />
            <Route exact path="/Clients/add" component={ClientForms.AddClient} />
            <Route exact path={`/Clients/edit/:id`} component={ClientForms.EditClient} />

            <Route exact path="/Networking" component={Networking} />
            <Route exact path="/Networking/add" component={NetworkForms.addNetwork}/>
            <Route exact path="/Networking/details/:id" component={NetworkingItemDetails}/>
            <Route exact path="/Networking/edit/:id" component={NetworkForms.editNetwork}/>
            <Route exact path={`/Networking/company/:id`} component={Company} />

            <Route exact path={`/clientcustomers/:id`} component={ClientCustomers} />
            
            <Route exact path="/login" component={Login} />
              <Route exact path="/logout" component={Logout} />
              
              <Route exact path="/Signup" component={Signup} />

          </Switch>
        </main>
        <footer>
          <Footer />
        </footer>
        </LoginContext.Provider>

      </div>
    );
  }
}

export default App;
