var dataArr = [{
    value: 78,
    name: '失败率'
}];

option = {
    backgroundColor: '#0E1327',
    tooltip: {
        formatter: "{a} <br/>{b} : {c}%"
    },

    series: [{
            type: 'gauge',
            radius: '70%',
            startAngle: '215',
            endAngle: '-35',
            pointer: {
                show: false
            },
            detail: {
                formatter: function(value) {
                    var num = Math.round(value);
                },
            },
            data: dataArr,
            title: {
                show: false,
            },
            axisLine: {
                show: true,
                lineStyle: {
                    color: [
                        [1, '#073B64']
                    ],
                    width: 25,
                    // shadowBlur: 15,
                    // shadowColor: '#B0C4DE',
                    shadowOffsetX: 0,
                    shadowOffsetY: 0,
                    opacity: 1
                }
            },
            axisTick: {
                show: false
            },
            splitLine: {
                show: false,
                length: 25,
                lineStyle: {
                    color: '#00377a',
                    width: 2,
                    type: 'solid',
                },
            },
            axisLabel: {
                show: false
            },
            animationDuration: 4000,
        },
        {
            type: 'gauge',
            radius: '70%',
            startAngle: '215',
            endAngle: 215 - dataArr[0].value / 100 * 250,
            pointer: {
                show: false
            },
            detail: {
                formatter: function(value) {},
            },
            data: dataArr,
            title: {
                show: false,
            },
            axisLine: {
                show: true,
                lineStyle: {
                    color: [
                        [1, '#19A5FF']
                    ],
                    width: 25,
                    // shadowBlur: 15,
                    // shadowColor: '#B0C4DE',
                    shadowOffsetX: 0,
                    shadowOffsetY: 0,
                    opacity: 1
                }
            },
            axisTick: {
                show: false
            },
            splitLine: {
                show: false,
                length: 25,
                lineStyle: {
                    color: '#00377a',
                    width: 2,
                    type: 'solid',
                },
            },
            axisLabel: {
                show: false
            },
            animationDuration: 4000,
        },
        {
            name: '灰色内圈', //刻度背景
            type: 'gauge',
            z: 2,
            radius: '63%',
            startAngle: '215',
            endAngle: '-35',
            //center: ["50%", "75%"], //整体的位置设置
            axisLine: { // 坐标轴线
                lineStyle: { // 属性lineStyle控制线条样式
                    color: [
                        [1, '#018DFF']
                    ],
                    fontSize: 20,
                    width: 2,
                    opacity: 1, //刻度背景宽度
                }
            },
            splitLine: {
                show: false
            },
            axisLabel: {
                show: false
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
            name: "白色圈刻度",
            type: "gauge",
            radius: "83%",
            startAngle: 215,//度起始
            endAngle: -35,//刻度结束
            min: 0,
            max: 100,
            splitNumber: 10,
            z: 4,
            axisTick: {
                show: false
            },
            splitLine: {
                length: 0, //刻度节点线长度
                lineStyle: {
                    width: 2,
                    color: '#018DFF'
                } //刻度节点线
            },
            axisLabel: {
                color: 'rgba(255,255,255,8)',
                fontSize: 24,
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
    ]
};