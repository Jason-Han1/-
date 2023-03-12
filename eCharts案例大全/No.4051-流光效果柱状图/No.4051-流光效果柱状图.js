let data = [120, 200, 150, 80, 70, 110, 130]
option = {
    backgroundColor: '#000',
    color: ['rgba(255,0,0,.5)'],
    textStyle: {
        color: '#fff'
    },
    yAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    xAxis: {
        type: 'value'
    },
    series: [{
        data: data,
        type: 'bar',
        barWidth: 10,
    }, {
        type: 'lines',
        coordinateSystem: 'cartesian2d',
        data: data.map((item, index) => {
            return {
                coords: [
                    [0, index],
                    [item - 4, index]
                ]
            }
        }),
        effect: {
            show: true,
            period: 2.5,
            trailLength: .5,
            symbolSize: 20,
            symbol: "pin",
            loop: true,
            color: "rgba(55,155,255,0.5)"
        },
        lineStyle: {
            width: 0,
            opacity: 0.6,
            curveness: 0
        },
        z: 99
    }]
};