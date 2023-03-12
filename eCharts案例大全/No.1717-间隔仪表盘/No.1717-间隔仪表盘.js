let colorList = [
    '#02ddfd',
    '#1eec80',
    '#ffc324',
    '#f44d4d',
    '#f67347',
    '#0183ff',
    '#9c28fe',
    '#fff224',
    '#5125f3'
]

option = {
    backgroundColor: '#041837',
    tooltip: {
      show: false
    },
    series: [
      // 仪表盘图，做中间刻度线
      {
        type: 'gauge',
        name: '',
        radius: '62%',
        startAngle: '0',
        endAngle: '-359.99',
        splitNumber: '50',
        pointer: {
          show: false
        },
        title: {
          show: false
        },
        detail: {
          show: false
        },
        data: [],
        axisLine: {
          lineStyle: {
            color: '#115EA6',
            width: 10,
            opacity: 0.1
          }
        },
        axisTick: {
          show: false
        },
        splitLine: {
          show: true,
          length: 6,
          lineStyle: {
            color: '#243C64',
            width: 4,
            type: 'solid'
          }
        },
        axisLabel: {
          show: false
        }
      },
      // 外层环形图，展示详细占比
      {
        name: 'pie',
        type: 'pie',
        clockWise: true,
        startAngle: -270,
        radius: ['67%', '80%'],
        hoverAnimation: false,
        center: ['50%', '50%'],
        label: {
          show: false
        },
        lableLine: {
          normal: {
            show: false
          },
          emphasis: {
            show: true
          }
        },
        data: [
    {
        "name": "XX区",
        "value": 29,
        "itemStyle": {
            "normal": {
                "color": "#02ddfd"
            }
        }
    },
    {
        "name": "XX区",
        "value": 179,
        "itemStyle": {
            "normal": {
                "color": "#1eec80"
            }
        }
    },
    {
        "name": "XX区",
        "value": 64,
        "itemStyle": {
            "normal": {
                "color": "#ffc324"
            }
        }
    },
    {
        "name": "XX区",
        "value": 62,
        "itemStyle": {
            "normal": {
                "color": "#f44d4d"
            }
        }
    },
    {
        "name": "XX区",
        "value": 64,
        "itemStyle": {
            "normal": {
                "color": "#f67347"
            }
        }
    },
    {
        "name": "XX区",
        "value": 66,
        "itemStyle": {
            "normal": {
                "color": "#0183ff"
            }
        }
    },
    {
        "name": "XX区",
        "value": 12,
        "itemStyle": {
            "normal": {
                "color": "#9c28fe"
            }
        }
    },
    {
        "name": "XX区",
        "value": 39,
        "itemStyle": {
            "normal": {
                "color": "#fff224"
            }
        }
    },
    {
        "name": "XX区",
        "value": 21,
        "itemStyle": {
            "normal": {
                "color": "#5125f3"
            }
        }
    }
],
        itemStyle: {
          normal: {
            borderWidth: 6,
            borderColor: '#041837'
          }
        }
      }
    ]
  };