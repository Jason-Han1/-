option = {
    title: {
          text: '总相似占比',
          left: 0,
          textStyle: {
            color: '#334154',
            fontSize: 16,
          }
        },
        grid: {
          top: "50px",
          left: "5px",
          right: "5px",
          bottom: "0px",
          containLabel: true
        },
        tooltip: {
          trigger: 'item',
          backgroundColor: '#fff',
          extraCssText: 'box-shadow: 0 2px 14px rgba(66, 79, 87, 0.24);',
          padding: 10,
          textStyle: {
            color: '#25282B'
          },
          formatter: '{b}:<br/>数量：{c} '
        },
        xAxis: {
          show: false,
          axisLine: {       // 坐标轴 轴线
            show: false,  // 是否显示
          },
          axisTick: {
            show: false,
          },
          splitLine: {
            show: false,
          },
        },
        yAxis: {
          axisLine: {       // 坐标轴 轴线
            show: false,  // 是否显示
          },
          axisTick: {
            show: false,
          },
          axisLabel: { padding: [0, 16, 0, 0] },
          data: ['85%~100%', '70%~85%', '50%~70%', '10%~50%', '35%~40%', '25%~30%', '15%~20%', '10%~15%', '5%~10%', '0%~5%'],
        },
        series: [
          {
            type: 'bar',
            barWidth: 10,
            data: [
              //这段的值稍有特殊，是倒序输出

              //85-100%
              {
                value: 200,
                itemStyle: {
                  barBorderRadius: 10,
                  color: new echarts.graphic.LinearGradient(
                    1, 0, 0, 0,
                    [
                      { offset: 1, color: '#FF5833' },
                      { offset: 0, color: '#FF8150' }
                    ]
                  )
                }
              },
              //70-85%
              {
                value: 250,
                itemStyle: {
                  barBorderRadius: 10,
                  color: new echarts.graphic.LinearGradient(
                    1, 0, 0, 0,
                    [
                      { offset: 1, color: '#FF5833' },
                      { offset: 0, color: '#FF8150' }
                    ]
                  )
                }
              },
              //50-70%
              {
                value: 300,
                itemStyle: {
                  barBorderRadius: 10,
                  color: new echarts.graphic.LinearGradient(
                    1, 0, 0, 0,
                    [
                      { offset: 1, color: '#FF5833' },
                      { offset: 0, color: '#FF8150' }
                    ]
                  )
                }
              },
              //10-50%
              {
                value: 350,
                itemStyle: {
                  barBorderRadius: 10,
                  color: new echarts.graphic.LinearGradient(
                    1, 0, 0, 0,
                    [
                      { offset: 1, color: '#FF5833' },
                      { offset: 0, color: '#FF8150' }
                    ]
                  )
                }
              },
              //35-40%
              {
                value: 400,
                itemStyle: {
                  barBorderRadius: 10,
                  color: new echarts.graphic.LinearGradient(
                    1, 0, 0, 0,
                    [
                      { offset: 1, color: '#FF9533' },
                      { offset: 0, color: '#FFC351' }
                    ]
                  )
                }
              },
              //25-30%
              {
                value: 450,
                itemStyle: {
                  barBorderRadius: 10,
                  color: new echarts.graphic.LinearGradient(
                    1, 0, 0, 0,
                    [
                      { offset: 1, color: '#FF9533' },
                      { offset: 0, color: '#FFC351' }
                    ]
                  )
                }
              },
              //15-20%
              {
                value: 500,
                itemStyle: {
                  barBorderRadius: 10,
                  color: new echarts.graphic.LinearGradient(
                    1, 0, 0, 0,
                    [
                      { offset: 1, color: '#FF9533' },
                      { offset: 0, color: '#FFC351' }
                    ]
                  )
                }
              },
              //10-15%
              {
                value: 550,
                itemStyle: {
                  barBorderRadius: 10,
                  color: new echarts.graphic.LinearGradient(
                    1, 0, 0, 0,
                    [
                      { offset: 1, color: '#96E277' },
                      { offset: 0, color: '#C3F5A5' }
                    ]
                  )
                }
              },
              // 5-10%
              {
                value: 600,
                itemStyle: {
                  barBorderRadius: 10,
                  color: new echarts.graphic.LinearGradient(
                    1, 0, 0, 0,
                    [
                      { offset: 1, color: '#96E277' },
                      { offset: 0, color: '#C3F5A5' }
                    ]
                  )
                }
              },
              // 0-5%
              {
                value: 650,
                itemStyle: {
                  barBorderRadius: 10,
                  color: new echarts.graphic.LinearGradient(
                    1, 0, 0, 0,
                    [
                      { offset: 1, color: '#96E277' },
                      { offset: 0, color: '#C3F5A5' }
                    ]
                  )
                }
              },
            ]
          }
        ],
};