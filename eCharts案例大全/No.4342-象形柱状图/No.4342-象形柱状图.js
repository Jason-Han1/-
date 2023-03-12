
let dataArray = {
    xdataName: ['美国', '英国', '日本', '俄罗斯', '加拿大', '德国', '法国'],
    contractnum: [9999, 8888, 7777, 6666, 5555, 4444, 3333]
}


let color2 = [
    [{ offset: 0, color: '#ff8881' }, { offset: 0.15, color: '#ff564c' },{ offset: 1, color: 'rgba(255,86,76, 0.08)' }],
    [{ offset: 0, color: '#fff9e1' }, { offset: 0.15, color: '#ffe376' },{ offset: 1, color: 'rgba(255,209,26, 0.08)' }],
    [{ offset: 0, color: '#f7ff98' }, { offset: 0.15, color: '#efff37' },{ offset: 1, color: 'rgba(239,255,55, 0.08)' }],
    [{ offset: 0, color: '#32ffee' }, { offset: 0.15, color: '#cdfffb' },{ offset: 1, color: 'rgba(50,255,238, 0.1)' }],
]
// tooltip
let tooltip = {
    trigger: 'axis',
    textStyle: { fontSize: 18 },
    axisPointer: { type: 'cross', label: { backgroundColor: '#283b56' } },
    formatter: v => {
        let [a] = v
        return `
            <div class='u-p-2'>
                <div>${a.name}：${a.value}</div>
            </div>
        `
    }
}

// grid
let grid = { top: '10%', left: '10%', right: '3%', bottom: '10%' }

// xAxis
let xAxis = {
    type: 'category',
    boundaryGap: true,
    data: dataArray.xdataName,
    axisLine: { lineStyle: { color: '#fff' } },
    axisLabel: {
        textStyle: { fontSize: 12, color: '#fff' },
        rotate: 0
    },
    axisTick: { show: false }, //坐标轴刻度
}

// yAxis
let yAxis = {
    type: 'value', scale: true, min: 0,
    name: '人数/地图',
    nameTextStyle: { color: '#fff', fontSize: 12, padding: [0, 0, 0, 10]},
    splitLine: { show: false },
    axisLine: { lineStyle: { color: '#fff' } },
    axisLabel: { textStyle: { fontSize: 12, color: '#fff' } }
}

// series
let series = [{
    name: '中高风险地区',
    type: 'pictorialBar',
    barWidth: 40,
    // 三角矢量柱状图
    symbol: 'path://M-0.000,431.000 C59.528,394.477 61.000,-0.000 61.000,-0.000 C61.000,-0.000 62.472,394.477 122.000,431.000 L-0.000,431.000 Z',
    // 是否裁剪图形
    symbolClip: false,
    data: dataArray.contractnum,
     itemStyle: {
        color: params => {
            return params.name === dataArray.xdataName[0] 
            ? new echarts.graphic.LinearGradient(0, 0, 0, 1, color2[0]) 
            : params.name === dataArray.xdataName[1] 
            ? new echarts.graphic.LinearGradient(0, 0, 0, 1, color2[1]) 
            : params.name === dataArray.xdataName[2]
            ? new echarts.graphic.LinearGradient(0, 0, 0, 1, color2[2]) 
            : new echarts.graphic.LinearGradient(0, 0, 0, 1, color2[3]) 
        } 
    },
    label: {
        show: true,
        position: 'top',
        formatter: params => { 
            return params.name === dataArray.xdataName[0] 
            ? `{a|${params.value}}` 
            : params.name === dataArray.xdataName[1] 
            ? `{b|${params.value}}` 
            : params.name === dataArray.xdataName[2]
            ? `{c|${params.value}}` 
            : `{d|${params.value}}` 
        },
        rich: {
            a: { color: '#ff564c' },
            b: { color: '#ffd11a' },
            c: { color: '#efff37' },
            d: { color: '#32ffee' },

        },
        textStyle: { fontSize: 16 }
    },
}]

// 渲染
option = { tooltip, grid, xAxis, yAxis, series, backgroundColor: 'rgba(0, 0, 0, .8)' }