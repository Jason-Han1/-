var uploadedDataURL = "/asset/get/s/data-1591185848850-_9446twp-.json";

$.get(uploadedDataURL, function(data) {


    if (!!data) {
        data = evil(data);
    }


    myChart.setOption(option = {
        title: {
            text: 'Beijing AQI'
        },
        tooltip: {
            trigger: 'axis'
        },
        xAxis: {
            // 现在坐标系刻度最大值、最小值
            axisLabel: {
                showMinLabel: true,
                showMaxLabel: true,
            },
            data: data.map(function(item) {
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
                color: '#ffde33'
            }, {
                gt: 100,
                lte: 150,
                color: '#ff9933'
            }, {
                gt: 150,
                lte: 200,
                color: '#cc0033'
            }, {
                gt: 200,
                lte: 300,
                color: '#660099'
            }, {
                gt: 300,
                color: '#7e0023'
            }],
            outOfRange: {
                color: '#999'
            }
        },
        series: {
            name: 'Beijing AQI',
            type: 'line',
            data: data.map(function(item) {
                return item[1];
            }),
            markLine: {
                silent: true,
                data: [{
                    yAxis: 50
                }, {
                    yAxis: 100
                }, {
                    yAxis: 150
                }, {
                    yAxis: 200
                }, {
                    yAxis: 300
                }]
            }
        }
    });
});

// Fix Eval Function
function evil(fn) {
    var Fn = Function;
    return new Fn('return ' + fn)();
}