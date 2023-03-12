var uploadedDataURL = "/asset/get/s/data-1512109046041-SkAxEuAgz.json";

myChart.showLoading();

$.get(uploadedDataURL, function(data) {
    myChart.hideLoading();
    
    data = JSON.parse(data)

    var itemStyle = {
        normal: {
            opacity: 0.8,
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowOffsetY: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
        }
    };

    var sizeFunction = function(x) {
        var y = Math.sqrt(x / 5e8) + 0.1;
        return y ;
    };
    // Schema:

    option = {
        baseOption: {
            timeline: {
                axisType: 'category',
                orient: 'vertical',
                autoPlay: true,
                inverse: true,
                playInterval: 1000,
                left: null,
                right: 0,
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
            backgroundColor: '#FFF',
            title: {
                text: '荣威数据分析',
                },
            polar: {},
            tooltip: {
                formatter: function(params) {
                    return params.value[2] + ' commits in ' + hours[params.value[1]] + ' of ' + days[params.value[0]];
                }
            },
            angleAxis: {
                type: 'category',
                data: data.timeline,
                boundaryGap: false,
                splitLine: {
                    show: true,
                    lineStyle: {
                        color: '#999',
                        type: 'dashed'
                    }
                },
                axisLine: {
                    show: false
                }
            },
            radiusAxis: {
                type: 'category',
                data: data.name,
                axisLine: {
                    show: false
                },
                axisLabel: {
                    rotate: 45
                }
            },
            series: [{
                name: data.timeline[0],
                type: 'scatter',
                coordinateSystem: 'polar',
                data:data.series[0],
                symbolSize: function(val) {
                    return val[2] ;
                },
            
                animationDelay: function(idx) {
                    return idx * 5;
                }
            }],
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
                text: '11-01至'+data.timeline[n] + '日负面舆情统计'
            },
            series: {
                name: data.timeline[n],
                type: 'scatter',
                data: data.series[n],
                coordinateSystem: 'polar',
                symbolSize: function(val) {
                    return val[2] /2;
                },
                animationDelay: function(idx) {
                    return idx * 5;
                }
            }
        });
    }

    myChart.setOption(option);

});