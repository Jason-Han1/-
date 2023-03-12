var res = {
    "title": ["[90 ~ 60]", "[60 ~ 70]", "[70 ~ 80]", "[80 ~ 90]", "[90 ~ 100]", "[100 ~ 110]", "[110 ~ 120]", "[120 ~ 130]", "[130 ~ 140]", "[140 ~ 150]"],
    "data": [140, 180, 150, 140, 190, 130, 180, 180, 150, 140],
    "rank": 3
};
option = {
    color: ['#00A0E9'],
    tooltip: {
        trigger: 'item',
        triggerOn: 'none',
        position: 'top',
        formatter: function(params) {
            if ((params.dataIndex + 1) == res.rank) {
                return params.marker + '这个位置排名';
            }
        }
    },
    textStyle: {
        fontSize: 14
    },
    xAxis: {
        type: 'category',
        data: res.title,
        axisLine: {
            lineStyle: {
                color: '#ddd'
            }
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            color: '#333'
        }
    },
    yAxis: {
        type: 'value',
        splitLine: {
            show: false
        },
        axisLine: {
            lineStyle: {
                color: '#ddd'
            }
        },
        axisTick: {
            inside: true,
            lineStyle: {
                color: '#333'
            }
        },
        axisLabel: {
            color: '#333'
        },
    },
    series: {
        type: 'bar',
        data: res.data,
        barMaxWidth: 40,
        itemStyle: {
            color: function(params) {
                if ((params.dataIndex + 1) == res.rank) {
                    return '#4587E7';
                } else {
                    return '#00A0E9';
                }
            }
        }
    }
};
setTimeout(function() {
    // 显示 tooltip
    myChart.dispatchAction({
        type: 'showTip',
        seriesIndex: 0,
        dataIndex: res.rank - 1
    });
}, 1000);