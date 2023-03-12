option = {
    legend: {
        right: 20,
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
    },
    yAxis: {
        type: 'value',
    },
        dataset: {
          // 提供一份数据。
          source: [
        ['product', '2015', '2016'],
        ['Matcha Latte1', 0, 35],
        ['Matcha Latte23', 10,24],
        ['Matcha Latte4', 40, 30],
        ['Matcha Latt5e', 22, 10],
      ]
        },
        color: ["#333FFF", "#58CFFF"],
    series: [{
        type: 'line',
            areaStyle: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: '#333FFF'
                }, {
                    offset: 1,
                    color: '#333FFF00'
                }])
            },
            lineStyle: {
                width: 4,
            },
            symbolSize: 14,
    },{
        type: 'line',
            areaStyle: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: '#58CFFF'
                }, {
                    offset: 1,
                    color: '#58CFFF00'
                }])
            },
            lineStyle: {
                width: 4,
            },
            symbolSize: 14,
    },]
};