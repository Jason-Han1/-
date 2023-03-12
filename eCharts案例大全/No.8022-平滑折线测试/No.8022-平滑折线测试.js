
// 折线平滑函数
// a, b, c 连续3点
// level 平滑强度，0-1
// return 新的 b 点
const smoothness = function (prev, current, next, level = 0.5) {
  if (prev === undefined || next === undefined) {
    return current
  }
  const tmp = (next - prev) / 2 + prev
  const newPoint = (tmp - current) * level + current
  return newPoint
}


// 折线平滑函数
// list [number] 待平滑列表
// level 平滑强度，0-1
// return [number] 平滑列表
const smoothness2 = function (list = [], level = 0.5) {
  if (list.length <= 2) {
    return list
  }
  const start = list[0]
  const end = list[list.length -1]
  const rate = (end - start) / (list.length - 1)
  return list.map((item, i) => {
    const target = rate * i + start
    return (target - item) * level + item
  })
}

// 折线平滑函数
// list [number] 待平滑列表
// level 平滑强度，0-1
// return [number] 平滑列表
const smoothness3 = function (list = [], level = 0.5) {
  if (list.length <= 2) {
    return list
  }
  return list.map((current, i) => {
    const prev = list[i - 1]
    const next = list[i + 1]
    return smoothness(prev, current, next, level)
  })
}

const data = [10, 182, 191, 534, 590, 330, 210, 50, 100, 300, 400, 500, 200]
const series = [{
    name: 'origin',
    type: 'line',
    lineStyle: {width: 3},
    data
}]
series.push({
    name: 'smooth2-1',
    type: 'line',
    data: smoothness2(data, 1),
    lineStyle: {width: 1},
})
series.push({
    name: 'smooth2-0.5',
    type: 'line',
    data: smoothness2(data),
    lineStyle: {width: 1},
})
series.push({
    name: 'smooth3-0.5',
    type: 'line',
    data: smoothness3(data),
    lineStyle: {width: 1},
})
series.push({
    name: 'smooth3-1.0',
    type: 'line',
    data: smoothness3(data, 1),
    lineStyle: {width: 1},
})


console.log(series.map(i=>i.data))

option = {
    title: {
        text: '平滑折线测试'
    },
    tooltip: {
        trigger: 'axis'
    },
    legend: series.map((item => ({ name: item.name }))),
    xAxis: {
        data: data
    },
    yAxis: {},
    series
};