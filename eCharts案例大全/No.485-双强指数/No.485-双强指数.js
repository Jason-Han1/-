option = {
    backgroundColor: '#0c2d55',
    legend: {
        data: [
            {
                name: '党建活力指数',
                icon: 'circle',
            },
            {
                name: '企业健康指数',
                icon: 'circle',
            },
        ],
        left: 'center',
        bottom: 10,
        textStyle: {
            color: '#fff',
        },
        itemWidth: 12,
        itemHeight: 12,
    },
    tooltip: {
        trigger: 'axis',
        backgroundColor: 'transparent',
        borderWidth: 1,
        borderColor: '#106b9e',
        textStyle: {
            color: '#fff',
        },
    },
    grid: {
        borderWidth: 0,
        top: '15%',
        bottom: '15%',
        left: '10%',
        right: '20%',
        textStyle: {
            color: '#fff',
        },
    },
    calculable: true,
    xAxis: [
        {
            name: '季度',
            type: 'category',
            axisLine: {
                lineStyle: {
                    color: '#fff',
                    fontSize: '12',
                },
            },
            splitLine: {
                show: false,
            },
            axisTick: {
                show: false,
            },
            data: ['第一季度', '第二季度', '第三季度', '第四季度'],
        },
    ],

    yAxis: [
        {
            // name: '指数',
            type: 'value',
            splitLine: {
                show: false,
            },
            axisLine: {
                show: true,
                lineStyle: {
                    color: '#fff',
                },
            },
            axisTick: {
                show: true,
            },
        },
    ],
    series: [
        {
            name: '党建活力指数',
            type: 'line',
            symbolSize: 10,
            symbol: 'circle',
            itemStyle: {
                color: '#F18F24',
            },
            label: {
                show: true,
                textStyle: {
                    color: '#fff',
                    fontSize: 14,
                    fontFamily: 'DIN',
                },
                position: 'top',
                formatter: function (p) {
                    return p.value > 0 ? p.value : '';
                },
            },
            areaStyle: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    {
                        offset: 0,
                        color: '#F18F24',
                    },
                    {
                        offset: 1,
                        color: '#F18F2403',
                    },
                ]),
            },
            data: [25, 18, 54, 55],
        },
        {
            name: '企业健康指数',
            type: 'line',
            symbolSize: 8,
            symbol: 'circle',
            itemStyle: {
                color: '#F7783A',
            },
            label: {
                show: true,
                textStyle: {
                    color: '#fff',
                    fontSize: 14,
                    fontFamily: 'DIN',
                },
                position: 'top',
                formatter: function (p) {
                    return p.value > 0 ? p.value : '';
                },
            },
            areaStyle: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    {
                        offset: 0,
                        color: '#F7783A',
                    },
                    {
                        offset: 1,
                        color: '#F18F2403',
                    },
                ]),
            },
            data: [20, 30, 44, 53],
        },
    ],
};
