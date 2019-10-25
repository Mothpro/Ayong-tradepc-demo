/* eslint-disable require-jsdoc */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import './index.scss';

class Hearder extends React.Component {
    render() {
        return (
            <header id="head" style={{ width: '100%' }}>
                <table width="100%" cellSpacing="10px">
                    <tbody>
                        <tr>
                            <td width="5%" />
                            <td className="left" width="50%">
                                <img src="../../../src/pages/list/img/logo.png" width="25px" height="25px" alt="" />
                                <div className="inline left">每天进步一点点，离目标更近一点点</div>
                            </td>
                            <td className="right" width="40%">UserName</td>
                            <td width="5%" className="right text-blue">退出</td>
                        </tr>
                    </tbody>
                </table>
            </header>
        );
    }
}
export default Hearder;
