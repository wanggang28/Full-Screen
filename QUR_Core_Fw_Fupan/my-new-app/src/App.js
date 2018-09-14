import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import asyncComponent from './AsyncComponent'
import $ from 'jquery'
import earth from './images/green_black.jpg'
import border from './images/border.png'
import { pieActionOption,shuiqiuOption,billOption,funnelOption,muchlineOption,stacklineOption,actionOption,much_stackOption,stackOption,OthersOption,piePhaseOption,pieOption2, verticalbarOption1,verticalbarOption2,barSummaryOption,horizontalbarOption2,lineOption, scatterOption, mapOption, radarOption, candlestickOption } from './optionConfig/options'
const PieReact = asyncComponent(() => import(/* webpackChunkName: "PieReact" */'./EchartsDemo/PieReact'))  //饼图组件
const BarReact = asyncComponent(() => import(/* webpackChunkName: "BarReact" */'./EchartsDemo/BarReact')) //柱状图组件
const LineReact = asyncComponent(() => import(/* webpackChunkName: "LineReact" */'./EchartsDemo/LineReact'))  //折线图组件
const ScatterReact = asyncComponent(() => import(/* webpackChunkName: "ScatterReact" */'./EchartsDemo/ScatterReact'))  //散点图组件
const MapReact = asyncComponent(() => import(/* webpackChunkName: "MapReact" */'./EchartsDemo/MapReact'))  //地图组件
const RadarReact = asyncComponent(() => import(/* webpackChunkName: "RadarReact" */'./EchartsDemo/RadarReact')) //雷达图组件
const CandlestickReact = asyncComponent(() => import(/* webpackChunkName: "CandlestickReact" */'./EchartsDemo/CandlestickReact'))
const LiquidfillReact = asyncComponent(() => import(/* webpackChunkName: "CandlestickReact" */'./EchartsDemo/LiquidfillReact')) //k线图组件
const defineArr = [{name: 'xcc',},{name: 'uefi'}];
class App extends Component {
  constructor(props) {
      super(props);
      this.state = {
        Non_CodeIssue : shuiqiuOption,
        Defect_Phase: muchlineOption,
        Core_FW: stacklineOption,
        Code_defect:stackOption,
        Other_defect:much_stackOption,
        uefi_summary: barSummaryOption,
        uefi_phase:piePhaseOption,
        uefi_action_breakdown:pieActionOption,
        width: props.width,
        height: props.height,
        time:new Date(),
        //XCCPie:pieOption2,
        selectName: defineArr[0].name,
      };
      setInterval(function(){
 
	        this.setState({
 
	            time:new Date()
 
	        });
 
	  }.bind(this),1000);
      this.getCore_Phase(defineArr[0].name);
      //this.getDefect_Phase();
      this.getuefi_action_breakdown(defineArr[0].name);
      this.getuefi_summary(defineArr[0].name);
      this.getuefi_phase(defineArr[0].name);
      //this.getXCCPie('18D Block');
  }


  changeName(e) {
    this.setState({ selectName: e.target.value });
    console.log(e.target.value )
    this.getCore_Phase(e.target.value);
    this.getuefi_action_breakdown(e.target.value);
    this.getuefi_summary(e.target.value);
    this.getuefi_phase(e.target.value);
    // defineArr.map((item, index) => {
    //   if(e.target.value === item.name) {
    //     this.setState({ selectThing: item.things[0] });
    //   }
    //   return true;
    // })
  };

  componentDidMount() {
    this.updateSize();
    window.addEventListener('resize', () => this.updateSize());
  }
  componentWillUnmount() {
    window.removeEventListener('resize', () => this.updateSize());
  }

  updateSize() {
    try {
      const parentDom = ReactDOM.findDOMNode(this).parentNode;
      let { width, height } = this.props;
      //如果props没有指定height和width就自适应
        width = window.innerWidth;
        height =window.innerHeight;
      this.setState({ width, height });
    } catch (ignore) {
    }
  }
  //'http://fw.core.lenovo.com/dv/table/grid?name=core&q=18D%20UEFI'
  getCore_Phase(release) {
    $.get('http://fw.core.lenovo.com/dv/chart/fupan', function (result) {
        //Core FW Summary
        console.log(result[release])
        var xAxis=result.xAxis;
        this.state.Core_FW.xAxis.data = xAxis;
        this.state.Core_FW.legend.data = result[release].charts[0].legend;
        for(var i=0;i<result[release].charts[0].legend.length;i++){
            this.state.Core_FW.series[i].data = result[release].charts[0].series[i].data;
            this.state.Core_FW.series[i].name = result[release].charts[0].series[i].name;
        }
        //Defect Phase
        this.state.Defect_Phase.xAxis.data = xAxis;
        this.state.Defect_Phase.legend.data = result[release].charts[1].legend;
        for(var i=0;i<result[release].charts[1].legend.length;i++){
            this.state.Defect_Phase.series[i].data = result[release].charts[1].series[i].data;
            this.state.Defect_Phase.series[i].name = result[release].charts[1].series[i].name;
        }
        //Code_Defect
        var xAxis=result.xAxis;
        this.state.Code_defect.xAxis.data = xAxis;
        this.state.Code_defect.legend.data = result[release].charts[2].legend;
        
        for(var i=0;i<result[release].charts[2].legend.length;i++){
            this.state.Code_defect.series[i].data = result[release].charts[2].series[i].data;
            console.log(result[release].charts[2].series[i].data[0])
            this.state.Code_defect.series[i].name = result[release].charts[2].series[i].name;
        }
        //Others
        this.state.Other_defect.xAxis.data = xAxis;
        this.state.Other_defect.legend.data = result[release].charts[3].legend;
        for(var i=0;i<result[release].charts[3].legend.length;i++){
            this.state.Other_defect.series[i].data = result[release].charts[3].series[i].data;
            this.state.Other_defect.series[i].name = result[release].charts[3].series[i].name;
        }
        this.setState(this.state); 
      }.bind(this));
  }
  
//   //'http://fw.core.lenovo.com/dv/table/grid?q=18D%20XCC&name=core'
//   getXCCData(x) {
//     // if(x==undefined){
//     //   x='18D Block';
//     // }
//     var serverRequest = $.get(API[x][1].api, function (result) {
//         var value = result.chart.series.total;
//         var name=result.chart.xAxis;
//         this.state.XCCData.xAxis[0].data = name;
//         this.state.XCCData.series[0].data = value;
//         this.setState(this.state); 
//       }.bind(this));
//   }
  
