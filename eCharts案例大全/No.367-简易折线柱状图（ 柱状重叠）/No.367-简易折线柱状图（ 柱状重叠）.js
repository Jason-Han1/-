option = {
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'line'
          },
          backgroundColor: 'rgba(9, 24, 48, 0.5)',
          borderColor: 'rgba(75, 253, 238, 0.4)',
          textStyle: {
            color: '#CFE3FC',
          },
        },
        legend: [
          {
            data: ['问题个数(个)'],
            top: '0',
            x: '0',
            itemWidth: 8,
            borderColor: 'rgba(255, 192, 0, 1)',
            textStyle: {
              color: 'rgba(0,0,0,.4)',
              fontSize: 12
            },
            icon:'circle'
          },
          {
            data: ['办结量(个)'],
           top: '0',
            x: '15%',
            itemWidth: 8,
            textStyle: {
              color: 'rgba(0,0,0,.4)',
              fontSize: 12
            },
            icon:'circle'
          },
          {
            data: ['办结率(%)'],
            top: '0',
            x: '30%',
            itemStyle: {
              borderWidth: 2
            },
            textStyle: {
              color: 'rgba(0,0,0,.4)',
              fontSize: 12
            },
            itemWidth: 15,
            itemHeight: 8,
          }
        ],
        grid: {
          left: '20px',
          right: '20px',
          top: '70px',
          bottom: '30px',
          containLabel: true
        },
        toolbox: {
          show: true,
          orient: 'vertical',
          x: 'right',
          y: 'center'
        },
        xAxis: [
          {
            type: 'category',
            boundaryGap: true,
            axisTick: {
              show: false
            },
            data: ['西城区', '顺义区', '朝阳区', '大兴区', '海淀区', '昌平区', '西城区', '东城区', '丰台区'],
            axisLine: {
              show:false,
              lineStyle: {
                color: 'rgba(0, 0, 0, 0.2)'
              }
            },
            axisLabel: {
              interval: 0,
              color: 'rgba(0, 0, 0, 1)',
              fontSize: 14
            }
          }
        ],
        yAxis: [
          {
            type: 'value',
            axisTick: {
              show: false
            },
            axisLine: {
              show: true,
              lineStyle: {
                color: 'rgba(0, 0, 0, 0.2)'
              },
              symbol: ['none', 'arrow'],
              symbolSize: [5, 12],
              symbolOffset: [0, 10]
            },
            max: 100,
            axisLabel: {
              interval: 0,
              color: 'rgba(54,58,68,0.70)',
              fontSize: 14
            },
            splitLine: {
              show: true,
              lineStyle: {
                color: 'rgba(0, 0, 0, 0.2)',
                width: 1,
                type: 'solid'
              }
            }
          },
          {
            type: 'value',
            axisTick: {
              show: false
            },

            axisLine: {
              show: false,
              lineStyle: {
                color: 'rgba(207, 227, 252, 1)'
              },
              symbol: ['none', 'arrow'],
              symbolSize: [5, 12],
              symbolOffset: [0, 10]
            },
            min: 0,
            max: 100,
            axisLabel: {
              interval: 0,
              color: 'rgba(54,58,68,0.70)',
              fontSize: 14,
              formatter: '{value} %'
            },
            splitLine: {
              show: false,
              lineStyle: {
                color: 'rgba(39, 57, 75, 1)',
                width: 1,
                type: 'solid'
              }
            }
          }
        ],
        series: [
          {
            name: '办结率(%)',
            yAxisIndex: 1,
            type: 'line',
            smooth: true,
            showSymbol:false,
            areaStyle: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  color: 'rgba(32,128,247,.4)'
                },
                {
                  offset: 1,
                  color: 'rgba(32,128,247,0)'
                }
              ])
            },
            data: [30, 50, 53, 42, 66, 71, 20, 80, 20],
            symbol: 'circle',
            symbolSize: 8,
            itemStyle: {
              normal: {
                color: '#2080F7',
                borderColor: '#2080F7',
                lineStyle: {
                  color: '#2080F7'
                }
              }
            },
            
          },
          {
            z:2,
            type: 'bar',

            yAxisIndex: 0,
            name: '问题个数(个)',
            itemStyle: {
              normal: {
                 color: '#2080F7'
              }
            },
            barWidth: 24,
            data: [12, 23, 21, 32, 24, 35, 33, 22, 32]
          },
          {
            z:1,
            type: 'bar',
            barGap: '-100%',
            yAxisIndex: 0,
            name: '办结量(个)',
            itemStyle: {
              normal: {
                color: '#B2D4FF'
              }
            },
            barWidth: 24,
            data: [22, 33, 11, 12, 14, 15, 23, 42, 12]
          }
        ]
  }