/**
 * Created by yongyuehuang on 2017/8/5.
 */
import $ from 'jquery'
import echarts from 'echarts/lib/echarts' 

//饼图数据
export const piePhaseOption = {
    title:{
        text:'Core Defect by Phase',
        left:10,
        top:6,
        textStyle:{
            color:'#fff',
            fontFamily:'serif'
        }
    },
    legend:{
        show:false,
        // orient: 'vertical',
        // x : 'top',
        textStyle: {
            color: '#fff'
        }
      },
    
    tooltip : {
        trigger: 'item',
        formatter: "{b} : {c} ({d}%)"
    },
    color:['#7ad0e8','#b2dd1c','#eb5141','#f3c21c','#2caf9b'],
    visualMap: {
        show: false,
        min: 80,
        max: 600,
        inRange: {
            colorLightness: [0, 1]
        }
    },
    series : [
        {
            name:'访问来源',
            type:'pie',
            radius: ['40%', '65%'],
            center: ['50%', '60%'],
            data:[],
            //roseType: 'radius',
            label: {
                normal: {
                    formatter: '{b}\n{d}%',
                    textStyle: {
                        color: '#fff'
                    }
                }
            },
            labelLine: {
                normal: {
                    lineStyle: {
                        color: '#fff'
                    },
                    smooth: 0.2,
                    length: 2,
                    length2:5,
                }
            },
            itemStyle: {
                normal: {
                    shadowBlur: 200,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            },

            animationType: 'scale',
            animationEasing: 'elasticOut',
            animationDelay: function (idx) {
                return Math.random() * 200;
            }
        }
    ]
};
export const pieActionOption = {
    title:{
        text:'Action Breakdown',
        left:1,
        top:0,
        textStyle:{
            fontSize:13,
            color:'#fff',
            fontFamily:'serif'
        }
    },
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    color:['#7ad0e8','#b2dd1c','#eb5141','#f3c21c','#2caf9b'],
    legend: {
        orient: 'vertical',
        left: 'left',
        data: []
    },
    series : [
        {
            name: '',
            type: 'pie',
            radius : '70%',
            center: ['50%', '63%'],
            data:[],
            labelLine: {
                normal: {
                    lineStyle: {
                        color: '#fff'
                    },
                    smooth: 0.2,
                    length: 2,
                    length2:5,
                }
            },
            itemStyle: {
                emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }
    ]
};


//垂直柱状图数据
export const verticalbarOption1={
   color: ['#3398DB'],
    tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '7%',
        top:'5%',
        containLabel: true
    },
    xAxis : [
        {     
            type : 'category',
            data : '',
            axisTick: {
                alignWithLabel: true
            },
            axisLabel:{
                textStyle:{
                    color: '#fff'
                },
            },
            axisLine:{
              lineStyle:{
                  color: '#fff'
              }
            },
        }
    ],
    yAxis : [
        {
            type : 'value',
            name:'Action Breakdown -- UEFI',
            axisLabel:{
                textStyle:{
                    color: '#fff'
                }
            },
            axisLine:{
                lineStyle:{
                    color: '#fff'
                }
            },
        }
    ],
    series : [
        {
            type:'bar',
            barWidth: '60%',
            label: {
                normal: {
                    show: true,
                    position: 'inside',
                    color:'#fff'
                }
            },
            data:''
        }
    ]
}
export const verticalbarOption2={
   color: ['#3398DB'],
    tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        top:'5%',
        containLabel: true
    },
    xAxis : [
        {
            type : 'category',
            data : '',
            axisTick: {
                alignWithLabel: true
            },
            axisLabel:{
                textStyle:{
                    color: '#fff'
                },
            },
            axisLine:{
              lineStyle:{
                  color: '#fff'
              }
            },
        }
    ],
    yAxis : [
        {
            type : 'value',
            axisLabel:{
                textStyle:{
                    color: '#fff'
                }
            },
            axisLine:{
                lineStyle:{
                    color: '#fff'
                }
            },
        }
    ],
    series : [
        {
            type:'bar',
            barWidth: '60%',
            label: {
                normal: {
                    show: true,
                    position: 'top',
                    color:'#fff'
                }
            },
            data:''
        }
    ]
}
//水平柱状图数据
export const barSummaryOption = {
  color:['#1ff0c8'],  
  title:{
        text:'Defect Summary',
        left:10,
        top:6,
        textStyle:{
            color:'#fff',
            fontFamily:'serif'
        }
    },
  tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    legend: {
        show:true,
        data: ['UEFI Core','UEFI Total','18A Total']
    },
    grid: {
        left: '6%',
        right: '1%',
        bottom: '3%',
        top:'20%',
        containLabel: true
    },
    xAxis: {
        show:false,
        type: 'value',
        axisLabel:{
            textStyle:{
                color: '#fff'
            },
            formatter: '{value}'
        },
        splitLine:{show:false},
        axisLine:{
            lineStyle:{
                color: '#fff'
            }
        },
    },
    yAxis: {
        type: 'category',
        axisLabel:{
            textStyle:{
                color: '#fff'
            }
        },
        splitLine:{show:false},
        axisLine:{
            show:false,
            lineStyle:{
                color: '#fff'
            }
        },
        axisTick:{show:false},
        data:[]
    },
    series: [
          {
            type:'bar',
            label: {
                normal: {
                    show: true,
                    position: 'inside',
                    color:'#fff'
                }
            },
            data:[]
          }
    ]
};
export const horizontalbarOption2 = {
  color:['#1890ff'],  
  tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    legend: {
        show:true,
        data: ['UEFI Core','UEFI Total','18A Total']
    },
    grid: {
        left: '3%',
        right: '5%',
        bottom: '3%',
        top:'2%',
        containLabel: true
    },
    xAxis: {
        type: 'value',
        axisTick:{
            show:false,
        },
        splitLine:{
            show:false,
        },
        axisLabel:{
            show:false,
            textStyle:{
                color: '#fff'
            },
            formatter: '{value}'
        },
        axisLine:{
            show:false,
            lineStyle:{
                color: '#fff'
            }
        },
    },
    yAxis: {
        type: 'category',
        axisTick:{
            show:false,
        },
        axisLabel:{
            textStyle:{
                color: '#fff'
            }
        },
        axisLine:{
            show:false,
            lineStyle:{
                color: '#fff'
            }
        },
        data:[]
    },
    series: [
          {
            type:'bar',
            label: {
                normal: {
                    show: true,
                    position: 'right',
                    color:'#fff'
                }
            },
            data:[]
          }
    ]
};


