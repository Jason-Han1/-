// mock数据
const dataArr = {
    xdata: ['01.01', '01.02', '01.03', '01.04', '01.05', '01.06', '01.07'],
    vaccination: [1000, 1300, 1200, 800, 600, 700, 900],
    unvaccinated: [700, 800, 900, 500, 300, 400, 500],
    unvaccinatedTwo: [400, 300, 500, 200, 100, 100, 300],
    rateDataOne: [98, 96, 97, 92, 94, 95, 100],
    rateDataTwo: [88, 86, 87, 82, 84, 85, 95],
}

// tooltip
const tooltip = { 
    trigger: "axis",
    textStyle: { fontSize: '100%' },
    formatter: params => {
        let rander = params.map(item => item.seriesType !== "pictorialBar" ? `<div>${item.seriesName}: ${item.seriesType !== "line" ? item.value : item.value + "%"}</div>` : '').join('')
        return `
            <div>${params[0].axisValue}</div>
            ${rander}
        `
    }
}
const legend = {
    data: ['应接种', '已完成第一次接种', '已完成第二次接种', '完成第一次接种率', '完成第二次接种率'],
    textStyle: { fontSize: 14, color: '#fff'},
    itemWidth: 25,
    itemHeight: 15,
    itemGap: 15,
    bottom: '5%',
    selectedMode: false
}
const grid = { top: '18%', left: '10%', right: '6%', bottom: '25%'}
// xAxis
const xAxis = { 
    axisTick: { show: true },
    axisLine: { lineStyle: { color: 'rgba(255,255,255, .2)' } },
    axisLabel: { textStyle: { fontSize: 12, color: '#fff'  }, },
    data: dataArr.xdata
}

// yAxis
const yAxis = [{ 
    axisTick: { show: false },
    axisLine: { show: false, },
    splitLine: { lineStyle: { color: 'rgba(255,255,255, .05)' } },
    axisLabel: { textStyle: { fontSize: 16, color: '#fff' } }
},{
    show: true,
    max: 100,
    splitLine: { show:false },
    axisLine: { show: false },
    axisTick: { show: false },
    axisLabel: { 
        textStyle: { fontSize: 16, color: '#fff' },
        formatter: params => {
            return `${params}%`
        }
    }
}]

