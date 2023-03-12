option = {
    legend: {
      data: ['折线图', '柱状图'],
      x: '200px', // 对齐方式
      itemGap: 200, // item之间的距离
    },
    xAxis: {
        type: 'category',
        data: ['2013', '2014', '2015', '2016']
    },
    yAxis: {
        type: 'value',
        max: 300,
    },
    series: [
        {
            data: [120, 200, 150, 80],
            type: 'bar',
            name: '柱状图',
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(
                    0, 0, 0, 1, [{
                        offset: 0,
                        color: '#f25d2d'
                      },
                      {
                        offset: 1,
                        color: '#11ded6'
                      }
                    ])
                }
            }
        },
        {
            data: [120, 200, 150, 80],
            type: 'line',
            name: '折线图',
            symbolSize: 20 // 控制线条上 点 的大小
        }
    ]
};