//折线图数据
export const lineOption = {
  color:['#69c0ff'],
  title: {
    text: 'Transfer Out -- UEFI',
    textStyle:{
        color:'#fff'
    }
  },
  tooltip : {
    trigger: 'axis',
    axisPointer: {
      type: 'cross',
      label: {
        backgroundColor: '#6a7985'
      }
    }
  },
  legend: {
    data:['']
  },
  toolbox: {
    feature: {
      saveAsImage: {}
    }
  },
  grid: {
    left: '6%',
    right: '4%',
    bottom: '3%',
    top:'20%',
    containLabel: true
  },
  xAxis : [
    {
      type : 'category',
      axisLabel:{
            textStyle:{
                color: '#fff'
            }
        },
        axisLine:{
            show:false,
            lineStyle:{
                color: '#fff'
            }
        },
      data : ['LXCA','XCC Platform','UEFI','Tools']
    }
  ],
  yAxis : [
    {
      type : 'value',
      axisLabel:{
            textStyle:{
                color: '#fff'
            }
        },
        axisLine:{
            show:false,
            lineStyle:{
                color: '#fff'
            }
        },
    }
  ],
  series : [
    {
      name:'',
      type:'line',
      stack: '总量',
      label: {
                normal: {
                  show:true,
                  color:'#fff',
                  position: 'top',
                }
            },
      areaStyle: {normal: {}},
      data:[120, 132, 101, 134]
    },
    
  ]
};

