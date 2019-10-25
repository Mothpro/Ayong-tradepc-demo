/* eslint-disable react/prop-types */
import React from 'react';
import './index.scss';

// eslint-disable-next-line require-jsdoc
function Button(props) {
    const { pro } = props;
    return (
        <div
            id={pro.id}
            className={pro.className}
            onClick={pro.onClick}
        >
            {pro.value}
        </div>
    );
}
export default Button;
