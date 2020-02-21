import React, { Component } from "react";
//import axios from 'axios';

export default class Login extends Component{
    constructor(props){
        super(props);

        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onSubmit = this.onSubmit.bind(this);


        this.state = {
            user: '',
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

        const exercise = {
            username: this.state.username,
            password: this.state.password
        }

        console.log(exercise)

        window.location = '/';
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
                            value= ''
                            onChange={this.onChangeUsername}
                            />
                    </div>
                    <div className="form-group">
                        <label>Password </label>
                        <input type="text"
                            className="form-control"
                            value=''
                            onChange={this.onChangePassword}
                            />
                    </div>

                    <div className="form-group">
                        <input type="button" style={{background: "#8b0000", border:"white"}} value="login" className="btn btn-primary"/>
                    </div>
                </form>
      
    </div>
  );
    }
}
