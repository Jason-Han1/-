var xdata = ['B4', 'B3', 'C4', 'A1', 'E2', 'C1', 'D1', 'A3', 'E3', 'A2', 'D2', 'C2', 'D3', 'D4', 'B2', 'A4', 'C3', 'E1', 'B1']; //x轴
var dataArr = [4000, 4200, 3800, 3500, 4100, 4150, 4800, 4000, 3200, 3600, 3200, 3100, 4700, 3500, 4600, 4500, 3900, 4700, 3400];; //value
var dashedArr = [4000, 4000, 4000, 4000, 4000, 4000, 4000, 4000, 4000, 4000, 4000, 4000, 4000, 4000, 4000, 4000, 4000, 4000, 4000]
var titleName = '预期值';
var titleNames = '各馆实际承载力';
option = {
    backgroundColor: '#11183c',
    grid: {
        left: "5%",
        bottom: "10%",
        top: "18%",
        containLabel: true
    },
    tooltip: {
        trigger: "axis",
        axisPointer: {
            type: "shadow",
        }
    },
    legend: {
        show: true,
        x: 'center',
        y: 60,
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
    yAxis: [{
        type: 'value',
        name: '立方米',
        nameTextStyle: {
            color: '#fff',

        },
        min: 0,
        max: 6000,
        axisLabel: {
            formatter: '{value}',
            textStyle: {
                color: '#fff',
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
            symbol: "none",
            itemStyle: {
                normal: {
                    lineStyle: {
                        type: 'dashed',
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
            smooth: true, //平滑曲线显示
            symbol: "circle", //标记的图形为实心圆
            symbolSize: 8,
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                        offset: 0,
                        color: 'rgba(3,191,255,1)'
                    }, {
                        offset: 1,
                        color: 'rgba(18,93,236,1)'
                    }]),
                    areaStyle: {
                        color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                            offset: 0,
                            color: 'rgba(3,191,255,.3)'
                        }, {
                            offset: 1,
                            color: 'rgba(18,93,236,.3)'
                        }]),
                    }
                },
            },
            data: dataArr
        },
    ]
};