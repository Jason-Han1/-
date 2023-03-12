var xData = ["2019-03-01", "2019-03-02", "2019-03-03", "2019-03-04", "2019-03-05", "2019-03-06", "2019-03-07", "2019-03-08"];
var yData1 = [21, 21, 22, 23, 22, 24, 26, 25, 33, 31];
var yData2 = [18, 17, 18, 19, 16, 15, 15, 12, 28,19 ];
var yData3 = [13, 17, 12, 12, 11, 14, 12, 13, 12, 15];
var yData4 = [9, 9, 8, 8, 9, 7, 10, 8, 9,10];
var yData5 = [5, 4, 6, 3, 5, 7, 5, 4, 5,  7];
option = {
    title: {
        top: '0',
        left: 'center',
        text: '注册下载分析（汇总）',
        textStyle: {
            align: 'center',
            color: '#FFFFFF',
            fontSize: 22,
        }

    },
    backgroundColor: '#333',
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross'
        }
    },
    legend: {
        x: 'center',
        y: '40px',
        textStyle: {
            color: '#f2f2f2',
            fontSize: 13,
        },
        icon: 'circle',
        data: ['注册用户数', '注册用且下载用户数', '新注册用户数', '新注册且下载用户数', '注册用户中绑五数']
    },
    dataZoom: [{
            type: 'slider',
            show: true,
            height: 20,
            left: '10%',
            right: '10%',
            bottom: '2%',
            start: 50,
            end: 100,
            textStyle: {
                color: '#d4ffff',
                fontSize: 11,
            },
        }, {
            type: 'inside'
        }

    ],
    grid: {
        right: '5%',
        bottom: '10%',
        left: '2%',
        top: '80px',
        containLabel: true
    },
    xAxis: [{
        type: 'category',
        data: xData,
        name: '时间',
        nameTextStyle: {
            color: '#d4ffff'
        },
        axisLine: {
            lineStyle: {
                color: '#0B4CA9'
            }
        },
        axisTick: {
            show: false,
        },
        axisLabel: {
            show: true,
            textStyle: {
                color: "#FFF",
                fontSize: 12,
            },
            //interval:0,
            //rotate:30
        },
    }],
    yAxis: [{
        type: 'value',
        name: '次数',
        nameTextStyle: {
            color: '#d4ffff'
        },
        position: 'left',
        axisLine: {
            lineStyle: {
                color: '#0B4CA9'
            }
        },
        splitLine: {
            lineStyle: {
                color: "#0B4CA9",
            }

        },
        axisLabel: {
            color: '#d4ffff',
            fontSize: 12,
        }
    }, ],
    series: [{
            name: '注册用户数',
            type: 'line',
            yAxisIndex: 0,
            symbolSize: 12,
            itemStyle: {
                normal: {
                    color: '#FC30EE',
                }
            },
            data: yData1
        },
        {
            name: '注册用且下载用户数',
            type: 'line',
            yAxisIndex: 0,
            symbolSize: 12,
            itemStyle: {
                normal: {
                    color: '#0EF100',
                }
            },
            data: yData2
        },
                {
            name: '新注册用户数',
            type: 'line',
            yAxisIndex: 0,
            symbolSize: 12,
            itemStyle: {
                normal: {
                    color: '#C794F9',
                }
            },
            data: yData3
        },
                {
            name: '新注册且下载用户数',
            type: 'line',
            yAxisIndex: 0,
            symbolSize: 12,
            itemStyle: {
                normal: {
                    color: '#90C201',
                }
            },
            data: yData4
        },
                {
            name: '注册用户中绑五数',
            type: 'line',
            yAxisIndex: 0,
            symbolSize: 12,
            itemStyle: {
                normal: {
                    color: '#FFFF66',
                }
            },
            data: yData5
        }

    ]
};