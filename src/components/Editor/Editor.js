import React from 'react'
import './Editor.css';
import EditorMaxIcon from '../../images/Preview-Max-Icon.png';

const editor = (props) => {
    
    return (
      <div id='Editor-Area'>
        <div id='Editor-Bar'>
          <div id='Editor-Circle'></div>
          <img id='Editor-Max-Icon' src={EditorMaxIcon}/>
        </div>
      </div>
    );
  }

export default editor;