import React, { Component } from 'react';
import logo from '../assets/images/logo.ico';
import sortIcon from '../assets/images/sort.png'
import '../assets/App.css';
import Post from './Post.js'

class App extends Component {
  render() {
    return (
      <div className="App">

        <div id="header" class="container">

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