 option = {
    backgroundColor: "rgba(2, 12, 44, 1)", //背景色
    color: ['rgba(104, 113, 220, 1)', 'rgba(241, 147, 83, 1)'],
    grid: {
      top: '8%',
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
    yAxis: {
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

    },

    series: [
      {
        type: 'bar', barGap: 0.2, barWidth: 10,
        data: [100, 120, 110, 60, 70, 130, 150]
      },
      {
        type: 'line',
        smooth: true,
        symbol: 'circle',
        showAllSymbol: true,
        symbolSize: 12,
        data: [130, 70, 110, 70, 90, 100, 150]
      }

    ]
  };
  