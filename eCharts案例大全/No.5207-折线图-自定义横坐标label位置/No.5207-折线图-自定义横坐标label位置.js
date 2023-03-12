const xAxisData = ["2020-05-11", "2020-05-12", "2020-05-13", "2020-05-14", "2020-05-15", "2020-05-16", "2020-05-17", "2020-05-18", "2020-05-19", "2020-05-20", "2020-05-21", "2020-05-22", "2020-05-23", "2020-05-24", "2020-05-25", "2020-05-26", "2020-05-27", "2020-05-28", "2020-05-29", "2020-05-30", "2020-05-31", "2020-06-01", "2020-06-02", "2020-06-03", "2020-06-04", "2020-06-05", "2020-06-06", "2020-06-07", "2020-06-08", "2020-06-09", "2020-06-10"]
option = {
    backgroundColor: '#fff',
     animation: false,
     calculable: true,
    grid: {
        left: 0,
        top: 10,
        bottom: 0,
        right: 2,
        containLabel: true
    },
    textStyle: {
        fontFamily: this.fontFamily,
        fontSize: 12
    },
    xAxis: [{
            type: 'category',
            data: xAxisData,
            axisTick: {
                show: false
            },
            axisLine: {
                lineStyle: {
                    color: '#eee'
                }
            },
            axisLabel: {
                color: '#A5A5A5',
                fontSize: 12,
                interval: function(index, value) {
                    if (index === 0) {
                        return true
                    }
                    if (index === Math.round(xAxisData.length / 2)) {
                        return true
                    }
                    if (index === xAxisData.length - 1) {
                        return true
                    }
                },
                formatter: function(value, index) {
                    let label = value
                    if (index === 0) {
                        label = `{s|${value}}`
                    }
                    if (index === xAxisData.length - 1) {
                        label = `{e|${value}}`
                    }

                    return label
                },
                rich: {
                    s: {
                        padding: [0, 0, 0, 45]
                    },
                    e: {
                        padding: [0, 0, 0, -45]
                    }
                }
            }
        },
         {
            type: 'category',

            axisLine: {
              onZero: false,
              lineStyle: {
                color: '#eee',
                width: 1
              }
            }
          }
    ],
    yAxis: [{
            type: 'value',
            axisTick: {
                show: false
            },
            axisLine: {
                lineStyle: {
                    color: '#eee'
                }
            },
            axisLabel: {
                color: '#A5A5A5',
                fontSize: 12
            },
            splitLine: {
                lineStyle: {
                    width: 1,
                    type: 'dashed'
                }
            }
        },
        {
            type: 'value',
            axisLine: {
                show: true,
                lineStyle: {
                     width: 1,
                    color: '#eee'
                }
            }
        }
    ],
    series: {
        name: '白起',
        xAxisIndex: 0,
        yAxisIndex: 0,
        data: [43, 58, 195, 229, 320, 211, 124, 131, 124, 360, 124, 78, 160, 604, 17, 0, 0, 0, 2, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        type: 'line',
        showSymbol: false,
        lineStyle: {
            color: '#3076FF',
            width: 3
        }
    }
}