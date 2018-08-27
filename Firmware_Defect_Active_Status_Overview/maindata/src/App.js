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
  title: 'Phase',
  dataIndex: 'phase',
  key: 'phase',
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
  release: 'Purley MLK',
  phase: 'SDV',
  nextmilestone: 'SDV Exit 08/24/2018',
  details: 'O/W/R: 4 (6). 3',
}, {
  key: '2',
  release: 'Meholw',
  phase: 'SDV',
  nextmilestone: 'SDV Exit 08/23/2018',
  details: 'O/W/R: 6 (17). 19',
}, {
  key: '3',
  release: '18D Block',
  phase: 'BBFV',
  nextmilestone: 'BBFV Entry 08/27/2018',
  details: 'O/W/R: 4 (6). 3',
},{
  key: '4',
  release: 'A2',
  phase: 'BBFV',
  nextmilestone: 'BBFV Entry 08/27/2018',
  details: 'O/W/R: 4 (6). 3',
},{
  key: '5',
  release: 'A2 MLK',
  phase: 'BBFV',
  nextmilestone: 'BBFV Entry 08/27/2018',
  details: 'O/W/R: 4 (6). 3',
}];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: props.width,
      height: props.height,
      mapData : mapOption,
    }
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
      console.log(this.state)
    } catch (ignore) {
    }
  }

  // componentWillMount(){
   
  // }
  
  getmapData(){
      $.get('http://fw.core.lenovo.com/dv/table/grid?name=site_manager_owr&q=18D%20Total',function(result){
          this.state.mapData.yAxis[0].data=result.Beijing.xAxis;
          this.state.mapData.yAxis[1].data=result.Shanghai.xAxis;
          this.state.mapData.yAxis[2].data=result.Taiwan.xAxis;
          this.state.mapData.yAxis[3].data=result.USA.xAxis;
          this.state.mapData.legend.data=result.Beijing.legend;
         // console.log(result)
        for(var i=0;i<result.Beijing.series.length;i++){
            result.Beijing.series[i]['xAxisIndex']=0;
            result.Beijing.series[i]['yAxisIndex']=0;
            result.Beijing.series[i]['barWidth']=21;
            result.Beijing.series[i]['stack']='总量一';
            result.Beijing.series[i]['type']='bar';
            result.Beijing.series[i]['label']={
                normal: {
                    show: true,
                    textStyle:{
                            fontSize:'18'
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
            //result.Shanghai.series[i]['barWidth']=21;
            result.Shanghai.series[i]['stack']='总量二';
            result.Shanghai.series[i]['type']='bar';
            result.Shanghai.series[i]['label']={
                normal: {
                    show: true,
                    textStyle:{
                            fontSize:'18'
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
            result.Taiwan.series[i]['barWidth']=21;
            result.Taiwan.series[i]['stack']='总量三';
            result.Taiwan.series[i]['type']='bar';
            result.Taiwan.series[i]['label']={
                normal: {
                    show: true,
                    textStyle:{
                            fontSize:'18'
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
            result.USA.series[i]['barWidth']=21;
            result.USA.series[i]['stack']='总量四';
            result.USA.series[i]['type']='bar';
            result.USA.series[i]['label']={
                normal: {
                    show: true,
                    textStyle:{
                            fontSize:'18'
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
        
        console.log(this.state.mapData)
        console.log(result)
        this.setState(this.state);            
       }.bind(this));

      $.get('http://fw.core.lenovo.com/dv/chart/overall?name=release_owr&q=18D%20Total&q=MLK%20Total&q=A2%20Total&q=Mehlow%20Total&q=A2_MLK_Total',function(result){
          console.log(result)
          this.state.mapData.yAxis[4].data=result.chart.xAxis;
          for(var i=0;i<result.chart.series.length;i++){
            result.chart.series[i]['xAxisIndex']=4;
            result.chart.series[i]['yAxisIndex']=4;
            result.chart.series[i]['barWidth']=21;
            result.chart.series[i]['stack']='总量五';
            result.chart.series[i]['type']='bar';
            result.chart.series[i]['label']={
                normal: {
                    show: true,
                    textStyle:{
                            fontSize:'18'
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
            this.state.mapData.series.push(result.chart.series[i]);
        }
        console.log(this.state.mapData)
        //console.log(result)
        this.setState(this.state);            
       }.bind(this));
      
  }

  
  render() {
    return (
      <div className="main_charts" style={ { width: this.state.width, height: this.state.height } }>
          <div className="main_top"><MapReact option={mapOption}/></div>
          <div className="main_bottom"><Table columns={columns} dataSource={data} pagination={pagination}/></div>
      </div>
    );
  }
}

export default App;
