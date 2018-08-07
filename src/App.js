import React, { Component } from 'react';
import './App.css';
import Editor from './components/Editor/Editor';
import Previewer from './components/Previewer/Previewer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div id='Main-Title'>Markdown Previewer</div>
        <div id='Viewer'>
          <Editor />
          <Previewer />
        </div>
        <div id='Name-Date'>Craig Blair &copy; 2018</div>  
      </div>
    );
  }
}

export default App;
