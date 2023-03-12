
var charts = {
    linesData: [{
            coords: [
                [500, 1000],
                [500, 800],
            ]
        }, {
            coords: [
                [500, 800],
                [100, 800],
                [100, 600]

            ]
        }, {
            coords: [
                [500, 800],
                [500, 600],

            ]
        }, {
            coords: [
                [500, 800],
                [900, 800],
                [900, 600]

            ]
        },
        {
            coords: [
                [100, 600],
                [0, 300]
            ]
        },
        {
            coords: [
                [100, 600],
                [300, 300]
            ]
        },
        {
            coords: [
                [900, 600],
                [700, 300]
            ]
        },
        {
            coords: [
                [900, 600],
                [1000, 300]
            ]
        }
    ]
}

option = {
    backgroundColor: "#0B1321",
    xAxis: {
        min: 0,
        max: 1000,
        show: false,
        type: 'value'
    },
    yAxis: {
        min: 0,
        max: 1000,
        show: false,
        type: 'value'
    },
    series: [ {
        type: 'lines',
        polyline: true,
        coordinateSystem: 'cartesian2d',
        lineStyle: {
            type: 'dashed',
            width: 2,
            color: '#175064',
            curveness: 0.3

        },
        effect: {
            show: true,
            trailLength: 0.1,
            symbol: 'arrow',
            color: 'orange',
            symbolSize: 8
        },
        data: charts.linesData
    }]
};