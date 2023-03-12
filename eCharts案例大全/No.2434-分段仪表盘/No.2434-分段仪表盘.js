// 将仪表盘分成七段，并且每一段颜色不同
const colorTemplate = [
  [0.144, '#d0021b'], [0.284, '#f5a623'], [0.43, '#f8e71c'],
  [0.57, '#7ed321'], [0.715, '#4a90e2'], [0.856, '#50e3c2'], [1, '#9013fe']
]
// 真正的数据
const realData = 10
// 指针要指向的假数据
let fakeData = null
// 仪表盘外围的数字
const standard = ['壹', '贰', '叁', '肆', '伍', '陆', '柒']
// 拥挤度对假数据区分
const arr = [0, 20, 35, 45, 55, 65, 80, 100]
// 假数据分段，用于判断当前的指针指向那个区域
const fakeDataScope = [7, 21, 37, 50, 64, 78, 95]
// 大于最大数值的数，指向最后一个
if (realData > arr[arr.length - 1]) {
    fakeData = 95
}
// 小于最小数值的数，指向第一个
if (realData <= arr[0]) {
    fakeData = 7
}
// 除了最大和最小的数之外
for (let i = 0; i < arr.length; i++) {
    if (realData > arr[i] && realData <= arr[i + 1]) {
      fakeData = fakeDataScope[i]
    }
}
option = {
    series: [{ // 绘制的仪表盘
      type: 'gauge',
      radius: '50%',
      detail: {
        formatter: `中间的真正的数据值：10`,
        offsetCenter: [0, '52%'],
        fontSize: 16,
        color: '#333'
      },
      startAngle: 200,
      endAngle: -20,
      splitNumber: 7,
      data: [fakeData],
      axisLine: {
        show: true,
        lineStyle: {
          color: colorTemplate,
          width: 11
        }
      },
      splitLine: {
        show: true,
        distance: -11,
        length: 11,
        lineStyle: {
          color: '#fff',
          width: 2
        }
      },
      axisTick: { show: false },			// 刻度(线)样式。
      axisLabel: { show: false },
      pointer: {
        show: true,
        width: 2,
        length: '80%',
        itemStyle: {
          color: '#417505'
        }
      }
    },
    { // 外围文字
      type: 'gauge',
      radius: '65%',
      detail: { show: false },
      startAngle: 185,
      endAngle: -7,
      splitNumber: 6,
      axisLine: { show: false },
      splitLine: { show: false },
      axisTick: { show: false },			// 刻度(线)样式。
      axisLabel: {
        show: true,
        distance: 8,
        formatter: (val) => {
          val = Number(val)
          for (let i = 0; i < arr.length; i++) {
            if (val > arr[i] && val <= arr[i + 1]) {
              return standard[i]
            }
            if (val === arr[0]) {
              return standard[0]
            }
          }
        },
        color: '#666',
        fontSize: 14
      },
      pointer: { show: false }
    }
    ]
  }

