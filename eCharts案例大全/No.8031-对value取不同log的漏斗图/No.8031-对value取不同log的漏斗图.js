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


// 折线平均函数
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

var data = [50000, 5000, 500, 5]
var data2 = [50000, 5000, 500, 50]

var originData = data.map(i => ({value: i, name: i}))
var originData2 = data.map(i => ({value: i, name: i}))


var avgData = smoothness2([].concat(data, [0])).slice(0,-1).map(i => ({value: i, name: i}))
// var avgData2 = smoothness2([].concat(data2, [0])).slice(0,-1).map(i => ({value: i, name: i}))
// var avgData1 = smoothness2([].concat(data, [0]), 0.8).slice(0,-1).map(i => ({value: i, name: i}))
var avgData2 = smoothness3([].concat(data, [0]), 1).slice(0,-1).map(i => ({value: i, name: i}))
function getBaseLog(x, y) {
  return Math.log(y) / Math.log(x);
}


var series = [
{
    name: '预期',
    type: 'funnel',
    left: '10%',
    width: '80%',
    label: {
        formatter: '{c}'
    },
    labelLine: {
        show: false
    },
    itemStyle: {
        opacity: 0.2
    },
    data: originData
}
]

// var list = [1.2, 2, 10, 100, 1000]
// var list = [2]

// list.forEach((key, idx) => {
//     series.push({
//         name: '预期',
//         type: 'funnel',
//         left: '10%',
//         width: '80%',
//         maxSize: `${100-idx*5}%`,
//         label: {
//             padding: [idx*30,0,0,0],
//             formatter: `log${key}：{c}`
//         },
//         labelLine: {
//             show: false
//         },
//         itemStyle: {
//             opacity: 0.1
//         },
//         data: originData.map(item => {
//             return {
//                 ...item,
//                 value: getBaseLog(key, item.value).toFixed(2)
//             }
//         })
//     })
// })


series.push({
    name: '预期',
    type: 'funnel',
    left: '10%',
    width: '80%',
    label: {
        padding: [90,0,0,0],
        formatter: `平均0.5：{c}`
    },
    labelLine: {
        show: false
    },
    itemStyle: {
        opacity: 0.5
    },
    data: avgData
})
series.push({
    name: '预期',
    type: 'funnel',
    left: '10%',
    width: '80%',
    label: {
        padding: [120,0,0,0],
        formatter: `平均2-0.5：{c}`
    },
    labelLine: {
        show: false
    },
    itemStyle: {
        opacity: 0.1
    },
    data: avgData2
})

// series.push({
//     name: '预期',
//     type: 'funnel',
//     left: '10%',
//     width: '80%',
//     label: {
//         padding: [120,0,0,0],
//         formatter: `平滑0.5：{c}`
//     },
//     labelLine: {
//         show: false
//     },
//     itemStyle: {
//         opacity: 0.2
//     },
//     data: avgData1
// })

console.log(series.map(i=>i.data.map(d=>d.value)))

option = {
    title: {
        text: '漏斗图',
        subtext: '纯属虚构'
    },
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c}%"
    },
    toolbox: {
        feature: {
            dataView: {readOnly: false},
            restore: {},
            saveAsImage: {}
        }
    },
    legend: {
        data: ['访问','咨询','订单']
    },
    series: series
};
