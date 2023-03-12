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
      name: '日任务数量趋势',
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
      data: [100, 120, 110, 160, 140, 130, 150]
    }

    ]
  };