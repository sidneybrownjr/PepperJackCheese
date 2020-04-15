import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route} from "react-router-dom";

import Main from "./components/main.component"
import Login from "./components/login.component"
import SignUp from "./components/signup.component"
import Navbar from "./components/nav.component"
import Home from "./components/home.component"
import Users from "./components/users.component"

function App() {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <br/>
        <Route path="/" exact component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={SignUp} />
        <Route path="/main" component={Main} />
        <Route path="/users" component={Users} />
      </div>
    </Router>
  );
}

export default App;
