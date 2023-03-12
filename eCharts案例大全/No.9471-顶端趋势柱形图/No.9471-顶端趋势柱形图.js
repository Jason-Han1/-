var name = ['冰箱', '洗衣机', '空调', '彩电', '热水器']
var data = []
var xAxis = []
var yAxis = []
var grid = []
var series = []
name.forEach(item => {
    let d = []
    for (var i = 0; i < 10; i++) {
        d.push(parseInt(Math.random() * 100))
    }
    data.push({
        name: item,
        data: d
    })
})
data.forEach((item, index) => {
    var d = [...item.data, ''].fill('')
    d[5] = item.name
    if (index < 5) {
        xAxis.push({
            gridIndex: index,
            type: 'category',
            boundaryGap: '20%',
            axisTick: {
                show: false
            },
            axisLabel: {
                show: false,
                interval: 0
            },
            name: `${item.name} ▲ 5%`,
            nameLocation: 'center',
            data: d
        })
        yAxis.push({
            gridIndex: index,
            axisLine: {
                show: false
            },
            axisLabel: {
                show: index === 0 ? true : false
            },
            axisTick: {
                show: false
            },
            splitLine: {
                show: false
            }
        })
        grid.push({
            left: `${index === 0 ? 5 : 16 * index + 5}%`,
            width: '16%',
            bottom: '10%'
        })
        series.push({
            name: item.name,
            type: 'line',
            lineStyle: {
                width: 0
            },
            symbol: 'none',
            data: item.data,
            xAxisIndex: index,
            yAxisIndex: index,
            smooth: true,
            areaStyle: {}
        })
    }
})
option = {
    xAxis: xAxis,
    yAxis: yAxis,
    grid: grid,
    series
};