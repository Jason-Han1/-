var getxfpc = ['', '月均就餐消费频次', '月均超市消费频次']; //消费频次
var getxfpcgr = [0, 41, 36]; //消费频次-个人
var getxfpcqx = [0, 51, 62]; //消费频次-全校

var getxfje = ['月均就餐金额', '月均超市消费金额']; //消费金额
var getxfjegr = [253, 271]; //消费金额-个人
var getxfjeqx = [252, 269]; //消费金额-全校

function calMax(arr) {
    let max = 0;
    arr.forEach((el) => {
        el.forEach((el1) => {
            if (!(el1 === undefined || el1 === '')) {
                if (max < el1) {
                    max = el1;
                }
            }
        })
    })
    let maxint = Math.ceil(max / 9.5);
    //不让最高的值超过最上面的刻度    
    let maxval = maxint * 10;
    //让显示的刻度是整数    
    return maxval;
}


var maxpcgr = calMax([getxfpcgr]),
    maxpcqx = calMax([getxfpcqx]),
    maxjegr = calMax([getxfjegr]),
    maxjeqx = calMax([getxfjeqx]);

if (maxpcgr > maxpcqx) {
    var max1 = maxpcgr
} else {
    var max1 = maxpcqx;
}

if (maxjegr > maxjeqx) {
    var max2 = maxjegr
} else {
    var max2 = maxjeqx;
}

option = {
    grid: [{
        top: '20%', //上边距
        right: '10%', //右边距
        left: '25%', //左边距
        bottom: '41%' //下边距
    }, {
        top: '59%', //上边距
        right: '10%', //右边距
        left: '25%', //左边距
        bottom: '15%' //下边距
    }],
    tooltip: {
        trigger: 'item',
        axisPointer: {
            type: 'none'
        }
    },
    legend: {
        data: ["个人值", "学校均值"],
        right: "6%",
        textStyle: {
            color: "#999999",
            fontSize: 12
        },
        icon: "circle",
        itemWidth: 8, // 设置宽度
        itemHeight: 8, // 设置高度
        itemGap: 15 // 设置间距
    },
    xAxis: [{
        name: '(次)',
        nameLocation: 'start',
        nameTextStyle: {
            padding: [0, 0, 30, 0],
            color: "#999"
        },
        min: 0,
        max: max1, // 计算最大值
        interval: (max1 - 0) / 5, //  平均分为5份
        splitNumber: 6,
        type: 'value',
        gridIndex: 0,
        position: 'top',
        axisLabel: {
            margin: 10,
            color: '#999',
            textStyle: {
                fontSize: 12
            },
        },
        splitLine: {
            show: true,
            lineStyle: {
                type: 'dashed',
                color: '#D1D1D1'
            }
        },
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },

    }, {
        name: '(元)',
        nameLocation: 'start',
        nameTextStyle: {
            padding: [0, 0, -30, 0],
            color: "#999"
        },
        min: 0,
        max: max2, // 计算最大值
        interval: (max2 - 0) / 5, //  平均分为5份
        splitNumber: 6,
        gridIndex: 1,
        type: 'value',
        axisLabel: {
            margin: 10,
            color: '#999',
            textStyle: {
                fontSize: 12
            },
        },
        splitLine: {
            show: true,
            lineStyle: {
                type: 'dashed',
                color: '#D1D1D1'
            }
        },
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },

    }],
    yAxis: [{
        type: 'category',
        gridIndex: 0,
        data: getxfpc,
        axisLabel: {
            margin: 10,
            color: '#666666',
            textStyle: {
                fontSize: 12
            },
        },
        axisLine: {
            lineStyle: {
                color: '#D1D1D1'
            }
        },
        axisTick: {
            show: false
        },

    }, {
        type: 'category',
        gridIndex: 1,
        data: getxfje,
        position: 'left',
        axisLabel: {
            margin: 10,
            color: '#666666',
            textStyle: {
                fontSize: 12,
            },
        },
        axisLine: {
            lineStyle: {
                color: '#D1D1D1'
            }
        },
        axisTick: {
            show: false
        },
    }],
    series: [{
            name: '个人值',
            type: 'bar',
            data: getxfpcgr,
            barWidth: '10px',
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                        offset: 0,
                        color: '#2E64EF' // 0% 处的颜色
                    }, {
                        offset: 1,
                        color: '#6D9BFF' // 100% 处的颜色
                    }], false),
                    barBorderRadius: [0, 45, 45, 0],
                }
            },
        },
        {
            name: '学校均值',
            type: 'bar',
            data: getxfpcqx,
            barWidth: '10px',
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                        offset: 0,
                        color: '#FF9F6B' // 0% 处的颜色
                    }, {
                        offset: 1,
                        color: '#FEC25A' // 100% 处的颜色
                    }], false),
                    barBorderRadius: [0, 45, 45, 0],
                }
            },
            barGap: 0.2,
        },
        {
            name: '个人值',
            type: 'bar',
            xAxisIndex: 1,
            yAxisIndex: 1,
            data: getxfjegr,
            barWidth: '10px',
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                        offset: 0,
                        color: '#2E64EF' // 0% 处的颜色
                    }, {
                        offset: 1,
                        color: '#6D9BFF' // 100% 处的颜色
                    }], false),
                    barBorderRadius: [0, 45, 45, 0],
                }
            },
        },
        {
            name: '学校均值',
            type: 'bar',
            xAxisIndex: 1,
            yAxisIndex: 1,
            data: getxfjeqx,
            barWidth: '10px',
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                        offset: 0,
                        color: '#FF9F6B' // 0% 处的颜色
                    }, {
                        offset: 1,
                        color: '#FEC25A' // 100% 处的颜色
                    }], false),
                    barBorderRadius: [0, 45, 45, 0],
                }
            },
            barGap: 0.2,
        }
    ]
};