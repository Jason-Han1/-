option = {
    legend: {
      data: ['折线图', '柱状图'],
      x: '200px', // 对齐方式
      itemGap: 200, // item之间的距离
    },
    xAxis: {
        type: 'category',
        data: ['2013', '2014', '2015', '2016', '2017', '2018'],
        splitLine: {
            show: false
        }
    },
    yAxis: {
        type: 'value',
        max: 180,
        axisLabel: {
          showMaxLabel: false  
        },
        splitLine: {
            show: false
        }
    },
    series: [
        {
            data: [80, 120, 100, 122, 120, 140],
            type: 'bar',
            name: '柱状图',
            barWidth: 30,
            itemStyle: {
                normal: {
                    barBorderRadius: 15,
                    color: new echarts.graphic.LinearGradient(
                    0, 0, 0, 1, [{
                        offset: 0,
                        color: '#FFFC00'
                      },
                      {
                        offset: 1,
                        color: '#08E4DE'
                      }
                    ])
                }
            }
        },
        { // 背景色
          type: 'pictorialBar',
          stack: '总量',
          symbol: 'fixed',
          symbolSize: [28, 3],
          symbolMargin: 2,
          symbolRepeat: 'repeat',
          symbolBoundingData: 300,
          z: -10,
          data: [100, 140, 116, 136, 132, 152],
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
          symbolSize: [28, 3],
          symbolMargin: 2,
          symbolRepeat: 'repeat',
          barCategoryGap: '40%',
          z: -1,
          data: [6, 6, 6, 6, 6, 6],
          itemStyle:{
              normal: {
                  barBorderRadius: [10, 20, 30 ,40],
                  color: 'orange'
              }
          }
        },
        {
            data: [111, 151, 127, 147, 143, 165],
            type: 'line',
            smooth: true,
            name: '折线图',
            symbolSize: 20, // 控制线条上 点 的大小
            lineStyle: {
                color: '#EBE806'
            }
        }
    ]
};
