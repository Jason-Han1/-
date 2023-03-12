// Generate data
var category = ['星期一','星期二','星期三','星期四','星期五','星期六'];
var dottedBase = +new Date();
var lineData = [320,230,430,300,200,350];
var barData = [250,320,220,250,280,300];

// option
option = {
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow',
            label: {
                show: true,
                backgroundColor: '#333'
            }
        }
    },
    legend: {
        data: ['准时化率', '顺序化率'],
        textStyle: {
            color: '#ccc'
        }
    },
    xAxis: {
        data: category,
        axisLine: {
            lineStyle: {
                color: '#ccc'
            }
        }
    },
    yAxis: {
        splitLine: {show: false},
        axisLine: {
            lineStyle: {
                color: '#ccc'
            }
        }
    },
    series: [{
        name: '准时化率',
        type: 'line',
        smooth: true,
        showAllSymbol: true,
        symbol: 'emptyCircle',
        symbolSize: 10,
        data: lineData
    }, {
        name: '顺序化率',
        type: 'pictorialBar',
        showAllSymbol: true,
        symbol: 'emptyCircle',
        symbol: 'rect',
        itemStyle: {
            normal: {
                color: '#5BFCF4'
            }
        },
        symbolRepeat: true,
        symbolSize: [22, 4],
        symbolMargin: 1,
        z: -7,
        data: barData
    }, {
        name: '顺序化率',
        type: 'pictorialBar',
        showAllSymbol: false,
        symbol: 'rect',
        itemStyle: {
            normal: {
                color: '#ccc'
            }
        },
        symbolRepeat: true,
        symbolSize: [22, 4],
        symbolMargin: 1,
        z: -10,
        data: [500,500,500,500,500,500]
    }]
};