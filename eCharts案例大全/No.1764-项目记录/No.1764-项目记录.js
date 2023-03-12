var xAxisData =  ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
var barData = [20, 30, 50, -10, -20, 5, 25, 30, 35, -15, 40, -15];
// 柱子处理
var zt = [];
var label = [];
for (var i = 0; i < barData.length; i++) {
    var obj = [];
    if (i === 0) {
        var x = parseFloat(barData[i]);
        if (x < 0) {
            label.push({
                value: barData[i],
                coord: [i, x],
                label: { position: 'bottom', show: true, fontSize: 10, color: 'green' },
            });
        } else {
            label.push({ value: barData[i], coord: [i, x] });
        }
        obj.push(0);
        obj.push(barData[i]);
        obj.push(barData[i]);
        obj.push(barData[i]);
        zt.push(obj);
    } else {
        var start = zt[i - 1][1];
        var val = parseFloat(barData[i]);
        var end = start + val;
        if (barData[i] < 0) {
            label.push({
                value: barData[i],
                coord: [i, end],
                label: { position: 'bottom', show: true, fontSize: 10, color: '#E3E3E5' },
            });
        } else {
            label.push({ value: barData[i], coord: [i, end] });
        }

        obj.push(start);
        obj.push(end);
        obj.push(end);
        obj.push(end);
        zt.push(obj);
    }
}

var seriesData = [
    {
        type: 'candlestick',
        //开始值、结束值、最大值、最小值
        //[[1,2,3,4]
        data: zt,
        itemStyle: {
            color: '#4BCD6C',
            color0: '#F54D4D',
            borderWidth: 0,
        },
        markPoint: {
            symbol: 'rect',
            //图形上面的小头隐藏
            symbolSize: 0.000000000000001,
            label: {
                show: true,
                color: '#E3E3E5',
                position: 'top',
                fontSize: 10,
                formatter: function (res) {
                    return res.data.value;
                },
            },
            data: label,
        },
        emphasis: {
            itemStyle: {
                borderWidth: 0,
            },
        },
    },
];
// 折线处理
var lineData = [20, 50, 100, 90, 70, 75, 100, 130, 165, 150, 190, 175];
let btn = true; //默认首次第一个和第二个比较是升就是false?否则是true
let lineNewArr = [];
let startIndex = 0;
for (var i = 0; i < lineData.length; i++) {
    let next = lineData[i + 1];
    if (i == lineData.length - 1) {
        var flagArr = lineData.slice(startIndex);
        if (startIndex > 0) {
            for (var j = 0; j < startIndex; j++) {
                flagArr.unshift('');
            }
        }
        if (flagArr.length > 0) {
            lineNewArr.push({
                nullData: startIndex,
                data: flagArr,
                status: btn,
            });
        }
    }
    if (next) {
        if (btn == false) {
            if (next < lineData[i]) {
                if (lineNewArr.length == 0) {
                    startIndex = 0;
                }
                var flagArr = lineData.slice(startIndex, i + 1);
                if (startIndex > 0) {
                    for (var j = 0; j < startIndex; j++) {
                        flagArr.unshift('');
                    }
                }
                lineNewArr.push({
                    nullData: startIndex,
                    data: flagArr,
                    status: btn,
                });
                btn = true;
                startIndex = i;
            }
        } else {
            if (next > lineData[i]) {
                var flagArr = lineData.slice(startIndex, i + 1);
                if (startIndex > 0) {
                    for (var j = 0; j < startIndex; j++) {
                        flagArr.unshift('');
                    }
                }
                lineNewArr.push({
                    nullData: startIndex,
                    data: flagArr,
                    status: btn,
                });
                startIndex = i;
                btn = false;
            }
        }
    }
}
lineNewArr.forEach(function (item, i) {
    if (lineNewArr[i].status == false) {
        seriesData.push({
            data: lineNewArr[i].data,
            type: 'line',
            lineStyle: {
                normal: {
                    width: 1,
                    color: '#33AEEE',
                },
            },
        });
    } else {
        seriesData.push({
            data: lineNewArr[i].data,
            type: 'line',
            lineStyle: {
                normal: {
                    width: 1,
                    color: '#F54D4D',
                },
            },
        });
    }
});

option = {
    backgroundColor: '#010e28',
    xAxis: {
        axisTick: {
            show: false, // 隐藏x轴的分割点
        },
        axisLabel: {
            textStyle: {
                fontSize: 12,
                color: '#E3E3E5',
                fontFamily: 'PingFang',
            },
            formatter: function (params) {
                let valueTxt = '';
                if (params.length > 3) {
                    valueTxt = params.substring(0, 3) + '\n' + params.substring(3, params.length);
                } else {
                    valueTxt = params;
                }
                return valueTxt;
            },
        },
        axisLine: {
            show: false,
        },
        splitLine: {
            show: false,
        },
        data:xAxisData,
    },
    yAxis: {
        type: 'value',
        scale: true,
        axisTick: {
            show: false, // 隐藏x轴的分割点
        },
        axisLabel: {
            textStyle: {
                fontSize: 12,
                color: '#E3E3E5',
                fontFamily: 'PingFang',
            },
            formatter: function (params) {
                let valueTxt = '';
                if (params.length > 3) {
                    valueTxt = params.substring(0, 3) + '\n' + params.substring(3, params.length);
                } else {
                    valueTxt = params;
                }
                return valueTxt;
            },
        },
        axisLine: {
            show: false,
            lineStyle: {
                color: '#CCCCCC',
                type: 'dashed',
            },
        },
        splitLine: {
            show: true,
            lineStyle: {
                color: '#CCCCCC',
                type: 'dashed',
            },
        },
    },
    series: seriesData,
};
