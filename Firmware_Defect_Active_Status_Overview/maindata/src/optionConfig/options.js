/**
 * Created by yongyuehuang on 2017/8/5.
 */
//堆叠图
import $ from 'jquery'
export const stackbarOption={
    tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    color:['#02157d','#d87419','#d63c55','#a756e9','#7aab42'],
    grid: {
        right:'5%',
        width: '24%',
        height:'15%',
        top: '12%',
        containLabel: true,
      },
    xAxis:  {
        type: 'value',
        splitLine:{
		    show:false
	    },
        axisLabel:{
            textStyle:{
                color: '#fff'
            },
            formatter:function(value){
                if(parseInt(value)!=value){
                    value=''
                }
                    return value;
            }
          },
          axisLine:{
            lineStyle:{
                color: '#fff'
            }
          },
    },
    yAxis: {
        type: 'category',
        gridIndex: 0,
        axisLabel:{
            textStyle:{
                color: '#fff',
                fontSize:'14'
            },
          },
          axisLine:{
            lineStyle:{
                color: '#fff'
            }
          },
        data: ''
    },
    series: []
}


//世界地图数据


var geoCoordMap = {
    'Shanghai': [121.4648, 31.2891],
    'Morrisville': [-87.801833, 41.870975],
    'Beijing': [116.4551,40.2539],
    'Taipei': [121.509062, 25.044332],
};
var BJData = [
    [{
        name: 'Shanghai',
        value: 9100
    }],
    [{
        name: 'Morrisville',
        value: 2370
    }],
    [{
        name: 'Beijing',
        value: 3130
    }],
    [{
        name: 'Taipei',
        value: 3130
    }],
    
];

