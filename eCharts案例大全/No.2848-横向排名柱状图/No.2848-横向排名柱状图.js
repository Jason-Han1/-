var colorList = ['rgba(211, 68, 53, 1)', 'rgba(228, 133, 48, 1)', 'rgba(231, 185, 44, 1)', 'rgba(23, 165, 213, 1)'];
var datas = [
    {
        value: 99,
        name: '系列一',
    },
    {
        value: 97,
        name: '系列二',
    },
    {
        value: 94,
        name: '系列三',
    },
    {
        value: 90,
        name: '系列四',
    },
    {
        value: 88,
        name: '系列五',
    },
    {
        value: 84,
        name: '系列6',
    },
    {
        value: 81,
        name: '系列7',
    },
    {
        value: 79,
        name: '系列8',
    },
    {
        value: 75,
        name: '系列9',
    },
    {
        value: 65.88,
        name: '系列a',
    },
];
let maxArr = new Array(datas.length).fill(100);
option = {
    backgroundColor: 'rgb(20,28,52)',
    tooltip: {
        show: false,
        trigger: 'axis',
        axisPointer: {
            type: 'shadow',
        },
    },
    legend: {
        show: false,
    },
    grid: {
        left: 0,
        right: 30,
        containLabel: true,
    },
    xAxis: {
        show: true,
        type: 'value',
        axisLine: {
            show: true,
            lineStyle: {
                color: ['rgba(62, 113, 157, 0.5)']
            }
        },
        splitLine: {
            lineStyle: {
                color: 'rgba(62, 113, 157, 0.5)'
            }
        },
        axisLabel: {
            color: 'rgba(62, 113, 157, 1)'
        }
    },
    yAxis: [
        {
            type: 'category',
            inverse: true,
            axisLine: {
                show: false,
            },
            axisTick: {
                show: false,
            },
            axisPointer: {
                label: {
                    show: true,
                    margin: 30,
                },
            },
            data: datas.map((item) => item.name),
            axisLabel: {
                margin: 100,
                fontSize: 14,
                align: 'left',
                color: '#fff',
                rich: {
                    a1: {
                        color: '#fff',
                        backgroundColor: colorList[0],
                        width: 20,
                        height: 20,
                        align: 'center',
                        borderRadius: 10,
                    },
                    a2: {
                        color: '#fff',
                        backgroundColor: colorList[1],
                        width: 20,
                        height: 20,
                        align: 'center',
                        borderRadius: 10,
                    },
                    a3: {
                        color: '#fff',
                        backgroundColor: colorList[2],
                        width: 20,
                        height: 20,
                        align: 'center',
                        borderRadius: 10,
                    },
                    b: {
                        color: '#fff',
                        backgroundColor: colorList[3],
                        width: 20,
                        height: 20,
                        align: 'center',
                        borderRadius: 10,
                    },
                },
                formatter: function (params) {
                    var index = datas.map((item) => item.name).indexOf(params);
                    index = index + 1;
                    if (index - 1 < 3) {
                        return ['{a' + index + '|' + index + '}' + '  ' + params].join('\n');
                    } else {
                        return ['{b|' + index + '}' + '  ' + params].join('\n');
                    }
                },
            },
        }
    ],
    series: [
        {
            z: 2,
            name: 'value',
            type: 'bar',
            barWidth: 8,
            zlevel: 1,
            data: datas.map((item, i) => {
                itemStyle = {}
                itemStyle.color = new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                    {
                        offset: 0,
                        color: 'rgba(24, 103, 222, 0.4)',
                    },
                    {
                        offset: 1,
                        color: i < 3 ? colorList[i] : colorList[3],
                    },
                ])
                return {
                    value: item.value,
                    itemStyle: itemStyle,
                };
            }),
            label: {
                show: true,
                position: 'right',
                color: '#fff',
                fontSize: 14,
            },
            itemStyle: {
                barBorderRadius: [0, 15, 15, 0],
            }
        },
        {
            name: '背景',
            type: 'bar',
            barWidth: 24,
            barGap: '-200%',
            itemStyle: {
                normal: {
                    color: 'rgba(0, 64, 128, 0.19)',
                },
            },
            data: maxArr,
        },
    ],
};
