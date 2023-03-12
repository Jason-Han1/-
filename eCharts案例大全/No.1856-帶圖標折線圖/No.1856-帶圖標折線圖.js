let icon = '<svg t="1607836797888" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="892" width="400" height="400"><path d="M516.5 530.6m-428.9 0a428.9 428.9 0 1 0 857.8 0 428.9 428.9 0 1 0-857.8 0Z" fill="#8aab73" p-id="893" data-spm-anchor-id="a313x.7781069.0.i12" class="selected"></path><path d="M516.5 530.6m-393.7 0a393.7 393.7 0 1 0 787.4 0 393.7 393.7 0 1 0-787.4 0Z" fill="#FFFFFF" p-id="894"></path><path d="M512 530.6m-353.9 0a353.9 353.9 0 1 0 707.8 0 353.9 353.9 0 1 0-707.8 0Z" fill="#ffffff" p-id="895" data-spm-anchor-id="a313x.7781069.0.i10" class=""></path><path d="M607.4 727.9v-229h15.8c9 0 15.8 6.8 15.8 15.9v145.1c0 36.3 29.3 68 67.7 68 36.1 0 67.7-29.5 67.7-68V381c0-13.6-6.8-27.2-15.8-36.3l-54.2-54.4c-9-9.1-27.1-9.1-36.1 0s-9 27.2 0 36.3l36.1 36.3-27.1 27.2c-9 9.1-9 22.7 0 31.7 4.5 4.5 9 6.8 15.8 6.8h29.3v233.5c0 9.1-6.8 15.9-15.8 15.9s-15.8-6.8-15.8-15.9V517c0-36.3-29.3-68-67.7-68h-15.8V322c0.1-10.8-4.2-21.2-11.8-28.9-7.6-7.7-18-12-28.8-11.9H347.8c-10.8 0-21.2 4.3-28.8 11.9-7.6 7.7-11.9 18.1-11.8 28.9v405.9h-6.8c-13.5 0-24.8 11.3-24.8 24.9 0 15.9 11.3 27.2 24.8 27.2h311.5c13.5 0 24.8-11.3 24.8-24.9 0-13.6-11.3-24.9-24.8-24.9l-4.5-2.3zM381.7 333.4h151.2c13.5 0 22.6 9.1 22.6 22.7v111.1c0 13.6-9 22.7-22.6 22.7H381.7c-13.5 0-22.6-9.1-22.6-22.7V356c0-13.6 9-22.6 22.6-22.6z" fill="#194f05" p-id="896" data-spm-anchor-id="a313x.7781069.0.i5" class=""></path></svg>'
icon = encodeURIComponent(icon)
icon = 'data:image/svg+xml;utf8,' + icon

const xAxisData = ['1990','1991','1992','1993','1994','1995','1996','1997','1998','1999','2000','2001','2002','2003','2004','2005','2006','2007','2008','2009','2010','2011','2012','2013','2014','2015','2017','2018']
const colors = ['#1576d2']

let myTag = '#__color'
myTag = encodeURIComponent(myTag) // 显示为'%23__color'
const getCurrentIcon = function(color, addPrefix) {
    color = encodeURIComponent(color)
    let resIcon = addPrefix ? 'image://' + icon : icon
    return resIcon.replace(myTag, color)
}

let series = []
let group = []
const seriesLength = 1
for (let i = 0; i < seriesLength; i++) {
    const currentColor = colors[i]
    const symbol = getCurrentIcon(currentColor, true)

    group.push('Price')
    series.push({
        name:group,
        type: 'line',
        data: [71.53,
66.8,
53.35,
61.63,
134.45,
138.42,
102.07,
133.91,
108.95,
85.71,
64.24,
45.59,
47.74,
51.9,
62.15,
89.36,
95.75,
107.68,
124.25,
115.67,
147.24,
210.39,
156.34,
119.51,
155.26,
124.67,
127.31,
126.69,
109.0258333],
        symbol: symbol,
        symbolSize: 20,
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
        type:'category',
        data: ['1990','1991','1992','1993','1994','1995','1996','1997','1998','1999','2000','2001','2002','2003','2004','2005','2006','2007','2008','2009','2010','2011','2012','2013','2014','2015','2017','2018'],
    minInterval: 1
    },
    yAxis: {type: 'value'},
    series: series
};
       