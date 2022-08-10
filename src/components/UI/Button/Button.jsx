import React, { useState } from 'react';
import { WaitFor } from '../../../utils/waitFor';
import { circbtn } from './button.module.css'

const Button = ({upDateProgress}) => {
  const [enabled, setEnabled] = useState(false);
  const waitFor = new WaitFor(1000);

  return (
    <div 
    className={ circbtn }
      onClick={() => {
        if (waitFor.terminate) {
          waitFor.stop();
        } else {
          waitFor.start(
            () => {
              upDateProgress()
            }
          );
        }
        setEnabled(!enabled);
      }}
    >{
      enabled ? 'STOP' : 'START'
    }</div>
  )
}

export default Button