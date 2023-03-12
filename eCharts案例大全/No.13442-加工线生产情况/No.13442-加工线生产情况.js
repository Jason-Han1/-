var dataAll = {
    x_data: ['07:00', '08:00', '09:00', '10:00', '11:00', '12:00'],
    bar_data: [{
            type: '加工线',
            UPH: [70, 70, 70, 70, 70, 70],
            lines: [{
                name: '加工线1',
                data: [11, 23, 45, 66, 78, 44]
            }, {
                name: '加工线2',
                data: [21, 43, 55, 67, 98, 74]
            }]
        },
        {
            type: '组装线',
            UPH: [80, 80, 80, 80, 80, 80],
            lines: [{
                name: '组装线1',
                data: [11, 23, 45, 66, 78, 44]
            }, {
                name: '组装线2',
                data: [21, 43, 55, 67, 98, 74]
            }]
        },
        {
            type: '充电桩线',
            UPH: [90, 90, 90, 90, 90, 90],
            lines: [{
                name: '充电桩线1',
                data: [11, 23, 45, 66, 78, 44]
            }, {
                name: '充电桩线2',
                data: [21, 43, 55, 67, 98, 74]
            }]
        }
    ]
};



var makexAxis = function() {
    var Axis = [];
    dataAll.bar_data.forEach(function(item, index) {
        Axis.push({
            axisLabel: {
                interval: 0,
                color: '#555'
            },
            gridIndex: index,
            data: dataAll.x_data
        });
    });
    return Axis;
};

var makeyAxis = function() {
    var Axis = [];
    dataAll.bar_data.forEach(function(item, index) {
        Axis.push({
            gridIndex: index,
            splitLine: {
                show: false,
            },
            axisLabel: {
                color: '#777'
            },
            max: function(v) {
                return v.max + 10;
            }
        });
    });
    return Axis;
};

var makeseries = function() {
    var series = [];
    dataAll.bar_data.forEach(function(item, index) {
        series.push({
            name: 'UPH',
            data: item.UPH,
            xAxisIndex: index,
            yAxisIndex: index,
            type: 'line'
        });
        item.lines.forEach(function(line, i) {
            series.push({
                name: line.name,
                data: line.data,
                xAxisIndex: index,
                yAxisIndex: index,
                type: 'bar'
            });
        });
    })

    return series;
};

var option = {
    title: [{
        top: 0,
        textStyle: {
            fontSize: 14,
        },
        textAlign: 'left',
        text: '加工线生产情况'
    }],
    color: ['#c23531', '#6ca1ff', '#4db64d', '#6ca1ff', '#4db64d', '#6ca1ff', '#4db64d'],
    legend: [{
        top: '3%',
        data: ['UPH', '加工线1', '加工线2']
    }, {
        top: '33%',
        data: ['UPH', '组装线1', '组装线2']
    }, {
        top: '66%',
        data: ['UPH', '充电桩线1', '充电桩线2']

    }],
    grid: [{
            top: '5%',
            left: '5%',
            right: '3%',
            height: '22%'
        },
        {
            top: '35%',
            left: '5%',
            right: '3%',
            height: '22%'
        },
        {
            top: '68%',
            left: '5%',
            right: '3%',
            height: '22%'
        }
    ],
    xAxis: makexAxis(),
    yAxis: makeyAxis(),
    series: makeseries()
};