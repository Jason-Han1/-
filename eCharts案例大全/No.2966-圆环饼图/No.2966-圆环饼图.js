const barData = [
    333,
    320,
    310,
    300,
    290,
    280,
    270,
    260,
    250,
    240,
    230,
    220,
    210
];
const barData1 = barData.slice(1, barData.length);
barData1.unshift({
    value: barData[0],
    itemStyle: {
        normal: {
            color: {
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                type: 'linear',
                global: false,
                colorStops: [
                    {
                        offset: 0,
                        color: '#71E1A2',
                    },
                    {
                        offset: 1,
                        color: '#05C056',
                    },
                ],
            },
        },
    },
});
const barData2 = barData.slice(1, barData.length);
barData2.unshift({
    value: barData[0],
    itemStyle: {
        normal: {
            color: '#05C056',
        },
    },
});
const barData3 = barData.slice(1, barData.length);
barData3.unshift({
    value: barData[0],
    itemStyle: {
        normal: {
            color: '#ACF6CC',
        },
    },
});

option = {
    tooltip: {
        trigger: 'axis',
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        borderColor: 'rgba(0, 0, 0, 0.8)',
        textStyle: {
            color: '#fff',
        },
        formatter: '{a0}<br />{b0}: {c0}人',
    },
    grid: {
        left: 10,
        right: 10,
        bottom: 10,
        top: 20,
        containLabel: true,
    },
    yAxis: {
        type: 'value',
        axisLabel: {
            formatter: '{value}人',
        },
    },
    xAxis: {
        type: 'category',
        data: [
            '办公厅',
            '发行部',
            '非公部',
            '市场一部',
            '市场二部',
            '机构部',
            '上市部',
            '期货部',
            '稽查局',
            '法律部',
            '行政处罚委',
            '会计部',
            '国际部'
        ],
        axisLabel: {
            interval: 0,
        },
        boundaryGap: true,
        axisTick: {
            show: false,
        },
        splitLine: {
            show: true,
        },
        axisLine: {
            show: false,
        },
    },
    series: [
        {
            // 柱底圆片
            name: '部门单位授权情况',
            type: 'pictorialBar',
            symbolSize: [10, 5], // 调整截面形状
            symbolOffset: [0, 2],
            z: 12,
            itemStyle: {
                normal: {
                    color: '#2D84FB',
                },
            },
            data: barData2,
        },

        // 柱体
        {
            name: '',
            type: 'bar',
            barWidth: 10,
            barGap: '0%',
            itemStyle: {
                normal: {
                    color: {
                        x: 0,
                        y: 0,
                        x2: 0,
                        y2: 1,
                        type: 'linear',
                        global: false,
                        colorStops: [
                            {
                                // 第一节下面
                                offset: 0,
                                color: '#8EBAF7',
                            },
                            {
                                offset: 1,
                                color: '#2D84FB',
                            },
                        ],
                    },
                },
            },

            data: barData1,
        },

        // 柱顶圆片
        {
            name: '',
            type: 'pictorialBar',
            symbolSize: [10, 4], // 调整截面形状
            symbolOffset: [0, -2],
            z: 12,
            symbolPosition: 'end',
            itemStyle: {
                normal: {
                    color: '#C0D9FD',
                },
            },
            data: barData3,
        },
    ],
};
