const payload = {
    id: 'total-workers',
    title: ['长期', '供服', '产业'],
    lineTitle: ['全口径'],
    color: ['47, 125, 242', '246, 48, 72', '249, 202, 60'],
    lineColor: ['169, 219, 50'],
    unit: '单位：人',
    data: {
        legend: ['长期', '供服', '产业'],
        legend2: ['全口径'],
        data1: ['4036', '3941', '3899', '3859', '3813', '3777'],
        data2: ['3095', '3034', '2987', '2948', '2930', '2897'],
        data3: ['1914', '1913', '1929', '1915', '1779', '1397'],
        data4: [],
        x: ['2016', '2017', '2018', '2019', '2020', '2021'],
        line1: [9044, 8883, 8813, 8721, 8521, 8073],
    },
};

const dataX = payload.data.x
const values1 = payload.data.data1 || []
const values2 = payload.data.data2 || []
const values3 = payload.data.data3 || []
const values4 = payload.data.data4 || []
const line1 = payload.data.line1 || []

const max = payload.max || Math.max(...values1, ...values2, ...values3, ...values4) + 10
const min = payload.min || Math.min(...values1, ...values2, ...values3, ...values4) - 10
const max2 = payload.lineMax || parseInt(Math.max(...line1), 10) + 10
const min2 = payload.lineMin || parseInt(Math.min(...line1), 10) - 10

// max = max > 100 ? 100 : max

// myChart.clear()
option = {
    title: {
        textStyle: {
            align: 'center',
            color: '#fff',
            fontSize: 20
        },
        top: '5%',
        left: 'center'
    },
    tooltip: {
        trigger: 'axis',
        backgroundColor: 'rgba(9, 30, 60, 0.6)',
        extraCssText: 'box-shadow: 0 0 8px rgba(0, 128, 255, 0.27) inset;',
        borderWidth: 0,
        confine: false,
        appendToBody: true,
        textStyle: {
            color: '#fff',
            fontSize: 10
        },
        // 轴触发提示才有效
        axisPointer: {
            type: 'shadow'
        },
        shadowStyle: {
            color: 'rgba(157, 168, 245, 0.1)'
        },
        formatter(data) {
            var tmp = ['<h5 class="echarts-tip-h5">' + data[0].name + '</h5>']
            data.forEach(item => {
                let html = ''
                html += '<div class="echarts-tip-div">'
                html += '<div class="left">' + item.marker + ' ' + item.seriesName + '：</div>'
                html += '<div class="right">' + item.data + '</div>'
                html += '</div>'
                tmp.push(html)
            })
            return tmp.join('')
        }
    },
    legend: {
        width: window.innerWidth < 1600 ? '100%' : '60%',
        icon: 'circle',
        top: 7,
        itemWidth: 12,
        itemHeight: 6,
        textStyle: {
            color: '#2CD3FD',
            fontSize: 12
        },
        align: 'left'
    },
    grid: {
        left: 15,
        right: 15,
        bottom: 2,
        top: 45,
        // 是否包含文本
        containLabel: true
    },
    xAxis: [
        {
            type: 'category',
            axisLine: {
                show: true
            },
            splitArea: {
                color: '#f00',
                lineStyle: {
                    color: '#f00'
                }
            },
            axisLabel: {
                color: '#96CBFA'
            },
            splitLine: {
                show: true,
                lineStyle: {
                    color: '#A0C5F7',
                    opacity: '0.1'
                }
            },
            boundaryGap: false,
            data: dataX
        }
    ],
    yAxis: [
        {
            type: 'value',
            name: payload.unit,
            min,
            max,
            axisLabel: {
                formatter: '{value}',
                color: '#4176A3'
            },
            // formatter: '{value} %',
            nameTextStyle: {
                align: 'left',
                color: '#3E719D',
                fontSize: 11,
                lineHeight: 11,
                verticalAlign: 'middle',
                padding: [0, 0, 10, 0]
            },
            // 分割线
            splitLine: {
                //坐标轴在 grid 区域中的分隔线。
                show: true,
                lineStyle: {
                    color: '#A0C5F7',
                    opacity: 0.1
                }
            },
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            }
        },
        {
            type: 'value',
            name: payload.unit,
            min: min2,
            max: max2,
            axisLabel: {
                formatter: '{value}',
                color: '#4176A3'
            },
            // formatter: '{value} %',
            nameTextStyle: {
                align: 'right',
                color: '#3E719D',
                fontSize: 11,
                lineHeight: 11,
                verticalAlign: 'middle',
                padding: [0, 0, 10, 0]
            },
            // 分割线
            splitLine: {
                //坐标轴在 grid 区域中的分隔线。
                show: true,
                lineStyle: {
                    color: '#A0C5F7',
                    opacity: 0.1
                }
            },
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            }
        }
    ],
    dataZoom: [
        {
            show: false,
            height: 30,
            xAxisIndex: [0],
            bottom: 30,
            start: 0,
            end: 100,
            // handleIcon: 'path://M306.1,413c0,2.2-1.8,4-4,4h-59.8c-2.2,0-4-1.8-4-4V200.8c0-2.2,1.8-4,4-4h59.8c2.2,0,4,1.8,4,4V413z',
            handleSize: '110%',
            handleStyle: {
                color: '#5B3AAE'
            },
            textStyle: {
                color: 'rgba(204, 187, 225, 0.5)'
            },
            fillerColor: 'rgba(67, 55, 160, 0.4)',
            borderColor: 'rgba(204, 187, 225, 0.5)'
        },
        {
            type: 'inside',
            show: true,
            height: 15,
            start: 1,
            end: 35
        }
    ],
    series: []
}

