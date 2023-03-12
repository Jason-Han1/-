option = {
          'tooltip': {
            trigger: 'axis',
            formatter: '{b}<br />活跃客户数:{c1}家',
            axisPointer: {
              type: 'cross',
              label: {
                backgroundColor: '#6a7985'
              }
            }
          },
          'legend': {
            show: false
          },
          'grid': {
            left: '0',
            right: '0',
            top: '15%',
            bottom: '0',
            containLabel: true
          },
          'xAxis': [{
            type: 'category',
            boundaryGap: true,
            splitLine: {
              show: true,
              lineStyle: {
                type: 'dashed',
                color: ['#32495b']
              }
            },
            axisLabel: {
              interval: 0,
              color: '#9eb5be',
              fontSize: 14
            },
            data: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月']
          }],
          'yAxis': [{
            name: '人数(家)',
            nameTextStyle: {
              color: '#5182a1',
              fontSize: 14
            },
            type: 'value',
            axisLabel: {
              color: '#5182a1',
              fontSize: 14
            },
            splitLine: {
              show: true,
              lineStyle: {
                color: ['#32495b']
              }
            }
          }],
          'series': [
            { // For shadow
              type: 'bar',
              itemStyle: {
                normal: {color: 'rgba(0,0,0,0.05)'}
              },
              barGap: '-100%',
              barCategoryGap: '0',
              data: [
                {
                  'name': '201701',
                  'value': 5000
                },
                {
                  'name': '201702',
                  'value': 5000
                },
                {
                  'name': '201703',
                  'value': 5000
                },
                {
                  'name': '201704',
                  'value': 5000
                },
                {
                  'name': '201705',
                  'value': 5000
                },
                {
                  'name': '201706',
                  'value': 5000
                },
                {
                  'name': '201707',
                  'value': 5000
                },
                {
                  'name': '201708',
                  'value': 5000
                },
                {
                  'name': '201709',
                  'value': 5000
                },
                {
                  'name': '2017010',
                  'value': 5000
                },
                {
                  'name': '2017011',
                  'value': 5000
                },
                {
                  'name': '2017012',
                  'value': 5000
                }
              ],
              animation: false
            },
            {
              name: '活跃客户数',
              type: 'line',
              smooth: true,
              stack: '总量',
              symbolSize: 10,
              showSymbol: true,
              label: {
                normal: {
                  show: true,
                  position: 'bottom',
                  color: '#fff',
                  fontSize: 14
                }
              },
              lineStyle: {
                normal: {
                  color: {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 1,
                    y2: 1,
                    colorStops: [{
                      offset: 0,
                      color: '#409eff'
                    }, {
                      offset: 1,
                      color: '#15e198'
                    }]
                  },
                  shadowColor: 'rgba(0, 0, 0, 0.6)',
                  shadowOffsetY: 4,
                  shadowBlur: 10,
                  width: 4
                }
              },
              markPoint: {
                symbol: 'roundRect', // pin
                symbolSize: [50, 35],
                symbolOffset: [0, '-80%'],
                label: {
                  normal: {
                    fontSize: 14
                  }
                },
                data: [{
                  'type': 'max',
                  'name': '最大值',
                  'label': {
                    'normal': {
                      'color': '#0e1425'
                    }
                  },
                  'itemStyle': {
                      'normal': {
                        'color': '#f0dc74'
                      }
                    }
                  }, {
                    'type': 'min',
                    'name': '最小值',
                    'itemStyle': {
                        'normal': {
                          'color': '#1265b1'
                        }
                      }
                  }]
              },
              areaStyle: {
                normal: {
                  color: {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [{
                      offset: 0.4,
                      color: '#1370c6'
                    }, {
                      offset: 1,
                      color: 'rgba(19, 112, 198, 0)'
                    }]
                  }
                }
              },
              data: [820, 888, 567, 788, 467, 435, 879, 435, 657, 456, 564, 345]
            }]
        }