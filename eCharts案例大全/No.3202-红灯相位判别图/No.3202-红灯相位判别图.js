var hours = ['2s', '4s', '6s', '8s', '10s'];
var days = ['10%', '30%', '50%',
        '70%', '90%'];

var data = [[0,0,95.83],[0,1,81.94],[0,2,81.94],[0,3,68.05],[0,4,68.05],
            [1,0,95.83],[1,1,87.0],[1,2,81.94],[1,3,72.22],[1,4,72.22],
            [2,0,100],[2,1,98.61],[2,2,94.44],[2,3,90.27],[2,4,84.72],
            [3,0,100],[3,1,98.61],[3,2,98.61],[3,3,95.83],[3,4,84.72],
            [4,0,100],[4,1,100],[4,2,98.61],[4,3,95.83],[4,4,93.06],
];
	
data = data.map(function (item) {
    return [item[1], item[0], item[2] || '-'];
});

option = {
    tooltip: {
        position: 'top'
    },
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
        min: 60,
        max: 100,
        calculable: true,
        right:"10",
        top:"30%",
        type: 'piecewise',
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