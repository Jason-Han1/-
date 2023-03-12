var colorList = [{
    type: 'linear',
    x: 0,
    y: 0,
    x2: 0,
    y2: 1,
    colorStops: [{
            offset: 0,
            color: '#00feff' // 0% 处的颜色
        },
        {
            offset: 1,
            color: '#009dff' // 100% 处的颜色
        }
    ],
}, {
    type: 'linear',
    x: 0,
    y: 0,
    x2: 0,
    y2: 1,
    colorStops: [{
            offset: 0,
            color: '#00feff' // 0% 处的颜色
        },
        {
            offset: 1,
            color: '#009dff' // 100% 处的颜色
        }
    ],
}, {
    type: 'linear',
    x: 0,
    y: 0,
    x2: 0,
    y2: 1,
    colorStops: [{
            offset: 0,
            color: '#fffb89' // 0% 处的颜色
        },
        {
            offset: 1,
            color: '#ffbe0a' // 100% 处的颜色
        }
    ],
}, {
    type: 'linear',
    x: 0,
    y: 0,
    x2: 0,
    y2: 1,
    colorStops: [{
            offset: 0,
            color: '#fffb89' // 0% 处的颜色
        },
        {
            offset: 1,
            color: '#ffbe0a' // 100% 处的颜色
        }
    ],
}, {
    type: 'linear',
    x: 0,
    y: 0,
    x2: 0,
    y2: 1,
    colorStops: [{
            offset: 0,
            color: '#78f9d6' // 0% 处的颜色
        },
        {
            offset: 1,
            color: '#21bb71' // 100% 处的颜色
        }
    ],
}, {
    type: 'linear',
    x: 0,
    y: 0,
    x2: 0,
    y2: 1,
    colorStops: [{
            offset: 0,
            color: '#78f9d6' // 0% 处的颜色
        },
        {
            offset: 1,
            color: '#21bb71' // 100% 处的颜色
        }
    ],
}, ]
const dataList = [
  {
    value: 75,
    show: true,
    name: '长时间过载',
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
    name: '过载',
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
    name: '重载',
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
        itemStyle: {
            normal: {
                color: function(params) {
                    return colorList[params.dataIndex]
                }
            }
        },
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
