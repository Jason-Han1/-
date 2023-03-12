var yLabel = [
    '27F',
    '26F',
    '25F',
    '24F',
    '23F',
    '22F',
    '21F',
    '20F',
    '19F',
    '18F',
    '17F',
    '16F',
    '15F',
    '14F',
    '13F',
    '12F',
    '11F',
    '10F',
    '9F',
    '8F',
    '7F',
    '6F',
    '5F',
    '4F',
    '3F',
    '2F',
    '1F',
];
var yData = [52, 5, 38, 12, 20, 52, 5, 38, 12, 20, 5, 38, 12, 20, 50, 5, 38, 12, 20, 5, 38, 12, 20, 5, 38, 12, 20];
var yData1 = [30, 5, 30, 12, 20, 30, 5, 30, 12, 20, 5, 30, 12, 20, 30, 5, 30, 12, 20, 5, 30, 12, 20, 5, 30, 12, 20];
var yData2 = [22, 0, 8, 0, 0, 22, 0, 8, 0, 0, 0, 8, 0, 0, 20, 0, 8, 0, 0, 0, 8, 0, 0, 0, 8, 0, 0];

option = {
    backgroundColor: 'black',
    grid: {
        left: '12%',
        right: '12%',
        bottom: '10%',
        top: '10%',
        containLabel: true,
    },
    xAxis: {
        show: true,
        type: 'value',
        position: 'top',
        name: '(KWh)',
        nameLocation: 'end',
        nameTextStyle: {
            color: '#c8e7ff',
            fontSize: 12,
            height: 30,
            verticalAlign: 'bottom',
            lineHeight: 30,
        },
        axisTick: {
            show: true,
            length: 1,
            inside: true,
            lineStyle: {
                color: '#218feb',
                width: 3,
                cap: 'round',
            },
        },
        axisLabel: {
            show: true,
            textStyle: {
                color: '#c8e7ff',
                fontSize: 14,
                fontFamily: 'siyuan',
            },
        },
        splitLine: {
            show: true,
            lineStyle: {
                color: '#053360',
                type: 'dashed',
            },
        },
        axisLine: {
            show: true,
            symbol: ['none', 'arrow'],
            symbolSize: [5, 10],
            lineStyle: {
                type: 'solid',
                color: '#033e59',
                width: 1,
            },
        },
    },
    yAxis: [
        {
            type: 'category',
            inverse: true,

            axisLabel: {
                show: true,
                textStyle: {
                    color: '#c8e7ff',
                    fontSize: 14,
                    fontFamily: 'siyuan',
                },
            },
            splitLine: {
                show: false,
            },
            axisTick: {
                show: false,
            },
            axisLine: {
                show: true,
                lineStyle: {
                    color: '#033e59',
                    width: 1,
                },
            },
            data: yLabel,
        },
    ],
    series: [
        {
            name: '未超出',
            type: 'bar',
            stack: 'total', //叠加
            zlevel: 3,
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                        { offset: 0, color: 'rgba(31,75,117, 0)' },
                        { offset: 1, color: 'rgb(31,75,117)' },
                    ]),
                    shadowBlur: 0,
                    shadowColor: 'rgba(87,220,222,0.7)',
                },
            },
            markLine: {
                lineStyle: {
                    color: '#e83737',
                },
                data: [
                    {
                        name: 'Y 轴值为 100 的水平线',
                        xAxis: 30,
                    },
                ],
            },
            barWidth: 10,
            data: yData1,
        },
        {
            name: '超出',
            type: 'bar',
            stack: 'total',
            zlevel: 1,
            itemStyle: {
                normal: {
                    color: '#e83737',
                    shadowBlur: 0,
                    shadowColor: 'rgba(87,220,222,0.7)',
                },
            },
            barWidth: 10,
            data: yData2,
        },
        {
            type: 'bar',
            zlevel: -1,
            stack: 'total',
            barWidth: 10,
            label: {
                show: true,
                color: '#c8e7ff',
                position: [10, 0],
                distance: 0,
            },
            itemStyle: {
                color: 'transparent',
            },
            data: yData,
        },
    ],
};