//散点图数据
export const scatterOption = {
  tooltip : {
    trigger: 'axis',
      showDelay : 0,
      axisPointer:{
      show: true,
        type : 'cross',
        lineStyle: {
        type : 'dashed',
          width : 1
      }
    },
    zlevel: 1
  },
  legend: {
    data:['sin','cos']
  },
  toolbox: {
    show : true,
      feature : {
      mark : {show: true},
      dataZoom : {show: true},
      dataView : {show: true, readOnly: false},
      restore : {show: true},
      saveAsImage : {show: true}
    }
  },
  xAxis : [
    {
      type : 'value',
      scale:true
    }
  ],
    yAxis : [
    {
      type : 'value',
      scale:true
    }
  ],
    series : [
    {
      name:'sin',
      type:'scatter',
      large: true,
      symbolSize: 3,
      data: (function () {
        var d = [];
        var len = 10000;
        var x = 0;
        while (len--) {
          x = (Math.random() * 10).toFixed(3) - 0;
          d.push([
            x,
            //Math.random() * 10
            (Math.sin(x) - x * (len % 2 ? 0.1 : -0.1) * Math.random()).toFixed(3) - 0
          ]);
        }
        //console.log(d)
        return d;
      })()
    },
    {
      name:'cos',
      type:'scatter',
      large: true,
      symbolSize: 2,
      data: (function () {
        var d = [];
        var len = 20000;
        var x = 0;
        while (len--) {
          x = (Math.random() * 10).toFixed(3) - 0;
          d.push([
            x,
            //Math.random() * 10
            (Math.cos(x) - x * (len % 2 ? 0.1 : -0.1) * Math.random()).toFixed(3) - 0
          ]);
        }
        //console.log(d)
        return d;
      })()
    }
  ]
};






//total 图
export const stacklineOption={
    title:{
        text:'Defect Summary Trend',
        left:10,
        top:6,
        textStyle:{
            color:'#fff',
            fontFamily:'serif'
        }
    },
    tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    legend: {
        top:10,
        textStyle:{
                color:'#fff'
            },
        data:['Total','Firmware Total','Core FW Total']
    },
    grid: {
        left: '3%',
        right:'1%',
        top:'20%',
        bottom:'3%',
        containLabel: true
    },
    xAxis :
        {     
            type : 'category',
            data : '',
            // axisTick: {
            //     alignWithLabel: true
            // },
            axisLabel:{
                
                textStyle:{
                    color: '#fff'
                },
            },
            axisLine:{
              lineStyle:{
                  color: '#fff'
              }
            },
        },
    yAxis : [
        {
            type : 'value',
            axisLabel:{
                textStyle:{
                    color: '#fff'
                }
            },
            splitLine:{show:false},
            axisLine:{
                lineStyle:{
                    color: '#fff'
                }
            },
        }
    ],
    series : [
        {
            name:'',
            type:'line',
            label: {
                normal: {
                  show:true,
                  color:'#fff',
                  position: 'top',
                }
            },
            itemStyle: {
                normal: {
                    color: 'rgb(222, 60, 108)'
                }
            },
            areaStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: 'rgb(39, 42, 195)'
                    }, {
                        offset: 1,
                        color: 'rgb(222, 60, 108)'
                    }])
                }
            },
            data:[]
        },
        {
            name:'',
            type:'line',
            itemStyle: {
                normal: {
                    color: 'rgb(55, 195, 39)'
                }
            },
            areaStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: 'rgb(195, 184, 39)'
                    }, {
                        offset: 1,
                        color: 'rgb(55, 195, 39)'
                    }])
                }
            },
            label: {
                normal: {
                  show:true,
                  color:'#fff',
                  position: 'top',
                }
            },
            data:[]
        },
        {
            name:'',
            type:'line',
            itemStyle: {
                normal: {
                    color: 'rgb(255, 70, 131)'
                }
            },
            areaStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: 'rgb(255, 158, 68)'
                    }, {
                        offset: 1,
                        color: 'rgb(255, 70, 131)'
                    }])
                }
            },
            label: {
                normal: {
                  show:true,
                  color:'#fff',
                  position: 'top',
                }
            },
            data:[]
        },
    ]
}




//defect phase图

