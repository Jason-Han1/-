var option = {
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          right: 0,
          top: '20%',
          icon: 'rect',
          itemWidth: 16,
          itemHeight: 16,
          itemGap: 32,
          textStyle: {
            fontFamily: 'PingFangSC-Semibold',
            fontSize: 16,
            color: '#FFFFFF',
            padding: [0, 10]
          },
          data: ['爱你', '么么', '哒哒', '嘿嘿']
        },
        grid: {
          left: '1%',
          right: '2%',
          bottom: '30%',
          top: '30%',
          containLabel: true
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          splitLine: {
            show: true,
            lineStyle: {
              color: ['#65AAFF', '#65AAFF'],
              opacity: 0.1
            }
          },
          axisLine: {
            lineStyle: {
              color: '#3376C4'
            }
          },
          axisLabel: {
            color: '#A4D5FF'
          },
          axisTick: {
            show: false
          },
          data: ['1:00', '2:00', '3:00', '4:00', '5:00', '6:00', '7:00', '8:00', '9:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00', '24:00']
        },
        yAxis: {
          type: 'value',
          axisTick: {
            show: false
          },
          splitLine: {
            show: true,
            lineStyle: {
              color: ['#65AAFF', '#65AAFF'],
              opacity: 0.1
            }
          },
          axisLabel: {
            color: '#A4D5FF'
          },
          axisLine: {
            lineStyle: {
              color: '#3376C4'
            }
          }
        },
        series: [
          {
            name: '爱你',
            type: 'line',
            color: '#FF7889',
            symbol: 'react',
            symbolSize: 9,
            areaStyle: {
              color: {
                type: 'line',
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [{
                  offset: 0, color: 'rgba(255,120,136,0.50)'
                }, {
                  offset: 1, color: 'rgba(255,120,136,0.01)'
                }],
                global: false
              }
            },
            data: [10, 20, 30, 40, 50, 60, 70, 80, 96, 56, 50, 53, 42, 32, 31, 29, 30, 56, 29, 39, 56, 78, 32, 30]
          },
          {
            name: '么么',
            type: 'line',
            color: '#F5A623',
            symbolSize: 9,
            symbol: 'react',
            areaStyle: {
              color: {
                type: 'line',
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [{
                  offset: 0, color: 'rgba(245,166,35,0.50)'
                }, {
                  offset: 1, color: 'rgba(245,166,35,0.01)'
                }],
                global: false
              }
            },
            data: [22, 18, 19, 24, 29, 33, 30, 56, 90, 70, 10, 30, 96, 20, 50, 36, 26, 25, 27, 29, 30, 56, 29, 30]
          },
          {
            name: '哒哒',
            type: 'line',
            color: '#169E9E',
            symbolSize: 9,
            symbol: 'react',
            areaStyle: {
              color: {
                type: 'line',
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [{
                  offset: 0, color: 'rgba(80,227,194,0.50)'
                }, {
                  offset: 1, color: 'rgba(80,227,194,0.01)'
                }],
                global: false
              }
            },
            data: [15, 22, 20, 54, 90, 30, 40, 22, 18, 19, 24, 29, 33, 30, 53, 90, 60, 10, 50, 66, 89, 69, 27, 20]
          },
          {
            name: '嘿嘿',
            type: 'line',
            color: '#4A90E2',
            symbol: 'react',
            symbolSize: 9,
            areaStyle: {
              color: {
                type: 'line',
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [{
                  offset: 0, color: 'rgba(74,144,226,0.50)'
                }, {
                  offset: 1, color: 'rgba(74,144,226,0.01)'
                }],
                global: false
              }
            },
            data: [32, 33, 30, 34, 90, 30, 20, 12, 10, 56, 60, 30, 10, 30, 66, 89, 90, 80, 36, 25, 27, 29, 30, 10]
          }
        ]
      };