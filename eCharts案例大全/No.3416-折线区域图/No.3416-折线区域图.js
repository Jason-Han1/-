 // 绘制图表
    let dataIPSxAxis = [
        "00:00",
        "01:00",
        "02:00",
        "03:00",
        "04:00",
        "05:00",
        "06:00",
        "07:00",
        "08:00",
        "09:00",
        "10:00",
        "11:00",
        '12:00',
        "13:00",
        "14:00",
        "15:00",
        "16:00",
        "17:00",
        "18:00",
        "19:00",
        "20:00",
        "21:00",
        "22:00",
        "23:00",
        "24:00",
    ];
    let dataIPS = [25, 50, 60, 10, 30, 40, 75,100,30,40,10,5,3,20,40,30,40,10];
     option = {
        backgroundColor:'black',
        title: {
            textStyle: {
                fontSize: 12,
                fontWeight: "normal",
                color: "#99c8e7" //标题颜色
            },
            left: "0%"
        },
        tooltip: {
            trigger: "axis",
            axisPointer: {
                type: "cross",
                label: {
                    backgroundColor: "#6a7985"
                }
            }
        },
        visualMap: {
            type: 'piecewise',
            show: false,
            dimension: 0,
            seriesIndex: 0,
            pieces: [{
                gt: 3,
                lt: 10,
                color: 'rgba(92, 152, 222, 0.87)',
                 normal: {
                        //颜色渐变函数 前四个参数分别表示四个位置依次为左、下、右、上
                        color: new echarts.graphic.LinearGradient(
                            0,
                            0,
                            0,
                            1,
                            [
                                {
                                    offset: 0,
                                    color: "rgba(28,204,255,0.5)" // 0% 处的颜色
                                },
                                {
                                    offset: 0.5,
                                    color: "rgba(28,204,255,0.3)" // 100% 处的颜色
                                },
                                {
                                    offset: 1,
                                    color: "transparent" // 100% 处的颜色
                                }
                            ]
                        ) //背景渐变色
                    }

            }]
        },
        grid: {
            left: "5%",
            top: "5%",
            right: "6%",
            bottom: "15%",
            containLabel: true
        },
        xAxis: [
            {
                type: "category",
                boundaryGap: false,
                axisLine: {
                    show: false,
                },
                data: dataIPSxAxis,
                axisTick: {
                    show: false
                },
                axisLabel: {
                    show: true,
                    textStyle: {
                        color: '#ffffff',
                        fontSize: 12,
                    },
                }
            }
        ],
        yAxis: [
            {
                axisLine: {
                    show: false,
                    lineStyle: {
                        color: "#FFFFFF",
                        width: 1 //这里是为了突出显示加上的
                    }
                },
                axisTick: {
                    show: false
                },
                splitLine: {
                    //保留网格线
                    show: true,
                    lineStyle: {
                        //y轴网格线设置
                        color: "rgba(255, 255, 255, 0.2)",
                        width: 1,
                        type: "dashed"
                    }
                }
            }
        ],
        series: [
            {
                //  name: '流量 （M）',
                type: "line",
                smooth: true,
                symbol: "none", //去掉折线点
                stack: 100,
                itemStyle: {
                    color: "#1cccff",
                    emphasis: {
                        color: "#1cccff"
                    }
                },
                markLine: {
                    silent: true,
                    symbol: ["none", "triangle"],
                    symbolSize: 5,
                    lineStyle: {
                        color: "#208de8"
                    },
                    label: {
                        show: false
                    },
                    data: [
                        {
                            yAxis: 10000
                        },
                        {
                            yAxis: 20000
                        },
                        {
                            yAxis: 30000
                        },
                        {
                            yAxis: 40000
                        }
                    ]
                },
                lineStyle: {
                    // 系列级个性化折线样式
                    width: 2,
                    type: "solid",
                    color: "#1cccff"
                },
                areaStyle: {},
                data: dataIPS
            }
        ]
    };