var series = [];
[
    ['Shanghai', BJData],
].forEach(function(item, i) {
    series.push(
        {
            type: 'effectScatter',
            coordinateSystem: 'geo',
            zlevel: 2,
            rippleEffect: { //涟漪特效
                period: 4, //动画时间，值越小速度越快
                brushType: 'stroke', //波纹绘制方式 stroke, fill
                scale: 4 //波纹圆环最大限制，值越大波纹越大
            },
            label: {
                normal: {
                    show: true,
                    textStyle:{
                        fontSize:'18'
                    },
                    position: 'right', //显示位置
                    offset: [5, 0], //偏移设置
                    formatter: '{b}' //圆环显示文字
                },
                emphasis: {
                    show: true
                }
            },
            symbol: 'circle',
            symbolSize: function(val) {
                return 10 + val[0] / 1000; //圆环大小
            },
            itemStyle: {
                normal: {
                    show: true,
                    color: '#f00'
                }
            },
            data: item[1].map(function(dataItem) {
                return {
                    name: dataItem[0].name,
                    value: geoCoordMap[dataItem[0].name].concat([dataItem[0].value])
                };
            }),
        },

    
        
            
            
        //one
        // {
        //     name: 'Open',
        //     type: 'bar',
        //     barWidth : 25,
        //     stack: '总量',
        //     label: {
        //         normal: {
        //             show: true,
        //             textStyle:{
        //                     fontSize:'18'
        //             },
        //             position: 'inside',
        //             formatter: function(params) {
                        
        //                 if (params.value > 0) {
        //                     return params.value;
        //                 } else {
        //                     return '';
        //                 }
        //             },
        //         },
                

        //     },
        //     data: ''
        // },
        // {
        //     name: 'Working',
        //     type: 'bar',
        //     barWidth : 25,
        //     stack: '总量',
        //     label: {
        //         normal: {
        //             show: true,
        //             textStyle:{
        //                     fontSize:'18'
        //             },
        //             position: 'inside',
        //             formatter: function(params) {
                        
        //                 if (params.value > 0) {
        //                     return params.value;
        //                 } else {
        //                     return '';
        //                 }
        //             },
        //         },
        //     },
        //     data:''
        // },
        // {
        //     name: 'Rejected',
        //     type: 'bar',
        //     barWidth : 25,
        //     stack: '总量',
        //     label: {
        //         normal: {
        //             show: true,
        //             textStyle:{
        //                     fontSize:'18'
        //             },
        //             position: 'inside',
        //             formatter: function(params) {
                        
        //                 if (params.value > 0) {
        //                     return params.value;
        //                 } else {
        //                     return '';
        //                 }
        //             },
        //         },
                
        //     },
        //     data: ''
        // },
        // {
        //     name: 'Fixed',
        //     type: 'bar',
        //     barWidth : 25,
        //     stack: '总量',
        //     label: {
        //         normal: {
        //             show: true,
        //             textStyle:{
        //                     fontSize:'18'
        //             },
        //             position: 'inside',
        //             formatter: function(params) {
                    
        //             if (params.value > 0) {
        //                 return params.value;
        //             } else {
        //                 return '';
        //             }
        //         },
        //         },
        //     },
        //     data:''
        // },
        // {
        //     name: 'Verify',
        //     type: 'bar',
        //     barWidth : 25,
        //     stack: '总量',
        //     label: {
        //         normal: {
        //             show: true,
        //             textStyle:{
        //                     fontSize:'18'
        //             },
        //             position: 'inside',
        //             formatter: function(params) {
                    
        //             if (params.value > 0) {
        //                 return params.value;
        //             } else {
        //                 return '';
        //             }
        //         },
        //         },
        //     },
        //     data: ''
        // },
            //two

    );
});

 
export const mapOption = {
    color:['#489eea','#7aab42','#d63c55','#a756e9'],
    backgroundColor: '#1f1d1d',
    textStyle: {
        color: '#fff'
    },
    title: [
        {
            text: "Firmware Defect Status Overview",
            x: "center",
            y: '2%',                    
            textStyle: {
                color: '#fff',
                fontSize: 50
            },
        },
    ],
    legend: {
            //color:['#489eea','#d63c55','#7aab42','#a756e9'],
            right:'2%',
            bottom:'1%',
            //type: 'scroll',
            // width:30,
            // height:20,
            textStyle:{
                fontSize:15,
                color:'#fff'
            },
            data: '',
        },
    grid:[
    {
        right:'5%',
        width: '20%',
        height:'15%',
        top: '12%',
        containLabel: true,
      },
    {
        right:'20%',
        width: '20%',
        height:'15%',
        top: '29%',
        containLabel: true,
    },
      {
        right:'1%',
        width: '20%',
        height:'15%',
        top: '47%',
        containLabel: true,
    },
    {
        left:'5%',
        width: '20%',
        height:'15%',
        top: '29%',
        containLabel: true,
    },
    {
        top:'71%',
        //left: '66%',
        width:'33%',
        height:'24%',
        right: '34%',
        bottom: '3%',
        containLabel: true
    },
    {
        top:'71%',
        //left: '66%',
        width:'33%',
        height:'24%',
        right: '1%',
        bottom: '3%',
        containLabel: true
    },
],

    // tooltip: {
    //     trigger: 'item',
    //     backgroundColor: 'rgba(12, 204, 104, 0.92)',
    //     borderColor: '#FFFFCC',
    //     showDelay: 0,
    //     hideDelay: 0,
    //     enterable: true,
    //     show:true,
    //     transitionDuration: 0,
    //     extraCssText: 'z-index:100',
    //     formatter: function(params, ticket, callback) {
    //         //根据业务自己拓展要显示的内容
    //         var res = "";
    //         var name = params.name;
    //         var value = params.value[params.seriesIndex + 1];
    //         res = "<span style='color:#fff;'>" + name + "</span><br/>数据：" + value;
    //         return res;
    //     }
    // },
    
    xAxis:  [
        {
        type: 'value',
        gridIndex: 0,
        splitLine:{
		    show:false
        },
        show:false,
        interval: 100000,
        showMinLabel: true,
        showMaxLabel: true,
        axisLabel:{
            textStyle:{
                color: '#fff'
            },
            formatter:function(value){
                if(parseInt(value)!=value){
                    value=''
                }
                    return value;
            }
          },
          axisLine:{
            lineStyle:{
                color: '#fff'
            }
          },
    },
        {
        type: 'value',
        gridIndex: 1,
        show:false,
        splitLine:{
		    show:false
        },
        interval: 100000,
        showMinLabel: true,
        showMaxLabel: true,
        axisLabel:{
            textStyle:{
                color: '#fff'
            },
            formatter:function(value){
                if(parseInt(value)!=value){
                    value=''
                }
                    return value;
            }
          },
          axisLine:{
            lineStyle:{
                color: '#fff'
            }
          },
    },{
        type: 'value',
        gridIndex: 2,
        show:false,
        splitLine:{
		    show:false
        },
        interval: 100000,
        showMinLabel: true,
        showMaxLabel: true,
        axisLabel:{
            textStyle:{
                color: '#fff'
            },
            formatter:function(value){
                if(parseInt(value)!=value){
                    value=''
                }
                    return value;
            }
          },
          axisLine:{
            lineStyle:{
                color: '#fff'
            }
          },
    },{
        type: 'value',
        gridIndex: 3,
        show:false,
        splitLine:{
		    show:false
        },
        interval: 100000,
        showMinLabel: true,
        showMaxLabel: true,
        axisLabel:{
            textStyle:{
                color: '#fff'
            },
            formatter:function(value){
                if(parseInt(value)!=value){
                    value=''
                }
                    return value;
            }
          },
          axisLine:{
            lineStyle:{
                color: '#fff'
            }
          },
    },{
        type: 'value',
        gridIndex: 4,
        interval: 100000,
        showMinLabel: true,
        showMaxLabel: true,
        splitLine:{
		    show:false
	    },
        axisLabel:{
            textStyle:{
                color: '#fff'
            },
            formatter:function(value){
                if(parseInt(value)!=value){
                    value=''
                }
                    return value;
            }
          },
          axisLine:{
            lineStyle:{
                color: '#fff'
            }
          },
    },
    {
        type: 'value',
        gridIndex: 5,
        splitLine:{
		    show:false
        },
        interval: 100000,
        showMinLabel: true,
        showMaxLabel: true,
        axisLabel:{
            textStyle:{
                color: '#fff'
            },
            formatter:function(value){
                if(parseInt(value)!=value){
                    value=''
                }
                    return value;
            }
          },
          axisLine:{
            lineStyle:{
                color: '#fff'
            }
          },
    },
    
    ],
    yAxis: [
    {
        type: 'category',
        // name:'Beijing',
        // nameTextStyle : {
        //     color: "#fff",
        //     fontSize : '16'
        // },
        gridIndex: 0,
        axisLabel:{
            textStyle:{
                color: '#fff',
                fontSize:'16'
            },
          },
          axisLine:{
            show:false,
            lineStyle:{
                color: '#fff'
            }
          },
        axisTick:{show:false},
        data: ''
    },{
        type: 'category',
        // name:'Shanghai',
        // nameTextStyle : {
        //     color: "#fff",
        //     fontSize : '16'
        // },
        gridIndex: 1,
        axisTick:{show:false},
        axisLabel:{
            textStyle:{
                color: '#fff',
                fontSize:'16'
            },
          },
          axisLine:{
            show:false,
            lineStyle:{
                color: '#fff'
            }
          },
        data: []
    },{
        type: 'category',
        // name:'Taipei',
        // nameTextStyle : {
        //     color: "#fff",
        //     fontSize : '16'
        // },
        gridIndex: 2,
        axisTick:{show:false},
        axisLabel:{
            textStyle:{
                color: '#fff',
                fontSize:'16'
            },
          },
          axisLine:{
            show:false,
            lineStyle:{
                color: '#fff'
            }
          },
        data:''
    },{
        type: 'category',
        // name:'Morrisville',
        // nameTextStyle : {
        //     color: "#fff",
        //     fontSize : '16'
        // },
        gridIndex: 3,
        axisTick:{show:false},
        axisLabel:{
            textStyle:{
                color: '#fff',
                fontSize:'16'
            },
          },
          axisLine:{
            show:false,
            lineStyle:{
                color: '#fff'
            }
          },
        data: ''
    },
    {
        type: 'category',
        name:'Project Defect - XCC',
        nameTextStyle : {
            color: "#fff",
            fontSize : '18',
        },
        gridIndex: 4,
        axisLabel:{
          textStyle:{
              color: '#fff',
              fontSize:'16'
          },
        },
        axisLine:{
          lineStyle:{
              color: '#fff'
          }
        },
        data: ''
    },
    {
        type:"category",  
        name:'Project Defect - UEFI',
        nameTextStyle : {
            color: "#fff",
            fontSize : '18',
        },
        gridIndex: 5,
        axisLabel:{
          textStyle:{
              color: '#fff',
              fontSize:'16'
          },
        },
        axisLine:{
          lineStyle:{
              color: '#fff'
          }
        },
        data:["A2 MLK","A2","18D Block","Meholw","Purley MLK"]
    }
],
    geo: [
        {
            map: 'world',
            label: {
                emphasis: {
                    show: true
                }
            },
            roam: false, //是否允许缩放
            left:"1%",
            right:"1%",                                 //组件离容器左侧的距离,百分比字符串或整型数字
            top:'1%',                                     //组件离容器上侧的距离，百分比字符串或整型数字,                               //组件离容器右侧的距离,百分比字符串或整型数字
            bottom:"1%", 
            //layoutCenter: ['50%', '50%'], //地图位置
            layoutSize: "130%",
            itemStyle: {
                normal: {
                    borderColor: 'rgba(100, 153, 200,1)',
                    borderWidth: 1,
                    areaColor: {
                        type: 'radial',
                        x: 0.5,
                        y: 0.5,
                        r: 0.8,
                        colorStops: [{
                            offset: 0, 
                            color: 'rgba(100, 153, 200, 0)' // 0% 处的颜色
                        }, {
                            offset: 1, 
                            color: 'rgba(100, 153, 200, .2)' // 100% 处的颜色
                        }],
                        globalCoord: false // 缺省为 false
                    },
                    //shadowColor: 'rgba(6, 132, 235,1)',
                    //shadowColor: 'rgba(12, 27, 46,1)',
                    shadowOffsetX: -2,
                    shadowOffsetY: 2,
                    shadowBlur: 10
                },
                emphasis: {
                    color: '#fff' //悬浮背景
                }
            }
        },
       
],

    series: series
};



