import React, { Component } from 'react';
import axios from 'axios';
import './feed.css';
import Like from "./like.component"
import { getFromStorage } from "../storage";
export default class Feed extends Component{
    constructor(props){
        super(props);
        
    this.state = {tweets:[]};
         
    }
    componentDidMount(){
        axios.get('http://localhost:5000/tweets/')
        .then(response => {
            this.setState({tweets: response.data})
           console.log(this.state.tweets);
        })
        .catch((error) =>{
            console.log(error);
        })
    }
    renderItems() {
        return this.state.tweets.map(tweets => (
        <div className="solid" key={tweets._id}>
            <p>UserName: {tweets.username}</p>
            <p>Description: {tweets.description}</p>
            <p>Date: {tweets.date.substring(0,10)}</p>
            <p>Like:{tweets.like.length} 
                <Like 
                    tweet_id ={tweets._id} 
                    like_arr ={tweets.like}
                    user_id ={getFromStorage("user_id")}
                />
             </p>
          </div>

        ));
      }
    
    render(){
        return(
            <div className ="soild">
                <h5>Feed:</h5>
                <div>{this.renderItems()}</div>;
            </div>
        )
    }
}
