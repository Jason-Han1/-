option = {
    tooltip: {},
    legend: {
      show: true
    },
    grid: {
      left: '3%',
      right: '3%',
      bottom: '5%',
      top: '8%',
      containLabel: true
    },
    xAxis: {
      type: 'category',
      data: ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月']
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        name: '新增用户数量',
        type: 'bar',
        stack: 'account',
        barWidth: 26,
        itemStyle: {
            color: {
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                type: 'linear',
                global: false,
                colorStops: [
                    {
                        offset: 0,
                        color: '#017ebb',
                    },
                    {
                        offset: 1,
                        color: '#06fbfe',
                    },
                ],
            },
        },
        data: [320, 302,120,100,540,123,345,667,333,122,211,99]
      },
      {
        name: '邀请新用户数量',
        type: 'bar',
        stack: 'account',
        barWidth: 26,
        itemStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            { offset: 0, color: '#ffae88' },
            { offset: 1, color: '#ff7388' }
          ])
        },
        data: [120, 102, 90,150,120,123,145,167,133,172,111,199]
      },
      {
        z: 3,
        type: 'pictorialBar',
        symbolPosition: 'end',
        data: [320, 302,120,100,540,123,345,667,333,122,211,99],
        symbol: 'diamond',
        symbolOffset: [0, '-50%'],
        symbolSize: [26, 10],
        symbolRotate: 0,
        itemStyle: {
            normal: {
                borderWidth: 0,
                color: '#10e6ff'

            }
        },
      },
      {
        z: 3,
        type: 'pictorialBar',
        symbolPosition: 'end',
        data: [440, 404, 210,250,660,246,490,834,466,294,322,298],
        symbol: 'diamond',
        symbolOffset: [0, '-50%'],
        symbolSize: [26, 10],
        itemStyle: {
            normal: {
                borderWidth: 0,
                color: '#ffcf90'
            }
        },
      }
    ]
  };
