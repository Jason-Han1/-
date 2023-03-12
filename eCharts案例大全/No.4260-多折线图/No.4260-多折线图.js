// tooltip
const tooltip = {
    trigger: 'axis',
    axisPointer: { type: 'cross', label: { backgroundColor: '#6a7985' } }
}

// legend
const legend = { data: ['邮件营销', '联盟广告', '视频广告', '直接访问', '搜索引擎'], bottom: 0 }

// grid
const grid = { left: '3%', right: '4%', top: '2%', containLabel: true }

// xAxis
const xAxis = [{ type: 'category', boundaryGap: false, data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'] }]

// yAxis
const yAxis = [{ type: 'value', scale: true }]

// series
const series = [
    { name: '邮件营销', type: 'line', stack: '总量', areaStyle: {}, data: [120, 132, 101, 134, 90, 230, 210]},
    { name: '联盟广告', type: 'line', stack: '总量', areaStyle: {}, data: [220, 182, 191, 234, 290, 330, 310]},
    { name: '视频广告', type: 'line', stack: '总量', areaStyle: {}, data: [150, 232, 201, 154, 190, 330, 410]},
    { name: '直接访问', type: 'line', stack: '总量', areaStyle: {}, data: [320, 332, 301, 334, 390, 330, 320]},
    {
        name: '搜索引擎', type: 'line', stack: '总量',
        // 修改的是线下区域的颜色
        areaStyle: { color:'yellow' },
        // 修改的是线的颜色
        lineStyle: { color: { 
            type: 'linear',x: 1, y: 0, x2: 0, y2: 0,
            // 0% 处的颜色                           // 100% 处的颜色
            colorStops: [{ offset: 0, color: 'red' }, { offset: 1, color: 'blue'}],
            global: false // 缺省为 false
        }},
        //图例样式，默认空心圆，设为none是实心，还有'circle', 'rect', 'roundRect', 'triangle', 'diamond', 'pin', 'arrow', 'none'
        symbol:'none',  
        data: [820, 932, 901, 1290, 1330, 934, 820]
    },
]

// 渲染
option = { tooltip, legend, grid, xAxis, yAxis, series }