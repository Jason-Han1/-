option = {
    backgroundColor: 'rgb(43, 51, 59) ',
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        icon: 'rect',
        itemWidth: 14,
        itemHeight: 5,
        itemGap: 13,
        data: [ "10KV城网",
           "10KV配网",       
           "0.4KV城网",
           "0.4KV配网",
           "业扩",],
        right: '4%',
        textStyle: {
            fontSize: 12,
            color: '#F1F1F3'
        }
    },
    xAxis: [{
        boundaryGap: false,
        axisLine: {
            lineStyle: {
                color: '#fff'
            }
        },
        data: ['2019.01', '2019.02', '2019.03',
        '2019.05', '2019.06', '2019.07', ]
    }],
    yAxis: [{
        type: 'value',
        name: '项',
        axisLine: {
            lineStyle: {
                color: '#fff'
            }
        },
        axisLabel: {
            margin: 10,
            textStyle: {
                fontSize: 14
            }
        },
        splitLine: {
            lineStyle: {
                color: '#57617B'
            }
        }
    }],
    series: [{
        name: '10KV城网',
        type: 'line',
        // smooth: true,
        symbol: 'circle',
        symbolSize: 5,
        // showSymbol: false,
        lineStyle: {
            normal: {
                width: 2
            }
        },
        itemStyle: {
            normal: {
                color: 'rgb(137,189,27)',
                borderColor: 'rgba(137,189,2,0.27)',
                borderWidth: 10

            }
        },
        data: [14,19,19,14,6,13,4]
    }, {
        name: "10KV配网",
        type: 'line',
        // smooth: true,
        symbol: 'circle',
        symbolSize: 5,
        // showSymbol: false,
        lineStyle: {
            normal: {
                width: 2
            }
        },
        itemStyle: {
            normal: {
                color: 'rgb(0,136,212)',
                borderColor: 'rgba(0,136,212,0.2)',
                borderWidth: 10

            }
        },
        data: [9,25,13,18,2,3,10]
    }, {
        name: '0.4KV城网',
        type: 'line',
        // smooth: true,
        symbol: 'circle',
        symbolSize: 5,
        // showSymbol: false,
        lineStyle: {
            normal: {
                width: 2
            }
        },
        itemStyle: {
            normal: {

                color: 'rgb(219,50,51)',
                borderColor: 'rgba(219,50,51,0.2)',
                borderWidth: 10
            }
        },
        data: [3,19,7,14,29,4,19]
    },{
            name: '0.4KV配网',
        type: 'line',
        // smooth: true,
        symbol: 'circle',
        symbolSize: 5,
        // showSymbol: false,
        lineStyle: {
            normal: {
                width: 2
            }
        },
        itemStyle: {
            normal: {
                color: 'rgb(0,136,212)',
                borderColor: 'rgba(0,136,212,0.2)',
                borderWidth: 10

            }
        },
        data: [11,9,7,7,4,17,9]
    },
    {
            name: '业扩',
        type: 'line',
        // smooth: true,
        symbol: 'circle',
        symbolSize: 5,
        // showSymbol: false,
        lineStyle: {
            normal: {
                width: 2
            }
        },
        itemStyle: {
            normal: {
                color: 'rgb(0,136,212)',
                borderColor: 'rgba(0,136,212,0.2)',
                borderWidth: 10

            }
        },
        data: [9,11,18,4,9,22,26]
    },]
};

var currentIndex = -1;
setInterval(function() {
    var dataLen = option.series[0].data.length;

    // 取消之前高亮的图形
    myChart.dispatchAction({
        type: 'downplay',
        seriesIndex: 0,
        dataIndex: currentIndex
    });
    currentIndex = (currentIndex + 1) % dataLen;
    // 高亮当前图形
    myChart.dispatchAction({
        type: 'highlight',
        seriesIndex: 0,
        dataIndex: currentIndex,
    });
    // 显示 tooltip
    myChart.dispatchAction({
        type: 'showTip',
        seriesIndex: 0,
        dataIndex: currentIndex
    });
}, 1000);