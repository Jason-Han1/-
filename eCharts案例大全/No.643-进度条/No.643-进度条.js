var dataArr = 60;
var colorSet = '#45CAED';

var color = new echarts.graphic.LinearGradient(0, 0, 1, 0, [
    {
        offset: 0,
        color: '#8D00FF',
    },
    {
        offset: 0.4,
        color: '#0EBAFC',
    },
    {
        offset: 1,
        color: '#0EBAFC',
    },
]);
var option = {
    backgroundColor:"#000",
    xAxis: {
        splitLine: {
            show: false,
        },
        axisLabel: {
            show: false,
        },
        axisLine: {
            show: false,
        },
    },
    yAxis: {
        splitLine: {
            show: false,
        },
        axisLabel: {
            show: false,
        },
        axisLine: {
            show: false,
        },
    },
    series: [
        // 刻度
        {
            type: 'gauge',
            radius: '82%',
            startAngle: 220,
            endAngle: -40,
            axisTick: {
                show: true,
                lineStyle: {
                    color: '#6B9DD7',
                    width: 1,
                },
                length: -8,
            }, //刻度样式
            splitLine: {
                show: true,
                lineStyle: {
                    color: '#6B9DD7',
                    width: 1,
                },
                length: -8,
            }, //分隔线样式
            axisLabel: {
                color: 'rgba(255,255,255,0)',
                fontSize: 12,
            }, //刻度节点文字颜色
            pointer: {
                show: false,
            },
            axisLine: {
                show: false,
            },
            label: {
                show: false,
            },
            //仪表盘详情，用于显示数据。
            detail: {
                show: true,
                offsetCenter: [0, '90%'],
                color: '#ACCFFF',
                formatter: function (params) {
                    return '当前速度';
                },
                textStyle: {
                    fontSize: 16,
                },
            },
        },
        {
            name: '内部进度条',
            type: 'gauge',
            center: ['50%', '50%'],
            radius: '78%',
            splitNumber: 10,
            axisLine: {
                lineStyle: {
                    color: [
                        [dataArr / 100, color],
                        [1, 'rgba(107,157,215,.25)'],
                    ],
                    width: 8,
                },
            },
            z: 4,
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
                color: colorSet,
            },
            detail: {
                show: false,
            },
            label: {
                show: false,
            },

            title: {
                //标题
                show: true,
                offsetCenter: [0, '35%'], // x, y，单位px
                textStyle: {
                    color: '#ACCFFF',
                    fontSize: 16, //表盘上的标题文字大小
                    fontWeight: 400,
                    fontFamily: 'PingFangSC',
                },
            },
            data: [
                {
                    name: dataArr + '%',
                    value: dataArr,
                },
            ],
            pointer: {
                show: true,
                length: '40%',
                radius: '20%',
                width: 4, //指针粗细
            },
        },
        {
            //指针上的圆
            type: 'pie',
            tooltip: {
                show: false,
            },
            z: 5,
            hoverAnimation: false,
            legendHoverLink: false,
            radius: ['0%', '6%'],
            center: ['50%', '50%'],
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
            data: [
                {
                    value: 10,
                    itemStyle: {
                        normal: {
                            color: colorSet,
                        },
                    },
                },
            ],
        },
        // 外一层圈
        {
            type: 'pie',
            radius: '60%',
            startAngle: 220,
            endAngle: -40,
            hoverAnimation: false,
            center: ['50%', '50%'],
            avoidLabelOverlap: false,
            label: {
                show: false,
            },
            labelLine: {
                show: false,
            },
            data: [
                {
                    value: 1,
                },
            ],
            itemStyle: {
                normal: {
                    color: {
                        type: 'linear',
                        x: 0,
                        y: 0,
                        x2: 0,
                        y2: 1,
                        colorStops: [
                            {
                                offset: 0,
                                color: '#17A1FF',
                            },
                            {
                                offset: 1,
                                color: 'rgba(17, 90, 233, 0.16)',
                            },
                        ],
                    },
                    opacity: 0.12,
                },
            },
        },
        // 内圆
        {
            type: 'pie',
            radius: ['0', '50%'],
            center: ['50%', '50%'],
            hoverAnimation: false,
            z: 3,
            data: [
                {
                    value: dataArr,
                    itemStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                {
                                    offset: 0,
                                    color: '#23A6FF',
                                },
                                {
                                    offset: 1,
                                    color: 'rgba(17, 90, 233, 0.21)  ',
                                },
                            ]),
                            opacity: 0.59,
                        },
                    },
                    label: {
                        show: false,
                    },
                },
            ],
            labelLine: {
                show: false,
            },
        },
    ],
};
