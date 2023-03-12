const customSeriesLength = 3
const xAxisData = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
const colors = ["#1576d2", "#d14a82", "#26c1f2", "#a166ff", "#9C2BB6"]
const barWidth = 0.2 // 柱条占比
const barGap = 0.2 // 不同系列的柱间距离

function renderItem(params, api) {
    const ceilHeight = 5 // 装饰的高度

    const topCenter = api.coord([api.value(0), api.value(1)]) // 顶点中心
    const unitWidth = api.size([0, 1])[0]
    const height = api.size([0, api.value(1)])[1] // 高度
    const width = unitWidth * barWidth; // 宽度

    const unitGapWidth = barGap * barWidth * unitWidth
    const GapsWidth = (customSeriesLength - 1) * unitGapWidth
    const showWidth = GapsWidth + width * customSeriesLength
    const decorateIdx = parseInt(params.seriesName.split('_')[1]) // 绘制时的排序
    const xPosi = topCenter[0] - showWidth / 2 + decorateIdx * (width + unitGapWidth)
    return {
        type: 'rect', // 装饰
        shape: {
            x: xPosi,
            y: topCenter[1],
            width: width,
            height: height > ceilHeight ? ceilHeight : height
        },
        style: api.style()
    }
}

let series = []
for (let i = 0; i < customSeriesLength; i++) {
    const data = xAxisData.map(d => ~~(Math.random() * 100))
    const color = colors[i]
    series.push({
        name: 'basicRect_' + i,
        type: 'bar',
        barWidth: barWidth * 100 + '%',
        barGap: barGap * 100 + '%',
        data: data,
        itemStyle: {
            opacity: 0.5,
            color: color
        }
    })
    series.push({
        name: 'decorateRect_' + i,
        type: 'custom',
        renderItem: renderItem,
        data: data,
        zlevel: 2,
        itemStyle: {
            color: color
        }
    })
}

option = {
    xAxis: {
        type: 'category',
        data: xAxisData
    },
    yAxis: {
        type: 'value'
    },
    series: series
};