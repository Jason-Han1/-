var types = [
    '路基工程质量检验',
    '桥梁工程质量检验',
    '隧道工程质量检验',
    '路面工程质量检验',
    '交安工程质量检验',
];
var names = ['TJ-01', 'TJ-02', 'TJ-03', 'TJ-04', 'TJ-05', 'TJ-06', 'TJ-07', 'TJ-8'];

var data = [
    [0, 0, 5],
    [0, 1, 1],
    [0, 2, 6],
    [0, 3, 2],
    [0, 4, 4],
    [1, 0, 7],
    [1, 1, 2],
    [1, 2, 5],
    [1, 3, 7],
    [1, 4, 2],
    [2, 0, 1],
    [2, 1, 1],
    [2, 2, 4],
    [2, 3, 2],
    [2, 4, 3],
    [3, 0, 5],
    [3, 1, 4],
    [3, 2, 7],
    [3, 3, 4],
    [3, 4, 4],
    [4, 0, 1],
    [4, 1, 3],
    [4, 2, 4],
    [4, 3, 8],
    [4, 4, 5],
    [5, 0, 2],
    [5, 1, 1],
    [5, 2, 3],
    [5, 3, 2],
    [5, 4, 4],
    [6, 0, 1],
    [6, 1, 1],
    [6, 2, 5],
    [6, 3, 10],
    [6, 4, 5],
    [7, 0, 7],
    [7, 1, 6],
    [7, 2, 5],
    [7, 3, 3],
    [7, 4, 4],
];

data = data.map(function (item) {
    return [item[1], item[0], item[2] || '-'];
});

option = {
    tooltip: {
        position: 'top',
    },
    animation: false,
    grid: {
        height: '50%',
        top: '10%',
    },
    xAxis: {
        type: 'category',
        data: types,
        splitArea: {
            show: true,
        },
    },
    yAxis: {
        type: 'category',
        data: names,
        splitArea: {
            show: true,
        },
    },
    visualMap: {
        type: 'continuous',
        min: 0,
        max: 10,
        calculable: true,
        orient: 'horizontal',
        left: 'center',
        bottom: '15%',
        inRange: {
            color: ['#ebedf0', '#c6e48b', '#7bc96f', '#239a3b', '#196027']
        },
    },
    series: [
        {
            name: '检验完成情况',
            type: 'heatmap',
            data: data,
            label: {
                show: true,
                formatter(params){
                    return params.value[2] * 10 + '%'
                }
            },
            emphasis: {
                itemStyle: {
                    shadowBlur: 10,
                    shadowColor: 'rgba(0, 0, 0, 0.5)',
                },
            },
            tooltip: {
                formatter: function(params) {
                    console.log(params)
                    var title = params.seriesName
                    var x = params.name
                    var y = names[params.value[1]]
                    var point = params.value[2]
                    return `${title}:${point*10}%<br>标段：${y}<br>类型：${x}<br>`
                }
            }
        },
    ],
};
