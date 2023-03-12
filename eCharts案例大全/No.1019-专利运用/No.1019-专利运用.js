option = {
    backgroundColor:'',
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          },
          backgroundColor: 'rgba(9, 24, 48, 0.5)',
          borderColor: 'rgba(75, 253, 238, 0.4)',
          textStyle: {
            color: '#CFE3FC',
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
            data: ['专利数'],
            top: '25',
            x: '30%',
            itemWidth: 14,
            textStyle: {
              color: '#c1cadf',
              fontSize: 16
            }
          },
          {
            data: ['同比'],
            x: '50%',
            top: '25',
            itemStyle: {
              borderWidth: 2
            },
            textStyle: {
              color: '#c1cadf',
              fontSize: 16
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
            data: ['2012', '2013', '2014', '2014', '2016', '2017', '2018', '2019', '2020','2021'],
            axisLine: {
              lineStyle: {
                color: 'rgba(51, 176, 255, 1)'
              }
            },
            axisLabel: {
              interval: 0,
              color: 'rgba(207, 227, 252, 1)',
              fontSize: 16
            }
          }
        ],
        yAxis: [
          {
            type: 'value',
            name: "单位:件",
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
              symbolOffset: [0, 10]
            },
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
            name: "百分数",
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
            max: 102,
            axisLabel: {
              interval: 0,
              color: 'rgba(207, 227, 252, 1)',
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
            name: '同比',
            yAxisIndex: 1,
            type: 'line',
            smooth: false,

            
            data: [30, 50, 53, 42, 66, 71, 20, 80, 95,80],
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
            name: '专利数',
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
            data: [220, 330, 110, 120, 140, 150, 230, 412, 420,483]
          }
        ]
  }