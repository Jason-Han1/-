option = {
    tooltip: {
        trigger: 'axis',
        formatter: function (e) {
            console.log(e);
            return e[0].value != 0 ? e[0].name + '<br/>告警时长：' + e[0].value + '秒' : '';
        },
        axisPointer: {
            type: 'shadow',
        },
    },

    xAxis: {
        data: ['2019-06', '2019-07', '2019-08', '2019-09', '2019-10', '2019-11', '2019-12'],
        axisLine: {
            lineStyle: {
                type: 'dotted',
                color: '#eeeeee',
            },
        },
        axisTick: {
            show: false,
        },
        axisLabel: {
            color: '#333',
        },
    },
    yAxis: {
        name: '时间（s）',
        nameTextStyle: {
            color: '#333',
        },
        axisLine: {
            lineStyle: {
                color: '#eeeeee',
            },
        },
        axisTick: {
            show: true,
        },
        splitLine: {
            show: true,
            lineStyle: {
                type: 'dashed',
                color: '#eeeeee',
            },
        },
        axisLabel: {
            color: '#333',
        },
    },
    grid: {
        left: '0',
        right: '0',
        bottom: '3%',
        containLabel: true,
    },
    series: [
        {
            type: 'bar',
            barWidth: 20,
            data: [100, 78, 56, 124, 67, 65, 95],
            itemStyle: {
                normal: {
                    show: true,
                    color: function (params) {
                        var colorList = ['#F4FD51', '#60FD85', '#38DBF7'];
                        var index = params.dataIndex;
                        if (params.dataIndex >= colorList.length) {
                            index = params.dataIndex - colorList.length;
                        }
                        return new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                            {
                                offset: 0,
                                color: colorList[0],
                            },
                            {
                                offset: 0.5,
                                color: colorList[1],
                            },
                            {
                                offset: 1,
                                color: colorList[2],
                            },
                        ]);
                    },
                },
            },
        },
    ],
};
myChart.setOption(option);
var indexBar = 0; //播放所在下标
var myChartshowTip = setInterval(function () {
    myChart.dispatchAction({
        type: 'downplay',
        seriesIndex: 0,
    });
    myChart.dispatchAction({
        type: 'highlight',
        seriesIndex: 0,
        dataIndex: indexBar % option.series[0].data.length,
    });
    myChart.dispatchAction({
        type: 'showTip',
        seriesIndex: 0,
        dataIndex: indexBar % option.series[0].data.length,
    });
    indexBar++;
}, 5000);
myChart.on('mouseover', function (params) {
    indexBar = params.dataIndex;
    myChart.dispatchAction({
        type: 'downplay',
        seriesIndex: 0,
    });
    myChart.dispatchAction({
        type: 'showTip',
        seriesIndex: 1,
        dataIndex: indexBar % option.series[0].data.length,
    });
    myChart.dispatchAction({
        type: 'highlight',
        seriesIndex: 1,
        dataIndex: indexBar % option.series[0].data.length,
    });
});

myChart.on('mouseout', function (params) {
    indexBar = params.dataIndex;
    myChart.dispatchAction({
        type: 'downplay',
        seriesIndex: 0,
    });
    myChart.dispatchAction({
        type: 'showTip',
        seriesIndex: 1,
        dataIndex: indexBar % option.series[0].data.length,
    });
    myChart.dispatchAction({
        type: 'highlight',
        seriesIndex: 1,
        dataIndex: indexBar % option.series[0].data.length,
    });
});
