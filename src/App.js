import React from 'react';
import './App.css';
import Post from './components/Post/Post';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import PostDetails from './components/PostDetails/PostDetails';
import Header from './components/Header/Header';
import NotFound from './components/NotFound/NotFound';
function App() {
  return (  
      <div>
        <Header></Header>
        <Router> 
          <Switch>
            <Route exact path="/">
              <Post></Post>
            </Route>
            <Route path="/post/:postId">
              <PostDetails></PostDetails>
            </Route>
            <Route path="/post">
              <Post></Post>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
        </Router>
      </div>
  );
}

export default App;
