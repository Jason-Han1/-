var hours = ['12a', '1a'];
var days = ['Saturday', 'Friday'];

var data = [[0,0,1], [0, 1, 2], [1, 0, 3], [1, 1, 4]]
data = data.map(function (item) {
    return {
        value: [item[1], item[0], item[2] || '-'],
        visualMap: item[2] > 1 ? true : false
    };
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
        max: 10,
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
        itemStyle: {
            color: '#c4ccd3'
        },
        emphasis: {
            itemStyle: {
                shadowBlur: 10,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
        }
    }]
};