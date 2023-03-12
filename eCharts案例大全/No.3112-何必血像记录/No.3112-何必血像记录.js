const dateList = [
    '2021.06.12',
    '2021.06.14',
    '2021.06.16',
    '2021.06.18',
    '2021.06.20',
    '2021.06.21',
    '2021.06.22',
    '2021.06.23',
]
const colorList = ['green', 'green', 'green', 'green']
const type_list = ['白细胞', '中性粒细胞', '血红蛋白', '血小板',]
//  白细胞
const cell_white_list = [2.41, 2.52, 1.55, 0.56, 0.37, 1.28, 7.21, 11.19 ]
//  中性粒细胞
const cell_center_list = [1.36, 2.19, 1.37, 0.33, 0.1, 0.28, 4.52, 8.19]
//  血红蛋白
const hemoglobin_list = [128, 117, 111, 108, 110, 125, 125, 122]
//  血小板
const platelet_list = [271, 237, 153, 198, 255, 280, 311, 383]

option = {
    color: colorList,
    title: [{
        text: '白细胞',
        left: '25%',
        textAlign: 'center',
    }, {
        text: '中性粒细胞',
        left: '75%',
        textAlign: 'center',
    }, {
        text: '血红蛋白',
        left: '25%',
        top: '50%',
        textAlign: 'center',
    }, {
        text: '血小板',
        left: '75%',
        top: '50%',
        textAlign: 'center',
    }],
    grid: [
        {left: '7%', top: '7%', width: '38%', height: '38%'},
        {right: '8%', top: '7%', width: '38%', height: '38%'},
        {left: '7%', bottom: '7%', width: '38%', height: '38%'},
        {right: '8%', bottom: '7%', width: '38%', height: '38%'}
    ],
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data: type_list,
        show: false
    },
    toolbox: {
        feature: {
            saveAsImage: {}
        }
    },
    xAxis: [
        {gridIndex: 0, boundaryGap: false, data: dateList},
        {gridIndex: 1, boundaryGap: false, data: dateList},
        {gridIndex: 2, boundaryGap: false, data: dateList},
        {gridIndex: 3, boundaryGap: false, data: dateList}
    ],
    yAxis: [
        {gridIndex: 0},
        {gridIndex: 1},
        {gridIndex: 2},
        {gridIndex: 3}
    ],
    visualMap: [
        {
            seriesIndex: 0,
            // show: false,
            top: 5,
            left: 10,
            pieces: [{
                gt: 0,
                lte: 1,
                name: 'xx',
                title: '2222',
                color: 'red'
            }, {
                gt: 1,
                lte: 1.5,
                color: 'orange'
            }],
            outOfRange: {
                color: colorList[0]
            }
        },
        {
            seriesIndex: 1,
            show: false,
            top: 5,
            right: 10,
            pieces: [{
                gt: 0,
                lte: 0.5,
                color: 'red'
            }, {
                gt: 0.5,
                lte: 1,
                color: 'orange'
            }],
            outOfRange: {
                color: colorList[1]
            }
        },
        {
            seriesIndex: 2,
            show: false,
            top: '50%',
            left: 10,
            pieces: [{
                gt: 0,
                lte: 65,
                color: 'red'
            }],
            outOfRange: {
                color: colorList[2]
            }
        },
        {
            seriesIndex: 3,
            show: false,
            top: '50%',
            right: 10,
            pieces: [{
                gt: 0,
                lte: 35,
                color: 'red'
            }, {
                gt: 35,
                lte: 75,
                color: 'orange'
            }],
            outOfRange: {
                color: colorList[3]
            }
        }
    ],
    series: [
        {
            name: type_list[0],
            type: 'line',
            data: cell_white_list,
            markLine: {
                silent: true,
                data: [{
                    yAxis: 1.5,
                    name: '口服升白片',
                    label: {
                        color: 'orange',
                        formatter: '低于{@score} \n{b}'  
                    },
                    lineStyle: {
                        color: 'orange'
                    },
                }, {
                    yAxis: 1,
                    name: '门诊打升白针',
                    label: {
                        color: 'red',
                        formatter: '低于{@score} \n{b}'  
                    },
                    lineStyle: {
                        color: 'red'
                    },
                }, {
                    yAxis: 4,
                    name: '正常下限',
                    label: {
                        color: 'green',
                        formatter: '{b}'  
                    },
                    lineStyle: {
                        color: 'green'
                    },
                }, {
                    yAxis: 10,
                    name: '正常上限',
                    label: {
                        color: 'green',
                        formatter: '{b}'  
                    },
                    lineStyle: {
                        color: 'green'
                    },
                }]
            },
        },
        {
            name: type_list[1],
            type: 'line',
            xAxisIndex: 1,
            yAxisIndex: 1,
            data: cell_center_list,
            markLine: {
                silent: true,
                data: [{
                    yAxis: 0.5,
                    name: '门诊打升白针',
                    label: {
                        color: 'red',
                        formatter: '低于{@score} \n{b}'  
                    },
                    lineStyle: {
                        color: 'red'
                    },
                }, {
                    yAxis: 1,
                    name: '口服升白片',
                    label: {
                        color: 'orange',
                        formatter: '低于{@score} \n{b}'  
                    },
                    lineStyle: {
                        color: 'orange'
                    },
                }, {
                    yAxis: 2,
                    name: '正常下限',
                    label: {
                        color: 'green',
                        formatter: '{b}'  
                    },
                    lineStyle: {
                        color: 'green'
                    },
                }, {
                    yAxis: 7.5,
                    name: '正常上限',
                    label: {
                        color: 'green',
                        formatter: '{b}'  
                    },
                    lineStyle: {
                        color: 'green'
                    },
                }]
            }
        },
        {
            name: type_list[2],
            type: 'line',
            xAxisIndex: 2,
            yAxisIndex: 2,
            data: hemoglobin_list,
            markLine: {
                silent: true,
                lineStyle: {
                    color: 'red'
                },
                data: [{
                    yAxis: 65,
                    name: '住院输血',
                    label: {
                        color: 'red',
                        formatter: '低于{@score} \n{b}'  
                    },
                    lineStyle: {
                        color: 'red'
                    },
                }, {
                    yAxis: 110,
                    name: '正常下限',
                    label: {
                        color: 'green',
                        formatter: '{b}'  
                    },
                    lineStyle: {
                        color: 'green'
                    },
                }, {
                    yAxis: 140,
                    name: '正常上限',
                    label: {
                        color: 'green',
                        formatter: '{b}'  
                    },
                    lineStyle: {
                        color: 'green'
                    },
                }]
            }
        },
        {
            name: type_list[3],
            type: 'line',
            xAxisIndex: 3,
            yAxisIndex: 3,
            data: platelet_list,
            markLine: {
                silent: true,
                data: [{
                    yAxis: 35,
                    name: '住院输血',
                    label: {
                        color: 'red',
                        formatter: '低于{@score} \n{b}'  
                    },
                    lineStyle: {
                        color: 'red'
                    }
                }, {
                    yAxis: 75,
                    name: '门诊打针',
                    label: {
                        color: 'orange',
                        formatter: '低于{@score} \n{b}'  
                    },
                    lineStyle: {
                        color: 'orange'
                    }
                }, {
                    yAxis: 100,
                    name: '正常下限',
                    label: {
                        color: 'green',
                        formatter: '{b}'  
                    },
                    lineStyle: {
                        color: 'green'
                    },
                }, {
                    yAxis: 300,
                    name: '正常上限',
                    label: {
                        color: 'green',
                        formatter: '{b}'  
                    },
                    lineStyle: {
                        color: 'green'
                    },
                }]
            }
        },
    ]
};