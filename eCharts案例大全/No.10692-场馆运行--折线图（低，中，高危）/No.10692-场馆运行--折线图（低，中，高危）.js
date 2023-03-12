var xdata =['06.20', '06.21', '06.22', '06.23', '06.24', '06.25', '06.26', ];
var legendData= ['低危', '中危', '高危'];
var dataArr = [50.3, 24.4, 35.5, 45.6, 40.1, 58.8, 60, ];
var dataArr2 =  [55.3, 28.4, 35.5, 15.6, 20.1, 38.8, 40, ];
var dataArr3 = [50.3, 54.4, 45.5, 45.6, 20.1, 18.8, 0, ];
option = {
    backgroundColor: '#394056',
    title: {
        // text: '航线上座率分析',
        textStyle: {
            fontWeight: 'normal',
            fontSize: 16,
            color: '#F1F1F3'
        },
        left: '6%'
    },
    tooltip: {
        trigger: "axis",
        axisPointer: {
            lineStyle: {
                color: '#57617B'
            }
        },
        formatter: function(params) {
            return params[0].name + "<br>" + params[0].seriesName + ":" + params[0].data + '%' + "<br>" +
                params[1].name + "<br>" + params[1].seriesName + ":" + params[1].data + '%' + "<br>" +
                params[2].name + "<br>" + params[2].seriesName + ":" + params[2].data + '%'
        }
    },
    legend: {
        icon: 'rect',
        itemWidth: 14,
        itemHeight: 5,
        itemGap: 13,
        data:legendData,
        right: '4%',
        textStyle: {
            fontSize: 16,
            color: '#F1F1F3'
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: [{
        type: "category",
        boundaryGap: false,
        axisLabel: {
            show: true,
            textStyle: {
                color: "#fff",
                fontSize: 14
            }
        },
        axisLine: {
            lineStyle: {
                color: 'transparent',
                width: 2, //这里是为了突出显示加上的

            }
        },
        data: xdata
    }],
    yAxis: [{
        type: 'value',
        axisTick: {
            show: false
        },
        axisLabel: {
            margin: 10,
            textStyle: {
                fontSize: 14,
                color: "#02E3FF"
            },
            formatter: '{value} %'
        },
        splitLine: {
            lineStyle: {
                color: '#57617B'
                //  color: 'transparent',
            }
        },
        axisLine: {
            lineStyle: {
                //   color: "#283054",
                color: 'transparent',
                width: 2 //这里是为了突出显示加上的
            }
        },
        splitArea: {
            show: true,
            areaStyle: {
                color: ["rgba(255,255,255,0.03)", "rgba(255,255,255,0.03)"]
            }
        }
    }],
    series: [{
        name: legendData[0],
        type: 'line',
        // smooth: true,
        lineStyle: {
            normal: {
                width: 1
            }
        },
        areaStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: 'rgba(1, 66, 254, 0.3)'
                }, {
                    offset: 0.8,
                    color: 'rgba(1, 66, 254, 0)'
                }], false),
                shadowColor: 'rgba(0, 0, 0, 0.1)',
                shadowBlur: 10
            }
        },
        itemStyle: {
            normal: {
                color: 'rgb(1,66,254)'
            }
        },
        data:dataArr
    }, {
        name: legendData[1],
        type: 'line',
        // smooth: true,
        lineStyle: {
            normal: {
                width: 1
            }
        },
        areaStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: 'rgba(0,251,135, 0.3)'
                }, {
                    offset: 0.8,
                    color: 'rgba(0,251,135, 0)'
                }], false),
                shadowColor: 'rgba(0, 0, 0, 0.1)',
                shadowBlur: 10
            }
        },
        itemStyle: {
            normal: {
                color: 'rgb(0,251,135)'
            }
        },
        data:dataArr2
    }, {
        name: legendData[2],
        type: 'line',
        // smooth: true,
        lineStyle: {
            normal: {
                width: 1
            }
        },
        areaStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: 'rgba(131,0,254, 0.3)'
                }, {
                    offset: 0.8,
                    color: 'rgba(131,0,254, 0)'
                }], false),
                shadowColor: 'rgba(0, 0, 0, 0.1)',
                shadowBlur: 10
            }
        },
        itemStyle: {
            normal: {
                color: 'rgb(131,0,254)'
            }
        },
        data:dataArr3
    }, ]
};