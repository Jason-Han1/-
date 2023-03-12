var iconImg='path://M810.666 128H213.334C166.396 128 128 166.396 128 213.334v597.332C128 857.604 166.396 896 213.334 896h597.332C857.604 896 896 857.604 896 810.666V213.334C896 166.396 857.604 128 810.666 128z m-384 597.334L213.334 512l59.728-59.728 153.604 153.604 324.272-324.272 59.728 59.73-384 384z'
var data = {
  legendList:[
    {name:"显示上月",icon:iconImg},
    {name:"外雇车装载率",icon:iconImg},
    {name:"自备车装载率",icon:iconImg},
    {name:"出发货量",icon:iconImg},
    {name:"中转货量",icon:iconImg},
    {name:"到达货量",icon:iconImg},
],
  monthList: ["19/012", "20/01","20/02", "20/03", "20/04", "20/05"],
  placingList: [
      {name:"显示上月",type:'bar',data:[11,20,10,4,12,10]},
      {name:"显示上月",type:'bar',data:[10,20,11,12,6,10]},
      {name:"显示上月",type:'line',data:[70,90,100,170,80,60]},
      {name:"显示上月",type:'line',data:[50,70,90,160,90,120]},
      {name:"显示上月",type:'line',data:[30,60,80,150,90,160]},
      {name:"外雇车装载率",type:'bar',data:[10,11,32,21,12,12]},
      {name:"自备车装载率",type:'bar',data:[20,22,22,23,31,55]},
      {name:"出发货量",type:'line',data:[10,30,50,120,90,110]},
      {name:"中转货量",type:'line',data:[20,40,60,140,100,120]},
      {name:"到达货量",type:'line',data:[30,50,70,160,70,150]}
  ],
}
option = {
    backgroundColor:'#0e1c47',
    tooltip: {
    trigger: 'axis',
    textStyle: {
        fontSize:9,
    }
  },
  grid: {
      top: '18%',
      left: '7%',
      right: '7%',
      bottom: '25%',
  },
  legend: {
    data: data.legendList,
    top: "10%",
    textStyle: {
        color: "rgba(255,255,255,.61)"
    }
  },
  xAxis: [{
      type: 'category',
      boundaryGap: true,
      splitLine: {
          show: true,
          lineStyle: {
              color: 'rgba(164,161,169,.3)'
          },
      },
      axisLine: {
          show: true,
          lineStyle: {
              color: "rgba(164,161,169,.3)"
          }
      },
      axisLabel: {
          textStyle: {
              color: '#9AA1A9',
          },
      },
      axisTick: {
          show: false,
      },
      data: data.monthList
  }],
  yAxis: [{
      splitLine: {
          show: true,
          lineStyle: {
              color: 'rgba(164,161,169,.3)'
          },
      },
      axisLine: {
          show: true,
          lineStyle: {
              color: "rgba(164,161,169,.3)"
          }
      },
      axisLabel: {
          show: true,
          textStyle: {
              color: '#9AA1A9',
          }
      },
      axisTick: {
          show: false,
      },
  },{
      splitLine: {
          show: true,
          lineStyle: {
              color: 'rgba(164,161,169,.3)'
          },
      },
      axisLine: {
          show: true,
          lineStyle: {
              color: "rgba(164,161,169,.3)"
          }
      },
      axisLabel: {
          show: true,
          textStyle: {
              color: '#9AA1A9',
          },
          formatter:"{value}%"
      },
      axisTick: {
          show: false,
      },
  }],
  series: [{
      name: '外雇车装载率',
      type: 'bar',
      barWidth:15,
      stack:'自备车装载率',
      symbol: 'fixed', 
      yAxisIndex: 1,
      itemStyle: {
          normal: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                  offset: 0,
                  color: 'rgba(101,102,187,1)' // 0% 处的颜色
              }, {
                  offset: 1,
                  color: 'rgba(107,101,187,1)' // 100% 处的颜色
              }], false),
              lineStyle: {
                  type: 'solid'
              }
          }
      },
      data: data.placingList[0].data
  },{
      name: '自备车装载率',
      type: 'bar',
      barWidth:15,
      stack:'自备车装载率',
      symbol: 'fixed',
      yAxisIndex: 1,
      itemStyle: {
          normal: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                  offset: 0,
                  color: 'rgba(171,238,242,1)' // 0% 处的颜色
              }, {
                  offset: 1,
                  color: 'rgba(71,144,160,1)' // 100% 处的颜色
              }], false),
              lineStyle: {
                  type: 'solid'
              }
          }
      },
      data: data.placingList[1].data
  },{
      name: '出发货量',
      type: 'line',
      yAxisIndex: 0,
      barWidth:15,
      itemStyle: {
          normal: {
              color: '#AE704F',
              lineStyle: {
                  type: 'solid'
              }
          }
      },
      areaStyle: {
          normal: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                  offset: 0,
                  color: "rgba(174, 112, 79,.3)"
                  },{
                      offset: 1,
                      color: "rgba(174, 112, 79, 0)"
                  }
              ], false),
          }
      },
      data: data.placingList[2].data
  },{
      name: '中转货量',
      type: 'line',
      yAxisIndex: 0,
      barWidth:15,
      itemStyle: {
          normal: {
              color: '#8C7F7D',
              lineStyle: {
                  type: 'solid'
              }
          }
      },
      areaStyle: {
          normal: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                  offset: 0,
                  color: "rgba(140, 127, 125,.3)"
                  },{
                      offset: 1,
                      color: "rgba(140, 127, 125, 0)"
                  }
              ], false)
          }
      },
      data: data.placingList[3].data
  },{
      name: '到达货量',
      type: 'line',
      yAxisIndex: 0,
      barWidth:15,
      itemStyle: {
          normal: {
              color: '#4F88B5',
              lineStyle: {
                  type: 'solid'
              }
          }
      },
      data: data.placingList[4].data
  },{
      type: 'bar',
      name: '显示上月',
      barWidth:15,
      stack:'显示上月',
      yAxisIndex: 1,
      itemStyle: {
          normal: {
              color: 'rgba(101,102,187,.4)',
              lineStyle: {
                  type: 'dashed'
              }
          }
      },
      data: data.placingList[5].data
  },{
      type: 'bar',
      name: '显示上月',
      barWidth:15,
      stack:'显示上月',
      yAxisIndex: 1,
      itemStyle: {
          normal: {
              color: 'rgba(102,214,222,.4)',
              lineStyle: {
                  type: 'dashed'
              }
          }
      },
      data: data.placingList[6].data
  },{
      name: '显示上月',
      type: 'line',
      yAxisIndex: 0,
      itemStyle: {
          normal: {
              color: '#AE704F',
              lineStyle: {
                  type: 'dashed'
              }
          }
      },
      data: data.placingList[7].data
  },{
      name: '显示上月',
      type: 'line',
      yAxisIndex: 0,
      itemStyle: {
          normal: {
              color: '#8C7F7D',
              lineStyle: {
                  type: 'dashed'
              }
          }
      },
      data: data.placingList[8].data
  },{
      name: '显示上月',
      type: 'line',
      yAxisIndex: 0,
      itemStyle: {
          normal: {
              color: '#4F88B5',
              lineStyle: {
                  type: 'dashed'
              }
          }
      },
      data: data.placingList[9].data
  },]
};