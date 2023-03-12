var xAxisData = [],
    data1 = [],
    data2 = [];
for (var i = 1; i < 24; i++) {
    xAxisData.push(i);
    data1.push(Math.round(Math.random() * 100));
    data2.push(-Math.round(Math.random() * 100));
}
option = {
    backgroundColor: '#12161A',
    title: {
        textStyle: {
            fontWeight: 'normal',
            color: '#ececef'
        },
        left: 'center'
    },
    tooltip: {
        trigger: 'axis',
        formatter: function(params) {
            let tooltip = `${ params[0].seriesName }：${ Math.abs(params[0].value) }`;
            if (params[1]) {
                tooltip += `<br/>${ params[1].seriesName }：${ Math.abs(params[1].value) }<br/>预测合计：${ Math.abs(params[0].value) + Math.abs(params[1].value) }`;
            }
            return tooltip;
        }
    },
    legend: {
        show: true,
        top: 0,
        right: 16,
        data: ['A预测', 'B预测'],
        textStyle: {
            color: 'rgba(255,255,255,0.87)'
        }
    },
    grid: {
        show: true,
        top: 16,
        right: 16,
        left: 16,
        bottom: 16,
        containLabel: true,
        borderWidth: 0
    },
    xAxis: {
        type: 'category',
        axisLabel: {
            textStyle: {
                color: 'rgba(255,255,255,0.87)',
                fontSize: 13
            }
        },
        splitLine: {
            show: false
        },
        axisLine: {
            lineStyle: {
                color: '#565E72'
            }
        },
        data: xAxisData
    },
    yAxis: {
        type: 'value',
        axisLabel: {
            textStyle: {
                color: 'rgba(255,255,255,0.87)',
                fontSize: 13
            },
            formatter: function(value) {
                return Math.abs(value);
            }
        },
        splitLine: {
            show: false,
        },
        axisLine: {
            lineStyle: {
                color: '#565E72'
            }
        },
        axisTick: {
            show: false
        },
        splitArea: {
            show: false
        }
    },
    series: [{
            type: 'line',
            name: 'A预测',
            data: data1,
            itemStyle: {
                normal: {
                    color: '#D99E00',
                }
            },
            label: {
                normal: {
                    show: false
                }
            }
        },
        {
            type: 'line',
            name: 'B预测',
            data: data2,
            itemStyle: {
                normal: {
                    color: '#429DED',
                }
            },
            label: {
                normal: {
                    show: false
                }
            }
        }
    ]
};