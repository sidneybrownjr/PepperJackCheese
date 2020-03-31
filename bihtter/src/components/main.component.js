import React, { Component } from 'react';
import axios from 'axios';
import Feed from "./feed.component";

export default class Main extends Component{
  constructor(props){
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
    this.onChangePost = this.onChangePost.bind(this);
    this.onChangeUser = this.onChangeUser.bind(this);
   
   
    this.state = {
      username: '',
      token: '',
      description: '',
      date: 123
    }
  }  


    onChangePost(e){ 
    this.setState({
      description: e.target.value
      });
    }
    onChangeUser(e){ 
      this.setState({
        username: e.target.value
        });
    }
    
    onSubmit(e){ 
      e.preventDefault();
      const post = {
        username: this.state.username,
        description: this.state.description,
        date: this.state.date
      }

     console.log(post);
     //tweets.call(post);
     axios.post('http://localhost:5000/tweets/post', post)
     .then(res => console.log(post));
      
    
    }
        render(){
          return(
          <div>
            <form  onSubmit={this.onSubmit}>

              <div class="form-group">
                <label class="form-control-label">User:</label>
                <input type="text" name="user" class="form-control" onChange={this.onChangeUser}></input>
              </div>
                
              <div class="form-group">
                <label class="form-control-label">Description:</label>
                <textarea name="description" class="form-control" onChange={this.onChangePost}></textarea>
              </div>
  
              <div className="form-group">
                <input type="submit" style={{background: "#8b0000", border:"white"}} value="Post!"
                 className="btn btn-primary">
                </input>
              </div>
            </form>

            <Feed/>
            
          </div>
        )
    }
}

