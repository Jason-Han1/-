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
        symbol: 'rect',
        symbolSize: 8,
        smooth: true,
        // animationDuration: 2000,
        itemStyle: {
            normal: {
                // color: 'red',
                shadowBlur: 2,
                shadowColor: "rgba(0, 0, 0, .12)",
                shadowOffsetX: 2,
                shadowOffsetY: 2
            }
        },
        lineStyle: {
            normal: {
                width: 3,
                shadowColor: 'rgba(0,0,0,0.4)',
                shadowBlur: 10,
                shadowOffsetX: 4,
                shadowOffsetY: 10
            }
        },
        data: [220, 182, 191, 234, 290, 330, 310]
    }]
};