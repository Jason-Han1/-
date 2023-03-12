option = {
    backgroundColor: "rgba(2, 12, 44, 1)", //背景色
    grid: {
      top: '30',
      left: '1%',
      right: '1%',
      bottom: '8%',
      containLabel: true,
    },
    xAxis: [{
      type: 'category',
      boundaryGap: true,
      axisLine: {
        show: false,
      },
      axisLabel: {
        textStyle: {
          color: '#959FA9',
          fontSize: 14
        },
      },
      axisTick: {
        show: false,
      },
      data: ['2020-2-17', '2020-2-17', '2020-2-17', '2020-2-17', '2020-2-17', '2020-2-17', '2020-2-17',],
    }],
    yAxis: [{
      type: 'value',
      axisTick: {
        show: false,
      },
      splitLine: {
        show: true,
        lineStyle: {
          type: 'dashed',
          color: 'rgba(226, 226, 226, 0.3)',
          width: 1
        }
      },
      axisLine: {
        show: false,
        lineStyle: {
          color: 'rgb(2,185,208)',
        },
      },
      axisLabel: {
        textStyle: {
          color: '#959FA9',
          fontSize: 14
        },
      },
    }],
    series: [{
      name: '车型1',
      type: 'line',
      smooth: true,
      symbol: 'circle',
      showAllSymbol: true,
      symbolSize: 12,
      label: {
        show: true,
        position: 'top',

      },
      itemStyle: {
        normal: {
          color: "rgba(119, 82, 255, 1)",
        }
      },

      areaStyle: { //区域填充样式
        normal: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
            offset: 0,
            color: 'rgba(119, 82, 255, 0.28)'
          },
          {
            offset: 1,
            color: 'rgba(119, 82, 255, 0.01)'
          }
          ], false),
        }
      },
      data: [80, 90, 70, 100, 110, 100, 90]
    },{
      name: '车型2',
      type: 'line',
      smooth: true,
      symbol: 'circle',
      showAllSymbol: true,
      symbolSize: 12,
      label: {
        show: true,
        position: 'top',

      },
      itemStyle: {
        normal: {
          color: "rgba(58, 199, 139, 1)",
        }
      },

      areaStyle: { //区域填充样式
        normal: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
            offset: 0,
            color: 'rgba(58, 199, 139, 0.28)'
          },
          {
            offset: 1,
            color: 'rgba(58, 199, 139, 0.01)'
          }
          ], false),
        }
      },
      data: [50, 60,40, 60, 70, 40, 50]
    },{
      name: '车型3',
      type: 'line',
      smooth: true,
      symbol: 'circle',
      showAllSymbol: true,
      symbolSize: 12,
      label: {
        show: true,
        position: 'top',

      },
      itemStyle: {
        normal: {
          color: "rgba(0, 141, 240, 1)",
        }
      },

      areaStyle: { //区域填充样式
        normal: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
            offset: 0,
            color: 'rgba(0, 141, 240, 0.28)'
          },
          {
            offset: 1,
            color: 'rgba(0, 141, 240, 0.01)'
          }
          ], false),
        }
      },
      data: [10, 50, 30, 40, 50, 30, 26]
    }

    ]
  };