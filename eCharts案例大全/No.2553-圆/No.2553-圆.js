function get_circle(r) {
    c = [];
    for (var i = 0; i < 2 * r; i += 0.001) {
        x = i
        y = (2 * x * r - x ** 2) ** 0.5
        c.push([x, y])
    }
    for (var i = 2 * r; i > 0; i -= 0.001) {
        x = i
        y = -((2 * x * r - x ** 2) ** 0.5)
        c.push([x, y])
    }
    return c
}

var radius = 1

var circle = get_circle(radius)

var option = {
    grid: {
        left: 'center',
        top: 'center',
        width: 200,
        height: 200
    },
    xAxis: {
        type: 'value',
        show: false,
        min: -0.1,
        max: 2 * radius + 0.1
    },
    yAxis: {
        type: 'value',
        show: false,
        min: -radius - 0.1,
        max: radius + 0.1
    },
    series: [{
        name: 'lines',
        type: 'lines',
        coordinateSystem: 'cartesian2d',
        polyline: true,
        effect: {
            show: true,
            period: 4,
            symbol: 'circle',
            symbolSize: 16,
            trailLength: 0
        },
        lineStyle: {
            color: '#c23531',
            width: 3,
            type: 'dotted',
            opacity: 1
        },
        data: [{
            coords: circle
        }]
    }]
}