app.title = '笛卡尔坐标系上的热力图';



var hours = ['0-2', '3-5', '6-8',
    '9-11', '12-14', '15-17',
    '18-20', '21-23'
];
var days = ['餐厅', '便利店', '卫生间',
    '休息区', '加油站'
];

var data = [
    [0, 0, 0],
    [1, 0, 1],
    [2, 0, 2],
    [3, 0, 1],
    [4, 0, 3],
    [0, 1, 0],
    [1, 1, 0],
    [2, 1, 1],
    [3, 1, 0],
    [4, 1, 1],
    [0, 2, 1],
    [1, 2, 1],
    [2, 2, 2],
    [3, 2, 1],
    [4, 2, 2],
    [0, 3, 0],
    [1, 3, 2],
    [2, 3, 3],
    [3, 3, 2],
    [4, 3, 4],
    [0, 4, 3],
    [1, 4, 4],
    [2, 4, 6],
    [3, 4, 4],
    [4, 4, 6],
    [0, 5, 0],
    [1, 5, 4],
    [2, 5, 6],
    [3, 5, 4],
    [4, 5, 6],
    [0, 6, 3],
    [1, 6, 5],
    [2, 6, 8],
    [3, 6, 6],
    [4, 6, 8],
    [0, 7, 1],
    [1, 7, 3],
    [2, 7, 4],
    [3, 7, 3],
    [4, 7, 5]
];

data = data.map(function(item) {
    return [item[1], item[0], item[2] || '-'];
});

option = {
    title: {
        text: '人流量分析-拥挤程度分析',
        subtext: '2017-12-20',
        left: 'center',
    },
    tooltip: {
        position: 'top'
    },
    animation: false,
    grid: {
        height: '50%',
        y: '10%'
    },
    xAxis: {
        type: 'category',
        data: hours,
        splitArea: {
            show: true
        }
    },
    yAxis: {
        type: 'category',
        data: days,
        splitArea: {
            show: true
        }
    },
    dataZoom: [{
        type: 'slider',
        show: true,
        xAxisIndex: [0],
        start: 1,
        end: 100
    }, {
        type: 'slider',
        show: true,
        yAxisIndex: [0],
        left: '93%',
        start: 1,
        end: 100
    }, {
        type: 'inside',
        xAxisIndex: [0],
        start: 1,
        end: 100
    }, {
        type: 'inside',
        yAxisIndex: [0],
        start: 1,
        end: 100
    }],
    visualMap: {
        min: 0,
        max: 10,
        calculable: true,
        left: 'left',
        bottom: '15%'
    },
    series: [{
        name: 'Punch Card',
        type: 'heatmap',
        data: data,
        label: {
            normal: {
                show: true
            }
        },
        itemStyle: {
            emphasis: {
                shadowBlur: 10,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
        }
    }]
};