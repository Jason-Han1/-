var getzzfx = ['是否双师', '是否骨干教师', '是否教学能手']; //资质名称
var getszz = [62, 22, 75]; //有资质
var getfzz = [138, 178, 125]; //无资质


var getjxms = ['是否名师']; //教学名师
var getfjsms = [160]; //不是教学名师
var getxjjxms = [23]; //校级教学名师
var getqjjxms = [17]; //区级教学名师

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
var max = calMax([getfjsms]);

var xjjxms = "校级名师  " + getxjjxms;
var qjjxms = "区级名师  " + getqjjxms;
var jxmszs = '';
var jxmszs2 = getxjjxms[0] + getqjjxms[0];

option = {
    backgroundColor: '#093073',
    grid: [{
        top: '12%', //上边距
        right: '5%', //右边距
        left: '25%', //左边距
        bottom: '68%' //下边距
    }, {
        top: '32%', //上边距
        right: '5%', //右边距
        left: '25%', //左边距
        bottom: '8%' //下边距
    }],
    legend: {
        data: [xjjxms, qjjxms, "是", "不是"],
        right: "0%",
        textStyle: {
            color: "#fff",
            fontSize: 12
        },
        //icon: "circle", 
        itemWidth: 13, // 设置宽度
        itemHeight: 13, // 设置高度
        itemGap: 15 // 设置间距
    },
    xAxis: [{
        show: false,
        min: 0,
        max: max, // 计算最大值
        interval: (max - 0) / 5, //  平均分为5份
        splitNumber: 6,
        gridIndex: 0,
    }, {
        show: false,
        min: 0,
        max: max, // 计算最大值
        interval: (max - 0) / 5, //  平均分为5份
        splitNumber: 6,
        gridIndex: 1,
    }],
    yAxis: [{
        data: getjxms,
        gridIndex: 0,
        inverse: true,
        axisLabel: {
            margin: 10,
            color: '#fff',
            textStyle: {
                fontSize: 14
            },
        },
        axisLine: {
            lineStyle: {
                color: '#7E99BE',
            }
        },
        axisTick: {
            show: false
        },
    }, {
        data: getzzfx,
        gridIndex: 1,
        inverse: true,
        axisLabel: {
            margin: 10,
            color: '#fff',
            textStyle: {
                fontSize: 14
            },
        },
        axisLine: {
            lineStyle: {
                color: '#7E99BE',
            }
        },
        axisTick: {
            show: false
        },
    }],
    //animation: false,
    series: [{
        name: xjjxms,
        type: 'bar',
        data: getxjjxms,
        stack: '教学名师',
        barWidth: '12px',
        itemStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                    offset: 0,
                    color: '#1FB8C6' // 0% 处的颜色
                }, {
                    offset: 1,
                    color: '#77FEF9' // 100% 处的颜色
                }], false),
                barBorderRadius: [0, 0, 0, 0],
            }
        },
        label: {
            normal: {
                show: true,
                textStyle: {
                    color: '#fff',
                    fontSize: 14,
                    fontFamily: 'DINRegular',
                },
                position: 'right',
                formatter: function(data) {
                    return jxmszs;
                }
            }
        },
    }, {
        name: qjjxms,
        type: 'bar',
        data: getqjjxms,
        stack: '教学名师',
        barWidth: '12px',
        itemStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                    offset: 0,
                    color: '#3D5FDE' // 0% 处的颜色
                }, {
                    offset: 1,
                    color: '#8E5CFF' // 100% 处的颜色
                }], false),
                barBorderRadius: [0, 3, 3, 0],
            }
        },
        label: {
            normal: {
                show: true,
                textStyle: {
                    color: '#fff',
                    fontSize: 14,
                    fontFamily: 'DINRegular',
                },
                position: 'right',
                formatter: function(data) {
                    return jxmszs2;
                }
            }
        },
    }, {
        name: '不是',
        type: 'bar',
        data: getfjsms,
        barWidth: '12px',
        itemStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                    offset: 0,
                    color: '#FEAE5B' // 0% 处的颜色
                }, {
                    offset: 1,
                    color: '#FFD08B' // 100% 处的颜色
                }], false),
                barBorderRadius: [0, 3, 3, 0],
            }
        },
        label: {
            normal: {
                show: true,
                textStyle: {
                    color: '#fff',
                    fontSize: 14,
                    fontFamily: 'DINRegular',
                },
                position: 'right',
                formatter: function(data) {
                    return (getfjsms[data.dataIndex]).toFixed(0);
                }
            }
        },
    }, {
        name: '是',
        type: 'bar',
        data: getszz,
        barWidth: '12px',
        xAxisIndex: 1,
        yAxisIndex: 1,
        itemStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                    offset: 0,
                    color: '#3D90DE' // 0% 处的颜色
                }, {
                    offset: 1,
                    color: '#5CEAFF' // 100% 处的颜色
                }], false),
                barBorderRadius: [0, 3, 3, 0],
            }
        },
        label: {
            normal: {
                show: true,
                textStyle: {
                    color: '#fff',
                    fontSize: 14,
                    fontFamily: 'DINRegular',
                },
                position: 'right',
                formatter: function(data) {
                    return (getszz[data.dataIndex]).toFixed(0);
                }
            }
        },
    }, {
        name: '不是',
        type: 'bar',
        data: getfzz,
        barWidth: '12px',
        xAxisIndex: 1,
        yAxisIndex: 1,
        itemStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                    offset: 0,
                    color: '#FEAE5B' // 0% 处的颜色
                }, {
                    offset: 1,
                    color: '#FFD08B' // 100% 处的颜色
                }], false),
                barBorderRadius: [0, 3, 3, 0],
            }
        },
        label: {
            normal: {
                show: true,
                textStyle: {
                    color: '#fff',
                    fontSize: 14,
                    fontFamily: 'DINRegular',
                },
                position: 'right',
                formatter: function(data) {
                    return (getfzz[data.dataIndex]).toFixed(0);
                }
            }
        },
    }]
};

myChart.setOption(option, true);
myChart.on('legendselectchanged', function(obj) {
    if (obj.selected[xjjxms] === true && obj.selected[qjjxms] === true) {
        jxmszs = '';
        jxmszs2 = getxjjxms[0] + getqjjxms[0];
        myChart.setOption(option, false);
    } else if (obj.selected[xjjxms] === true && obj.selected[qjjxms] === false) {
        jxmszs = getxjjxms;
        jxmszs2 = '';
        myChart.setOption(option, false);
    } else if (obj.selected[xjjxms] === false && obj.selected[qjjxms] === true) {
        jxmszs = '';
        jxmszs2 = getqjjxms;
        myChart.setOption(option, false);
    } else if (obj.selected[xjjxms] === false && obj.selected[qjjxms] === false) {
        jxmszs = 0;
        myChart.setOption(option, false);
    }

})