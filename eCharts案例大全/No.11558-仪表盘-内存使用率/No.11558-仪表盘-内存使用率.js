var axislineColor = new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
        offset: 0,
        color: '#62c87f'
    },

    {
        offset: 0.62,
        color: 'yellow'
    },

    {
        offset: 1,
        color: '#FF0000'
    }
]);
var axislineColor1 = new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
        offset: 0,
        color: 'rgba(0,0,0,0)'
    },

    {
        offset: 0.62,
        color: 'rgba(0,0,0,0)'
    },

    {
        offset: 1,
        color: 'rgba(0,0,0,0)'
    }
]);

var option = {
    series: [{
            type: 'gauge',
            radius: '40%', //大小
            axisLine: { // 坐标轴线
                lineStyle: { // 属性lineStyle控制线条样式
                    width: 20, //粗细
                    color: [
                        [1, axislineColor1]
                    ],
                }
            },
            axisTick: {
                show: false
            },
            splitLine: { // 分隔线
                show: false
            },
            axisLabel: {
                show: false
            },
            detail: { //百分比颜色
                offsetCenter: [0, 100], //字体百分比位置
                textStyle: { // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                    color: '#FF0000',
                    fontSize: 60,
                    fontWeight: 'bold'
                },
                formatter: function(value) {
                    return value + '%';
                },
            },
            itemStyle: { //指针颜色
                normal: {
                    color: "#5d9cec",
                }
            },
            title: {
                fontSize: 35,
                color: '#5d9cec',
                offsetCenter: [0, '90%']
            },
            pointer: {
                width: 10, // 指针大小
                length: '60%'
            },
            data: [{
                value: 70,
                name: '内存使用率'
            }]
        },
        {
            zlevel: 1,
            type: 'pie',
            radius: ["38%", "40%"],
            data: [{
                    value: 3,
                    itemStyle: {
                        normal: {
                            borderWidth: 12,
                            borderColor: axislineColor
                        }
                    }
                },
                {
                    value: 1,
                    itemStyle: {
                        opacity: 0
                    }
                }
            ],
            tooltip: {
                show: false
            },
            startAngle: 225,
            hoverAnimation: false,
            label: {
                show: false
            },
            labelLine: {
                show: false
            }

        }
    ]
};
myChart.setOption(option);