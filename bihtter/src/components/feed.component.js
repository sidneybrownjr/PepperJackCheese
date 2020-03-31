import React, { Component } from 'react';
import axios from 'axios';
import './feed.css';
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
        <div class="solid" key={tweets._id}>
            <p>UserName: {tweets.username}</p>
            <p>Description: {tweets.description}</p>
            <p>Date: {tweets.date}</p>
          </div>
        ));
      }
    
    render(){
        return(
            <div class ="soild">
                <h5>Feed:</h5>
                <div>{this.renderItems()}</div>;
            </div>
        )
    }
}