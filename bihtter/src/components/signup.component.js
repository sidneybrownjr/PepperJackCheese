import React, { Component } from "react";
import axios from 'axios';

export default class SignUp extends Component{
    constructor(props){
        super(props);

        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onSubmit = this.onSubmit.bind(this);


        this.state = {
            name: '',
            user: '',
            password: '',
        }
    }

    onChangeName(e){
        this.setState({
            name: e.target.value
        })
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
            name: this.state.name,
            username: this.state.username,
            password: this.state.password
        }

        console.log(user)

        axios.post('http://localhost:5000/users/add', user)
            .then(res => console.log(res.data));
        
        axios.get('/user/12345')
            .catch(function (error) {
                console.log(error.toJSON());
            });

    }
    
    render(){
        return (
            <div>
                <h3>Sign up!</h3>
                <form onSubmit={this.onSubmit}>
                <div className="form-group">
                        <label>Name: </label>
                        <input type="text"
                            className="form-control"
                            value= {this.state.name}
                            onChange={this.onChangeName}
                            />
                    </div>
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
                        <input type="text"
                            className="form-control"
                            value= {this.state.password}
                            onChange={this.onChangePassword}
                            />
                    </div>

                    <div className="form-group">
                        <input type="submit" style={{background: "#8b0000", border:"white"}} value="sign up!" className="btn btn-primary">
                            
                        </input>
                    </div>
                </form>
      
    </div>
  );
    }
}