import React, { Component } from 'react';
import axios from 'axios';

//import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography'; 

/*const useStyles =  {
    root: {
        minWidth: 275,
        paddingBottom: 10,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    }
}; */

export default class Users extends Component {
    constructor(props) {
        super(props)
        this.state = {
            users: []
        }
    }

    

    componentDidMount(){
        axios.get('http://localhost:5000/users/')
            .then(response => {
                this.setState({users: response.data})

                //console.log(this.state.users[0])
            })
            .catch((err) => {
                console.log(err)
            })
    }

    renderItems() {
        const classes = this.props;

        return this.state.users.map(users => (
            <Card className = {classes.root}>
                <CardContent>
                    <Typography className={classes.title} gutterBottom>
                        {users.name}
                    </Typography>
                    <Typography variant="h5" component="h3">
                        {users.username}
                    </Typography>
                    <Typography variant="body2" component="p">
                        Followers: {(users.followers).length}
                    </Typography>
                </CardContent>

                <CardActions>
                    <Button size="small">Follow</Button>
                </CardActions>
            </Card>
        ));
    }

    render() {
        return (
            <div>
                <h5>Users:</h5>
                <div>{this.renderItems()}</div>
            </div>
        )
    }
}

