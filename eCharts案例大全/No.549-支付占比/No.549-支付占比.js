var data = {
    'name': '现金支付',
    'value': [35],
    'nAmount': 1566557.14
};

var color = ['#00FDFA', '#00B1BF','#00F7F8']

option = {
    backgroundColor: '#03060F',
    title: {
        text: data.value[0] + '%',
        textStyle: {
            color: color[2],
            fontSize: 90
        },
        // subtext: data.name + '占比',
        // subtextStyle: {
        //     color: '#aaaaaa',
        //     fontSize: 30
        // },
        itemGap: 20,
        left: 'center',
        top: 'center'
    },
    graphic: [{
        type: 'text',
        z: 100,
        left: 'center',
        top: '86%',
        style: {
            fill: '#fff',
            text: data.name,
            // text: [
            //     '横轴表示温度，单位是°C',
            //     '纵轴表示高度，单位是km',
            //     '右上角有一个图片做的水印',
            //     '这个文本块可以放在图中各',
            //     '种位置'
            // ].join('\n'),
            font: '30px Microsoft YaHei'
        }
    }],
    tooltip: {
        formatter: function(params) {
            return '<span style="color: #fff;">占比：' + params.value + '%</span>';
        }
    },
    angleAxis: {
        max: 100,
        clockwise: false, // 逆时针
        // 隐藏刻度线
        show: false,
        startAngle:110,
    },
    radiusAxis: {
        type: 'category',
        show: true,
        axisLabel: {
            show: false,
        },
        axisLine: {
            show: false,

        },
        axisTick: {
            show: false
        },
    },
    polar: [{
        center: ['50%', '50%'], //中心点位置
        radius: '80%' //图形大小
    }],
    series: [{
            name: '小环',
            type: 'gauge',
            splitNumber: 12,
            radius: '55%',
            center: ['50%', '50%'],
            startAngle: 0,
            endAngle: 359.9999,
            axisLine: {
                show: false
            },
            axisTick: {
                show: true,
                lineStyle: {
                    color: color[1],
                    width: 3.5,
                    shadowBlur: 1,
                    shadowColor: color[1],
                },
                length: 20,
                splitNumber: 3
            },
            splitLine: {
                show: false
            },
            axisLabel: {
                show: false
            },
            detail: {
                show: false
            }
        }, {
            type: 'bar',
            z: 10,
            data: data.value,
            showBackground: false,
            backgroundStyle: {
                color: color[1],
                borderWidth: 10,
                width: 10
            },
            coordinateSystem: 'polar',
            roundCap: true,
            barWidth: 35,
            itemStyle: {
                normal: {
                    opacity: 1,
                    color: new echarts.graphic.LinearGradient(0, 0, 1, 1, [{
                        offset: 0,
                        color: color[0]
                    }, {
                        offset: 1,
                        color: color[1]
                    }]),
                    shadowBlur: 5,
                    shadowColor: '#2A95F9',
                }
            },
        },
        {
            type: 'pie',
            name: '内层细圆环',
            radius: ['41%', '38%'],
            startAngle:110,
            hoverAnimation: false,
            clockWise: true,
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 1, 1, [{
                        offset: 0,
                        color: color[0]
                    }, {
                        offset: 1,
                        color: color[1]
                    }]),
                }
            },
            tooltip: {
                show: false,
            },
            label: {
                show: false
            },
            data: [100]
        }
    ]
};