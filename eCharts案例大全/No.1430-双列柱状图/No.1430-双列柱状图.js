option = {
    backgroundColor:'#013A54',
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          },
          backgroundColor: '#013A54',
          borderColor: '#013A54',
          textStyle: {
            color: '#013A54',
          },
          borderWidth: 1,
          formatter: function (params) {
            let str = ''
            for (let i = 0; i < params.length; i++) {
              if (i == 0) {
                str += `${params[i].name}<br/>${params[i].seriesName.slice(0, params[i].seriesName.indexOf('('))}<br/><span>${params[0].data}</span>%<br/>`;
                continue;
              }
              str += `${params[i].seriesName.slice(0, params[i].seriesName.indexOf('('))}<br/><span>${params[i].data}</span>个<br/>`
            }
            return str
          }
        },
        legend: [
          {
            data: ['未签订合同项目'],
            top: '25',
            x: '10%',
            itemWidth: 14,
            borderColor: '#013A54',
            textStyle: {
              color: '#c1cadf',
              fontSize: 20
            }
          },
          {
            data: ['今年签订合同项目'],
            top: '25',
            x: '30%',
            itemWidth: 14,
            textStyle: {
              color: '#c1cadf',
              fontSize: 20
            }
          },
          {
            data: [],
            x: '20%',
            top: '25',
            itemStyle: {
              borderWidth: 2
            },
            textStyle: {
              color: '#c1cadf',
              fontSize: 20
            }
          }
        ],
        grid: {
          left: '20px',
          right: '20px',
          top: '50px',
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
            data: ['华云', '大有', '永耀', '恒创', '泰仑', '建元',  '光明',  '八达', '图盛',  '宏创', '海工',  '意能'],
            axisLine: {
              lineStyle: {
                color: '#ffffff'
              }
            },
            axisLabel: {
              interval: 0,
              color: '#FFFFFF',
              fontSize: 20
            }
          }
        ],
        yAxis: [
          {
            type: 'value',
            axisTick: {
              show: true
            },
            axisLine: {
              show: true,
              lineStyle: {
                color: 'rgba(120, 160, 236, 1)'
              },
              symbol: ['none', 'arrow'],
              symbolSize: [5, 12],
              symbolOffset: [0, ]
            },
            max: 50,
            axisLabel: {
              interval: 0,
              color: 'rgba(207, 227, 252, 1)'
            },
            splitLine: {
              show: false,
              lineStyle: {
                color: 'rgba(39, 57, 75, 1)',
                width: 1,
                type: 'solid'
              }
            }
          },
          {
            type: 'value',
            axisTick: {
              show: true
            },

            axisLine: {
              show: true,
              lineStyle: {
                color: 'rgba(207, 227, 252, 1)t'
              },
              symbol: ['none', 'arrow'],
              symbolSize: [5, 12],
              symbolOffset: [0, 10]
            },
            min: 0,
            max: 3000,
            axisLabel: {
              interval: 0,
              color: 'rgba(207, 227, 252, 1)',
              formatter: '{value} 个'
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
            name: '',
            yAxisIndex: 1,
            type: 'line',
            smooth: true,

            areaStyle: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  color: 'rgba(98, 227, 255, 1)'
                },
                {
                  offset: 1,
                  color: 'rgba(98, 227, 255, 0)'
                }
              ])
            },
            data: [],
            symbol: 'circle',
            symbolSize: 8,
            itemStyle: {
              normal: {
                color: '#FFFFFF',
                borderColor: 'rgba(0, 255, 240, 1)',
                lineStyle: {
                  color: 'rgba(0, 255, 240, 1)'
                }
              }
            }
          },
          {
            type: 'bar',

            yAxisIndex: 0,
            name: '未签订合同项目',
            itemStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(
                  0,
                  0,
                  0,
                  1,
                  [
                    {
                      offset: 0,
                      color: 'rgba(232, 98, 32, 1)'
                    },
                    {
                      offset: 1,
                      color: 'rgba(232, 98, 32, 0)'
                    }
                  ],
                  false
                )
              }
            },
            barWidth: 24,
            data: [12, 23, 21, 32, 24, 35, 33, 22, 32,24, 35, 33, 22, 32]
          },
          {
            type: 'bar',

            yAxisIndex: 0,
            name: '今年签订合同项目',
            itemStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(
                  0,
                  0,
                  0,
                  1,
                  [
                    {
                      offset: 0,
                      color: 'rgba(32, 178, 232, 1)'
                    },
                    {
                      offset: 1,
                      color: 'rgba(32, 178, 232, 0)'
                    }
                  ],
                  false
                )
              }
            },
            barWidth: 24,
            data: [22, 33, 11, 12, 14, 15, 23, 42, 12,11, 12, 14]
          }
        ]
  }