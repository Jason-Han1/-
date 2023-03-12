var dataArr = [{
    name: '任务完成率',
    value: 40
}];
var value = dataArr[0].value;
var min = value.split('.');
var degrees = 180 - value * 180 / 100; //蓝色刻度尺计算
// 蓝色背景
var kedu = value / 100;
var colorSet = [
    [kedu, '#00B3FE'],
    [1, '#212D43']
];
var rich = {
    gray: {
        fontSize: 20,
        color: '#CECED0',
        padding: 20
    },
    white: {
        fontSize: 45,
        fontWeight: 700,
        color: '#fff'
    }
};

option = {
    title: {
        text: '任务完成率',
        textStyle: {
            color: '#25a1ff',
            fontSize: 28
        },
        left: 'center',
        top: -5
    },
    series: [{
            name: "白色圈刻度",
            type: "gauge",
            radius: "160%",
            splitNumber: 6,
            center: ["50%", "100%"],
            startAngle: 180, //刻度起始
            endAngle: 0, //刻度结束
            z: 4,
            axisTick: {
                show: false
            },
            splitLine: {
                length: 35, //刻度节点线长度
                lineStyle: {
                    width: 5,
                    color: 'rgba(14,15,20, 0.8)'
                } //刻度节点线
            },
            axisLabel: {
                show: false,
                color: '#',
                fontSize: 12
            }, //刻度节点文字颜色
            pointer: {
                show: false
            },
            axisLine: {
                lineStyle: {
                    opacity: 0
                }
            },
            detail: {
                show: false
            },
            data: [{
                value: 0,
                name: ""
            }]
        },
        {
            name: '蓝圈背景', //刻度背景
            type: 'gauge',
            z: 2,
            radius: '160%',
            splitNumber: 6,
            startAngle: 180,
            endAngle: 0,
            min: 0,
            max: 15,
            center: ["50%", "100%"], //整体的位置设置
            axisLine: { // 坐标轴线
                lineStyle: { // 属性lineStyle控制线条样式
                    color: colorSet,
                    width: 35,
                    opacity: 1, //刻度背景宽度
                }
            },
            splitLine: {
                show: false
            },
            data: [{
                show: false,
                value: '80'
            }],
            axisLabel: {
                show: false,
            },
            pointer: {
                show: false
            },
            axisTick: {
                show: false
            },
            detail: {
                show: 0
            }
        },
        {
            name: '刻度尺', //刻度背景
            type: 'gauge',
            z: 2,
            radius: '120%',
            splitNumber: 6,
            startAngle: 180,
            endAngle: 0,
            // min: 0,
            // max: 15,
            center: ["50%", "100%"], //整体的位置设置
            axisLine: { // 坐标轴线
                lineStyle: { // 属性lineStyle控制线条样式
                    color: '#222E48',
                    width: 35,
                    // opacity: 0, //刻度背景宽度
                }
            },
            data: [{
                show: false,
                value: '80'
            }],
            axisLabel: {
                show: false
            },
            pointer: {
                show: false
            },
            axisTick: {
                show: true,
                lineStyle: {
                    color: '#222E48',
                    width: 3
                },
                length: 8,
                splitNumber: 6,
            },
            detail: {
                show: 0
            },
            splitLine: {
                length: 35, //刻度节点线长度
                lineStyle: {
                    width: 3,
                    color: '#222E48'

                } //刻度节点线
            },
        },
        {
            name: '蓝色刻度尺',
            type: 'gauge',
            z: 4,
            radius: '120%',
            splitNumber: 6,
            startAngle: 180,
            endAngle: 0,
            // min: 0,
            // max: 15,
            center: ["50%", "100%"], //整体的位置设置
            axisLine: { // 坐标轴线
                lineStyle: { // 属性lineStyle控制线条样式
                    color: [
                        [0.4, '#00B3FE'],
                        [1, '#222E48']
                    ],
                    width: 35,
                    opacity: 0, //刻度背景宽度
                }
            },
            data: dataArr,
            axisLabel: {
                show: false
            },
            pointer: {
                show: false
            },
            axisTick: {
                show: true,
                lineStyle: {
                    // color: '#00B3FE',
                    color: 'auto',
                    width: 3
                },
                length: 8,
                splitNumber: 6,
            },
            detail: {
                formatter: function(params) {
                    return '{white|' + min[0] + "%" + '}';
                },
                rich: rich,
                offsetCenter: ['0', '-30%'],
            },
            splitLine: {
                length: 35, //刻度节点线长度
                lineStyle: {
                    width: 3,
                    // color: '#222E48'
                    color: 'auto'
                } //刻度节点线
            },
        },
    ]
};