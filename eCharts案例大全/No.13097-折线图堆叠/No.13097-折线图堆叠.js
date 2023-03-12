option = {
    title: {
        text: '折线图堆叠'
    },
    tooltip: {
        trigger: 'axis'
    },
    backgroundColor: ['#fff'],
    color: [ '#7E8AD8', '#5CBBFF', '#7E8AD8', '#5CBBFF', '#68D67B', '#68D67B','#FF7F50','#FF7F50'],
    legend: {
        data: [ '客户端预估', '服务端端预估', '客户端累计完成',
            '服务端累计完成', 'TEST1预估', 'Test1完成累计完成', 'TEST2预估', 'Test2完成累计完成'
        ]
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    toolbox: {
        feature: {
            saveAsImage: {}
        }
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['09-01', '09-02', '09-03', '09-04', '09-05', '09-06', '09-07',
            '09-08', '09-09', '09-10', '09-11', '09-12', '09-13',
            '09-14', '09-15', '09-16', '09-17', '09-18',
        ]
    },
    yAxis: {
        type: 'value'
    },
    series: [
        {
            name: '客户端预估',
            type: 'line',
            stack: '总量',
            smooth: false,
            itemStyle: {
                normal: {
                    lineStyle: {
                        width: 3,
                        color: '#7E8AD8',
                        type: 'dotted' //'dotted'虚线 'solid'实线
                    }
                }
            },
            data: [45, 45, 45, 45, 45, 45, 45, 45, 45, 46, 46, 46, 46, ]
        },
        {
            name: '服务端端预估',
            type: 'line',
            stack: '',
            smooth: false,
            itemStyle: {
                normal: {
                    lineStyle: {
                        width: 3,
                        color: '#5CBBFF',
                        type: 'dotted' //'dotted'虚线 'solid'实线
                    }
                }
            },
            data: [38, 38, 38, 39, 39, 39, 39, 40, 40, 40, 40, 40, 40]
        },
        {
            name: '客户端累计完成',
            type: 'line',
            stack: '',
            smooth: false,
            itemStyle: {
                normal: {
                    lineStyle: {
                        width: 3,
                        color: '#7E8AD8',
                        type: 'solid' //'dotted'虚线 'solid'实线
                    }
                }
            },
            data: [0, 2, 4, 5, 6, 10, 12, 12, 12, 16, 17, 18, 20, ]
        },
        {
            name: '服务端累计完成',
            type: 'line',
            stack: '',
            smooth: false,
            itemStyle: {
                normal: {
                    lineStyle: {
                        width: 3,
                        color: '#5CBBFF',
                        type: 'solid' //'dotted'虚线 'solid'实线
                    }
                }
            },
            data: [0, 2, 5, 5, 9, 12, 13, 14, 16, 19, 21, 22, 23]
        },
{
            name: 'Test1预估',
            type: 'line',
            stack: '',
            smooth: false,
            itemStyle: {
                normal: {
                    lineStyle: {
                        width: 3,
                        color: '#68D67B',
                        type: 'dotted' //'dotted'虚线 'solid'实线
                    }
                }
            },
            data: [20, 20, 20, 22, 22, 22,22, 22, 22, 22, 22, 22, 22 ]
        },
        {
            name: 'Test1累计完成',
            type: 'line',
            stack: '',
            smooth: false,
            itemStyle: {
                normal: {
                    lineStyle: {
                        width: 3,
                        color: '#68D67B',
                        type: 'solid' //'dotted'虚线 'solid'实线
                    }
                }
            },
            data: [0, 1, 3, 4, 7, 8, 9, 10, 12, 11, 11, 13, 14]
        },
        {
            name: 'Test2预估',
            type: 'line',
            stack: '',
            smooth: false,
            itemStyle: {
                normal: {
                    lineStyle: {
                        width: 3,
                        color: '#FF7F50',
                        type: 'dotted' //'dotted'虚线 'solid'实线
                    }
                }
            },
            data: [16, 16, 16, 17, 18, 18,18, 18, 18, 18, 18, 18, 18 ]
        },
        {
            name: 'Test2累计完成',
            type: 'line',
            stack: '',
            smooth: false,
            itemStyle: {
                normal: {
                    lineStyle: {
                        width: 3,
                        color: '#FF7F50',
                        type: 'solid' //'dotted'虚线 'solid'实线
                    }
                }
            },
            data: [0, 1, 2, 3, 3, 4, 5, 7, 9, 10, 10, 11, 12]
        },
    ]
};