export const much_stackOption={
    color:['#7ad0e8','#b2dd1c','#eb5141','#f3c21c','#2caf9b'],
    title:{
        text:'Transfer Out Trend',
        left:10,
        top:6,
        textStyle:{
            color:'#fff',
            fontFamily:'serif'
        }
    },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        top:25,
        right:50,
        textStyle:{
                color:'#fff'
            },
        data:['Bad Fix','LimCAN','Transfer Out']
    },
    grid: {
        left: '3%',
        top:'20%',
        bottom:'3%',
        containLabel: true
    },
    toolbox: {
        feature: {
            saveAsImage: {}
        }
    },
    xAxis: {
        type: 'category',
        boundaryGap: true,
        splitLine:{
		    show:false
        },
        axisLabel:{
          
          textStyle:{
             color:'#fff',
             
          }
        },
        axisLine:{
          lineStyle:{
             color:'#fff'
          }
        },
        data: []
    },
    yAxis: {
        type: 'value',
        axisLabel:{
          textStyle:{
             color:'#fff'
          }
        },
        splitLine:{
		    show:false
        },
        axisLine:{
          lineStyle:{
             color:'#fff'
          }
        },
    },
    series: [
        
        {
            name:'',
            type:'bar',
            stack: '总量',
            label: {
                normal: {
                  show:true,
                  color:'#fff',
                  position: 'inside',
                }
            },
            data:''
        },
        {
            name:'',
            type:'bar',
            stack: '总量',
            label: {
                normal: {
                  show:true,
                  color:'#fff',
                  position: 'inside',
                }
            },
            data:''
        },
        {
            name:'',
            type:'bar',
            stack: '总量',
            label: {
                normal: {
                  show:true,
                  color:'#fff',
                  position: 'inside',
                }
            },
            data:''
        },
    
    ]
}

//defect_code 图

export const stackOption = {
  color:['#de3c6c','#6739be','#f3c21c','#2caf9b'],  
  title:{
        text:'Code Fixes and Non-Code Issue Trend',
        left:10,
        top:6,
        textStyle:{
            color:'#fff',
            fontFamily:'serif'
        }
    },
  tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    legend: {
        top:25,
        left:0,
        textStyle:{
                color:'#fff'
            },
        data: ''
    },
    grid: {
        left: '3%',
        top:'20%',
        bottom:'3%',
        containLabel: true
    },
    yAxis: [{
        type: 'value',
        max:100,
        min:0,
        // name:'单位(%)',
        // nameGap:7,
        axisLabel:{
            textStyle:{
                color: '#fff'
            },
            formatter: '{value}%'
        },
        splitLine:{show:false},
        axisLine:{
            lineStyle:{
                color: '#fff'
            }
        },
    },
    {
        type: 'value',
        axisLabel:{
            textStyle:{
                color: '#fff'
            },
            formatter: '{value}'
        },
        splitLine:{show:false},
        axisLine:{
            lineStyle:{
                color: '#fff'
            }
        },
    }
],
    xAxis: {
        type: 'category',
        axisLabel:{
            textStyle:{
                color: '#fff'
            }
        },
        splitLine:{show:false},
        boundaryGap:true,
        axisLine:{
            lineStyle:{
                color: '#fff'
            }
        },
        data:[]
    },
    series: [
          {
            name:'',
            type:'bar',
            stack: '总量',
            label: {
                normal: {
                  show:false,
                  position: 'inside',
                }
            },
            data:[]
        },
        {
            name:'',
            type:'bar',
            stack: '总量',
            label: {
                normal: {
                  show:false,
                  position: 'inside',
                }
            },
            data:[]
        },
        {
            name:'',
            type:'line',
            yAxisIndex:1,
            label: {
                normal: {
                  show:true,
                  position: 'top',
                }
            },
            data:[]
        },
        {
            name:'',
            type:'line',
            yAxisIndex:1,
            label: {
                normal: {
                  show:true,
                  position: 'top',
                }
            },
            data:[]
        },
    ]
};

//others 图