//雷达图数据
export const radarOption = {
  legend: {
    data: ['预算分配（Allocated Budget）', '实际开销（Actual Spending）']
  },
  radar: {
    // shape: 'circle',
    indicator: [
      { name: '销售（sales）', max: 6500},
      { name: '管理（Administration）', max: 16000},
      { name: '信息技术（Information Techology）', max: 30000},
      { name: '客服（Customer Support）', max: 38000},
      { name: '研发（Development）', max: 52000},
      { name: '市场（Marketing）', max: 25000}
    ]
  },
  series: [{
    name: '预算 vs 开销（Budget vs spending）',
    type: 'radar',
    // areaStyle: {normal: {}},
    data : [
      {
        value : [4300, 10000, 28000, 35000, 50000, 19000],
        name : '预算分配（Allocated Budget）'
      },
      {
        value : [5000, 14000, 28000, 31000, 42000, 21000],
        name : '实际开销（Actual Spending）'
      }
    ]
  }]
};

//k线图数据
// 数据意义：开盘(open)，收盘(close)，最低(lowest)，最高(highest)
var data0 = splitData([
  ['2013/1/24', 2320.26,2320.26,2287.3,2362.94],
  ['2013/1/25', 2300,2291.3,2288.26,2308.38],
  ['2013/1/28', 2295.35,2346.5,2295.35,2346.92],
  ['2013/1/29', 2347.22,2358.98,2337.35,2363.8],
  ['2013/1/30', 2360.75,2382.48,2347.89,2383.76],
  ['2013/1/31', 2383.43,2385.42,2371.23,2391.82],
  ['2013/2/1', 2377.41,2419.02,2369.57,2421.15],
  ['2013/2/4', 2425.92,2428.15,2417.58,2440.38],
  ['2013/2/5', 2411,2433.13,2403.3,2437.42],
  ['2013/2/6', 2432.68,2434.48,2427.7,2441.73],
  ['2013/2/7', 2430.69,2418.53,2394.22,2433.89],
  ['2013/2/8', 2416.62,2432.4,2414.4,2443.03],
  ['2013/2/18', 2441.91,2421.56,2415.43,2444.8],
  ['2013/2/19', 2420.26,2382.91,2373.53,2427.07],
  ['2013/2/20', 2383.49,2397.18,2370.61,2397.94],
  ['2013/2/21', 2378.82,2325.95,2309.17,2378.82],
  ['2013/2/22', 2322.94,2314.16,2308.76,2330.88],
  ['2013/2/25', 2320.62,2325.82,2315.01,2338.78],
  ['2013/2/26', 2313.74,2293.34,2289.89,2340.71],
  ['2013/2/27', 2297.77,2313.22,2292.03,2324.63],
  ['2013/2/28', 2322.32,2365.59,2308.92,2366.16],
  ['2013/3/1', 2364.54,2359.51,2330.86,2369.65],
  ['2013/3/4', 2332.08,2273.4,2259.25,2333.54],
  ['2013/3/5', 2274.81,2326.31,2270.1,2328.14],
  ['2013/3/6', 2333.61,2347.18,2321.6,2351.44],
  ['2013/3/7', 2340.44,2324.29,2304.27,2352.02],
  ['2013/3/8', 2326.42,2318.61,2314.59,2333.67],
  ['2013/3/11', 2314.68,2310.59,2296.58,2320.96],
  ['2013/3/12', 2309.16,2286.6,2264.83,2333.29],
  ['2013/3/13', 2282.17,2263.97,2253.25,2286.33],
  ['2013/3/14', 2255.77,2270.28,2253.31,2276.22],
  ['2013/3/15', 2269.31,2278.4,2250,2312.08],
  ['2013/3/18', 2267.29,2240.02,2239.21,2276.05],
  ['2013/3/19', 2244.26,2257.43,2232.02,2261.31],
  ['2013/3/20', 2257.74,2317.37,2257.42,2317.86],
  ['2013/3/21', 2318.21,2324.24,2311.6,2330.81],
  ['2013/3/22', 2321.4,2328.28,2314.97,2332],
  ['2013/3/25', 2334.74,2326.72,2319.91,2344.89],
  ['2013/3/26', 2318.58,2297.67,2281.12,2319.99],
  ['2013/3/27', 2299.38,2301.26,2289,2323.48],
  ['2013/3/28', 2273.55,2236.3,2232.91,2273.55],
  ['2013/3/29', 2238.49,2236.62,2228.81,2246.87],
  ['2013/4/1', 2229.46,2234.4,2227.31,2243.95],
  ['2013/4/2', 2234.9,2227.74,2220.44,2253.42],
  ['2013/4/3', 2232.69,2225.29,2217.25,2241.34],
  ['2013/4/8', 2196.24,2211.59,2180.67,2212.59],
  ['2013/4/9', 2215.47,2225.77,2215.47,2234.73],
  ['2013/4/10', 2224.93,2226.13,2212.56,2233.04],
  ['2013/4/11', 2236.98,2219.55,2217.26,2242.48],
  ['2013/4/12', 2218.09,2206.78,2204.44,2226.26],
  ['2013/4/15', 2199.91,2181.94,2177.39,2204.99],
  ['2013/4/16', 2169.63,2194.85,2165.78,2196.43],
  ['2013/4/17', 2195.03,2193.8,2178.47,2197.51],
  ['2013/4/18', 2181.82,2197.6,2175.44,2206.03],
  ['2013/4/19', 2201.12,2244.64,2200.58,2250.11],
  ['2013/4/22', 2236.4,2242.17,2232.26,2245.12],
  ['2013/4/23', 2242.62,2184.54,2182.81,2242.62],
  ['2013/4/24', 2187.35,2218.32,2184.11,2226.12],
  ['2013/4/25', 2213.19,2199.31,2191.85,2224.63],
  ['2013/4/26', 2203.89,2177.91,2173.86,2210.58],
  ['2013/5/2', 2170.78,2174.12,2161.14,2179.65],
  ['2013/5/3', 2179.05,2205.5,2179.05,2222.81],
  ['2013/5/6', 2212.5,2231.17,2212.5,2236.07],
  ['2013/5/7', 2227.86,2235.57,2219.44,2240.26],
  ['2013/5/8', 2242.39,2246.3,2235.42,2255.21],
  ['2013/5/9', 2246.96,2232.97,2221.38,2247.86],
  ['2013/5/10', 2228.82,2246.83,2225.81,2247.67],
  ['2013/5/13', 2247.68,2241.92,2231.36,2250.85],
  ['2013/5/14', 2238.9,2217.01,2205.87,2239.93],
  ['2013/5/15', 2217.09,2224.8,2213.58,2225.19],
  ['2013/5/16', 2221.34,2251.81,2210.77,2252.87],
  ['2013/5/17', 2249.81,2282.87,2248.41,2288.09],
  ['2013/5/20', 2286.33,2299.99,2281.9,2309.39],
  ['2013/5/21', 2297.11,2305.11,2290.12,2305.3],
  ['2013/5/22', 2303.75,2302.4,2292.43,2314.18],
  ['2013/5/23', 2293.81,2275.67,2274.1,2304.95],
  ['2013/5/24', 2281.45,2288.53,2270.25,2292.59],
  ['2013/5/27', 2286.66,2293.08,2283.94,2301.7],
  ['2013/5/28', 2293.4,2321.32,2281.47,2322.1],
  ['2013/5/29', 2323.54,2324.02,2321.17,2334.33],
  ['2013/5/30', 2316.25,2317.75,2310.49,2325.72],
  ['2013/5/31', 2320.74,2300.59,2299.37,2325.53],
  ['2013/6/3', 2300.21,2299.25,2294.11,2313.43],
  ['2013/6/4', 2297.1,2272.42,2264.76,2297.1],
  ['2013/6/5', 2270.71,2270.93,2260.87,2276.86],
  ['2013/6/6', 2264.43,2242.11,2240.07,2266.69],
  ['2013/6/7', 2242.26,2210.9,2205.07,2250.63],
  ['2013/6/13', 2190.1,2148.35,2126.22,2190.1]
]);


