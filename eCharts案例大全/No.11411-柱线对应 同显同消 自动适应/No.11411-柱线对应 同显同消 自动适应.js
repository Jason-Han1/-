option = {
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
            crossStyle: {
                color: '#999'
            }
        }
    },
    legend: {
        data: ['柱1', '柱2', '线1', '线2'],
    },
    xAxis: [{
        type: 'category',
        data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
        axisPointer: {
            type: 'shadow'
        }
    }, ],
    yAxis: [{
            type: 'value',
            name: '水量',

            axisLabel: {
                formatter: '{value} ml'
            }
        },
        {
            type: 'value',
            name: '温度',
            position: 'right',

            axisLabel: {
                formatter: '{value} °C'
            }
        }
    ],
    series: [{
            name: '柱1',
            type: 'bar',
            barMaxWidth: '30px',
            data: [2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3],
            z: 3
        },
        {
            name: '柱2',
            type: 'bar',
            barMaxWidth: '30px',
            data: [2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3],
            z: 3

        },
        {
            xAxisIndex: 1,
            name: '柱1',
            type: 'line',
            yAxisIndex: 1,
            data: [2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2]
        },
        {
            xAxisIndex: 1,
            name: '柱2',
            type: 'line',
            yAxisIndex: 1,
            data: [2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2]
        }
    ]
};

// 增加了一个隐藏的x轴，用来控制线图的点的位置
option.xAxis[1] = {
    type: 'value',
    max: option.xAxis[0].data.length * 100,
    show: false
}
option.series[2].data = option.series[2].data.map((x, i) => [27 + i * 100, x])
option.series[3].data = option.series[3].data.map((x, i) => [73 + i * 100, x])
myChart.setOption(
    option
);


myChart.on('legendselectchanged', function(params) {
    var opt = myChart.getOption();
    if (params.selected.柱1 == true && params.selected.柱2 == true) {
        opt.series[2].data = [2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2].map((x, i) => [27 + i * 100, x])
        opt.series[3].data = [2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2].map((x, i) => [73 + i * 100, x])
    } else
    if (params.selected.柱1 == true && params.selected.柱2 == false) {
        opt.series[2].data = [2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2].map((x, i) => [50 + i * 100, x])
    } else
    if (params.selected.柱1 == false && params.selected.柱2 == true) {
        opt.series[3].data = [2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2].map((x, i) => [50 + i * 100, x])
    } else {

    }
    myChart.clear();
    myChart.resize();
    myChart.setOption(
        opt
    );


});