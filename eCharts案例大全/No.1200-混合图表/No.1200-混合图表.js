const xData = ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月']
const yData1 = [1, 2, 3, 4, 5, 3, 7, 9]
const yData2 = [3, 5, 7, 2, 8, 4, 3, 2]
const yData3 = [66, 77, 88, 55, 77, 99, 56, 78]
const dataLen = xData.length
option = {
          title: {
            text: '计划完成情况',
            textStyle: {
              fontSize: 28,
              color: '#fff',
              fontWeight: 400
            },
            left: 0,
            top: 20
          },
          legend: {
            data: ['已完成', '未完成', '完成率'],
            selectedMode: false,
            textStyle: { fontSize: 22 },
            itemWidth: 6,
            itemHeight: 6,
            itemGap: 30,
            top: '10%',
            right: '20%'
          },
          grid: {
            top: '20%',
            bottom: '20%',
            left: '20%',
            right: '20%'
          },
          xAxis: {
            data: xData,
            axisLine: {
              show: true, // 隐藏X轴轴线
              lineStyle: {
                color: 'rgba(53, 53, 53, 1)',
                width: 1,
                type: 'dashed'
              }
            },
            axisTick: {
              show: false // 隐藏X轴刻度
            },
            axisLabel: {
              show: true,
              margin: 6,
              fontSize: 20
              
            }
          },
          yAxis: [
            {
              type: 'value',
              gridIndex: 0,
              interval: 25,
              splitLine: {
                show: true,
                lineStyle: {
                  color: 'rgba(53, 53, 53, 1)',
                  width: 1,
                  type: 'dashed'
                }
              },
              axisTick: {
                show: false
              },
              axisLine: {
                show: false
              },
              axisLabel: {
                show: true,
                margin: 4,
                fontSize: 20
              }
            },
            {
              type: 'value',
              gridIndex: 0,
              interval: 25,
              splitLine: {
                show: true,
                lineStyle: {
                  color: 'rgba(53, 53, 53, 1)',
                  width: 1,
                  type: 'dashed'
                }
              },
              axisTick: {
                show: false
              },
              axisLine: {
                show: false
              },
              axisLabel: {
                show: true,
                margin: 4,
                fontSize: 20,
                formatter: '{value} %'
              }
            }
          ],
          series: [
            {
              name: '已完成',
              type: 'bar',
              barWidth: 16,
              itemStyle: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                  offset: 0,
                  color: 'rgba(40, 247, 54, 1)'
                },
                {
                  offset: 1,
                  color: 'rgba(40, 247, 54, 0.1)'
                }
                ])
              },
              data: yData1,
              z: 10,
              zlevel: 0,
              label: {
                show: true,
                position: 'top',
                formatter: (params) => {
                  if (params.dataIndex === dataLen - 1) {
                    return params.value
                  } else {
                    return ''
                  }
                },
                fontSize: 20,
                color: 'rgba(40, 247, 54, 1)'
              }
            },
            {
            // 分隔
              type: 'pictorialBar',
              itemStyle: {
                normal: {
                  color: '#ffffff'
                }
              },
              symbolRepeat: 'fixed',
              symbolMargin: 2,
              symbol: 'rect',
              symbolClip: true,
              symbolSize: [16, 4],
              symbolPosition: 'start',
              symbolOffset: [-10.5, -3],
              data: yData1,
              width: 16,
              z: 0,
              zlevel: 1
            },
            {
              name: '未完成',
              type: 'bar',
              barWidth: 16,
              itemStyle: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                  offset: 0,
                  color: 'rgba(253, 52, 19, 1)'
                },
                {
                  offset: 1,
                  color: 'rgba(253, 52, 19, 0.1)'
                }
                ])
              },
              data: yData2,
              z: 10,
              zlevel: 0,
              label: {
                show: true,
                position: 'top',
                formatter: (params) => {
                  if (params.dataIndex === dataLen - 1) {
                    return params.value
                  } else {
                    return ''
                  }
                },
                fontSize: 20,
                color: 'rgba(253, 52, 19, 1)'
              }
            },
            {
            // 分隔
              type: 'pictorialBar',
              itemStyle: {
                normal: {
                  color: '#ffffff'
                }
              },
              symbolRepeat: 'fixed',
              symbolMargin: 2,
              symbol: 'rect',
              symbolClip: true,
              symbolSize: [16, 4],
              symbolPosition: 'start',
              symbolOffset: [10.5, -3],
              data: yData2,
              width: 16,
              z: 0,
              zlevel: 1
            },
            {
              name: '完成率',
              type: 'line',
              // symbol: 'none',
              symbol: 'circle',
              symbolSize: 1,
              yAxisIndex: 1,
              zlevel: 20,
              itemStyle: {
                color: 'rgba(0, 220, 210, 1)'
              },
              lineStyle: {
                shadowBlur: 5,
                shadowColor: 'rgba(0, 225, 160, 1)',
                shadowOffsetY: 2
              },
              label: {
                show: true,
                position: 'right',
                formatter: (params) => {
                  if (params.dataIndex === dataLen - 1) {
                    return params.value + '%'
                  } else {
                    return ''
                  }
                },
                fontSize: 20,
                color: 'rgba(0, 220, 210, 1)'
              },
              data: yData3
            }
          ]
        };
