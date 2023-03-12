option = {
    title: {
        text: 'Awesome Chart'
    },
    xAxis: {
        data: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
    },
    yAxis: {},
    series: [{
        type: 'line',
        data:[220, 182, 191, 234, 290, 330, 310],
        itemStyle : {
            normal : {
                lineStyle:{
                    width:3,//折线宽度
                },
                 color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                    offset: 1,
                    color: '#0eb92e' // 0% 处的颜色
                }, {
                    offset: 0,
                    color: '#f0e242' // 100% 处的颜色
                }], false),
                opacity: 0.4
            }
        },
    }]
};