var xData = ["2019-03-01", "2019-03-02", "2019-03-03", "2019-03-04", "2019-03-05", "2019-03-06", "2019-03-07", "2019-03-08", "2019-03-09", "2019-03-10", "2019-03-11", "2019-03-12", "2019-03-13", "2019-03-14", "2019-03-15", "2019-03-16", "2019-03-17", "2019-03-18", "2019-03-19", "2019-03-20"];
var yData1 = [12, 5, 12, 46, 22, 24, 15, 5, 54, 18, 24, 18, 31, 25, 27, 14, 15, 21, 20, 17];
var yData2 = [13, 7, 10, 38, 17, 28, 22, 12, 28, 19, 14, 19, 19, 31, 22, 11, 14, 19, 22, 16];
option = {
    title: {
        top: '0',
        left: 'center',
        text: '坐席电话统计',
        textStyle: {
            align: 'center',
            color: '#FFFFFF',
            fontSize: 22,
        }

    },
    backgroundColor: '#043491',
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
        data: ['呼入量', '呼出量']
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
            name: '呼入量',
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
            name: '呼出量',
            type: 'line',
            yAxisIndex: 0,
            symbolSize: 12,
            itemStyle: {
                normal: {
                    color: '#0EF100',
                }
            },
            data: yData2
        }

    ]
};