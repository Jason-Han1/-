let icon = '<svg class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="9125" xmlns:xlink="http://www.w3.org/1999/xlink" width="16" height="16"><defs><style type="text/css"></style></defs><path d="M874.044235 149.955765L873.411765 361.411765l150.588235 150.588235-150.588235 150.588235 0.63247 211.456L662.588235 873.411765l-150.588235 150.588235-150.588235-150.588235-211.456 0.63247L150.588235 662.588235l-150.588235-150.588235 150.588235-150.588235-0.63247-211.456L361.411765 150.588235l150.588235-150.588235 150.588235 150.588235z" fill="#__color" p-id="9126"></path><path d="M512 512m-271.058824 0a271.058824 271.058824 0 1 0 542.117648 0 271.058824 271.058824 0 1 0-542.117648 0Z" fill="#0C0058" p-id="9127"></path></svg>'
icon = encodeURIComponent(icon)
icon = 'data:image/svg+xml;utf8,' + icon

const xAxisData = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
const colors = ['#1576d2', '#d14a82', '#26c1f2']

let myTag = '#__color'
myTag = encodeURIComponent(myTag) // 显示为'%23__color'
const getCurrentIcon = function(color, addPrefix) {
    color = encodeURIComponent(color)
    let resIcon = addPrefix ? 'image://' + icon : icon
    return resIcon.replace(myTag, color)
}

let series = []
let group = []
const seriesLength = 3
for (let i = 0; i < seriesLength; i++) {
    const currentColor = colors[i]
    const symbol = getCurrentIcon(currentColor, true)
    const data = xAxisData.map(d => ~~(Math.random() * 100))
    group.push('折线' + i)
    series.push({
        name: group[i],
        type: 'line',
        data: data,
        symbol: symbol,
        symbolSize: 30,
    })
}

option = {
    color: colors,
    legend: {
        data: group
    },
    tooltip: {
        show: true,
        formatter: (p) => {
            const markerURl = getCurrentIcon(p.color, false) // 这里需要的是url本身，不加image://
            const marker = `<img src="${markerURl}" height="12" width="12" />`
            const title = `<span>${p.seriesName}</span><br/>`
            const content = `<span style="margin-left: 10px;">${p.name}: ${p.value}</span>`
            return title + marker + content
        }
    },
    xAxis: {
        data: xAxisData
    },
    yAxis: {},
    series: series
};