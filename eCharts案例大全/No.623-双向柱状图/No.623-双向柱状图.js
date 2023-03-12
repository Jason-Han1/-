const myData = [
    '地区一',
    '地区二',
    '地区三',
    '地区四',
    '地区五',
    '地区六',
    '地区七',
    '地区八',
    '地区九',
    '地区十',
    '地区十一',
    '地区十二',
    '地区十三',
    '地区十四',
    '地区十五',
    '地区十六',
];

const vehicle = [389, 259, 262, 324, 232, 176, 196, 214, 133, 370, 268, 360, 185, 392, 392, 153];
const personnel = [121, 388, 233, 309, 133, 308, 297, 283, 349, 273, 229, 238, 224, 291, 185, 203];
option = {
    tooltip: {
        show: true,
    },
    grid: [
        {
            show: false,
            left: '0',
            top: 0,
            bottom: 22,
            width: '15%',
        },
        {
            show: false,
            left: '20%',
            top: 0,
            bottom: 0,
            containLabel: true,
            width: '39%',
        },
        {
            show: false,
            right: '2%',
            top: 0,
            bottom: 0,
            containLabel: true,
            width: '39%',
        },
    ],
    xAxis: [
        {
            gridIndex: 0,
            show: false,
        },
        {
            gridIndex: 1,
            type: 'value',
            inverse: true,
            axisLine: {
                show: false,
            },
            axisTick: {
                show: false,
            },
            axisLabel: {
                show: true,
                verticalAlign: 'middle',
                textStyle: {
                    color: '#B2B2B2',
                    fontSize: 12,
                },
            },
            splitLine: {
                show: false,
            },
        },
        {
            gridIndex: 2,
            type: 'value',
            axisLine: {
                show: false,
            },
            axisTick: {
                show: false,
            },
            axisLabel: {
                show: true,
                verticalAlign: 'middle',
                textStyle: {
                    color: '#B2B2B2',
                    fontSize: 12,
                },
            },
            splitLine: {
                show: false,
            },
        },
    ],
    yAxis: [
        {
            gridIndex: 0,
            type: 'category',
            inverse: true,
            position: 'right',
            axisLine: {
                show: false,
            },
            axisTick: {
                show: false,
            },
            data: myData.map(function (value) {
                return {
                    value: value,
                    textStyle: {
                        align: 'right',
                    },
                };
            }),
            axisLabel: {
                fontSize: 14,
                align: 'left',
                rich: {
                    a: {
                        color: '#fff',
                        backgroundColor: '#49a2ff',
                        width: 24,
                        height: 24,
                        align: 'center',
                        borderRadius: 3,
                    },
                    a1: {
                        color: '#fff',
                        backgroundColor: '#f5576c',
                        width: 24,
                        height: 24,
                        align: 'center',
                        borderRadius: 3,
                    },
                    a2: {
                        color: '#fff',
                        backgroundColor: '#fee140',
                        width: 24,
                        height: 24,
                        align: 'center',
                        borderRadius: 3,
                    },
                    a3: {
                        color: '#fff',
                        backgroundColor: '#96fbc4',
                        width: 24,
                        height: 24,
                        align: 'center',
                        borderRadius: 3,
                    },
                    b: {
                        color: '#333',
                        width: 100,
                        height: 30,
                        align: 'right',
                    },
                },
                formatter: function (params) {
                    var index = myData.map((item) => item).indexOf(params);
                    index = index + 1;
                    if (index < 4) {
                        return [`{a${index}|${index}}{b|${params}}`].join('\n');
                    } else {
                        return [`{a|${index}}{b|${params}}`].join('\n');
                    }
                },
            },
        },
        {
            gridIndex: 1,
            type: 'category',
            inverse: true,
            position: 'right',
            axisLine: {
                show: false,
            },
            axisTick: {
                show: false,
            },
            axisLabel: {
                show: false,
                margin: 8,
                textStyle: {
                    color: '#9D9EA0',
                    fontSize: 12,
                },
            },
            data: myData,
        },
        {
            gridIndex: 2,
            type: 'category',
            inverse: true,
            position: 'left',
            axisLine: {
                show: false,
            },
            axisTick: {
                show: false,
            },
            axisLabel: {
                show: false,
                textStyle: {
                    color: '#9D9EA0',
                    fontSize: 12,
                },
            },
            data: myData,
        },
    ],
    series: [
        {
            name: '车辆',
            type: 'bar',
            barGap: 20,
            barWidth: 20,
            xAxisIndex: 1,
            yAxisIndex: 1,
            showBackground: true,
            backgroundStyle: {
                color: 'rgba(180, 180, 180, 0.2)',
            },
            label: {
                normal: {
                    show: false,
                },
                emphasis: {
                    show: true,
                    position: 'left',
                    offset: [0, 0],
                    textStyle: {
                        color: '#666666',
                        fontSize: 14,
                    },
                },
            },
            itemStyle: {
                normal: {
                    barBorderRadius: [10, 0, 0, 10],
                    color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                        {
                            offset: 0,
                            color: '#e0c3fc',
                        },
                        {
                            offset: 1,
                            color: '#8ec5fc',
                        },
                    ]),
                },
            },
            data: vehicle,
        },

        {
            name: '人员',
            type: 'bar',
            barGap: 20,
            barWidth: 20,
            xAxisIndex: 2,
            yAxisIndex: 2,
            showBackground: true,
            backgroundStyle: {
                color: 'rgba(180, 180, 180, 0.2)',
            },
            label: {
                normal: {
                    show: false,
                },
                emphasis: {
                    show: true,
                    position: 'right',
                    offset: [0, 0],
                    textStyle: {
                        color: '#666666',
                        fontSize: 14,
                    },
                },
            },
            itemStyle: {
                normal: {
                    barBorderRadius: [0, 10, 10, 0],
                    color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                        {
                            offset: 0,
                            color: '#66a6ff',
                        },
                        {
                            offset: 1,
                            color: '#89f7fe',
                        },
                    ]),
                },
            },
            data: personnel,
        },
    ],
};
