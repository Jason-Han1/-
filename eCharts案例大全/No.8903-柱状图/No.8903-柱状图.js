
let color0 = ['#8b3c2f', '#7c4f4a', '#cc1c00', '#ff2e00', '#a10400', '#90909c']//红  上到下6种颜色
let color1 = ['#80562e', '#592f31', '#ca8200', '#fa7e00', '#a47c00', '#90909c']//橙  上到下6种颜色
let color2 = ['#7f7c37', '#4e5b52', '#fdd615', '#eff95c', '#ffc309', '#90909c']//黄  上到下6种颜色
let color3 = ['#377163', '#537870', '#29cc6f', '#3bd867', '#00a27d', '#90909c']//青  上到下6种颜色
//---------------头---------阴影-------阴面---------柱上------柱下-------圈-----
var Arr = [
  {
    name: '微博',
    value: 100
  },
  {
    name: '微信',
    value: 90
  },
  {
    name: '新浪',
    value: 70
  },
  {
    name: 'QQ',
    value: 60
  },
  {
    name: '飞信',
    value: 50
  }
]
function color (c) {
  let str = ''
  switch (c) {
    case 0:
      str = color0[0]
      break;
    case 1:
      str = color1[0]
      break;
    case 2:
      str = color2[0]
      break;
    case 3:
      str = color3[0]
      break;
    default:
      str = color3[0]
  }
  return str
}
function colorOne (c) {
  let str = ''
  switch (c) {
    case 0:
      str = color0[4]
      break;
    case 1:
      str = color1[4]
      break;
    case 2:
      str = color2[4]
      break;
    case 3:
      str = color3[4]
      break;
    default:
      str = color3[4]
  }
  return str
}
function colorTwo (c) {
  let str = ''
  switch (c) {
    case 0:
      str = color0[3]
      break;
    case 1:
      str = color1[3]
      break;
    case 2:
      str = color2[3]
      break;
    case 3:
      str = color3[3]
      break;
    default:
      str = color3[3]
  }
  return str
}
function colorThree (c) {
  let str = ''
  switch (c) {
    case 0:
      str = color0[4]
      break;
    case 1:
      str = color1[4]
      break;
    case 2:
      str = color2[4]
      break;
    case 3:
      str = color3[4]
      break;
    default:
      str = color3[4]
  }
  return str
}
function colorFour (c) {
  let str = ''
  switch (c) {
    case 0:
      str = color0[1]
      break;
    case 1:
      str = color1[1]
      break;
    case 2:
      str = color2[1]
      break;
    case 3:
      str = color3[1]
      break;
    default:
      str = color3[1]
  }
  return str
}
function colorFive (c) {
  let str = ''
  switch (c) {
    case 0:
      str = color0[2]
      break;
    case 1:
      str = color1[2]
      break;
    case 2:
      str = color2[2]
      break;
    case 3:
      str = color3[2]
      break;
    default:
      str = color3[2]
  }
  return str
}



option = {
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true,
      },
      xAxis: [
        {
          data: Arr.map(item => item.name),
          axisTick: {
            show: false,
          },
          axisLine: {
            show: false,
          },
          axisLabel: {
            margin: 30,
            fontSize: 16,
            color: '#707FB3',
          },
        },
      ],
      yAxis: {
        splitLine: {
          show: false,
        },
        axisTick: {
          show: false,
        },
        axisLine: {
          show: false,
        },
        axisLabel: {
          show: false,
        },
      },
      series: [
        {
          name: '', // 下—--—头部y样式
          type: 'pictorialBar',
          symbolSize: [54, 15],
          symbolOffset: [0, -6],
          z: 12,
          data: Arr.map((item, index) => {
            return { // 第二个下-----------------------------------------------------------------------------------头部
              name: '',
              value: item.value,
              symbolPosition: 'end',
              itemStyle: {
                normal: {
                  color: colorFive(index),
                },
              },
            }
          })
        },
        {
          name: '',
          type: 'pictorialBar',//底圈圆
          symbolSize: [54, 15],
          symbolOffset: [0, 10],
          z: 12,
          data: Arr.map((item, index) => {
            return {
              name: '',
              value: item.value,
              itemStyle: {
                normal: {
                  color: colorOne(index),
                },
              },
            }
          })
        }, {
          name: '',  //底外圈圆
          type: 'pictorialBar',
          symbolSize: [70, 25],
          symbolOffset: [0, 24],
          z: 11,
          data: Arr.map((item, index) => {
            return {
              name: '',
              value: item.value,
              itemStyle: {
                normal: {
                  color: 'transparent',
                  borderColor: color0[5],
                  borderWidth: 2,
                },
              },
            }
          })
        },
        {
          name: '邮件营销',
          type: 'bar',
          barWidth: 54,
          barGap: '-100%',
          // itemStyle: {
          //   color: window.echarts.graphic.LinearGradient(0, 0, 0, 1, [
          //     {
          //       offset: 0,
          //       color: 'rgba(55,255,249,1)',
          //     },
          //     {
          //       offset: 1,
          //       color: 'rgba(0,222,215,0.2)',
          //     },
          //   ]),
          // },
          label: {
            // 下 文字标签
            normal: {
              show: false,
              position: 'top',
              distance: -70,
              textStyle: {
                color: '#fff',
                fontSize: 40,
              },
            },
          },
          data: Arr.map((item, index) => {
            return {
              name: '', // 下  ----柱状渐变
              value: item.value,
              itemStyle: {
                normal: {
                  color: {
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    type: 'linear',
                    global: false,
                    colorStops: [
                      {
                        offset: 0,
                        color: colorTwo(index), //上
                      },
                      {
                        offset: 1,
                        color: colorThree(index), //下
                      },
                    ],
                  },
                },
              }
            }
          })
        },
        {
          type: 'bar',
          barWidth: 54,
          barGap: '-100%',
          stack: '广告',
          itemStyle: {
            color: 'transparent',
          },
          data: Arr.map((item) => item.value)
        },
        {
          name: '', // 上-----------------------------------------------------------------头部颜色样式
          type: 'pictorialBar',
          symbolSize: [54, 15],
          symbolOffset: [0, -10],
          z: 12,
          data: Arr.map((item, index) => {
            return {
              name: '',
              value: item.value + 19.5, // 上部-------高度
              symbolPosition: 'end',
              itemStyle: {
                normal: {
                  color: color(index),
                },
              },
            }
          })
        },
        {
          name: '', // 上连下----底部颜色样式
          type: 'pictorialBar',
          symbolSize: [54, 25],
          symbolOffset: [0, -20],
          z: 12,
        },
        {
          name: '联盟广告',
          type: 'bar',
          barWidth: 54,
          barGap: '-100%',
          stack: '广告',
          // itemStyle: {
          //   color: window.echarts.graphic.LinearGradient(0, 0, 0, 1, [
          //     {
          //       offset: 1,
          //       color: '#b10006',
          //     },
          //     {
          //       offset: 1,
          //       color: '#815041',
          //     },
          //   ]),
          // },
          label: {
            normal: {
              show: true,
              position: 'top',
              distance: 5,
              textStyle: {
                color: '#fff',
                fontSize: 18,
              },
            },
          },
          data: Arr.map((item, index) => {
            return {
              name: item.name,
              value: '20', // 上面高度
              trueVal: '20',
              itemStyle: {
                normal: {
                  color: {
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    type: 'linear',
                    global: false,
                    colorStops: [
                      {
                        offset: 1,
                        color: colorFour(index),
                      },
                      {
                        offset: 1,
                        color: colorFour(index),
                      },
                    ],
                  },
                },
              },
            }
          })
        },
      ],
};