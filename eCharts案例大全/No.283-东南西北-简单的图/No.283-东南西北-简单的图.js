const innerCircle_outLineColor = new echarts.graphic.RadialGradient(
    0,
    0.5,
    0.8,
    [
        {
            offset: 0.5,
            color: '#00FFFF',
        },
        {
            offset: 1,
            color: '#1597F7',
        },
    ],
    false
);
const innerCircler_PaddingColor = new echarts.graphic.RadialGradient(
    0.5,
    0.5,
    0.8,
    [
        {
            offset: 0,
            color: '#4978EC',
        },
        {
            offset: 0.5,
            color: '#1E2B57',
        },
        {
            offset: 1,
            color: '#141F3D',
        },
    ],
    false
);
const poniterColor = new echarts.graphic.RadialGradient(
    0,
    0.5,
    0.8,
    [
        {
            offset: 0,
            color: '#43EA80',
        },
        {
            offset: 0.5,
            color: '#38F8D4',
        },
        {
            offset: 1,
            color: '#38F8D4',
        },
    ],
    false
);
var rich = {
    bule: {
        fontSize: 70,
        fontFamily: 'DINBold',
        color: '#fff',
        fontWeight: '700',
        padding: [-100, 0, 0, 0]
    },
    radius: {
        width: 200,
        height: 80,
        lineHieght: 80,
        borderWidth: 2,
        borderColor: '#0092F2',
        fontSize: 50,
        color: '#fff',
        backgroundColor: '#1B215B',
        borderRadius: 30,
        textAlign: 'center',
    },
    size: {
        height: 400,
    },
};
option = {
    backgroundColor: '#000',
    tooltip: {
        formatter: '{a} <br/>{b} : {c}%',
    },
    series: [
        {
            name: '最外部进度条',
            z: 100,
            type: 'gauge',
            radius: '100%',
            startAngle: 90,
            // [100 25 50 75] 上右下左
            endAngle: -269.9999,
            splitNumber: 8,
            axisLine: {
                lineStyle: {
                    color: [
                        [
                            1,
                            new echarts.graphic.LinearGradient(0, 1, 0, 0, [
                                {
                                    offset: 0,
                                    color: '#00D7E2',
                                },
                                {
                                    offset: 0.8,
                                    color: '#1597F7',
                                },
                                {
                                    offset: 1,
                                    color: '#00D7E2',
                                },
                            ]),
                        ],
                        [1, 'rgba(28,128,245,.0)'],
                    ],
                    width: 15,
                },
            },
            axisLabel: {
                show: true,
                color: '#fff',
                fontWeight: '700',
                fontSize: '70',
                distance: 55,
                // 来向、去向
                formatter: function (value) {
                    switch (value) {
                        case 100:
                            return 'N';
                        case 25:
                            return 'E';
                        case 50:
                            return 'S';
                        case 75:
                            return 'W';
                    }
                },
            },
            axisTick: {
                show: false,
            },
            splitLine: {
                show: true,
                length: 60,
                distance: 0,
                lineStyle: {
                    color: '#086DFF',
                },
            },
            itemStyle: {
                show: false,
            },

            data: [
                {
                    name: '西北',
                    value: 245,
                },
            ],
            title: {
                //标题
                show: false,
            },
            rich: rich,
            detail: {
                formatter: function (value) {
                    let name = '西北';
                    var num = Math.round(value);
                    return '{bule|' + name + '}' + '\n{radius|' + num + '}';
                },
                rich: rich,
                offsetCenter: ['0%', '5%'],
            },
            pointer: {
                show: false,
            },
            animationDuration: 4000,
        },
        {
            name: '内部圈',
            type: 'gauge',
            colorBy: 'series',
            z: 2,
            splitNumber: 0,
            startAngle: 90,
            endAngle: -269.9999,
            radius: '50%',
            axisLine: {
                lineStyle: {
                    color: [[1, innerCircle_outLineColor]],
                    width: 10,
                    shadowColor: '#00FFFF',
                    shadowBlur: 6,
                    shadowOffsetX: 0,
                },
            },
            tooltip: {
                show: false,
            },
            axisLabel: {
                show: false,
            },
            axisTick: {
                show: false,
            },
            splitLine: {
                show: false,
            },
            itemStyle: {
                show: false,
            },
            detail: {
                show: false,
            },
            title: {
                //标题
                show: false,
            },
            data: [
                {
                    name: 'title',
                    value: 90,
                },
            ],
            // 指针颜色
            itemStyle: {
                normal: {
                    color: poniterColor,
                },
            },
            // 指针
            pointer: {
                show: true,
                offsetCenter: [0, '-100%'],
                length: '50%',
                radius: '20%',
                width: 15, //指针粗细
            },
            animationDuration: 500,
        },
        {
            name: '刻度',
            type: 'gauge',
            radius: '100%',
            min: 0, //最小刻度
            max: 10, //最大刻度
            splitNumber: 12, //刻度数量
            startAngle: 90,
            endAngle: -269.9999,
            axisLine: {
                show: false,
            },
            //仪表盘轴线
            axisLabel: {
                show: false,
            },
            //刻度标签。
            axisTick: {
                show: true,
                splitNumber: 12,
                lineStyle: {
                    color: '#1E2B57 ', //用颜色渐变函数不起作用
                    width: 4,
                },
                length: 30,
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
        },
        //圆
        {
            type: 'pie',
            tooltip: {
                show: false,
            },
            z: 10,
            hoverAnimation: false,
            legendHoverLink: false,
            radius: ['0%', '49%'],
            center: ['50%', '50%'],
            label: {
                normal: {
                    show: true,
                },
            },
            itemStyle: {
                normal: {
                    color: innerCircler_PaddingColor,
                    label: {
                        show: false,
                    },
                    labelLine: {
                        show: false,
                    },
                },
            },
            labelLine: {
                normal: {
                    show: false,
                },
            },
            data: [
                {
                    value: 120,
                },
            ],
        },
    ],
};
