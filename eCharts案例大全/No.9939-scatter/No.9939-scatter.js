const ai = [
    [171, 848, '行业解决方案', '热门'],
    [79, 547, '智能风投', '热门'],
    [63, 495, '服务机器人', '热门'],
    [59, 402, 'ADAS系统', '热门'],
    [65, 239, 'AI芯片', '热门'],
    [107, 103, '智能影像诊疗', '热门'],
    [87, 94, '智能营销', '热门'],
    [40, 152, '窗储/物流机器人', '热门'],
    [38, 123, '智能推荐', '热门'],
]

option = {
    backgroundColor: '#15253b',
    "grid": {
        "top": 150,
        "left": 0,
        "right": 100,
        "bottom": 10,
        "containLabel": true
    },
    xAxis: {
        name:'次',
        axisTick: {
            show: false,
        },
        max:200,
        axisLine: {
            lineStyle: {
                color: '#a1aaff80',
            },
        },
        axisLabel: {
            color: '#ffffff99',
        },
        splitLine: {
            show: false,
        },
    },
    yAxis: {
        name:'总投资(亿元)',
        splitLine: {
            show: false,
        },
        axisLine: {
            lineStyle: {
                color: '#a1aaff80',
            },
        },
        axisTick: {
            show: false,
        },
        axisLabel: {
            color: '#ffffff99',
        },
        scale: true
    },
    series: [{
        name: '热门',
        data: ai,
        type: 'scatter',
        symbolSize: 14,
        label: {
            show: true,
            formatter: function(param) {
                return param.data[2];
            },
            color: '#fff',
            position:  ['-100%', '50%']

        },
        itemStyle: {
            shadowBlur: 10,
            shadowColor: 'rgba(120, 36, 50, 0.5)',
            shadowOffsetY: 5,
            color: new echarts.graphic.RadialGradient(0.4, 0.3, 1, [{
                offset: 0,
                color: '#f3f327',
            }, {
                offset: 1,
                color: '#f3f327'
            }])

        }
    }]
};