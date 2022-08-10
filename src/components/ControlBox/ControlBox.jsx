import React, { useEffect } from 'react';
import { control_box } from './controlBox.module.css';
import { WaitFor } from '../../utils/waitFor';
import { parse } from '../../utils/parse';
import Loader from '../UI/Loader/Loader';

const ControlBox = () => {
    const waitFor = new WaitFor(1000);

    useEffect(() => {
        waitFor.start(
            () => {
                parse(
                    document.getElementsByTagName('body')[0].children
                );
            }
        );
    }, []);

    return (
        <div className={ control_box } >
            <Loader />
        </div>
    )
}

export default ControlBox;