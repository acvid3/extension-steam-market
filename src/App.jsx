import React, { useEffect, useRef, useState } from 'react';
import { app } from './app.module.css';
import ControlBox from './components/ControlBox/ControlBox';
import ProductItems from './components/ProductItems/ProductItems';
import StatusBar from './components/StatusBar/StatusBar';

// Element.insertAdjacentHTML(position, responseText)

const App = () => {
  const [pressed, setPressed] = useState(false);
  const ref = useRef(null);

  const mousePressed = e => {
    setPressed(true);
  }

  const mouseUp = e => {
    setPressed(false);
  }

  const mouseMove = e => {
    if (pressed) {
      ref.current.style.left = e.clientX + 'px';
      ref.current.style.top = e.clientY + 'px';
    }
  }

  useEffect(() => {
    document.addEventListener('mousemove', mouseMove);
    
    return () => {
      document.removeEventListener('mousemove', mouseMove);
    }
  }, [pressed]);

  useEffect(() => {
    document.addEventListener('mouseup', mouseUp);
    
    return () => {
      document.removeEventListener('mouseup', mouseUp);
    }
  }, []);

  return (
    <div 
      className={ app } 
      ref={ref}
    >
      <StatusBar mousePressed={mousePressed} mouseUp={mouseUp}/>
      <ControlBox />
      <ProductItems />
    </div>
  )
}

export default App;