var xAxisData = ['2020-07-26', '2020-08-02', '2020-08-09', '2020-08-16', '2020-08-23', '2020-08-30', '2020-09-06', '2020-09-13', '2020-09-20', '2020-09-27', '2020-10-04', '2020-10-11', '2020-10-18', '2020-10-25', '2020-11-01', '2020-11-08', '2020-11-15', '2020-11-22', '2020-11-29', '2020-12-06', '2020-12-13', '2020-12-20', '2020-12-27', '2021-01-03'];
var seriesName1 = "覆盖率";
var seriesName2 = "PSI";
var seriesData1 = ['90.8', '91.4', '91.9', '91.4', '91.5', '91.6', '91.8', '91.8', '91.7', '91.3', '89.7', '90.4', '90.5', '92.1', '91.8', '93.5', '92.6', '93.1', '92.0', '92.1', '90.4', '87.0', '86.3', '86.0'];
var seriesData2 = ['0.003', '0.001', '0.003', '0.001', '0.002', '0.003', '0.001', '0.004', '0.003', '0.005', '0.008', '0.008', '0.008', '0.004', '0.014', '0.028', '0.022', '0.028', '0.024', '0.027', '0.036', '0.067', '0.079', '0.097'];
// var jsonData = {
//     x: ['2020-07-26', '2020-08-02', '2020-08-09', '2020-08-16', '2020-08-23', '2020-08-30', '2020-09-06', '2020-09-13', '2020-09-20', '2020-09-27', '2020-10-04', '2020-10-11', '2020-10-18', '2020-10-25', '2020-11-01', '2020-11-08', '2020-11-15', '2020-11-22', '2020-11-29', '2020-12-06', '2020-12-13', '2020-12-20', '2020-12-27', '2021-01-03'],
//     y: [{
//             name: '覆盖率',
//             data: ['90.8', '91.4', '91.9', '91.4', '91.5', '91.6', '91.8', '91.8', '91.7', '91.3', '89.7', '90.4', '90.5', '92.1', '91.8', '93.5', '92.6', '93.1', '92.0', '92.1', '90.4', '87.0', '86.3', '86.0']
//         },
//         {
//             name: 'PSI',
//             data: ['0.003', '0.001', '0.003', '0.001', '0.002', '0.003', '0.001', '0.004', '0.003', '0.005', '0.008', '0.008', '0.008', '0.004', '0.014', '0.028', '0.022', '0.028', '0.024', '0.027', '0.036', '0.067', '0.079', '0.097']
//         },
//     ]
// }
var option = {
    title: {
        text: '覆盖率&PSI',
        x: "center",
        top: "5%",
        textStyle: {
            fontSize: "15",
            fontWeight: "bold"
        }
    },
    tooltip: { //提示框组件
        trigger: 'axis',
        formatter: function(params) {
            var relVal = params[0].name;
            for (var i = 0, l = params.length; i < l; i++) {
                if (i === 0) {
                    relVal += '<br/>' + params[i].marker + params[i].seriesName + ' : ' + params[i].value + '%'
                } else {
                    relVal += '<br/>' + params[i].marker + params[i].seriesName + ' : ' + params[i].value
                }
            }
            return relVal;
        },
        axisPointer: {
            // type: 'cross',
            lineStyle: {
                color: {
                    type: "linear",
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [{
                            offset: 0,
                            color: "rgba(233, 233, 233,0)"
                        },
                        {
                            offset: 0.5,
                            color: "rgba(0, 0, 0,1)"
                        },
                        {
                            offset: 1,
                            color: "rgba(233, 233, 233,0)"
                        }
                    ],
                    global: false
                }
            }
        },
        textStyle: {
            color: '#fff',
            fontStyle: 'normal',
            fontFamily: '微软雅黑',
            fontSize: 12,
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '5%',
        top: '10%',
        padding: '0 0 0 0',
        containLabel: true,
    },
    legend: {
        show: true,
        x: 'left',
        y: ' center',
        orient: 'vertical',
        backgroundColor: '#fff',
        borderWidth: 1,
        borderRadius: 5,
        shadowColor: '#ccc',
        textStyle: {
            color: '#4c647c',
            fontStyle: 'normal',
            fontFamily: '微软雅黑',
            fontSize: 12
        }
    },
    xAxis: [{
        type: 'category',
        boundaryGap: true, //坐标轴两边留白
        data: xAxisData,
        axisLabel: { //坐标轴刻度标签的相关设置。
            interval: 0, //设置为 1，表示『隔一个标签显示一个标签』
            splitNumber: 5,
            margin: 15,
            rotate: 40,
            textStyle: {
                color: '#4c647c',
                fontStyle: 'normal',
                fontFamily: '微软雅黑',
                fontSize: 12,
            }
        },
        axisTick: { //坐标轴刻度相关设置。
            show: false,
            alignWithLabel: true
        },
        axisLine: { //坐标轴轴线相关设置
            lineStyle: {
                color: '#4c647c',
                opacity: 0
            }
        },
        splitLine: { //坐标轴在 grid 区域中的分隔线。
            show: true,
            lineStyle: {
                color: ['#000'],
                opacity: 0.06
            }
        }
    }],
    yAxis: [{
            name: '覆盖率',
            nameLocation: "middle",
            nameTextStyle: {
                padding: [0, 4, 25, 6],
                color: "#5FBDFF",
                fontSize: "12"
            },
            type: 'value',
            min: 50,
            max: 100,
            splitNumber: 9,
            axisLabel: {
                formatter: '{value}%',
                textStyle: {
                    color: '#4c647c',
                    fontStyle: '{value}',
                    fontFamily: '微软雅黑',
                    fontSize: 12,
                }
            },
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            splitLine: {
                show: true,
                lineStyle: {
                    color: ['#000'],
                    opacity: 0.06
                }
            }

        },
        {
            name: 'PSI',
            nameLocation: "middle",
            nameRotate: -90,
            nameTextStyle: {
                padding: [0, 4, 25, 6],
                color: "#C40000",
                fontSize: "12"
            },
            type: 'value',
            min: 0,
            max: 0.5,
            splitNumber: 9,
            axisLabel: {
                formatter: '{value}',
                textStyle: {
                    color: '#4c647c',
                    fontStyle: '{value}',
                    fontFamily: '微软雅黑',
                    fontSize: 12,
                }
            },
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            splitLine: {
                show: false,
                lineStyle: {
                    color: ['#000'],
                    opacity: 0.06
                }
            }

        }
    ],
    series: [{
            name: seriesName1,
            type: 'line',

            data: seriesData1,
            label: {
                show: true,
                formatter: '{c}%',
                position: 'top',
                textStyle: {
                    color: '#000',
                    fontSize: 12
                }
            },
            symbolSize: 6,
            barWidth: 10,
            barGap: 0, //柱间距离
            itemStyle: { //图形样式
                normal: {
                    lineStyle: {
                        width: 3,
                        // type: 'dotted',
                    },
                    barBorderRadius: 20,
                    color: '#5fbdff',
                },
            },
        },
        {
            name: seriesName2,
            type: 'line',
            data: seriesData2,
            label: {
                show: true,
                position: 'top',
                textStyle: {
                    color: '#000',
                    fontSize: 12
                }
            },
            symbolSize: 6,
            yAxisIndex: 1,
            barWidth: 10,
            barGap: 1, //柱间距离
            itemStyle: { //图形样式
                normal: {
                    lineStyle: {
                        width: 3,
                        // type: 'dotted',
                    },
                    barBorderRadius: 50,
                    color: '#C40000',
                },
            },
        },

    ]
};