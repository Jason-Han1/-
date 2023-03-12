var uploadedDataURL = "/asset/get/s/data-1600144886557-K7S0JH-l9.json";


const color = {
    bar: '#0F318825',
    area_normal: '#C5F9E1',
    area_yellow: '#FFF2DA',
    area_red: '#FFCFE1',
    line_normal: '#0F318880',
    line_yellow: '#E9AF36',
    line_red: '#DC0D5C'
};

myChart.showLoading();

function setOption({
    xAxis,
    realData,
    redlineData,
    yellowlineData,
    smooth7Data
}) {
    let yAxisMax = Math.max(...realData.map(item => item.value), ...redlineData, ...smooth7Data) * 12 / 10;
    option = {
        /*grid: {
            left: 0,
            top: 10,
            right: 10,
            bottom: 10,
            containLabel: true
        },*/
        toolbox: {
            feature: {
                dataZoom: {
                    show: true,
                    yAxisIndex: false
                },
                restore: {
                    show: true
                }
            },
            iconStyle: {
                color: 'transparent'
            },
            left: 'center',
            top: 'middle',
            zlevel: -1

        },
        xAxis: [{
            type: 'category',
            show: true,
            data: xAxis,
            axisTick: {
                alignWithLabel: true
            }
        }, {
            type: 'category',
            boundaryGap: false,
            show: false,
            data: xAxis,
            axisPointer: {
                lineStyle: {
                    color: 'transparent'
                }
            }
        }],
        yAxis: {
            type: 'value',
            max: yAxisMax,
            boundaryGap: [0, 0],
            axisLine: {
                show: false
            },
            axisTick: {
                lineStyle: {
                    type: 'dashed'
                }
            },
            splitLine: {
                show: false,
                lineStyle: {
                    color: '#eee',
                    type: 'dashed'
                }
            },
            axisLabel: {
                showMaxLabel: false
            },
            z: 10
        },
        series: [
            // 柱状图部分=>真实数据
            {
                name: 'real',
                data: realData,
                type: 'bar',
                itemStyle: {
                    color: color.bar
                },
                emphasis: {
                    itemStyle: {
                        color: color.bar
                    }
                },
                xAxisIndex: 0
            },
            // 绘制背景部分
            {
                name: 'redline',
                data: redlineData,
                silent: true,
                type: 'line',
                xAxisIndex: 1,
                smooth: true,
                // step: true,
                lineStyle: {
                    width: 0
                },
                itemStyle: {
                    opacity: 0
                },
                showSymbol: false,
                areaStyle: {
                    color: color.area_yellow
                },
                markArea: {
                    silent: true,
                    itemStyle: {
                        color: color.area_red
                    },
                    data: [
                        [{
                                yAxis: 0
                            },
                            {
                                yAxis: yAxisMax
                            }
                        ]
                    ]
                }
            }, {
                name: 'yellowline',
                data: yellowlineData,
                silent: true,
                type: 'line',
                xAxisIndex: 1,
                itemStyle: {
                    opacity: 0
                },
                smooth: true,
                lineStyle: {
                    width: 0
                },
                showSymbol: false,
                areaStyle: {
                    color: color.area_normal
                }
            },
            // 真实数据处理后的值拆分成三条线进行绘制以达到多色预警效果
            ...(() => {
                let normal = [];
                let yellowline = [];
                let redline = [];
                let lastIndex = smooth7Data.length - 1;

                function handler(a, b, c, item, i) {
                    a.push(null);
                    b.push(null);
                    c.push({ // 添加到对应线段
                        value: item,
                        symbol: i === lastIndex ? 'rect' : 'none'
                    });
                    i = i - 1;
                    if (i > -1 && _.isNil(c[i])) { // 为了连续性若上一个数是空则补齐, 这个数据不应在tooltip时展现
                        c[i] = {
                            symbol: 'none',
                            _tooltip_disabled: true,
                            value: smooth7Data[i]
                        };
                    }
                }
                _.forEach(smooth7Data, (item, i) => {
                    if (item > redlineData[i]) { // 超过当时的红色预警值
                        handler(normal, yellowline, redline, item, i);
                    } else if (item > yellowlineData[i]) { // 超过当时黄色预警值
                        handler(normal, redline, yellowline, item, i);
                    } else { // 正常情况
                        handler(redline, yellowline, normal, item, i);
                    }
                });
                return [{
                    name: 'normal',
                    data: normal,
                    lineStyle: {
                        color: color.line_normal
                    },
                    itemStyle: {
                        color: color.line_normal
                    }
                }, {
                    name: 'yellow',
                    data: yellowline,
                    lineStyle: {
                        color: color.line_yellow
                    },
                    itemStyle: {
                        color: color.line_yellow
                    }
                }, {
                    name: 'red',
                    data: redline,
                    lineStyle: {
                        color: color.line_red
                    },
                    itemStyle: {
                        color: color.line_red
                    }
                }].map((item, i) => {
                    return _.merge({
                        type: 'line',
                        xAxisIndex: 1,
                        // step: 'end',
                        symbolSize: 7.5,
                        itemStyle: {
                            borderWidth: 2,
                            borderColor: '#fff'
                        }
                    }, item);
                });
            })()
        ]
    };
    myChart.setOption(option, true);
}

$.getJSON(uploadedDataURL, function(data) {
    setOption(data);
    myChart.hideLoading();
    // 默认开启数据缩放
    myChart.dispatchAction({
        type: 'takeGlobalCursor',
        key: 'dataZoomSelect',
        dataZoomSelectActive: true
    });
    // 重置
    /*myChart.dispatchAction({
        type: 'restore'
    });*/
});