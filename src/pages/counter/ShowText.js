/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable require-jsdoc */
import React from 'react';
import './index.scss';

class ShowText extends React.Component {
    render() {
        return (
            <div id="show">{this.props.value}</div>
        );
    }
}

export default ShowText;
