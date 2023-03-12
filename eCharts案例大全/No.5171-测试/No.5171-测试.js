var getname = ['2016', '2017', '2018', '2019', '2020'];
var getvalue = [2301, 1935, 1535, 1303, 998];
var getvalue1 = [1301, 2135, 935, 1503, 1098];

//计算最大值  
var maxnum = Math.max.apply(null, getvalue);
var maxnum1 = Math.max.apply(null, getvalue1);
var maxlen = Math.pow(10, String(Math.ceil(maxnum)).length - 2);
var maxlen1 = Math.pow(10, String(Math.ceil(maxnum1)).length - 2);
if (maxnum >= 5) {
    var max = Math.ceil(maxnum / (9.5 * maxlen)) * maxlen * 10;
} else {
    var max = 5;
}
if (maxnum1 >= 5) {
    var max1 = Math.ceil(maxnum1 / (9.5 * maxlen1)) * maxlen1 * 10;
} else {
    var max1 = 5;
}

option = {
    backgroundColor: '#000',
    grid: {
        top: 65,
        bottom: 35,
        left: 50,
        right: 50
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'none'
        },
        formatter: '{b0}<br/>{a0}: {c0}万元<br/>{a1}: {c1}个',
    },
    legend: {
        data: [{
            name: '设备金额',
            icon:'circle'
        }, {
            name: '设备数量',
            icon: 'image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAYAAABWdVznAAABHElEQVQoU42SPUvDUBSGn6NNJR10FhWXoohWMqiru4uLm5ubQ8GbVXAouOoQcOzo5CL4B1yNgxgVKlnEgj9ASDGJXrkx0Rr86Bnu5b73PZ/vEXLTzeZIz7K2gU1gHkiBDlof22l6JJ73YqhijkipCQ1nIuIUAfpvDYEkyVrN87qSRa5WL9B68SfyJyZybcfxikSuuwMcmo/49Y39IOTk4SnjbUyPs9uoUx0eKvyUREr5iCwZZO/qnnb4+C3RVn2SljP7gWl9aTJEgG3ec6fnPCem1y8btSrcra9mgEDvX4cxq8JtycEH8pI6tMNuqaQpWs5MX0lKKUQOBmpaazcba2RZvkDjr7EaLWpJsjyQcAKBLoT7ZTUWcvymvBrv59KDSJbBIHAAAAAASUVORK5CYII='
        }],
        type: "scroll",
        top: '5',
        right: '20',
        itemGap: 25,
        itemWidth: 12,
        itemHeight: 12,
        textStyle: {
            fontSize: '13',
            color: '#A9C1E5',
        },

    },
    xAxis: [{
        data: getname,
        axisLabel: {
            margin: 10,
            color: '#C5DCFF',
            textStyle: {
                fontSize: 13
            },
        },
        axisLine: {
            lineStyle: {
                color: '#3E5B7D',
            }
        },
        axisTick: {
            show: false
        },
    }],
    yAxis: [{
        type: 'value',
        min: 0,
        max: max, // 计算最大值
        interval: max / 5, //  平均分为5份
        splitNumber: 5,
        name: '万元',
        nameTextStyle: {
            color: '#C5DCFF',
            fontSize: 13,
            padding: [0, 0, -8, 30]
        },
        axisLabel: {
            formatter: function(value) {
                num = value
                if (num && num != 'undefined' && num != 'null') {
                    let numS = num;
                    numS = numS.toString();
                    numS = numS.replace(/,/gi, '');
                    return numS;
                } else {
                    return num;
                }
            },
            color: '#C5DCFF',
            textStyle: {
                fontSize: 13
            },
        },
        axisLine: {
            lineStyle: {
                color: '#3E5B7D',
            }
        },
        axisTick: {
            show: false
        },
        splitLine: {
            lineStyle: {
                color: 'rgba(62,91,125,.25)',
            }
        }
    }, {
        type: 'value',
        min: 0,
        max: max1, // 计算最大值
        interval: max1 / 5, //  平均分为5份
        splitNumber: 5,
        name: '个',
        nameTextStyle: {
            color: '#C5DCFF',
            fontSize: 13,
            padding: [0, 0, -8, -20]
        },
        axisLabel: {
            formatter: function(value) {
                num = value
                if (num && num != 'undefined' && num != 'null') {
                    let numS = num;
                    numS = numS.toString();
                    numS = numS.replace(/,/gi, '');
                    return numS;
                } else {
                    return num;
                }
            },
            color: '#C5DCFF',
            textStyle: {
                fontSize: 13
            },
        },
        axisLine: {
            lineStyle: {
                color: '#3E5B7D',
            }
        },
        axisTick: {
            show: false
        },
        splitLine: {
            lineStyle: {
                color: 'rgba(62,91,125,.25)',
            }
        }
    }],
    animation: false,
    series: [{
        name: "设备金额",
        type: 'bar',
        data: getvalue,
        barWidth: '12px',
        itemStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                    offset: 0,
                    color: '#22CFF5'
                }, {
                    offset: 1,
                    color: '#1F70EC'
                }], false),
                barBorderRadius: 6,
            }
        },
    }, {
        name: "设备数量",
        type: 'line',
        data: getvalue1,
        symbol: 'circle',
        yAxisIndex: 1,
        symbolSize: 8,
        lineStyle: {
            normal: {
                width: 3,
                color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                    offset: 0,
                    color: '#FF7E7C'
                }, {
                    offset: 1,
                    color: '#FF6061'
                }], false),
                shadowColor: 'rgba(246, 114, 114, 1)',
                shadowBlur: 15,
                shadowOffsetY: 0,
            }
        },
        itemStyle: {
            normal: {
                color: '#121E2F',
                borderColor: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                    offset: 0,
                    color: '#FF7E7C'
                }, {
                    offset: 1,
                    color: '#FF6061'
                }], false),
                borderWidth: 3
            },
        },
        //smooth: true,
    }]
};