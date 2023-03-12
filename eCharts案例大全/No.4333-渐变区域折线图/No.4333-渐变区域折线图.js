let dataArray = {
    xData: ['0101', '0102', '0103', '0104', '0105', '0106'],
    yData: [356, 567, 532, 666, 612, 612]
}
// tooltip
let tooltip = { trigger: 'axis', }

// grid
let grid = { left: '2%', right: '12%', top: '8%', bottom: '22%' }

// xAxis
let xAxis = { 
    type: 'category', 
    name: '日期',
    nameLocation: 'end',
    nameTextStyle: { color: '#fff', fontSize: 12, padding: [0, 0, 0, -10] },
    data: dataArray.xData,
    axisLine: { lineStyle: { color: 'rgba(255,255,255, .2)' } },
    axisLabel: { textStyle: { fontSize: 16, color: '#fff' }, }
}

// yAxis
let yAxis = { 
    max: value => {
        return value.max + 200
    },
    type: 'value', scale: true ,
    splitLine: { show: true, lineStyle: { color: 'rgba(255,255,255,.05)'} },
    axisLine: { show: false },
    axisLabel: { show: false }
}

// series
let series = [
    {
        name: '可用房间', type: 'line',
        //图例样式，默认空心圆，设为none是实心，还有'circle', 'rect', 'roundRect', 'triangle', 'diamond', 'pin', 'arrow', 'none'
        symbol:'circle',  
        // 修改的是线下区域的颜色
        areaStyle: { 
            color: new echarts.graphic.LinearGradient(
            // 右/下/左/上
            0, 0, 0, 1,[
                { offset: 0, color: '#2fffa4' },
                { offset: .4, color: '#b0ffdc' },
                { offset: 1, color: 'transparent'}
            ]
        )},
        // 修改的是线的颜色
        lineStyle: { color: { 
            type: 'linear',x: 1, y: 0, x2: 0, y2: 0,
            // 0% 处的颜色                           // 100% 处的颜色
            colorStops: [{ offset: 0, color: '#2fffa4' }, { offset: 1, color: '#2fffa4'}],
            global: false // 缺省为 false
        }},
        // 修改的是symbol的颜色
        itemStyle: { 
            color: { 
                type: 'linear',x: 1, y: 0, x2: 0, y2: 0,
                // 0% 处的颜色                           // 100% 处的颜色
                colorStops: [{ offset: 0, color: '#2fffa4' }, { offset: 1, color: '#2fffa4'}],
                global: false // 缺省为 false
            }
        },
        label: {
            show: true,
            position: 'top',
            formatter: params => {
                return `${params.value}间`
            },
            textStyle: { color: '#2fffa4', fontSize: 16 }
        },
        data: dataArray.yData
    }
]

// 渲染
option = { tooltip, grid, xAxis, yAxis, series, backgroundColor: 'rgba(0, 0, 0, .8)' }