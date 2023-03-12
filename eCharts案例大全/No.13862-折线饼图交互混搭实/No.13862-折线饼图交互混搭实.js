// original
var data = [30, 20, 54, 21, 90, 30, 10];

var gap = 0;
var total = 0;
var maxIndex;
var dataArray = (function() {
    var max = Math.max.apply(Math, data);
    var min = Math.min.apply(Math, data);
    gap = Math.round((max - min));
    var nd = [{
        value: data[0] + gap,
        symbol: 'none'
    }];
    for (var i = 0, l = data.length; i < l; i++) {
        if (data[i] == max) {
            maxIndex = i;
        }
        total += data[i];
        nd.push(data[i] + gap);
    }
    nd.push({
        value: data[data.length - 1] + gap,
        symbol: 'none'
    });
    return nd;
})();

option = {
    backgroundColor: '#fff',
    title: {
        text: '折线饼图交互混搭实',
        subtext: '参考2.0版 http://echarts.baidu.com/echarts2/doc/example/mix12.html',
        x: 'center'
    },
    legend: {
        data: ['销量', '占比'],
        x: 'left',
        orient: 'vertical',
        selectedMode: false
    },
    tooltip: {
        trigger: 'item',
        formatter: function(params) {
            if (params.seriesName == '占比') {
                return '总量 : ' + total + '<br/>' +
                    params.name + ' : ' + params.value + '<br/>' +
                    '占比 : ' + params.percent + '%';
            } else if (params.name != '占位') {
                update(params);
                return params.seriesName + '<br/>' +
                    params.name + ' : ' + params.value;
            }
        },
        axisPointer: {
            type: 'none'
        }
    },
    grid: {
        show: true,
        backgroundColor: '#ccc',
        borderWidth: 0,
        left: '250',
        right: '250',
        top: '200',
        bottom: '200'
    },
    xAxis: [{
        type: 'category',
        boundaryGap: false,
        show: false,
        data: ['占位', '周一', '周二', '周三', '周四', '周五', '周六', '周日', '占位']
    }],
    yAxis: [{
        type: 'value',
        boundaryGap: [0, 0.5],
        show: false
    }],
    animation: false,
    series: [{
            name: '销量',
            type: 'line',
            symbol: 'emptyCircle',
            symbolSize: 6,
            showAllSymbol: true,
            smooth: true,
            itemStyle: {
                normal: {
                    areaStyle: {
                        type: 'default'
                    }
                }
            },
            data: dataArray
        },
        {
            name: '遮罩',
            type: 'pie',
            clickable: false,
            hoverOffset: 0,
            tooltip: {
                show: false
            },
            radius: [260, 400],
            itemStyle: {
                normal: {
                    color: '#fff',
                    label: {
                        show: false
                    },
                    labelLine: {
                        show: false
                    }
                },
                emphasis: {
                    color: 'rgba(255,255,255,1)'
                }
            },
            data: [{
                value: 100,
                name: '直接访问'
            }],
            z: 10
        },
        {
            name: '占比',
            type: 'pie',
            clickable: false,
            clockWise: true,
            radius: [300, 325],
            z: 20,
            data: [{
                    itemStyle: {
                        normal: {
                            label: {
                                position: 'inside',
                                formatter: '\n{b} : {c}\n\n( {d}% )',
                                textStyle: {
                                    fontSize: 15,
                                    baseline: 'top',
                                    color: '#1e90ff'
                                }
                            },
                            labelLine: {
                                show: false
                            }
                        }
                    }
                },
                {
                    name: '其他',
                    tooltip: {
                        show: false
                    },
                    itemStyle: {
                        normal: {
                            color: '#fff',
                            label: {
                                show: false
                            },
                            labelLine: {
                                show: false
                            }
                        }
                    }
                }
            ]
        }
    ]
};

function changePieSeries(params) {
    var curData = params.value - gap;
    option.series[2].startAngle = -90 + (curData / total * 360) / 2;
    option.series[2].data[0].name = params.name;
    option.series[2].data[0].value = curData;
    option.series[2].data[1].value = total - curData;

    // for (var i = 1, l = option.series[0].data.length - 1; i < l; i++) {
    //     if (option.series[0].data[i].symbol) {
    //         option.series[0].data[i].symbol = 'emptyCircle';
    //         option.series[0].data[i].symbolSize = 6;
    //     }
    // }
    // option.series[0].data[params.dataIndex] = {
    //     name : params.name,
    //     value : params.value,
    //     symbol: 'emptyDiamond',
    //     symbolSize: 10
    // }
}

function update(params) {
    changePieSeries(params);
    option.animation = true;
    myChart.setOption(option);
}
changePieSeries({
    name: option.xAxis[0].data[maxIndex + 1],
    value: option.series[0].data[maxIndex + 1],
    dataIndex: maxIndex + 1
});