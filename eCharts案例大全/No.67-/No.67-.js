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
      data: ['第一季度', '第二季度', '第三季度', '第四季度'],
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
          color: "#fff443",
        }
      },

      data: [25, 30, 60, 80]
    }

    ]
  };