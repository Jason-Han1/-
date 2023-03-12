var that = this;

var option = {};
option = {
    backgroundColor: '#080b30',

    legend: {
        textStyle: {
            color: '#fff',
        },
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            lineStyle: {
                color: {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [
                        {
                            offset: 0,
                            color: 'rgba(0, 255, 233,0)',
                        },
                        {
                            offset: 0.5,
                            color: 'rgba(255, 255, 255,1)',
                        },
                        {
                            offset: 1,
                            color: 'rgba(0, 255, 233,0)',
                        },
                    ],
                    global: false,
                },
            },
        },
    },
    grid: {
        top: '15%',
        left: '5%',
        right: '5%',
        bottom: '15%',
        // containLabel: true
    },
    xAxis: [
        {
            type: 'category',
            axisLine: {
                show: true,
            },
            splitArea: {
                // show: true,
                color: '#f00',
                lineStyle: {
                    color: '#f00',
                },
            },
            axisLabel: {
                color: '#fff',
            },
            splitLine: {
                show: false,
            },
            boundaryGap: false,
            data: ['周一', '周二', '周三', '周四', '周五', '周六','周日'],
        },
    ],

    yAxis: [
        {
            type: 'value',
            min: 0,
            // max: 140,
            splitNumber: 4,
            splitLine: {
                show: true,
                lineStyle: {
                    color: 'rgba(255,255,255,0.1)',
                },
            },
            axisLine: {
                show: false,
            },
            axisLabel: {
                show: false,
                margin: 20,
                textStyle: {
                    color: '#d1e6eb',
                },
            },
            axisTick: {
                show: false,
            },
        },
    ],
    series: [
        {
            name: '一周内注射新冠疫苗数',
            type: 'line',
            smooth: true, //是否平滑
            showAllSymbol: true,
            // symbol: 'image://./static/images/guang-circle.png',
            symbol: 'circle',
            symbolSize: 25,
            lineStyle: {
                normal: {
                    color: '#00B3F1',
                    shadowColor: 'rgba(0, 0, 0, .3)',
                    shadowBlur: 0,
                    shadowOffsetY: 5,
                    shadowOffsetX: 5,
                },
            },
            label: {
                show: true,
                position: 'top',
                textStyle: {
                    color: '#00B3F1',
                },
            },

            itemStyle: {
                color: '#00B3F1',
                borderColor: '#fff',
                borderWidth: 3,
                shadowColor: 'rgba(0, 0, 0, .3)',
                shadowBlur: 0,
                shadowOffsetY: 2,
                shadowOffsetX: 2,
            },
            tooltip: {
                show: false,
            },
            areaStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(
                        0,
                        0,
                        0,
                        1,
                        [
                            {
                                offset: 0,
                                color: 'rgba(0,179,241,0.3)',
                            },
                            {
                                offset: 1,
                                color: 'rgba(0,179,241,0)',
                            },
                        ],
                        false
                    ),
                    shadowColor: 'rgba(0,202,149, 0.9)',
                    shadowBlur: 20,
                },
            },
            data: [388,281, 398, 214, 179, 289, 356],
        },
    ],
};

option.xAxis[1] = {
    type: 'value',
    max: option.xAxis[0].data.length * 100,
    show: false,
};

myChart.setOption(option, true);

setInterval(() => {
    // that.chartInstance.setOption(initOption, true);

    myChart.clear();
    myChart.setOption(option, true);
}, 5000);
