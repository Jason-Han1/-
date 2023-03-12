function getData(count) {
    var data = []
    for (let i = 0; i < count; i++) {
        data.push({
            name: i,
            value: Math.random(i) * 10 + 5,
            itemStyle: {
                color: 'rgb(' + Math.random(i) * 255 + ', 255,' + Math.random(i) * 255 + ' )'
            }
        })
    }
    return data
}

var data = getData(7);

option = {
    xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
        type: 'value'
    },
    series: [{
        data,
        type: 'bar'
    }]
};