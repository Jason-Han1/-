option = {
    grid: {
        left: "0px",
        top: "0px",
        right: "0px",
        bottom: "0px"
    },
    xAxis: {
        type: 'category',
        data: ['00:00', '2:00', '4:00', '6:00', '8:00', '10:00', '12:00', '14:00', '16:00', '18:00', '20:00', "22:00"],
        show: false,
        interval: 0
    },
    yAxis: {

        show: false
    },
    series: [{
        name: 'cpu',
        type: 'line',
        smooth: true,
        showSymbol: false,
        data: [randomData(), randomData(), randomData(), randomData(), randomData(), randomData(), randomData(), randomData(), randomData(), randomData(), randomData(), randomData()],
        areaStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: 'blue' // 0% 处的颜色
                }, {
                    offset: 1,
                    color: 'blue' // 100% 处的颜色
                }], false)
            }
        },
        itemStyle: {
            normal: {
                color: 'blue'
            }
        },
        lineStyle: {
            normal: {
                width: 0
            }
        }
    }]
};

function randomData() {
    return Math.round(Math.random() * 10);
}
setInterval(function() {
    var option = {
        series: [{
            name: '今日',
            data: [randomData(), randomData(), randomData(), randomData(), randomData(), randomData(), randomData(), randomData(), randomData(), randomData(), randomData(), randomData()]
        }]
    };
    myChart.setOption(option);
}, 1000);