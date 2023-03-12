var color = ['#20E229', '#A8FD03'];
var numColor = '#0AA107';
var xData = ['0-20分', '20-40分', '40-60分', '60-80分', '80-100分', '100-200分'];
var yData = [11, 21, 9, 3, 24, 11];

let series = [
    {
        type: 'pictorialBar',
        symbol: 'path://M35,0L35,70L0,70z M35,0L35,70L70,70z',
        data: yData,
        barWidth: 26,
        symbolOffset: [0, -10],
        z: 99,
        itemStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                    {
                        offset: 0,
                        color: color[1],
                    },
                    {
                        offset: 0.5,
                        color: color[1],
                    },
                    {
                        offset: 0.5,
                        color: color[0],
                    },
                    {
                        offset: 1,
                        color: color[0],
                    },
                ]),
                opacity: 1,
            },
        },
    },
    {
        type: 'pictorialBar',
        symbol: 'diamond',
        barWidth: 26,
        symbolSize: ['100%', 20],
        z: 99,
        itemStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                    {
                        offset: 0,
                        color: color[1],
                    },
                    {
                        offset: 0.5,
                        color: color[1],
                    },
                    {
                        offset: 0.5,
                        color: color[0],
                    },
                    {
                        offset: 1,
                        color: color[0],
                    },
                ]),
                opacity: 1,
            },
        },
        data: yData,
    },
];
option = {
    tooltip: {
        show: true,
        formatter: '{c}' + '个人',
    },
    toolbox: {
        show: true,
        top: 10,
        right: 10,
        feature: {
            magicType: { show: true, type: ['line'] },
            restore: { show: true },
            saveAsImage: { show: true },
        },
    },
    dataZoom: [
        {
            type: 'slider',
            filterMode: 'filter',
            show: true,
            backgroundColor: '#DAEAF8',
            height: 20,
            handleStyle: {
                color: '#66B8FE',
                borderColor: '#66B8FE',
            },
        },
    ],
    grid: {
        borderWidth: 0,
        bottom: 65,
        right: 40,
        left: 60,
        textStyle: {
            color: '#fff',
        },
    },
    xAxis: [
        {
            type: 'category',
            axisLine: {
                lineStyle: {
                    color: '#EAEAEA',
                },
            },
            axisTick: {
                show: false,
            },
            axisLabel: {
                interval: 0,
                formatter: function (value, index) {
                    if (index == 0) {
                        return `{clickItem|${value}}`;
                    } else {
                        return `{defalutItem|${value}}`;
                    }
                },
                rich: {
                    clickItem: {
                        // 让年度信息更醒目
                        color: '#F46405',
                        fontWeight: 'bold',
                    },
                    defalutItem: {
                        color: '#666',
                    },
                },
                textStyle: {
                    fontSize: 14,
                },
            },
            data: xData,
        },
    ],
    yAxis: [
        {
            type: 'value',
            name: '(个数)',
            nameTextStyle: {
                padding: [0, 50, 0, 0],
                color: '#666',
            },
            axisTick: {
                show: false,
            },
            axisLine: {
                show: false,
            },
            axisLabel: {
                textStyle: {
                    color: '#666',
                    fontSize: 16,
                },
            },
            splitLine: {
                show: true,
                lineStyle: {
                    color: '#EAEAEA',
                },
            },
        },
    ],
    series,
};
myChart.on('click', function (params) {
    myChart.setOption({
        xAxis: [
            {
                axisLabel: {
                    interval: 0,
                    formatter: function (value, index) {
                        if (value == params.name) {
                            return `{clickItem|${value}}`;
                        } else {
                            return `{defalutItem|${value}}`;
                        }
                    },
                },
            },
        ],
    });
    // emit('getMonth', params);
});
