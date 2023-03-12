// Mock数据
const mockData = {
    xdata: [...new Array(33)].map((item, i) => `南城街道${i + 1}`) ,
    result: [
        { name: '已开通', data: [...new Array(33)].map((item, i) => +(Math.random(0,10) * 1000).toFixed(0) )},
        { name: '未开通', data: [...new Array(33)].map((item, i) => +(Math.random(0,0.5) * 1000).toFixed(0) )},
    ]
}  
        
const color = [
    [{ offset: 0, color: 'rgba(239, 255, 55, .85)' }, { offset: 0.5, color: 'rgba(239, 255, 55, .85)' }, { offset: 0.5, color: 'rgba(213, 231, 0, .9)' }, { offset: 1, color: 'rgba(213, 231, 0, .9)' }],
    [{ offset: 0, color: 'rgba(50, 255, 238, .85)' }, { offset: 0.5, color: 'rgba(50, 255, 238, .85)' }, { offset: 0.5, color: 'rgba(0, 216, 198, .9)' }, { offset: 1, color: 'rgba(0, 216, 198, .9)' }],
]
const color2 = ['#efff37', '#32ffee']

// tooltip
const tooltip = { 
    trigger: "axis",
    textStyle: { fontSize: '100%' },
    formatter: params => {
        let rander = params.map(item => `<div>${item.seriesName}: ${item.value}</div>`).join('')
        return rander   
    }
}

const legend = {
    data: ['已开通', '未开通'],
    textStyle: { fontSize: 12, color: '#fff'},
    itemWidth: 24,
    itemHeight: 15,
    itemGap: 15,
    top: '2%',
    right: '2%',
    selectedMode: false
}
const grid = { top: '15%', left: '12%', right: '2%', bottom: '25%'}
// xAxis
const xAxis = { 
    axisTick: { show: true },
    axisLine: { lineStyle: { color: 'rgba(255,255,255, .2)' } },
    axisLabel: { 
        rotate: 60,
        textStyle: { fontSize: 12, color: '#fff' },
    },
    data: mockData.xdata,
}

// yAxis
const yAxis = [{ 
    axisTick: { show: false },
    axisLine: { show: false },
    splitLine: { lineStyle: { color: 'rgba(255,255,255, .05)' } },
    axisLabel: { textStyle: { fontSize: 14, color: '#fff' } }
},{
    show: false,
    splitLine: { show:false },
    axisLine: { show: false },
    axisTick: { show: false },
}]
const diamondData = mockData.result.reduce((pre, cur, index) => {
    pre[index] = cur.data.map((el, id) => el + ( pre[index - 1] ? pre[index - 1][id] : 0))
    return pre
}, [])

let series = mockData.result.reduce((p, c, i, array) => {
    p.push({
        z: i + 1,
        stack: '总量',
        type: 'bar',
        name: c.name,
        barGap: '-100%',
        barWidth: 24,
        data: c.data,
        itemStyle:{ color: { type: 'linear', x: 0, x2: 1, y: 0, y2: 0, colorStops: color[i] } },
    },{
        z: i + 10,
        type: 'pictorialBar',
        symbolPosition: 'end',
        symbol: 'diamond',
        symbolOffset: [0, '-50%'],
        symbolSize: [24, 10],
        data: diamondData[i],
        itemStyle: { color: color2[i] },
        tooltip: { show: false },
    })

    // 是否最后一个了？
    if (p.length  === (array.length) * 2) {
        p.push({
            z: array.length * 2,
            type: "pictorialBar",
            symbolPosition: "start",
            data: mockData.result[0].data,
            symbol: "diamond",
            symbolOffset: ["0%", "50%"],
            symbolSize: [24, 10],
            itemStyle: { color: { type: 'linear', x: 0, x2: 1, y: 0, y2: 0, colorStops: color[0]} },
            tooltip: { show: false },
        })
        return p
    }

    return p
}, [])

const dataZoom = [{
    show: false,
    type: 'slider',
    startValue: 0,
    endValue: 7,
    moveOnMouseWheel: true,
    moveOnMouseMove: true,
    zoomOnMouseWheel: false,
}]

option = { tooltip, legend, xAxis, yAxis, series, grid, dataZoom, backgroundColor: 'rgba(0, 0, 0, .8)' }

// 定时器
let timer = null
// 轮询
function poll(startValue = 0, endValue = 7) {
    timer = setInterval(() => {
        // 如果是最后一个？
        if (endValue >= 33) {
            // 还原
            myChart.dispatchAction({ type: 'dataZoom', startValue: startValue = 0, endValue: endValue = 7 })
        } else {
            // 轮播
            myChart.dispatchAction({ type: 'dataZoom', startValue: startValue +=7, endValue: endValue += 7 })
        }
    }, 3 * 1000)
}

// 加入移入移出事件
myChart.on('mouseover', function(){
    clearInterval(timer)
})

myChart.on('mouseout', function(){  
    const { startValue, endValue } = myChart.getModel().option.dataZoom[0]
    poll(startValue, endValue)
})

// 启动轮询
poll(0, 7)