const getService = (name, color, data, index) => {
    return {
        yAxisIndex: index,
        name,
        type: 'line',
        smooth: true, //是否平滑
        showAllSymbol: true,
        // symbol: 'image://./static/images/guang-circle.png',
        symbol: 'circle',
        symbolSize: 2,
        // 线颜色
        lineStyle: {
            width: 1,
            color: 'rgba(' + color + ', 1)',
            shadowColor: 'rgba(0, 0, 0, .3)',
            shadowBlur: 0,
            shadowOffsetY: 5,
            shadowOffsetX: 5
        },
        label: {
            show: false,
            position: 'top',
            color: 'rgba(' + color + ', 1)'
        },
        // 点颜色
        itemStyle: {
            color: 'rgba(' + color + ', 1)',
            borderColor: '#fff',
            borderWidth: 3,
            shadowColor: 'rgba(0, 0, 0, .3)',
            shadowBlur: 0,
            shadowOffsetY: 2,
            shadowOffsetX: 2
        },
        // 区域颜色 rgba(' + color + ', 1)
        areaStyle: {
            color: new echarts.graphic.LinearGradient(
                0,
                0,
                0,
                1,
                [
                    {
                        offset: 0,
                        color: 'rgba(' + color + ', 0.1)'
                    },
                    {
                        offset: 1,
                        color: 'rgba(' + color + ', 0)'
                    }
                ],
                false
            ),
            shadowColor: 'rgba(' + color + ', 0.9)',
            shadowBlur: 20
        },
        data
    }
}

if (values1 && values1.length > 0) {
    option.series.push(getService(payload.title[0], payload.color[0], values1, 0))
}
if (values2 && values2.length > 0) {
    option.series.push(getService(payload.title[1], payload.color[1], values2, 0))
}
if (values3 && values3.length > 0) {
    option.series.push(getService(payload.title[2], payload.color[2], values3, 0))
}
if (values4 && values4.length > 0) {
    option.series.push(getService(payload.title[3], payload.color[3], values4, 0))
}
if (line1 && line1.length > 0) {
    option.series.push(getService(payload.lineTitle[0], payload.lineColor[0], line1, 1))
}