  //'http://fw.core.lenovo.com/dv/table/grid?name=xcc_core_summary_01&q=18D%20Total'
  getuefi_action_breakdown(release) {
    // if(x==undefined){
    //   x='18D Block';
    // }
    var serverRequest = $.get('http://fw.core.lenovo.com/dv/table/grid?name='+release+'_action_breakdown&q=18D%20Total', function (result) {
        var data = result.chart.data;
        this.state.uefi_action_breakdown.series[0].data = data;
        var per=Number(result.table.data[2]['%'])/100;
        console.log(per)
        this.state.Non_CodeIssue.series[0].data.push(per);
        console.log(this.state.Non_CodeIssue.series[0].data)
        this.setState(this.state); 
      }.bind(this));
  }
  
  getuefi_summary(release) {
    // if(x==undefined){
    //   x='18D Block';
    // }
    var serverRequest = $.get('http://fw.core.lenovo.com/dv/table/grid?name='+release+'_summary&q=18D%20Total', function (result) {
        var value = result.chart.series.total;      
        var name=result.chart.xAxis;
        this.state.uefi_summary.yAxis.data = name;
        this.state.uefi_summary.series[0].data = value;
        this.setState(this.state); 
      }.bind(this));
  }

  //'http://fw.core.lenovo.com/dv/table/grid?name=xcc_core_summary_02&q=18D%20Total'
  getuefi_phase(release) {
    // if(x==undefined){
    //   x='18D Block';
    // }
    var serverRequest = $.get('http://fw.core.lenovo.com/dv/table/grid?name='+release+'_core_defect&q=18D%20Total', function (result) {
        var data = result.chart.data;
        this.state.uefi_phase.series[0].data = data;
        this.setState(this.state); 
      }.bind(this));
  }


  render() {
     const names = defineArr.map((item, index) => {
      return <option key={index}>{item.name}</option>
    });
    return (
        
            <div className="Full-screen" style={{width: this.state.width, height: this.state.height,backgroundImage:'url(' + earth + ')'}}>
                <div className="banner">
                    <div className="layout">
                        <div className="title">
                            <div className="datetime" id="datetime">    
                                <div className="time1">18D {this.state.selectName} Core fw Fupan – Defects Analysis<span className="option"><select value={this.state.selectName} onChange={this.changeName.bind(this)}>{names}</select></span></div>
                                <div className="time2">{this.state.time.toLocaleDateString().replace(/\//g,".")} {this.state.time.toLocaleTimeString('chinese',{hour12:false})}</div>
                            </div>
                        </div>
                        <div className="mockup">
                            <div className="content">
                                <div className="content-left"><BarReact option={this.state.uefi_summary} /></div>
                                <div className="content-right"><LineReact option={this.state.Core_FW}/></div>
                            </div>
                            <div className="content">
                                <div className="content-right"><LineReact option={this.state.Defect_Phase}/></div>
                                <div className="content-left"><PieReact option={this.state.uefi_phase} /></div>
                            </div>
                        </div>
                        <div className="mockdown">
                             <div className="stack">
                                  <div className="stack-left" id="stack-add">
                                             <div className="actions"><LiquidfillReact option={this.state.Non_CodeIssue}/></div>
                                             <div className="actions"><PieReact option={this.state.uefi_action_breakdown}/></div>
                                  </div>
                                  <div className="stack-right"><BarReact option={this.state.Code_defect} /></div>
                             </div>
                             <div className="stack">
                                  <div className="stack-right"><BarReact option={this.state.Other_defect} /></div>
                                  <div className="stack-left">
                                             <div className="actions"><LiquidfillReact option={shuiqiuOption}/></div>
                                             <div className="actions"><PieReact option={this.state.uefi_action_breakdown}/></div>
                                  </div>
                             </div>  
                        </div>

                        </div>
                    </div>    
             </div>

    );
  }
}

export default App;
