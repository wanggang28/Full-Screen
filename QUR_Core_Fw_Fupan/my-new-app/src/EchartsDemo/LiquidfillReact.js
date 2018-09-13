/**
 * Created by yongyuehuang on 2017/8/5.
 */
import React from 'react'
import echarts from 'echarts/lib/echarts' //必须
import 'echarts-liquidfill/src/liquidFill'

export default class LiquidfillReact extends React.Component {
  
  constructor(props) {
    super(props)
    this.initPie = this.initPie.bind(this)
  }
  
 initPie() {
    const { option={} } = this.props //外部传入的data数据
    let myChart = echarts.init(this.ID) //初始化echarts
    this.state = {myChart :myChart};
    
    //设置options
    myChart.setOption(option)
    //a.push(myChart);
    // setword(myChart);
    window.addEventListener('resize', () => this.updateSize());
  }
  
  updateSize(){
    this.state.myChart.resize()
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