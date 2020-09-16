import React, { useEffect, useState } from 'react';
import SinglePost from '../SinglePost/SinglePost';
const Post = () => {
    const [post,setPost]=useState([])
    useEffect(()=>{
        const url='https://jsonplaceholder.typicode.com/posts';
        fetch(url)
        .then(response=>response.json())
        .then(data=>setPost(data))
    },[])

    return (
           post.map(pt=> <SinglePost post={pt}></SinglePost>)
    );
};

export default Post;