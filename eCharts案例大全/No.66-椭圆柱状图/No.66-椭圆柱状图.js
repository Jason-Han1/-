
const dataList = [45468.68,19579.54,18537.14]
option = {
        backgroundColor: 'rgb(255, 255, 255)',
        color: ['#1A64F8'],
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'none'
          },
          formatter: function(prams) {
            return prams[0].name + ':' + prams[0].data
          }
        },
        grid: {
          left: '8%',
          right: '2%',
          top: '10%',
          bottom: '20%'
        },
        xAxis: [
          {
            type: 'category',
            data: ['农村宅基地','公路用地','城镇住宅用地'],
            axisTick: {
              alignWithLabel: true
            },
            axisLabel: {
              rotate: -18,
              color: '#606266',
              interval: 0,
              margin: 20,
              align: 'center'
            }
          }
        ],
        yAxis: {
          axisLine: {
            show: false
          },
          axisTick: {
            show: false
          },
          axisLabel: {
            color: '#606266'
          }
        },
        series: [
          {
            name: '',
            type: 'pictorialBar',
            symbolSize: [30, 10],
            symbolOffset: [0, -5],
            symbolPosition: 'end',
            z: 12,
            label: {
              normal: {
                show: true,
                position: 'top',
                color: '#3E7EFF',
                fontWeight: 'bold'
                // "formatter": "{c}%"
              }
            },
            itemStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  {
                    offset: 1,
                    color: '#1A64F8',
                    opacity: 1
                  },
                  {
                    offset: 0,
                    color: '#82BEFF',
                    opacity: 1
                  }
                ])
                // barBorderRadius: 11,
              }
            },
            data: dataList
          },
          {
            name: '',
            type: 'pictorialBar',
            symbolSize: [30, 10],
            symbolOffset: [0, 5],
            z: 12,
            itemStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  {
                    offset: 1,
                    color: '#82BEFF',
                    opacity: 1
                  },
                  {
                    offset: 0,
                    color: '#1A64F8',
                    opacity: 1
                  }
                ])
              }
            },
            data: dataList
          },
          {
            type: 'bar',
            showBackground: true,
            backgroundStyle: {
              color: 'rgba(216, 229, 247, 0.55)',
              borderRadius: [6, 6, 0, 0]
            },
            itemStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  {
                    offset: 0,
                    color: '#93C3FF',
                    opacity: 0.85
                  },
                  {
                    offset: 1,
                    color: '#246CFF',
                    opacity: 0.79
                  }
                ])
              }
            },
            barWidth: '30',
            data: dataList
          }
        ]
      }
      myChart.setOption(option)
      // this.$resize(myChart)