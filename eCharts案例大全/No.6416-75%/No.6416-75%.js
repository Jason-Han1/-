option = {
    backgroundColor: '#030F35',
    title: {
        text: '75%',
        textStyle: {
            color: '#fff',
            fontSize: 30
        },
        left: 'center',
        top: 'center'
    },
    angleAxis: {
        max: 100, // 满分
        clockwise: true, // 顺时针
        // 隐藏刻度线
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            show: false
        },
        splitLine: {
            show: false
        }
    },
    radiusAxis: {
        type: 'category',
        // 隐藏刻度线
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            show: false
        },
        splitLine: {
            show: false
        }
    },
    polar: {
        center: ['50%', '50%'],
        radius: '100%' //图形大小
    },
    series: [
        {
            type: 'bar',
            data: [{
                name: '进度',
                value: 75,
                itemStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                            {
                                offset: 0,
                                color: '#305A80'
                            }, {
                                offset: 1,
                                color: '#1764D0'
                            }
                        ])
                    }
                },
            }],
            coordinateSystem: 'polar',
            roundCap: true,
            barWidth: 40,
            barGap: '-100%', // 两环重叠
            z: 2,
        }, { // 灰色环
            type: 'bar',
            data: [{
                value: 100,
                itemStyle: {
                    color: 'rgba(64, 71, 100, 0.1)',
                    //color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                            //{
                                //offset: 1,
                                //color: '#3B87B9'
                            //}, {
                                //offset: 0,
                                //color: 'rgba(64, 71, 100, 0.1)'
                            //}
                       //]),
                    shadowColor: 'rgba(0, 0, 0, 0.2)',
                    shadowBlur: 5,
                    shadowOffsetY: 2
                }
            }],
            coordinateSystem: 'polar',
            roundCap: true,
            barWidth: 40,
            barGap: '-100%', // 两环重叠
            z: 1
        }
    ]
};