// series
const series = [{
    z: 1,
    name: '上部1',
    type: 'pictorialBar',
    symbolPosition: 'end',
    data: dataArr.vaccination,
    symbol : 'diamond',
    symbolOffset: ['-50%', '-50%'],
    symbolSize: [29, 19],
    itemStyle: {
        borderColor: '#2fffa4',
        color: '#2fffa4'
    },
},{
    z: 1,
    type: 'bar',
    name: '应接种',
    barWidth: 30,
    barGap: '-50%',
    data: dataArr.vaccination,
    itemStyle: {
        color: {
            type: 'linear',
            x: 0, x2: 1, y: 0, y2: 0,
            colorStops: [
                { offset: 0, color: 'rgba(29, 245, 160, .7)' }, 
                { offset: 0.5, color: 'rgba(29, 245, 160, .7)' }, 
                { offset: 0.5, color: 'rgba(29, 245, 160, .3)' }, 
                { offset: 1, color: 'rgba(29, 245, 160, .3)' }
            ]
        }
    },
},{
    z: 2,
    name: '上部1',
    type: 'pictorialBar',
    symbolPosition: 'end',
    data: dataArr.unvaccinated,
    symbol : 'diamond',
    symbolOffset: [0, '-50%'],
    symbolSize: [29, 19],
    itemStyle: {
        borderColor: '#32ffee',
        color: '#32ffee'
    },
},{
    z: 2,
    type: 'bar',
    name: '已完成第一次接种',
    barWidth: 30,
    data: dataArr.unvaccinated,
    itemStyle: {
        color: {
            type: 'linear',
            x: 0, x2: 1, y: 0, y2: 0,
            colorStops: [
                { offset: 0, color: 'rgba(50, 255, 238, .7)' }, 
                { offset: 0.5, color: 'rgba(50, 255, 238, .7)' }, 
                { offset: 0.5, color: 'rgba(50, 255, 238, .3)' }, 
                { offset: 1, color: 'rgba(50, 255, 238, .3)' }
            ]
        }
    },
}, {
    z: 3,
    name: '上部1',
    type: 'pictorialBar',
    symbolPosition: 'end',
    data: dataArr.unvaccinatedTwo,
    symbol : 'diamond',
    symbolOffset: ['50%', '-50%'],
    symbolSize: [29, 19],
    itemStyle: {
        borderColor: '#ffd11a',
        color: '#ffd11a'
    },
},{
    z: 3,
    type: 'bar',
    name: '已完成第二次接种',
    barWidth: 30,
    data: dataArr.unvaccinatedTwo,
    itemStyle: {
        color: {
            type: 'linear',
            x: 0, x2: 1, y: 0, y2: 0,
            colorStops: [
                { offset: 0, color: 'rgba(255, 209, 26, .7)' }, 
                { offset: 0.5, color: 'rgba(255, 209, 26, .7)' }, 
                { offset: 0.5, color: 'rgba(255, 209, 26, .3)' }, 
                { offset: 1, color: 'rgba(255, 209, 26, .3)' }
            ]
        }
    },
}, {   
    z: 9,
    yAxisIndex: 1,
    name: '完成第一次接种率', type: 'line',
    symbol: `path://M9.312,4.594 C12.074,4.594 14.313,6.832 14.313,9.594 C14.313,12.355 12.074,14.594 9.312,14.594 C6.551,14.594 4.312,12.355 4.312,9.594 C4.312,6.832 6.551,4.594 9.312,4.594 Z`,
    symbolSize: [10, 10],
    color: { 
        type: 'linear',x: 1, y: 0, x2: 0, y2: 0,
        // 0% 处的颜色                           // 100% 处的颜色
        colorStops: [{ offset: 0, color: '#32ffee' }, { offset: 1, color: '#8afff5'}],
        global: false // 缺省为 false
    },
    lineStyle: { color: { 
        type: 'linear',x: 1, y: 0, x2: 0, y2: 0,
        // 0% 处的颜色                           // 100% 处的颜色
        colorStops: [{ offset: 0, color: '#32ffee' }, { offset: 1, color: '#8afff5'}],
        global: false // 缺省为 false
    }}, 
    // 修改的是线下区域的颜色
    areaStyle: { 
        color: new echarts.graphic.LinearGradient(
        // 右/下/左/上
        0, 0, 0, 1,[
            { offset: 0, color: 'rgba(50, 255, 238, .1)' },
            { offset: 1, color: 'transparent' }
        ])
    },
    label: {
        show: true,
        position: 'insideBottomLeft',
        formatter: params => {
            return `${params.value}%`
        },
        textStyle: { fontSize: 16, color: '#32ffee' } 
    },
    data: dataArr.rateDataOne
}, {   
    z: 9,
    yAxisIndex: 1,
    name: '完成第二次接种率', type: 'line',
    symbol: `path://M9.312,4.594 C12.074,4.594 14.313,6.832 14.313,9.594 C14.313,12.355 12.074,14.594 9.312,14.594 C6.551,14.594 4.312,12.355 4.312,9.594 C4.312,6.832 6.551,4.594 9.312,4.594 Z`,
    symbolSize: [10, 10],
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
        position: 'insideBottomRight',
        formatter: params => {
            return `${params.value}%`
        },
        textStyle: { fontSize: 16, color: '#ffd11a' } 
    },
    data: dataArr.rateDataTwo
}]
option = { tooltip, xAxis, yAxis, series, grid, legend, backgroundColor: 'rgba(0, 0, 0, .7)' }