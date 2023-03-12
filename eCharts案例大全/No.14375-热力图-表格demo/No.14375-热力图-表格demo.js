var hours = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10',
    '11', '12', '13', '14', '15', '16', '17', '18', '19', '20',
    '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31'
];
var days = ['差异分数', '总分数'];

var data = [
    [0, 0, -3],
    [0, 1, -4],
    [0, 2, -7],
    [0, 3, -6],
    [0, 4, -15],
    [0, 5, -17],
    [0, 6, -20],
    [0, 7, -20],
    [0, 8, -21],
    [0, 9, -18],
    [0, 10, -33],
    [0, 11, -4],
    [0, 12, 1],
    [0, 13, -6],
    [0, 14, 1],
    [0, 15, -1],
    [0, 16, -4],
    [0, 17, -2],
    [0, 18, 0],
    [0, 19, -3],
    [0, 20, -3],
    [0, 21, -4],
    [0, 22, -7],
    [0, 23, -1],
    [0, 24, -1],
    [0, 25, -1],
    [0, 26, -1],
    [0, 27, -1],
    [0, 28, -1],
    [0, 29, -1],
    [0, 30, -1],
    [1, 0, 7],
    [1, 1, 0],
    [1, 2, 0],
    [1, 3, 0],
    [1, 4, 0],
    [1, 5, 0],
    [1, 6, 0],
    [1, 7, 0],
    [1, 8, 0],
    [1, 9, 0],
    [1, 10, 5],
    [1, 11, 2],
    [1, 12, 2],
    [1, 13, 6],
    [1, 14, 9],
    [1, 15, 11],
    [1, 16, 6],
    [1, 17, 7],
    [1, 18, 8],
    [1, 19, 12],
    [1, 20, 5],
    [1, 21, 5],
    [1, 22, 7],
    [1, 23, 2]
];
data = data.map(function(item) {
    return [item[1], item[0], item[2]];
});
option = {
    tooltip: {
        position: 'right',
        formatter: function(params) {
            if (params.data[1] == '1') {
                return params.seriesName + '<br/>' +
                    '总分数：' + params.data[2];
            }
            if (params.data[1] == '0') {
                return params.seriesName + '<br/>' +
                    '差异分数：' + params.data[2];
            }
        }
    },
    animation: true,
    grid: {
        height: '15%',
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
    visualMap: {
        min: 0,
        max: 10,
        calculable: true,
        orient: 'horizontal',
        left: 'center',
        show: false,
        inRange: {
            color: ['rgba(255, 255, 255,0.5)', 'rgba(255,255,255,0.1)'],
        }
    },
    series: [{
        name: '12月评核分数表',
        type: 'heatmap',
        data: data,
        label: {
            normal: {
                show: true,
                color: ['#000']
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