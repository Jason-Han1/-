var data = {
    female: {
        name: 'Purple',
        data: [{
            value: 42,
            weight: 30,
            label: 'Purple8'
        }, {
            value: 23,
            weight: 30,
            label: 'Purple7'
        }, {
            value: 34,
            weight: 30,
            label: 'Purple6'
        }, {
            value: 56,
            weight: 30,
            label: 'Purple5'
        }, {
            value: 32,
            weight: 30,
            label: 'Purple4'
        }, {
            value: 15,
            weight: 30,
            label: 'Purple3'
        }, {
            value: 19,
            weight: 30,
            label: 'Purple2'
        }, {
            value: 48,
            weight: 30,
            label: 'Purple1'
        }]
    },
    male: {
        name: 'Orange',
        data: [{
            value: 45,
            weight: 30,
            label: 'Orange8'
        }, {
            value: 19,
            weight: 30,
            label: 'Orange7'
        }, {
            value: 23,
            weight: 30,
            label: 'Orange6'
        }, {
            value: 43,
            weight: 30,
            label: 'Orange5'
        }, {
            value: 34,
            weight: 30,
            label: 'Orange4'
        }, {
            value: 53,
            weight: 30,
            label: 'Orange3'
        }, {
            value: 12,
            weight: 30,
            label: 'Orange2'
        }, {
            value: 34,
            weight: 30,
            label: 'Orange1'
        }]
    }
};
var yAxisData = new Set();
var yAxisDataN = new Set();
var yAxisDataV = new Set();
var legendData = [];
_.forEach(data, (d) => {
    legendData.push(d.name);
    _.forEach(d.data, (item) => {

        if (d.name == 'Purple') {
            yAxisDataN.add(item.label);
        }
        if (d.name == 'Orange') {
            yAxisDataV.add(item.label);
        }
    });
});
var topt = 60;
var bottom = 60;
yAxisData = [...yAxisData];
yAxisDataN = [...yAxisDataN];
yAxisDataV = [...yAxisDataV];
option = {
    tooltip: {
        show: true,
        backgroundColor: 'rgba(0,0,0,0.9)',
        trigger: 'axis',
        formatter: "{b} <br/>Freq : {c}次",
        axisPointer: {
            lineStyle: {
                width: 2,
                color: {
                    type: 'linear',
                    x: 1,
                    y: 0,
                    x2: 0,
                    y2: 0,
                    colorStops: [{
                        offset: 0,
                        color: 'rgba(255, 255, 255,0)'
                    }, {
                        offset: 0.5,
                        color: 'rgba(255, 255, 255,1)',
                    }, {
                        offset: 1,
                        color: 'rgba(255, 255, 255,0)'
                    }],
                    global: false
                }
            },
        },
    },
    legend: {
        "icon": "none",
        left: 'center',
        top: 24,
        orient: "horizontal",
        itemWidth: 0,
        itemHeight: 0,
        y: 'center',
        formatter: (name) => {
            if (name == data.female.name) {
                return '{a|' + name + '}'
            } else {
                return '{b|' + name + '}'
            }
        },
        textStyle: {
            rich: {
                a: {
                    color: "#fff",
                    padding: [4, 15, 4, 15],
                    align: 'center',
                    backgroundColor: "#b93395",
                    borderRadius: 4,
                },
                b: {
                    color: "#fff",
                    padding: [4, 15, 4, 15],
                    align: 'center',
                    backgroundColor: "#f77b16",
                    borderRadius: 4,
                }
            }
        },
        data: legendData
    },
    grid: [{
        left: '10',
        width: '46%',
        containLabel: true,
        bottom
    }, {
        left: '50%',
        width: '0%',
        top: topt + 16
    }, {
        right: '10',
        width: '46%',
        containLabel: true,
        bottom
    }].map(item => _.merge({
        topt
    }, item)),
    xAxis: [{
        type: 'value',
        inverse: true,
        axisLabel: {
            show: true
        },
        axisLine: {
            lineStyle: {
                color: '#7987a1',
            }
        },
        axisTick: {
            show: false
        },
        splitLine: {
            show: true
        }
    }, {
        gridIndex: 1,
        show: false,

    }, {
        gridIndex: 2,
        type: 'value',
        axisLabel: {
            show: true
        },
        axisLine: {
            lineStyle: {
                color: '#7987a1',
            }
        },
        axisTick: {
            show: false
        },
        splitLine: {
            show: true
        }
    }].map((item) => _.merge(item, {
        axisLabel: {
            color: '#bbb8b8',
            margin: 8
        },
        splitLine: {
            lineStyle: {
                color: '#bbb8b8',
                type: 'dashed'
            }
        },
    })),
    yAxis: [{

            position: 'right',
            axisLabel: {
                color: '#545454',
                show: true
            },
            axisLine: {
                show: false
            },
            type: 'category',
            inverse: false,

            axisTick: {
                show: false
            },
            data: yAxisDataN
        },
        {
            gridIndex: 1,
            position: 'center',
            type: 'category',
            axisLabel: {
                show: false
            },
            axisLine: {
                lineStyle: {
                    color: '#7987a1',
                }
            },
        },
        {
            gridIndex: 2,
            position: 'left',
            axisLabel: {
                color: '#545454',
            },
            axisLine: {
                show: false
            },
            type: 'category',
            inverse: false,

            axisTick: {
                show: false
            },
            data: yAxisDataV
        }
    ],
    series: [{
            name: _.get(data, 'female.name'),
            label: {
                color: '#545454',
                position: 'left'
            },
            itemStyle: {
                shadowColor: 'rgba(0,0,0,.1)',
                shadowBlur: 5,
                shadowOffsetY: 0,
                shadowOffsetX: -5,
                color: function (params) {
                    var colorList = [
                        new echarts.graphic.RadialGradient(0, 0.5, 1, [
                            {
                                offset: 0,
                                color: '#fef8a7',
                            },
                            {
                                offset: 0.3,
                                color: '#fabd41',
                            },
                            {
                                offset: 0.5,
                                color: '#eb710f',
                            },
                            {
                                offset: 1,
                                color: '#fed174',
                            },
                        ]),
                        new echarts.graphic.RadialGradient(0, 0.5, 1, [
                            {
                                offset: 0,
                                color: '#feecc2',
                            },
                            {
                                offset: 0.3,
                                color: '#fd945d',
                            },
                            {
                                offset: 0.5,
                                color: '#e8491e',
                            },
                            {
                                offset: 1,
                                color: '#fd8d51',
                            },
                        ]),
                        new echarts.graphic.RadialGradient(0, 0.5, 1, [
                            {
                                offset: 0,
                                color: '#fafee6',
                            },
                            {
                                offset: 0.3,
                                color: '#b0d67b',
                            },
                            {
                                offset: 0.5,
                                color: '#70a239',
                            },
                            {
                                offset: 1,
                                color: '#a7db5c',
                            },
                        ]),
                        new echarts.graphic.RadialGradient(0, 0.5, 1, [
                            {
                                offset: 0,
                                color: '#fed6ee',
                            },
                            {
                                offset: 0.3,
                                color: '#e94b87',
                            },
                            {
                                offset: 0.5,
                                color: '#cf1d4d',
                            },
                            {
                                offset: 1,
                                color: '#f76495',
                            },
                        ]),
                        new echarts.graphic.RadialGradient(0, 0.5, 1, [
                            {
                                offset: 0,
                                color: '#fefdf9',
                            },
                            {
                                offset: 0.3,
                                color: '#f9daab',
                            },
                            {
                                offset: 0.5,
                                color: '#deb386',
                            },
                            {
                                offset: 1,
                                color: '#fae8e0',
                            },
                        ]),
                        new echarts.graphic.RadialGradient(0, 0.5, 1, [
                            {
                                offset: 0,
                                color: '#c3a6c4',
                            },
                            {
                                offset: 0.3,
                                color: '#8a6d89',
                            },
                            {
                                offset: 0.5,
                                color: '#523a51',
                            },
                            {
                                offset: 1,
                                color: '#746074',
                            },
                        ]),
                        new echarts.graphic.RadialGradient(0, 0.5, 1, [
                            {
                                offset: 0,
                                color: '#feecc2',
                            },
                            {
                                offset: 0.3,
                                color: '#fd945d',
                            },
                            {
                                offset: 0.5,
                                color: '#e8491e',
                            },
                            {
                                offset: 1,
                                color: '#fd8d51',
                            },
                        ]),
                        new echarts.graphic.RadialGradient(0, 0.5, 1, [
                            {
                                offset: 0,
                                color: '#fafee6',
                            },
                            {
                                offset: 0.3,
                                color: '#b0d67b',
                            },
                            {
                                offset: 0.5,
                                color: '#70a239',
                            },
                            {
                                offset: 1,
                                color: '#a7db5c',
                            },
                        ]),
                        
                    ];
                    return colorList[params.dataIndex];
                },
                barBorderRadius: [4, 0, 0, 4],
                emphasis: {
                    opacity: 1,
                    color: '#b93395',
                    label: {
                        show: true,
                        position: 'left',
                        textStyle: {
                            fontWeight: 600,
                        },
                    },

                },
            },
            data: _.map(_.get(data, 'female.data'), d => d.value)
        },
        {
            xAxisIndex: 2,
            yAxisIndex: 2,
            name: _.get(data, 'male.name'),
            label: {
                color: '#545454',
                position: 'right'
            },
            itemStyle: {
                shadowColor: 'rgba(0,0,0,.1)',
                shadowBlur: 5,
                shadowOffsetY: 0,
                shadowOffsetX: 5,
                color: function (params) {
                    var colorList = [
                        new echarts.graphic.RadialGradient(1, 0.5, 1, [
                            {
                                offset: 0,
                                color: '#fef8a7',
                            },
                            {
                                offset: 0.3,
                                color: '#fabd41',
                            },
                            {
                                offset: 0.5,
                                color: '#eb710f',
                            },
                            {
                                offset: 1,
                                color: '#fed174',
                            },
                        ]),
                        new echarts.graphic.RadialGradient(1, 0.5, 1, [
                            {
                                offset: 0,
                                color: '#feecc2',
                            },
                            {
                                offset: 0.3,
                                color: '#fd945d',
                            },
                            {
                                offset: 0.5,
                                color: '#e8491e',
                            },
                            {
                                offset: 1,
                                color: '#fd8d51',
                            },
                        ]),
                        new echarts.graphic.RadialGradient(1, 0.5, 1, [
                            {
                                offset: 0,
                                color: '#fafee6',
                            },
                            {
                                offset: 0.3,
                                color: '#b0d67b',
                            },
                            {
                                offset: 0.5,
                                color: '#70a239',
                            },
                            {
                                offset: 1,
                                color: '#a7db5c',
                            },
                        ]),
                        new echarts.graphic.RadialGradient(1, 0.5, 1, [
                            {
                                offset: 0,
                                color: '#fed6ee',
                            },
                            {
                                offset: 0.3,
                                color: '#e94b87',
                            },
                            {
                                offset: 0.5,
                                color: '#cf1d4d',
                            },
                            {
                                offset: 1,
                                color: '#f76495',
                            },
                        ]),
                        new echarts.graphic.RadialGradient(1, 0.5, 1, [
                            {
                                offset: 0,
                                color: '#fefdf9',
                            },
                            {
                                offset: 0.3,
                                color: '#f9daab',
                            },
                            {
                                offset: 0.5,
                                color: '#deb386',
                            },
                            {
                                offset: 1,
                                color: '#fae8e0',
                            },
                        ]),
                        new echarts.graphic.RadialGradient(1, 0.5, 1, [
                            {
                                offset: 0,
                                color: '#c3a6c4',
                            },
                            {
                                offset: 0.3,
                                color: '#8a6d89',
                            },
                            {
                                offset: 0.5,
                                color: '#523a51',
                            },
                            {
                                offset: 1,
                                color: '#746074',
                            },
                        ]),
                        new echarts.graphic.RadialGradient(1, 0.5, 1, [
                            {
                                offset: 0,
                                color: '#feecc2',
                            },
                            {
                                offset: 0.3,
                                color: '#fd945d',
                            },
                            {
                                offset: 0.5,
                                color: '#e8491e',
                            },
                            {
                                offset: 1,
                                color: '#fd8d51',
                            },
                        ]),
                        new echarts.graphic.RadialGradient(1, 0.5, 1, [
                            {
                                offset: 0,
                                color: '#fafee6',
                            },
                            {
                                offset: 0.3,
                                color: '#b0d67b',
                            },
                            {
                                offset: 0.5,
                                color: '#70a239',
                            },
                            {
                                offset: 1,
                                color: '#a7db5c',
                            },
                        ]),
                        
                    ];
                    return colorList[params.dataIndex];
                },
                barBorderRadius: [0, 4, 4, 0],
                emphasis: {
                    opacity: 1,
                    color: '#f77b16',
                    label: {
                        show: true,
                        position: 'right',
                        textStyle: {
                            fontWeight: 600,
                        },
                    },

                },
            },
            data: _.map(_.get(data, 'male.data'), d => d.value)
        },
    ].map(item => _.merge(item, {
        type: 'bar',
        barWidth: 30,
        label: {
            show: true,
            fontFamily: 'Rubik-Medium',
            fontSize: 14,
            distance: 10
        }
    }))
};
const backImg = '/asset/get/s/data-1622796959507-HTopachtJ.png';
myChart._dom.style.backgroundImage = "url('" + backImg + "')";