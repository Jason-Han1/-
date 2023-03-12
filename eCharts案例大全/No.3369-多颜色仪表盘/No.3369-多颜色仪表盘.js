var colors = ["#01EC00", "#A0FF00", "#FFD800", "#CD8100", "#AC1500", "#AC0000"];

let value=0.8
    option ={
      backgroundColor: 'rgb(20,28,52)',
      series: [{
          type: 'gauge',
          startAngle: 210,
          endAngle: -30,
          radius: '60%',
          min: 0,
          max: 1,
          splitNumber: 5,
          axisLine: {
            show: false,
            lineStyle: {
              width: 15,
              color: [
               
                [0.1, new echarts.graphic.LinearGradient(
                  0, 1, 0, 0,
                  [{
                    offset: 0,
                    color: colors[5]
                  }, {
                    offset: 0.6,
                    color: colors[4]
                  }]
                )],
                [0.2, new echarts.graphic.LinearGradient(
                  0, 1, 0, 0,
                  [{
                    offset: 0,
                    color: colors[4]
                  }, {
                    offset: 0.6,
                    color: colors[3]
                  }]
                )],
                [0.3, new echarts.graphic.LinearGradient(
                  0, 1, 0, 0,
                  [{
                    offset: 0,
                    color: colors[3]
                  }, {
                    offset: 0.6,
                    color: colors[2]
                  }]
                )],
                [0.4, new echarts.graphic.LinearGradient(
                  0, 1, 0, 0,
                  [{
                    offset: 0,
                    color: colors[2]
                  }, {
                    offset: 0.8,
                    color: colors[1]
                  }]
                )],
                [0.5, new echarts.graphic.LinearGradient(
                  0, 1, 0, 0,
                  [{
                    offset: 0,
                    color: colors[1]
                  }, {
                    offset: 0.8,
                    color: colors[0]
                  }]
                )],
                [0.6, new echarts.graphic.LinearGradient(
                  0, 1, 0, 0,
                  [{
                    offset: 0,
                    color: colors[1]
                  }, {
                    offset: 0.6,
                    color: colors[0]
                  }]
                )],
                [0.7, new echarts.graphic.LinearGradient(
                  0, 1, 0, 0,
                  [{
                    offset: 0,
                    color: colors[2]
                  }, {
                    offset: 0.6,
                    color: colors[1]
                  }]
                )],
                [0.8, new echarts.graphic.LinearGradient(
                  0, 1, 0, 0,
                  [{
                    offset: 0,
                    color: colors[3]
                  }, {
                    offset: 0.6,
                    color: colors[2]
                  }]
                )],
                [0.9, new echarts.graphic.LinearGradient(
                  0, 1, 0, 0,
                  [{
                    offset: 0,
                    color: colors[4]
                  }, {
                    offset: 0.6,
                    color: colors[3]
                  }]
                )],
                [1, new echarts.graphic.LinearGradient(
                  0, 1, 0, 0,
                  [{
                    offset: 0,
                    color: colors[4]
                  }, {
                    offset: 0.6,
                    color: colors[5]
                  }]
                )]
              ]
            },

          },

          pointer: {
            icon: 'path://M12.8,0.7l12,40.1H0.7L12.8,0.7z',
            length: '60%',
            width: 2,//指针大小
            offsetCenter: [0, '30%'],
            itemStyle: {
              color: 'auto'
            }
          },
          axisTick: {
            show: false,
            length: 12,
            lineStyle: {
              color: 'auto',
              width: 2
            }
          },
          splitLine: {
            // show:false,
            length: 8,
            lineStyle: {
              color: "#6EA3FE",
              width: 0
            }
          },
          axisLabel: {
            color: '#464646',
            fontSize: 30,
            distance: 20,
            formatter: function (value) {
              if (value == 1) {
                return '100';
              } else if (value == 0.8) {
                return '80';
              } else if (value == 0.6) {
                return '60';
              } else if (value == 0.4) {
                return '40';
              } else if (value == 0.2) {
                return '20';
              } else if (value == 0) {
                return '0';
              }
            }
          },
          title: {
            offsetCenter: [0, '110%'],
            fontSize: 13
          },
          detail: {
            fontSize: 30,
            
            offsetCenter: [0, '40%'],
            valueAnimation: true,
            formatter: function (value) {
              return Math.round(value * 100) + '%';

              // return value + '%';
            },
            color: '#fff'
          },
          data: [{
            value: value,
            
          }]
        },
        {
          type: 'gauge',
          radius: '70%',
          startAngle: 210,
          endAngle: -30,
          min: 0,
          max: 100,
          title: {
            show: false
          },
          detail: {
            show: false
          },
          axisLine: {
            show: true,
            lineStyle: {
              width: 10,
              color: [
               
                [0.1, new echarts.graphic.LinearGradient(
                  0, 1, 0, 0,
                  [{
                    offset: 0,
                    color: colors[5]
                  }, {
                    offset: 0.6,
                    color: colors[4]
                  }]
                )],
                [0.2, new echarts.graphic.LinearGradient(
                  0, 1, 0, 0,
                  [{
                    offset: 0,
                    color: colors[4]
                  }, {
                    offset: 0.6,
                    color: colors[3]
                  }]
                )],
                [0.3, new echarts.graphic.LinearGradient(
                  0, 1, 0, 0,
                  [{
                    offset: 0,
                    color: colors[3]
                  }, {
                    offset: 0.6,
                    color: colors[2]
                  }]
                )],
                [0.4, new echarts.graphic.LinearGradient(
                  0, 1, 0, 0,
                  [{
                    offset: 0,
                    color: colors[2]
                  }, {
                    offset: 0.8,
                    color: colors[1]
                  }]
                )],
                [0.5, new echarts.graphic.LinearGradient(
                  0, 1, 0, 0,
                  [{
                    offset: 0,
                    color: colors[1]
                  }, {
                    offset: 0.8,
                    color: colors[0]
                  }]
                )],
                [0.6, new echarts.graphic.LinearGradient(
                  0, 1, 0, 0,
                  [{
                    offset: 0,
                    color: colors[1]
                  }, {
                    offset: 0.6,
                    color: colors[0]
                  }]
                )],
                [0.7, new echarts.graphic.LinearGradient(
                  0, 1, 0, 0,
                  [{
                    offset: 0,
                    color: colors[2]
                  }, {
                    offset: 0.6,
                    color: colors[1]
                  }]
                )],
                [0.8, new echarts.graphic.LinearGradient(
                  0, 1, 0, 0,
                  [{
                    offset: 0,
                    color: colors[3]
                  }, {
                    offset: 0.6,
                    color: colors[2]
                  }]
                )],
                [0.9, new echarts.graphic.LinearGradient(
                  0, 1, 0, 0,
                  [{
                    offset: 0,
                    color: colors[4]
                  }, {
                    offset: 0.6,
                    color: colors[3]
                  }]
                )],
                [1, new echarts.graphic.LinearGradient(
                  0, 1, 0, 0,
                  [{
                    offset: 0,
                    color: colors[4]
                  }, {
                    offset: 0.6,
                    color: colors[5]
                  }]
                )]
              ]
            },
          },
          axisTick: {
            show: false
          },
          splitLine: {
            show: false
          },
          axisLabel: {
            show: false
          },
          pointer: {
            show: false,
          },
        }
      ]
    };
