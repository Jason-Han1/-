
const dataList = [
  {
    value: 75,
    show: true,
    name: '汽车制造',
    itemStyle: {
      normal: {
        color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [
          {
            offset: 0,
            color: '#04B9BD'
          },
          {
            offset: 1,
            color: '#76F2F8'
          }
        ])
      }
    }
  },
  {
    value: 10,
    show: false,
    name: '',
    itemStyle: {
      normal: {
        color: 'transparent'
      }
    }
  },
  {
    value: 63,
    show: true,
    name: '智能感知',
    itemStyle: {
      normal: {
        color: '#5077E3'
      }
    }
  },
  {
    value: 10,
    show: false,
    name: '',
    itemStyle: {
      normal: {
        color: 'transparent'
      }
    }
  },
  {
    value: 43,
    show: true,
    name: '智能交互',
    itemStyle: {
      normal: {
        color: '#B4EC51'
      }
    }
  },
  {
    value: 10,
    show: false,
    name: '',
    itemStyle: {
      normal: {
        color: 'transparent'
      }
    }
  },
  {
    value: 30,
    show: true,
    name: '智能驾驶',
    itemStyle: {
      normal: {
        color: '#996ABA'
      }
    }
  },
  {
    value: 10,
    show: false,
    name: '',
    itemStyle: {
      normal: {
        color: 'transparent'
      }
    }
  },
  {
    value: 30,
    show: true,
    name: '智能传输',
    itemStyle: {
      normal: {
        color: '#FFBC6D'
      }
    }
  },
  {
    value: 10,
    show: false,
    name: '',
    itemStyle: {
      normal: {
        color: 'transparent'
      }
    }
  },
  {
    value: 40,
    show: true,
    name: '汽车后市场',
    itemStyle: {
      normal: {
        color: '#006DFB'
      }
    }
  },
  {
    value: 10,
    show: false,
    name: '',
    itemStyle: {
      normal: {
        color: 'transparent'
      }
    }
  },
]
option = {
  legend: {
    selectedMode: false, // 取消图例上的点击事件
    type: 'plain',
    orient: 'vertical',
    left: '63%',
    top: 'center',
    align: 'left',
    itemGap: 20,
    itemWidth: 12, // 设置宽度
    itemHeight: 7, // 设置高度
    symbolKeepAspect: false,
    textStyle: {
      color: '#000',
      rich: {
        name: {
          verticalAlign: 'right',
          align: 'left',
          width: 90,
          fontSize: 18,
          color: '#D8DDE3',
        },
        value: {
          align: 'left',
          width: 50,
          fontSize: 18,
          color: '#D8DDE3',
        }
      }
    },
    data: dataList.map(item => {
      if(item.show){
        return item.name
      }
    }),
    formatter: function(name) {
      if (dataList && dataList.length) {
        for (var i = 0; i < dataList.length; i++) {
          if (name === dataList[i].name) {
            return (
              '{name| ' + name + '}  ' + '{value| ' + dataList[i].value + '%}'
            )
          }
        }
      }
    }
  },
  series: [
    {
      name: '学历',
      type: 'pie',
      radius: ['50%', '70%'],
      center: ['30%', '50%'],
      hoverAnimation: false,
      avoidLabelOverlap: false,
      label: {
        show: false,
        position: 'center'
      },
      emphasis: {
        label: {
          show: true
        }
      },
      labelLine: {
        show: false
      },
      data: dataList
    }
  ]
}
