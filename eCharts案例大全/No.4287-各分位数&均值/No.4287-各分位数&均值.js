var xAxisData = ['2020-07-26', '2020-08-02', '2020-08-09', '2020-08-16', '2020-08-23', '2020-08-30', '2020-09-06', '2020-09-13', '2020-09-20', '2020-09-27', '2020-10-04', '2020-10-11', '2020-10-18', '2020-10-25', '2020-11-01', '2020-11-08', '2020-11-15', '2020-11-22', '2020-11-29', '2020-12-06', '2020-12-13', '2020-12-20'];
var seriesName1 = "P10";
var seriesName2 = "P25";
var seriesName3 = "P50";
var seriesName4 = "P75";
var seriesName5 = "P90";
var seriesName6 = "mean";
var seriesData1 = ['406', '406', '406', '406', '406', '406', '406', '406', '406', '406', '406', '406', '406', '406', '406', '406', '406', '406', '406', '406', '406', '406'];
var seriesData2 = ['505', '505', '505', '505', '505', '505', '505', '505', '505', '505', '505', '505', '505', '505', '505', '505', '505', '505', '505', '505', '505', '505'];
var seriesData3 = ['605', '605', '605', '605', '605', '605', '605', '605', '605', '605', '605', '605', '605', '605', '605', '605', '605', '605', '605', '605', '605', '605'];
var seriesData4 = ['675', '675', '675', '675', '675', '675', '675', '675', '675', '675', '675', '675', '675', '675', '675', '675', '675', '675', '675', '675', '675', '675'];
var seriesData5 = ['690', '690', '690', '690', '690', '690', '690', '690', '690', '690', '690', '690', '690', '690', '690', '690', '690', '690', '690', '690', '690', '690'];
var seriesData6 = ['577', '571', '567', '568', '567', '570', '567', '568', '573', '580', '579', '576', '581', '577', '581', '577', '581', '583', '581', '582', '583', '592'];
// var jsonData = {
//     x: ['2020-07-26', '2020-08-02', '2020-08-09', '2020-08-16', '2020-08-23', '2020-08-30', '2020-09-06', '2020-09-13', '2020-09-20', '2020-09-27', '2020-10-04', '2020-10-11', '2020-10-18', '2020-10-25', '2020-11-01', '2020-11-08', '2020-11-15', '2020-11-22', '2020-11-29', '2020-12-06', '2020-12-13', '2020-12-20'],
//     y: [{
//             name: 'P10',
//             data: ['406', '406', '406', '406', '406', '406', '406', '406', '406', '406', '406', '406', '406', '406', '406', '406', '406', '406', '406', '406', '406', '406']
//         },
//         {
//             name: 'P25',
//             data: ['505', '505', '505', '505', '505', '505', '505', '505', '505', '505', '505', '505', '505', '505', '505', '505', '505', '505', '505', '505', '505', '505']
//         },
//         {
//             name: 'P50',
//             data: ['605', '605', '605', '605', '605', '605', '605', '605', '605', '605', '605', '605', '605', '605', '605', '605', '605', '605', '605', '605', '605', '605']
//         },
//         {
//             name: 'P75',
//             data: ['675', '675', '675', '675', '675', '675', '675', '675', '675', '675', '675', '675', '675', '675', '675', '675', '675', '675', '675', '675', '675', '675']
//         },
//         {
//             name: 'P90',
//             data: ['690', '690', '690', '690', '690', '690', '690', '690', '690', '690', '690', '690', '690', '690', '690', '690', '690', '690', '690', '690', '690', '690']
//         },
//         {
//             name: 'mean',
//             data: ['577', '571', '567', '568', '567', '570', '567', '568', '573', '580', '579', '576', '581', '577', '581', '577', '581', '583', '581', '582', '583', '592']
//         },
//     ]
// };
var option = {
    title: {
        text: '各分位数&均值',
        x: "center",
        top: "2%",
        textStyle: {
            fontSize: "15",
            fontWeight: "bold"
        }
    },
    tooltip: { //提示框组件
        trigger: 'axis',
        textStyle: {
            color: '#fff',
            fontStyle: 'normal',
            fontFamily: '微软雅黑',
            fontSize: 12,
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
        orient: 'horizontal',
        x: 'left',
        y: ' center',
        top: "5%",
        left: 'center',
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
        type: 'value',
        min: 200,
        max: 800,
        splitNumber: 6,
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
            show: true,
            lineStyle: {
                color: ['#000'],
                opacity: 0.06
            }
        }
    }],
    series: [{
            name: seriesName1,
            type: 'line',
            data: seriesData1,
            label: {
                show: false,
                formatter: '{c}',
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
                    color: '#C40000',
                },
            },
        },
        {
            name: seriesName2,
            type: 'line',
            data: seriesData2,
            label: {
                show: false,
                formatter: '{c}',
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
                    color: '#008000',
                },
            },
        },
        {
            name: seriesName3,
            type: 'line',
            data: seriesData3,
            label: {
                show: false,
                formatter: '{c}',
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
                    color: '#BF00BF',
                },
            },
        },
        {
            name: seriesName4,
            type: 'line',
            data: seriesData4,
            label: {
                show: false,
                formatter: '{c}',
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
                    color: '#0080C0',
                },
            },
        },
        {
            name: seriesName5,
            type: 'line',
            data: seriesData5,
            label: {
                show: false,
                formatter: '{c}',
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
                    color: '#BFBF00',
                },
            },
        },
        {
            name: seriesName6,
            type: 'line',
            data: seriesData6,
            label: {
                show: true,
                formatter: '{c}',
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
                        type: 'dotted',
                    },
                    barBorderRadius: 20,
                    color: '#8F4330',
                },
            },
        },
    ]
};