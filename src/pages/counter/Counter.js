/* eslint-disable eol-last */
/* eslint-disable space-infix-ops */
/* eslint-disable no-lonely-if */
/* eslint-disable no-restricted-globals */
/* eslint-disable space-in-parens */
/* eslint-disable no-useless-return */
/* eslint-disable no-else-return */
/* eslint-disable no-console */
/* eslint-disable class-methods-use-this */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/sort-comp */
/* eslint-disable require-jsdoc */
import React from 'react';
import ShowText from './ShowText';
import Button from './Button';
import './index.scss';

// eslint-disable-next-line no-multi-spaces
let mask;   // 加载遮盖
let zore;
let spot; // 小数点
let empty; // 清空
let reverse; // 取反
let remainder; // 取余
let divide; // 除
let multply; // 乘
let substract; // 减
let add; // 加
let equal; // 等于
let showText = ''; // 显示文本
let oprator = ''; // 操作符
let firstNum = ''; // 第一个操作数
let nextNum = ''; // 第二个操作数
let result = ''; // 运算结果

class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            errormsg: '',
        };
        this.loadingOn = this.loadingOn.bind(this);
        this.loadingOff = this.loadingOff.bind(this);
        this.caculate = this.caculate.bind(this);
        this.clear = this.clear.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {
        mask = document.getElementById('mask'); // 加载遮盖
        zore = document.getElementById('zore');
        spot = document.getElementById('spot'); // 小数点
        empty = document.getElementById('empty'); // 清空
        reverse = document.getElementById('reverse'); // 取反
        remainder = document.getElementById('remainder');// 取余
        divide = document.getElementById('divide'); // 除
        multply = document.getElementById('multply'); // 乘
        substract = document.getElementById('substract');// 减
        add = document.getElementById('add'); // 加
        equal = document.getElementById('equal'); // 等于
        showText = ''; // 显示文本
        oprator = ''; // 操作符
        firstNum = ''; // 第一个操作数
        nextNum = ''; // 第二个操作数
        result = ''; // 运算结果
    }

    render() {
        return (
            <div>
                <div id="box">
                    <table width="400px" height="100%">
                        <tbody>
                            <tr height="100px">
                                <td colSpan="4">
                                    <ShowText value={this.state.value} />
                                </td>
                            </tr>
                            <tr height="16.6%">
                                <td width="25%">
                                    <Button id="empty" className="butn butn-dark" value="AC" onClick={this.handleClick} />
                                </td>
                                <td width="25%">
                                    <Button id="reverse" className="butn butn-dark" value="+/-" onClick={this.handleClick} />
                                </td>
                                <td width="25%">
                                    <Button id="remainder" className="butn butn-dark" value="%" onClick={this.handleClick} />
                                </td>
                                <td width="25%">
                                    <Button id="divide" className="butn butn-yellow" value="÷" onClick={this.handleClick} />
                                </td>
                            </tr>
                            <tr height="16.6%">
                                <td width="25%">
                                    <Button id="seven" className="butn" value="7" onClick={this.handleClick} />
                                </td>
                                <td width="25%">
                                    <Button id="eight" className="butn" value="8" onClick={this.handleClick} />
                                </td>
                                <td width="25%">
                                    <Button id="nine" className="butn" value="9" onClick={this.handleClick} />
                                </td>
                                <td width="25%">
                                    <Button id="multply" className="butn butn-yellow" value="×" onClick={this.handleClick} />
                                </td>
                            </tr>
                            <tr height="16.6%">
                                <td width="25%">
                                    <Button id="four" className="butn" value="4" onClick={this.handleClick} />
                                </td>
                                <td width="25%">
                                    <Button id="five" className="butn" value="5" onClick={this.handleClick} />
                                </td>
                                <td width="25%">
                                    <Button id="six" className="butn" value="6" onClick={this.handleClick} />
                                </td>
                                <td width="25%">
                                    <Button id="substract" className="butn butn-yellow" value="ー" onClick={this.handleClick} />
                                </td>
                            </tr>
                            <tr height="16.6%">
                                <td width="25%">
                                    <Button id="one" className="butn" value="1" onClick={this.handleClick} />
                                </td>
                                <td width="25%">
                                    <Button id="two" className="butn" value="2" onClick={this.handleClick} />
                                </td>
                                <td width="25%">
                                    <Button id="three" className="butn" value="3" onClick={this.handleClick} />
                                </td>
                                <td width="25%">
                                    <Button id="add" className="butn butn-yellow" value="+" onClick={this.handleClick} />
                                </td>
                            </tr>
                            <tr>
                                <td colSpan="2">
                                    <Button id="zore" className="butn" value="0" onClick={this.handleClick} />
                                </td>
                                <td width="25%">
                                    <Button id="spot" className="butn" value="." onClick={this.handleClick} />
                                </td>
                                <td width="25%">
                                    <Button id="equal" className="butn butn-yellow" value="=" onClick={this.handleClick} />
                                </td>
                            </tr>
                        </tbody>
                    </table>

                </div>
                <div>
                    {
                        this.state.errormsg === '' ? null : (
                            <div id="warn">{this.state.errormsg}</div>
                        )
                    }
                </div>

                <div id="mask">
                    <div id="loading" className="rotate">
                        <div className="loading1" />
                        <div className="loading1 loading2" />
                        <div className="loading1 loading3" />
                        <div className="loading1 loading4" />
                        <div className="loading1 loading5" />
                        <div className="loading1 loading6" />
                        <div className="loading1 loading7" />
                        <div className="loading1 loading8" />
                        <div className="loading1 loading9" />
                        <div className="loading1 loading10" />
                        <div className="loading1 loading11" />
                        <div className="loading1 loading12" />
                    </div>
                </div>
            </div>
        );
    }

    loadingOn() {
        mask.style.display = 'block';
    }

    loadingOff() {
        mask.style.display = 'none';
    }

    //
    caculate() {
        if (oprator == '+') {
            result = (Number(firstNum) + Number(nextNum)).toString();
        } else if (oprator == 'ー') {
            result = (Number(firstNum) - Number(nextNum)).toString();
        } else if (oprator == '×') {
            result = (Number(firstNum) * Number(nextNum)).toString();
        } else if (oprator == '÷') {
            result = (Number(firstNum) / Number(nextNum)).toString();
        } else if (oprator == '%') {
            result = (Number(firstNum) % Number(nextNum)).toString();
        }
        firstNum = result;
        nextNum = '';
        return true;
    }

    clear(string) {
        showText = string;
        this.setState({
            value: showText,
            errormsg: '',
        });
        oprator = '';
        firstNum = '';
        nextNum = '';
        result = '';
    }

    handleClick(event) {
        const btn = event.target;
        let inputText = '';
        if (btn == reverse || btn == empty) { // 如果是取反或清空按钮

        } else { // 如果是其他按钮,输入值为按钮值
            inputText = btn.innerHTML;
            /* showText += inputText
            setState({
                value : showText
            }) */
        }
        if (btn == empty) { // 如果点击清空按钮
            this.clear('');
        } else if (btn == equal) { // 如果点击等号按钮
            if (oprator.length <= 0 || oprator == '=') { // 没有操作符
                this.setState({ errormsg: '请输入运算符!' });
                return;
            } else if (nextNum.length <= 0) { // 没有第二个操作数
                this.setState({ errormsg: '请输入数字!' });
                return;
            }
            this.loadingOn();
            setTimeout(() => {
                this.loadingOff();
            }, 1500);
            if (this.caculate()) { // 计算成功,显示计算结果
                oprator = inputText;
                showText = `${showText}=${result}`;
                setTimeout(() => {
                    this.setState({
                        value: showText,
                        errormsg: '',
                    });
                }, 1500);
            } else { // 计算失败
                return;
            }
        } else if (btn == add || btn == substract || btn == multply || btn == divide || btn == remainder) {
            // 如果按钮为 + - * / %
            if (firstNum.length <= 0) { // 没有第一个操作数
                this.setState({ errormsg: '请输入数字!' });
                return;
            }
            if (btn == remainder && firstNum.indexOf('.') != -1) { // 前一个是小数不能取余
                this.setState({ errormsg: '取余计算请输入整数！' });
                return;
            } else if (oprator.length <= 0 || oprator == '=') { // 没有操作符
                oprator = inputText;
                showText += oprator;
            } else { // 已有操作符时
                this.setState({ errormsg: '请输入数字!' });
                return;
            }
            this.setState({
                value: showText,
                errormsg: '',
            });
            return;
        } else if (btn == reverse) { // 如果点击取反按钮
            if (oprator == '=') {
                showText = result;
                this.setState({ value: showText });
            }
            if (nextNum.length > 0 && nextNum != '') { // 有第二个操作数,将其取反
                if (Number(nextNum) > 0) {
                    nextNum = `-${nextNum}`;
                    showText = `${showText.substr(0, showText.length - nextNum.length + 1)}(${nextNum})`;
                } else {
                    nextNum = nextNum.substring(1);
                    showText = showText.substr(0, showText.length - nextNum.length - 3) + nextNum;
                }
            } else if (firstNum.length > 0 && firstNum != '') { // 只有第一个操作数,将其取反
                if (Number(firstNum) > 0) {
                    firstNum = `-${firstNum}`;
                    if (oprator.length > 0 && oprator != '=') {
                        showText = `(${firstNum})${oprator}`;
                    } else {
                        showText = `(${firstNum})`;
                    }
                } else {
                    firstNum = firstNum.substring(1);
                    if (oprator.length > 0 && oprator != '=') {
                        showText = firstNum + oprator;
                    } else if (oprator == '=' || oprator == '') {
                        showText = firstNum;
                    }
                }
            } else { // 没有操作数
                this.setState({ errormsg: '请输入数字!' });
                return;
            }
            this.setState({
                value: showText,
                errormsg: '',
            });
            return;
        } else { // 点击其他按钮,包括数字和小数点
            if (oprator == '=' ) { // 上一次点了等号,则清空操作符
                oprator = '';
                showText = '';
                if (btn == spot) {
                    this.clear('');
                }
            }
            if (btn == spot) { // 点击小数点
                if (oprator == '%') {
                    inputText = '';
                    this.setState({ errormsg: '取余计算请输入整数！' });
                    return;
                } else if (nextNum.length > 0 && nextNum.indexOf('.') != -1) {
                    inputText = '';
                } else if (nextNum.length > 0) {
                    inputText = '.';
                } else if (firstNum.length > 0 && firstNum.indexOf('.') != -1) {
                    inputText = '';
                } else if (firstNum.length > 0) {
                    inputText = '.';
                } else if (showText == '' || isNaN(showText.charAt(showText.length - 1))) {
                    inputText = ''; // 小数点前是数字可以在后面加小数点
                } else {
                    inputText = '.';
                }
            }
            if (oprator == '' || oprator == '=') { // 无操作符时,则拼接前一个数
                firstNum += inputText;
            } else { // 有操作符时,则拼接后一个数
                if (btn == zore && (oprator == '÷' || oprator == '%')) {
                    this.setState({ errormsg: '除数不能为0!' });
                    console.log(`${this.state.errormsg}>>`);
                    return;
                } else {
                    nextNum += inputText;
                }
            }
            if (showText !='' && showText.charAt(showText.length - 1) == ')') {
                showText = `${showText.substr(0, showText.length - 1) + inputText})`;
            } else {
                showText += inputText;
            }
            this.setState({
                value: showText,
                errormsg: '',
            });
            return;
        }
    }
}

export default Counter;