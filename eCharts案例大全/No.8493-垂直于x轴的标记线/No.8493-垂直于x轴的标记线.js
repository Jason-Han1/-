option = {
    title: {
        text: 'Awesome Chart'
    },
    xAxis: {
        data: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
    },
    yAxis: {},
    series: [{
        type: 'line',
        data:[220, 182, 191, 234, 290, 330, 310],
        markLine: {
        itemStyle: {
          normal: {
            lineStyle: {
              width: 1,
              color: '#b1b4c3',
              type: 'solid',
            },
          },
        },
        symbol: 'none', //去掉箭头
        data: [[{ coord: ['Mon', 0] }, { coord: ['Mon', 300] }]],
        // data: [
        //   [
        //     { xAxis: '9月', yAxis: 0},
        //     { xAxis: '9月', yAxis: 'max'},
        //   ],
        // ],
      },
    }]
};