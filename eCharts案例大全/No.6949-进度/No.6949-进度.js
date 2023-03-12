option = {
    angleAxis: {
        axisLine: {
            show: false
        },
        axisLabel: {
            show: false
        },
        splitLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        min: 0,
        // max: 100,
        max: 122.5,
        startAngle: 237
    },
    radiusAxis: {
        type: 'category',
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            show: false
        },
        z: 10
    },
    polar: {
        radius: '90%'
    },
    series: [{
        type: 'bar',
        // data: [0, 0, 81.5],
        data: [0, 0, 100],
        z: 1,
        coordinateSystem: 'polar',
        animationDuration: 2500,
        barWidth: '25%',
        //   name: '警告事件',
        roundCap: true,
        color: new echarts.graphic.LinearGradient(
            0, 0, 1, 0,
            [{
                    offset: 0,
                    color: '#00c6ff'
                    // #00c6ff-#12d8fa
                },
                {
                    offset: 1,
                    color: '#12d8fa'
                }
            ]
        )
    }],
    tooltip: {
        show: false
    }
}