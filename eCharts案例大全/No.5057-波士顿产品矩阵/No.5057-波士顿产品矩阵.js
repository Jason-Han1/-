let marksData = [
    {
        value: [25, 15, 150],
        name: '数据2',
    },
    {
        value: [45, 35, 100],
        name: '数据3',
    },
    {
        value: [85, 15, 100],
        name: '数据4',
    },
    {
        value: [35, 75, 100],
        name: '数据5',
    }
];
option = {
    color: ['rgba(51, 103, 214, .5)'],
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            // type: 'cross'
        },
        backgroundColor: 'rgba(245, 245, 245, 0.8)',
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
        formatter: function (params) {
            let result = params.map((item) => {
                return item.name;
            });
            return result.join('<br/>');
        },
        textStyle: {
            color: '#000',
        },
    },
    grid: {
        left: 26,
        right: 4,
        top: 4,
        bottom: 26,
        containLabel: false,
    },
    visualMap: [
        {
            show: false,
            left: 'right',
            top: '10%',
            dimension: 2,
            itemWidth: 30,
            itemHeight: 120,
            calculable: true,
            precision: 0.1,
            text: ['圆形大小'],
            padding: [30, 0, 0, 30],
            textGap: 20,
            textStyle: {
                color: '#000',
            },
            inRange: {
                symbolSize: [10, 70],
            },
            outOfRange: {
                symbolSize: [10, 70],
                color: ['rgba(255, 255, 255, .2)'],
            },
            controller: {
                inRange: {
                    color: ['rgba(51, 103, 214, .5)'],
                },
                outOfRange: {
                    color: ['#e1e1e1'],
                },
            },
        },
    ],
    xAxis: {
        type: 'value',
        name: '市场份额',
        nameLocation: 'center',
        scale: true,
        splitNumber: 12,
        nameGap: 8,
        min: 0,
        max: 100,
        axisLabel: {
            fontSize: 14,
            formatter: function (value) {
                if (value === 10) {
                    return '低';
                } else if (value === 90) {
                    return '高';
                }
            },
        },
        nameTextStyle: {
            fontSize: 14,
        },
        splitLine: {
            show: true,
            lineStyle: {
                color: '#e1e1e1',
            },
        },
        axisTick: {
            show: false,
        },
        axisLine: {
            lineStyle: {
                color: '#999',
            },
        },
    },
    yAxis: {
        type: 'value',
        name: '市场增长',
        scale: true,
        min: 0,
        max: 100,
        splitNumber: 10,
        nameGap: 8,
        nameLocation: 'center',
        axisLabel: {
            fontSize: 14,
            formatter: function (value) {
                if (value === 10) {
                    return '低';
                } else if (value === 90) {
                    return '高';
                }
            },
        },
        nameTextStyle: {
            fontSize: 14,
        },
        axisTick: {
            show: true,
        },
        splitLine: {
            show: true,
            lineStyle: {
                color: '#e1e1e1',
            },
        },
        axisLine: {
            lineStyle: {
                color: '#999',
            },
        },
    },
    series: {
        type: 'scatter',
        label: {
            show: true,
            formatter: '{b}',
        },
        itemStyle: {},
        markLine: {
            animation: false,
            lineStyle: {
                color: '#000',
                type: 'solid',
                width: 1,
            },
            label: {
                show: false,
                position: 'start',
                formatter: '{b}',
                fontSize: 11,
                color: '#666',
            },
            symbol: ['none', 'none'],
            silent: true,
            data: [
                {
                    xAxis: 50,
                },
                {
                    yAxis: 50,
                },
            ],
        },
        markArea: {
            silent: true,
            label: {
                align: 'center',
                position: ['50%', '43%'],
                fontSize: 30,
                fontWeight: '700',
                color: 'rgba(0, 0, 0, 0.2)',
            },
            itemStyle: {
                color: 'transparent',
            },
            data: [
                [
                    {
                        name: '问题业务',
                        yAxis: 50,
                        xAxis: 0,
                    },
                    {
                        yAxis: 100,
                        xAxis: 50,
                    },
                ],
                [
                    {
                        name: '明星业务',
                        yAxis: 50,
                        xAxis: 50,
                    },
                    {
                        yAxis: 100,
                        xAxis: 100,
                    },
                ],
                [
                    {
                        name: '瘦狗业务',
                        yAxis: 0,
                        xAxis: 0,
                    },
                    {
                        yAxis: 50,
                        xAxis: 50,
                    },
                ],
                [
                    {
                        name: '金牛业务',
                        yAxis: 0,
                        xAxis: 50,
                    },
                    {
                        yAxis: 50,
                        xAxis: 100,
                    },
                ],
            ],
        },
        data: marksData,
    },
};
