var getfpkszb = [62.35]; //非贫困生占比


//贫困生分布-非贫困生图表
option = {
    backgroundColor: '#fff',

    title: {
        text: getfpkszb,
        textStyle: {
            color: '#559BF4',
            fontSize: 40
        },
        subtextStyle: {
            color: '#B1B1B1',
            fontSize: 32
        },
        itemGap: 20,
        left: 'center',
        top: 'center'
    },
    angleAxis: {
        max: 100,
        clockwise: false, // 逆时针
        // 隐藏刻度线
        show: false
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
    polar: {
        center: ['50%', '50%'],
        radius: '100%' //图形大小
    },
    series: [{
        stack: '测试',
        type: 'bar',
        data: getfpkszb,
        showBackground: true,
        backgroundStyle: {
            color: '#EFF2F5',
            borderColor: '#EFF2F5',
            borderWidth: 3
        },
        coordinateSystem: 'polar',
        roundCap: true,
        barWidth: 30,
        silent: true,
        itemStyle: {
            normal: {
                opacity: 1,
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: '#4065E0'
                }, {
                    offset: 1,
                    color: '#4598E5'
                }]),
                borderColor: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: '#4065E0'
                }, {
                    offset: 1,
                    color: '#4598E5'
                }]),
                borderWidth: 3
            }
        },
    }]
};