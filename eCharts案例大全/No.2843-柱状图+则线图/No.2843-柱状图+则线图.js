const payload = {
    id: 'age-structure',
    color: {
        bar: [['rgba(0, 119, 255, 1)', 'rgba(0, 191, 255, 0)']],
        line: ['rgba(252, 209, 83, 1)', 'rgba(71, 214, 14, 1)'],
    },
    title: { bar: ['人数'], line: ['总人数占比', '本单位人数占比'] },
    unit: { bar: '单位：人', line: '单位：%' },
    wordNum: 3,
    data: {
        bar1: ['616', '681', '623', '416', '406', '464', '571'],
        line1: [16, 18, 16, 11, 10, 12, 15],
        line2: [],
        x: ['55岁以上', '50-54岁', '45-49岁', '40-44岁', '35-39岁', '30-34岁', '29岁及以下'],
    },
};

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

const wordNum = payload.wordNum;

const bar1 = [];
const bar2 = [];
const bar3 = [];
const line1 = [];
const line2 = [];
const line3 = [];

const color = ['#F9CA3C', '#F97A3C', '#F63048', '#6151F1', '#2E5CF2', '#2F7DF2', '#2FD9F2', '#34E9A3', '#A9DB32'];

payload.data.x.forEach((item, index) => {
    if (payload.data.bar1 && payload.data.bar1.length > 0)
        bar1.push({ value: payload.data.bar1[index], name: item, label: { color: color[index] } });
    if (payload.data.bar2 && payload.data.bar2.length > 0)
        bar2.push({ value: payload.data.bar2[index], name: item, label: { color: color[index] } });
    if (payload.data.bar3 && payload.data.bar3.length > 0)
        bar3.push({ value: payload.data.bar3[index], name: item, label: { color: color[index] } });
    if (payload.data.line1 && payload.data.line1.length > 0)
        line1.push({ value: payload.data.line1[index], name: item, label: { color: color[index] } });
    if (payload.data.line2 && payload.data.line2.length > 0)
        line2.push({ value: payload.data.line2[index], name: item, label: { color: color[index] } });
    if (payload.data.line3 && payload.data.line3.length > 0)
        line3.push({ value: payload.data.line3[index], name: item, label: { color: color[index] } });
});

option = {
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
            data.forEach((item, index) => {
                tip += '<div class="echarts-tip-div">';
                tip += '<div class="left">' + item.marker + item.seriesName + '：</div>';
                tip += '<div class="right">' + item.value + (item.seriesType === 'line' ? '%' : '') + '</div>';
                tip += '</div>';

                if (payload.data.tipList) {
                    payload.data.tipList.forEach((sub_item) => {
                        tip += '<div class="echarts-tip-div">';
                        tip += '<div class="left">' + item.marker + payload.data.tipTitle[index] + '：</div>';
                        tip += '<div class="right">' + sub_item[item.dataIndex] + '</div>';
                        tip += '</div>';
                    });
                }
            });
            return tip;
        },
    },
    grid: {
        // 距离 上右下左 的距离
        left: 15,
        right: 15,
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
        itemStyle: {
            color: 'inherit',
        },
        textStyle: {
            color: '#2CD3FD',
            fontSize: 12,
        },
    },
    // 字体
    textStyle: {
        fontSize: 10,
        color: '#4176a3',
    },
    xAxis: {
        type: 'category',
        data: payload.data.x,
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
            name: payload.unit.bar,
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
                fontSize: 12,
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
            name: payload.unit.line,
            axisLabel: {
                //align: 'right',
                formatter: '{value} %',
                fontSize: 12,
            },
            nameGap: 10,
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

const getBar = (name, color, data) => {
    return {
        yAxisIndex: 0,
        showBackground: false,
        barMaxWidth: 8,
        name,
        data,
        type: 'bar',
        itemStyle: {
            borderRadius: [4, 4, 0, 0],
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                    offset: 0,
                    color: color[0], // 0% 处的颜色
                },
                {
                    offset: 1,
                    color: color[1], // 100% 处的颜色
                },
            ]),
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
        lineStyle: {
            width: 1,
            color,
            shadowColor: 'rgba(0, 0, 0, .3)',
            shadowBlur: 0,
            shadowOffsetY: 5,
            shadowOffsetX: 5,
        },
    };
};

if (bar1.length > 0) {
    option.series.push(getBar(payload.title.bar[0], payload.color.bar[0], bar1));
}
if (bar2.length > 0) {
    option.series.push(getBar(payload.title.bar[1], payload.color.bar[1], bar2));
}
if (bar3.length > 0) {
    option.series.push(getBar(payload.title.bar[2], payload.color.bar[2], bar3));
}
if (line1.length > 0) {
    option.series.push(getLine(payload.title.line[0], payload.color.line[0], line1));
}
if (line2.length > 0) {
    option.series.push(getLine(payload.title.line[1], payload.color.line[1], line2));
}
if (line3.length > 0) {
    option.series.push(getLine(payload.title.line[2], payload.color.line[2], line3));
}
