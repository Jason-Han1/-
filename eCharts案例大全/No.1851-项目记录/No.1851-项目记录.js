var data = [
    '07:00-07:30',
    '07:00-07:30',
    '07:00-07:30',
    '07:00-07:30',
    '07:00-07:30',
    '07:00-07:30',
    '07:00-07:30',
    '07:00-07:30',
    '07:00-07:30',
    '07:00-07:30',
    '07:00-07:30',
    '07:00-07:30',
];
var data1 = [40, 25, 45, 30, 40, 25, 45, 30, 40, 25, 45, 30];
option = {
    tooltip: {
        trigger: 'axis',
    },
    backgroundColor:"#000",
    grid: {
        left: '3%',
        right: '3%',
        bottom: '0%',
        top: '3%',
        containLabel: true,
    },
    xAxis: [
        {
            type: 'category',
            boundaryGap: false,
            axisTick: {
                show: false,
            },
            axisLine: {
                lineStyle: {
                    color: '#1C3A9A',
                },
            },
            axisLabel: {
                margin: 10,
                textStyle: {
                    fontSize: 12,
                    color: '#b8eeff',
                },
                formatter: function (params) {
                    return params.split('-')[0] + '\n' + params.split('-')[1];
                },
            },
            data: data,
        },
    ],
    yAxis: [
        {
            type: 'value',
            axisTick: {
                show: false,
            },
            axisLine: {
                lineStyle: {
                    color: '#1C3A9A',
                },
            },
            axisLabel: {
                show: true,
                margin: 10,
                textStyle: {
                    fontSize: 14,
                    color: '#b8eeff',
                },
            },
            splitLine: {
                show: false,
                lineStyle: {
                    color: '#1C3A9A',
                },
            },
        },
    ],
    series: [
        {
            name: '',
            type: 'line',
            smooth: true,
            symbol: 'none',
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [
                        {
                            offset: 0,
                            color: '#49D2FF',
                        },
                        {
                            offset: 1,
                            color: '#23A6FF',
                        },
                    ]),
                    areaStyle: {
                        //color: '#94C9EC'
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                            {
                                offset: 0,
                                color: 'rgba(43,154,235,.38)',
                            },
                            {
                                offset: 1,
                                color: 'rgba(43,154,235,0)',
                            },
                        ]),
                    },
                },
            },

            lineStyle: {
                width: 2,
                shadowColor: '#061361',
                shadowBlur:5 ,
                shadowOffsetY: 10
            },
            data: data1,
        },
    ],
};
