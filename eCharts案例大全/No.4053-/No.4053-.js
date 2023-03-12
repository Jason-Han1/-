let data = 50;
option = {
    //backgroundColor: 'transparent',
    backgroundColor: '#00111b',
    
    // 极坐标系
    polar: {
        radius: ['24%', '30%'],
        center: ['50%', '50%'],
    },
    // 极坐标系：角度轴
    angleAxis: {
        max: 100 * 360 / 270,
        show: false,
        type: 'value',
        startAngle: 225
    },
    // 极坐标系：径向轴
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
    series: [
        // 第二层：数据以进度条的形式展示
        {
            type: 'bar',
            data: [{
                value: data
            }],
            itemStyle: {
                color: function() {
                    let obj = {
                        type: 'linear',
                        x: 0, //右
                        y: 0.5, //下
                        x2: 1, //左
                        y2: 0, //上
                        colorStops: [{
                            offset: 0,
                            color: '#8ac4d4'
                        }, {
                            offset: 1,
                            color: '#ec5e26'
                        }]
                    };

                    if (data >= 0 && data < 20) {
                        obj.colorStops[1].color = '#8ac4d4';
                    } else if (data >= 20 && data < 40) {
                        obj.y = 0.3;
                        obj.x2 = 2;
                    } else if (data >= 40 && data < 60) {
                        obj.y = 0.3;
                        obj.x2 = 1.5;
                    } else if (data >= 60 && data < 80) {
                        obj.y = 0.4;
                        obj.x2 = 1.1;
                    }
                    return obj;
                },
            },
            barGap: '-100%',
            coordinateSystem: 'polar',
            roundCap: true,
            cursor: 'auto',
            z: 2,
        },
        // 第二层：进度条背景
        {
            type: 'bar',
            data: [{
                value: 100,
            }],
            itemStyle: {
                color: '#013f72',
                borderWidth:5,
                bordercolor:''
            },
            coordinateSystem: 'polar',
            roundCap: true,
            cursor: 'auto',
            emphasis: {
                itemStyle: {
                    color: '#013f72'
                }
            },
            z: 1
        },
        // 第三层；仪表盘：只显示刻度
        {
            type: 'gauge',
            radius: '35%',
            startAngle: '225',
            endAngle: '-45',
            splitNumber: 10,
            center: ['50%', '50%'],
            min: 0,
            max: 100,
            pointer: {
                show: false
            },
            title: {
                show: false
            },
            detail: {
                show: false
            },
            data: [{
                value: 100,
                name: ''
            }],
            axisLine: {
                lineStyle: {
                    width: 20,
                    color: [
                        [0, '#5fa7ca'],
                        [1, '#5fa7ca']
                    ],
                    opacity: 0
                }
            },
            axisTick: {
                length: 8,
                lineStyle: {
                    color: 'auto'
                }
            },
            splitLine: {
                show: false
            },
            axisLabel: {
                show: true,
                distance: 18, //距离刻度的距离
                lineHeight: -50,
                formatter: function(value) {
                    return value % 100 === 0 ? value : '';
                }
            }
        },
    ]
};
