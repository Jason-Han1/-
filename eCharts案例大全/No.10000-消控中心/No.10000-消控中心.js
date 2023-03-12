var dataArr = [{
    value: 90,
    name: ''
}];
var color = new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
        offset: 0,
        color: 'rgba(162, 89, 252, 1)' // 0% 处的颜色
    },
    {
        offset: 1,
        color: 'rgba(22, 220, 247, 1)' // 100% 处的颜色
    }
]);
var colorSet = [
    [1, color],
];
option = {
    backgroundColor: '#0E1327',
    series: [{
            name: '底圈',
            type: 'gauge',
            radius: '70%',
            startAngle: '205',
            endAngle: '-25',
            pointer: {
                show: false
            },
            detail: {
                formatter: function(value) {
                    var num = Math.round(value);
                    return '{a|54}\n\n{b|消控中心}';
                },
                rich: {
                    a: {
                        fontFamily: 'SourceHanSansCN-Medium',
                        fontWeight: '500',
                        color: "rgba(255, 255, 255, 1)",
                        fontSize: 40,
                        align: 'center',
                        // textAlign: 'left'
                    },
                    b: {
                        fontFamily: 'SourceHanSansCN-Medium',
                        fontWeight: '500',
                        color: "rgba(76, 177, 255, 1)",
                        fontSize: 32,

                    }
                },
                "offsetCenter": ['0%', "15%"],
            },
            data: dataArr,
            axisLine: {
                show: false,
                lineStyle: {
                    color: [
                        [1, 'RGBA(21, 34, 65, 1)']
                    ],
                    width: 45, //调整宽度
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
            },
            axisLabel: {
                show: false
            },
            animationDuration: 4000,
        },
        {
            name: '进度',
            type: 'gauge',
            radius: '70%',
            startAngle: '205',
            endAngle: '45',
            pointer: {
                show: false
            },
            detail: {
                show: false
            },
            data: dataArr,
            axisLine: {
                show: false,
                lineStyle: {
                    color: colorSet,
                    width: 45,
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
            },
            axisLabel: {
                show: false
            },
            animationDuration: 4000,
        },
        {
            name: "刻度文字",
            type: "gauge",
            radius: "73%",
            startAngle: 198, //刻度起始
            endAngle: -18, //刻度结束
            min: 0,
            max: 80,
            splitNumber: 1,
            z: 4,
            axisTick: {
                show: false
            },
            splitLine: {
                length: 0, //刻度节点线长度
                lineStyle: {
                    width: 5,
                    color: '#018DFF'
                } //刻度节点线
            },
            axisLabel: {
                color: 'rgba(255, 255, 255, 1)',
                fontSize: 22,
                padding: 15
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