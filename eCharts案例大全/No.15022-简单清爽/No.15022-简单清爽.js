// Generate data
var category = [];
var dottedBase = +new Date();
var lineData = [];
var barData = [];

for (var i = 0; i < 20; i++) {
    var date = new Date(dottedBase += 1000 * 3600 * 24);
    category.push([
        date.getFullYear(),
        date.getMonth() + 1,
        date.getDate()
    ].join('-'));
    var b = Math.random() * 200;
    var d = Math.random() * 200;
    barData.push(b)
    lineData.push(d + b);
}


// option
option = {
    backgroundColor: '#41cac0',
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'line',
            lineStyle: { // 直线指示器样式设置
                color: '#FFF',
                width: 1,
                type: 'solid'
            },
            label: {
                show: true,
                backgroundColor: '#333'
            }
        }
    },
    legend: {
        data: ['line', 'bar'],
        textStyle: {
            width: 30,
            color: '#FFF'
        }
    },
    xAxis: {
        data: category,
        axisLine: {
            lineStyle: {
                color: '#FFF',
                width: 1
            }
        }
    },
    yAxis: {
        splitLine: {
            show: false
        },
        axisLine: {
            lineStyle: {
                color: '#FFF',
                width: 1
            }
        }
    },
    series: [{
        name: 'line',
        type: 'line',
        smooth: true,
        showAllSymbol: true,
        symbol: 'emptyCircle',
        symbolSize: 7,
        itemStyle: {
            normal: {
                color: '#FFF',
                lineStyle: { // 系列级个性化折线样式
                    width: 1,
                }
            },
            emphasis: {
                color: '#55ff55'
            }
        },
        data: lineData
    }]
};