/* eslint-disable radix */
/* eslint-disable no-param-reassign */
/* eslint-disable no-plusplus */
/* eslint-disable no-restricted-syntax */
/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-globals */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/sort-comp */
/* eslint-disable class-methods-use-this */
/* eslint-disable require-jsdoc */
import React from 'react';
import './index.scss';
import Header from './Header';
import ListView from './ListView';

let index; // 首页按钮
let list; // 收入分析按钮
let indexDiv; // 首页内容面板
let listDiv; // 收入列表面板
let dateBefore; // 获取的起始日期
let dateAfter; // 获取的截止日期
let now; // 当前日期
let dateInfo; // 当前日期yyyy-mm-dd
let date1; // 发送的起始日期
let date2; // 发送的截止日期

class List extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            lists: [], // 列表数据
            lastDate: '', // 上次同步的日期
        };
        this.indexClick.bind(this); // 点击首页
        this.listClick.bind(this); // 点击列表
        this.handleSearch = this.handleSearch.bind(this); // 点击查询
        this.handleSynchro = this.handleSynchro.bind(this); // 点击同步
        this.refreshDate = this.refreshDate.bind(this); // 获取当前日期选择,并刷新日期
        this.fetchClassic = this.fetchClassic.bind(this); // 请求数据
        this.stringToDate = this.stringToDate.bind(this); // 字符串转日期对象
    }

    // 挂载后获取标签
    componentDidMount() {
        index = document.getElementById('index'); // 获取首页按钮
        list = document.getElementById('list'); // 获取收入分析按钮
        indexDiv = document.getElementById('index-table');// 获取首页内容面板
        listDiv = document.getElementById('list-table'); // 获取收入列表面板
        dateBefore = document.getElementById('date1'); // 获取的起始日期
        dateAfter = document.getElementById('date2'); // 获取的截止日期
        this.refreshDate();
        this.fetchClassic(date1, date2);
    }

    // 点击首页按钮,切换首页
    indexClick() {
        indexDiv.style.display = 'block';
        index.className = 'center tab tab-on';
        list.className = 'center tab tab-off';
        listDiv.style.display = 'none';
    }

    // 点击收入分析按钮,切换列表
    listClick() {
        list.className = 'center tab tab-on';
        listDiv.style.display = 'block';
        index.className = 'center tab tab-off';
        indexDiv.style.display = 'none';
    }

    // 点击查询
    handleSearch() {
        this.refreshDate();
        this.fetchClassic(date1, date2);
    }

    // 点击同步
    handleSynchro() {
        this.refreshDate();
        const year = now.getFullYear();
        const month = now.getMonth() + 1;
        const day = now.getDate();
        const hour = now.getHours();
        const min = now.getMinutes();
        const sec = now.getSeconds();
        const last = `${year}-${month}-${day}  ${hour}:${min}:${sec}`;
        this.setState({ lastDate: last });
    }

    render() {
        return (
            <div>
                <Header />
                <div style={{ position: 'relative', width: '100%' }}>
                    <div className="empty" style={{ marginTop: '2px' }}>
                        <div className="tab-off" style={{ height: '100%', display: 'block' }}>&nbsp;</div>
                    </div>
                    <div className="center tab tab-off" id="index" onClick={this.indexClick}>首页</div>
                    <div className="center tab tab-on" id="list" onClick={this.listClick}>收入分析</div>
                </div>
                <div id="index-table">首页内容</div>
                <div id="list-table">

                    <form>
                        <table width="100%" cellSpacing="10px">
                            <tbody>
                                <tr>
                                    <td>
                                        <select className="select inline-block" name="select2" id="select2">
                                            <option style={{ display: 'none' }} defaultValue>交易</option>
                                        </select>
                                        &nbsp;&nbsp;
                                        <select className="select inline-block" name="select" id="select">
                                            <option style={{ display: 'none' }} defaultValue>页条数</option>
                                            <option value="1">1</option>
                                        </select>
                                        <div className="inline">&nbsp;&nbsp;&nbsp;&nbsp;日期选择</div>
                                        <input className="select inline-block" type="date" name="date1" id="date1" />
                                        -
                                        <input className="select inline-block" type="date" name="date2" id="date2" />
                                        <div id="search" className="btn inline-block" onClick={this.handleSearch}>查询</div>
                                        <div id="same" className="btn inline-block" onClick={this.handleSynchro}>同步</div>
                                        交易上次手动同步时间：
                                        <span id="lastDate">{this.state.lastDate}</span>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </form>
                    <table width="100%" cellPadding="0" cellSpacing="0" style={{ marginTop: '20px' }}>
                        <tr className="table-dark">
                            <table width="100%" cellPadding="0" cellSpacing="10px" style={{ fontSize: '1.1em' }}>
                                <tbody>
                                    <tr>
                                        <td>
                                            <table width="100%" cellSpacing="5px" cellPadding="0">
                                                <tbody>
                                                    <tr>
                                                        <td id="td1" width="6.5%">日期</td>
                                                        <td id="td2" width="6%">付费人数</td>
                                                        <td id="td3" width="6%">免费人数</td>
                                                        <td id="td4" width="6%">客单价</td>
                                                        <td id="td5" width="6.5%">总收入</td>
                                                        <td id="td6" width="6%">到期（人）</td>
                                                        <td id="td7" width="6.5%">新订（单）</td>
                                                        <td id="td8" width="6.5%">续订（单）</td>
                                                        <td id="td9" width="6.5%">升级（单）</td>
                                                        <td id="td10" width="6%">后台（单）</td>
                                                        <td id="td11" width="6%">续订率</td>
                                                        <td id="td12" width="6%">一个月（单）</td>
                                                        <td id="td13" width="6.5%">一季度（单）</td>
                                                        <td id="td14" width="6.5%">半年（单）</td>
                                                        <td id="td15" width="6.5%">一年（单）</td>
                                                        <td id="td16" width="6%">来源</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </tr>
                        <tr>
                            <ListView lists={this.state.lists} />
                        </tr>
                        <tr className="table-light">
                            <table width="100%" cellPadding="0" cellSpacing="0" style={{ fontSize: '1.2em' }}>
                                <tbody>
                                    <tr>
                                        <td>
                                            <table width="100%" cellSpacing="5px" cellPadding="0">
                                                <tbody>
                                                    <tr>
                                                        <td width="81%">&nbsp;</td>
                                                        <td width="19%">
                                                            <div className="inline text-blue">上一页</div>
                                                            <div className="inline">1/1</div>
                                                            <div className="inline text-blue">下一页</div>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </tr>
                    </table>
                </div>
            </div>

        );
    }

    // 刷新选择的日期
    refreshDate() {
        now = new Date(); // 获取当前日期
        dateInfo = new Date(now.getFullYear(), now.getMonth(), now.getDate());// 截止日期初始化为当前日期
        if (isNaN(this.stringToDate(dateBefore.value).getTime())) {
            date1 = 0;
        } else {
            date1 = this.stringToDate(dateBefore.value).getTime();
        }
        if (isNaN(this.stringToDate(dateAfter.value).getTime())) {
            date2 = dateInfo.getTime();
        } else {
            date2 = this.stringToDate(dateAfter.value).getTime();
        }
    }

    // Fetch请求
    async fetchClassic(dateA, dateB) {
        const res = await fetch('../data/list/index.json');
        const json = await res.json();
        const array = json.content;
        // console.log(json)
        // console.log(array)
        const data = [];
        let j = 0;
        for (const i in array) {
            const day = this.stringToDate(array[i].day).getTime();
            if (day >= dateA && day <= dateB) {
                data[j] = {
                    id: array[i].id,
                    l1: array[i].day,
                    l2: array[i].payorder,
                    l3: array[i].freeorder,
                    l4: array[i].singleprice,
                    l5: array[i].totalprice,
                    l6: array[i].refunsprice,
                    l7: array[i].neworder,
                    l8: array[i].againorder,
                    l9: array[i].updateorder,
                    l10: array[i].autoagainorder,
                    l11: array[i].getbackorder,
                    l12: array[i].monthcycle,
                    l13: array[i].aquartercycle,
                    l14: array[i].sixmonthscycle,
                    l15: array[i].ayearcycle,
                };
                j++;
            }
        }
        this.setState({ lists: data });
    }

    // 字符串转化为Date对象
    stringToDate(dateStr, separator) {
        if (!separator) {
            separator = '-';
        }
        const dateArr = dateStr.split(separator);
        const year = parseInt(dateArr[0]);
        let month;
        if (typeof dateArr[1] != 'undefined') {
            if (dateArr[1].indexOf('0') === 0) {
                month = parseInt(dateArr[1].substring(1));
            } else {
                month = parseInt(dateArr[1].substring(0));
            }
        }
        const day = parseInt(dateArr[2]);
        const date = new Date(year, month - 1, day);
        return date;
    }
}
export default List;
