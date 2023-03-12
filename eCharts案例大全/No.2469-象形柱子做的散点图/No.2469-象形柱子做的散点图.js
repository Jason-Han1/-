var xData2 = ['A', 'B', 'C', 'D', 'E'];
var data1 = [100, 60, 130, 170, 140];
option = {
    backgroundColor: '#ccc',
    tooltip: {
        trigger: 'item',
    },
    grid: {
        left: 100,
        bottom: 100,
    },
    xAxis: {
        axisLabel: {
            interval: 0,
            textStyle: {
                color: 'rgba(65, 49,28, .9)',
                fontSize: 30,
                fontFamily: 'FZYaoti',
                fontWeight: 100,
            },
            margin: 20,
        },
        splitLine: {
            show: false,
        },
        axisLine: {
            lineStyle: {
                color:  '#485a66',
                width: 1,
            },
        },
        splitArea: {
            show: false,
        },
        axisTick: {
            show: false,
        },
        data: ['A', 'B', 'C', 'D', 'E'],
    },
    yAxis: {
        axisLine: {
            lineStyle: {
                color: '#485a66',
                width: 1,
            },
        },
        axisLabel: {
            interval: 0,
            textStyle: {
                color: '#42321c',
                fontSize: 20,
                fontFamily: 'FZYaoti',
            },
            margin: 20,
        },
        splitLine: {
            show: false,
            lineStyle: {
                color: 'rgba(255, 255,255, .8)',
                width: 2,
            },
        },
        axisTick: {
            show: false,
        },
    },
    series: [
        {
            name: '',
            type: 'pictorialBar',
            symbolSize: [45, 45],
            // "symbolOffset": [0, -10],
            z: 12,
            label: {
                show: true,
                formatter: '{c}',
                position: 'top',
                distance: -30,
                color: '#fff',
                fontFamily: 'FZYaoti',
                fontWeight: 600,
                textShadowColor: 'rgba(255, 255, 255, .6)',
                fontSize: 18,
                textShadowBlur: '0',
                // textShadowOffsetX: 1,
                // textShadowOffsetY: 1,
            },
            itemStyle: {
                // opacity: 0.8,
                color: 'rgba(8, 111, 91,0.8)',
                // shadowColor:"#076654",
                shadowColor: 'rgba(6, 59, 62, 0.8)',
                shadowBlur: 20,
            },
            markLine: {
                label: {
                    color: 'rgba(255,255,255,0)',
                    // fontSize: 14,
                    // formatter: "{b}"
                },
                symbolSize: 0,
                lineStyle: {
                    type: 'solid',
                    color: 'red',
                },
                data: [
                    {
                        name: 'line1',
                        yAxis: 100,
                    },
                    {
                        name: 'line2',
                        yAxis: 30,
                    },
                ],
            },
            symbolPosition: 'end',
            data: data1,
        },
    ],
};

