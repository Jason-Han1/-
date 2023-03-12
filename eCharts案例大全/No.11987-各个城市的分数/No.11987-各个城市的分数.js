var year = [2015, 2016, 2017, 2018, 2019]
var data = [
    [50, 60, 77, 88, 44],
    [88, 77, 88, 44, 60],
    [44,50, 60, 77, 88]
]
option = {
    backgroundColor: "#fff",
    title: {
        text: '',
        left: '50%',
        textAlign: 'center'
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            lineStyle: {
                color: '#ddd'
            }
        },
        backgroundColor: 'rgba(255,255,255,1)',
        padding: [5, 10],
        textStyle: {
            color: '#7588E4',
        },
        extraCssText: 'box-shadow: 0 0 5px rgba(0,0,0,0.3)'
    },
    xAxis: {
        type: 'category',
        data: year,
        boundaryGap: false,

        axisTick: {
            show: false
        },
        axisLine: {
            show: true,
            lineStyle: {
                color: '#ccc'
            }
        },
        axisLabel: {
            textStyle: {
                color: '#000'
            }
        },
        splitLine: {
            show: true
        }
    },
    yAxis: {
        offset: 50,
        type: 'value',
        axisTick: {
            show: false
        },
        axisLine: {
            show: false,
        },
        splitLine: {
            show: true,
            lineStyle: {
                color: '#f5f5f5'
            }
        }
    },
    series: [{
        name: '嘉兴市',
        type: 'line',
        smooth: true,
        showSymbol: false,
        symbol: 'circle',
        symbolSize: 6,
        data: data[0],
        markLine: { //数据标准线
            data: [{
                name: '标准值为90', //数值名称
                yAxis: 90 //数值大小
            }, ],
            label: {
                normal: {
                    show: false //是否显示数值
                }
            },
            lineStyle: {
                normal: {
                    color: '#ea4548', //标准线颜色
                    width: 2 //标准线宽度
                }
            },
        },
        itemStyle: {
            normal: {
                color: '#f7b851'
            }
        },
        lineStyle: {
            normal: {
                width: 3
            }
        }
    }, {
        name: '湖州市',
        type: 'line',
        smooth: true,
        showSymbol: false,
        symbol: 'circle',
        symbolSize: 6,
        data: data[1],
        markLine: { //数据标准线
            data: [{
                name: '标准值为90', //数值名称
                yAxis: 90 //数值大小
            }, ],
            label: {
                normal: {
                    show: false //是否显示数值
                }
            },
            lineStyle: {
                normal: {
                    color: '#ea4548', //标准线颜色
                    width: 2 //标准线宽度
                }
            },
        },
        itemStyle: {
            normal: {
                color: '#f7b851'
            }
        },
        lineStyle: {
            normal: {
                width: 3
            }
        }
    }]
};