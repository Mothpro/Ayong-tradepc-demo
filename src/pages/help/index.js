
import React from 'react';
import ReactDOM from 'react-dom';
import './nosass.scss';

class Help extends React.Component {
    render() {
        return (
            <div>
                <el-tab-pane label="收入分析" className="flex-column" >


                    <div className="flex-start">
                    <select className="select-w100h22 mr25 form-select">
                      <option value="交易">交易</option>
                      <option value="saab">Saab</option>
                      <option value="opel">Opel</option>
                      <option value="audi">Audi</option>
                    </select>
                    <select className="select-w100h22 mr25 form-select">
                      <option value="页条数">页条数</option>
                      <option value="saab">Saab</option>
                      <option value="opel">Opel</option>
                      <option value="audi">Audi</option>
                    </select>
                    <div className="ftsz13 mr10">
                      日期选择
                    </div>
                    <input type="date" name="user_date" value="2019-09-21" />
                    <div className="">
                      -
                    </div>
                    <input type="date" className="mr10" name="user_date" value="2019-09-27" />

                    <button id="retrieve-btn" type="button" className="buttonsize bluebutton mr5">查询</button>
                    <button id="sync-btn" type="button" className="buttonsize mr5">同步</button>

                    <div id="updatetime-div" className="ftsz13">

                    </div>
                    </div>


                    <div className="mt15">
                      <table id="customers" rules='rows' cellspacing='0' align='right'>
                          <tr>
                          <th>日期</th>
                          <th>付费人数</th>
                          <th>免费人数</th>
                          <th>客单价</th>
                          <th>总收入</th>
                          <th>到期(人)</th>
                          <th>新订(单)</th>
                          <th>续订(单)</th>
                          <th>升级(单)</th>
                          <th>后台(单)</th>
                          <th>续订率</th>
                          <th>一个月(单)</th>
                          <th>一季度(单)</th>
                          <th>半年(单)</th>
                          <th>一年(单)</th>
                          <th>来源</th>
                          </tr>

                          <tr>
                          <td>Apple</td>
                          <td>Steven Jobs</td>
                          <td>USA</td>
                          <td>Apple</td>
                          <td>Steven Jobs</td>
                          <td>USA</td>
                          <td>Apple</td>
                          <td>Steven Jobs</td>
                          <td>USA</td>
                          <td>Apple</td>
                          <td>Steven Jobs</td>
                          <td>USA</td>
                          <td>Apple</td>
                          <td>Steven Jobs</td>
                          <td>USA</td>
                          <td>Apple</td>
                          </tr>

                          <tr>
                          <td>Apple</td>
                          <td>Steven Jobs</td>
                          <td>USA</td>
                          <td>Apple</td>
                          <td>Steven Jobs</td>
                          <td>USA</td>
                          <td>Apple</td>
                          <td>Steven Jobs</td>
                          <td>USA</td>
                          <td>Apple</td>
                          <td>Steven Jobs</td>
                          <td>USA</td>
                          <td>Apple</td>
                          <td>Steven Jobs</td>
                          <td>USA</td>
                          <td>Apple</td>
                          </tr>
                          <tr>
                          <td>Apple</td>
                          <td>Steven Jobs</td>
                          <td>USA</td>
                          <td>Apple</td>
                          <td>Steven Jobs</td>
                          <td>USA</td>
                          <td>Apple</td>
                          <td>Steven Jobs</td>
                          <td>USA</td>
                          <td>Apple</td>
                          <td>Steven Jobs</td>
                          <td>USA</td>
                          <td>Apple</td>
                          <td>Steven Jobs</td>
                          <td>USA</td>
                          <td>Apple</td>
                          </tr>
                      </table>
                    </div>




                    <div className="flex-end ">
                        <div className="flex-between mt15">
                            <div className="mr10 clr-00A5E8">
                              上一页
                            </div>
                            <div className="mr10">
                              1/1
                            </div>
                            <div className="mr150 clr-00A5E8">
                              下一页
                            </div>
                        </div>
                    </div>
                </el-tab-pane>
            </div>
        );
    }
}

ReactDOM.render(<Help />, document.getElementById('container'));
