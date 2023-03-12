const payload = {
    id: 'org-box-1',
    unit: '人',
    wordNum: 3,
    data: {
        color: ['#FF6363', '#0077CC'],
        x: ['办公室', '资产部', '安全部', '办公室', '建设部'],
        data: ['1', '6', '2', '1', '4'],
        data2: [15, 25, 12, 14, 17],
        data3: [12, 25, 13, 14, 18],
        data4: [4, 6, 1, 1, 3],
        data5: [20, 0, 0, 0, 0],
    },
};

const max = payload.max || parseInt(Math.max(...payload.data.data) * 1.4, 10);
const wordNum = payload.wordNum;

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

option = {
    backgroundColor: '#031231',
    tooltip: {
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
        axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: 'shadow', // 默认为直线，可选为：'line' | 'shadow'
        },
        formatter(list) {
            var msg = '';
            for (const i in list) {
                if (i === 0) {
                    msg += list[i].name + '<br>';
                }
                // msg += list[i].seriesName + '：' + list[i].data + '<br>'
                msg += '<div class="echarts-tip-div">';
                msg += '<div class="left">编制：</div>';
                msg += '<div class="right">' + payload.data.data2[list[i].dataIndex] + '</div>';
                msg += '</div>';
                msg += '<div class="echarts-tip-div">';
                msg += '<div class="left">在编：</div>';
                msg += '<div class="right">' + payload.data.data3[list[i].dataIndex] + '</div>';
                msg += '</div>';
                msg += '<div class="echarts-tip-div">';
                msg += '<div class="left">借用：</div>';
                msg += '<div class="right">' + payload.data.data4[list[i].dataIndex] + '</div>';
                msg += '</div>';
                msg += '<div class="echarts-tip-div">';
                msg += '<div class="left">挂岗：</div>';
                msg += '<div class="right">' + payload.data.data5[list[i].dataIndex] + '</div>';
                msg += '</div>';
            }
            return msg;
        },
    },
    grid: {
        left: '3%',
        right: '4%',
        top: 25,
        bottom: '0',
        containLabel: true,
    },
    xAxis: {
        type: 'category',
        axisLine: {
            lineStyle: {
                color: '#4176A3',
                width: 1,
            },
        },
        axisLabel: {
            color: '#96CBFA',
            fontSize: 12,
            formatter(params) {
                return formatter(params, wordNum);
            },
            // rotate: 45
        },
        data: payload.data.x,
    },
    yAxis: [
        {
            max,
            name: '单位：' + payload.unit,
            // name: '',
            nameTextStyle: {
                align: 'left',
                fontSize: 11,
                color: '#4176a3',
            },
            axisLine: {
                lineStyle: {
                    color: '#4176A3',
                    width: 2,
                },
            },
            splitLine: {
                //分割线配置
                lineStyle: {
                    color: '#4176A356',
                },
            },
        },
        {
            type: 'value',
            nameTextStyle: {
                color: '#4176A3',
                fontSize: 11,
            },
            position: 'right',
            splitLine: {
                show: false,
            },
            axisTick: {
                show: false,
            },
            axisLine: {
                show: false,
                lineStyle: {
                    color: '#396A87',
                    width: 2,
                },
            },
            axisLabel: {
                show: true,
                formatter: '{value} ' + payload.unit, //右侧Y轴文字显示
                color: '#396A87',
                fontSize: 14,
            },
        },
    ],
    series: [
        {
            name: '超员比例',
            type: 'bar',
            barMaxWidth: 8,
            showBackground: true,
            backgroundStyle: {
                // color: "rgba(154, 73, 73, 0.3)",
                borderWidth: 14,
            },
            data: payload.data.data,
            itemStyle: {
                borderRadius: [4, 4, 0, 0],
                color: new echarts.graphic.LinearGradient(
                    0,
                    0,
                    0,
                    1,
                    [
                        {
                            offset: 1,
                            color: payload.data.color[1], // 0% 处的颜色
                        },
                        {
                            offset: 0,
                            color: payload.data.color[0], // 100% 处的颜色
                        },
                    ],
                    false
                ),
            },
            label: {
                show: true,
                position: 'top',
                distance: 10,
                formatter: (payload.id === 'org-box-2' ? '{c}\n' : '{c}') + payload.unit,
                color: '#fff',
            },
        },
    ],
};
