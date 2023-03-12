var getfpkszb = [62.35]; //非贫困生占比
var getfpkszb1 = [0.01];
var getfpksrs = [1265]; //非贫困生人数


//贫困生分布-非贫困生图表
option = {
    backgroundColor: '#fff',

    title: {
        text: getfpkszb + '%',
        textStyle: {
            color: '#559BF4',
            fontSize: 40
        },

        subtext: '非贫困生',
        subtextStyle: {
            color: '#B1B1B1',
            fontSize: 30
        },
        itemGap: 20,
        left: 'center',
        top: '43%'
    },
    tooltip: {
        formatter: function(params) {
            return '<span style="color: #fff;">非贫困生人数：' + getfpksrs + '人</span>';
        }
    },
    angleAxis: {
        max: 100,
        clockwise: true, // 逆时针
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
                    color: '#5CBEFF'
                }, {
                    offset: 1,
                    color: '#518FEF'
                }]),
                borderColor: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: '#5CBEFF'
                }, {
                    offset: 1,
                    color: '#518FEF'
                }]),
                borderWidth: 3
            }
        },
    }, {
        stack: '测试',
        type: 'bar',
        data: getfpkszb1,
        showBackground: true,
        backgroundStyle: {
            color: '#EFF2F5',
            shadowColor: 'rgba(0, 0, 0, 0.2)',
            shadowBlur: 10,
            shadowOffsetY: 2,

        },
        coordinateSystem: 'polar',
        roundCap: true,
        barWidth: 30,
        itemStyle: {
            color: '#90BDFF',
            borderColor: 'rgba(81,143,239, 1)',
            borderWidth: 3
        },
    }]
};