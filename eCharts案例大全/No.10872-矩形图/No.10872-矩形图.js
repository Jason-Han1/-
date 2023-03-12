 var a = 18;//X fontSize
    var b = 15;//轴数据 fontSize
    var xAxisTextColor = '#FFFFFF';//'#4e7199';//字体颜色
    var legendColor = '#FFFFFF';//legend颜色

    var option = {
        backgroundColor: "#000000",
        tooltip: {
            trigger: 'axis',
            formatter: function (itme) {
                return itme[0].name + "：" + itme[0].value;
            }
        },
        grid: {
            //top:'30%',
            //left: '20%',
        },
        yAxis: [{
            name: '%',
            nameTextStyle: {
                color: xAxisTextColor,
                fontSize: a,
            },
            type: 'value',
            axisLabel: {
                interval: 0,
                color: '#d3e0fa',
                textStyle: {
                    color: xAxisTextColor,
                    fontSize: a,
                }
            },
            splitLine: {
                show: false
            },
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            }
        }],
        xAxis: [{
            type: 'category',
            data: ['周一', '周二', '周三', '周四', '周五'],
            axisLabel: {
                interval: 0,
                color: '#d3e0fa',
            },
            axisTick: {
                show: false
            },
            splitLine: {
                show: false
            },
            axisLine: {
                show: false
            },
            splitArea: {
                show: false,
            }
        }],
        series: [
            {
                name: '线损率',
                type: 'pictorialBar',
                symbol: 'path://M35,0L35,70L0,70z M35,0L35,70L70,70z',
                data: [100, 200, 341, 374, 390],
                barWidth: 40,
                // barGap: 1, //柱子之间间距
                symbolOffset: [0, -15],
                z: 99,
                itemStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                            offset: 0,
                            color: '#0788EE'
                        }, {
                            offset: 0.5,
                            color: '#0788EE'
                        }, {
                            offset: 0.5,
                            color: '#15B8F9'
                        }, {
                            offset: 1,
                            color: '#15B8F9'
                        }]),
                        opacity: 1,
                    }
                }
            },
            {
                // name: '年报上报率2',
                type: 'pictorialBar',
                symbol: 'diamond',
                barWidth: 40,
                symbolSize: ['100%', 30],
                z: 99,
                itemStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                            offset: 0,
                            color: '#0788EE'
                        }, {
                            offset: 0.5,
                            color: '#0788EE'
                        }, {
                            offset: 0.5,
                            color: '#15B8F9'
                        }, {
                            offset: 1,
                            color: '#15B8F9'
                        }]),
                        opacity: 1,
                    }
                },
                data: [1, 1, 1, 1, 1],
            },
        ]
    };