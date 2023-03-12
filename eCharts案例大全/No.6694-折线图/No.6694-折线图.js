var data = {"text":"综评 (分)","xAxis":["2019-01","2019-02","2019-03","2019-04","2019-05","2019-06","2019-07","2019-08","2019-09","2019-10","2019-11","2019-12"],"data":[81,88,86,10,20,30,40,50,70,45,60,55]};

function min(array) {
    var min = array[0];
    var len = array.length;
    for (var i = 1; i < len; i++) {
        if ((array[i] && array[i] < min) || array[i] == 0 && array[i] < min) {
            min = array[i];
        }
    }
    return min;
}

function max(array) {
    var max = array[0];
    var len = array.length;
    for (var i = 0; i < len; i++) {
        if ((array[i] && array[i] > max) || array[i] == 0 && array[i] > max) {
            max = array[i];
        }
    }
    return max;
}

var minarr = Number(min(data)),
    maxarr = Number(max(data)),
    min, max;
min = minarr / 1.2, max = maxarr * 1.2;

var option = {
    backgroundColor: "#FFFFFF",
    title: {
        show: false,
        text: "",
        textStyle: {
            color: "#222222",
            fontSize: 12,
            fontWeight: "normal"
        },
        top: "0",
        left: "0%"
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            lineStyle: {
                color: '#999999'
            }
        }
    },
    legend: {
        icon: 'rect',
        itemWidth: 14,
        itemHeight: 5,
        itemGap: 10,
        data: ['新增'],
        right: '10px',
        top: '0px',
        show: false,
        textStyle: {
            fontSize: 12,
            color: '#fff'
        }
    },
    grid: {
        top: '2%',
        left: '3%',
        right: '3%',
        bottom: '6%',
        containLabel: true
    },
    xAxis: [{
        type: 'category',
        boundaryGap: false,
        axisLine: {
            lineStyle: {
                color: '#E7E7E7'
            }
        },
        axisLabel: {
            textStyle: {
                color: '#999999'
            }
        },
        data: data.xAxis
    }],
    yAxis: [{
        type: 'value',
        axisTick: {
            show: false
        },
        axisLine: {
            lineStyle: {
                color: '#E7E7E7'
            }
        },
        axisLabel: {
            margin: 10,
            textStyle: {
                fontSize: 12
            },
            textStyle: {
                color: '#999999'
            },
            formatter: '{value}'
        },
        splitLine: {
            lineStyle: {
                color: '#E7E7E7'
            }
        },
        min: min.toFixed(0) < 10 ? 0 : min.toFixed(0),
        max: max.toFixed(0) < 10 ? 10 : max.toFixed(0)
    },{
                    type: 'value',
                    position: 'right',
                    axisTick: {
                      show: false
                    },
                    axisLine: {
                      lineStyle: {
                        color: '#E7E7E7'
                      }
                    },
                  }],
    series: [{
        name: '新增',
        type: 'line',
        smooth: true,
        lineStyle: {
            normal: {
                width: 3
            }
        },
        yAxisIndex: 0,
        symbolSize: 10,
        symbol: 'emptyCircle',
        areaStyle: {
            normal: {
                color: echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0.5,
                    color: 'rgba(75, 126, 255, 0.4)'
                }, {
                    offset: 1,
                    color: 'rgba(75, 126, 255, 0)'
                }], false),
                shadowColor: 'rgba(0, 0, 0, 0.1)',
                shadowBlur: 10
            }
        },
        itemStyle: {
            normal: {
                color: '#4783F1'
            }
        },
        data: data.data
    }]
};