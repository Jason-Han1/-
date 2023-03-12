// mock 数据
const dataArr = {
    xdata: ['01-01', '01-02', '01-03', '01-04', '01-05', '01-06', '01-07'],
    rateData: [90, 92, 98, 88, 96, 97, 94],
    disinfeced: [150, 320, 300, 210, 240, 180, 288],
    placeData: [320, 435, 490, 340, 320, 270, 360 ]
}

const legend = {
    data: ['场所数', '已消杀', '完成率'],
    textStyle: { fontSize: 14, color: '#fff'},
    itemWidth: 25,
    itemHeight: 15,
    itemGap: 15,
    bottom: '5%',
    selectedMode: false
}
const grid = { top: '10%', left: '10%', right: '3%', bottom: '15%'}
// xAxis
const xAxis = { 
    axisTick: { show: true },
    axisLine: { lineStyle: { color: 'rgba(255,255,255, .2)' } },
    axisLabel: { textStyle: { fontSize: 12, color: '#fff'  }, },
    data: dataArr.xdata
}

// yAxis
const yAxis = [{ 
    splitLine: { lineStyle: { color: 'rgba(255,255,255, .05)' } },
    axisLine: { show: false, },
    axisLabel: { textStyle: { fontSize: 16, color: '#fff' } }
},{
    // 双y轴，主要用于折线图，所以不需要显示坐标
    show: false
}]

// series
const series = [{
    z: 3,
    name: '上部1',
    type: 'pictorialBar',
    symbolPosition: 'end',
    data: dataArr.placeData,
    symbol : 'diamond',
    symbolOffset: [0,'-50%'],
    symbolSize: [30, 20],
    itemStyle: {
        borderColor: '#2fffa4',
        borderWidth: 2,
        color: '#2fffa4'
    },
},{
    z:1,
    type: 'bar',
    name: '场所数',
    barGap: '-100%',
    barWidth: 30,
    data: dataArr.placeData,
    itemStyle:{ 
        borderColor: '#2fffa4',
        borderWidth: 1,
            color: {
            type: 'linear',
            x: 0, x2: 1, y: 0, y2: 0,
            colorStops: [{ offset: 0, color: 'rgba(47,255,164,.2)' }, { offset: 0.5, color: 'rgba(47,255,164,.2)' }, { offset: 0.5, color: 'rgba(49,245,160,.7)' }, { offset: 1, color: 'rgba(49,245,160,.2)' }]
        }
    },
},{ 
    z:2,
    name: '底部',
    type: 'pictorialBar',
    data: [1, 1, 1, 1, 1, 1, 1, 1],
    symbol: 'diamond',
    symbolOffset: [0, '50%'],
    symbolSize: [30, 20],
    itemStyle: { 
        color: {
            type: 'linear',
            x: 0, x2: 1, y: 0, y2: 0,
            colorStops: [{ offset: 0, color: '#2fffa4' }, { offset: 0.5, color: '#2fffa4' }, { offset: 0.5, color: 'rgba(49,245,160,.7)' }, { offset: 1, color: '#31f5a0' }]
        }
    },
},{
    z: 3,
    name: '上部1',
    type: 'pictorialBar',
    symbolPosition: 'end',
    data: dataArr.disinfeced,
    symbol : 'diamond',
    symbolOffset: [0, '-50%'],
    symbolSize: [30, 20],
    itemStyle: {
        borderColor: '#2fffa4',
        borderWidth: 2,
        color: '#2fffa4'
    },
},{
    z:1,
    stack: '总量',
    type: 'bar',
    name: '已消杀',
    barWidth: 30,
    // barGap: '-100%',
    data: dataArr.disinfeced,
    itemStyle: {
        color: {
            type: 'linear',
            x: 0, x2: 1, y: 0, y2: 0,
            colorStops: [{ offset: 0, color: 'rgba(49,245,160,.7)' }, { offset: 0.5, color: 'rgba(49,245,160,.5)' }, { offset: 0.5, color: 'rgba(49,245,160,.5)' }, { offset: 1, color: 'rgba(49,245,160,.7)' }]
        }
    },
},{   
    z: 9,
    // 双y轴
    yAxisIndex: 1,
    name: '完成率', type: 'line',
    symbol: 'circle',
    symbolSize: [20, 20],
    color: { 
        type: 'linear',x: 1, y: 0, x2: 0, y2: 0,
        // 0% 处的颜色                           // 100% 处的颜色
        colorStops: [{ offset: 0, color: '#ffd11a' }, { offset: 1, color: '#fff5cc'}],
        global: false // 缺省为 false
    },
    lineStyle: { color: { 
        type: 'linear',x: 1, y: 0, x2: 0, y2: 0,
        // 0% 处的颜色                           // 100% 处的颜色
        colorStops: [{ offset: 0, color: '#ffd11a' }, { offset: 1, color: '#fff5cc'}],
        global: false // 缺省为 false
    }}, 
    // 修改的是线下区域的颜色
    areaStyle: { 
        color: new echarts.graphic.LinearGradient(
        // 右/下/左/上
        0, 0, 0, 1,[
            { offset: 0, color: 'rgba(255, 209, 26, .2)' },
            { offset: 1, color: 'transparent' }
        ])
    },
    label: {
        show: true,
        formatter: params => {
            return `${params.value}%`
        },
        textStyle: { fontSize: 16, color: '#ffd11a' } 
    },
    data: dataArr.rateData
}]
option = { xAxis, yAxis, series, grid, legend, backgroundColor:'rgba(0, 0, 0, .8)' }