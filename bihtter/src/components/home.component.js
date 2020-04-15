import React, { Component } from "react";
//import axios from 'axios';
import {
    getFromStorage,
    //setInStorage,
} from '../storage'

export default class Home extends Component{
    constructor(props) {
        super(props);

        this.state = {
            isLoading: true,
            token:'',
        };
    }

    componentDidMount(){
        const obj = getFromStorage('bhitter')
        if (obj && obj.token) {
            const { token } = obj
            //verify toeken
            fetch('../../backend/routes/users/verify?token' + token)
                .then(res => res.json())
                .then(json => {
                    if (json.success){
                    this.setState({
                        token
                    });
                    }
                    else{
                        window.location = '/login'
                    }
                })
        }
        else{
            window.location = '/signup';
    }
    }

    render(){
        return(
            <div> <p>loading</p> </div>
        );
    }
}