import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import asyncComponent from './AsyncComponent'
import $ from 'jquery'
import { Table, Divider, Tag } from 'antd';
import 'antd/dist/antd.css';
import { stackbarOption,pieOption, barOption, lineOption, scatterOption, mapOption, radarOption, candlestickOption } from './optionConfig/options'
const PieReact = asyncComponent(() => import(/* webpackChunkName: "PieReact" */'./EchartsDemo/PieReact'))  //饼图组件
const BarReact = asyncComponent(() => import(/* webpackChunkName: "BarReact" */'./EchartsDemo/BarReact')) //柱状图组件
const LineReact = asyncComponent(() => import(/* webpackChunkName: "LineReact" */'./EchartsDemo/LineReact'))  //折线图组件
const ScatterReact = asyncComponent(() => import(/* webpackChunkName: "ScatterReact" */'./EchartsDemo/ScatterReact'))  //散点图组件
const MapReact = asyncComponent(() => import(/* webpackChunkName: "MapReact" */'./EchartsDemo/MapReact'))  //地图组件
const RadarReact = asyncComponent(() => import(/* webpackChunkName: "RadarReact" */'./EchartsDemo/RadarReact')) //雷达图组件
const CandlestickReact = asyncComponent(() => import(/* webpackChunkName: "CandlestickReact" */'./EchartsDemo/CandlestickReact')) //k线图组件

const columns = [{
  title: 'Release',
  dataIndex: 'release',
  key: 'release',
}, {
  title: 'Next_Milestone',
  dataIndex: 'nextmilestone',
  key: 'nextmilestone',
}, {
  title: 'Details',
  key: 'details',
  dataIndex: 'details',
}, ];

