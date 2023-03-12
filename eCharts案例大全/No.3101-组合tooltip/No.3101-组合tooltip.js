option = {
    tooltip: {},
    legend: {
        data: ['最高气温', '最低气温'],
    },
    xAxis: {
        type: 'category',
        axisPointer: {
            show: true,
            type: 'line',
        },
        data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
    },
    yAxis: {
        type: 'value',
    },
    series: [
        {
            name: '最高气温',
            type: 'line',
            // echarts v5.0+
            // emphasis: {
            //     focus: 'self',
            // },
            data: [11, 11, 11.2, 11.3, 11.4, 11.5, 10],
        },
        {
            type: 'line',
            // emphasis: {
            //     focus: 'self',
            //     blurScope: 'global',
            // },
            markLine: {
                tooltip: {  formatter: '{a}, {b}，{c}，{d}，{e}' },
                data: [{ yAxis: 8, name: '这里是全局参考线8' }],
            },
            markArea: {
                data: [
                    [
                        {
                            name: '这里是全局参考区域提示',
                            yAxis: 3,
                        },
                        {
                            yAxis: 6,
                        },
                    ],
                ],
            },
        },
        {
            name: '最低气温',
            type: 'line',
            // emphasis: {
            //     focus: 'series',
            // },
            data: [1, -2, 2, 5, 3, 2, 0],
            markLine: {
                data: [
                    { type: 'average', name: '这里是系列参考线-平均值' },
                    [
                        {
                            symbol: 'none',
                            x: '90%',
                            yAxis: 'max',
                        },
                        {
                            symbol: 'circle',
                            label: {
                                position: 'start',
                                formatter: '最大值',
                            },
                            type: 'max',
                            name: '这里是系列参考线-最高点',
                        },
                    ],
                ],
            },
        },
    ],
};
