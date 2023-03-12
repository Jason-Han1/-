
        var option = ({
          title: {
            text: '雷达图',
            x: '20',
            y: '20',
            textStyle: {
              color: '#6b8ffc',
              fontFamily: 'Microsoft YaHei',
              fontSize: '16'
            }
          },
          tooltip: {
            trigger: 'item'
          },
          backgroundColor: '#152a5f',
          angleAxis: {
            interval: 1,
            type: 'category',
            data: [

              '盈利指数',
              '成长指数',
              '运营指数',
              '创新指数',
              '融资指数'

            ],
            z: 10,
            axisLine: {
              show: true,
              lineStyle: {
                color: '#00c7ff',
                width: 1,
                type: 'solid'
              }
            },
            axisLabel: {
              interval: 0,
              show: true,
              color: '#00c7ff',
              margin: 8,
              fontSize: 16
            }
          },
          radiusAxis: {
            min: 0,
            max: 100,
            interval: 20,
            axisLine: {
              show: true,
              lineStyle: {
                color: '#00c7ff',
                width: 1,
                type: 'solid'
              }
            },
            axisLabel: {
              formatter: '{value} %',
              show: true,
              padding: [0, 0, 20, 0],
              color: '#00c7ff',
              fontSize: 16
            },
            splitLine: {
              lineStyle: {
                color: '#00c7ff',
                width: 1,
                type: 'solid'
              }
            }
          },
          polar: {},
          series: [{
            type: 'bar',
            data: [
              {
                value: 55,
                itemStyle: {
                  normal: {
                    color: 'rgba(6,179,255,0.8)'
                  }
                }
              },
              {
                value: 88, 
                itemStyle: {
                  normal: {
                    color: 'rgba(108,21,244,0.8)'
                  }
                }
              },
              {
                value: 67,
                itemStyle: {
                  normal: {
                    color: 'rgba(234,102,81,0.8)'
                  }
                }
              },
              {
                value: 89,
                itemStyle: {
                  normal: {
                    color: 'rgba(0,194,175,0.8)'
                  }
                }
              },
                    {
                value: 89,
                itemStyle: {
                  normal: {
                    color: 'rgba(156,85,159,0.8)'
                  }
                }
              }
            ],
            animationDelay: function(idx) {
              return idx * 100
            },
            coordinateSystem: 'polar'
          }]
        })