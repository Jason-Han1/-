var dataArr = 100;
var jd = 8;
var colorSet = {
    color: 'rgb(73,159,224)',
};
let centerArr = ['50%', '70%'];
option = {
    backgroundColor: '#021434',
    tooltip: {
        formatter: '{a} <br/>{b} : {c}%',
    },

    series: [
        {
            name: '最外部进度条',
            type: 'gauge',
            radius: '77%',
            axisLine: {
                lineStyle: {
                    color: [
                        [
                            jd / 10,
                            new echarts.graphic.LinearGradient(0, 1, 0, 0, [
                                {
                                    offset: 0,
                                    color: 'rgba(145,207,255,0)',
                                },
                                {
                                    offset: 0.5,
                                    color: 'rgba(145,207,255,0.2)',
                                },
                                {
                                    offset: 1,
                                    color: 'rgba(145,207,255,1)',
                                },
                            ]),
                        ],
                        [1, 'rgba(28,128,245,.0)'],
                    ],
                    width: 30,
                },
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
                    value: dataArr,
                },
            ],
            pointer: {
                show: false,
            },
            animationDuration: 4000,
        },
        {
            name: '内部圈',
            type: 'gauge',
            z: 4,
            min: 0,
            max: 10,
            splitNumber: 10,
            radius: '70%',
            axisLine: {
                lineStyle: {
                    color: [[1, colorSet.color]],
                    width: 3,
                    shadowColor: 'rgba(145,207,255,.5)',
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
                    value: dataArr,
                },
            ],
            itemStyle: {
                normal: {
                    color: 'rgba(145,207,255,1)',
                },
            },
            itemStyle: {
                normal: {
                    color: 'rgb(255,255,255)',
                },
            },
            pointer: {
                show: false,
                icon: 'circle',
                offsetCenter: [0, -155],
                width: 30,
                color: 'red',
            },
        },
        {
            name: '内部圈',
            type: 'gauge',
            z: 2,
            min: 0,
            max: 10,
            splitNumber: 10,
            radius: '62%',
            axisLine: {
                lineStyle: {
                    color: [[1, colorSet.color]],
                    width: 20,
                    shadowColor: 'rgba(145,207,255,.5)',
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
                    value: dataArr,
                },
            ],
            itemStyle: {
                normal: {
                    color: 'rgb(255,255,255)',
                },
            },
            pointer: {
                show: false,
                icon: 'circle',
                // offsetCenter:[0,-165],
                width: 30,
                color: 'red',
            },
        },
        {
            name: '内部刻度',
            type: 'gauge',
            radius: '50%',
            min: 0, //最小刻度
            max: 10, //最大刻度
            splitNumber: 10, //刻度数量
            startAngle: 225,
            endAngle: -45,
            axisLine: {
                show: false,
                lineStyle: {
                    width: 5,
                    color: [[1, '#1087e2']],
                },
            }, //仪表盘轴线
            axisLabel: {
                show: false,
            }, //刻度标签。
            axisTick: {
                show: true,
                splitNumber: 7,
                lineStyle: {
                    color: '#1C3164',
                    width: 3,
                },
                length: 24,
            }, //刻度样式
            splitLine: {
                show: false,
            }, //分隔线样式
            detail: {
                formatter: '类别一',
                offsetCenter: ['0', '90%'],
                textStyle: {
                    fontSize: 45,
                    color: '#FFFFFF',
                },
            },
            title: {
                show: true,
                offsetCenter: [0, '18%'],
                textStyle: {
                    color: '#80A0FF',
                    fontSize: 70,
                },
            },
            data: [
                {
                    name: dataArr,
                    // value: 9800,
                },
            ],
            pointer: {
                show: false,
            },
        },
        {
            type: 'pie',
            color: ['transparent', 'transparent', 'transparent'],
            startAngle: 225,
            endAngle: 170,
            // center: centerArr,
            radius: ['60%', '59.1%'],
            hoverAnimation: false,
            labelLine: {
                show: false,
            },
            tooltip: {
                show: false,
            },

            data: [
                {
                    name: '',
                    value: jd,
                    itemStyle: {
                        normal: {
                            show: false,
                        },
                    },
                },
                {
                    //画中间的图标
                    name: '',
                    value: 0,
                    label: {
                        rotate: 90,
                        position: 'inside',
                        width: 20,
                        height: 20,
                        padding: 20,
                        verticalAlign: 'bottom',
                        backgroundColor: '#fff',
                        borderRadius: 50,
                    },
                },
                {
                    //画剩余的刻度圆环
                    name: '',
                    value: 6.7 - jd,
                },
                {
                    //画剩余的刻度圆环
                    name: '',
                    value: 6.7,
                },
            ],
        },
    ],
};
