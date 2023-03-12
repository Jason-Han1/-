option = {
    backgroundColor: '#273141',
    title: { 
        textStyle: {
            color: '#fff',
            fontSize: 20,
        },
        subtextStyle: {
            color: '#999',
            fontSize: 16,
        },
        x: 'center',
        top: '0%',
    },
    grid: {
        top: 500,
        bottom: 150,
    },
    tooltip: {
            show: false,
        
    },
    xAxis: {
        data: ['东门入口', '东门出口', '北门入口', '北门出口'],
        axisTick: {
            show: false,
        },
        axisLine: {
            show: false,
        },
        axisLabel: {
            interval: 0,
            textStyle: {
                color: '#beceff',
                fontSize: 20,
            },
            margin: 80, //刻度标签与轴线之间的距离。
        },
    },
    yAxis: {
        splitLine: {
            show: false,
        },
        axisTick: {
            show: false,
        },
        axisLine: {
            show: false,
        },
        axisLabel: {
            show: false,
        },
    },
    series: [
        {
            name: '',
            type: 'pictorialBar',
            symbolSize: [100, 45],
            symbolOffset: [0, -20],
            z: 12,
            data: [
                {
                    name: '关井数',
                    value: '50',
                    trueVal: '98',
                    symbolPosition: 'end',
                    itemStyle: {
                        normal: {
                            color: '#49CCFF', //圆柱顶部颜色
                        },
                    },
                },
                {
                    name: '开井数',
                    value: '50',
                    trueVal: '100',
                    symbolPosition: 'end',
                    itemStyle: {
                        normal: {
                            color: '#20D3AB', //圆柱顶部颜色
                        },
                    },
                },
                {
                    name: '不在线',
                    value: '1',
                    trueVal: '90',
                    symbolPosition: 'end',
                    itemStyle: {
                        normal: {
                            color: '#43bafe', //圆柱顶部颜色
                        },
                    },
                },
                {
                    name: '不在线2',
                    value: '1',
                    trueVal: '90',
                    symbolPosition: 'end',
                    itemStyle: {
                        normal: {
                            color: '#20D3AB', //圆柱顶部颜色
                        },
                    },
                },
            ],
        },
        {
            name: '',
            type: 'pictorialBar',
            symbolSize: [100, 45],
            symbolOffset: [0, 24],
            z: 12,
            data: [
                {
                    name: '关井数',
                    value: '50',
                    trueVal: '98',
                    itemStyle: {
                        normal: {
                            color: '#43bafe', //圆柱底部颜色
                        },
                    },
                },
                {
                    name: '开井数',
                    value: '50',
                    trueVal: '100',
                    itemStyle: {
                        normal: {
                            color: '#23E8BC', //圆柱底部颜色
                        },
                    },
                },
                {
                    name: '不在线',
                    value: '1',
                    trueVal: '90',
                    itemStyle: {
                        normal: {
                            color: '#43bafe', //圆柱底部颜色
                        },
                    },
                },
                {
                    name: '不在线2',
                    value: '1',
                    trueVal: '90',
                    itemStyle: {
                        normal: {
                            color: '#20D3AB', //圆柱底部颜色
                        },
                    },
                },
            ],
        },
        {
            name: '',
            type: 'pictorialBar',
            symbolSize: [150, 75],
            symbolOffset: [0, 44],
            z: 11,
            data: [
                {
                    name: '关井数',
                    value: '50',
                    trueVal: '98',
                    itemStyle: {
                        normal: {
                            color: 'transparent',
                            borderColor: '#43bafe', //底部内圆圈颜色
                            borderWidth: 5,
                        },
                    },
                },
                {
                    name: '开井数',
                    value: '50',
                    trueVal: '100',
                    itemStyle: {
                        normal: {
                            color: 'transparent',
                            borderColor: '#23E8BC', //底部内圆圈颜色
                            borderWidth: 5,
                        },
                    },
                },
                {
                    name: '不在线',
                    value: '1',
                    trueVal: '90',
                    itemStyle: {
                        normal: {
                            color: 'transparent',
                            borderColor: '#43bafe', //底部内圆圈颜色
                            borderWidth: 5,
                        },
                    },
                },
                {
                    name: '不在线2',
                    value: '1',
                    trueVal: '90',
                    itemStyle: {
                        normal: {
                            color: 'transparent',
                            borderColor: '#20D3AB', //底部内圆圈颜色
                            borderWidth: 5,
                        },
                    },
                },
            ],
        },
        {
            name: '',
            type: 'pictorialBar',
            symbolSize: [200, 100],
            symbolOffset: [0, 62],
            z: 10,
            data: [
                {
                    name: '关井数',
                    value: '50',
                    trueVal: '98',
                    itemStyle: {
                        normal: {
                            color: 'transparent',
                            borderColor: '#43bafe', //底部外圆圈颜色
                            borderType: 'dashed',
                            borderWidth: 5,
                        },
                    },
                },
                {
                    name: '开井数',
                    value: '50',
                    trueVal: '100',
                    itemStyle: {
                        normal: {
                            color: 'transparent',
                            borderColor: '#23E8BC', //底部外圆圈颜色
                            borderType: 'dashed',
                            borderWidth: 5,
                        },
                    },
                },
                {
                    name: '不在线',
                    value: '1',
                    trueVal: '90',
                    itemStyle: {
                        normal: {
                            color: 'transparent',
                            borderColor: '#43bafe', //底部外圆圈颜色
                            borderType: 'dashed',
                            borderWidth: 5,
                        },
                    },
                },
                {
                    name: '不在线2',
                    value: '1',
                    trueVal: '90',
                    itemStyle: {
                        normal: {
                            color: 'transparent',
                            borderColor: '#20D3AB', //底部外圆圈颜色
                            borderType: 'dashed',
                            borderWidth: 5,
                        },
                    },
                },
            ],
        },
        {
            type: 'bar',
            silent: true,
            barWidth: 100,
            barGap: '-100%',

            data: [
                {
                    name: '关井数',
                    value: '50',
                    trueVal: '98',
                    label: {
                        normal: {
                            show: true,
                            position: 'top',
                            distance: 40,
                            formatter: '抬升',
                            textStyle: {
                                color: '#49CCFF', //柱子对应数值颜色
                                fontSize: 30,
                            },
                        },
                    },
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
                                        color: '#43bafe88',
                                    },
                                    {
                                        offset: 1,
                                        color: '#43bafe', //底部渐变颜色
                                    },
                                ],
                            },
                        },
                    },
                },
                {
                    name: '开井数',
                    value: '50',
                    trueVal: '100',
                    label: {
                        normal: {
                            show: true,
                            position: 'top',
                            distance: 40,
                            formatter: '抬升',
                            textStyle: {
                                color: '#20D3AB', //柱子对应数值颜色
                                fontSize: 30,
                            },
                        },
                    },
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
                                        color: '#23E8BC88',
                                    },
                                    {
                                        offset: 1,
                                        color: '#23E8BC', //底部渐变颜色
                                    },
                                ],
                            },
                        },
                    },
                },
                {
                    name: '不在线',
                    value: '1',
                    trueVal: '90',
                    label: {
                        normal: {
                            show: true,
                            position: 'top',
                            distance: 40,
                            formatter: '降落',
                            textStyle: {
                                color: '#43bafe', //柱子对应数值颜色
                                fontSize: 30,
                            },
                        },
                    },
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
                                        color: '#43bafe88',
                                    },
                                    {
                                        offset: 1,
                                        color: '#43bafe', //底部渐变颜色
                                    },
                                ],
                            },
                        },
                    },
                },
                {
                    name: '不在线2',
                    value: '1',
                    trueVal: '90',
                    label: {
                        normal: {
                            show: true,
                            position: 'top',
                            distance: 40,
                            formatter: '降落',
                            textStyle: {
                                color: '#20D3AB', //柱子对应数值颜色
                                fontSize: 30,
                            },
                        },
                    },
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
                                        color: '#23E8BC88',
                                    },
                                    {
                                        offset: 1,
                                        color: '#20D3AB', //底部渐变颜色
                                    },
                                ],
                            },
                        },
                    },
                },
            ],
        },
    ],
};
