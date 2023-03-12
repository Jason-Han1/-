const payload = {
    id: 'echarts-0-1',
    wordNum: 3,
    data: {
        title1: '总数',
        title2: '总数',
        label1: '总数',
        label2: '总数',
        tooltip: true,
        total1: 492,
        scaleData1: [{
            name: '123',
            value: 123
        }, {
            name: '1234',
            value: 123
        }, {
            name: '12345',
            value: 123
        }, {
            name: '123456',
            value: 123
        }],
        total2: 492,
        scaleData2: [{
            name: '123',
            value: 123
        }, {
            name: '1234',
            value: 123
        }, {
            name: '12345',
            value: 123
        }, {
            name: '123456',
            value: 123
        }]
    }
}

const getRadius = radius1 => {
    let radius2 = radius1 - 5
    let radius3 = radius2 - 20

    if (window.innerWidth < 1600) {
        radius1 *= 0.8
        radius2 *= 0.8
        radius3 *= 0.8
    }
    return {
        radius1,
        radius2,
        radius3
    }
}

const getData = (scaleData, total) => {
    const color1 = ['#FFF43D', '#FF863D', '#594BDF', '#FF6363', '#0080FF', '#31CC72', '#3DCFFF']
    const data = []
    for (let i = 0; i < scaleData.length; i++) {
        data.push(
            {
                value: scaleData[i].value,
                name: scaleData[i].name,
                itemStyle: {
                    color: color1[i]
                },
                label: {
                    color: color1[i]
                }
            },
            {
                value: total / 100,
                name: '',
                tooltip: {
                    show: false
                },
                itemStyle: {
                    label: {
                        show: false
                    },
                    labelLine: {
                        show: false
                    },
                    color: 'rgba(0, 0, 0, 0)',
                    borderColor: 'rgba(0, 0, 0, 0)',
                    borderWidth: 0
                }
            }
        )
    }
    return data
}

const getPie = config => {
    const { title, centerData, radius, data, label, showLable, total, totalFontSize = 14 } = config
    const { radius1, radius2, radius3 } = radius
    return [
        {
            name: title,
            type: 'pie',
            clockwise: false,
            center: centerData,
            avoidLabelOverlap: true,
            radius: [radius3 + '%', radius2 + '%'],
            emphasis: {
                scale: false
            },
            labelLine: {
                length2: 5
            },
            label: {
                show: showLable,
                position: 'outer',
                alignTo: 'none',
                bleedMargin: -20,
                distanceToLabelLine: 5,
                formatter(e) {
                    if (e.name) {
                        return `{c|${e.name} ${e.value}}`
                    }
                },
                padding: -5,
                rich: {
                    a: {
                        padding: [0, 0, 3, 0],
                        fontSize: 14,
                        color: '#fff',
                        lineHeight: 16
                    },
                    c: {
                        lineHeight: 18
                    }
                }
            },
            data
        },
        {
            name: title,
            type: 'pie',
            clockwise: false,
            center: centerData,
            radius: [radius2 + '%', radius1 + '%'],
            emphasis: {
                scale: false
            },
            tooltip: {
                show: false
            },
            label: {
                show: true,
                position: 'center',
                formatter: total ? '{value|' + total + '}\n{label|' + label + '}' : '{value|' + label + '}',
                rich: {
                    value: {
                        padding: 5,
                        align: 'center',
                        verticalAlign: 'middle',
                        fontSize: totalFontSize,
                        color: '#0080FF',
                        opacity: 1
                    },
                    label: {
                        align: 'center',
                        verticalAlign: 'middle',
                        fontSize: 14,
                        color: '#0080FF',
                        opacity: 1
                    }
                }
            },
            labelLine: {
                show: false
            },
            data: JSON.parse(JSON.stringify(data)).map(item => {
                item.itemStyle.opacity = 0.3
                return item
            })
        }
    ]
}

const getTooltip = (tooltip, title) => {
    return {
        show: !!tooltip,
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
            var tmp = ['<h5 class="echarts-tip-h5">' + data.name + '</h5>']
            tmp.push(
                '<div class="echarts-tip-div"><div class="left">' +
                    data.marker +
                    ' ' +
                    (title || data.seriesName) +
                    '：</div><div class="right">' +
                    data.value +
                    '</div></div>'
            )
            let html1 = ''
            html1 += '<div class="echarts-tip-div">'
            html1 += '<div class="left">' + data.marker + ' 占比：</div>'
            html1 += '<div class="right">' + (data.data.percent || data.percent.toFixed(2)) + '%</div>'
            html1 += '</div>'
            tmp.push(html1)
            return tmp.join('')
        }
    }
}

const {
    scaleData1 = [],
    total1 = 0,
    scaleData2 = [],
    total2 = 0,
    title1,
    title2,
    label1,
    label2,
    radius = 60,
    center1 = ['25%', '50%'],
    center2 = ['75%', '50%'],
    tooltip
} = payload.data

option = {
    tooltip: getTooltip(tooltip),
    legend: [],
    toolbox: {
        show: false
    },
    series: []
}

option.series = option.series.concat(
    getPie({
        title: title1,
        centerData: center1,
        radius: getRadius(radius),
        data: getData(scaleData1, total1),
        label: label1,
        showLable: true,
        total: null,
        totalFontSize: 14
    })
)
option.series = option.series.concat(
    getPie({
        title: title2,
        centerData: center2,
        radius: getRadius(radius),
        data: getData(scaleData2, total2),
        label: label2,
        showLable: true,
        total: null,
        totalFontSize: 14
    })
)