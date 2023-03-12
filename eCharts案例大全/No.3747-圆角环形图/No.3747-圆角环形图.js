const percent = 78 // 数值

option = {
    backgroundColor: 'rgba(8, 17, 67, 0.9)',
    title: {
        text: '占比',
        left: 'center',
        top: '45%',
        textStyle: {
            color: 'rgba(31, 196, 225, 0.6)',
            fontSize: 26
        },
        subtext: `${percent} %`,
        subtextStyle: {
            color: 'rgba(31, 196, 225, 0.6)',
            fontSize: 28
        }
    },
    polar: {
        radius: ['50%', '60%'],
        center: ['50%', '50%']
    },
    // 极坐标角度轴
    angleAxis: {
        min: 0,
        max: 100,
        // startAngle: 0,
        // endAngle: -0,
        clockwise: true,
        show: false, // 隐藏刻度线
    },
    // 极坐标径向轴
    radiusAxis: {
        type: 'category',
        // 隐藏极坐标轴线
        axisLine: {
            show: false,
        },
        axisTick: {
            show: false,
        }
    },
    tooltip: {
        show: true,
        formatter: val => {
            return `${val.seriesName}: ${val.data}%`
        },
        backgroundColor: 'rgba(31, 196, 225, 0.2)',
        borderColor: 'rgba(31, 196, 225, 0.6)'
    },
    series: [{
        // 进度条
        type: 'bar',
        name: '占比',
        coordinateSystem: 'polar',
        // 设置柱子背景灰色，需开启showBackground才能显示backgroundStyle
        showBackground: true,
        backgroundStyle: {
            // color: 'rgba(14, 61, 128,0.3)',
            color: 'rgba(255,255,255, 0.15)'
        },
        // 两端设置圆角
        roundCap: true,
        itemStyle: {
            color: {
                x: 0,
                y: 0,
                x1: 0,
                y1: 1,
                colorStops: [{
                    offset: 0,
                    color: 'rgba(190, 235, 255,0.65)'
                }, {
                    offset: 1,
                    color: 'rgba(0,0,255,1)'
                }]
            }
        },
        data: [percent]
    }, {
        // 刻度线设置
        type: 'gauge',
        name: '',
        radius: 174,
        center: ['50%', '50%'],
        startAngle: 0,
        endAngle: 360,
        silent: false,
        splitNumber: 16,
        splitLine: {
            length: 16,
            distance: 30,
        },
        // 是否显示仪表盘数据
        detail: {
            show: false
        },
        pointer: {
            show: false
        },
        axisLabel: {
            show: false,
        },
        axisTick: {
            show: false
        },
        axisLine: {
            show: false,
        },
        data: [percent],
        z: 10,
    }]
};