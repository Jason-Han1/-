option = {
    title:{
        text:'标题'
    },
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
        ['Matcha Latt5e2', 22, 10],
        ['Matcha Latt53e', 22, 10],
        ['Matcha Latte455e', 21, 10],
        ['Matcha Lat4t5e', 25, 10],
        ['Matcha La6tt5e', 25, 13],
      ]
        },
        color: ["#3196FA"],
    series: [{
        type: 'line',
            areaStyle: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: '#3196FA'
                }, {
                    offset: 1,
                    color: '#333FFF00'
                }])
            },
            lineStyle: {
                width: 4,
            },
            symbol: 'none',
    },]
};