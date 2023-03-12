var type = '不合格';
var val = 80;
option = {
    tooltip: {
        formatter: "{a} <br/>{b} : {c}%"
    },
    series: [{
        //背景刻度
        name: '背景刻度',
        type: 'gauge',
        splitNumber: 10, //刻度数量
        min: 0,
        max: 100,
        radius: '70%', //刻度尺寸略小
        endAngle: -45,
        zlevel: 20,
        axisLine: {
            show: false,
            lineStyle: {
                width: 0,
                shadowBlur: 0,
                color: [
                    [1, '#ccc']
                ]
            }
        },
        axisTick: {
            show: true,
            lineStyle: {
                color: '#ddd',
                width: 1
            },
            length: 10,
            splitNumber: 3
        },
        splitLine: {
            show: true,
            length: 20,
            lineStyle: {
                color: '#aaa'
            }
        },
        axisLabel: {
            show: false,
        },
        detail: {
            show: false
        }
    }, {
        //进度轴线
        name: '进度',
        type: 'gauge',
        radius: '80%', //进度轴尺寸略大
        endAngle: -45,
        zlevel: 40,
        animationEasing: 'bounceInOut',
        animationDelay: function(idx) {
            return idx * 1000;
        },
        axisLine: {
            show: false,
            lineStyle: {
                width: 0,
                shadowBlur: 0,
                color: [
                    [1, '#ccc']
                ]

            }
        },
        axisTick: {
            show: false
        },
        splitLine: {
            show: false
        },
        axisLabel: {
            show: false
        },
        detail: {
            offsetCenter: [
                0, '90%'
            ], // x, y，单位px
            textStyle: {
                fontWeight: 400,
                color: '#fa4936',
                fontSize: 30
            },
            formatter: '{value}%'
        },
        pointer: {
            show: true,
            length: '70%',
            width: 14
        }, // 其他演示在itemStyle中调试
        // 不是整个canvas的title
        title: {
            color: '#fa4936',
            fontSize: 30,
            fontWeight: 400,
            offsetCenter: [0, '-50%']
        },
        data: [
            // data数据为实时数据
            {
                name: type,
                value: val
            }
        ]
    }, {
        name: '进度展示条',
        type: 'pie',
        radius: ['71%', '79%'],
        avoidLabelOverlap: false,
        silent: true,
        startAngle: 225,
        zlevel: 1,
        animationEasing: 'bounceIn',
        animationDelay: function(idx) {
            return idx * 1000;
        },
        label: {
            normal: {
                show: false
            },
            emphasis: {
                show: false
            }
        },
        labelLine: {
            normal: {
                show: false
            }
        },
        data: [{
            // 展示数据
            value: val * 2.7, //270(度数)*80(展示数据具体值)*0.01(百分占比常数)
            name: '显示进度条',
            itemStyle: {
                normal: {
                    color: {
                        type: 'linear',
                        x: 0,
                        y: 0,
                        x2: 0,
                        y2: 1,
                        colorStops: [{
                            offset: 0,
                            color: '#f84fa6' // 0% 处的颜色
                        }, {
                            offset: 1,
                            color: '#f88a4e' // 100% 处的颜色
                        }],
                        globalCoord: false // 缺省为 false
                    },
                    shadowColor: 'rgba(0, 0, 0, 0.2)',
                    shadowBlur: 10
                }
            }
        }, {
            // 空白数据
            value: 270 * (1 - val * 0.01), //270*(1-80*0.01)
            name: '隐藏进度条',
            itemStyle: {
                normal: {
                    color: '#eaeaea',
                    shadowColor: 'rgba(0, 0, 0, 0.1)',
                    shadowBlur: 10
                }
            }
        }, {
            // 占位数据(写死)
            value: 90,
            name: '空白部分',
            itemStyle: {
                normal: {
                    color: '#eee'
                }
            }
        }]
    }]
};