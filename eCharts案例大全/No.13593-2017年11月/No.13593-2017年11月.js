var uploadedDataURL = "/asset/get/s/data-1525541560139-HJepqDoaM.json";

myChart.showLoading();

$.getJSON(uploadedDataURL, function (data) {
    myChart.hideLoading();

    var itemStyle = {
        normal: {
            opacity: 0.8,
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowOffsetY: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
        }
    };

    var sizeFunction = function (x) {
        var y = (x / 100000) + 0.1;
        return y * 30;
    };
    // Schema:
    var schema = [
        {name: 'Income', index: 0, text: '居住人口占比入', unit: '%'},
        {name: 'LifeExpectancy', index: 1, text: '环比增幅', unit: '%'},
        {name: 'Population', index: 2, text: '居住人口', unit: '人'},
        {name: 'Country', index: 3, text: '街乡', unit: ''}
    ];

    option = {
        baseOption: {
            timeline: {
                axisType: 'category',
                orient: 'vertical',
                autoPlay: true,
                inverse: true,
                playInterval: 1500,
                left: null,
                right: 20,
                top: 20,
                bottom: 20,
                width: 55,
                height: null,
                label: {
                    normal: {
                        textStyle: {
                            color: '#999'
                        }
                    },
                    emphasis: {
                        textStyle: {
                            color: '#fff'
                        }
                    }
                },
                symbol: 'none',
                lineStyle: {
                    color: '#555'
                },
                checkpointStyle: {
                    color: '#bbb',
                    borderColor: '#777',
                    borderWidth: 2
                },
                controlStyle: {
                    showNextBtn: false,
                    showPrevBtn: false,
                    normal: {
                        color: '#666',
                        borderColor: '#666'
                    },
                    emphasis: {
                        color: '#aaa',
                        borderColor: '#aaa'
                    }
                },
                data: []
            },
            backgroundColor: '#333',
            title: {
                'text': data.timeline[0],
                textAlign: 'center',
                right: '5%',
                bottom: '15%',
                textStyle: {
                    fontSize: 20,
                    color: 'rgba(255, 255, 255, 0.7)'
                }
            },
            tooltip: {
                padding: 5,
                backgroundColor: '#222',
                borderColor: '#777',
                borderWidth: 1,
                formatter: function (obj) {
                    var value = obj.value;
                    return schema[3].text + '：' + value[3] + '<br>'
                            + schema[1].text + '：' + value[1] + schema[1].unit + '<br>'
                            + schema[0].text + '：' + value[0] + schema[0].unit + '<br>'
                            + schema[2].text + '：' + value[2] + '<br>';
                }
            },
            grid: {
                left: '12%',
                right: '110'
            },
            xAxis: {
                type: 'value',
                name: '居住人口占比',
                max: 9,
                min: 0,
                nameGap: 25,
                nameLocation: 'middle',
                nameTextStyle: {
                    fontSize: 18
                },
                splitLine: {
                    show: false
                },
                axisTick: {
                    lineStyle: {
                        color: '#ccc'
                    }
                },
                axisLine: {
                    lineStyle: {
                        color: '#ccc'
                    }
                },
                axisLabel: {
                    formatter: '{value} %',
                    textStyle: {
                        color: '#ccc'
                    }
                }
            },
            yAxis: {
                type: 'value',
                name: '环比增幅',
                max: 80,
                min: -80,
                nameTextStyle: {
                    color: '#ccc',
                    fontSize: 18
                },
                axisLine: {
                    lineStyle: {
                        color: '#ccc'
                    }
                },
                axisTick: {
                    lineStyle: {
                        color: '#ccc'
                    }
                },
                splitLine: {
                    show: false
                },
                axisLabel: {
                    formatter: '{value} %',
                    textStyle: {
                        color: '#ccc'
                    }
                }
            },
            visualMap: [
                {
                    type: 'piecewise',
                    show: false,
                    dimension: 3,
                    categories: data.counties,
                    calculable: true,
                    precision: 0.1,
                    textGap: 30,
                    textStyle: {
                        color: '#ccc'
                    },
                    inRange: {
                        color: data.colors
                    },
                    outOfRange: {
                        color: '#555'
                    }
                }
            ],
            series: [
                {
                    type: 'scatter',
                    label: {
                        show: true,
                        formatter: "{@[3]}",
                        fontSize: 12
                    },
                    itemStyle: itemStyle,
                    data: data.series[0],
                    symbolSize: function(val) {
                        return sizeFunction(val[2]);
                    }
                }
            ],
            animationDurationUpdate: 1000,
            animationEasingUpdate: 'quinticInOut'
        },
        options: []
    };

    for (var n = 0; n < data.timeline.length; n++) {
        option.baseOption.timeline.data.push(data.timeline[n]);
        option.options.push({
            title: {
                show: true,
                'text': data.timeline[n] + ''
            },
            series: {
                name: data.timeline[n],
                type: 'scatter',
                itemStyle: itemStyle,
                data: data.series[n],
                
                symbolSize: function(val) {
                    return sizeFunction(val[2]);
                }
            }
        });
    }

    myChart.setOption(option);

});