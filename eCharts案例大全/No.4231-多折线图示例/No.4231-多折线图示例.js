
option = {
  // 三个图表位置配置
  grid: [{
    top: '2%',
    height: "25%",
    width: "85%"
  }, {
    top: '35%',
    height: "25%",
    width: "85%"
  }, {
    top: '70%',
    height: "25%",
    width: "85%"
  }],
  // 三个图表title配置
//   title: [{
//     text: '官网Top10',
//     x: '13%',
//     y: '3%',
//     textStyle: {
//       fontSize: 18,
//       fontWeight: 'normal',
//       color: '#465166'
//     }
//   }, {
//     text: '微博Top10',
//     x: '46%',
//     y: '3%',
//     textStyle: {
//       fontSize: 18,
//       fontWeight: 'normal',
//       color: '#465166'
//     }
//   }, {
//     text: '微信Top10',
//     x: '78%',
//     y: '3%',
//     textStyle: {
//       fontSize: 18,
//       fontWeight: 'normal',
//       color: '#465166'
//     }
//   }],
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow',
    }
  },
  // x轴配置
  xAxis: [{
    gridIndex: 0,
    type: 'category',
        data: ['2019-01', '2019-02', '2019-03', '2019-04', '2019-05', '2019-06'],
        axisLine: {
            lineStyle: {
                color: "#999"
            }
        }
  },
    {
      gridIndex: 1,
      type: 'category',
        data: ['2019-01', '2019-02', '2019-03', '2019-04', '2019-05', '2019-06'],
        axisLine: {
            lineStyle: {
                color: "#999"
            }
        }
    },
    {
      gridIndex: 2,
      type: 'category',
        data: ['2019-01', '2019-02', '2019-03', '2019-04', '2019-05', '2019-06'],
        axisLine: {
            lineStyle: {
                color: "#999"
            }
        }
    }
  ],
  // y轴配置
  yAxis: [{
    type: 'value',
    gridIndex: 0, //对应前面grid的索引位置（第1个）
    splitNumber: 4,
        splitLine: {
            lineStyle: {
                type: 'dashed',
                color: '#DDD'
            }
        },
        axisLine: {
            show: false,
            lineStyle: {
                color: "#333"
            },
        },
        nameTextStyle: {
            color: "#999"
        },
        splitArea: {
            show: false
        }
  }, {
    type: 'value',
    gridIndex: 1, //对应前面grid的索引位置（第2个）
    splitNumber: 4,
        splitLine: {
            lineStyle: {
                type: 'dashed',
                color: '#DDD'
            }
        },
        axisLine: {
            show: false,
            lineStyle: {
                color: "#333"
            },
        },
        nameTextStyle: {
            color: "#999"
        },
        splitArea: {
            show: false
        }
  },
    {
      type: 'value',
      gridIndex: 2, //对应前面grid的索引位置（第3个）
      splitNumber: 4,
        splitLine: {
            lineStyle: {
                type: 'dashed',
                color: '#DDD'
            }
        },
        axisLine: {
            show: false,
            lineStyle: {
                color: "#333"
            },
        },
        nameTextStyle: {
            color: "#999"
        },
        splitArea: {
            show: false
        }
    }
  ],
  series: [{
    xAxisIndex: 0,
    yAxisIndex: 0,
    type: 'line',
    type: 'line',
    smooth: true,
    symbolSize: 8,
    data: [127, 224, 120, 278, 227, 237],
    barWidth: '30%',
    itemStyle: {
        normal: {
            color: '#f0c725'
        }
    }
  },
    {
      xAxisIndex: 1,
      yAxisIndex: 1,
      type: 'line',
        smooth: true,
        symbolSize: 8,
        data: [27, 124, 70, 178, 127, 157],
        barWidth: '30%',
        itemStyle: {
            normal: {
                color: '#16f892'
            }
        }
    },
 
    {
      xAxisIndex: 2,
      yAxisIndex: 2,
      type: 'line',
        smooth: true,
        symbolSize: 8,
        data: [127, 224, 120, 278, 227, 237],
        barWidth: '30%',
        itemStyle: {
            normal: {
                color: '#f0c725'
            }
        }
    }
  ]
};