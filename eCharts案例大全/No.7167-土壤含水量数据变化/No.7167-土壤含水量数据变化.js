      const colors = ['#5793f3', '#d14a61', '#675bba','#01C2F9']
      
option ={
        color: colors,
        title: {
          text: '土壤含水量数据变化',
          x: 'center',
          textStyle: {
            align: 'center'
          },
          top: '3%'
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: { type: 'cross' }
        },
        grid: {
          left: '8%',
          top: ' 15%'
        },
        toolbox: {
          feature: {
            dataView: { show: true, readOnly: false },
            restore: { show: true },
            saveAsImage: { show: true }
          }
        },
        legend: {
          data: ['温度', '湿度','电导率','含水量'],
          top: ' 10%'
        },
        xAxis: [
          {
            type: 'category',
            axisTick: {
              alignWithLabel: true
            },
            data: ['00：00', '02:00', '04:00', '06:00', '08:00', '10:00', '12:00', '14:00', '16:00', '18:00', '20:00', '22:00', '23:59']
          }
        ],
        yAxis: [
          {
            type: 'value',
            name: '温度',
            min: -30,
            max: 45,
            position: 'left',
            axisLine: {
              lineStyle: {
                color: colors[0]
              }
            },
            axisLabel: {
              formatter: '{value} °C'
            }
          },
          {
            type: 'value',
            name: '电导率',
            min: 0,
            max: 45,
            position: 'left',
            offset: 60,
            axisLine: {
              lineStyle: {
                color: colors[1]
              }
            },
            axisLabel: {
              formatter: '{value}'
            }
          },
          {
            type: 'value',
            name: '湿度',
            min: 0,
            max: 100,
            position: 'right',
            offset: 0,
            axisLine: {
              lineStyle: {
                color: colors[2]
              }
            },
            axisLabel: {
              formatter: '{value} %'
            }
          },
          {
            type: 'value',
            name: '含水量',
            min: 0,
            max: 100,
            position: 'right',
            offset: 60,
            axisLine: {
              lineStyle: {
                color: colors[3]
              }
            },
            axisLabel: {
              formatter: '{value} %'
            }
          }

        ],
        series: [
          {
            name: '温度',
            type: 'line',
            yAxisIndex: 0,
            data: [0, 0, 0, 0, 0, -10, -20, 0, 0, 0, 0, 0, 0]
          },
          {
            name: '电导率',
            type: 'line',
            yAxisIndex: 1,
            data: [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 2, 0, 0]
          },
          {
            name: '湿度',
            type: 'line',
            yAxisIndex: 2,
            data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
          },
          {
            name: '含水量',
            type: 'line',
            yAxisIndex: 3,
            data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
          }
        ]
      };