const targetCoord = [20, 80]
const curveness = 0.2
const linesData = []

const item = {
    name: "飞线",
    value: targetCoord,
    symbolSize: 0,
}

const items = [{
    name: "1",
    category: 0,
    active: true,
    speed: '',
    value: [0, 10]
}]

const data = items.concat([item])

items.forEach(function(el) {
    if (el.active) {
        linesData.push([{
            coord: el.value
        }, {
            coord: targetCoord
        }])
    }
})

option = {
    backgroundColor:"#000",
    xAxis: {
        show: false,
        type: 'value'
    },
    yAxis: {
        show: false,
        type: 'value'
    },
    series: [{
        type: 'graph',
        layout: 'none',
        coordinateSystem: 'cartesian2d',
        symbolSize:0,
        data: data,
    }, {
        name: '123',
        type: 'lines',
        coordinateSystem: 'cartesian2d',
        effect: {
            show: true,
            smooth: false,
            symbol: "arrow",
            color: 'rgba(55,155,255,1)',
            symbolSize: 12
        },
        lineStyle: {
            normal: {
                color:"#FFD700",
                type:"moddle",
                width:5,
                curveness: curveness
            }
        },
        data: linesData
    }]
}