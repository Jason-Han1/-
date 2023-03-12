option = {
    backgroundColor:'rgba(19, 52, 89, .5)',
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
                str += `${params[i].name}<br/>${params[i].seriesName.slice(0, params[i].seriesName.indexOf('('))}<br/><span>${params[0].data}</span><br/>`;
                continue;
              }
              str += `${params[i].seriesName.slice(0, params[i].seriesName.indexOf('('))}<br/><span>${params[i].data}</span>个<br/>`
            }
            return str
          }
        },
        legend: [
          {
            data: ['温度'],
            top: '25',
            x: '10%',
            itemWidth: 14,
            borderColor: 'rgba(255, 192, 0, 1)',
            textStyle: {
              color: '#c1cadf',
              fontSize: 20
            }
          },
          {
            data: ['湿度'],
            top: '25',
            x: '30%',
            itemWidth: 14,
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
            data: ['涂料车间A区温、湿度', '乳胶漆车间温、湿度', '水包水3层温度', '空压机房', 'C区温、湿度'],
            axisLine: {
              lineStyle: {
                color: 'rgba(51, 176, 255, 1)'
              }
            },
            axisLabel: {
              interval: 0,
              color: 'rgba(207, 227, 252, 1)',
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
              symbolOffset: [0, 10]
            },
            max: 40,
            axisLabel: {
              interval: 0,
              color: 'rgba(207, 227, 252, 1)' ,
              formatter: '{value} (%RH)'

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
            max: 40,
            axisLabel: {
              interval: 0,
              color: 'rgba(207, 227, 252, 1)',
              formatter: '{value} (℃)'
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
            type: 'bar',
            yAxisIndex: 1,
            name: '温度',
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
            barWidth: 30,
            data: [12, 23, 21, 32, 24]
          },
          {
            type: 'bar',

            yAxisIndex: 0,
            name: '湿度',
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
            barWidth: 30,
            data: [22, 33, 11, 12, 14]
          }
        ]
  }