var getmydmc = ['非常满意', '满意', '一般满意', '不满意', '非常不满意']
var getmyd = [75, 10, 10, 3, 2];
var getmydzd = [];
for (let i = 0; i < getmyd.length; i++) {
    getmydzd.push(100)
}

var getmydwz = [];
textcolor = ['#4B95F3', '#05C399', '#E1984E', '#836BFF', '#F73D3D']
textbackcolor = ['#E9F3FB', '#E4F8F6', '#FAF4ED', '#EFEDFA', '#FFE7E3']
for (let i = 0; i < getmyd.length; i++) {
    getmydwz.push({
        value: getmyd[i],
        textStyle: {
            rich: {
                a: {
                    color: textcolor[i],
                    fontSize:15,
                    width: 72,
                    height: 30,
                    align: 'center',
                    verticalAlign: 'middle',
                    backgroundColor: textbackcolor[i],
                    borderRadius: 15,
                },
            }
        }
    })
}

var colorList = [{
    x: 0,
    y: 0,
    x2: 1,
    y2: 0,
    colorStops: [{
        offset: 0,
        color: '#7BB1FF' // 0% 处的颜色
    }, {
        offset: 1,
        color: '#4185FF' // 100% 处的颜色
    }],
}, {
    x: 0,
    y: 0,
    x2: 1,
    y2: 0,
    colorStops: [{
        offset: 0,
        color: '#00CFBF' // 0% 处的颜色
    }, {
        offset: 1,
        color: '#05C398' // 100% 处的颜色
    }],
}, {
    x: 0,
    y: 0,
    x2: 1,
    y2: 0,
    colorStops: [{
        offset: 0,
        color: '#FFD18B' // 0% 处的颜色
    }, {
        offset: 1,
        color: '#FDAD59' // 100% 处的颜色
    }],
}, {
    x: 0,
    y: 0,
    x2: 1,
    y2: 0,
    colorStops: [{
        offset: 0,
        color: '#9F9BFF' // 0% 处的颜色
    }, {
        offset: 1,
        color: '#816BFF' // 100% 处的颜色
    }],
}, {
    x: 0,
    y: 0,
    x2: 1,
    y2: 0,
    colorStops: [{
        offset: 0,
        color: '#FF7E7C' // 0% 处的颜色
    }, {
        offset: 1,
        color: '#FF6061' // 100% 处的颜色
    }],
}];

option = {
    backgroundColor: '#fff',
    grid: {
        left: '120',
        right: '130',
        bottom: '20',
        top: '20',
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'none'
        },
        formatter: function(params) {
            return params[1].value + '%的毕业生对就业服务工作' + params[1].name
        }
    },
    xAxis: [{
        type: 'value',
        axisLabel: {
            show: false
        },
        splitLine: {
            show: false
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
        inverse: true,
        axisLabel: {
            textStyle: {
                color: '#656565',
                fontSize: '15'
            },
        },
        splitLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLine: {
            show: false
        },
        data: getmydmc
    }, {
        type: "category",
        name: "",
        axisTick: {
            show: false
        },
        splitLine: {
            show: false
        },
        axisLine: {
            show: false
        },
        axisLabel: {
            formatter: function(value) {
                return '{a|' + value.toFixed(2)  + '%}'
            }
        },
        inverse: true,
        data: getmydwz
    }],
    series: [{
        name: '值',
        type: 'bar',
        barGap: "-100%",
        itemStyle: {
            normal: {
                barBorderRadius: 6,
                color: function(params) {
                    return textbackcolor[params.dataIndex]
                }
            },
        },
        label: {
            normal: {
                show: false,

            }
        },
        barWidth: 12,
        data: getmydzd,
    }, {
        name: '值',
        type: 'bar',
        itemStyle: {
            normal: {
                barBorderRadius: 6,
                color: function(params) {
                    return colorList[params.dataIndex]
                }
            },
        },

        barWidth: 12,
        data: getmyd
    }]
};