export const muchlineOption={
    color:['#7ad0e8','#b2dd1c','#eb5141','#f3c21c','#2caf9b'],
    title:{
        text:'Core Defect Trend by Phase',
        left:10,
        top:6,
        textStyle:{
            color:'#fff',
            fontFamily:'serif'
        }
    },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        top:10,
        textStyle:{
                color:'#fff'
            },
        data:['BBFV','SDV','SIT','SVT','Other Team']
    },
    grid: {
        left: '3%',
        right:'1%',
        top:'20%',
        bottom:'3%',
        containLabel: true
    },
    toolbox: {
        feature: {
            saveAsImage: {}
        }
    },
    xAxis: {
        type: 'category',
        boundaryGap: true,
        splitLine:{
		    show:false
        },
        axisLabel:{
          
          textStyle:{
             color:'#fff',
             
          }
        },
        axisLine:{
          lineStyle:{
             color:'#fff'
          }
        },
        data: []
    },
    yAxis: {
        type: 'value',
        axisLabel:{
          textStyle:{
             color:'#fff'
          }
        },
        splitLine:{show:false},
        axisLine:{
          lineStyle:{
             color:'#fff'
          }
        },
    },
    series: [
        
        {
            name:'',
            type:'line',
            label: {
                normal: {
                  show:true,
                  color:'#fff',
                  position: 'top',
                }
            },
            data:[]
        },
        {
            name:'',
            type:'line',
            label: {
                normal: {
                  show:true,
                  color:'#fff',
                  position: 'top',
                }
            },
            data:[]
        },
        {
            name:'',
            type:'line',
            label: {
                normal: {
                  show:true,
                  color:'#fff',
                  position: 'top',
                }
            },
            data:[]
        },
        {
            name:'',
            type:'line',
            label: {
                normal: {
                  show:true,
                  color:'#fff',
                  position: 'top',
                }
            },
            data:[]
        },
        {
            name:'',
            type:'line',
            label: {
                normal: {
                  show:true,
                  color:'#fff',
                  position: 'top',
                }
            },
            data:[]
        },
    
    ]
}



var scaleData = [{
        'name': 'WAD',
        'value': 10
    },
    {
        'name': 'Dup',
        'value': 20
    },
    {
        'name': 'NR',
        'value': 20
    },
    {
        'name': 'Doc',
        'value': 27
    },
    {
        'name': 'Uprep',
        'value': 13
    },
    {
        'name': 'Others',
        'value': 10
    }
  
];
var rich = {
    white: {
        color: '#ddd',
        align: 'center',
        padding: [3, 0]
    }
};
var data = [];
var color=['#00ffff','#00cfff','#006ced','#ffe000','#ffa800','#ff5b00','#ff3000']
for (var i = 0; i < scaleData.length; i++) {
    data.push({
        value: scaleData[i].value,
        name: scaleData[i].name,
        itemStyle: {
            normal: {
                borderWidth: 3,
                shadowBlur: 15,
                borderColor:color[i],
                shadowColor: color[i]
            }
        }
    }, {
        value: 2,
        name: '',
        itemStyle: {
            normal: {
                label: {
                    show: false
                },
                labelLine: {
                    show: false
                },
                color: 'rgba(0, 0, 0, 0)',
                borderColor: 'rgba(0, 0, 0, 0)',
                borderWidth: 0
            }
        }
    });
}
export const actionOption = {
    tooltip: {
        show: false
    },
    legend: {
        show: false
    },
    toolbox: {
        show: false
    },
    series: [{
    name: '',
    type: 'pie',
    clockWise: false,
    radius:['55%', '60%'],
    center: ['50%', '50%'],
    hoverAnimation: false,
    itemStyle: {
        normal: {
            label: {
                show: true,
                position: 'outside',
                color: '#ddd',
                formatter: function(params) {
                    var percent = 0;
                    var total = 0;
                    for (var i = 0; i < scaleData.length; i++) {
                        total += scaleData[i].value;
                    }
                    percent = ((params.value / total) * 100).toFixed(0);
                    if(params.name !== '') {
                        return params.name + '\n{white|' + ':' + percent + '%}';
                    }else {
                        return '';
                    }
                },
                rich: {
                    white: {
                        color: '#ddd',
                        align: 'center',
                        padding: [3, 0]
                    }
                },
            },
            labelLine: {
                length:3,
                length2:10,
                show: true,
                color:'#00ffff'
            }
        }
    },
    data: data
}]
}

