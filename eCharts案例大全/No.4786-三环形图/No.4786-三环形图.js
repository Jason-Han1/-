const color = ['rgb(6,175,255)', 'rgb(255,210,5)', 'rgb(14,238,93)']
const chartData = [{
  name: '1',
  value: 14
},
{
  name: '1',
  value: 28
},
{
  name: '1',
  value: 42
}]
const arrName = []
const arrValue = []
let sum = 0
const pieSeries = []
const lineYAxis = []
const seriesObj = []
chartData.forEach((v, i) => {
  arrName.push(v.name)
  arrValue.push(v.value)
  sum = sum + v.value
})
chartData.forEach((v, i) => {
  pieSeries.push({
    type: 'pie',
    clockWise: false,
    hoverAnimation: false,
    radius: [73 - i * 15 + '%', 68 - i * 15 + '%'],
    label: {
      show: false
    },
    data: [
      {
        value: v.value,
        name: v.name
      },
      {
        value: sum - v.value,
        name: '',
        itemStyle: {
          color: 'rgba(0,0,0,0)'
        }
      }
    ]
  })
  pieSeries.push({
    name: '',
    type: 'pie',
    silent: true,
    z: 1,
    clockWise: false, // 顺时加载
    hoverAnimation: true, // 鼠标移入变大
    radius: [71 - i * 15 + '%', 69 - i * 15 + '%'],
    label: {
      show: false
    },
    itemStyle: {
      label: {
        show: false
      },
      labelLine: {
        show: false
      },
      borderWidth: 5
    },
    data: [
      {
        value: 100,
        itemStyle: {
          color: '#1A7699',
          borderWidth: 0
        },
        tooltip: {
          show: false
        },
        hoverAnimation: false
      }
    ]
  })
  v.percent = ((v.value / sum) * 100).toFixed(1) + '%'
  lineYAxis.push({
    value: i,
    textStyle: {
      rich: {
        circle: {
          color: color[i],
          padding: [0, 5]
        }
      }
    }
  })
})
option = {
  color: color,
  yAxis: [
    {
      type: 'category',
      inverse: true,
      axisLine: {
        show: false
      },
      axisTick: {
        show: false
      },
      axisLabel: {
        interval: 0,
        inside: true,
        textStyle: {
          color: '#333',
          fontSize: 26,
          rich: {
            name: {
              color: '#B4F1FF',
              fontSize: 26
            },
            bd: {
              color: '#B4F1FF',
              fontSize: 26
            },
            value: {
              color: '#B4F1FF',
              fontSize: 26,
              fontWeight: 500
            }
          }
        },
        show: false
      },
      data: lineYAxis
    }
  ],
  xAxis: [
    {
      show: false
    }
  ],
  // graphic: {
  //   elements: [
  //     {
  //       type: "image",
  //       style: {
  //         image: img
  //       },
  //       left: "48%",
  //       top: "48%"
  //     }
  //   ]
  // },
  series: pieSeries
}