const pagination={
  hideOnSinglePage:true
}
const data = [{
  key: '1',
  release: '',
  nextmilestone: '',
  details: '',
}, {
  key: '2',
  release: '',
  nextmilestone: '',
  details: '',
}, {
  key: '3',
  release: '',
  nextmilestone: '',
  details: '',
},{
  key: '4',
  release: '',
  nextmilestone: '',
  details: '',
},{
  key: '5',
  release: '',
  nextmilestone: '',
  details: '',
}];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: props.width,
      height: props.height,
      mapData : mapOption,
      time:new Date()
    }
    setInterval(function(){
 
	        this.setState({
 
	            time:new Date()
 
	        });
 
	  }.bind(this),1000);

  }

  componentDidMount() {
    this.updateSize();
    this.getmapData();
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

  // componentWillMount(){
   
  // }
  
  getmapData(){
      $.get('http://fw.core.lenovo.com/dv/chart/overall?name=release_owr&name=site_manager_owr&q=18D%20Total&q=MLK%20Total&q=A2%20Total&q=Mehlow%20Total&q=A2_MLK_Total ',function(result){
          this.state.mapData.yAxis[0].data=result.Beijing.xAxis;
          this.state.mapData.yAxis[1].data=result.Shanghai.xAxis;
          this.state.mapData.yAxis[2].data=result.Taiwan.xAxis;
          this.state.mapData.yAxis[3].data=result.USA.xAxis;
          this.state.mapData.legend.data=result.Beijing.legend;
        for(var i=0;i<result.table.data.length;i++){
            data[i].release=result.table.data[i].release;
            data[i].nextmilestone=result.table.data[i].nextMilestone;
            data[i].details=result.table.data[i].details;
        }
        for(var i=0;i<result.Beijing.series.length;i++){
            result.Beijing.series[i]['xAxisIndex']=0;
            result.Beijing.series[i]['yAxisIndex']=0;
            result.Beijing.series[i]['barWidth']=8;
            if(result.Beijing.series[i].name=="OWR"||result.Beijing.series[i].name=="FV"){
                result.Beijing.series[i]['stack']='owr1';
            }else{
                 result.Beijing.series[i]['stack']='ser1';
            }
            result.Beijing.series[i]['type']='bar';
            result.Beijing.series[i]['label']={
                normal: {
                    show: true,
                    textStyle:{
                            fontSize:'16'
                    },
                    position: 'inside',
                    formatter: function(params) {
                    
                    if (params.value > 0) {
                        return params.value;
                    } else {
                        return '';
                    }
                },
                },
            };
            this.state.mapData.series.push(result.Beijing.series[i]);
        }
        for(var i=0;i<result.Shanghai.series.length;i++){
            result.Shanghai.series[i]['xAxisIndex']=1;
            result.Shanghai.series[i]['yAxisIndex']=1;
            result.Shanghai.series[i]['barWidth']=8;
            if(result.Shanghai.series[i].name=="OWR"||result.Shanghai.series[i].name=="FV"){
                result.Shanghai.series[i]['stack']='owr2';
            }else{
                 result.Shanghai.series[i]['stack']='ser2';
            }
            
            result.Shanghai.series[i]['type']='bar';
            result.Shanghai.series[i]['label']={
                normal: {
                    show: true,
                    textStyle:{
                            fontSize:'16'
                    },
                    position: 'inside',
                    formatter: function(params) {
                    
                    if (params.value > 0) {
                        return params.value;
                    } else {
                        return '';
                    }
                },
                },
            };
            this.state.mapData.series.push(result.Shanghai.series[i]);
        }
        for(var i=0;i<result.Taiwan.series.length;i++){
            result.Taiwan.series[i]['xAxisIndex']=2;
            result.Taiwan.series[i]['yAxisIndex']=2;
            result.Taiwan.series[i]['barWidth']=8;
            if(result.Taiwan.series[i].name=="OWR"||result.Taiwan.series[i].name=="FV"){
                result.Taiwan.series[i]['stack']='owr3';
            }else{
                 result.Taiwan.series[i]['stack']='ser3';
            }
            result.Taiwan.series[i]['type']='bar';
            result.Taiwan.series[i]['label']={
                normal: {
                    show: true,
                    textStyle:{
                            fontSize:'16'
                    },
                    position: 'inside',
                    formatter: function(params) {
                    
                    if (params.value > 0) {
                        return params.value;
                    } else {
                        return '';
                    }
                },
                },
            };
            this.state.mapData.series.push(result.Taiwan.series[i]);
        }
        for(var i=0;i<result.USA.series.length;i++){
            result.USA.series[i]['xAxisIndex']=3;
            result.USA.series[i]['yAxisIndex']=3;
            result.USA.series[i]['barWidth']=8;
            if(result.USA.series[i].name=="OWR"||result.USA.series[i].name=="FV"){
                result.USA.series[i]['stack']='owr4';
            }else{
                 result.USA.series[i]['stack']='ser4';
            }
            result.USA.series[i]['type']='bar';
            result.USA.series[i]['label']={
                normal: {
                    show: true,
                    textStyle:{
                            fontSize:'16'
                    },
                    position: 'inside',
                    formatter: function(params) {
                    
                    if (params.value > 0) {
                        return params.value;
                    } else {
                        return '';
                    }
                },
                },
            };
            this.state.mapData.series.push(result.USA.series[i]);
        }
        
        this.state.mapData.yAxis[4].data=result.imm.xAxis;
          for(var i=0;i<result.imm.series.length;i++){
            result.imm.series[i]['xAxisIndex']=4;
            result.imm.series[i]['yAxisIndex']=4;
            result.imm.series[i]['barWidth']=8;
            if(result.imm.series[i].name=="OWR"||result.imm.series[i].name=="FV"){
                result.imm.series[i]['stack']='owr5';
            }else{
                 result.imm.series[i]['stack']='ser5';
            }
            result.imm.series[i]['type']='bar';
            result.imm.series[i]['label']={
                normal: {
                    show: true,
                    textStyle:{
                            fontSize:'16'
                    },
                    position: 'inside',
                    formatter: function(params) {
                    
                    if (params.value > 0) {
                        return params.value;
                    } else {
                        return '';
                    }
                },
                },
            };
            this.state.mapData.series.push(result.imm.series[i]);
        } 

        this.state.mapData.yAxis[5].data=result.uefi.xAxis;
          for(var i=0;i<result.uefi.series.length;i++){
            result.uefi.series[i]['xAxisIndex']=5;
            result.uefi.series[i]['yAxisIndex']=5;
            result.uefi.series[i]['barWidth']=8;
            if(result.uefi.series[i].name=="OWR"||result.uefi.series[i].name=="FV"){
                result.uefi.series[i]['stack']='owr6';
            }else{
                 result.uefi.series[i]['stack']='ser6';
            }
            result.uefi.series[i]['type']='bar';
            result.uefi.series[i]['label']={
                normal: {
                    show: true,
                    textStyle:{
                            fontSize:'16'
                    },
                    position: 'inside',
                    formatter: function(params) {
                    
                    if (params.value > 0) {
                        return params.value;
                    } else {
                        return '';
                    }
                },
                },
            };
            this.state.mapData.series.push(result.uefi.series[i]);
        } 
           
        this.setState(this.state);            
       }.bind(this));
      
  }

  
  render() {
    return (
      
      <div className="main_charts" style={ { width: this.state.width, height: this.state.height } }>
          <div className='time'>{this.state.time.toLocaleDateString().replace(/\//g,".")} {this.state.time.toLocaleTimeString('chinese',{hour12:false})}</div>
          <div className="main_top"><MapReact option={mapOption} /></div>
          <Table columns={columns} dataSource={data} pagination={pagination}/>
      </div>
    );
  }
}

export default App;
