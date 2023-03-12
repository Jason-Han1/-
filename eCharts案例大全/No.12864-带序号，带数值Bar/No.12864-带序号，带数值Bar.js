const alarmTop = [100.24, 90.24, 80.42, 70.42, 52.24]
const alarmTop1 = ['FaceBook', 'Twitter', 'Youtube', 'Baidu', 'Alibaba']
const data1 = alarmTop.reverse()
const listNum = []
data1.map((item, index) => {
  let bgColor = '#3B95FF'
  if (index === 0) {
    bgColor = '#F2497D'
  } else if (index === 1) {
    bgColor = '#FF6D4A'
  } else if (index === 2) {
    bgColor = '#00D194'
  }
  listNum.push({
    value: index + 1,
    textStyle: {
      rich: {
        a: {
          color: '#fff',
          width: 20,
          height: 20,
          align: 'center',
          backgroundColor: bgColor,
          lineHeight: 20,
          borderRadius: 10
        }
      }
    }
  })
})

listNum.reverse()
const data1Max = Math.max.apply(Math, data1)
const data2 = []
for (let i = 0; i < data1.length; i++) {
  data2.push(data1Max * 1.2)
}
option = {
  backgroundColor: '#FFFFFF',
  grid: {
    left: '5%',
    top: '5%',
    bottom: '3%',
    right: '3%',
    containLabel: true
  },
  legend: {
    show: false
  },
  xAxis: {
    splitLine: {
      show: false
    },
    axisTick: {
      show: false
    },
    axisLine: {
      show: false
    },
    axisLabel: {
      show: false
    }
  },
  yAxis: [{
    splitLine: {
      show: false
    },
    axisTick: {
      show: false
    },
    axisLine: {
      show: false
    },
    offset: 80,
    // 标签
    axisLabel: {
      color: '#323c47',
      fontSize: 12,
      align: 'left'
    },
    data: alarmTop1.reverse()
    // data:[]
  }, {
    position: 'left',
    offset: 90,
    backgroundColor: '#f24a7d',
    splitLine: {
      show: false
    },
    axisTick: {
      show: false
    },
    axisLine: {
      show: false
    },
    axisLabel: {
      color: '#323c47',
      fontSize: 12,
      formatter: function(d, i) {
        return '{a|' + d + '}'
      }
    },
    // 左边序号
    data: listNum
  }],
  series: [{
    type: 'bar',
    barGap: '-100%',
    barWidth: 8,
    itemStyle: {
      color: {
        type: 'linear',
        x: 0,
        y: 0,
        x2: 1,
        y2: 0,
        colorStops: [{
          offset: 0, color: '#1A79FF'
        }, {
          offset: 1, color: '#39B1FF'
        }],
        globalCoord: false
      },
      shadowColor: '#AEDDFF',
      shadowBlur: 1,
      shadowOffsetX: 1,
      shadowOffsetY: 1,
      barBorderRadius: [0, 5, 5, 0]
    },
    z: -10,
    data: data1
  }, {
    type: 'bar',
    barGap: '-100%',
    barWidth: 10,
    itemStyle: {
      normal: {
        color: '#ffffff',
        borderColor: 'rgba(255,255,255,0.5)',
        borderWidth: 2,
        shadowColor: '#ffffff',
        shadowBlur: 4,
        barBorderRadius: 12
      }
    },
    label: {
      normal: {
        show: true,
        position: 'right',
        fontSize: 12,
        color: '#308fff',
        offset: [30, 0],
        formatter: function(params) {
          return data1[params.dataIndex] + 'TB'
        }
      }
    },
    z: -12,
    data: data2
  }]
}