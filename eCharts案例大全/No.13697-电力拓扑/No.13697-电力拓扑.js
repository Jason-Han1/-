option = {
    grid: {
        top: 10,
        left: 10,
        right: 10,
        bottom: 10
    },
    xAxis: {
        splitLine: {
            show: false
        },
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            show: false
        },
        max: 1000,
        min: 0
    },
    yAxis: {
        silent: true,
        splitLine: {
            show: false
        },
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            show: false
        },
        max: 1000,
        min: 0
    },
    series: [{
        coordinateSystem: 'cartesian2d',
        type: 'lines',
        polyline: true,
        zlevel: 1,
        effect: {
            show: true,
            color: '#0AE94C',
            constantSpeed: 200,
            trailLength: 0.02,
            symbolSize: 7,
            symbol: 'circle',
            loop: true
        },
        lineStyle: {
            normal: {
                width: 3,
                color: '#ffffff',
                opacity: 0.15,
                curveness: 0.3
            }
        },
        data: [{
                coords: [
                    [100, 200],
                    [100, 600],
                    [500, 600],

                ]
            }, {
                coords: [
                    [300, 200],
                    [300, 600],
                    [500, 600],

                ]
            },
            {
                coords: [
                    [500, 600],
                    [500, 200],

                ]
            }
        ]
    }, {
        coordinateSystem: 'cartesian2d',
        type: 'lines',
        polyline: true,
        zlevel: 1,
        effect: {
            show: true,
            color: '#0AE94C',
            constantSpeed: 200,
            trailLength: 0.4,
            symbolSize: 7,
            symbol: 'circle',
            loop: true
        },
        lineStyle: {
            normal: {
                width: 3,
                color: '#ffffff',
                opacity: 0.15,
                curveness: 0.3
            }
        },
        data: [{
            coords: [
                [700, 200],
                [700, 600],
                [500, 600],

            ]
        }, {
            coords: [
                [900, 200],
                [900, 600],
                [500, 600],
                [500, 800]
            ]
        }, {
            coords: [
                [500, 600],
                [500, 850]
            ]
        }]
    }]
};