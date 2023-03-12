var ydata = [{
        name: '逆行',
        value: 5,
        itemStyle: {
            color: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [{
                    offset: 0,
                    color: '#FFAB61' // 0% 处的颜色
                }, {
                    offset: 1,
                    color: '#E93CA7' // 100% 处的颜色
                }],
                global: false // 缺省为 false
            }
        }
    },
    {
        name: '超速',
        value: 7,
        itemStyle: {
            color: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [{
                    offset: 0,
                    color: '#6717CE' // 0% 处的颜色
                }, {
                    offset: 1,
                    color: '#2C6BF8' // 100% 处的颜色
                }],
                global: false // 缺省为 false
            }
        }
    }
];
var xdata = ['逆行', "超速"];
option = {
    backgroundColor: "#000",
    legend: {
        show: false
    },
    series: [{
        name: '违规次数',
        type: 'pie',
        clockwise: false, //饼图的扇区是否是顺时针排布
        minAngle: 20, //最小的扇区角度（0 ~ 360）
        radius: ["40%", "58%"],
        center: ["50%", "50%"],
        avoidLabelOverlap: false,
        //  itemStyle: { //图形样式
        //     normal: {
        //         borderColor: '#ffffff',
        //         borderWidth: 0,
        //     },
        // },
        itemStyle: {
            normal: {
                borderColor: 'rgba(0,0,0,2)',
                borderWidth: 10,
                labelLine: {
                    length: 30,
                    length2: 111,
                    show: true,
                    lineStyle: {
                        color: '#4CB1FF',
                        width: 3
                    }
                }
            }
        },
        label: {
            normal: {
                show: true,
                // position: 'center',
                formatter: '{text|{b}}{value|{c}}',
                rich: {
                    text: {
                        color: "#34A6D2",
                        fontSize: 32,
                        fontWeight: 500,
                        align: 'center',
                        verticalAlign: 'bottom',
                        padding: 15
                    },
                    value: {
                        color: "#FFFFFF",
                        fontSize: 40,
                        fontWeight: 500,
                        align: 'center',
                        verticalAlign: 'middle',
                    },
                }
            },
            emphasis: {
                show: true,
                textStyle: {
                    fontSize: 46,
                }
            }
        },
        data: ydata
    }],
    graphic: [{
        type: 'group',
        left: 'center',
        top: 'middle',
        children: [{
            type: 'text',
            z: 100,
            left: 'center',
            top: '0',
            style: {
                fill: '#FFFFFF',
                text: [
                    '12'
                ],
                font: '500 54px SourceHanSansCN-Medium'
            }
        }]
    }]
};
myChart.setOption(option);