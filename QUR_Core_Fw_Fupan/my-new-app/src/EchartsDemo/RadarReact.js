/**
 * Created by yongyuehuang on 2017/8/5.
 */
import React, { Component } from 'react';
import echarts from 'echarts/lib/echarts' //必须
//import 'echarts/lib/chart/radar' //引入雷达图
// import echarts from 'echarts-liquidfill/dist/echarts'
// import 'echarts-liquidfill/src' 
export default class RadarReact extends React.Component {
  
  constructor(props) {
    super(props)
    this.initPie = this.initPie.bind(this)
  }
  
  initPie() {
    const { option={} } = this.props //外部传入的data数据
    let myChart = echarts.init(this.ID) //初始化echarts
    
    //设置options
    myChart.setOption(option)
    window.onresize = function() {
      myChart.resize()
    }
  }
  
  componentDidMount() {
    this.initPie()
  }
  
  componentDidUpdate() {
    this.initPie()
  }
  
  render() {
    const { width="100%", height="100%" } = this.props
    return <div ref={ID => this.ID = ID} style={{width, height}}></div>
  }
}