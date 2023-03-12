var data =180,
    maxdata = 300;
const radius = ['88%', '94%'];
const splitColor = 'red';
const innerColor = ['#52d7ae', 'rgba(254,134,64,1)'];
const fontColor = '#ff4e09';
let title = {
    text: '通用流量已用',
    subtext: data + 'GB',
    x: 'center',
    y: '40%',
    textStyle: {
        color: fontColor,
        fontSize: 16,
    },
    subtextStyle: {
        color: fontColor,
        fontSize: 24,
    },
};
option = {
    backgroundColor: '#000',
    toolbox: {
        feature: {},
    },
    title: title,
    animationDuration: 10000,
    series: [
        // 底色圈
        {
            type: 'pie',
            radius: radius,
            hoverAnimation: false,
            startAngle: 180,
            endAngle:0,
            label: {
                show: true,
            },
            labelLine: {
                show: false,
            },
            animation: false,
            data: [
                {
                    value: 180,
                    itemStyle: {
                        color: innerColor[1],
                    },
                },
                {
                    value: 180,
                    itemStyle: {
                        opacity: 0,
                        color: '#0fffff',
                    },
                },
            ],
        },

        // 刻度线
        {
            name: '刻度2',
            type: 'gauge',
            center: ['50%', '50%'],
            radius: '84%',
            startAngle: 180,
            endAngle: 0,
            splitNumber: 1, //刻度数量
            axisLine: {
                show: false,
                lineStyle: {
                    width: 1,
                    color: [[1, 'rgba(0,0,0,0)']],
                },
            }, //分隔线样式。
            splitLine: {
                show: true,

                length: 12,
                lineStyle: {
                    width: 4,
                },
            },
            axisLabel: {
                show: false,
            },
            axisTick: {
                show: true,
                splitNumber: 20,//
                length: 12,
                lineStyle: {
                    width: 2,
                    color: splitColor,
                },
            },

            detail: {
                show: false,
            },
            title: {
                show: false,
            },
        },
        {
            name: '',
            type: 'gauge',
            min: 0,
            max: maxdata,
            radius: '96%',
            splitNumber: 1, //刻度数量
            startAngle: 180,
            endAngle:0,
            axisLine: {
                show: false,
                lineStyle: {
                    width: 1,
                    color: [[1, 'rgba(0,200,200,1)']],
                },
            },
            //分隔线样式。
            splitLine: {
                show: false,
            },
            axisLabel: {
                show: false,
                fontSize: 16,
                color: '#f00',
                formatter: '{value}',
                distance: -35,
                padding: [35, 0, 0, 0],
            },
            axisTick: {
                show: false,
            },
            pointer: {
                show: true,
                width: 4,
                length: '100%',
            },
            itemStyle: {
                color: 'red',
            },
            detail: {
                show: false,
            },
            title: {
                show: false,
            },
        },

        // 仪表盘值得渐变
        {
            type: 'pie',
            radius: radius,
            hoverAnimation: false,
            startAngle: 180,
            endAngle: 0,
            label: {
                show: false,
            },
            labelLine: {
                show: false,
            },
            data: [
                {
                    name: '',
                    value: data / maxdata,
                    itemStyle: {
                        color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                            {
                                offset: 0,
                                color: innerColor[0],
                            },
                            {
                                offset: 1,
                                color: innerColor[1],
                            },
                        ]),
                    },
                },
                {
                    value: 1.325 - data / maxdata,
                    itemStyle: {
                        opacity: 0,
                        color: 'rgba(255,255,255,0)',
                    },
                },
            ],
        },

        // 值得尾巴

        {
            type: 'pie',
            radius: ['88%', '92%'],
            hoverAnimation: false,
            startAngle: 180,
            endAngle: 0,
            data: [
                {
                    name: '',
                    value: data / maxdata,
                    label: {
                        show: false,
                    },
                    labelLine: {
                        show: false,
                    },
                    itemStyle: {
                        color: 'rgba(0,0,0,0)',
                    },
                },
                {
                    //画中间的图标
                    name: '',
                    value: 0,
                    label: {
                        position: 'inside',
                        backgroundColor: fontColor,
                        borderRadius: 12,
                        padding: 12,
                        borderWidth: 2,
                        borderColor: '#fff',
                    },
                },
                {
                    name: '',
                    value: 1.325 - data / maxdata,
                    label: {
                        show: false,
                    },
                    labelLine: {
                        show: false,
                    },
                    itemStyle: {
                        color: 'rgba(255,255,255,0)',
                    },
                },
            ],
        },
    ],
};
