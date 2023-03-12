option = {
    title: {
        text: '一天用电量分布',
        subtext: '纯属虚构'
    },
    tooltip: {
        trigger: 'axis'
    },
    toolbox: {
        show: true,
        feature: {
            saveAsImage: {}
        }
    },
    xAxis:  {
        type: 'category',
        boundaryGap: true,
        data: ['00:00', '01:15', '02:30', '03:45', '05:00', '06:15', '07:30', '08:45', '10:00', '11:15', '12:30', '13:45', '15:00', '16:15', '17:30', '18:45', '20:00', '21:15', '22:30', '23:45']
    },
    yAxis: {
        type: 'value',
        axisLabel: {
            formatter: '{value} W'
        },
    },
    series: [
        {
            name:'用电量',
            type:'line',
            smooth: true,
            showSymbol: false,
            symbol: false,
            lineStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                        offset: 0.7, color: '#993CED' // 0% 处的颜色
                    }, {
                        offset: 1, color: '#56D9FC' // 100% 处的颜色
                    }], false),
                    width: 5,
                },
            },
            markPoint: {
                data: [{
                 name: '最大值',
                 type: 'max',
                 valueIndex: 0
                }],
            },
            data: [300, 280, 250, 260, 270, 300, 550, 500, 400, 390, 380, 390, 400, 500, 600, 750, 800, 700, 600, 400],
        }
    ]
};
