const payload = {
    id: 'right-center',
    wordNum: 4,
    data: {
        unit: ['单位：人'],
        title: ['计划', '年限', '不交流'],
        color: ['rgba(230, 189, 46, 1)', 'rgba(218, 83, 56, 1)'],
        x: ['试用期', '一类岗位', '二类岗位', '偏远地区', '其他情形'],
        bar1: ['0', '1', '0', '0', '1'],
        bar2: ['0', '1', '2', '1', '1'],
        bar3: ['20', '0', '0', '0', '0'],
        min: 0,
        max: 10,
    },
};

const wordNum = payload.wordNum
const bar1 = payload.data.bar1 || []
const bar2 = payload.data.bar2 || []
const bar3 = payload.data.bar3 || []
const bar4 = payload.data.bar4 || []
const tip = payload.data.tip || []
const tipTitle = payload.data.tipTitle || []
const title = payload.data.title
const x = payload.data.x
const unit = payload.data.unit

let isChildren = false

const formatter = (params, wordNum) => {
    if (!wordNum) return params
    let newParamsName = ''
    const paramsNameNumber = params.length
    const provideNumber = wordNum
    const rowNumber = Math.ceil(paramsNameNumber / provideNumber)
    if (paramsNameNumber > provideNumber) {
        for (let p = 0; p < rowNumber; p++) {
            let tempStr = ''
            const start = p * provideNumber
            const end = start + provideNumber
            if (p === rowNumber - 1) {
                tempStr = params.substring(start, paramsNameNumber)
            } else {
                tempStr = params.substring(start, end) + '\n'
            }
            newParamsName += tempStr
        }
    } else {
        newParamsName = params
    }
    return newParamsName
}

const getOpion = (title, x, unit, tip) => {
    return {
        tooltip: {
            // 触发类型  经过轴触发axis  经过轴触发item
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
                    const html =
                        '<div class="echarts-tip-div">' +
                        // eslint-disable-next-line prettier/prettier
                            '<div class="left">' + item.marker + ' ' + item.seriesName + '：</div>' +
                        // eslint-disable-next-line prettier/prettier
                            '<div class="right">' + item.data + '</div>' +
                        '</div>'
                    tmp.push(html)
                })
                if (tip && tip.length > 0) {
                    tip.forEach((item, index) => {
                        const html =
                            '<div class="echarts-tip-div">' +
                            // eslint-disable-next-line prettier/prettier
                                '<div class="left"><span style="display:inline-block;margin-right:4px;border-radius:10px;width:10px;height:10px;background-color:rgba(24, 122, 220, 1);"></span> ' + tipTitle[index] + '：</div>' +
                            // eslint-disable-next-line prettier/prettier
                                '<div class="right">' + item[data[0].dataIndex] + (payload.data.showBarText || '') + '</div>' +
                            '</div>'
                        tmp.push(html)
                    })
                }
                return tmp.join('')
            }
        },
        grid: {
            // 距离 上右下左 的距离
            left: 0,
            right: 0,
            bottom: 2,
            top: 45,
            // 是否包含文本
            containLabel: true
        },
        legend: {
            type: 'scroll',
            itemWidth: 10,
            itemHeight: 3,
            itemGap: 10,
            left: 'right',
            itemStyle: {
                color: 'inherit'
            },
            textStyle: {
                color: 'inherit'
            },
            data: title.map(item => {
                return { name: item }
            })
        },
        xAxis: {
            type: 'category',
            data: x,
            axisLine: {
                lineStyle: {
                    type: 'solid',
                    color: '#4176a3',
                    width: '0.5' //坐标线的宽度
                }
            },
            axisTick: {
                show: false
            },
            //坐标轴斜着显示
            axisLabel: {
                interval: 0,
                rotate: 0,
                color: '#96cbfa',
                fontSize: 12,
                formatter(params) {
                    return formatter(params, wordNum)
                }
            }
        },
        yAxis: {
            name: unit[0],
            nameGap: 10,
            nameTextStyle: {
                align: 'left',
                fontSize: 11,
                color: '#4176a3'
            },
            minInterval: 1,
            type: 'value',
            axisLine: {
                lineStyle: {
                    type: 'solid',
                    color: '#4176a3', //左边线的颜色
                    width: '1' //坐标线的宽度
                },
                color: '#4176a3',
                minInterval: 1
            },
            axisLabel: {
                fontSize: 14
            },
            //   刻度
            axisTick: {
                show: false
            },
            //   y轴线
            splitLine: {
                show: true,
                lineStyle: {
                    color: 'rgba(65, 118, 163, 0.3)',
                    width: 1,
                    type: 'solid'
                }
            }
        },
        // 字体
        textStyle: {
            fontSize: 10,
            color: '#4176a3'
        },
        series: []
    }
}

const getBar = (name, color, data) => {
    return {
        showBackground: false,
        barMaxWidth: 8,
        name,
        data,
        type: 'bar',
        stack: 'number',
        itemStyle: {
            color
        }
    }
}

option = getOpion(title, x, unit, tip)

if (payload.data.max !== undefined) {
    option.yAxis.max = payload.data.max
}
if (payload.data.min !== undefined) {
    option.yAxis.min = payload.data.min
}
if (bar1.length > 0) {
    option.series.push(getBar(payload.data.title[0], payload.data.color[0], bar1))
}
if (bar2.length > 0) {
    option.series.push(getBar(payload.data.title[1], payload.data.color[1], bar2))
}
if (bar3.length > 0) {
    option.series.push(getBar(payload.data.title[2], payload.data.color[2], bar3))
}
if (bar4.length > 0) {
    option.series.push(getBar(payload.data.title[3], payload.data.color[3], bar4))
}