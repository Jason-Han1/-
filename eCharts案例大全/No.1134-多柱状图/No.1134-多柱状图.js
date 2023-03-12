option = {
    backgroundColor: 'rgba(0, 0, 0, .6)',
        tooltip: {
          trigger: 'axis',
        },
        grid: {
          left: '6%',
          top: '16%',
          right: '5%',
          bottom: '18%'
        },
        xAxis: [
          {
            type: 'category',
            boundaryGap: true,
            data: ['社会发展', '劳动人事', '文化休闲', '交通运输', '公共安全', '财税金融', '企业服务'],
            axisPointer: {
              type: 'shadow'
            },
            axisLine: {
              show: false
            },
            axisTick: {
              show: false
            },
            axisLabel: {
              color: '#fff',
              fontSize: 14,
              margin: 12
            }
          }
        ],
        yAxis: [
          {
            type: 'value',
            name: '数量(个)',
            nameTextStyle: {
              color: '#fff',
              fontSize: 14
            },
            nameGap: 20,
            axisLine: {
              show: true,
              lineStyle: {
                color: 'rgba(19,77,126,1)'
              }
            },
            splitLine: {
              lineStyle: {
                color: 'rgba(19, 77, 126, 1)',
                type: 'dashed'
              }
            },
            axisLabel: {
              color: '#fff',
              fontSize: 14
            }
          }
        ],
        series: [
          {
            "type": "pictorialBar",
            symbol: 'rect',
            "symbolSize": [100, '100%'],
            "symbolOffset": [0, 0],
            z: 1,
            "symbolPosition": "end",
            itemStyle: {
              color: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [{
                  offset: 0, color: 'rgba(20,85,161, .4)'
                }, {
                  offset: 1, color: 'rgba(20,85,161, 0)'
                }],
                global: false
              }
            },
            tooltip: {
              show: false,
            },
            "data": [1500, 1500, 1500, 1500, 1500, 1500, 1500]
          },
          {
            name: '数据集',
            type: 'bar',
            stack: "数据集",
            barWidth: '20',
            barGap: '100%',
            itemStyle: {
              color: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [{
                  offset: 0, color: 'rgba(70,146,255,1)'
                }, {
                  offset: 1, color: 'rgba(0,59,108,1)'
                }],
                global: false
              }
            },
            data: [1000, 1100, 800, 900, 999, 888, 1010]
          },
          {
            type: 'bar',
            stack: "数据集",
            itemStyle: {
              color: 'rgba(255,255,255,0.6)'
            },
            tooltip: {
              show: false,
            },
            data: [10, 10, 10, 10, 10, 10, 10]
          },
          {
            "type": "pictorialBar",
            symbol: 'rect',
            "symbolSize": [1, '100%'],
            "symbolOffset": [-20, 0],
            z: 10,
            "symbolPosition": "end",
            itemStyle: {
              color: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [{
                  offset: 0, color: 'rgba(255,255,255, .6)'
                }, {
                  offset: 1, color: 'rgba(255,255,255, .2)'
                }],
                global: false
              },
            },
            tooltip: {
              show: false,
            },
            "data": [1000, 1100, 800, 900, 999, 888, 1010]
          },
          {
            name: 'API',
            type: 'bar',
            stack: "API",
            barWidth: '20',
            itemStyle: {
              color: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [{
                  offset: 0, color: 'rgba(66,231,247,1)'
                }, {
                  offset: 1, color: 'rgba(0,59,108,1)'
                }],
                global: false
              }
            },
            data: [1000, 1100, 800, 900, 888, 987, 1090]
          },
          {
            type: 'bar',
            stack: "API",
            itemStyle: {
              color: 'rgba(255,255,255,0.6)'
            },
            tooltip: {
              show: false,
            },
            data: [10, 10, 10, 10, 10, 10, 10]
          },
          {
            "type": "pictorialBar",
            symbol: 'rect',
            "symbolSize": [1, '100%'],
            "symbolOffset": [20, 0],
            z: 10,
            "symbolPosition": "end",
            itemStyle: {
              color: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [{
                  offset: 0, color: 'rgba(255,255,255, .6)'
                }, {
                  offset: 1, color: 'rgba(255,255,255, .2)'
                }],
                global: false
              },
            },
            tooltip: {
              show: false,
            },
            "data": [1000, 1100, 800, 900, 888, 987, 1090]
          },
          {
            "type": "pictorialBar",
            symbol: 'rect',
            "symbolSize": [40, 1],
            "symbolOffset": [0, 0],
            z: 10,
            "symbolPosition": "start",
            itemStyle: {
              color: 'rgba(255,255,255, 0.6)',
            },
            tooltip: {
              show: false,
            },
            "data": [1, 1, 1, 1, 1, 1, 1]
          }
        ]
      };