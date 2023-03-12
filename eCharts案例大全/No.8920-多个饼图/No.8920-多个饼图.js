
let chart = [
  {
    name: '城区大队',
    value: 40.6 // 百分比
  },
  {
    name: '江东大队',
    value: 30 // 百分比
  },
  {
    name: '滨海大队',
    value: 40 // 百分比
  },
  {
    name: '江北大队',
    value: 60 // 百分比
  },
  {
    name: '滨海大队',
    value: 80 // 百分比
  },
  {
    name: '江北大队',
    value: 10.9 // 百分比
  }
]
let startAngle = [90, 270, 90, 270] // 起始角度
let centerX = [12.5, 37.5, 62.5, 87.5] // 每个圆心的x位置
let centerY = [50, 40, 50, 40] // 每个圆心的Y位置

let seriesAll = []
chart.forEach((item, i) => {
  if (i < 4) {
    let pie = {
      name: '',
      type: 'pie',
      z: 10,
      radius: ['20%', '22%'],
      center: [`${centerX[i]}%`, `${centerY[i]}%`],
      startAngle: startAngle[i],
      avoidLabelOverlap: false,
      data: [{
        value: chart[i].value,
        name: chart[i].name,
        tooltip: {
          trigger: 'item',
          formatter: '{b} : {c} ({d}%)'
        },
        label: {
          show: false
        },
        labelLine: {
          show: false
        },
        emphasis: {
          label: {
            show: false
          },
          labelLine: {
            show: false
          }
        }
      },
      {
        value: 100 - chart[i].value,
        name: '',
        itemStyle: {
          color: 'transparent'
        },
        tooltip: {
          show: false
        },
        label: {
          show: false
        },
        labelLine: {
          show: false
        },
        emphasis: {
          label: {
            show: false
          },
          labelLine: {
            show: false
          }
        }
      },
      {
      // 指示线
        name: chart[i].name,
        value: 0,
        tooltip: {
          show: false
        },
        itemStyle: {
          color: 'transparent'
        },
        labelLine: {
          show: true,
          length: 30,
          length2: 3,
          color: '#B1BCD2',
          lineStyle: {
            color: '#B1BCD2'
          }
        },
        label: {
          color: '#B1BCD2',
          fontSize: 12,
          position: 'outside'
        }
      }
      ]

    }
    let gauge = {
      name: '',
      z: -1,
      type: 'gauge',
      radius: '22%',
      center: [`${centerX[i]}%`, `${centerY[i]}%`],
      startAngle: 0,
      endAngle: 359.9,
      splitNumber: 30,
      title: {
        show: false
      },
      // 中间的百分比
      detail: {
        formatter: '{value}%',
        offsetCenter: [0, 0],
        color: '#fff',
        fontSize: 16,
        fontStyle: 'italic',
        fontFamily: 'DINPro-Light'
      },
      pointer: {
        show: false
      },
      axisTick: {
        show: false
      },
      axisLine: {
        show: false
      },
      splitLine: {
        show: true,
        length: 1,
        lineStyle: {
          width: 6,
          color: '#fff'
        }
      },
      axisLabel: {
        show: false
      },
      data: [{
        value: chart[i].value,
        name: chart[i].name
      }]
    }

    seriesAll.push(pie)
    seriesAll.push(gauge)
  }
})

option = {
    backgroundColor: '#000',
  color: '#fff',
  tooltip: {
    trigger: 'item',
    formatter: '{b} : {c} ({d}%)'
  },
  title: {
    left: '10%',
    bottom: '8%',
    text: [`{a|${chart[4].name}}{b|${chart[4].value}}{c|%}`, `{d|${chart[5].name}}{b|${chart[5].value}}{c|%}`].join(''),
    textStyle: {
      rich: {
        a: {
          color: '#fff',
          fontSize: 12,
          padding: [0, 10, 0, 0]
        },
        b: {
          color: '#fff',
          fontSize: 16,
          fontStyle: 'italic',
          fontFamily: 'DINPro-Light',
          padding: [0, 3, 0, 0]
        },
        c: {
          color: '#fff',
          fontSize: 12
        },
        d: {
          color: '#fff',
          fontSize: 12,
          padding: [0, 10, 0, 100]
        }
      }
    }
  },
  // calculable: true,
  series: seriesAll
  // [
  //   {
  //     name: '',
  //     type: 'pie',
  //     radius: ['35%', '37%'],
  //     center: ['12.5%', '50%'],
  //     startAngle: startAngle[0],
  //     data: [{
  //       value: chart[0].value,
  //       name: chart[0].name,
  //       label: {
  //         color: '#B1BCD2',
  //         fontSize: 12,
  //         position: 'indide'
  //       }
  //     },
  //     {
  //       value: 100 - chart[0].value,
  //       name: '',
  //       itemStyle: {
  //         color: 'transparent'
  //       }
  //     },
    // {
    //   // 指示线
    //     name: chart[0].name,
    //     value: 0,
    //     tooltip: {
    //       show: false
    //     },
    //     itemStyle: {
    //       color: 'transparent'
    //     },
    //     labelLine: {
    //       show: true,
    //       length: 30,
    //       length2: 3,
    //       color: '#B1BCD2',
    //       lineStyle: {
    //         color: '#B1BCD2'
    //       }
    //     },
    //     label: {
    //       color: '#B1BCD2',
    //       fontSize: 12,
    //       position: 'outside'
    //     }
    //   }
  //     ]
  //   },
  //   {
  //     name: '',
  //     z: -1,
  //     type: 'gauge',
  //     radius: '37%',
  //     center: ['12.5%', '50%'],
  //     startAngle: 0,
  //     endAngle: 359.9,
  //     splitNumber: 30,
  //     title: {
  //       show: false
  //     },
  //     // 中间的百分比
  //     detail: {
  //       formatter: '{value}%',
  //       offsetCenter: [0, 0],
  //       color: '#fff',
  //       fontSize: 16,
  //       fontStyle: 'italic',
  //       fontFamily: 'DINPro-Light'
  //     },
  //     pointer: {
  //       show: false
  //     },
  //     axisTick: {
  //       show: false
  //     },
  //     axisLine: {
  //       show: false
  //     },
  //     splitLine: {
  //       show: true,
  //       length: 1,
  //       lineStyle: {
  //         width: 6,
  //         color: '#fff'
  //       }
  //     },
  //     axisLabel: {
  //       show: false
  //     },
  //     data: [{
  //       value: chart[0].value,
  //       name: chart[0].name
  //     }]
  //   }
  // ]
}
