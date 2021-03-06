import React, { Component } from "react";
import axios from 'axios';
import { setInStorage } from "../storage";


export default class Login extends Component{
    constructor(props){
        super(props);

        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onSubmit = this.onSubmit.bind(this);


        this.state = {
            username: '',
            password: '',
            users: []
        }
    }

    onChangePassword(e){
        this.setState({
            password: e.target.value
        })
    }

    onChangeUsername(e){
        this.setState({
            username: e.target.value
        })
    }

    onSubmit(e){
        e.preventDefault();
        
        const user = {
            username: this.state.username,
            password: this.state.password
        }

        console.log(user)

        axios.post('/users/checkPassword', user)
            .then(res => {
                    console.log(res.data) 
                    // put the session token in to local storage
                    setInStorage('token' ,  res.data.token )
                    // put the user id token in to local storage
                    setInStorage(' user_id' ,  res.data.user_id )
                     window.location = '/main'
                },(err) => {
                    console.log(err);
    
            });        
    }
    
    
    render(){
        return (
            <div>
                <h3>Login</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Username: </label>
                        <input type="text"
                            className="form-control"
                            value= {this.state.username}
                            onChange={this.onChangeUsername}
                            />
                    </div>
                    <div className="form-group">
                        <label>Password </label>
                        <input type="password"
                            className="form-control"
                            value= {this.state.password}
                            onChange={this.onChangePassword}
                            />
                    </div>

                    <div className="form-group">
                        <input type="submit" style={{background: "#8b0000", border:"white"}} value="login" className="btn btn-primary"/>
                    </div>
                </form>
      
    </div>
  );
    }
}
