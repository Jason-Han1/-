option = {
    tooltip:{},
    lengend: {
        show: true,
        data: [],
        y: 'bottom'
    },
    angleAxis: {
        max: 100,
        startAngle: 90,
        show: false,
        handle: {
            size: 50,
            show: true
        },
        splitLine: {
            show: false
        }
    },
    // grid:{width:'10'},
    radiusAxis: {
        type: 'category',
        show: false,
        splitLine: {
            show: false
        },
        name: '111',
        data: ['50%', '42%', 'x', 'y', 'z'],
    },
    polar: {
        tooltip: {
            show: true
        },
        radius: ['40%', '100%', '160%']
    },
    series: [{
        type: 'bar',
        stack: 'one',
        label: {
            position: 'inside',
            color: 'rgba(176,240,255,1)',
            formatter: "{d}%"
        },
        data: [0, 50, 40],
        roundCap: true,
        zlevel: 3,
        coordinateSystem: 'polar',
        name: 'Without Round Cap1',
        color: '#1C6CFF',

    }, {
        type: 'bar',
        stack: 'one',
        roundCap: true,
        zlevel: 2,
        data: [20, 0, 0],
        coordinateSystem: 'polar',
        name: 'With Round Cap2',
        color: '#FFAF74',
        barWidth: 3
    }, {
        type: 'bar',
        stack: 'one',
        roundCap: true,
        zlevel: 1,
        data: [80, 50, 60],
        coordinateSystem: 'polar',
        name: 'With Round Cap3',
        color: '#1F3F65',
        barWidth: 3
    }],
};