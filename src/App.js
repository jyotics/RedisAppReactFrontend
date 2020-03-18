import React from 'react';
import {BrowserRouter as Router ,Route ,Link } from "react-router-dom";

import logo from './logo.svg';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';

import CreateUser from "./components/create-user.component";
import UserList from "./components/user-list.component";



function App() {
  return (
    <Router>
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <a className="navbar-brand" href="http://localhost:3000" target="_blank"><img src={logo} width="30" height="30"></img></a>
        
        <Link to="/" className="navbar-brand">Redis App</Link>
        <div className="nav-collapse">
          <ul className="navbar-nav mr-auto">
            <li className="navbar-item">
              <Link to="/" className="nav-link">Users</Link>
            </li>
              <li className="navbar-item">
                <Link to="/create" className="nav-link">Create User</Link>
              </li>
          </ul>
        </div>
        </nav>
      </div>
      <Route path="/" exact component={UserList}/>
      <Route path="/create" component={CreateUser} />
      </Router>
  );
}

export default App;
