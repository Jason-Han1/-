    var dataStyle = {
      normal: {
        label: {
          show: true,
          formatter: '{a}: {c}'
        },
        labelLine: {
          show: true
        },
        shadowBlur: 40,
        shadowColor: 'rgba(40, 40, 40, 0.5)'
      }
    };
    var placeHolderStyle = {
      tooltip: {
        show: false
      },
      normal: {
        color: 'rgba(0,0,0,0)',
        label: {
          show: false
        },
        labelLine: {
          show: false
        }
      },
      emphasis: {
        color: 'rgba(0,0,0,0)',
        label: {
          show: false
        },
        labelLine: {
          show: false
        }
      }
    };
    
    option={
        color: ['greenyellow', 'red', 'orange'],
        tooltip: {
          show: true,
          formatter: '{a}: <br/> {c} ({d}%)'
        },
        legend: {
          top: '3%',
          left: '2%',
          itemHeight: 10,
          data: ['未使用', '已使用', '暂态'],
          textStyle: {
            color: '#000'
          },
          selectedMode: true,
          orient: 'vertical',
          itemGap: 5
        },
        series: [{
            name: '未使用',
            type: 'pie',
            clockWise: true,
            radius: [80, 100],
            itemStyle: dataStyle,
            hoverAnimation: true,
            data: [{
                value: 80,
                name: '未使用'
              },
              {
                value: 100,
                name: 'invisible',
                tooltip: {
                  show: false
                },
                itemStyle: placeHolderStyle
              }

            ]
          },
          {
            name: '已使用',
            type: 'pie',
            clockWise: true,
            radius: [60, 80],
            itemStyle: dataStyle,
            hoverAnimation: true,
            data: [{
                value: 30,
                name: '已使用'
              },
              {
                value: 100,
                name: 'invisible',
                tooltip: {
                  show: false
                },
                itemStyle: placeHolderStyle
              }
            ]
          },
          {
            name: '暂态',
            type: 'pie',
            clockWise: true,
            hoverAnimation: true,
            radius: [40, 60],
            itemStyle: dataStyle,
            data: [{
                value: 50,
                name: '暂态'
              },
              {
                value: 100,
                name: 'invisible',
                tooltip: {
                  show: false
                },
                itemStyle: placeHolderStyle
              }
            ]
          },
          {
            type: 'pie',
            clockWise: true,
            hoverAnimation: false,
            radius: [40, 40],
            label: {
              normal: {
                position: 'center'
              }
            },
            data: [{
              tooltip: {
                show: false
              },
              label: {
                normal: {
                  formatter: 'IP总数',
                  textStyle: {
                    color: '#666666',
                    fontSize: 15
                  }
                }
              }
            }, {
              tooltip: {
                show: false
              },
              label: {
                normal: {
                  formatter: '100',
                  textStyle: {
                    color: '#666666',
                    fontSize: 15
                  }
                }
              }
            }]
          }
        ]
      }