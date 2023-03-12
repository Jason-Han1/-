const payload = {
    id: 'left-bottom-1',
    title: ['学历', '最高学历'],
    color: [
        'rgba(43, 139, 248, 0.97)',
        'rgba(18, 196, 254, 0.97)',
        'rgba(16, 233, 220, 0.97)',
        'rgba(17, 220, 151, 0.97)',
    ],
    wordNum: 3,
    data: {
        data1: ['0', '19', '68', '210'],
        data2: ['0', '22', '174', '2'],
        x: ['博士', '硕士', '大学', '大专及其他'],
        total1: 197,
        total2: 197,
        acc1: ['0.00', '9.64', '34.52', '55.84'],
        acc2: ['0.00', '11.17', '88.32', '0.51'],
    },
};

const data1 = payload.data.data1;
const data2 = payload.data.data2;
const acc1 = payload.data.acc1;
const acc2 = payload.data.acc2;
const x = payload.data.x;

const wordNum = payload.wordNum;

const formatter = (params, wordNum) => {
    if (!wordNum) return params;
    let newParamsName = '';
    const paramsNameNumber = params.length;
    const provideNumber = wordNum;
    const rowNumber = Math.ceil(paramsNameNumber / provideNumber);
    if (paramsNameNumber > provideNumber) {
        for (let p = 0; p < rowNumber; p++) {
            let tempStr = '';
            const start = p * provideNumber;
            const end = start + provideNumber;
            if (p === rowNumber - 1) {
                tempStr = params.substring(start, paramsNameNumber);
            } else {
                tempStr = params.substring(start, end) + '\n';
            }
            newParamsName += tempStr;
        }
    } else {
        newParamsName = params;
    }
    return newParamsName;
};

option = {
    grid: {
        left: 15,
        right: 15,
        bottom: 2,
        top: 45,
        containLabel: true,
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
            fontSize: 10,
        },
        formatter(data) {
            var tmp = ['<h5 class="echarts-tip-h5">' + data[0].name + '</h5>'];
            data.forEach((item, index) => {
                let html = '';
                html += '<div class="echarts-tip-div">';
                html += '<div class="left">' + item.marker + ' ' + item.seriesName + '：</div>';
                html += '<div class="right">' + item.data + '</div>';
                html += '</div>';
                tmp.push(html);
                if (index === 0) {
                    let html1 = '';
                    html1 += '<div class="echarts-tip-div">';
                    html1 += '<div class="left">' + item.marker + ' 占比：</div>';
                    html1 += '<div class="right">' + acc1[item.dataIndex] + '%</div>';
                    html1 += '</div>';
                    tmp.push(html1);
                } else {
                    let html1 = '';
                    html1 += '<div class="echarts-tip-div">';
                    html1 += '<div class="left">' + item.marker + ' 占比：</div>';
                    html1 += '<div class="right">' + acc2[item.dataIndex] + '%</div>';
                    html1 += '</div>';
                    tmp.push(html1);
                }
            });
            return tmp.join('');
        },
    },
    legend: {
        width: window.innerWidth < 1600 ? '100%' : '60%',
        icon: 'circle',
        top: 7,
        itemWidth: 12,
        itemHeight: 6,
        textStyle: {
            color: '#2CD3FD',
            fontSize: 12,
        },
        align: 'left',
    },
    xAxis: {
        data: x,
        axisTick: {
            show: false,
        },
        axisLine: {
            lineStyle: {
                color: 'rgba(255, 129, 109,.1)',
                width: 1, //这里是为了突出显示加上的
            },
        },
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
            name: '单位：人',
            nameTextStyle: {
                align: 'left',
                color: '#3E719D',
                fontSize: 11,
                lineHeight: 11,
                verticalAlign: 'middle',
                padding: [0, 0, 10, 0],
            },
            axisTick: {
                show: false,
            },
            axisLine: {
                lineStyle: {
                    color: 'rgba(255, 129, 109, 0.1)',
                    width: 1, //这里是为了突出显示加上的
                },
            },
            axisLabel: {
                color: '#4176A3',
            },
            splitArea: {
                areaStyle: {
                    color: 'rgba(255,255,255,.5)',
                },
            },
            splitLine: {
                show: true,
                lineStyle: {
                    color: 'rgba(255, 129, 109, 0.1)',
                    width: 0.5,
                    type: 'dashed',
                },
            },
        },
    ],
    series: [
        {
            name: payload.title[0],
            type: 'pictorialBar',
            barGap: '-20%',
            symbol: 'path://M0,10 L10,10 C5.5,10 5.5,5 5,0 C4.5,5 4.5,10 0,10 z',
            label: {
                show: true,
                position: 'top',
                distance: 15,
                color: '#08DFFE',
                fontWeight: 'bolder',
                fontSize: 15,
            },
            itemStyle: {
                color: {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [
                        {
                            offset: 0,
                            color: '#ff0000',
                        },
                        {
                            offset: 1,
                            color: '#ff0000',
                        },
                    ],
                    global: false, //  缺省为  false
                },
            },
            emphasis: {
                itemStyle: {
                    opacity: 1,
                },
            },
            data: data1,
        },
        {
            name: payload.title[1],
            type: 'pictorialBar',
            barGap: '-20%',
            symbol: 'path://M0,10 L10,10 C5.5,10 5.5,5 5,0 C4.5,5 4.5,10 0,10 z',
            label: {
                show: true,
                position: 'top',
                distance: 15,
                color: '#08DFFE',
                fontWeight: 'bolder',
                fontSize: 15,
            },
            itemStyle: {
                color: {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [
                        {
                            offset: 0,
                            color: '#9A11FF',
                        },
                        {
                            offset: 1,
                            color: '#9A11FF',
                        },
                    ],
                    global: false, //  缺省为  false
                },
            },
            emphasis: {
                itemStyle: {
                    opacity: 1,
                },
            },
            data: data2,
        },
    ],
};
