/**
 * Created by yongyuehuang on 2017/8/5.
 */
import React from 'react'
import echarts from 'echarts/lib/echarts' //必须
import 'echarts/lib/component/tooltip'
import 'echarts/lib/component/legend'
import 'echarts/lib/component/geo'
import 'echarts/lib/chart/map' //引入地图
import 'echarts/lib/chart/lines'
import 'echarts/lib/chart/bar'
import 'echarts/map/js/world' // 引入中国地图
import 'echarts/map/js/china' // 引入中国地图

// import {setword} from  './mapworld';

//const a = [];
export default class MapReact extends React.Component {
   
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
    this.state.myChart.resize({width:window.innerWidth,height:window.innerHeight})
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