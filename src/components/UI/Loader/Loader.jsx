import React, { useRef, useState } from 'react';
import Button from '../Button/Button';
import { loader, progress, circle } from './loader.module.css';

const Loader = () => {
    const radius = 88;
    const circumference = 2 * Math.PI * radius;

    const [progress, setProgress] = useState(0);
    const [curentPercent, setCurentPercent] = useState(0);

    const upDateProgress = () => {
        
        setCurentPercent(
            curentPercent > 100 ? 0 : curentPercent + 1
        );

        console.log(progress);
        setProgress(circumference - curentPercent / 100 * circumference);
    }


    return (
        <div 
            className={loader}
        >
            <svg 
                className={progress}
                height={200}
                width={200}
            >
                <circle 
                    className={circle}
                    stroke='orange'
                    strokeWidth='6'
                    cx='100'
                    cy='100'
                    r={radius}
                    fill='transparent'
                    style={
                        {
                            strokeDasharray: `${circumference} ${circumference}`,
                            strokeDashoffset: `${progress}`
                        }
                    }
                />
            </svg>
            
            <Button upDateProgress={upDateProgress}/>
            
        </div>
    )
}

export default Loader;