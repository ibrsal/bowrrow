import React from "react";
import logo from "../../thread-logo.png";
import { Link } from "react-router-dom";
import LoginContext from '../contexts/login';

import "./Header.css";

class Header extends React.Component {
    static contextType= LoginContext;
    render() {
        return (
            <div className="container-fluid">
                <div className="container">
                    <div className="row">
                            <div className="col-12 col-sm-12 col-md-1 col-lg-3">
                                <div className="siteLogo">
                                <a href="#link"><img src={logo} width="50px" height="60px" alt="Thread Logo" /></a>
                                </div>
                            </div>
                            <div className="col-12 col-sm-12 col-md-11 col-lg-9">
                                <div className="menu">
                                    <nav>
                                        <ul className="nav">
                                            <li className="nav-item iconCustomer">
                                                <span className="icon material-icons md-36 md-dark">home</span>
                                                <Link to="/" className="nav-link menuLink"> Home </Link></li>
                                            <li className="nav-item iconCustomer">
                                                <span className="icon material-icons md-36 md-dark">build</span>
                                                <Link to="/Customers" className="menuLink nav-link"> Customers </Link></li>
                                            <li className="nav-item iconClients">
                                                <span className="icon material-icons md-36 md-dark">accessibility_new</span>
                                                <Link to="/Clients" className="menuLink nav-link"> Clients </Link></li>
                                            <li className="nav-item iconNetwork">
                                                <span className="icon material-icons md-36 md-dark">people</span>
                                                <Link to="/Networking" className="nav-link"> Networking </Link></li>
                                                <li className="nav-item iconNetwork">
                                                <span className="icon material-icons md-36 md-dark"></span>
                                                <Link to="/Signup" className="nav-link"> Signup </Link></li>
                                                {
                                                this.context.isLoggedIn ?
                                                    <li className="nav-item iconCode">
                                                        <span className="icon material-icons md-36 md-dark" />
                                                        {this.context.email}
                                                        <Link to="/logout" className="nav-link"> Logout </Link>
                                                    </li>
                                                :
                                                    <li className="nav-item iconCode">
                                                        <span className="icon material-icons md-36 md-dark" />
                                                        <Link to="/login" className="nav-link"> Login </Link>
                                                    </li>
                                            }
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                   </div>
               </div>
            </div>                    
        );
    }
}

export default Header;