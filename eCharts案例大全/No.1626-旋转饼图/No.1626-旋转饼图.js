let startAngle = 50; // 初始旋转角度
let inverSestartAngle = 180;

function generateData(totalNum, bigvalue, smallvalue, color) {
    let dataArr = [];
    for (var i = 0; i < totalNum; i++) {
        if (i % 2 === 0) {
            dataArr.push({
                name: (i + 1).toString(),
                value: bigvalue,
                itemStyle: {
                    normal: {
                        color: color,
                        borderWidth: 0,
                    },
                },
            });
        } else {
            dataArr.push({
                name: (i + 1).toString(),
                value: smallvalue,
                itemStyle: {
                    normal: {
                        color: 'rgba(0,0,0,0)',
                        borderWidth: 0,
                    },
                },
            });
        }
    }
    return dataArr;
}

startAngle = startAngle - 5;
inverSestartAngle = inverSestartAngle + 5;

// function defineOption() { 
//  let option
    option = {
        tooltip: {
            trigger: 'item',
        },
        series: [
            {
                type: 'pie',
                radius: ['0%', '32%'],
                data: [
                    {
                        value: 108,
                        name: '负分人数',
                        itemStyle: {
                            normal: {
                                // color: new echarts.graphic
                                // 	.RadialGradient(0.5, 0.5, 1.0, [{
                                // 			offset: 0,
                                // 			color: "rgba(0, 0, 0, 0)"
                                // 		},
                                // 		{
                                // 			offset: 0.7,
                                // 			color: "rgba(58, 177, 191, 0)"
                                // 		},
                                // 		{
                                // 			offset: 1,
                                // 			color: "rgba(58, 177, 191, 1.0)"
                                // 		},
                                // 	]),
                                color: {
                                    type: 'radial',
                                    x: 0.5,
                                    y: 0.5,
                                    r: 0.5,
                                    colorStops: [
                                        {
                                            offset: 0,
                                            color: 'rgba(58, 177, 191, 0)', // 0% 处的颜色
                                        },
                                        {
                                            offset: 0.7,
                                            color: 'rgba(58, 177, 191, 0)', // 0% 处的颜色
                                        },
                                        {
                                            offset: 1,
                                            color: 'rgba(58, 177, 191, 1.0)', // 100% 处的颜色
                                        },
                                    ],
                                    globalCoord: false, // 缺省为 false
                                },
                            },
                        },
                    },
                ],

                label: {
                    normal: {
                        show: true,
                        position: 'center',
                        color: '#2dc0c9',
                        fontSize: '18',
                        fontWeight: 'bold',
                        lineHeight: 28,
                        formatter: function (params) {
                            //总数为0时显示数字
                            return params.value + '\n' + params.name;
                        },
                    },
                },
                // emphasis: { }
            },
            {
                type: 'pie',
                name: '旋转圆',
                zlevel: 20,
                silent: true,
                radius: ['38%', '40%'],
                hoverAnimation: false,
                startAngle: inverSestartAngle,
                data: generateData(8, 30, 30, '#2d7ac9'),
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
            },
            {
                type: 'pie',
                name: '旋转圆',
                zlevel: 20,
                silent: true,
                radius: ['36%', '38%'],
                hoverAnimation: false,
                startAngle: inverSestartAngle,
                data: generateData(1, 30, 30, '#2d7ac9'),
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
            },
            {
                type: 'pie',
                name: '旋转圆',
                zlevel: 20,
                silent: true,
                radius: ['33%', '36%'],
                hoverAnimation: false,
                startAngle: startAngle,
                data: generateData(12, 30, 30, '#2dc0c9'),
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
            },
            {
                type: 'pie',
                name: '旋转圆',
                zlevel: 20,
                silent: true,
                radius: ['32%', '34%'],
                hoverAnimation: false,
                startAngle: startAngle,
                data: generateData(1, 30, 30, '#2dc0c9'),
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
            },
        ],
    };
// }

// setInterval(defineOption, 200);
