
function generateData(count) {
  var baseValue = Math.random() * 1000
  var time = +new Date()
  var smallBaseValue

  function next(idx) {
    smallBaseValue = idx % 30 === 0
      ? Math.random() * 700
      : (smallBaseValue + Math.random() * 500 - 250)
    baseValue += Math.random() * 20 - 10
    return Math.max(
      0,
      Math.round(baseValue + smallBaseValue) + 3000
    )
  }

  var categoryData = []
  var valueData = []

  for (var i = 0; i < count; i++) {
    const category = echarts.format.formatTime('yyyy-MM-dd', time)
    categoryData.push(category)
    valueData.push(next(i).toFixed(2))
    // const datas = []
    // for (let j = 0; j < count; j++) {
    //   datas.push(next(j).toFixed(2))
    // }
    // valueData.push({
    //   name: category,
    //   type: 'bar',
    //   data: datas
    // })
    time -= 24 * 60 * 60 * 1000
  }

  return {
    categoryData: categoryData.reverse(),
    valueDataOne: valueData.reverse(),
    valueDataTwo: valueData.reverse().map(item => item * 1.1),
    valueDataThree: valueData.reverse().map(item => item * 1.5),
    valueData1: valueData.reverse().map(item => item * 0.2),
    valueData2: valueData.reverse().map(item => item * 0.3),
    valueData3: valueData.reverse().map(item => item * 0.15),
    valueData4: valueData.reverse().map(item => item * 0.26),
    valueData5: valueData.reverse().map(item => item * 0.08),
    valueData6: valueData.reverse().map(item => item * 0.12),
    valueData7: valueData.reverse().map(item => item * 0.18),
    valueData8: valueData.reverse().map(item => item * 0.17)
  }
}
var count = 7
var data = generateData(count)

var timeToday = echarts.format.formatTime('yyyy-MM-dd', new Date())
var timeTodayBefore7 = echarts.format.formatTime('yyyy-MM-dd', new Date(Date.now() - 24 * 60 * 60 * 1000 * 7))

option = {
  tooltip: {
    trigger: 'axis',
    axisPointer: { // 坐标轴指示器，坐标轴触发有效
      type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
    }
  },
  legend: {
    type: 'scroll',
    data: [
      { name: '上岗人力', icon: 'circle', textStyle: { color: 'red' }},
      { name: '出单人力', icon: 'circle', textStyle: { color: 'red' }},
      { name: '在职人力', icon: 'circle', textStyle: { color: 'red' }},
      { name: '浙江分公司', icon: 'triangle' },
      { name: '江苏分公司', icon: 'triangle' },
      { name: '云南分公司', icon: 'triangle' },
      { name: '安徽分部', icon: 'triangle' },
      { name: '山西分公司', icon: 'triangle' },
      { name: '上海分公司', icon: 'triangle' },
      { name: '广州分公司', icon: 'triangle' },
      { name: '河北分公司', icon: 'triangle' }
    ]
  },
  xAxis: [{
    type: 'category',
    data: data.categoryData
  }],
  yAxis: [{
    type: 'value'
  }],
  series: [
    { name: '上岗人力', type: 'bar', data: data.valueDataOne },
    { name: '出单人力', type: 'bar', data: data.valueDataTwo },
    { name: '在职人力', type: 'bar', data: data.valueDataThree },
    { name: '浙江分公司', type: 'bar', data: data.valueData1, stack: '上岗人力' },
    { name: '江苏分公司', type: 'bar', data: data.valueData2, stack: '上岗人力' },
    { name: '云南分公司', type: 'bar', data: data.valueData3, stack: '上岗人力' },
    { name: '安徽分部', type: 'bar', data: data.valueData4, stack: '上岗人力' },
    { name: '山西分公司', type: 'bar', data: data.valueData5, stack: '上岗人力' },
    { name: '上海分公司', type: 'bar', data: data.valueData6, stack: '上岗人力' },
    { name: '广州分公司', type: 'bar', data: data.valueData7, stack: '上岗人力' },
    { name: '河北分公司', type: 'bar', data: data.valueData8, stack: '上岗人力' }
  ]
}
