
const dataList = [
  {
    value: 10,
    show: true,
    name: '周一',
    itemStyle: {
      normal: {
        color:  'rgb(244,189,37)',
      }
    }
  },
  {
    value: 0.5,
    show: false,
    name: '',
    itemStyle: {
      normal: {
        color: 'transparent'
      }
    }
  },
  {
    value: 10,
    show: true,
    name: '周二',
    itemStyle: {
      normal: {
        color: 'rgb(2,230,215)'
      }
    }
  },
  {
    value: 0.5,
    show: false,
    name: '',
    itemStyle: {
      normal: {
        color: 'transparent'
      }
    }
  },
  {
    value: 10,
    show: true,
    name: '周三',
    itemStyle: {
      normal: {
        color: 'rgb(29,200,236)'
      }
    }
  },
  {
    value:0.5,
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
    name: '周四',
    itemStyle: {
      normal: {
        color: 'rgb(92,92,34)'
      }
    }
  },
  {
    value: 0.5,
    show: false,
    name: '',
    itemStyle: {
      normal: {
        color: 'transparent'
      }
    }
  },
  {
    value: 20,
    show: true,
    name: '周五',
    itemStyle: {
      normal: {
        color: 'rgb(19,113,95)'
      }
    }
  },
  {
    value: 0.5,
    show: false,
    name: '',
    itemStyle: {
      normal: {
        color: 'transparent'
      }
    }
  },
  {
    value: 10,
    show: true,
    name: '周六',
    itemStyle: {
      normal: {
        color: 'rgb(30,105,100)'
      }
    }
  },
  {
    value: 0.5,
    show: false,
    name: '',
    itemStyle: {
      normal: {
        color: 'transparent'
      }
    }
  },
   {
    value: 10,
    show: true,
    name: '周日',
    itemStyle: {
      normal: {
        color: 'rgb(64,94,76)'
      }
    }
  },
  {
    value: 2,
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
   tooltip: {
    trigger: 'item',
  },
  legend: {
    selectedMode: true, // 取消图例上的点击事件
    type: 'plain',
    orient: 'vertical',
    left: '18%',
    top: '60%',
    align: 'left',
    itemGap: 20,
    itemWidth: 12, // 设置宽度
    itemHeight: 12, // 设置高度
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
      // name: '学历',
      type: 'pie',
      radius: ['50%', '53%'],
      center: ['30%', '30%'],
      hoverAnimation: false,
      avoidLabelOverlap: false,
      label: {
        show: false,
        // position: 'center'
      },
      emphasis: {
        label: {
          show: false
        }
      },
      labelLine: {
        show: false
      },
      data: dataList
    }
  ]
}
