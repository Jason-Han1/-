const payload = {
    id: 'left-top',
    title: ['年龄'],
    color: ['11, 149, 237'],
    unit: '单位：岁',
    max: 46,
    min: 44,
    data: {
        legend: ['年龄'],
        data1: [45.72, 45.39, 45.32, 44.48, 44.73, 44.68],
        x: ['2016', '2017', '2018', '2019', '2020', '2021'],
    },
};


const dataX = payload.data.x
const values1 = payload.data.data1 || []
const values2 = payload.data.data2 || []
const values3 = payload.data.data3 || []
const values4 = payload.data.data4 || []
const color = payload.color

const max = payload.max || parseInt(Math.max(...values1, ...values2, ...values3, ...values4) * 1.4, 10) + 2 || 10
const min = payload.min || 0

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
        backgroundColor: 'rgba(9, 30, 60, 0.6)',
        extraCssText: 'box-shadow: 0 0 8px rgba(0, 128, 255, 0.27) inset;',
        borderWidth: 0,
        confine: false,
        appendToBody: true,
        textStyle: {
            color: '#fff',
            fontSize: 10
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
        },
        trigger: 'axis'
    },
    legend: {
        show: false,
        width: window.innerWidth < 1600 ? '100%' : '60%',
        icon: 'circle',
        top: 7,
        itemWidth: 10,
        itemHeight: 3,
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
                color: 'rgba(204,187,225,0.5)'
            },
            fillerColor: 'rgba(67,55,160,0.4)',
            borderColor: 'rgba(204,187,225,0.5)'
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

const getLine = (name, color, data) => {
    return {
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
        data,
        markPoint: {
            symbol: 'image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyVpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDYuMC1jMDA1IDc5LjE2NDU5MCwgMjAyMC8xMi8wOS0xMTo1Nzo0NCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDIyLjEgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RDQwOTUwNzlDQkVEMTFFQjhDQTBCNzAyQUQ5OTlGRTUiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RDQwOTUwN0FDQkVEMTFFQjhDQTBCNzAyQUQ5OTlGRTUiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpENDA5NTA3N0NCRUQxMUVCOENBMEI3MDJBRDk5OUZFNSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpENDA5NTA3OENCRUQxMUVCOENBMEI3MDJBRDk5OUZFNSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Preto3AAAAAQSURBVHjaYvj//z8DQIABAAj8Av7bok0WAAAAAElFTkSuQmCC',
            symbolSize: 30,
            label: {
                position: 'top',
                color: '#fff',
                fontSize: 12
            },
            data: [
                {
                    type: 'max',
                    name: '最大值',
                    label: {
                        color: '#ff0000'
                    }
                },
                {
                    type: 'min',
                    name: '最小值',
                    label: {
                        color: '#208704'
                    }
                }
            ]
        }
    }
}

if (values1 && values1.length > 0) {
    option.series.push(getLine(payload.title[0], color[0], values1))
}
if (values2 && values2.length > 0) {
    option.series.push(getLine(payload.title[1], color[1], values2))
}
if (values3 && values3.length > 0) {
    option.series.push(getLine(payload.title[2], color[2], values3))
}
if (values4 && values4.length > 0) {
    option.series.push(getLine(payload.title[3], color[3], values4))
}