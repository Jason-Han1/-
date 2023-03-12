//数据
inputs = {};
inputs.xLabel = xLabelArr;
inputs.name = [
    '基本工资',
    '假期津贴',
    '加班津贴',
    '其他津贴',
    '销售达标提成',
    '工会费',
    '社保福利',
    '员工制服',
    '其他成本',
    '其他固定成本',
    '浮动成本',
];
//5、7、8 =>9、10
//inputs.color = ['#cbb0e3', '#edafda', '#93b7e3', '#a5e7f0'];
inputs.data = [];
inputs.data[0] = [
    '-',
    '-',
    '-',
    '-',
    '-',
    '-',
    5317.04,
    5317.04,
    5144.2,
    5144.2,
    5712.22,
    5712.22,
    5712.22,
    5712.22,
    5712.22,
    6285.16,
    6285.16,
    6285.16,
];
inputs.data[1] = ['-', '-', '-', '-', '-', '-', 186.1, 1328.11, 0, 839.92, 199.93, 199.93, 459, 0, 0, 479.61, 0, 0];
inputs.data[2] = [
    '-',
    '-',
    '-',
    '-',
    '-',
    '-',
    531.7,
    531.7,
    557.63,
    860.1,
    1057.33,
    1057.33,
    1057.33,
    1057.33,
    1057.33,
    891.48,
    1088.7,
    1088.7,
];
inputs.data[3] = [
    '-',
    '-',
    '-',
    '-',
    '-',
    '-',
    110,
    110,
    106.33,
    106.33,
    119.17,
    119.17,
    119.17,
    119.17,
    119.17,
    89.83,
    89.83,
    89.83,
];
inputs.data[4] = [
    '-',
    '-',
    '-',
    '-',
    '-',
    '-',
    149.37,
    149.37,
    100.97,
    100.97,
    120.86,
    120.86,
    120.86,
    120.86,
    120.86,
    175.17,
    175.17,
    175.17,
];
inputs.data[5] = [
    '-',
    '-',
    '-',
    '-',
    '-',
    '-',
    106.34,
    106.34,
    102.88,
    102.88,
    114.24,
    114.24,
    114.24,
    114.24,
    114.24,
    125.7,
    125.7,
    125.7,
];
inputs.data[6] = [
    '-',
    '-',
    '-',
    '-',
    '-',
    '-',
    1690.82,
    1690.82,
    1635.85,
    1635.85,
    1816.48,
    1816.48,
    1816.48,
    1816.48,
    1816.48,
    1998.68,
    1998.68,
    1998.68,
];
inputs.data[7] = [
    '-',
    '-',
    '-',
    '-',
    '-',
    '-',
    302.5,
    302.5,
    292.42,
    292.42,
    327.71,
    327.71,
    327.71,
    327.71,
    327.71,
    247.04,
    247.04,
    247.04,
];
inputs.data[8] = [
    '-',
    '-',
    '-',
    '-',
    '-',
    '-',
    165,
    165,
    159.5,
    159.5,
    178.75,
    178.75,
    178.75,
    178.75,
    178.75,
    134.75,
    134.75,
    134.75,
];
inputs.data[9] = [
    '-',
    '-',
    '-',
    '-',
    '-',
    '-',
573.84,	573.84,	554.8,	554.8,	620.7,	620.7,	620.7,	620.7,	620.7,	507.49,	507.49,	507.49
];
inputs.data[10] = [
    '-',
    '-',
    '-',
    '-',
    '-',
    '-',
977.17,	2119.18,	764.93,	1907.32,	1497.29,	1497.29,	1756.36,	1297.36,	1297.36,	1636.09,	1353.7,	1353.7
];

