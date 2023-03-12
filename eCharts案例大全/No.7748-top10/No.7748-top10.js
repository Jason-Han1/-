var index = 0;
var colorList = ['#f36c6c', '#e6cf4e', '#20d180', '#0093ff'];
var topName = ['医保社保查询', '小客车摇号', '市少年宫报名', '市民卡', '福利彩票', '美术考级报名', '我要办理', '驾照扣分查询', '舒心就医', '公积金']
var topValue = [366, 286, 182, 154, 153, 147, 132, 125, 123, 102]
option = {
    backgroundColor: 'rgba(0,0,0,.3)',
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
                    width: 16,
                    height: 16,
                    align: 'center',
                    borderRadius: 2
                },
                a2: {
                    color: '#fff',
                    backgroundColor: colorList[1],
                    width: 16,
                    height: 16,
                    align: 'center',
                    borderRadius: 2
                },
                a3: {
                    color: '#fff',
                    backgroundColor: colorList[2],
                    width: 16,
                    height: 16,
                    align: 'center',
                    borderRadius: 2
                },
                b: {
                    color: '#fff',
                    backgroundColor: colorList[3],
                    width: 16,
                    height: 16,
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
                itemStyle = {
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