function splitData(rawData) {
  var categoryData = [];
  var values = []
  for (var i = 0; i < rawData.length; i++) {
    categoryData.push(rawData[i].splice(0, 1)[0]);
    values.push(rawData[i])
  }
  return {
    categoryData: categoryData,
    values: values
  };
}

function calculateMA(dayCount) {
  var result = [];
  for (var i = 0, len = data0.values.length; i < len; i++) {
    if (i < dayCount) {
      result.push('-');
      continue;
    }
    var sum = 0;
    for (var j = 0; j < dayCount; j++) {
      sum += data0.values[i - j][1];
    }
    result.push(sum / dayCount);
  }
  return result;
}



export const candlestickOption = {
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'cross'
    }
  },
  legend: {
    data: ['日K', 'MA5', 'MA10', 'MA20', 'MA30']
  },
  grid: {
    left: '10%',
    right: '10%',
    bottom: '15%'
  },
  xAxis: {
    type: 'category',
    data: data0.categoryData,
    scale: true,
    boundaryGap : false,
    axisLine: {onZero: false},
    splitLine: {show: false},
    splitNumber: 20,
    min: 'dataMin',
    max: 'dataMax'
  },
  yAxis: {
    scale: true,
    splitArea: {
      show: true
    }
  },
  series: [
    {
      name: '日K',
      type: 'candlestick',
      data: data0.values,
      markPoint: {
        label: {
          normal: {
            formatter: function (param) {
              return param != null ? Math.round(param.value) : '';
            }
          }
        },
        data: [
          {
            name: 'XX标点',
            coord: ['2013/5/31', 2300],
            value: 2300,
            itemStyle: {
              normal: {color: 'rgb(41,60,85)'}
            }
          },
          {
            name: 'highest value',
            type: 'max',
            valueDim: 'highest'
          },
          {
            name: 'lowest value',
            type: 'min',
            valueDim: 'lowest'
          },
          {
            name: 'average value on close',
            type: 'average',
            valueDim: 'close'
          }
        ],
        tooltip: {
          formatter: function (param) {
            return param.name + '<br>' + (param.data.coord || '');
          }
        }
      },
      markLine: {
        symbol: ['none', 'none'],
        data: [
          [
            {
              name: 'from lowest to highest',
              type: 'min',
              valueDim: 'lowest',
              symbol: 'circle',
              symbolSize: 10,
              label: {
                normal: {show: false},
                emphasis: {show: false}
              }
            },
            {
              type: 'max',
              valueDim: 'highest',
              symbol: 'circle',
              symbolSize: 10,
              label: {
                normal: {show: false},
                emphasis: {show: false}
              }
            }
          ],
          {
            name: 'min line on close',
            type: 'min',
            valueDim: 'close'
          },
          {
            name: 'max line on close',
            type: 'max',
            valueDim: 'close'
          }
        ]
      }
    },
    {
      name: 'MA5',
      type: 'line',
      data: calculateMA(5),
      smooth: true,
      lineStyle: {
        normal: {opacity: 0.5}
      }
    },
    {
      name: 'MA10',
      type: 'line',
      data: calculateMA(10),
      smooth: true,
      lineStyle: {
        normal: {opacity: 0.5}
      }
    },
    {
      name: 'MA20',
      type: 'line',
      data: calculateMA(20),
      smooth: true,
      lineStyle: {
        normal: {opacity: 0.5}
      }
    },
    {
      name: 'MA30',
      type: 'line',
      data: calculateMA(30),
      smooth: true,
      lineStyle: {
        normal: {opacity: 0.5}
      }
    },
  
  ]
};

