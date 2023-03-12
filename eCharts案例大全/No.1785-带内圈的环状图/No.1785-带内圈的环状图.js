
const dataList = [
  {
    value: 75,
    show: true,
    name: '汽车制造',
    itemStyle: {
      normal: {
        color: new echarts.graphic.LinearGradient(1, 1, 0, 0, [
          {
            offset: 0,
            color: 'rgba(61, 181, 204, 1)'
          },
          {
            offset: 1,
            color: 'rgba(61, 181, 204, 0)'
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
        color: new echarts.graphic.LinearGradient(1, 1, 0, 0, [
          {
            offset: 0,
            color: 'rgba(255, 143, 143, 0)'
          },
          {
            offset: 1,
            color: 'rgba(255, 143, 143, 1)'
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
    value: 30,
    show: true,
    name: '智能驾驶',
    itemStyle: {
      normal: {
        color: new echarts.graphic.LinearGradient(1, 1, 0, 0, [
          {
            offset: 0,
            color: 'rgba(53, 183, 250, 0)'
          },
          {
            offset: 1,
            color: 'rgba(53, 183, 250, 1)'
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
    value: 30,
    show: true,
    name: '智能传输',
    itemStyle: {
      normal: {
        color: new echarts.graphic.LinearGradient(0, 1, 1, 0, [
          {
            offset: 0,
            color: 'rgba(49, 108, 239, 0)'
          },
          {
            offset: 1,
            color: 'rgba(49, 108, 239, 1)'
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
]
function Pie() {
    let dataArr = [];
    for (var i = 0; i < 150; i++) {
        if (i % 2 === 0) {
            dataArr.push({
                name: (i + 1).toString(),
                value: 5,
                itemStyle: {
                    normal: {
                        color: "#027383",
                        borderWidth: 0,
                        borderColor: "rgba(0,0,0,0)"
                    }
                }
            })
        } else {
            dataArr.push({
                name: (i + 1).toString(),
                value: 5,
                itemStyle: {
                    normal: {
                        color: "rgba(0,0,0,0)",
                        borderWidth: 0,
                        borderColor: "rgba(0,0,0,0)"
                    }
                }
            })
        }
    }
    return dataArr
}

option = {
  backgroundColor: '#000',
  legend: {
    selectedMode: false, // 取消图例上的点击事件
    icon: "circle",
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
          fontSize: 14,
          color: '#FFFFFF',
        },
        value: {
          align: 'left',
          fontSize: 14,
          color: '#B0E3FF',
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
              '{name| ' + name + '}  ' + '{value| ' + (dataList[i].value) + '%}'
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
      radius: [116, 126],
      center: ['50%', '50%'],
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
    },
        {
            type: 'pie',
            radius: ['100', '105'],
            label: {
                show: false
            },
            data: Pie()
        },
  ]
}
