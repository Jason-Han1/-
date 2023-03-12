$.get(ROOT_PATH + 'data/asset/data/aqi-beijing.json', function (data) {
    myChart.setOption(option = {
backgroundColor: '#ffffff',
        title: {
            text: 'Beijing AQI'
        },
        tooltip: {
            trigger: 'axis'
        },
        xAxis: {
            data: data.map(function (item) {
                return item[0];
            })
        },
        yAxis: {
            splitLine: {
                show: false
            }
        },
        toolbox: {
            left: 'center',
            feature: {
                dataZoom: {
                    yAxisIndex: 'none'
                },
                restore: {},
                saveAsImage: {}
            }
        },
        dataZoom: [{
            startValue: '2014-06-01'
        }, {
            type: 'inside'
        }],
        visualMap: {
            top: 10,
            right: 10,
            pieces: [{
                gt: 0,
                lte: 50,
                color: '#096'
            }, {
                gt: 50,
                lte: 100,
                color: '#FD5463'
            }, {
                gt: 100,
                lte: 150,
                color: '#02B6A3'
            }, {
                gt: 150,
                lte: 200,
                color: '#02B6A3'
            }, {
                gt: 200,
                lte: 300,
                color: '#FD5463'
            }, {
                gt: 300,
                color: '#FD5463'
            }],
            outOfRange: {
                color: '#999'
            }
        },
        series: {
            name: 'Beijing AQI',
            type: 'line',
            data: data.map(function (item) {
                return item[1];
            }),
            markLine: {
                silent: true,
                data: [{
                    yAxis: 100
                }, {
                    yAxis: 200
                
                }]
            }
        }
    });
});