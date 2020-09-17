import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Comment from '../Comment/Comment';
import './PostDetails.css'
const useStyles = makeStyles({
  root: {
    minWidth: 275,
    width:'50%',
    marginLeft:'250px'
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
const PostDetails = () => {
    const classes = useStyles();

    const {postId}=useParams();
    const [post,setPost]=useState({})
    const [comments,setComment]=useState([])
    const [images,setImage]=useState([]);
    useEffect(()=>{
        const url=`https://jsonplaceholder.typicode.com/posts/${postId}`;
        fetch(url)
        .then(res=>res.json())
        .then(data=>setPost(data))

        const url1=`https://jsonplaceholder.typicode.com/comments?postId=${postId}`;
        fetch(url1)
        .then(res=>res.json())
        .then(data=>setComment(data))

        const url2='https://randomuser.me/api/';
        fetch(url2)
        .then(res=>res.json())
        .then(data=>setImage(data))
    },[])
    const {results}=images
    console.log(results)
    const {id,userId,title,body}=post;
    return (
        <div>
            <div>
                <Card className={classes.root}>
                    <CardContent>
                        <Typography className={classes.title} gutterBottom>
                            User Id : {userId}
                        </Typography>
                        <Typography variant="h5" component="h2">
                            Id : {id}
                        </Typography>
                        <Typography className={classes.pos}>
                            Title : {title}
                        </Typography>
                        <Typography variant="body2" component="p"  color="textSecondary">
                            Body : {body}
                        </Typography>
                    </CardContent>
                </Card>
            </div>
            <div>
                <h1 className="name-highlight">All Comments</h1>
                {comments.map(cm=> <Comment comment={cm} key={cm.id}></Comment>)}
            </div>
            <div>
                {
                   results &&
                   <div>
                       <h1 className="name-highlight">Image</h1>
                       <div  className="image">
                            <img className="circle" src={results[0].picture.large} alt=""/>
                       </div>
                   </div>
                }
            </div>
        </div>
    );
};

export default PostDetails;