var dataArr = [
    {value: 90,name: '油量'},
];
var color = new echarts.graphic.LinearGradient(0, 0, 1, 0, [
    {
        offset: 0,
        color: '#50fcfc', // 0% 处的颜色
    },
    {
        offset: 0.5,
        color: '#fff000', // 100% 处的颜色
    },
    {
        offset: 1,
        color: '#ff1e2e', // 100% 处的颜色
    },
]);
var colorSet = [[1, color]];
var rich = {
    white: {
        fontSize: 10,
        color: '#fff',
        fontWeight: '500',
        padding: [-150, 0, 0, 0],
    },
    bule: {
        fontSize: 20,
        fontFamily: 'DINBold',
        color: '#fff',
        fontWeight: '700',
        padding: [-120, 0, 0, 0],
    },
    radius: {
        borderWidth: 1,
        borderColor: '#0092f2',
        fontSize: 50,
        color: '#fff',
        backgroundColor: '#1B215B',
        borderRadius: 20,
        textAlign: 'center',
    },
    size: {
        height: 400,
        padding: [100, 0, 0, 0],
    },
};
option = {
    backgroundColor: 'transparent',
    tooltip: {
        formatter: '{a} <br/>{b} : {c}%',
    },
    series: [
        {
            type: 'gauge',
            radius: '65%',
            startAngle: '180',
            center: ['50%', '85%'], // 仪表位置
            endAngle: '0',
            pointer: {
                show: true,
                length: '102%',
                width: 5,
            },
            detail: {
                formatter: function (value) {
                    var num = Math.round(value);
                    return '';
                },
                rich: rich,
                offsetCenter: ['0%', '55%'],
            },
            data: dataArr,
            title: {
                show: false,
            },
            axisLine: {
                show: true,
                lineStyle: {
                    color: colorSet,
                    width: 10,
                    shadowOffsetX: 0,
                    shadowOffsetY: 0,
                    opacity: 1,
                },
            },
            axisTick: {
                show: false,
            },
            splitLine: {
                show: false,
                length: 5,
                lineStyle: {
                    color: '#00377a',
                    width: 2,
                    type: 'solid',
                },
            },
            axisLabel: {
                show: false,
            },
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [
                        {
                            offset: 0,
                            color: '#ac031c', // 0% 处的颜色
                        },
                        {
                            offset: 0.5,
                            color: '#fff', // 100% 处的颜色
                        },
                        {
                            offset: 1,
                            color: '#ac031c', // 100% 处的颜色
                        },
                    ]),
                },
            },
            animationDuration: 4000,
        },
        {
            name: '灰色内圈', //刻度背景
            type: 'gauge',
            center: ['50%', '85%'], // 仪表位置
            z: 2,
            radius: '60%',
            startAngle: '180',
            endAngle: '0',
            //center: ["50%", "75%"], //整体的位置设置
            axisLine: {
                // 坐标轴线
                lineStyle: {
                    // 属性lineStyle控制线条样式
                    color: [[0, '#fff']],
                    fontSize: 20,
                    width: 2,
                    opacity: 1, //刻度背景宽度
                },
            },
            splitLine: {
                show: false,
            },
            axisLabel: {
                show: false,
            },
            pointer: {
                show: false,
            },
            axisTick: {
                show: false,
            },
            detail: {
                show: 0,
            },
        },
        {
            name: '白色圈刻度',
            type: 'gauge',
            center: ['50%', '88%'], // 仪表位置
            radius: '70%',
            startAngle: 180, //刻度起始
            endAngle: 0, //刻度结束
            min: 0,
            max: 100,
            splitNumber: 5,
            z: 10,
            axisTick: {
                show: false,
            },
            splitLine: {
                length: 16, //刻度节点线长度
                lineStyle: {
                    width: 2,
                    color: '#fff',
                }, //刻度节点线
            },
            axisLabel: {
                color: 'rgb(87,166,219)',
                fontSize: 12,
                fontFamily: 'LESLIE',
            }, //刻度节点文字颜色
            pointer: {
                show: false,
            },
            axisLine: {
                lineStyle: {
                    opacity: 0,
                },
            },
            detail: {
                show: false,
            },
            data: [ { value: 30,name: '',},],
        },
        {
            //内圆
            type: 'pie',
            radius: '60%',
            center: ['50%', '85%'],
            z: 1,
            itemStyle: {
                normal: {
                    color: new echarts.graphic.RadialGradient(
                        0.5,1,0.8,
                        [{offset: 0.9,color: '#263c72'},
                        {offset: 0.99,color: '#0a1f52'},
                        {offset: 0.95,color: '#0e132b'},
                        {offset: 0.9,color: '#121d4e'},
                        {offset: 0.5,color: '#21459a',},
                        {offset: 0,color: '#0a1f52',},],
                        false
                    ),
                    label: {
                        show: false,
                    },
                    labelLine: {
                        show: false,
                    },
                },
            },
            hoverAnimation: false,
            label: {
                show: false,
            },
            tooltip: {
                show: false,
            },
            data: [
                {
                    value: 100,
                },
                {
                    value: 100,
                    itemStyle: {
                        color: 'transparent',
                    },
                },
            ],
            animationType: 'scale',
            startAngle: 180,
        },
    ],
};