//配置
option = {
    dataZoom: [
        {
            type: 'slider', //slider表示有滑动块的，inside表示内置的
            show: true,
        },
    ],
    title: {
        text: '预算成本',
        x: '5%',
        y: '3%',
    },
    xAxis: {
        type: 'category',
        data: inputs.xLabel,
    },
    yAxis: [
        {
            type: 'value',
            axisLine: {
                symbol: ['none', 'arrow'], //两端都显示箭头
                symbolOffset: [0, 10], //箭头距离两端的距离,可为负数
            },
        },
        {
            type: 'value',
            axisLine: {
                symbol: ['none', 'arrow'], //两端都显示箭头
                symbolOffset: [0, 10], //箭头距离两端的距离,可为负数
            },
        },
    ],
    grid: {
        top: '15%',
        bottom: '17%',
        left: '5%',
        right: '5%',
    },
    tooltip: {
        show: true,
        trigger: 'axis',
        formatter: function (params) {
            console.log(params);
            console.log(inputs);
            var str = '<div><p>' + params[0].name + '</p></div>';
            for (let i = 0; i < 4; i++) {
                str += params[i].marker + ' ' + params[i].seriesName + '：' + params[i].data + '<br>';
            }
            str += params[6].marker + ' ' + params[6].seriesName + '：' + params[6].data + '<br>';
            str += params[10].marker + ' ' + params[10].seriesName + '：' + params[10].data + '<br>';
            str += params[9].marker + ' ' + params[9].seriesName + '：' + '<br>';
            str += '&nbsp;&nbsp; ' + params[5].seriesName + '：' + params[5].data + '<br>';
            str += '&nbsp;&nbsp; ' + params[7].seriesName + '：' + params[7].data + '<br>';
            str += '&nbsp;&nbsp; ' + params[8].seriesName + '：' + params[8].data + '<br>';
            return str;
        },
    },
    legend: {
        x: '30%',
        y: '3%',
    },
    series: [
        {
            yAxisIndex: 0,
            name: inputs.name[0],
            data: inputs.data[0],
            type: 'line',
            itemStyle: {
                // //通常情况下：
                // normal: {
                //     //每个柱子的颜色即为colorList数组里的每一项，如果柱子数目多于colorList的长度，则柱子颜色循环使用该数组
                //     color: inputs.color[0]
                // },
                //鼠标悬停时：
                emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)',
                },
            },
        },
        {
            yAxisIndex: 1,
            name: inputs.name[1],
            data: inputs.data[1],
            type: 'bar',
            itemStyle: {
                // //通常情况下：
                // normal: {
                //     //每个柱子的颜色即为colorList数组里的每一项，如果柱子数目多于colorList的长度，则柱子颜色循环使用该数组
                //     color: inputs.color[1]
                // },
                //鼠标悬停时：
                emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)',
                },
            },
        },
        {
            yAxisIndex: 1,
            name: inputs.name[2],
            data: inputs.data[2],
            type: 'bar',
            itemStyle: {
                // //通常情况下：
                // normal: {
                //     //每个柱子的颜色即为colorList数组里的每一项，如果柱子数目多于colorList的长度，则柱子颜色循环使用该数组
                //     color: inputs.color[2]
                // },
                //鼠标悬停时：
                emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)',
                },
            },
        },
        {
            yAxisIndex: 1,
            name: inputs.name[3],
            data: inputs.data[3],
            type: 'bar',
            itemStyle: {
                // //通常情况下：
                // normal: {
                //     //每个柱子的颜色即为colorList数组里的每一项，如果柱子数目多于colorList的长度，则柱子颜色循环使用该数组
                //     color: inputs.color[3]
                // },
                //鼠标悬停时：
                emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)',
                },
            },
        },
        {
            yAxisIndex: 1,
            name: inputs.name[4],
            data: inputs.data[4],
            type: 'bar',
            itemStyle: {
                // //通常情况下：
                // normal: {
                //     //每个柱子的颜色即为colorList数组里的每一项，如果柱子数目多于colorList的长度，则柱子颜色循环使用该数组
                //     color: inputs.color[3]
                // },
                //鼠标悬停时：
                emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)',
                },
            },
        },
        {
            yAxisIndex: 1,
            name: inputs.name[5],
            data: inputs.data[5],
            type: 'bar',
            itemStyle: {
                // //通常情况下：
                // normal: {
                //     //每个柱子的颜色即为colorList数组里的每一项，如果柱子数目多于colorList的长度，则柱子颜色循环使用该数组
                //     color: inputs.color[3]
                // },
                //鼠标悬停时：
                emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)',
                },
            },
            showSymbol: false, // 不显示symbol
            lineStyle: {
                width: 0, // 线宽是0
                color: 'rgba(0, 0, 0, 0)', // 线的颜色是透明的
            },
        },
        {
            yAxisIndex: 0,
            name: inputs.name[6],
            data: inputs.data[6],
            type: 'line',
            itemStyle: {
                // //通常情况下：
                // normal: {
                //     //每个柱子的颜色即为colorList数组里的每一项，如果柱子数目多于colorList的长度，则柱子颜色循环使用该数组
                //     color: inputs.color[3]
                // },
                //鼠标悬停时：
                emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)',
                },
            },
        },
        {
            yAxisIndex: 0,
            name: inputs.name[7],
            data: inputs.data[7],
            type: 'line',
            itemStyle: {
                // //通常情况下：
                // normal: {
                //     //每个柱子的颜色即为colorList数组里的每一项，如果柱子数目多于colorList的长度，则柱子颜色循环使用该数组
                //     color: inputs.color[3]
                // },
                //鼠标悬停时：
                emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)',
                },
            },
            showSymbol: false, // 不显示symbol
            lineStyle: {
                width: 0, // 线宽是0
                color: 'rgba(0, 0, 0, 0)', // 线的颜色是透明的
            },
        },
        {
            yAxisIndex: 0,
            name: inputs.name[8],
            data: inputs.data[8],
            type: 'line',
            itemStyle: {
                // //通常情况下：
                // normal: {
                //     //每个柱子的颜色即为colorList数组里的每一项，如果柱子数目多于colorList的长度，则柱子颜色循环使用该数组
                //     color: inputs.color[3]
                // },
                //鼠标悬停时：
                emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)',
                },
            },

            showSymbol: false, // 不显示symbol
            lineStyle: {
                width: 0, // 线宽是0
                color: 'rgba(0, 0, 0, 0)', // 线的颜色是透明的
            },
        },
        {
            yAxisIndex: 1,
            name: inputs.name[9],
            data: inputs.data[9],
            type: 'bar',
            itemStyle: {
                // //通常情况下：
                // normal: {
                //     //每个柱子的颜色即为colorList数组里的每一项，如果柱子数目多于colorList的长度，则柱子颜色循环使用该数组
                //     color: inputs.color[3]
                // },
                //鼠标悬停时：
                emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)',
                },
            },
        },
        {
            yAxisIndex: 1,
            name: inputs.name[10],
            data: inputs.data[10],
            type: 'bar',
            itemStyle: {
                // //通常情况下：
                // normal: {
                //     //每个柱子的颜色即为colorList数组里的每一项，如果柱子数目多于colorList的长度，则柱子颜色循环使用该数组
                //     color: inputs.color[3]
                // },
                //鼠标悬停时：
                emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)',
                },
            },
        },
    ],
};
