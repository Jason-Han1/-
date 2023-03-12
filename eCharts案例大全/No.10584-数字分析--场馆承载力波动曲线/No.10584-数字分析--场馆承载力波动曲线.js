var fontColor = '#30eee9';
var xdata = ['B4', 'B3', 'C4', 'A1', 'E2', 'C1', 'D1', 'A3', 'E3', 'A2', 'D2', 'C2', 'D3', 'D4', 'B2', 'A4', 'C3', 'E1', 'B1']; //x轴
var dataArr = [4000, 4200, 3800, 3500, 4100, 4150, 4800, 4000, 3200, 3600, 3200, 3100, 4700, 3500, 4600, 4500, 3900, 4700, 3400];; //value
var dashedArr = [4000, 4000, 4000, 4000, 4000, 4000, 4000, 4000, 4000, 4000, 4000, 4000, 4000, 4000, 4000, 4000, 4000, 4000, 4000]
var titleName = '预期值';
var titleNames = '各馆实际承载力';
option = {
    backgroundColor: '#11183c',
    grid: {
        left: "5%",
        //   right: "2%",
        bottom: "20%",
        top: "15%",
        containLabel: true
    },
    legend: {
        show: true,
        x: 750,
        y: 50,
        textStyle: {
            color: '#fff', // 图例文字颜色
            fontSize: 16,
        }
    },
    xAxis: {
        type: "category",
        boundaryGap: false,
        data: xdata,
        axisLabel: {
            show: true,
            textStyle: {
                color: "#fff"
            }
        },
        axisLine: {
            lineStyle: {
                color: 'transparent',
                width: 2 //这里是为了突出显示加上的
            }
        }
    },
    tooltip: {
        show: true,
        trigger: 'item'
    },
    yAxis: [{
        type: 'value',
        // name: '立方米',
        min: 0,
        max: 6000,
        axisLabel: {
            formatter: '{value}',
            textStyle: {
                color: '#2ad1d2'
            }
        },
        axisLine: {
            lineStyle: {
                color: 'transparent',
                width: 2 //这里是为了突出显示加上的
            }
        },
        axisTick: {
            show: false,
        },
        splitLine: {
            show: true,
            lineStyle: {
                color: '#11366e'
            }
        }
    }],
    series: [{
            name: titleName,
            type: 'line',
            smooth: true,
            // symbol: "circle", //拐点的形状
            // symbolSize: 10,
            symbol: "none",
            itemStyle: {
                normal: {
                    lineStyle: {
                        type: 'dashed',
                        //折点的颜色
                        // color: "#00a2e6"
                    },
                    color: "#01F699", //拐点的颜色
                    borderColor: "#01F699" //拐点边框的颜色
                }
            },
            data: dashedArr
        },
        {
            name: titleNames,
            type: 'line',
            stack: '总量',
            symbol: 'circle',
            symbolSize: 8,
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                        offset: 0,
                        // color: 'rgba(84,91,255,1)',
                        color: 'rgba(3,191,255,1)'
                    }, {
                        offset: 1,
                        color: 'rgba(18,93,236,1)'
                    }]),
                    areaStyle: {
                        //color: '#94C9EC'
                        color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                            offset: 0,
                            color: 'rgba(3,191,255,.3)'
                        }, {
                            offset: 1,
                            color: 'rgba(18,93,236,.3)'
                        }]),
                    }
                },
                emphasis: {
                    color: 'rgb(0,196,132)',
                    borderColor: 'rgba(0,196,132,0.2)',
                    extraCssText: 'box-shadow: 8px 8px 8px rgba(0, 0, 0, 1);',
                    // borderWidth: 10
                }

            },
            markPoint: {
                itemStyle: {
                    normal: {
                        color: 'red'
                    }
                }
            },
            data: dataArr
        },
    ]
};