option = {
    title: [
        {
            text: '',
            show: false,
            x: 'center',
            top: '46%',
            textStyle: {
                color: '#333',
                fontSize: 14,
                fontWeight: 50,
            },
        },
    ],
    //   detail: {
    //     valueAnimation: true,
    //     fontSize: 25,
    //     fontWeight: '400',
    //     color: 'rgb(51,51,51)',
    //     offsetCenter: [0, '40%'],
    // },
    angleAxis: {
        show: false,
        max: (100 * 360) / 270, //-45度到225度，二者偏移值是270度除360度
        type: 'value',
        startAngle: 225, //极坐标初始角度
        splitLine: {
            show: false,
        },
    },
    barMaxWidth: 10, //圆环宽度
    radiusAxis: {
        show: false,
        type: 'category',
    },
    //圆环位置和大小
    polar: {
        center: ['50%', '50%'],
        radius: '100%',
    },
    series: [
        {
            type: 'bar',
            stack: '测试',
            data: [
                {
                    //上层圆环，显示数据
                    value: 78,
                    name: 'sdfasdf',
                    itemStyle: {
                        color: '#80B8FF',
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
                    value: 100,
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
                                    color: '#CBE5FB',
                                },
                                {
                                    offset: 1,
                                    color: '#CBE5FB',
                                },
                            ],
                        },
                    },
                },
            ],
            barGap: '-100%',
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
            barWidth: 10,
            itemStyle: {
                color: '#fff',
                borderColor: 'rgba(255,255,255, 1)',
                borderWidth: 5,
                shadowColor: 'rgba(0, 0, 0, 0.2)',
                shadowBlur: 10,
                shadowOffsetY: 2,
            },
        },
        {
            name: '外部刻度',
            type: 'gauge',
            //  center: ['20%', '50%'],
            radius: '70%',
            min: 0, //最小刻度
            max: 100, //最大刻度
            splitNumber: 4, //刻度数量
            startAngle: 225,
            endAngle: -45,

            axisLine: {
                show: true,
                // 仪表盘刻度线
                lineStyle: {
                    width: 1,
                    color: [[1, '#FFFFFF']],
                },
            },
            //仪表盘文字
            axisLabel: {
                show: true,
                color: '#333',
                distance: -10,
                fontSize: 10,
                formatter: function (value) {
                    return value + '%';
                },
            }, //刻度标签。
            axisTick: {
                show: true,
                splitNumber: 2,
                lineStyle: {
                    color: '#333', //用颜色渐变函数不起作用
                    width: 1,
                },
                length,
            }, //刻度样式
            splitLine: {
                show: true,
                length: -1,
                lineStyle: {
                    color: '#333', //用颜色渐变函数不起作用
                },
            }, //分隔线样式
            detail: {
                show: true,
                valueAnimation: true,
                fontSize: 35,
                fontWeight: '400',
                color: 'rgb(51,51,51)',
                offsetCenter: [0, '40%'],
            },
            pointer: {
                show: false,
            },
            title: {
                show: true,
                offsetCenter: [0, '-10%'],
                textStyle: {
                    fontSize: 15,
                    color: '#333',
                },
            },
            data: [
                {
                    value: 78,
                    name: '产量',
                },
            ],
        },
    ],
};
