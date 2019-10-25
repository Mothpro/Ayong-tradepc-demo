/* eslint-disable no-multi-spaces */
/* eslint-disable react/jsx-props-no-multi-spaces */
/* eslint-disable react/prop-types */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable require-jsdoc */
import React from 'react';
import './index.scss';
import ListItem from './ListItem';

class ListView extends React.Component {
    render() {
        const { lists } = this.props;
        return (
            <table id="table" width="100%" cellPadding="0" cellSpacing="0" style={{ fontSize: '1.3em' }}>
                <tbody>
                    {lists.map(item => (
                        <ListItem  list={item} key={item.id} />
                    ))
                    }
                </tbody>
            </table>
        );
    }
}
export default ListView;
