import Tools from 'utils/index';
import React from 'react';
import Link from 'react-router';
import { Navigation, Icon, Menu } from 'qnui';
import './flexdemo.scss';

const { Item, Group } = Navigation;

/**
    @author Mothpro
    导航条
* */

// 计算器页面
class Header extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        ans: 0,
        counter: '',
        isShow: false
      };
      this.handleAns = this.handleAns.bind(this)
      this.handleCounter = this.handleCounter.bind(this)
      this.handleIsShow = this.handleIsShow.bind(this)
      this.handleAnsChange = this.handleAnsChange.bind(this)
      this.handleIsClickChange = this.handleIsClickChange.bind(this)
      this.handleIsShowChange = this.handleIsShowChange.bind(this)

    }

    handleAns(ans){
        this.setState({
          ans:ans
        })
    }

    handleCounter(counter){
        this.setState({
          counter: counter
        })
    }

    handleIsShow(isShow){
        this.setState({
          isShow: isShow
        })
    }

    handleIsShowChange(isShow){
        this.setState({
          isShow: isShow
        })
    }

    handleAnsChange(e){
        this.handleAns(e.target.value)
    }

    handleIsClickChange(e){
        let text = e.target.value
        console.log(text)
        let showans = 0
        if(text !== 'AC' && text !== '+/-' && text !== 'Ans' && text !== '='){
            this.handleCounter(this.state.counter + text)
            this.handleAns(this.state.counter + text)
        }
        else if(text === 'AC'){
            this.handleCounter('')
            this.handleAns(0)
        }else if(text ==='+/-'){
            this.handleCounter(eval(-1 * this.state.counter))
            this.handleAns(this.state.counter)
        }else if(text === '='){
            showans = eval(this.state.counter);
            setTimeout(() => {
            this.handleIsShowChange(true)
            },0)
            setTimeout(() => {
            this.handleIsShowChange(false)
            this.handleAns(showans)
            },1500)
            this.handleCounter(showans)
    }
}
    render() {

        return (
        <div>
            <div className="main">
                <input type="text" name="number" readOnly className="showAns"
                    value={this.state.ans}
                    />
                <div className="buttons flex-wrap flex-between">
                    <button className='color-4E4F4C 'value="AC" onClick={this.handleIsClickChange}>AC</button>
                    <button className='color-4E4F4C'value="+/-" onClick={this.handleIsClickChange}>+/-</button>
                    <button className='color-4E4F4C'value="%" onClick={this.handleIsClickChange}>%</button>
                    <button className='color-FF9D3E' value="/" onClick={this.handleIsClickChange}>÷</button>
                    <button value="7" onClick={this.handleIsClickChange}>7</button>
                    <button value="8" onClick={this.handleIsClickChange}>8</button>
                    <button value="9" onClick={this.handleIsClickChange}>9</button>
                    <button className='color-FF9D3E' value="*" onClick={this.handleIsClickChange}>×</button>
                    <button value="4" onClick={this.handleIsClickChange}>4</button>
                    <button value="5" onClick={this.handleIsClickChange}>5</button>
                    <button value="6" onClick={this.handleIsClickChange}>6</button>
                    <button  className='color-FF9D3E' value="-" onClick={this.handleIsClickChange}>-</button>
                    <button value="1" onClick={this.handleIsClickChange}>1</button>
                    <button value="2" onClick={this.handleIsClickChange}>2</button>
                    <button value="3" onClick={this.handleIsClickChange}>3</button>
                    <button className='color-FF9D3E' value="+" onClick={this.handleIsClickChange}>+</button>
                    <button className="button0" value="0" onClick={this.handleIsClickChange}>
                    <div className="display-inline-0">
                        0
                    </div>
                    </button>
                    <button value="." onClick={this.handleIsClickChange}>.</button>
                    <button className="color-FF9D3E buttonEqual" value="=" onClick={this.handleIsClickChange}>=</button>
                </div>
            </div>
            <div className={this.state.isShow ? 'load5 show': 'load5 hidden'}>
              <div className="loader">
              </div>
            </div>
        </div>

        );
    }
}
export default Header;

