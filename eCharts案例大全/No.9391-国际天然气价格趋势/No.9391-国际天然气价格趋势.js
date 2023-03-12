var base = +new Date(2018,11,31);
var oneDay = 24 * 3600 * 1000;
var date = [];

for (var i = 1; i < 300; i++) {
    var now = new Date(base += oneDay);
    date.push([now.getFullYear(), now.getMonth()+1, now.getDate()].join('-'));
}

option = {
    backgroundColor: '#394056',
    title: {
        text: '国际天然气价格',
        textStyle: {
            fontWeight: 'normal',
            fontSize: 16,
            color: '#F1F1F3'
        },
        left: '2%'
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            lineStyle: {
                color: '#57617B'
            }
        }
    },
    legend: {
        icon: 'rect',
        itemWidth: 14,
        itemHeight: 5,
        itemGap: 13,
        data: ['NBP价格','HH价格'],
        right: '4%',
        textStyle: {
            fontSize: 12,
            color: '#F1F1F3'
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: 95,
        containLabel: true
    },
    xAxis: [{
        type: 'category',
        name: '日期',
        nameLocation: 'end',
        nameTextStyle: {
            padding: [80, 4, 5, -50],
        },
        boundaryGap: false,
        axisLine: {
            lineStyle: {
                color: '#57617B'
            }
        },
        data: date
        //data: ['2017-12-01', '2017-12-02', '2017-12-03', '2017-12-04', '2017-12-05', '2017-12-06', '2017-12-07', '2017-12-08', '2017-12-09', '2017-12-10', '2017-12-11', '2017-12-12', '2017-12-13', '2017-12-14', '2017-12-15', '2017-12-16', '2017-12-17', '2017-12-18', '2017-12-19', '2017-12-20', '2017-12-21', '2017-12-22', '2017-12-23', '2017-12-24', '2017-12-25', '2017-12-26', '2017-12-27', '2017-12-28', '2017-12-29', '2017-12-30', '2017-12-31']
    }], //{
    //axisPointer: {
    //show: false
    //},
    // axisLine: {
    //lineStyle: {
    //color: '#57617B'
    //}
    // },
    //axisTick: {
    //show: false
    //},

    //position: 'bottom',
    //offset: 20,
    //data: ['', '', '', '', '', '', '', '', '', '', '日期']
    //}],
    yAxis: [{
        type: 'value',
        name: '单位（立方米）',
        axisTick: {
            show: false
        },
        axisLine: {
            lineStyle: {
                color: '#57617B'
            }
        },
        axisLabel: {
            margin: 10,
            textStyle: {
                fontSize: 14
            }
        },
        splitLine: {
            lineStyle: {
                color: '#57617B'
            }
        }
    }],

    dataZoom: [{
        show: true,
        height: 30,
        xAxisIndex: 0,
        bottom: 30,
        start: 30,
        end: 80,
        handleIcon: 'path://M306.1,413c0,2.2-1.8,4-4,4h-59.8c-2.2,0-4-1.8-4-4V200.8c0-2.2,1.8-4,4-4h59.8c2.2,0,4,1.8,4,4V413z',
        handleSize: '110%',
        handleStyle: {
            color: "#d3dee5"
        },
        textStyle: {
            color: "#fff"
        },
        borderColor: "#90979c"
    }, {
        type: "inside",
        show: true,
        height: 15,
        start: 1,
        end: 35
    }],

    series: [{
        name: 'NBP价格',
        type: 'line',
        smooth: true,
        symbol: 'circle',
        symbolSize: 5,
        showSymbol: false,
        lineStyle: {
            normal: {
                width: 1
            }
        },
        areaStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: 'rgba(137, 189, 27, 0.3)'
                }, {
                    offset: 0.8,
                    color: 'rgba(137, 189, 27, 0)'
                }], false),
                shadowColor: 'rgba(0, 0, 0, 0.1)',
                shadowBlur: 10
            }
        },
        itemStyle: {
            normal: {
                color: 'rgb(137,189,27)',
                borderColor: 'rgba(137,189,2,0.27)',
                borderWidth: 12

            }
        },
        data: [2.94,2.958,2.945,3.044,2.944,2.967,2.984,2.969,3.099,3.591,3.501,3.384,3.413,3.482,3.482,3.04]
    }, {
        name: 'HH价格',
        type: 'line',
        smooth: true,
        symbol: 'circle',
        symbolSize: 5,
        showSymbol: false,
        lineStyle: {
            normal: {
                width: 1
            }
        },
        areaStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: 'rgba(0, 136, 212, 0.3)'
                }, {
                    offset: 0.8,
                    color: 'rgba(0, 136, 212, 0)'
                }], false),
                shadowColor: 'rgba(0, 0, 0, 0.1)',
                shadowBlur: 10
            }
        },
        itemStyle: {
            normal: {
                color: 'rgb(0,136,212)',
                borderColor: 'rgba(0,136,212,0.2)',
                borderWidth: 12

            }
        },
        data: [7.84,7.84,7.81,8.09,7.57,7.72,7.68,7.63,7.88,7.63,7.79,7.75,8.18,7.96]
    },]
};