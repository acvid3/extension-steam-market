import React from 'react';
import { sb } from './statusBar.module.css';

const StatusBar = ({mousePressed}) => {
  return (
    <div 
      className={ sb }
      onMouseDown={mousePressed}
    >
    </div>
  )
}

export default StatusBar;