import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
//eslint-disable-next-line
import { BrowserRouter as Router, Route} from "react-router-dom";
import Main from "./components/main.component"
import Login from "./components/login.component"
import SignUp from "./components/signup.component"
import Navbar from "./components/nav.component"
import Home from "./components/home.component"

function App() {
  return (
    <html>
    <Router>
      <div className="container">
        <Navbar />
        <br/>
        <Route path="/" exact component={Home} />
        <Route path="/login" exact component={Login} />
        <Route path="/signup" component={SignUp} />
        <Route path="/main" component={Main} />
      </div>
      <div className="container">
      </div>
      
    </Router>
    </html>
  );
}

export default App;
