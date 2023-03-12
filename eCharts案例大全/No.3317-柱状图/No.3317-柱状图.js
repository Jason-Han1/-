var data = [
        {
          month: '1月份',
          value: 100
        },

        {
          month: '2月份',
          value: 90
        },

        {
          month: '3月份',
          value: 200
          // ratio: 75.8
        },

        {
          month: '4月份',
          value: 150
          // ratio: 19.8
        },

        {
          month: '5月份',
          value: 230
          // ratio: 44.5
        },

        {
          month: '6月份',
          value: 135
          // ratio: 87.3
        }
      ]
      var bkData = [100, 100, 100, 100, 100, 100]
      var xData = ['1月份', '2月份', '3月份', '4月份', '5月份', '6月份']
      option = {
        backgroundColor: '',
        color: ['#3398DB'],
        tooltip: {
          show: true,
          trigger: 'axis',
          axisPointer: {
            type: 'line',
            lineStyle: {
              opacity: 0
            }
          },
          backgroundColor: 'rgb(7,55,133)',
          borderColor: '#0daee9',
          textStyle: {
            color: '#fff'
          }
        },
        grid: {
          left: '5%',
          right: '5%',
          bottom: '5%',
          top: '10%',
          height: '85%',
          containLabel: true,
          z: 22
        },
        xAxis: [
          {
            type: 'category',
            boundaryGap: true, // 坐标轴两边留白
            gridIndex: 0,
            data: xData,
            axisLabel: {
              textStyle: {
                fontSize: 12
              }
            },
            axisLine: {
              lineStyle: {
                color: 'rgba(0,0,0,.8)'
              }
            },
            axisTick: {
              show: false
            }
          }
        ],
        yAxis: [
          {
            type: 'value',
            nameTextStyle: {
              color: 'rgb(170,170,170)'
            },
            gridIndex: 0,
            axisTick: {
              show: false
            },
            axisLine: {
              lineStyle: {
                // color: 'rgba(255,255,255,0)'
              }
            },
            axisLabel: {
              color: 'rgba(0,0,0,.8)',
              fontSize: 12,
              formatter: '{value}'
            },
            splitLine: {
              lineStyle: {
                color: 'rgba(255,255,255,.1)'
              }
            }
          },
          {
            type: 'value',
            show: false,
            gridIndex: 0,
            // min: min,
            // max: 6,
            axisLine: {
              show: false
            },
            axisTick: {
              show: false
            },
            axisLabel: {
              color: '#95a2aa',
              fontSize: 14,
              formatter: '{value}'
            },
            splitLine: {
              lineStyle: {
                color: 'rgba(255,255,255,.1)'
              }
            }
          }
        ],
        series: [
          {
            name: '高发事件统计',
            type: 'bar',
            barWidth: '30%',
            xAxisIndex: 0,
            yAxisIndex: 0,
            itemStyle: {
              normal: {
                color: '#00A2FF'
              }
            },
            label: {
              show: true,
              position: 'top'
            },
            data: data,
            zlevel: 11
          },
          {
            name: '背景',
            type: 'bar',
            barWidth: '30%',
            xAxisIndex: 0,
            yAxisIndex: 1,
            barGap: '-100%',
            data: bkData,
            itemStyle: {
              normal: {
                color: 'rgba(0,162,255,0.1)',
                barBorderRadius: [0, 0, 0, 0]
              }
            },
            tooltip: {
              show: false
            },
            zlevel: 9
          }
        ]
      }
      
