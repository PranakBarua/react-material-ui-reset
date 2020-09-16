import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
  root: {
    width:'22%',
    marginLeft:'22px',
    height:'180px',
    marginTop:'10px',
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
   
const SinglePost = (props) => {
    const {post}=props;
    const {id,title}=post;
    const classes = useStyles();
    return (
        <Card className={classes.root} variant="outlined">
           <CardContent>
               <Typography className={classes.title} color="textSecondary" gutterBottom>
                   {id}
               </Typography>
               <Typography variant="body2" component="p">
                   {title}
               </Typography>
           </CardContent>
           <CardActions>
               <Link to={"/post/"+id} className={classes.mainButton}><Button  variant="contained" color="primary">Read Details</Button></Link>
           </CardActions>
       </Card>
    );
};

export default SinglePost;