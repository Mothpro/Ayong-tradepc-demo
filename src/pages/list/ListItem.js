/* eslint-disable react/prop-types */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable require-jsdoc */
import React from 'react';
import './index.scss';

class ListItem extends React.Component {
    render() {
        const { list } = this.props;
        return (
            <tr>
                <td className="table-light">
                    <table width="100%" cellSpacing="5px" cellPadding="0">
                        <tbody>
                            <tr>
                                <td className="text-blue" width="6.5%">{list.l1}</td>
                                <td width="6%">{list.l2}</td>
                                <td width="6%">{list.l3}</td>
                                <td width="6%">{list.l4}</td>
                                <td width="6.5%">{list.l5}</td>
                                <td width="6%">{list.l6}</td>
                                <td width="6.5%">{list.l7}</td>
                                <td width="6.5%">{list.l8}</td>
                                <td width="6.5%">{list.l9}</td>
                                <td width="6%">{list.l10}</td>
                                <td width="6%">{list.l11}</td>
                                <td width="6%">{list.l12}</td>
                                <td width="6.5%">{list.l13}</td>
                                <td width="6.5%">{list.l14}</td>
                                <td width="6.5%">{list.l15}</td>
                                <td width="6%" className="text-blue">分析</td>
                            </tr>
                        </tbody>
                    </table>
                </td>
            </tr>
        );
    }
}
export default ListItem;
