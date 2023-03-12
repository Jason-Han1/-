var hours = ['May','Jun','Jun','Jun','Jun','Jul','Jul','Jul','Jul','Aug','Aug','Aug','Aug','Aug','Sep','Sep','Sep','Sep','Oct','Oct','Oct','Oct','Nov','Nov','Nov'];
var days = ['Sun','Sat','Fri','Thu','Wed','Tue','Mon'];

var data = [[0, 0, 0], [2, 0, 1], [5, 1, 1], [3, 1, 1], [6, 2, 1], [5, 2, 2], [3, 2, 1], [2, 2, 1], [6, 3, 1], [4, 2, 1], [5, 3, 1], [3, 3, 4], [6, 4, 4], [5, 4, 1], [4, 4, 3], [6, 5, 1], [5, 5, 2], [4, 5, 1], [3, 6, 1], [3, 7, 1], [4, 6, 1], [6, 8, 4], [5, 8, 2], [2, 8, 4], [6, 9, 1], [5, 9, 5], [4, 9, 4], [2, 9, 1], [6, 10, 1], [4, 10, 2], [3, 10, 1], [4, 10, 1], [6, 11, 2], [2, 11, 1], [5, 12, 2], [6, 14, 1], [2, 13, 1], [4, 13, 1], [3, 14, 1], [6, 15, 2], [5, 15, 3], [4, 15, 1], [3, 15, 2], [6, 15, 1], [3, 15, 1], [2, 15, 1], [6, 16, 3], [5, 16, 1], [4, 16, 2], [6, 16, 1], [3, 16, 3], [6, 17, 1], [5, 17, 2], [4, 17, 5], [6, 18, 1], [0, 17, 1], [6, 18, 1], [3, 17, 1], [5, 18, 2], [4, 18, 3], [2, 19, 1], [1, 19, 4], [6, 20, 3], [5, 20, 3], [4, 20, 1], [5, 20, 1], [6, 20, 1], [4, 20, 1], [2, 20, 3], [5, 21, 3], [5, 22, 1], [2, 22, 2], [3, 22, 1], [5, 23, 1], [4, 23, 1], [3, 23, 1], [4, 23, 1], [3, 23, 1], [6, 24, 3], [4, 24, 3]];

data = data.map(function (item) {
    return [item[1], item[0], item[2] || '-'];
});

option = {
    tooltip: {
        position: 'top'
    },
    animation: false,
    grid: {
        height: '50%',
        top: '10%'
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
        max: 5,
        calculable: true,
        orient: 'horizontal',
        left: 'center',
        bottom: '15%'
    },
    series: [{
        name: 'Punch Card',
        type: 'heatmap',
        data: data,
        label: {
            show: true
        },
        emphasis: {
            itemStyle: {
                shadowBlur: 10,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
        }
    }]
};