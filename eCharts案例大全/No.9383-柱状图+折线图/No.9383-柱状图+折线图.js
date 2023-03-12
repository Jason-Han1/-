 
      var xData = ['城厢区城厢区', '福山区', '莱山区', '牟平区']
      var y1Data = [
        {
          name: '其他数据',
          value2: 100,
          value: 100 // value字段默认为图表数据
          // 这样可以获取整个对象元素 然后你想要哪个就要哪个
        },
        {
          name: '其他数据',
          value2: 100,
          value: 120
        },
        {
          name: '其他数据',
          value2: 100,
          value: 150
        },
        {
          name: '其他数据',
          value2: 100,
          value: 200
        }
      ]
      var y2Data = [110, 130, 180, 200]
 
      option = {
       backgroundColor: '#111b29',
        grid: {
          left: '15%',
          right: '0',
          top: '8%',
          bottom: '19%'
        },
        title: {
          show: false
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        legend: {
          data: ['监控数量', '监控密度'],
          right: '3%',
          top: '10%',
          itemWidth: 11,
          itemHeight: 11,
          textStyle: {
            color: '#ffffff',
            fontSize: 13
          }
        },
        toolbox: {
          show: false
        },
        xAxis: [
          {
            type: 'category',
            boundaryGap: true,
            show: true,
            // X轴吐出来的小点
            axisTick: {
              show: true,
              alignWithLabel: true
            },
            axisLabel: {
              fontSize: 10,
              // TODO: 文字旋转
              rotate: 30,
              color: '#d0d0d0',
              margin: 15,
              interval: 0,
              formatter: function (val) {
                // TODO: 字数限制 省略 toolip
                if (val.length > 3) {
                  val = `${val.slice(0, 3)}...`
                }
                return val
              }
            },
            axisLine: {
              // X轴线 TODO: X Y线的颜色
              lineStyle: {
                type: 'solid',
                color: '#BDC8D3',
                width: '1' // 坐标线的宽度
              }
            },
            data: xData
          }
        ],
        yAxis: [
          {
            type: 'value',
            scale: true,
            name: '',
            axisLine: {
              show: false
            },
            splitNumber: 4,
            axisTick: {
              show: false
            },
            splitLine: {
              show: true,
              // Y轴线
              lineStyle: {
                // 使用深浅的间隔色
                color: '#4e608b'
              }
            },
            // 文字
            axisLabel: {
              fontSize: 12,
              color: '#FFF',
              margin: 10,
              formatter: params => {
                // TODO: 三个等级
                console.log('params', params)
                // 不要0
                if (params === 0) {
                  return ''
                }
                return params
              }
            },
            max: 150,
            min: 0,
            boundaryGap: [0.2, 0.2]
          },
          {
            type: 'value',
            scale: true,
            axisLine: {
              show: false
            },
            splitNumber: 3,
            axisTick: {
              show: false
            },
            axisLabel: {
              show: false // 隐藏纵轴文字
            },
            // 隐藏纵轴
            splitLine: {
              show: false
            },
            name: '',
            max: 200,
            min: 0,
            boundaryGap: [0.2, 0.2]
          }
        ],
        series: [
          {
            type: 'bar',
            label: {
              normal: {
                show: true,
                position: 'top',
                textStyle: {
                  color: '#BCDDFA'
                }
              }
            },
            itemStyle: {
              normal: {
                // 柱状图的颜色
                color: new echarts.graphic.LinearGradient(
                  0,
                  1,
                  0,
                  0,
                  [
                    {
                      offset: 0,
                      color: '#1460B5' // 0% 处的颜色
                    },
                    {
                      offset: 1,
                      color: '#1C73D5' // 100% 处的颜色
                    }
                  ],
                  false
                )
              }
            },
            barWidth: '40%',
            yAxisIndex: 0,
            data: y1Data
          },
          {
            yAxisIndex: 1,
            color: '#fff', // 折线图节点的颜色
            label: {
              normal: {
                show: false,
                position: 'top',
                textStyle: {
                  color: '#ffd300'
                }
              }
            },
            // 折线图颜色
            lineStyle: {
              type: 'dashed',
              color: '#E56363'
            },
            type: 'line',
            data: y2Data
          }
        ]
      }
    