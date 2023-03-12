var index = 0;
var colorList = ['#f36c6c', '#e6cf4e', '#20d180', '#0093ff'];
var topName = ['物化生', '物化地', '历地政', '物生地', '物历地', '化生地', '物地政', '物化历', '生历地', '化生历']
var topValue = [30.1, 18.15, 10.37, 8.01, 5.91, 3.63, 3.24, 3.18, 2.18, 2.06]
option = {
    backgroundColor: '',
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    legend: {
        show: false
    },
    grid: {
        left: 100,
        top: 10,
        bottom: 0
    },
    xAxis: {
        type: 'value',
        splitLine: {
            show: false
        },
        axisLabel: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLine: {
            show: false
        }
    },
    yAxis: {
        type: 'category',
        inverse: true,
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisPointer: {
            label: {
                show: true,
                margin: 30
            }
        },
        data: topName,
        axisLabel: {
            margin: 100,
            fontSize: 12,
            align: 'left',
            color: '#fff',
            rich: {
                a1: {
                    color: '#fff',
                    backgroundColor: colorList[0],
                    width: 12,
                    height: 12,
                    align: 'center',
                    borderRadius: 2
                },
                a2: {
                    color: '#fff',
                    backgroundColor: colorList[1],
                    width: 12,
                    height: 12,
                    align: 'center',
                    borderRadius: 2
                },
                a3: {
                    color: '#fff',
                    backgroundColor: colorList[2],
                    width: 12,
                    height: 12,
                    align: 'center',
                    borderRadius: 2
                },
                b: {
                    color: '#fff',
                    backgroundColor: colorList[3],
                    width: 12,
                    height: 12,
                    align: 'center',
                    borderRadius: 2
                }
            },
            formatter: function(params) {
                if (index == 10) {
                    index = 0;
                }
                index++;
                if (index - 1 < 3) {
                    return [
                        '{a' + index + '|' + index + '}' + '  ' + params
                    ].join('\n')
                } else {
                    return [
                        '{b|' + index + '}' + '  ' + params
                    ].join('\n')
                }
            }
        }
    },
    series: [{
            z: 2,
            name: 'value',
            type: 'bar',
            data: topValue.map(function(item, i) {
                var itemStyle = {
                    color: i > 3 ? colorList[3] : colorList[i]
                }
                return {
                    value: item,
                    itemStyle: itemStyle
                };
            }),
            label: {
                show: true,
                position: 'right',
                color: '#fff',
                fontSize: 12,
                offset: [10, 0]
            }
        }
    ]
}