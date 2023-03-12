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
    backgroundColor: '#043065',
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
        data: ['字段数', '应采集量','实际采集量'],
        textStyle: {
            color: '#ccc'
        }
    },
    xAxis: {
        data: ['南京市', '淮安市','常州市', '徐州市', '南通市', '宿迁市', '无锡市', '扬州市', '盐城市', '苏州市', '泰州市', '镇江市', '连云港市'],
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
        name: '字段数',
        type: 'line',
        smooth: true,
        showAllSymbol: true,
        symbol: 'emptyCircle',
        symbolSize: 15,
        data: lineData
    }, {
        name: '实际采集量',
        type: 'bar',
        barWidth: 10,
        itemStyle: {
            normal: {
                barBorderRadius: 5,
                color: new echarts.graphic.LinearGradient(
                    0, 0, 0, 1,
                    [
                        {offset: 0, color: '#14c8d4'},
                        {offset: 1, color: '#43eec6'}
                    ]
                )
            }
        },
        data: barData
    }, {
        name: '应采集量',
        type: 'bar',
        barGap: '-100%',
        barWidth: 10,
        itemStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(
                    0, 0, 0, 1,
                    [
                        {offset: 0, color: 'rgba(20,200,212,0.5)'},
                        {offset: 0.2, color: 'rgba(20,200,212,0.2)'},
                        {offset: 1, color: 'rgba(20,200,212,0)'}
                    ]
                )
            }
        },
        z: -12,
        data: lineData
    }, {
        name: 'dotted',
        type: 'pictorialBar',
        symbol: 'rect',
        itemStyle: {
            normal: {
                color: '#0f375f'
            }
        },
        symbolRepeat: true,
        symbolSize: [12, 4],
        symbolMargin: 1,
        z: -10,
        data: lineData
    }]
};