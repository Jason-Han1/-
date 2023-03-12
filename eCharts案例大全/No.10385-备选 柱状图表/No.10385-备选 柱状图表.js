option = {
    legend: {
      data: ['折线图', '柱状图'],
      x: '200px', // 对齐方式
      itemGap: 200, // item之间的距离
    },
    xAxis: {
        type: 'category',
        data: ['2013', '2014', '2015', '2016'],
        splitLine: {
            show: false
        }
    },
    yAxis: {
        type: 'value',
        max: 300,
        splitLine: {
            show: false
        }
    },
    series: [
        {
            data: [20, 200, 150, 80],
            type: 'bar',
            name: '柱状图',
            barWidth: 60,
            itemStyle: {
                normal: {
                    barBorderRadius: 100,
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
        { // 背景色
          type: 'pictorialBar',
          stack: '总量',
          symbol: 'fixed',
          symbolSize: [60, 10],
          symbolMargin: 2,
          symbolRepeat: 'repeat',
          symbolBoundingData: 300,
          z: -10,
          data: [300, 300, 300, 300],
          itemStyle: {
              normal: {
                  color: '#007d87'
              }
          }
        },
        { // 替代颜色
          type: 'pictorialBar',
          symbol: 'fixed',
          stack: '总量',
          symbolSize: [60, 10],
          symbolMargin: 2,
          symbolRepeat: 'repeat',
          barCategoryGap: '40%',
          z: -1,
          data: [6, 6, 6, 6],
          itemStyle:{
              normal: {
                  barBorderRadius: [10, 20, 30 ,40],
                  color: 'orange'
              }
          }
        },
        {
            data: [120, 200, 150, 80],
            type: 'line',
            smooth: true,
            name: '折线图',
            symbolSize: 20 // 控制线条上 点 的大小
        }
    ]
};