export const funnelOption={
     title: {
        text: '漏斗分析图',
        subtext: '网站用户行为统计－纯属虚构',
        x:'center',
        textStyle: {
            color: '#fff'
        }
      
    },
    color: ['#efbb1a', '#d77169', '#c14f60', '#953f61', '#72355f', ],
  
    series : [
        {
            name:'漏斗图',
            type:'funnel',
            x: '3%',
            y: 60,
            //x2: 80,
            y2: 60,
            width: '94%',
            // height: {totalHeight} - y - y2,
            min: 0,
            max: 100,
            minSize: '0%',
            maxSize: '100%',
            sort : 'descending', // 'ascending', 'descending'
            gap :0,
            sort : 'ascending',
            data:[
                {value:43, name:'UEFI Platform'},
                {value:25, name:'XCC'},
                {value:10, name:'Storage Controllers'},
                {value:4, name:'Internal Storage'},
                {value:4, name:'IO'},
                {value:4, name:'Server HW'},
                {value:3, name:'GPU'},
                {value:2, name:'LXCA'},
                {value:2, name:'OS'},
                {value:2, name:'TDM'},
                {value:1, name:'Tools'}
               
            ].sort(function (a, b) { return a.value - b.value}),
            roseType: true,
            label: {
                normal: {
                    formatter: function (params) {
                        return params.name + ' ' + params.value + '%';
                    },
                    position: 'center'
                }
            },
            itemStyle: {
                normal: {
                    borderWidth: 0,
                    shadowBlur: 30,
                    shadowOffsetX: 0,
                    shadowOffsetY: 10,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
            
        }
        
    ]
};

export const shuiqiuOption = {
    title:{
        text:'Non-Code Issue',
        left:1,
        top:1,
        textStyle:{
            fontSize:13,
            color:'#fff',
            fontFamily:'serif'
        }
    },
    series: [{
        type: 'liquidFill',
        data: [0], 
        radius: '70%',
        center: ['50%', '60%'],
        label:{
            position: ['50%', '60%'],
            fontSize:12
        }
    }]
};


export const LiquidfillOption = {
    title:{
        text:'Transfer Out Total Rate',
        left:1,
        top:1,
        textStyle:{
            fontSize:13,
            color:'#fff',
            fontFamily:'serif'
        }
    },
    series: [{
        type: 'liquidFill',
        data: [0], 
        radius: '70%',
        center: ['50%', '60%'],
        label:{
            position: ['50%', '60%'],
            fontSize:12
        }
    }]
};


export const transferoutOption={
    title:{
        text:'Transfer Out',
        left:1,
        top:0,
        textStyle:{
            fontSize:13,
            color:'#fff',
            fontFamily:'serif'
        }
    },
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    color:['#7ad0e8','#b2dd1c','#eb5141','#f3c21c','#2caf9b'],
    legend: {
        orient: 'vertical',
        left: 'left',
        data: []
    },
    series : [
        {
            name: '',
            type: 'pie',
            radius : '70%',
            center: ['50%', '63%'],
            data:[],
            labelLine: {
                normal: {
                    lineStyle: {
                        color: '#fff'
                    },
                    smooth: 0.2,
                    length: 2,
                    length2:5,
                }
            },
            itemStyle: {
                emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }
    ]
}





 





 export const billOption = {
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    color: ['#efbb1a', '#d77169', '#c14f60', '#953f61', '#72355f', ],
    toolbox: {
        show : true,
        feature : {
            mark : {show: true},
            dataView : {show: true, readOnly: false},
            magicType : {
                show: true, 
                type: ['pie', 'funnel']
            },
            restore : {show: true},
            saveAsImage : {show: true}
        }
    },
    calculable : true,
    series : [
      
        {
            name:'面积模式',
            type:'pie',
            radius : ['40%', '90%'],
            center : ['50%', '50%'],
            roseType : 'area',
            x: '50%',               // for funnel
            max: 20,  
           // for funnel
            sort : 'ascending',     // for funnel
            itemStyle: {
                normal: {
                    label: {
                        show: true,
                        position: 'outside',
                        color: '#ddd',
                    },
                    labelLine: {
                        length:3,
                        show: true,
                        color:'#00ffff'
                    }
                }
            },
            data:[
                {value:10, name:'UP'},
                {value:5, name:'XCC'},
                {value:15, name:'SC'},
                {value:25, name:'IS'},
                {value:20, name:'IO'},
                {value:35, name:'SH'},
                {value:30, name:'GPU'},
                {value:40, name:'LXCA'},
                {value:35, name:'OS'},
                {value:30, name:'TDM'},
                {value:40, name:'Tools'}
            ]
        }
    ]
};