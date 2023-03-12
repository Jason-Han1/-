const labelList = ['西街口', '王府井', '公主坟', '龙抬头', '龙湖公园', '朝天门', '金拱门'];
const chartCount = [4, 4, 4, 5];
const timeScope = [
    ['09:00', '08:45', '08:30'],
    ['09:00', '09:15', '09:30'],
];
const alarmChart = [
    { name: '西街口', start: 0, end: -3 },
    { name: '王府井', start: 0, end: -3 },
    { name: '公主坟', start: -3, end: -3 },
    { name: '龙抬头', start: 0, end: -6 },
    { name: '龙湖公园', start: -3, end: -3 },
    { name: '朝天门', start: -0, end: -3 },
     { name: '金拱门', start: -3, end: -3 },
];
const warnChart = [
    { name: '西街口', start: 0, end: 3 },
    { name: '王府井', start: 0, end: 6 },
       { name: '公主坟', start: 3, end: 3 },
    { name: '龙抬头', start: 0, end: 6 },
    { name: '龙湖公园',  start: 0, end: 3 },
    { name: '朝天门', start: 3, end: 3 },
     { name: '金拱门', start: 3, end: 3 },
];
option = {
    backgroundColor: '#fff',
    grid: [
        {
            top: '25%',
            width: '48%',
            left: '2%',
            gridIndex: 0,
            id: 0,
            height: '50%'
        },
        {
            top: '25%',
            left: '50%',
            width: '48%',
            gridIndex: 1,
            id: 1,
            height: '50%'
        }
    ],
    xAxis: [
        {
            type: 'value',
            min: '-6',
            max: '0',
            gridIndex: 0,
            axisTick: {
                show: false,
                inside: false,
            },
            axisLabel: {
                show: true,
                color: '#949EA8',
                rich: {
                    a: {
                        width: 15,
                        height: 10,
                        // padding: [4, 0, 0, 0],
                        // backgroundColor: {
                        //     image: timePng,
                        // },
                    },
                    b: {
                        color: '#4D94FF',
                        padding: [-1, 0, 0, 0],
                    },
                    c: {
                        color: '#FF7085',
                        fontSize: 12,
                        lineHeight: 17,
                        fontFamily: 'PingFangSC-Medium',
                        borderColor: '#FF7085',
                        borderWidth: 1,
                        backgroundColor: '#FFE2E7',
                        borderRadius: 5,
                        padding: 5,
                    },
                    e: {
                        color: '#fe9749',
                        fontSize: 12,
                        lineHeight: 17,
                        fontFamily: 'PingFangSC-Medium',
                        borderColor: '#fe9749',
                        borderWidth: 1,
                        backgroundColor: '#FFE2E7',
                        borderRadius: 5,
                        padding: 5,
                    },
                    d: {
                        width: '90%',
                    },
                },
                formatter: (value) => {
                    if (value === 0) {
                        return '{a|} {b|' + timeScope[0][value] + '}';
                    } else if (-value === 2) {
                        return '{d|}{c| 告警' + chartCount[1] + '}';
                    } else if (-value === 5) {
                        return '{d|}{c| 告警' + chartCount[0] + '}';
                    } else {
                        return timeScope[0][-value / 3];
                    }
                },
            },
            axisLine: {
                // Y轴轴线样式
                show: true,
                lineStyle: {
                    color: '#CFD7DD',
                },
            },
            splitLine: {
                show: true,
                lineStyle: {
                    type: 'dashed',
                    color: ['#CFD7DD', '#E8ECEF', '#E8ECEF'],
                },
            },
        },
        {
            type: 'value',
            gridIndex: 1,
            min: '0',
            max: '6',
            axisTick: {
                show: false,
            }, // 是否显示刻度
            axisLine: {
                // Y轴轴线样式
                show: true, // 是否显示X轴
                lineStyle: {
                    color: '#CFD7DD',
                },
            },
            axisLabel: {
                show: true,
                color: '#949EA8',
                rich: {
                    a: {
                        width: 15,
                        height: 10,
                        // padding: [4, 0, 0, 0],
                        // backgroundColor: {
                        //     image: timePng,
                        // },
                    },
                    b: {
                        color: '#4D94FF',
                        padding: [-1, 0, 0, 0],
                    },
                    c: {
                        color: '#FF7085',
                        fontSize: 12,
                        lineHeight: 17,
                        fontFamily: 'PingFangSC-Medium',
                        borderColor: '#FF7085',
                        borderWidth: 1,
                        backgroundColor: '#FFE2E7',
                        borderRadius: 5,
                        padding: 5,
                    },
                    e: {
                        color: '#fe9749',
                        fontSize: 12,
                        lineHeight: 17,
                        fontFamily: 'PingFangSC-Medium',
                        borderColor: '#fe9749',
                        borderWidth: 1,
                        backgroundColor: '#FFE2E7',
                        borderRadius: 5,
                        padding: 5,
                    },
                    d: {
                        width: '90%',
                    },
                },
                formatter: (value) => {
                    if (value !== 0) {
                        if (value === 1) {
                            return '{d|}{e| 预警' + chartCount[2] + '}';
                        } else if (value === 4) {
                            return '{d|}{e| 预警' + chartCount[3] + '}';
                        } else {
                            return timeScope[1][value / 3];
                        }
                    }
                },
            },
            splitLine: {
                show: true,
                lineStyle: {
                    type: 'dashed',
                    color: ['#CFD7DD', '#E8ECEF', '#E8ECEF'],
                },
            },
        },
    ],
    yAxis: [
        {
            type: 'category',
            gridIndex: 0,
            inverse: true,
            data: labelList,
            axisTick: {
                show: false,
            },
            axisLabel: {
                show: false,
            },
            axisLine: {
                // Y轴轴线样式
                show: true,
                symbol: ['circle'],
                symbolSize: 7,
                lineStyle: {
                    width: 2,
                    color: '#4D94FF',
                },
            },
            zlevel: 2,
        },
        {
            type: 'category',
            gridIndex: 1,
            inverse: true,
            data: labelList,
            axisTick: {
                show: false,
            },
            axisLabel: {
                show: false,
                margin: 0,
            },
            axisLine: {
                show: false, // 是否显示轴线
            },
        },
    ],
    series: [
        {
            name: '告警',
            type: 'bar',
            stack: 'one',
            barWidth: '20',
            gridIndex: 0,
            itemStyle: {
                normal: {
                    label: {
                        color: 'black',
                    },
                    color: 'transparent',
                },
            },
            data: alarmChart.map((item) => item.start),
        },
        {
            name: '告警',
            type: 'bar',
            stack: 'one',
            barWidth: '20',
            gridIndex: 0,
            emphasis: {
                itemStyle: {
                    color: '#FF7085',
                    shadowColor: 'rgba(255,112,133,0.3)',
                    shadowBlur: 10,
                },
                label: {
                    color: '#FFF',
                    // color: '#000'
                },
            },
            itemStyle: {
                normal: {
                    show: true,
                    color: '#FFE2E7',
                    barBorderRadius: 50,
                    borderWidth: 0,
                    borderColor: '#000',
                    label: {
                        show: true,
                        position: 'inside',
                        // color: '#FF7085',
                        color: '#000',
                        formatter: function (v) {
                            return v.data ? v.name : '';
                        },
                    },
                },
            },
            data: alarmChart.map((item) => item.end),
        },
        {
            name: '预警',
            type: 'bar',
            stack: 'one',
            barWidth: '20',
            gridIndex: 1,
            itemStyle: {
                normal: {
                    label: {
                        color: 'black',
                    },
                    color: 'transparent',
                },
            },
            data: warnChart.map((item) => item.start),
        },
        {
            name: '预警',
            type: 'bar',
            stack: 'one',
            barWidth: '20',
            gridIndex: 1,
            emphasis: {
                itemStyle: {
                    color: '#FE9749',
                    shadowColor: 'rgba(254,151,73,0.3)',
                    shadowBlur: 10,
                },
                label: {
                    color: '#FFF',
                    // color: '#000'
                },
            },
            itemStyle: {
                normal: {
                    show: true,
                    color: '#FFEADB',
                    barBorderRadius: 50,
                    borderWidth: 0,
                    borderColor: '#333',
                    label: {
                        show: true,
                        position: 'inside',
                        // color: '#FE9749',
                        color: '#000',
                        formatter: function (v) {
                            return v.data ? v.name : '';
                        },
                    },
                },
            },
            data: warnChart.map((item) => item.end),
        },
    ],
};
