option = {
    grid: [{
        bottom: '55%'
    }, {
        top: '55%'
    }],
    xAxis: [{}, {
        gridIndex: 1
    }],
    legend: [{
        top: '20%',
        right: '2%',
        orient: 'vertical',
        data: ['数据点1', '上限1', '下限1']
    }, {
        top: '70%',
        right: '2%',
        orient: 'vertical',
        data: ['数据点2', '上限2', '下限2']
    }],
    yAxis: [{
        name: 'markLine方式'
    }, {
        name: 'series-line方式',
        gridIndex: 1
    }],
    series: [{
        name: '数据点1',
        symbolSize: 20,
        data: [
            [10.0, 8.04],
            [8.0, 6.95],
            [13.0, 7.58],
            [9.0, 8.81],
            [11.0, 8.33],
            [14.0, 9.96],
            [6.0, 7.24],
            [12.0, 10.84]
        ],
        type: 'scatter',
        markLine: {
            animation: false,
            label: {
                normal: {
                    textStyle: {
                        align: 'right'
                    }
                }
            },
            lineStyle: {
                normal: {
                    type: 'solid'
                }
            },
            tooltip: {},
            data: [
                [{
                    coord: [0, 6],
                    symbol: 'none'
                }, {
                    coord: [15, 6],
                    symbol: 'none'
                }],
                [{
                    coord: [0, 11],
                    symbol: 'none'
                }, {
                    coord: [15, 11],
                    symbol: 'none'
                }]
            ]
        }
    }, {
        name: '上限1',
        type: 'line'
    }, {
        name: '下限1',
        type: 'line'
    }, {
        name: '数据点2',
        symbolSize: 20,
        xAxisIndex: 1,
        yAxisIndex: 1,
        data: [
            [10.0, 8.04],
            [8.0, 6.95],
            [13.0, 7.58],
            [9.0, 8.81],
            [11.0, 8.33],
            [14.0, 9.96],
            [6.0, 7.24],
            [12.0, 10.84]
        ],
        type: 'scatter'
    }, {
        name: '下限2',
        xAxisIndex: 1,
        yAxisIndex: 1,
        type: 'line',
        symbol: 'none',
        data: [
            [0, 6],
            [15, 6]
        ]
    }, {
        name: '上限2',
        xAxisIndex: 1,
        yAxisIndex: 1,
        type: 'line',
        symbol: 'none',
        data: [
            [0, 11],
            [15, 11]
        ]
    }]
};

myChart.on('legendselectchanged', function(params) {
    if (params.name === '上限1') {
        params.selected[params.name] ? option.series[0].markLine.data.push([{
            coord: [0, 11],
            symbol: 'none'
        }, {
            coord: [15, 11],
            symbol: 'none'
        }]) : option.series[0].markLine.data.pop();

        myChart.setOption(option);
    } else if (params.name === '下限1') {
        params.selected[params.name] ? option.series[0].markLine.data.unshift([{
            coord: [0, 6],
            symbol: 'none'
        }, {
            coord: [15, 6],
            symbol: 'none'
        }]) : option.series[0].markLine.data.shift();

        myChart.setOption(option);
    }
});