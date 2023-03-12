option = {
    legend: {
      data: ['折线图', '柱状图'],
      x: '200px', // 对齐方式
      itemGap: 200, // item之间的距离
    },
    title: {
            text: '工序本月度统计'
        },
    xAxis: {
        type: 'category',
        data: ['太原东二环', '207', '209', '隰吉高速', '昔榆']
    },
    yAxis: {
        type: 'value',
        max: 1000,
    },
    series: [
        {
            data: [520, 200, 150, 380,890],
            type: 'bar',
            name: '柱状图',
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(
                    0, 0, 0, 1, [{
                        offset: 0,
                        color: '#D53A35'
                      },
                      {
                        offset: 1,
                        color: '#D53A35'
                      }
                    ])
                }
            }
        },
        {
            data: [520, 200, 150, 380,890],
            type: 'line',
            name: '折线图',
            symbolSize: 20 // 控制线条上 点 的大小
        }
    ]
};
