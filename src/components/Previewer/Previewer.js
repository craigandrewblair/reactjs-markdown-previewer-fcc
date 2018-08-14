import React from 'react'
import './Previewer.css';
import PreviewMaxIcon from '../../images/Preview-Max-Icon.png';
import marked from 'marked';

const previewer = (props) => {
    
    return (
      <div id='Preview-Area'>
        <div id='Preview-Bar'>
          <div id='Preview-Circle'></div>
          <img id='Preview-Max-Icon' src={PreviewMaxIcon}/>
        </div>
        <div id='preview' dangerouslySetInnerHTML = {{__html: marked(props.markdown)}}></div>
      </div>
    );
  }

export default previewer;
