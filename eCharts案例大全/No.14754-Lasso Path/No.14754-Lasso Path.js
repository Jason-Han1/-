var testdata = {
    'points': {
        'aa': {
            'xAxis': [0.6, 1, 1.5, 2, 2.5, 3, 3.5, 4],
            'yAxis': [0.12, 0.13, 0.12, 0.11, 0.11, 0.18, 0.2, 0.24]
        },
        'bb': {
            'xAxis': [0.6, 1, 1.5, 2, 2.5, 3, 3.5, 4],
            'yAxis': [0.12, 0.14, 0.15, 0.12, 0.12, 0.19, 0.3, 0.26]
        },
        'cc': {
            'xAxis': [0.6, 1, 1.5, 2, 2.5, 3, 3.5, 4],
            'yAxis': [0.13, 0.15, 0.16, 0.17, 0.18, 0.2, 0.4, 0.27]
        }
    },
    'average': { //此为实线，平均值
        'xAxis': [0.6, 1, 1.5, 2, 2.5, 3, 3.5, 4],
        'yAxis': [0.124, 0.14, 0.15, 0.16, 0.16, 0.19, 0.28, 0.26]
    },
    'alpha': 1.7
};

var seriesData = [];
var xAxisArr = [];
var yAxisArr = [];
var xAxisMax,
    xAxisMin,
    yAxisMax,
    yAxisMin;

$.each(testdata, function(key, val) {
    if (key == 'points') {
        $.each(val, function(k, v) {
            var obj = {};
            obj.name = k;
            obj.type = 'line';
            obj.smooth = true;
            obj.showSymbol = false;
            obj.symbol = 'circle';
            obj.symbolSize = 6,
                obj.lineStyle = {
                    normal: {
                        type: 'dotted'
                    }
                };
            obj.data = [];
            for (var i = 0; i < v.xAxis.length; i++) {
                var arr = [];
                arr.push(v.xAxis[i]);
                arr.push(v.yAxis[i]);
                xAxisArr.push(v.xAxis[i]);
                yAxisArr.push(v.yAxis[i]);
                obj.data.push(arr);
            }
            seriesData.push(obj);
        });
    } else if (key == 'alpha') {
        var obj = {};
        obj.symbol = 'circle';
        obj.symbolSize = 4;
        obj.data = [{
            'xAxis': val
        }];
        obj.lineStyle = {
            'normal': {
                width: 2,
                color: '#000'
            }
        };
        seriesData[0].markLine = obj;
    } else if (key == 'average') {
        var obj = {};
        obj.name = key;
        obj.type = 'line';
        obj.smooth = true;
        obj.showSymbol = false;
        obj.symbol = 'circle';
        obj.symbolSize = 6,
            obj.data = [];
        for (var i = 0; i < val.xAxis.length; i++) {
            var arr = [];
            arr.push(val.xAxis[i]);
            arr.push(val.yAxis[i]);
            obj.data.push(arr);
        }
        seriesData.push(obj);
    }
});

xAxisMax = Math.max.apply(null, xAxisArr);
xAxisMin = Math.min.apply(null, xAxisArr);
yAxisMax = Math.max.apply(null, yAxisArr);
yAxisMin = Math.min.apply(null, yAxisArr);

option = {
    title: {
        text: 'Lasso Path',
        left: '50%',
        textAlign: 'center',
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            lineStyle: {
                color: '#000'
            }
        },
        backgroundColor: 'rgba(255,255,255,1)',
        padding: [5, 10],
        textStyle: {
            color: '#7588E4',
        },
        extraCssText: 'box-shadow: 0 0 5px rgba(0,0,0,0.3)'
    },
    xAxis: {
        type: 'value',
        name: 'Log(alpha)',
        nameLocation: 'middle',
        nameGap: 30,
        boundaryGap: false,
        min: xAxisMin,
        max: xAxisMax,
        interval: 0.5,
        nameTextStyle: {
            color: '#000'
        },
        axisLabel: {
            textStyle: {
                color: '#000'
            }
        },
        splitLine: {
            show: true,
            interval: 'auto',
            lineStyle: {
                color: '#ddd'
            }
        },
        axisLine: {
            lineStyle: {
                color: '#ddd'
            }
        },
    },
    yAxis: {
        type: 'value',
        name: 'Mean square error',
        nameLocation: 'middle',
        nameGap: 50,
        nameRotate: 89.99999999,
        min: yAxisMin,
        max: yAxisMax,
        interval: 0.1,
        nameTextStyle: {
            color: '#000'
        },
        axisLabel: {
            textStyle: {
                color: '#000'
            },
        },
        splitLine: {
            show: true,
            interval: 'auto',
            lineStyle: {
                color: '#ddd'
            }
        },
        axisLine: {
            lineStyle: {
                color: '#ddd'
            }
        },
    },
    series: seriesData
};