var barColors = [
    new echarts.graphic.LinearGradient(0, 0, 0, 1, [
        {
            offset: 0,
            color: 'rgba(224, 120, 65, 1)',
        },
        {
            offset: 1,
            color: 'rgba(224, 120, 65, 0.2)',
        },
    ]),
    new echarts.graphic.LinearGradient(0, 0, 0, 1, [
        {
            offset: 0,
            color: 'rgba(79, 169, 212, 1)',
        },
        {
            offset: 1,
            color: 'rgba(79, 169, 212, 0.2)',
        },
    ]),
];
var xData=['完成投资', '计划投资']
option = {
    backgroundColor:'rgba(19, 52, 89, .5)',
    tooltip: {
        trigger: 'axis',
        backgroundColor: 'rgba(9, 24, 48, 0.5)',
        borderColor: 'rgba(75, 253, 238, 0.4)',
        textStyle: {
            color: '#CFE3FC',
        },
        formatter: function (params) {
            let str = '';
            for (let i = 0; i < params.length; i++) {
                str += `${params[i].name}<br/><span>${params[0].data}</span>亿元`;
            }
            return str;
        },
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '30px',
        containLabel: true,
    },
    xAxis: [
        {
            type: 'category',
            data: xData,
            axisTick: {
                show: false,
            },
            axisLine: {
                show: true,
                lineStyle: {
                    color: 'rgba(75, 132, 187, 1)',
                },
            },
            axisLabel: {
                interval: 0,
                fontSize: '20px',
                fontFamily: 'Source Han Sans CN',
                fontWeight: '400',
                color: '#CFE3FC',
            },
        },
    ],
    yAxis: [
        {
            type: 'value',
            axisTick: {
                show: false,
            },
            axisLine: {
                show: false,
            },
            axisLabel: {
                show: false,
            },
            splitLine: {
                show: false,
            },
        },
    ],
    series: [
        {
            type: 'bar',
            data: [862, 1018],
            emphasis: {
                focus: 'series',
            },
            showBackground: true,
            backgroundStyle: {
                color: 'rgba(22, 100, 105, .3)',
            },
            itemStyle: {
                color: function (p, index) {
                    return barColors[p.dataIndex];
                },
            },
            label: {
                show: true,
                position: 'insideTopLeft',
                formatter: ['{num|{c}}{text|亿元}'].join(''),

                rich: {
                    text: {
                        color: '#cadef8',
                        lineHeight: 10,
                        fontSize: '14px',
                    },
                    num: {
                        color: 'rgba(131, 193, 239, 1)',
                        fontSize: '18px',
                        fontWeight: '600',
                        fontFamily: 'Impact',
                    },
                },
            },
            barCategoryGap: '80%',
            markLine: {
                lineStyle: {
                    type: 'dashed',
                    color: 'rgba(0, 255, 246, 1)',
                },
                label: {
                    show: true,
                    position: 'middle',
                    formatter: ['{text|完成率}', '{num|200}{text|%}'].join(''),

                    rich: {
                        text: {
                            color: 'rgba(207, 227, 252, 1)',
                            lineHeight: 10,
                            fontSize: '14px',
                        },
                        num: {
                            color: 'rgba(253, 144, 38, 1)',
                            fontSize: '18px',
                            fontWeight: '600',
                            fontFamily: 'Impact',
                        },
                    },
                },
                data: [
                    [
                        {
                            coord: [0, 862],
                        },
                        {
                            coord: [1, 862],
                        },
                    ],
                ],
            },
        },
    ],
};
