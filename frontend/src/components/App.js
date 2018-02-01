import React, { Component } from 'react';
import logo from '../assets/images/logo.ico';
import sortIcon from '../assets/images/sort.png'
import '../assets/App.css';
import Post from './Post.js'
import * as ReadableAPI from '../utils/api.js'

class App extends Component {

  componentDidMount()
  { 
      ReadableAPI.getAllPosts().then((posts)=>{
        this.setState(posts)
      })
  }

   state = {
    posts : []
  }

  render() {
    return (
      <div className="App">

        <div id="header" className="container">

          <div id="logo">
            <img src={logo} className="App-logo" alt="logo" />
            <h1><a href="#">Readable</a></h1>
          </div>

          <button className='button'>Create</button>
          <button className="button-sorticon"></button>
          
          <Post/>
        </div>
      </div>
    );
  }
}

export default App;
