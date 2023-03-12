const resouredata = {
    "xdate": [1, 2, 3, 4, 5, 6, 7, 8],
    "windrData": [1, 2, 3, 4, 5, 6, 7, 8],
    "windsData": [1, 2, 3, 4, 5, 6, 7, 8],
    "temData": [1, 2, 3, 4, 5, 6, 7, 8],
    "rainData": [1, 2, 3, 4, 5, 6, 7, 8],
    "humData": [1, 2, 3, 4, 5, 6, 7, 8],
    "preData": [1, 2, 3, 4, 5, 6, 7, 8],
    "uvrData": [1, 2, 3, 4, 5, 6, 7, 8],
}

let colors = ['#5793f3', '#d14a61', '#675bba', '#01C2F9', '#fe8104', '#12e78c', '#dd3ee5']

option ={
        color: colors,
        title: {
          text: '气象数据七要素分析',
          x: 'center',
          textStyle: {
            align: 'center'
          },
          top: '2%'
        },
        axisPointer: {
          type: 'shadow',
          link: {
            xAxisIndex: 'all'
          }
        },
        legend: {
          data: ['温度', '降雨', '相对湿度', '风向', '风速', '大气压', '辐射强度'],
          top: ' 6%'
        },
        toolbox: {
          feature: {
            dataView: {
              show: true,
              readOnly: false
            },
            restore: {
              show: true
            },
            saveAsImage: {
              show: true
            }
          }
        },
        grid: [
          {
            left: '8%',
            top: '10%',
            width: '84%',
            height: '35%'
          },
          {
            left: '8%',
            top: '55%',
            width: '84%',
            height: '35%'
          }
        ],
        dataZoom: [
          {
            // type: 'slider',
            left: '8%',
            right: '8%',
            realtime: true
          }
        ],
        xAxis: [
          {
            type: 'value',
            gridIndex: 0
          },
          {
            type: 'value',
            gridIndex: 1
          }
        ],
        yAxis: [
          {
            type: 'value',
            name: '温度(°C)',
            position: 'left',
            offset: 0,
            axisTick: {
              lineStyle: {
                color: colors[0]
              },
              inside: true
            },
            nameTextStyle: {
              color: colors[0]
            },
            axisLabel: {
              color: colors[0]
            },
            splitLine: {
              show: false
            },
            gridIndex: 0
          },
          {
            type: 'value',
            name: '降雨(mm)',
            position: 'left',
            offset: 54,
            axisTick: {
              lineStyle: {
                color: colors[1]
              },
              inside: true
            },
            nameTextStyle: {
              color: colors[1]
            },
            axisLabel: {
              color: colors[1]
            },
            splitLine: {
              show: false
            },
            gridIndex: 0
          },
          {
            type: 'value',
            name: '相对湿度(%)',
            position: 'right',
            offset: 0,
            axisTick: {
              lineStyle: {
                color: colors[2]
              },
              inside: true
            },
            nameTextStyle: {
              color: colors[2]
            },
            axisLabel: {
              color: colors[2]
            },
            splitLine: {
              show: false
            },
            gridIndex: 0
          },
          {
            type: 'value',
            name: '风速(m/s)',
            position: 'left',
            offset: 0,
            axisTick: {
              lineStyle: {
                color: colors[3]
              },
              inside: true
            },
            nameTextStyle: {
              color: colors[3]
            },
            axisLabel: {
              color: colors[3]
            },
            splitLine: {
              show: false
            },
            gridIndex: 1
          },
          {
            type: 'value',
            name: '风向°',
            position: 'left',
            offset: 54,
            axisTick: {
              lineStyle: {
                color: colors[4]
              },
              inside: true
            },
            nameTextStyle: {
              color: colors[4]
            },
            axisLabel: {
              color: colors[4]
            },
            splitLine: {
              show: false
            },
            gridIndex: 1
          },
          {
            type: 'value',
            name: '大气压',
            offset: 0,
            position: 'right',
            axisTick: {
              lineStyle: {
                color: colors[5]
              },
              inside: true
            },
            nameTextStyle: {
              color: colors[5]
            },
            axisLabel: {
              color: colors[5]
            },
            splitLine: {
              show: false
            },
            gridIndex: 1
          },
          {
            type: 'value',
            name: '辐射强度(%)',
            position: 'right',
            offset: 54,
            axisTick: {
              lineStyle: {
                color: colors[6]
              },
              inside: true
            },
            nameTextStyle: {
              color: colors[6]
            },
            axisLabel: {
              color: colors[6]
            },
            splitLine: {
              show: false
            },
            gridIndex: 1
          }
        ],
        series: [
          {
            name: '温度',
            type: 'line',
            xAxisIndex: 0,
            yAxisIndex: 0,
            color: colors[0],
            encode: {
              x: 'xdate',
              y: 'temData'
            },
            showSymbol: false
          },
          {
            name: '降雨',
            type: 'line',
            xAxisIndex: 0,
            yAxisIndex: 1,
            barWidth: '50%',
            color: colors[1],
            showSymbol: false,
            encode: {
              x: 'xdate',
              y: 'rainData'
            }
          },
          {
            name: '相对湿度',
            type: 'line',
            step: false,
            xAxisIndex: 0,
            yAxisIndex: 2,
            color: colors[2],
            showSymbol: false,
            encode: {
              x: 'xdate',
              y: 'humData'
            }
          },
          {
            name: '风速',
            type: 'line',
            step: false,
            xAxisIndex: 1,
            yAxisIndex: 3,
            color: colors[3],
            showSymbol: false,
            encode: {
              x: 'xdate',
              y: 'windsData'
            }
          },
          {
            name: '风向',
            type: 'line',
            xAxisIndex: 1,
            yAxisIndex: 4,
            color: colors[4],
            barWidth: '50%',
            showSymbol: false,
            encode: {
              x: 'xdate',
              y: 'windrData'
            }
          },
          {
            name: '大气压',
            type: 'line',
            step: false,
            xAxisIndex: 1,
            yAxisIndex: 5,
            color: colors[5],
            showSymbol: false,
            encode: {
              x: 'xdate',
              y: 'preData'
            }
          },
          {
            name: '辐射强度',
            type: 'line',
            step: false,
            xAxisIndex: 1,
            yAxisIndex: 6,
            color: colors[6],
            showSymbol: false,
            encode: {
              x: 'xdate',
              y: 'uvrData'
            }
          }
        ],
        dataset: {
          source: resouredata
        }
      };