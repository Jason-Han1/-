barOption={
          color: ['#00FFFF', '#7CFC00','#F08080', '#7CFC00',  '#3ba272', '#fc8452', '#9a60b4', '#ea7ccc'],
          xAxis: ['便道', '湿喷桩', '管桩', '土方', '钻孔桩', '立柱', '盖梁', '预制箱梁', '现浇箱梁','桥面铺装','护栏'],
          seriesData:  {
            population: [100, 120, 160, 180, 140, 170, 50, 90, 120,150,140],
            thisWeek:  [30, 40, 40, 50, 60, 50, 20, 55, 60,30,40],
            notAccumulated: [36, 20, 45, 38, 46, 52, 30, 25, 10,10,20],
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
              name: '总工程量',
              itemStyle: {
                color: '#7461D1',
              }
            },
            {
              name: '本周完成',
              itemStyle: {
                color: '#09E3EF '
              }
            },
            {
              name: '至本周末累计',
              itemStyle: {
                color: '#1B85BE '
              }
            }
          ],
          textStyle: {
            color: '#5789c6',
            fontSize: 14
          },
          itemWidth: 10,
          itemHeight: 10,
          left: 'center',
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
          formatter: '{b}-{a}: {c}'
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
          axisTick: {
            show: false // 不显示坐标轴刻度线
          },
          axisLabel: {
            formatter: '{value}'
          },
          splitLine: {
            // show: false // 不显示网格线
            lineStyle: {
              type: 'dashed',
              color: '#344a53'
            }
          },
        }, {
          type: 'value',
          axisLabel: {
            show: true,
            interval: 'auto',
            formatter: '{value}%'
          },
          splitLine: {
            show: false // 不显示网格线
          },
          axisTick: {
            show: false // 不显示坐标轴刻度线
          }
        }], 
        dataZoom: [
          {
            type: 'slider',
            xAxisIndex: [0],
            
zoomLock: true , minValueSpan:4,
maxValueSpan:5,
            left: '50',
            bottom: 0,
            height: 6,
            backgroundColor: 'rgba(255,255,255,.2)',
            start: 0,
            borderColor: 'none',
            end: 20,
            dataBackground: {
              lineStyle: {
                color: 'none'
              },
              areaStyle: {
                color: 'none'
              }
            },
            selectedDataBackground: {
              lineStyle: {
                color: 'none'
              },
              areaStyle: {
                color: 'none'
              }
            },
            borderWidth: 0,
            handleSize: '0px',
            fillerColor: '#09E3EF',
            moveHandleSize: 0,
            showDetail: false
          }
        ],
        series: [
          {
            name: '总工程量',
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
                    color: '#7461D1' // 0% 处的颜色
                  },
                  {
                    offset: 1,
                    color: 'rgba(116, 97, 209, 0.3)' // 100% 处的颜色
                  }
                ],
                false
              )
            },
            tooltip: {
              trigger: 'item',
              axisPointer: {
                type: 'none',
                crossStyle: {
                  color: '#999'
                }
              },
              formatter: '{b}-{a}: {c}'
            },
          },
          {
            name: '本周完成',
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
                    color: '#09E3EF ' // 0% 处的颜色
                  },
                  {
                    offset: 1,
                    color: 'rgba(9, 227, 239, 0.3)' // 100% 处的颜色
                  }
                ],
                false
              )
            },
            tooltip: {
              trigger: 'item',
              axisPointer: {
                type: 'none',
                crossStyle: {
                  color: '#999'
                }
              },
              formatter: '{b}-{a}: {c}'
            },
          },
          {
            name: '至本周末累计',
            data: barOption.seriesData.notAccumulated,
            type: 'bar',
            barWidth: 12,
            yAxisIndex: 1,
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
                    color: '#1B85BE' // 0% 处的颜色
                  },
                  {
                    offset: 1,
                    color: 'rgba(27, 133, 190, 0.3)' // 100% 处的颜色
                  }
                ],
                false
              )
            },
            tooltip: {
              trigger: 'item',
              axisPointer: {
                type: 'none',
                crossStyle: {
                  color: '#999'
                }
              },
              formatter: '{b}-{a}: {c}%'
            },
          },
        ]
      }
