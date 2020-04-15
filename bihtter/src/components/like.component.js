import React, { Component } from 'react';
import axios from 'axios';
//import { getFromStorage } from "../storage";
export default class Like extends Component{
  constructor(props) {
    super(props);    
    this.state = {
      tweet_id:this.props.tweet_id,
      user_id: this.props.user_id,
      like_arr: this.props.like_arr,
      del: -1
    }
        this.onLike = this.onLike.bind(this);
  }
  componentDidMount(){          
    for (let step = 0; step < this.props.like_arr.length; step++){
      console.log("for")
        if(this.state.like_arr[step] === this.state.user_id){
          console.log("for if")
            this.setState({
              del: 1
        }) 
    }
    console.log(this.state.del)

  }}
      onLike(){
          const req = {
          tweet_id: this.state.tweet_id,
          user_id: this.state.user_id,
        
          } 
          if(this.state.del === -1){
            console.log("if")
            axios.post('http://localhost:5000/tweets/like', req)
          .then(res => {
            console.log(res)
            window.location = '/main';  
          })
          }else{
            console.log("else")
            axios.post('http://localhost:5000/tweets/unlike', req)
            .then(res => {
              console.log(res)
             window.location = '/main';  
            })
          }
          
        }      
    
    render() {
      return (
            <div>
              <button className="btn btn-primary" onClick={this.onLike}>
              Like
              </button>
          </div>
        );
      }
    }
