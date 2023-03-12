// Generate data
var category = [];
var dottedBase = +new Date();
var lineData = [];
var barData = [];
var lineData1 = [];
var barData1 = [];
for (var i = 0; i < 12; i++) {
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
      barData1.push(b+50)
    lineData1.push(d + b+50);
}

// option
option = {
    backgroundColor: '#0f375f',
    color:['#14c8d4','#fccb05'],
    legend: {
        data: ['收入', '收入预算','毛利','毛利预算'],
        textStyle: {
            color: '#ccc'
        }
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
            crossStyle: {
                color: '#999'
            }
        }
    },
    xAxis: [{
        type: 'category',
        data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
        axisPointer: {
            type: 'shadow'
        }, 
        axisLine: {
            lineStyle: {
                color: '#ccc'
            }
        }
    }],
    yAxis: {
        splitLine: {show: false},
        axisLine: {
            lineStyle: {
                color: '#ccc'
            }
        }
    },
    series: [
        {
            name: '收入',
            type: 'bar',
            barWidth: '20%',
            data: barData,
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
            z: 1
        },
        {
            name: '毛利',
            type: 'bar',
            barWidth: '20%',
            data: barData1,
            itemStyle: {
                normal: {
                    barBorderRadius: 5,
                    color: new echarts.graphic.LinearGradient(
                        0, 0, 0, 1,
                        [
                            {offset: 0, color: '#fccb05'},
                            {offset: 1, color: '#f5804d'}
                        ]
                    )
                }
            },
            z: 1
        },
        {
            xAxisIndex: 1,
            name: '收入预算',
            type: 'line',
            smooth: true,
            showAllSymbol: true,
            symbol: 'emptyCircle',
            symbolSize: 15,
           lineStyle: {
      color: "#14c8d4"
    },
            data: lineData,
        },
        {
            xAxisIndex: 1,
            name: '毛利预算',
            type: 'line',
            smooth: true,
            showAllSymbol: true,
            symbol: 'emptyCircle',
            symbolSize: 15,
            lineStyle: {
              color: "#fccb05"
            },
            data: lineData1,
        },
        {
        name: '收入预算',
        type: 'bar',
        xAxisIndex: 1,
        barWidth: '20%',
        z: -12,
        itemStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(
                    0, 0, 0, 1,
                    [
                        {offset: 0, color: 'rgb(67 238 198 / 50%)'},
                        {offset: 0.2, color: 'rgb(67 238 198 / 20%)'},
                        {offset: 1, color: 'rgb(67 238 198 / 0%)'}
                    ]
                )
            }
        },
        data: lineData
    },
        {
        name: '毛利预算',
        type: 'bar',
        xAxisIndex: 1,
        barWidth: '20%',
        z: -12,
        itemStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(
                    0, 0, 0, 1,
                    [
                        {offset: 0, color: 'rgb(252 203 5 / 50%)'},
                        {offset: 0.2, color: 'rgb(252 203 5 / 20%)'},
                        {offset: 1, color: 'rgb(252 203 5 / 0%)'}
                    ]
                )
            }
        },
        data: lineData1
    }, 
        {
        name: '收入预算',
        type: 'pictorialBar',
        xAxisIndex: 1,
        symbol: 'rect',
        itemStyle: {
            normal: {
                color: '#0f375f'
            }
        },
        symbolRepeat: true,
        symbolSize: ['100%', 4],
        symbolMargin: 1,
        z: -10,
        data: lineData
    },
        {
            name: '毛利预算',
            type: 'pictorialBar',
            xAxisIndex: 1,
            symbol: 'rect',
            itemStyle: {
                normal: {
                    color: '#0f375f'
                }
            },
            symbolRepeat: true,
            symbolSize: ['100%', 4],
            symbolMargin: 1,
            z: -10,
            data: lineData1
        }
    ]
};
 
// 增加了一个隐藏的x轴，用来控制线图的点的位置
option.xAxis[1] = {
    type: 'value',
        splitLine: {show: false},
    max: option.xAxis[0].data.length * 100
}
option.series[2].data = option.series[2].data.map((x, i) => [37.5 + i * 100, x])
option.series[3].data = option.series[3].data.map((x, i) => [62.5 + i * 100, x])
option.series[4].data = option.series[4].data.map((x, i) => [50 + i * 100, x])
option.series[5].data = option.series[5].data.map((x, i) => [50 + i * 100, x])
option.series[6].data = option.series[6].data.map((x, i) => [37.5  + i * 100, x])
option.series[7].data = option.series[7].data.map((x, i) => [62.5 + i * 100, x])
console.log(option)