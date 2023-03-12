let xData = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
let yDataLine = [220, 182, 191, 234, 290, 330, 310]
let yDataBar = [2200, 1802, 1091, 2304, 2090, 3030, 3100]
let yDataBar2 = [2200, 1802, 1091, 2304, 2090, 3030, 310]
let seriesName = ['a', 'b', 'c']

let activeItem = xData[xData.length - 1] //默认触发的列

let showMinorYAxis = false //是否显示右侧y轴
let showXAxisData = false //是否在x轴显示数据
let interactive = true //是否可点击
let showLegend = true //是否显示图例

let series = [{
    name: seriesName[0],
    yAxisIndex: 0,
    type: 'line',
    lineStyle: {
        color: '#bf3232'
    },
    animation: false,
    data: yDataLine
}, {
    name: seriesName[1],
    yAxisIndex: 1,
    type: 'bar',
    data: yDataBar,
    lineStyle: {
        color: '#bf3232'
    },
    barWidth: 6,
    itemStyle: {
        color: function(params) {
            if (params.value >= 0 || yDataBar2.length > 0) {
                if (interactive && params.name !== activeItem) {
                    return 'rgba(199, 169, 117, 0.6)'
                } else {
                    return '#C7A975'
                }
            } else {
                if (interactive && params.name !== activeItem) {
                    return 'rgba(56, 56, 56, 0.6)'
                } else {
                    return '#5B6376'
                }
            }
        },
        barBorderRadius: 3
    }
}]

if (yDataBar2.length > 0) {
    series.push({
        name: seriesName[2],
        yAxisIndex: 1,
        type: 'bar',
        data: yDataBar2,
        barGap: '66%',
        barWidth: 6,
        itemStyle: {
            color: function(params) {
                if (interactive && params.name !== activeItem) {
                    return 'rgba(56, 56, 56, 0.6)'
                } else {
                    return '#5B6376'
                }
            },
            opacity: 1,
            barBorderRadius: 3
        }

    })
}

option = {
    grid: {
        left: 0,
        right: 0
    },
    legend: {
        show: showLegend,
        selectedMode: false,
        top:0,
        left: 0,
        data: [{
            name: seriesName[1],
            icon: 'square'
        },{
            name: seriesName[2],
            icon: 'square'
        },{
            name: seriesName[0],
            icon: 'circle'
        }]
    },
    xAxis: {
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            formatter: function(value, index) {
                if (!showXAxisData) {
                    if (interactive && value !== activeItem) {
                        return '{normal|' + value + '}'
                    } else {
                        return '{active|' + value + '}'
                    }
                } else {
                    return [
                        '{val|' + yDataBar[index] + (yDataBar2[index] ? '/' + yDataBar2[index] : '') + '}\n',
                        '{name|' + value + '}'
                    ].join('\n')
                }
            },
            rich: {
                normal: {
                    fontSize: 10,
                    color: 'rgba(56, 56, 56, 0.6)'
                },
                active: {
                    fontSize: 10,
                    color: '#383838'
                },
                val: {
                    fontSize: 14,
                    color: '#565656'
                },
                name: {
                    fontSize: 12,
                    color: '#929292'
                }
            }
        },
        data: xData,
        axisPointer: {
            show: interactive,
            handle: {
                show: true,
                size: 0
            },
            type: 'shadow',
            triggerTooltip: false,
            label: {
                show: false
            },
            shadowStyle: {
                color: {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [{
                        offset: 0,
                        color: 'rgba(199,169,117,0)' // 0% 处的颜色
                    }, {
                        offset: 1,
                        color: 'rgba(199,169,117,0.20)' // 100% 处的颜色
                    }],
                    global: true // 缺省为 false
                }
            }
        },
    },
    yAxis: [{
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            fontSize: 10,
            color: '#929292',
            height: 38,
            padding: [20, 0, 0],
            inside: true
        },
        splitLine: {
            lineStyle: {
                color: '#eee'
            },
        },
    }, {
        show: showMinorYAxis,
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            fontSize: 10,
            color: '#929292',
            height: 38,
            padding: [20, 0, 0],
            inside: true
        }
    }],
    axisPointer: {
        triggerOn: 'click',
    },
    series: series
};

if (interactive) {
    //注册事件前先销毁点击事件（避免点击事件会重复执行）
    myChart.getZr().off('click');
    myChart.getZr().on('click', function(param) {
        var pointInPixel = [param.offsetX, param.offsetY];
        if (myChart.containPixel('grid', pointInPixel)) {
            //获取当前点击的索引值
            //注意：若柱状图为纵向则获取x轴的索引，若柱状图为横向则需获取y轴的索引(见下方注释)
            let xIndex = myChart.convertFromPixel({
                seriesIndex: 0
            }, [param.offsetX, param.offsetY])[0];
            let xName = option.xAxis.data[xIndex]; //当前点击柱子的数据
            activeItem = xName
            myChart.setOption(option)
        }
    })
}