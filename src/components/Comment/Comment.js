import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
  root: {
    width:'40%',
    marginLeft:'70px',
    height:'250px',
    marginTop:'20px',
    display: 'inline-block',

  },
  mainButton :{
  textDecoration:'none',
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
  },
});
const Comment = (props) => {

    const {comment}=props
    const {name,email,body}=comment;
    const classes = useStyles();
    return (
        <Card className={classes.root}>
                    <CardContent>
                        <Typography className={classes.title} gutterBottom>
                            Name : {name}
                        </Typography>
                        <Typography variant="h5" component="h2">
                            Email : {email}
                        </Typography>
                        <Typography variant="body2" component="p"  color="textSecondary">
                            Body : {body}
                        </Typography>
                    </CardContent>
        </Card>
    );
};

export default Comment;