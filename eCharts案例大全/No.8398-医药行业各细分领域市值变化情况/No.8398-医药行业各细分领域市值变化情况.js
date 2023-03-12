var data = {
    'time':['2018-12-01', '2018-12-06', '2018-12-11', '2018-12-16', '2018-12-31', '2019-01-31', '2019-02-28'],
    'yuanliao':[2158.69, 2229.35, 2176.11, 2133.02, 2034.8, 1960.4, 2364.21],
    'yaopin':[4609.54, 4538.69, 4286, 4187.31, 3889.49, 4080.31, 4940.24],
    'shengwu':[5619.62, 5701.04, 5259.15, 4900.77, 4593.07, 4251.27, 5358.16],
    'zhongyao':[7217.14, 7339.75, 7207.81, 7177.55, 6820.39, 6497.35, 7757.75],
    'fuwu':[3354.19, 3403.21, 3432.2, 3432.99, 3194.29, 3210.61, 3817.02],
    'qixie':[5183.31, 5278.3, 5043.84, 4849.75, 4703.81, 4600.97, 5643.04],
    'shangye':[2775.48, 2815.2, 2711.56, 2664.15, 2480.81, 2425.86, 2812.03]
};
option = {
    grid: {
        top: '25%',
        bottom: '25%'
    },
    xAxis: {
        type: 'category',
        axisTick: {show: false},
        data: data.time,
        axisLabel: {interval: 0, rotate: 25, fontSize: 14}
    },
    yAxis: {
        name: '总市值（亿元）',
        nameTextStyle: {fontSize: 14},
        min: 1500
    },
    legend: {
        show: true,
        textStyle: {fontSize: 16},
        top: '16%'
    },
    title: {
        text: '医药行业各细分领域市值变化情况',
        left: 'center',
        top: '11%',
        textStyle: {fontSize: 24}
    },
    backgroundColor: 'rgba(255,255,255,0.8)',
    series: [{
        name: '化学原料',
        type: 'line',
        data: data.yuanliao,
        symbol: 'none',
        lineStyle: {width: 3},
        markLine: {
            data: [{
                name: '药品集采事件',
                xAxis: '2018-12-06'
            }],
            label: {
                formatter: '药品集采事件',
                fontSize: 16
            },
            symbol: 'none',
            lineStyle: {width: 2, color: '#6e7074'}
        }
    },{
        name: '化学药品',
        type: 'line',
        data: data.yaopin,
        symbol: 'none',
        lineStyle: {width: 3}
    },{
        name: '生物制品',
        type: 'line',
        data: data.shengwu,
        symbol: 'none',
        lineStyle: {width: 3}
    },{
        name: '中药',
        type: 'line',
        data: data.zhongyao,
        symbol: 'none',
        lineStyle: {width: 3}
    },{
        name: '医疗服务',
        type: 'line',
        data: data.fuwu,
        symbol: 'none',
        lineStyle: {width: 3}
    },{
        name: '医疗器械',
        type: 'line',
        data: data.qixie,
        symbol: 'none',
        lineStyle: {width: 3}
    },{
        name: '医药商业',
        type: 'line',
        data: data.shangye,
        symbol: 'none',
        lineStyle: {width: 3}
    }]
}