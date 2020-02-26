import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route} from "react-router-dom";
import SignUp from "./components/signup.component";
import Login from "./components/login.component";

function App() {
  return (
    <Router>
      <div className="container">
      <br/>
      <Route path="/login" exact component={Login} />
      <Route path="/signup" component={SignUp} />
      </div>
    </Router>
  );
}

export default App;
