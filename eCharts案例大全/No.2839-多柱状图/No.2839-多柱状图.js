const payload = {
    id: 'right-top',
    wordNum: 0,
    data: {
        unit: ['单位：个'],
        barColor: ['0, 128, 255', '21, 221, 104'],
        title: ['职数', '实际'],
        x: ['公司1', '公司2', '公司3'],
        bar1: ['86', '52', '57'],
        bar2: ['84', '51', '62'],
    },
};

const wordNum = payload.wordNum;
const bar1 = payload.data.bar1 || [];
const bar2 = payload.data.bar2 || [];
const bar3 = payload.data.bar3 || [];
const line1 = payload.data.line1 || [];
const line2 = payload.data.line2 || [];
const title = payload.data.title;
const x = payload.data.x;
const unit = payload.data.unit;

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

const getOpion = (title, x, unit) => {
    return {
        // 字体
        textStyle: {
            fontSize: 10,
            color: '#4176a3',
        },
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
                fontSize: 10,
            },
            // 轴触发提示才有效
            axisPointer: {
                type: 'shadow',
            },
            shadowStyle: {
                color: 'rgba(157, 168, 245, 0.1)',
            },

            formatter: (data) => {
                var tip = '<h5 class="echarts-tip-h5">' + data[0].name + '</h5>';
                data.forEach((item) => {
                    tip += '<div class="echarts-tip-div">';
                    tip += '<div class="left">' + item.marker + item.seriesName + '：</div>';
                    tip += '<div class="right">' + item.value + (item.seriesType === 'line' ? '%' : '') + '</div>';
                    tip += '</div>';
                });
                if (payload.id === 'center-bottom-3') {
                    tip += '<div class="echarts-tip-div">';
                    tip +=
                        '<div class="left"><span class="echarts-span" style="background:transparent;"></span>占比：</div>';
                    tip += '<div class="right">' + ((data[1].value / data[0].value) * 100).toFixed(2) + '%</div>';
                    tip += '</div>';
                }
                return tip;
            },
        },
        grid: {
            // 距离 上右下左 的距离
            left: 0,
            right: 0,
            bottom: 2,
            top: 45,
            // 是否包含文本
            containLabel: true,
        },
        legend: {
            type: 'scroll',
            itemWidth: 10,
            itemHeight: 3,
            itemGap: 10,
            left: 'center',
            top: 10,
            itemStyle: {
                color: 'inherit',
            },
            textStyle: {
                color: 'inherit',
            },
            data: title.filter((item) => !!item).map((item) => ({ name: item })),
        },
        xAxis: {
            type: 'category',
            data: x,
            axisLine: {
                lineStyle: {
                    type: 'solid',
                    color: '#4176a3',
                    width: '0.5', //坐标线的宽度
                },
            },
            axisTick: {
                show: false,
            },
            //坐标轴斜着显示
            axisLabel: {
                interval: 0,
                rotate: 0,
                color: '#96cbfa',
                fontSize: 12,
                formatter(params) {
                    return formatter(params, wordNum);
                },
            },
        },
        yAxis: [
            {
                name: unit[0],
                nameGap: 10,
                nameTextStyle: {
                    align: 'left',
                    fontSize: 11,
                    color: '#4176a3',
                },
                minInterval: 1,
                type: 'value',
                axisLine: {
                    lineStyle: {
                        type: 'solid',
                        color: '#4176a3', //左边线的颜色
                        width: '1', //坐标线的宽度
                    },
                    color: '#4176a3',
                    minInterval: 1,
                },
                axisLabel: {
                    fontSize: 14,
                },
                //   刻度
                axisTick: {
                    show: false,
                },
                //   y轴线
                splitLine: {
                    show: true,
                    lineStyle: {
                        color: 'rgba(65, 118, 163, 0.3)',
                        width: 1,
                        type: 'solid',
                    },
                },
            },
            {
                name: unit[1],
                nameGap: 10,
                axisLabel: {
                    formatter: '{value} %',
                    fontSize: 14,
                },
                nameTextStyle: {
                    align: 'right',
                    fontSize: 11,
                    color: '#4176a3',
                },
                minInterval: 1,
                type: 'value',
                axisLine: {
                    lineStyle: {
                        type: 'solid',
                        color: '#4176a3', //左边线的颜色
                        width: '1', //坐标线的宽度
                    },
                    color: '#4176a3',
                    minInterval: 1,
                },
                //   刻度
                axisTick: {
                    show: false,
                },
                //   y轴线
                splitLine: {
                    show: true,
                    lineStyle: {
                        color: 'rgba(65, 118, 163, 0.3)',
                        width: 1,
                        type: 'solid',
                    },
                },
            },
        ],
        series: [],
    };
};

const getBar = (name, color, data) => {
    return {
        yAxisIndex: 0,
        name,
        showBackground: false,
        barMaxWidth: 8,
        data,
        type: 'bar',
        itemStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                    offset: 0,
                    color: 'rgba(' + color + ', 0.97)',
                },
                {
                    offset: 1,
                    color: 'rgba(' + color + ', 0.19)',
                },
            ]),
            borderRadius: [4, 4, 0, 0],
        },
        label: {
            show: !!payload.data.showLabel,
            position: 'top',
            color: '#fff',
            fontSize: 10,
        },
    };
};

const getLine = (name, color, data) => {
    return {
        yAxisIndex: 1,
        name,
        data,
        type: 'line',
        smooth: false,
        itemStyle: {
            color,
        },
    };
};

option = getOpion(title, x, unit);
if (bar1.length > 0) {
    option.series.push(getBar(payload.data.title[0], payload.data.barColor[0], bar1));
}
if (bar2.length > 0) {
    option.series.push(getBar(payload.data.title[1], payload.data.barColor[1], bar2));
}
if (bar3.length > 0) {
    option.series.push(getBar(payload.data.title[2], payload.data.barColor[2], bar3));
}
if (line1.length > 0) {
    option.series.push(getLine(payload.data.title[2], payload.data.lineColor[0], line1));
}
if (line2.length > 0) {
    option.series.push(getLine(payload.data.title[3], payload.data.lineColor[1], line2));
}
