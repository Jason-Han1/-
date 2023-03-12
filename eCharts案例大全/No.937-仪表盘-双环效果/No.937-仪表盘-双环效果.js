var data = 83;
var num = '124156';
var unit = 'm³';
option = {
    backgroundColor: '#fff',
    angleAxis: {
        show: false,
        max: (100 * 360) / 230, //-45度到225度，二者偏移值是270度除360度
        type: 'value',
        startAngle: 205, //极坐标初始角度
        splitLine: {
            show: false,
        },
    },
    title: {
        text: '河流年过闸流量',
        bottom: '25%',
        x: 'center',
        textStyle: {
            fontSize: 14,
            fontWeight: '600',
            color: '#333333',
        },
    },
    barMaxWidth: 20, //圆环宽度
    radiusAxis: {
        show: false,
        type: 'category',
    },

    //圆环位置和大小
    polar: {
        center: ['50%', '50%'],
        radius: '80%',
    },
    series: [
        {
            type: 'bar',
            stack: '测试',
            data: [
                {
                    //上层圆环，显示数据
                    value: data,
                    name: 'sdfasdf',
                    itemStyle: {
                        color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                            {
                                offset: 0,
                                color: '#E6DEFF60',
                            },

                            {
                                offset: 1,
                                color: '#7E50FF',
                            },
                        ]),
                    },
                },
            ],

            barGap: '-100%', //柱间距离,上下两层圆环重合
            coordinateSystem: 'polar',
            roundCap: true, //顶端圆角从 v4.5.0 开始支持
            z: 2, //圆环层级，同zindex
            //       detail: {
            //     valueAnimation: true,
            //     fontSize: 25,
            //     fontWeight: '400',
            //     color: 'rgb(51,51,51)',
            //     offsetCenter: [0, '40%'],
            // },
        },
        {
            //下层圆环，显示最大值
            type: 'bar',
            data: [
                {
                    value: data - 2,
                    itemStyle: {
                        color: {
                            //图形渐变颜色方法，四个数字分别代表，右，下，左，上，offset表示0%到100%
                            type: 'linear',
                            x: 0,
                            y: 0,
                            x2: 1, //从左到右 0-1
                            y2: 0,
                            colorStops: [
                                {
                                    offset: 0,
                                    color: '#fff',
                                },
                                {
                                    offset: 1,
                                    color: '#7E50FF',
                                },
                            ],
                        },
                    },
                },
            ],
            barGap: '-100%',
            coordinateSystem: 'polar',
            roundCap: true,
            z: 2,
        },
        {
            type: 'bar',
            // stack: '测试',
            data: [
                {
                    //上层圆环，显示数据
                    value: data - 2,
                    name: 'sdfasdf',
                    itemStyle: {
                        color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                            {
                                offset: 0,
                                color: '#E6DEFF',
                            },

                            {
                                offset: 1,
                                color: '#7E50FF',
                            },
                        ]),
                    },
                },
            ],
            barGap: '-100%', //柱间距离,上下两层圆环重合
            coordinateSystem: 'polar',
            roundCap: true, //顶端圆角从 v4.5.0 开始支持
            z: 1, //圆环层级，同zindex
            // detail: {
            //     valueAnimation: true,
            //     fontSize: 25,
            //     fontWeight: '400',
            //     color: 'rgb(51,51,51)',
            //     offsetCenter: ["20%", '40%'],
            // },
        },
        {
            //下层圆环，显示最大值
            type: 'bar',
            data: [
                {
                    value: data - 2,
                    itemStyle: {
                        color: {
                            //图形渐变颜色方法，四个数字分别代表，右，下，左，上，offset表示0%到100%
                            type: 'linear',
                            x: 0,
                            y: 0,
                            x2: 1, //从左到右 0-1
                            y2: 0,
                            colorStops: [
                                {
                                    offset: 0,
                                    color: '#fff',
                                },
                                {
                                    offset: 1,
                                    color: '#CDB4FF',
                                },
                            ],
                        },
                    },
                },
            ],
            barGap: '-85%',
            coordinateSystem: 'polar',
            roundCap: true,
            z: 1,
        },
        {
            stack: '测试',
            type: 'bar',
            data: [0.01],
            showBackground: false,
            coordinateSystem: 'polar',
            roundCap: true,
            z: 100,
            barWidth: 20,

            itemStyle: {
                color: '#4542FA',
                borderColor: '#fff',
                borderWidth: 8,
                // shadowColor: 'rgba(48, 236, 166, 0.5)',
                // shadowBlur: 15,
                // shadowOffsetY: 2,
            },
        },
        {
            name: '数据',
            type: 'gauge',
            //  center: ['20%', '50%'],
            radius: '70%',

            axisLine: {
                show: false,
            },
            //仪表盘文字
            axisLabel: {
                show: false,
            }, //刻度标签。
            axisTick: {
                show: false,
            }, //刻度样式
            splitLine: {
                show: false,
            }, //分隔线样式
            detail: {
                show: false,
            },
            pointer: {
                show: false,
            },
            title: {
                show: true,
                offsetCenter: [0, '40%'],
                textStyle: {
                    fontSize: 28,
                    color: '#6938FF',
                    fontWeight: 400,
                },
            },
            data: [
                {
                    // value: 100,
                    name: num,
                },
            ],
        },
        {
            name: '单位',
            type: 'gauge',
            //  center: ['20%', '50%'],
            radius: '70%',

            axisLine: {
                show: false,
            },
            //仪表盘文字
            axisLabel: {
                show: false,
            }, //刻度标签。
            axisTick: {
                show: false,
            }, //刻度样式
            splitLine: {
                show: false,
            }, //分隔线样式
            detail: {
                show: false,
            },
            pointer: {
                show: false,
            },
            title: {
                show: true,
                offsetCenter: ['40%', '42%'],
                textStyle: {
                    fontSize: 16,
                    color: '#6938FF',
                    fontWeight: 400,
                },
            },
            data: [
                {
                    // value: 100,
                    name: unit,
                },
            ],
        },
    ],
};
