barOption = {
    xAxis: ['1标段', '2标段', '3标段', '4标段', '5标段', ],
    seriesData:  {
      population: [100, 120, 160, 180, 140],
      thisWeek:  [30, 40, 40, 50, 60],
    }
  }
 option = { grid: {
          // 显示数据的图表位于当前canvas的坐标轴
        top: 30,
        bottom: 50
        },
        legend: {
          data: [
            {
              name: '总人数',
              itemStyle: {
                color: '#1F98D8',
              }
            },
            {
              name: '实际出勤人数',
              itemStyle: {
                color: '#43D5A0 '
              }
            }
          ],
          textStyle: {
            color: '#5789c6',
            fontSize: 14
          },
          itemWidth: 10,
          itemHeight: 10,
          right: '0',
          top: 5
        },
        tooltip: {
          trigger: 'item',
          axisPointer: {
            type: 'none',
            crossStyle: {
              color: '#999'
            }
          },
          formatter: '{b}-{a}: {c}人'
        },
        xAxis: [
          {
            type: 'category',
            data: barOption.xAxis,
            axisTick: {
              show: false // 不显示坐标轴刻度线
            },
            axisLabel: {
              interval: 0,
              textStyle: {
                color: '#fff',
                fontSize: 14
              }
            }
          }
        ],
        yAxis: [{
          type: 'value',
          name: '(人)',
          // nameGap: 15 ,
          nameTextStyle: {
            color: 'rgba(255,255,255,0.40)',
            padding: [0, 0, 0, -25] // 四个数字分别为上右下左与原位置距离
          },
          axisLabel: {
            color: 'rgba(255,255,255.40)'
          },
          axisTick: {
            show: false // 不显示坐标轴刻度线
          },
          splitLine: {
            // show: false // 不显示网格线
            lineStyle: {
              type: 'dashed',
              color: '#344a53'
            }
          }
        }], 
        series: [
          {
            name: '总人数',
            data: barOption.seriesData.population,
            type: 'bar',
            barWidth: 12,
            yAxisIndex: 0,
            itemStyle: {
              // 柱子颜色渐变
              color: new echarts.graphic.LinearGradient(
                0,
                0,
                0,
                1,
                [
                  {
                    offset: 0,
                    color: '#1F98D8 ' // 0% 处的颜色
                  },
                  {
                    offset: 1,
                    color: 'rgba(50, 94, 170, 0.2)' // 100% 处的颜色
                  }
                ],
                false
              )
            }
          },
          {
            name: '实际出勤人数',
            data: barOption.seriesData.thisWeek,
            type: 'bar',
            barWidth: 12,
            yAxisIndex: 0,
            itemStyle: {
              // 柱子颜色渐变
              color: new echarts.graphic.LinearGradient(
                0,
                0,
                0,
                1,
                [
                  {
                    offset: 0,
                    color: '#43D5A0 ' // 0% 处的颜色
                  },
                  {
                    offset: 1,
                    color: 'rgba(67, 213, 160, 0.25)' // 100% 处的颜色
                  }
                ],
                false
              )
            },
          },
        ]
      }
