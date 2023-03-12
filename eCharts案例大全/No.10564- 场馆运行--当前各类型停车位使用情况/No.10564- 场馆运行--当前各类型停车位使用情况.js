var arr = [81, 101, 50, 67, 77, 80, ];
var arrMonth = ['小型车', '中型车', '大型车', '货车', '特种车', '贵宾车'];
var realValue = [8, 15, 100, 23, 56, 78];
var index = 0;
var legendData = ['空余车位', '已使用车位'];
// 指定图表的配置项和数据
var option = {
    backgroundColor: '#0E2A43',
    grid: {
        left: '3%',
        right: '4%',
        bottom: '10%',
        containLabel: true
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    legend: {
        data: legendData,
        textStyle: {
            color: '#fff',
            fontSize: 16
        },
        x: 850,
        y: 20
    },
    yAxis: {
        type: 'value',
        axisLine: {
            show: false,
            lineStyle: {
                color: '#65F5FD',
            }
        },
        splitLine: {
            lineStyle: {
                type: 'dashed',
                color: '#385B71'
            }
        },
        axisTick: {
            show: false
        },
    },
    xAxis: [{
        type: 'category',
        axisLine: {
            lineStyle: {
                color: '#00A2FF',
                width: 2
            },
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            textStyle: {
                fontSize: 14,
                color: '#fff'
            }
        },
        data: arrMonth
    }, {
        type: 'category',
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            show: false
        },
        splitArea: {
            show: false
        },
        splitLine: {
            show: false
        },
        data: arrMonth
    }, ],
    series: [{
            name: legendData[1],
            type: 'bar',
            label: {
                normal: {
                    show: false,
                    position: 'top',
                    padding: 10,
                    color: 'red',
                    fontSize: 10,
                    /* formatter: '{c}%' */
                }
            },
            xAxisIndex: 1,

            itemStyle: {
                normal: {
                    show: true,
                    color: '#2E3C6D',
                    /* barBorderRadius: 50, */
                    borderWidth: 0,
                    borderColor: '#333',
                }
            },
            barWidth: '50%',
            data: arr
        },
        {
            name: legendData[0],
            type: 'bar',
            itemStyle: {
                normal: {
                    show: false,
                    // color: "red",
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: '#6657F2'
                    }, {
                        offset: 1,
                        color: '#4297F4'
                    }]),
                    borderWidth: 0,
                    borderColor: '#333',
                }
            },
            label: {
                normal: {
                    show: false,
                    position: 'inside',
                    color: 'white',
                    fontSize: 10,
                    formatter: function(a) {
                        var number = 1;
                        for (var i = index; i < arr.length; i++) {
                            number = arr[i];
                            index++;
                            break;
                        }
                        var result = (a.data * 100 / number).toFixed(0) + "%";
                        return result;
                    }
                }
            },
            barWidth: '50%',
            data: realValue
        },
    ]
};