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
    series: [ {
        coordinateSystem: 'cartesian2d',
        type: 'lines',
        polyline: true,
        zlevel: 1,
        effect: {
            show: true,
            constantSpeed: 400,
            trailLength: 0,
            symbolSize: 10,
            symbol: 'circle',
            color:"green",
            loop: true
        },
        lineStyle: {
                color: 'green',
                opacity: 0.4,
        },
        data: [{
            coords: [
                [100, 100],
                [700, 1000]
            ]
        }]
    },{
        coordinateSystem: 'cartesian2d',
        type: 'lines',
        polyline: true,
        zlevel: 1,
        effect: {
            show: true,
            constantSpeed: 200,
            trailLength: 0,
            symbolSize: 10,
            symbol: 'circle',
            loop: true,
            color:"red"
        },
        lineStyle: {
                color: 'green',
                opacity: 0.4,
        },
        data: [{
            coords: [
                [100, 100],
                [700, 1000]
            ]
        }]
    }]
};