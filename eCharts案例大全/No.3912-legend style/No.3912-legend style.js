function getData(seriesId) {
    var data = [];
    for (var i = 0; i < 7; ++i) {
        data.push(Math.random() * 100 + (seriesId + 1) * 200);
    }
    return data;
}
option = {
    xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
        type: 'value'
    },
    legend: [{
        data: [
            'Line A',
            'Line B',
            {
                name: 'Line C',
                symbolSize: 'inherit'
            },
            'Line F',
            'Pie A',
            'Pie B',
            'Pie C',
            'Pie D'
        ]
    }, {
        bottom: 10,
        data: [{
            name: 'Line D'
        }, {
            name: 'Line E',
            itemStyle: {
                color: 'yellow'
            }
        }],
        itemStyle: {
            color: 'orange'
        }
    }],
    series: [{
        data: getData(0),
        type: 'line',
        name: 'Line A'
    }, {
        data: getData(1),
        type: 'line',
        name: 'Line B',
        itemStyle: {
            color: 'red',
            borderWidth: 5
        },
        symbolSize: 10
    }, {
        data: getData(2),
        type: 'line',
        name: 'Line C',
        lineStyle: {
            color: 'green',
            width: 5,
            shadowBlur: 10,
            shadowColor: 'orange'
        },
        itemStyle: {
            color: 'red'
        },
        symbolSize: 30
    }, {
        data: getData(3),
        type: 'line',
        name: 'Line D',
        itemStyle: {
            color: 'blue'
        }
    }, {
        data: getData(4),
        type: 'line',
        name: 'Line E',
        itemStyle: {
            color: 'green'
        },
        symbolSize: 10
    }, {
        data: getData(5),
        type: 'line',
        name: 'Line F',
        symbolSize: 10,
        itemStyle: {
            color: 'blue'
        }
    }, {
        type: 'pie',
        data: [{
            name: 'Pie A',
            value: 10
        }, {
            name: 'Pie B',
            value: 8,
            itemStyle: {
                borderWidth: 0
            }
        }, {
            name: 'Pie C',
            value: 14,
            itemStyle: {
                color: 'blue',
                borderColor: 'green'
            }
        }, {
            name: 'Pie D',
            value: 0
        }],
        itemStyle: {
            borderWidth: 10,
            borderColor: '#fff'
        },
        center: ['80%', '50%'],
        radius: '40%'
    }],
    grid: {
        left: 60,
        width: '55%'
    },
    visualMap: [{
        type: 'continuous',
        min: 1200,
        max: 1300,
        inRange: {
            color: ['green', 'yellow', 'red']
        },
        show: false,
        seriesIndex: 5
    }, {
        type: 'continuous',
        min: 0,
        max: 15,
        inRange: {
            color: ['green', 'yellow', 'red'],
            opacity: [0, 1]
        },
        show: false,
        seriesIndex: 6
    }],
    animation: 0
};