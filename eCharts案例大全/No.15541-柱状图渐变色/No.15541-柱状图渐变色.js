var colors = [{
    type: 'linear',
    x: 0, x2: 1, y: 0, y2: 0,
    colorStops: [{
        offset: 0,
        color: 'rgb(0, 160, 220)'
    }, {
        offset: 0.5,
        color: 'rgb(0, 160, 220)'
    }, {
        offset: 0.5,
        color: 'rgb(0, 179, 255)'
    }, {
        offset: 1,
        color: 'rgb(0, 179, 255)'
    }]
}, {
    type: 'linear',
    x: 0, x2: 1, y: 0, y2: 0,
    colorStops: [{
        offset: 0,
        color: 'rgb(12, 210, 180)'
    }, {
        offset: 0.5,
        color: 'rgb(12, 210, 180)'
    }, {
        offset: 0.5,
        color: 'rgb(12, 233, 195)'
    }, {
        offset: 1,
        color: 'rgb(12, 233, 195)'
    }]
}];


option = {
    color: colors,
    title: {
        text: 'Awesome Chart'
    },
    xAxis: {
        data: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
    },
    yAxis: {},
    series: [{
        type: 'bar',
        data:[220, 182, 191, 234, 290, 330, 310]
    }, {
        type: 'bar',
        data:[200, 200, 101, 300, 330, 190, 100]
    }]
};