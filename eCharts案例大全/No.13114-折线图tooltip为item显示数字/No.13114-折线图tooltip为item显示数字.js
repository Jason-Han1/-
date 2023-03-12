option = {
    backgroundColor:"#0c2042",
    color: ['#fef34d', '#fe4b4b'],
    tooltip: {
        trigger: 'item'
    },
    grid: {
        width:"610px",
        height:"160px",
        top: '15%',
        left: '2%',
        right: '8%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: {
        name: '日期',
        nameTextStyle: {
            color: "#fff",
            fontSize: 12
        },
        type: 'category',
        boundaryGap: false,
        splitLine: {
            show: false
        },
        data: ["08-21", "08-22", "08-23", "08-24", "08-25", "08-26", "08-27", "08-28", "08-29", "08-30", "08-31", "09-01", "09-02", "09-03", "09-04", "09-05", "09-06", "09-07", "09-08", "09-09", "09-10", "09-11", "09-12", "09-13", "09-14", "09-15", "09-16", "09-17", "09-18", "09-19"],
        axisLabel: {
            color: '#ffffff'
        },
        axisLine: {
            lineStyle: {
                color: '#058CE2'
            }
        }
    },
    yAxis: {
        name: '人数',
        nameTextStyle: {
            color: "#fff",
            padding: [0, 0, 0, -22],
            fontSize: 12
        },
        type: 'value',
        axisLabel: {
            color: '#ffffff'
        },
        axisLine: {
            lineStyle: {
                color: '#058CE2'
            }
        },
        splitLine: {
            show: false
        }
    },
    series: [{
            name: '人员',
            type: 'line',
            yAxisIndex: 0,
            showAllSymbol: true,
            data: [11, 26, 17, 78, 32, 32, 0, 16, 10, 8, 0, 5, 0, 11, 5, 17, 23, 24, 22, 24, 29, 28, 28, 25, 27, 25, 29, 24, 18, "0"],
            label: {
                normal: {
                    show: false
                    /*position: 'inner'*/
                }
            },
            lineStyle: {
                width: 3
            },
            itemStyle: {
                //通常情况下：
                normal: {
                    label: {
                        show: true,
                        position: 'top',
                        color: '#fff',
                        fontSize: 12
                    }
                }
            },
            tooltip: {
                position: "top",
                formatter: "{c}",
                backgroundColor: 'rgba(0,0,0,0.3)',
                borderColor: '#333',
                borderWidth: 0,
                padding: 2,
                textStyle: {
                    color: "#fef34d",
                },
                extraCssText: "box-shadow: 0 0 3px rgba(0, 0, 0, 0.1);font-weight:bold;"
            }
        },
        {
            name: '分包人员',
            type: 'line',
            yAxisIndex: 0,
            showAllSymbol: true,
            data: [22, 39, 22, 79, 59, 41, 0, 49, 42, 33, 0, 1, 0, 32, 30, 46, 107, 122, 117, 120, 139, 133, 121, 124, 120, 128, 140, 124, 90, "0"],
            label: {
                normal: {
                    show: false
                    /*position: 'inner'*/
                }
            },
            lineStyle: {
                width: 3
            },
            itemStyle: {
                //通常情况下：
                normal: {
                    label: {
                        show: true,
                        position: 'top',
                        color: '#fff',
                        fontSize: 12
                    }
                }
            },
            tooltip: {
                position: "top",
                formatter: "{c}",
                backgroundColor: 'rgba(255,255,255,0.7)',
                borderColor: '#333',
                borderWidth: 0,
                padding: 2,
                textStyle: {
                    color: "#fe4b4b",
                },
                extraCssText: "box-shadow: 0 0 3px rgba(255, 255, 255, 0.3);font-weight:bold;"
            }
        }
    ]
};