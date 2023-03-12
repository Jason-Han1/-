var data1 = [
    [44056, 81.8, 2015],
    [43294, 81.7, 2015],
    [13334, 76.9, 2015],
    [21291, 78.5, 2015],
    [38923, 80.8, 2015],
    [37599, 81.9, 2015],
    [44053, 81.1, 2015],
    [42182, 82.8, 2015],
    [5903, 66.8, 2015],
    [36162, 83.5, 2015],
    [1390, 71.4, 2015],
    [34644, 80.7, 2015],
    [34186, 80.6, 2015],
    [64304, 81.6, 2015],
    [24787, 77.3, 2015],
    [23038, 73.13, 2015],
    [19360, 76.5, 2015],
    [38225, 81.4, 2015],
    [53354, 79.1, 2015]
];
var pointData=[{ yAxis: 20 }, { yAxis: 40 }];

option = {
    backgroundColor:'#FFFFFF',
    /*legend: {
        data: [ '2015'],
        bottom: 20
    },*/
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross'
        }
    },
    grid: {
        top: 80,
        bottom: 90
    },
    xAxis: {
        type: 'value',
        splitLine: {
            lineStyle: {
                type: 'dashed'
            }
        },
    },
    yAxis: {
        type: 'value',
        splitLine: {
            lineStyle: {
                type: 'dashed'
            }
        },
    },
    series: [{
        name: '2015',
        type: 'scatter',
        label: {
            emphasis: {
                show: true,
                formatter: function(param) {
                    return param.data[2];
                },
                position: 'top'
            }
        },
        data: data1,
        itemStyle: {
            normal: {
                shadowBlur: 10,
                shadowColor: 'rgba(25, 100, 150, 0.5)',
                shadowOffsetY: 5,
                color: new echarts.graphic.RadialGradient(0.4, 0.3, 1, [{
                    offset: 0,
                    color: 'rgb(129, 227, 238)'
                }, {
                    offset: 1,
                    color: 'rgb(25, 183, 207)'
                }])
            }
        },
        markPoint : {
                data : [
                    {type : 'max', name: '最大值'},
                    {type : 'min', name: '最小值'}
                ]
            },
        markLine : {
            lineStyle: {
                normal: {
                    type: 'solid'
                }
            },
            data : pointData
        }
    }]
};