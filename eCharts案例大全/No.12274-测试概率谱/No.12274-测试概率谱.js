var ck = [220, 182, 191, 134];//常考
var cck = [122, 165, 122, 220];//次常考
var bck = [120, 110, 165, 122];//不常考
//以上是数据
//格式化数据
var data1 = function () {
    return ck;
};
var data2 = function () {
    var madata2 = [];
    var l = ck.length + cck.length;
    for (var i = 0; i < l; i++) {
        if (i < ck.length) {
            if (i == ck.length - 1) {
                madata2[i] = ck[i];
            } else {
                madata2[i] = '';
            }
        } else {
            madata2[i] = cck[i - ck.length];
        }
    }
    return madata2
}
var data3 = function () {
    var madata3 = [];
    var l = ck.length + cck.length + bck.length;
    for (var i = 0; i < l; i++) {
        if (i < (ck.length + cck.length)) {
            if (i == (ck.length + cck.length - 1)) {
                madata3[i] = cck[cck.length - 1];
            } else {
                madata3[i] = '';
            }
        } else {
            madata3[i] = bck[i - ck.length - cck.length];
        }
    }
    return madata3;
}

option = {
    backgroundColor: '#fff',
    title: {
        text: '测试概率谱',
        textStyle: {
            fontWeight: 'normal',
            fontSize: 16,
            color: '#333'
        },
        left: 'center',
        bottom: '25'
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            lineStyle: {
                color: 'rgba(255,255,255,0)'
            }
        },
        formatter: "{b}<br/>测试概率 {c}"
    },

    grid: {
        left: '5%',
        right: '10%',
        bottom: '30%',
        top:'15%',
        containLabel: true
    },
    xAxis: [{
        name: '知识点',
        type: 'category',
        boundaryGap: false,
        axisLine: {
            lineStyle: {
                color: '#ccc'
            }
        },
        nameTextStyle: {
            color: '#999'
        },
        axisLabel: {
            color: '#999',
            show: false
        },
        data: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l']
    }],
    yAxis: [{
        type: 'value',
        name: '测试概率',
        axisLine: {
            lineStyle: {
                color: '#ccc'
            }
        },
        nameTextStyle: {
            color: '#999'
        },
        splitLine: {
            lineStyle: {
                color: '#ebebeb'
            }
        },
        axisLabel: {
            color: '#999'
        },
    }],
    series: [{
        name: '常考',
        type: 'line',
        smooth: true,
        symbol: 'circle',
        symbolSize: 5,
        showSymbol: false,
        lineStyle: {
            normal: {
                width: 3
            }
        },
        areaStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: 'rgba(255, 153, 153, 0.8)'
                }, {
                    offset: 0.8,
                    color: 'rgba(255, 153, 153, 0)'
                }], false),
                shadowColor: 'rgba(255,255,255, 0.1)',
                shadowBlur: 10
            }
        },
        itemStyle: {
            normal: {
                color: 'rgb(255,102,127)',
                borderColor: 'rgba(255,102,127,0.3)',
                borderWidth: 12

            }
        },
        data: data1()
    }, {
        name: '次常考',
        type: 'line',
        smooth: true,
        symbol: 'circle',
        symbolSize: 5,
        showSymbol: false,
        lineStyle: {
            normal: {
                width: 3
            }
        },
        areaStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: 'rgba(123, 212, 116, 0.8)'
                }, {
                    offset: 0.8,
                    color: 'rgba(123, 212, 116, 0)'
                }], false),
                shadowColor: 'rgba(255,255, 255, 0.1)',
                shadowBlur: 10
            }
        },
        itemStyle: {
            normal: {
                color: 'rgb(63, 204, 116)',
                borderColor: 'rgba(63, 204, 116, 0.3)',
                borderWidth: 12

            }
        },
        data: data2()
    }, {
        name: '不常考',
        type: 'line',
        smooth: true,
        symbol: 'circle',
        symbolSize: 5,
        showSymbol: false,
        lineStyle: {
            normal: {
                width: 3
            }
        },
        areaStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: 'rgba(255, 204, 138, 0.8)'
                }, {
                    offset: 0.8,
                    color: 'rgba(255, 204, 138, 0)'
                }], false),
                shadowColor: 'rgba(255, 255, 255, 0.1)',
                shadowBlur: 10
            }
        },
        itemStyle: {
            normal: {

                color: 'rgb(253, 149, 0)',
                borderColor: 'rgba(253,149,0,0.3)',
                borderWidth: 12
            }
        },
        data: data3()
    }, ]
};