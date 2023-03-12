//当天空气质量情况
option = {
    backgroundColor: 'rgb(0,17,76)',
    title: [{
        text: 'AQI',
        bottom: '280',
        x: '280',
        padding: [7, 14],
        textStyle: {
            fontWeight: 'normal',
            fontSize: 16,
            color: '#fff'
        }
    }],
    angleAxis: {
        show: false,
        max: 100 * 360 / 180, //-45度到225度，二者偏移值是270度除360度
        type: 'value',
        startAngle: 180, //极坐标初始角度
        splitLine: {
            show: false
        }
    },
    barMaxWidth: 14, //圆环宽度
    radiusAxis: {
        show: false,
        type: 'category',
    },
    //圆环位置和大小
    polar: {
        center: ['50%', '50%'],
        radius: '350'
    },
    series: [{
            type: 'bar',
            data: [{ //上层圆环，显示数据
                value: 75,
                itemStyle: {
                    color: { //图形渐变颜色方法，四个数字分别代表，右，下，左，上，offset表示0%到100%
                        type: 'linear',
                        x: 0,
                        y: 0,
                        x2: 1, //从左到右 0-1
                        y2: 0,
                        colorStops: [{
                            offset: 0,
                            color: 'rgb(11,255,0)'
                        }, {
                            offset: 0.3,
                            color: 'rgb(239,255,0)'
                        }, {
                            offset: 0.6,
                            color: 'rgb(239,255,0)'
                        }, {
                            offset: 1,
                            color: '#f00'
                        }],
                    },
                },
            }],
            barGap: '100%', //柱间距离,上下两层圆环重合
            coordinateSystem: 'polar',
            roundCap: true, //顶端圆角从 v4.5.0 开始支持
            z: 2 //圆环层级，同zindex
        },
        { //下层圆环，显示最大值
            type: 'bar',
            data: [{
                value: 100,
                itemStyle: {
                    color: '#cecece'
                }
            }],
            barGap: '-90%',
            barWidth: 10,
            coordinateSystem: 'polar',
            roundCap: true,
            z: 1
        },
        //仪表盘
        {
            name: 'AQI',
            type: 'gauge',
            startAngle: 225, //起始角度，同极坐标
            endAngle: -45, //终止角度，同极坐标
            axisLine: {
                show: false,
            },
            splitLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                show: false
            },
            splitLabel: {
                show: false
            },
            pointer: {
                show: false
            },
            title: {
                offsetCenter: [-30, -50],
                color: '#FFFFFF',
                fontSize: 60,
                fontWeight: 500,
                rich: {
                    a: {
                        fontWeight: 'normal',
                        fontSize: 16,
                        color: '#FFF',
                        padding: [0, 0, 10, 40]
                    }
                }
            },
            detail: {
                formatter: function(e) {
                    return '良';
                },
                color: '#fff',
                fontSize: 16,
                offsetCenter: [60, 0],
                padding: [4, 12],
            },
            data: [{
                value: 75,
                name: '{a|' + '今日空气质量' + '}' + '\n\n   ' + 75
            }]
        }
    ]
}