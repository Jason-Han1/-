const table = [
    { name: '西安', A:150, B: 210 },
    { name: '杭州', A: 230, B: 320 },
    { name: '青岛', A: 224, B: 180 },
    { name: '成都', A: 218, B: 400 },
    { name: '重庆', A: 135, B: 190 }
]

// 按A进行升序排列
// table.sort((a, b) => a.A - b.A)
// 自定义排序，debugger中F10查看数据变化过程，变化过程不应该修改源数据
const sortConfig = ['西安', '成都', '重庆', '青岛', '杭州']
let mapArr = table.map((item) => {
  const index = sortConfig.findIndex((it) => it === item.name)
  return { index, value: item }
})
console.log('添加排序索引',mapArr)
debugger
mapArr.sort((a, b) => a.index - b.index)
console.log('按排序索引升序排列的结果', mapArr)
mapArr = mapArr.map((item) => item.value)
console.log('排序结果', mapArr)

option = {
  xAxis: {
    type: 'category',
    data: mapArr.map((item) => item.name)
  },
  yAxis: {
    type: 'value'
  },
  tooltip: {
      trigger: 'axis'
  },
  series: [
    {
      name: 'A',
      data: mapArr.map((item) => item.A),
      type: 'line',
      smooth: true
    },
    {
        name: 'B',
        data: mapArr.map((item) => item.B),
        type: 'line',
        smooth: true
    }
  ]
};