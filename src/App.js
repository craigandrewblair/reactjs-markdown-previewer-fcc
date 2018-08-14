import React, { Component } from 'react';
import './App.css';
import Editor from './components/Editor/Editor';
import Previewer from './components/Previewer/Previewer';
import marked from 'marked';

class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      markdown:
`# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:
  
Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`
  
You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.com), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | ------------- 
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbererd lists too.
1. Use just 1s if you want! 
1. But the list goes on...
- Even if you use dashes or asterisks.
* And last but not least, let's not forget embedded images:

![React Logo w/ Text](https://goo.gl/Umyytc)
`
    }
  }
  
  editorInputHandler = (event) => {
    this.setState({
      markdown: event.target.value
    });
    console.log(this.state.markdown);
  }

  markupConvertor = () => {

  }

  render() {
    return (
      <div className="App">
        <div id='Main-Title'>Markdown Previewer</div>
        <div id='Viewer'>
          <Editor onChange={this.editorInputHandler} markdown={this.state.markdown}/>
          <Previewer markdown={this.state.markdown} renderer={this.renderer}/>
        </div>
        <div id='Name-Date'>Craig Blair &copy; 2018</div>  
      </div>
    );
  }
  
}

marked.setOptions({
  breaks: true,
});

const renderer = new marked.Renderer();
const linkRenderer = renderer.link;
renderer.link = (href, title, text) => {
    const html = linkRenderer.call(renderer, href, title, text);
    return html.replace(/^<a /, '<a target="_blank" rel="nofollow" ');
};


export default App;
