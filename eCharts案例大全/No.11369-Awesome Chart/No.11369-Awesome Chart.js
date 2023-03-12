option = {
    backgroundColor:"#fff",
    title: {
        text: 'Awesome Chart'
    },
    xAxis: {
        show: false,
        data: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
    },
    yAxis: {
        show: false
    },
    series: [{
        type: 'line',
        symbol: 'circle',
        data:[220, 182, 191, 234, 290, 330, 310],
        lineStyle: {
            width: 0,
            color: "#2BD0BC"
        },
        label: {
            show: true,
            color: "#2BD0BC"
        },
        itemStyle:{
            color: "#2BD0BC"
        },
        areaStyle: {
            color: {
                type: "linear",
                x: 0,
                y:1,
                x2: 0,
                y2:0,
                colorStops: [{
                    offset: 0, color: '#2BD0BC33' // 0% 处的颜色
                }, {
                    offset: 1, color: '#2BD0BCff' // 100% 处的颜色
                }],
            }
        }
    }, {
        type: 'bar',
        animation: false,
        barWidth: 2,
        hoverAnimation: false,
        data: [220, 182, 191, 234, 290, 330, 310],
        tooltip: {
            show: false
        },
        itemStyle: {
            normal: {
                color: {
                    type: "linear",
                    x: 0,
                    y:1,
                    x2: 0,
                    y2:0,
                    colorStops: [{
                        offset: 1, color: '#fff' // 0% 处的颜色
                    }, {
                        offset: 0, color: '#ffffff33' // 100% 处的颜色
                    }],
                },
                label: {
                    show: false
                }
            }
        }
    }]
};