const color = ['#48FFBE', '#F8FF48', '#6735FE', '#FF4848']
const colorInside = ['rgba(72, 255, 190, .2)', 'rgba(248, 255, 72, .2)', 'rgba(72, 135, 255, .2)', 'rgba(255, 72, 72, .2)']

option = {
    title: {
        text: 100,
        subtext: '🐼总数',
        x: 'center',
        y: 'center',
        itemGap: 1,
        textStyle: {
            color: '#fff',
            fontSize: 32,
            fontWeight: 550
        },
        subtextStyle: {
            color: '#EAEFF5',
            fontSize: 14,
            fontWeight: 400
        }
    },
    tooltip: {
      show: true,
      backgroundColor: 'rgba(21, 14, 20, .8)',
      textStyle: {
        color: '#fff'
      },
      formatter: (params) => {
        return params.marker + params.name + ': ' + params.percent + '%'
      }
    },
    angleAxis: {
      max: 100,
      clockwise: false,
      axisLine: {
        show: false
      },
      axisTick: {
        show: false
      },
      axisLabel: {
        show: false
      },
      splitLine: {
        show: false
      }
    },
    radiusAxis: {
      type: 'category',
      axisLine: {
        show: false
      },
      axisTick: {
        show: false
      },
      axisLabel: {
        show: false
      },
      splitLine: {
        show: false
      }
    },
    polar: {
      center: ['50%', '50%'],
      radius: '100%'
    },
    series: [{
      name: '虚线',
      type: 'pie',
      silent: true,
      radius: ['41.1%', '41.1001%'],
      center: ['50%', '50%'],
      startAngle: 225,
      labelLine: {
        normal: {
          show: false
        }
      },
      data: [{
        value: 0,
        itemStyle: {
          borderColor: '#979797',
          borderWidth: 1,
          borderType: 'dashed'
        }
      }]
    }, {
      name: '总🐼数',
      type: 'pie',
      radius: ['36%', '30%'],
      center: ['50%', '50%'],
      itemStyle: {
        normal: {
          color: (params) => color[params.dataIndex]
        }
      },
      data: [
          {
            "name": "男熊猫",
            "value": 30,
          },
          {
            "name": "女熊猫",
            "value": 20,
          }
        ],
      hoverAnimation: false,
      label: {
        normal: {
          show: false
        }
      }
    }, {
      name: '总🐼阴影',
      type: 'pie',
      radius: ['36%', '41%'],
      center: ['50%', '50%'],
      itemStyle: {
        normal: {
          color: (params) => colorInside[params.dataIndex]
        }
      },
      data: [
          {
            "name": "男熊猫",
            "value": 30,
          },
          {
            "name": "女熊猫",
            "value": 20,
          }
        ],
      hoverAnimation: false,
      label: {
        normal: {
          show: false
        }
      }
    }, {
      name: '出入🐼数',
      type: 'pie',
      radius: ['46%', '51%'],
      center: ['50%', '50%'],
      itemStyle: {
        normal: {
          color: (params) => color.concat().slice(2)[params.dataIndex]
        }
      },
      data:  [
          {
            "name": "进入熊猫",
            "value": 30,
          },
          {
            "name": "离开熊猫",
            "value": 4,
          }
        ],
      hoverAnimation: false,
      label: {
        normal: {
          show: false
        }
      }
    }, {
      type: 'pie',
      name: '出入🐼阴影',
      radius: ['41%', '46%'],
      center: ['50%', '50%'],
      itemStyle: {
        normal: {
          color: (params) => colorInside.concat().slice(2)[params.dataIndex]
        }
      },
      data:  [
          {
            "name": "进入熊猫",
            "value": 30,
          },
          {
            "name": "离开熊猫",
            "value": 4,
          }
        ],
      hoverAnimation: false,
      label: {
        normal: {
          show: false
        }
      }
    }]
};
