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

class App extends Component {
  render() {
    return (
      <div id="app">
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
          </Switch>
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    );
  }
}

export default App;
