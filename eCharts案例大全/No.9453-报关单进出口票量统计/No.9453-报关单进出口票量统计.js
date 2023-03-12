var xData = ["2018-12","2019-01","2019-02","2019-03", "2019-04", "2019-05", "2019-06", "2019-07", "2019-08", "2019-09", "2019-10", "2019-11"];
var yData1 = [120, 150, 120, 460, 220, 240, 150, 50, 440, 180, 240, 180];
var yData2 = [130, 170, 100, 380, 170, 280, 220, 120, 380, 109, 140, 190];
option = {
    title: {
        top: '0',
        left: 'center',
        text: '报关单进出口票量统计',
        textStyle: {
            align: 'center',
            color: '#043491',
            fontSize: 22,
        }

    },
     toolbox: {
        feature: {
            saveAsImage: {},
            dataView:{}
        }
    },
    backgroundColor: '#FFFFFF',
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
            color: '#031C4C',
            fontSize: 13,
        },
        icon: 'circle',
        data: ['进口票量', '出口票量']
    },
    // dataZoom: [{
    //         type: 'slider',
    //         show: true,
    //         height: 20,
    //         left: '10%',
    //         right: '10%',
    //         bottom: '2%',
    //         start: 20,
    //         end: 100,
    //         textStyle: {
    //             color: '#031C4C',
    //             fontSize: 11,
    //         },
    //     }, {
    //         type: 'inside'
    //     }

    // ],
    grid: {
        right: '5%',
        bottom: '5%',
        left: '2%',
        top: '80px',
        containLabel: true
    },
    xAxis: [{
        type: 'category',
        data: xData,
        name: '月份',
        nameTextStyle: {
            color: '#031C4C'
        },
        axisLine: {
            lineStyle: {
                color: '#3B72BF'
            }
        },
        axisTick: {
            show: false,
        },
        axisLabel: {
            show: true,
            textStyle: {
                color: "#013232",
                fontSize: 12,
            },
            //interval:0,
            //rotate:30
        },
    }],
    yAxis: [{
        type: 'value',
        name: '票量',
        nameTextStyle: {
            color: '#031C4C'
        },
        position: 'left',
        axisLine: {
            lineStyle: {
                color: '#3B72BF'
            }
        },
        splitLine: {
            lineStyle: {
                color: "#C6DAF6",
            }

        },
        axisLabel: {
            color: '#013232',
            fontSize: 12,
        }
    }, ],
    series: [{
            name: '进口票量',
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
            name: '出口票量',
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