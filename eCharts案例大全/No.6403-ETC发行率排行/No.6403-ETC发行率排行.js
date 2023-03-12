var data = [{
    value: '22',
    label: `收费站收费站`
}, {
    value: 23,
    label: '收费站收费站'
}, {
    value: 4,
    label: '收费站'
}, {
    value: 56,
    label: '收费站'
}, {
    value: 32,
    label: '收费站'
}, {
    value: 5,
    label: '收费站'
}, {
    value: 9,
    label: '收费站'
}, {
    value: 48,
    label: '收费站'
}, {
    value: 48,
    label: '收费站'
}, {
    value: 48,
    label: '收费站'
}, {
    value: 19,
    label: '收费站'
}, {
    value: 23,
    label: '收费站'
}, {
    value: 43,
    label: '收费站'
}, {
    value: 34,
    label: '收费站'
}, {
    value: 53,
    label: '收费站'
}, {
    value: 12,
    label: '收费站'
}, {
    value: 34,
    label: '收费站'
}, {
    value: 34,
    label: '收费站'
}, {
    value: 34,
    label: '收费站'
}];

var yData = [];
var barData = data;
barData = barData.sort(function(a, b) {
    return b.value - a.value;
});
for (var j = 0; j < barData.length; j++) {
    if (j < 10) {
        yData.push('0' + j + barData[j].label);
    } else {
        yData.push(j + barData[j].label);
    }
}

var option = {
    backgroundColor: '#00013a',
    title: [{
        show: true,
        text: 'ETC发行率排行',
        subtextStyle: {
            color: '#ffffff',
            lineHeight: 20
        },
        textStyle: {
            color: '#fff',
            fontSize: 18
        },
        x: 'center',
        top: 20
    }],
    xAxis: {
        show: false
    },
    grid: {
        left: "20%"
    },
    yAxis: {
        type: 'category',
        inverse: true,
        nameGap: 16,
        axisLine: {
            show: false,
            lineStyle: {
                color: '#ddd'
            }
        },
        axisTick: {
            show: false,
            lineStyle: {
                color: '#ddd'
            }
        },
        axisLabel: {
            interval: 0,
            margin: 150,
            textStyle: {
                color: '#fff',
                align: 'left',
                fontSize: 14
            },
            rich: {
                a: {
                    color: '#fff',
                    backgroundColor: '#f0515e',
                    width: 20,
                    height: 20,
                    align: 'center',
                    borderRadius: 2
                },
                b: {
                    color: '#fff',
                    backgroundColor: '#24a5cd',
                    width: 20,
                    height: 20,
                    align: 'center',
                    borderRadius: 2
                }
            },
            formatter: function(params) {
                if (parseInt(params.slice(0, 2)) < 3) {
                    return [
                        '{a|' + (parseInt(params.slice(0, 2)) + 1) + '}' + '  ' + params.slice(2)
                    ].join('\n')
                } else {
                    return [
                        '{b|' + (parseInt(params.slice(0, 2)) + 1) + '}' + '  ' + params.slice(2)
                    ].join('\n')
                }
            }
        },
        data: yData
    },
    series: [{
        name: 'barSer',
        type: 'bar',
        roam: false,
        visualMap: false,
        zlevel: 2,
        barMaxWidth: 16,
        barGap: 0,
        itemStyle: {
            normal: {
                color: function(params) {
                    var colorList = [{
                            colorStops: [{
                                offset: 0,
                                color: '#f0515e'
                            }, {
                                offset: 1,
                                color: '#ef8554'
                            }]
                        },
                        {
                            colorStops: [{
                                offset: 0,
                                color: '#3c38e4'
                            }, {
                                offset: 1,
                                color: '#24a5cd'
                            }]
                        }
                    ];
                    if (params.dataIndex < 3) {
                        return colorList[0]
                    } else {
                        return colorList[1]
                    }
                },
                barBorderRadius: [0, 15, 15, 0]
            }
        },
        label: {
            normal: {
                show: true,
                textBorderColor: '#333',
                textBorderWidth: 2,
                formatter: function(params) {
                    return params.value + '%'
                }
            }
        },
        data: barData.sort((a, b) => {
            return b.value - a.value;
        })
    }]
};
if (option && typeof option === "object") {
    myChart.setOption(option, true);
}