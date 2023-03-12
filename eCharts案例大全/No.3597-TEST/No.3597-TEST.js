function Pie() {
    let dataArr = [];
    for (var i = 0; i < 80; i++) {
        if (i % 10 === 1) {
            dataArr.push({
                name: (i + 0).toString(),
                value: 500,
                itemStyle: {
                    normal: {
                        color: '#8d9094',
                        borderWidth: 0,
                        borderColor: 'rgba(0,0,0,0)',
                    },
                },
            });
        } else {
            dataArr.push({
                name: (i + 1).toString(),
                value: 70,
                itemStyle: {
                    normal: {
                        color: 'rgba(0,0,0,0)',
                        borderWidth: 0,
                        borderColor: 'rgba(0,0,0,0)',
                    },
                },
            });
        }
    }
    return dataArr;
}
option = {
    backgroundColor: '#373d55',
    tooltip: {},
    radar: {
        radius: '60%',
        center: ['50%', '50%'],
        // startAngle: 0,
        splitNumber: 10,
        z: 50,
        nameGap: '15',
        name: {
            textStyle: {
                color: '#8d9094',
                fontSize: 14,
            },
        },
        axisLine: {
            lineStyle: {
                color: '#8d9094',
            },
        },
        splitLine: {
            lineStyle: {
                width: 1,
                color: 'rgba(0,0,0,0)',
                shadowColor: '#fff',
                shadowBlur: 0,
                shadowOffsetX: 0.5,
                shadowOffsetY: 0.5,
            },
        },
        splitArea: {
            areaStyle: {
                color: ['rgba(137, 137, 137, 0', 'rgba(0, 255, 255, 0'].reverse(),
            },
        },
        indicator: [
            {
                name: 'A',
                max: 100,
            },
            {
                name: 'B',
                max: 100,
            },
            {
                name: 'C',
                max: 100,
            },
            {
                name: 'D',
                max: 100,
            },
            {
                name: 'E',
                max: 100,
            },
            {
                name: 'F',
                max: 100,
            },
            {
                name: 'G',
                max: 100,
            },
            {
                name: 'H',
                max: 100,
            },
        ],
    },
    xAxis: [
        {
            show: false,
            type: 'category',
            boundaryGap: false,
            splitLine: {
                show: true,
                lineStyle: {
                    type: 'dotted',
                    // color: '#495170'
                    width: 2.5,
                    color: {
                        type: 'linear',
                        x: 0,
                        y: 0,
                        x2: 0,
                        y2: 1,
                        colorStops: [
                            {
                                offset: 0,
                                color: 'rgba(0, 255, 255,0)',
                            },
                            {
                                offset: 0.5,
                                color: 'rgba(0, 255, 255,1)',
                            },
                            {
                                offset: 1,
                                color: 'rgba(0, 255, 255,0)',
                            },
                        ],
                        global: false,
                    },
                },
                interval: 0,
            },
            axisTick: {
                lineStyle: {
                    color: '#00F2FD',
                    width: '3',
                },
            },
            axisLine: {
                show: false,
            },
            axisLabel: {
                show: true,
                textStyle: {
                    color: '#fff',
                },
            },
            data: ['15:14'],
        },
    ],
    yAxis: [
        {
            show: false,
            splitNumber: 2,
            type: 'value',
            axisLine: {
                show: false,
                lineStyle: {
                    color: '#0F0',
                },
            },
            axisTick: {
                show: false,
            },
            splitLine: {
                show: false,
                lineStyle: {
                    color: '#646464',
                    type: 'dotted',
                },
            },
            axisLabel: {
                textStyle: {
                    color: '#fff',
                },
            },
        },
        {
            type: 'value',
            axisLine: {
                show: false,
                lineStyle: {
                    color: '#5c5d89',
                },
            },
            axisTick: {
                show: false,
            },
            splitLine: {
                show: false,
            },
            axisLabel: {
                textStyle: {
                    color: '#5c5d89',
                },
            },
        },
    ],
    series: [
        {
            name: 'Title✍',
            type: 'radar',
            symbolSize: 0,
            z: 66,
            itemStyle: {
                // color: 'rgba(255, 197, 0, 1)',
                // borderColor: 'rgba(255, 197, 0, 0.5)',
                // borderWidth: 10,
                // shadowColor: 'rgba(0, 0, 0, .5)',
                // shadowBlur: 5,
                // shadowOffsetX: 5,
                // shadowOffsetY: 5,
            },
            lineStyle: {
                normal: {
                    type: 'dashed',
                    color: 'rgba(245, 166, 35, 1)',
                    width: 0,
                },
            },
            areaStyle: {
                normal: {
                    width: 1,
                    opacity: 1,
                    shadowColor: 'rgba(0, 0, 0, .3)',
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowOffsetY: 0,
                },
            },
            data: [
                {
                    itemStyle: {
                        normal: {
                            color: '#e65291',
                        },
                    },
                    value: [70, 30, 70, 30, 70, 30,70, 30],
                },
            ],
        },
        {
            name: 'Title✍',
            type: 'radar',
            symbolSize: 0,
            z: 66,
            itemStyle: {
                // color: 'rgba(255, 197, 0, 1)',
                // borderColor: 'rgba(255, 197, 0, 0.5)',
                // borderWidth: 10,
                // shadowColor: 'rgba(0, 0, 0, .5)',
                // shadowBlur: 5,
                // shadowOffsetX: 5,
                // shadowOffsetY: 5,
            },
            lineStyle: {
                normal: {
                    type: 'dashed',
                    color: 'rgba(245, 166, 35, 1)',
                    width: 0,
                },
            },
            areaStyle: {
                normal: {
                    width: 1,
                    opacity: 1,
                    shadowColor: 'rgba(0, 0, 0, .3)',
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowOffsetY: 0,
                },
            },
            data: [
                {
                    itemStyle: {
                        normal: {
                            color: '#4f4fe3',
                        },
                    },
                    value: [30, 70, 30, 70, 30, 70, 30, 70],
                },
            ],
        },
        {
            type: 'pie',
            zlevel: 0,
            silent: true,
            startAngle: -32,
            radius: ['60%', '61.5%'],
            z: 0,
            label: {
                normal: {
                    show: false,
                },
            },
            labelLine: {
                normal: {
                    show: false,
                },
            },
            data: Pie(),
        },
        {
            name: '',
            z: 0,
            type: 'pie',
            cursor: 'default',
            radius: ['57.3%', '58%'],
            startAngle: 225,
            hoverAnimation: false,
            legendHoverLink: false,
            labelLine: {
                normal: {
                    show: false,
                },
            },
            data: [
                {
                    value: 100,
                    itemStyle: {
                        color: 'rgba(133,136,153,.3)',
                    },
                },
            ],
        },
        {
            name: '',
            z: 0,
            type: 'pie',
            cursor: 'default',
            radius: ['0', '54%'],
            startAngle: 225,
            hoverAnimation: false,
            legendHoverLink: false,
            labelLine: {
                normal: {
                    show: false,
                },
            },
            data: [
                {
                    value: 100,
                    itemStyle: {
                        shadowColor: 'rgba(0, 255, 255, 1)',
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowOffsetY: 0,
                        color: new echarts.graphic.RadialGradient(0.4, 0.3, 1.1, [
                            {
                                offset: 0,
                                color: 'rgba(165, 171, 202, 1)',
                            },
                            {
                                offset: 0.25,
                                color: 'rgba(125, 134, 170, 1)',
                            },
                            {
                                offset: 0.5,
                                color: 'rgba(30, 40, 84, 1)',
                            },
                            {
                                offset: 1,
                                color: 'rgba(18, 25, 55, 1)',
                            },
                        ]),
                    },
                },
            ],
        },

        {
            type: 'effectScatter',
            rippleEffect: {
                period: 5,
                scale: 6,
                brushType: 'stroke',
            },
            z: 9,
            symbolSize: [50, 50],
            symbolOffset: ['0', '190'],
            itemStyle: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    {
                        offset: 0,
                        color: 'rgba(0, 255, 255, .2)',
                    },
                    {
                        offset: 1,
                        color: 'rgba(0, 255, 255, .7)',
                    },
                ]),

                opacity: 1,
                borderWidth: 0,
            },
            symbolPosition: 'end',
            data: [1],
        },
        {
            type: 'effectScatter',
            rippleEffect: {
                period: 3,
                scale: 6,
                brushType: 'fill',
            },
            z: 9,
            symbolSize: [50, 50],
            symbolOffset: ['0', '190'],
            itemStyle: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    {
                        offset: 0,
                        color: 'rgba(0, 255, 255, .1)',
                    },
                    {
                        offset: 1,
                        color: 'rgba(0, 255, 255, .3)',
                    },
                ]),

                opacity: 1,
                borderWidth: 0,
            },
            symbolPosition: 'end',
            data: [1],
        },
    ],
};
