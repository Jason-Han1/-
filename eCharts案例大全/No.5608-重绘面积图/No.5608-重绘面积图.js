dataAll = (function() {
    var res = [];
    var len = 0;
    while (len < 30) {
        res.push((Math.random() * 3 + 5).toFixed(1) - 0);
        len++;
    }
    return res;
})()

date = (function() {
    var now = new Date();
    var res = [];
    var len = 30;
    while (len--) {
        res.unshift(now.toLocaleTimeString().replace(/^\D*/, ''));
        now = new Date(now - 2000);
    }
    return res;
})()



option = {
    title: {
        text: '重绘面积图',
        subtext: ''
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
            label: {
                backgroundColor: '#283b56'
            }
        }
    },
    legend: [],
    toolbox: {
        show: true,
        feature: {
            dataView: {
                readOnly: false
            },
            restore: {},
            saveAsImage: {}
        }
    },
    dataZoom: {
        show: false,
        start: 0,
        end: 100
    },
    xAxis: [{
        type: 'category',
        boundaryGap: true,
        data: date
    }, ],
    yAxis: [{
        type: 'value',
        scale: true,
        name: '价格',
        max: 30,
        min: 0,
        boundaryGap: [0.2, 0.2]
    }],
    series: [{
            name: '重绘',
            type: 'line',
            smooth: false,
            symbol: "none", // 隐藏点
            data: [],
            areaStyle: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: 'rgba(200, 200, 200,0.5)'
                }, {
                    offset: 1,
                    color: 'rgba(200, 200, 200,0.5)'
                }])
            }
        },
        {
            name: '完整',
            type: 'line',
            smooth: false, // 平滑
            symbol: "none", // 隐藏点
            data: dataAll,
            show: false,
            areaStyle: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: 'rgba(200, 200, 200,0.2)'
                }, {
                    offset: 1,
                    color: 'rgba(200, 200, 200,0.2)'
                }])
            },
            markPoint: {
                data: [{
                    type: 'max',
                    name: '最大值'
                }]
            },
        }
    ]
};

data3 = [];
timer = setInterval(function() {

    data3.push(dataAll.shift());
    myChart.setOption({
        series: [{
            data: data3,
            markPoint: {
                symbol: 'circle',
                symbolSize: 10,
                label: {
                    fontSize:16,
                    color: '#000',
                    formatter: data3[data3.length - 1] + '',
                    offset: [0, -20]
                },
                itemStyle: {
                    color: '#6c6c6c',
                    // borderColor: 'white'
                },
                data: [{
                    value: '',
                    xAxis: data3.length - 1,
                    yAxis: data3[data3.length - 1],

                }]
            }
        }, ]

    });
    dataAll.length === 0 && clearInterval(timer);

}, 500);