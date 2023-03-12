option = {
    backgroundColor: '#212121',
    tooltip: {
        trigger: 'axis',
        backgroundColor: 'rgba(0,0,0,0.93)',
        formatter: function(params) {
            var date = new Date(params[0].value[0]);
            var data = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate();
            var res = data + '<br/>';
            for (var i = 0; i < params.length; i++) {
                res += params[i].marker + "<span style='color:" + params[i].color + "'>" + params[i].seriesName + ":\n" + params[i].value[1] + "</span><br/>";
            }
            return res;

        }
    },
    toolbox: {
        show: false,
        feature: {
            mark: {
                show: true
            },
            dataView: {
                show: true,
                readOnly: false
            },
            restore: {
                show: true
            },
            saveAsImage: {
                show: true
            }
        }
    },
    dataZoom: [{
        show: true,
        start: 30,
        backgroundColor: 'rgba(0,0,0,0)',
        dataBackgroundColor: 'rgba(9,162,117,0.3)',
        fillerColor: 'rgba(0,255,255,0.2)',
        handleColor: 'rgba(0,255,255,0.8)',
        textStyle: {
            color: 'rgba(0,255,255,1)',
        },
    }, {
        type: 'inside'
    }],
    legend: {
        data: ['series1'],
        textStyle: {
            color: "#666"
        },
        show: false,
    },
    xAxis: [{
        type: 'time',
        splitNumber: 15,
        splitLine: {
            show: false,
            lineStyle: {
                color: '#666',
            },
        },
        axisLine: {
            show: false,
            lineStyle: {
                color: '#666',
            },
        },
    }],
    yAxis: [{
        type: 'value',
        axisLabel: {
            formatter: '{value}'
        },
        splitLine: {
            lineStyle: {
                color: '#666',
            },
        },
        axisLine: {
            show: false,
            lineStyle: {
                color: '#666',
            },
        },
    }],
    series: [{
        name: '',
        type: 'line',
        symbol: 'roundRect',
        itemStyle: {
            normal: {
                borderWidth: 1,
                borderColor: '#0FF',
                color: 'rgba(255,255,255,0.9)',
                lineStyle: {
                    color: '#0FF'
                },
                shadowColor: 'rgba(1,3,20, 1)',
                shadowBlur: 3,
                shadowOffsetY: 3
            }
        },
        showAllSymbol: true,
        symbolSize: function(value) {
            return Math.round(value[2] / 6) + 5;
        },
        data: (function() {
            var d = [];
            var len = 0;
            var now = new Date();
            var value;
            while (len++ < 200) {
                d.push([
                    new Date(2014, 9, 1, 0, len * 10000),
                    (Math.random() * 60).toFixed(2) - 0,
                    (Math.random() * 100).toFixed(2) - 0
                ]);
            }
            return d;
        })()
    }]
};