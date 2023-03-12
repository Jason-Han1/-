option = {
    color: ['#da251d', '#e77817', '#f8c300', '#68b920', '#3bb3c2', '#0093dd', '#667ab3'],
    tooltip: {
        show: true,
        trigger: 'item',
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        formatter: function(v) {
            return '<div >'
                 + '<span style="display:inline-block;margin-right:5px;border-radius:10px;width:9px;height:9px;background-color:' + v.color + '"></span>' + v.seriesName + '<br/>'
                 + '    <span class="chainTextTitle">开始时间：' + v.data.tooltip.startTime + '</span><br>'
                 + '    <span class="chainTextTitle">结束时间：' + v.data.tooltip.endTime + '</span><br>'
                 + '</div>';
        },
    },
    legend: {
        x: 'center',
        y: 'bottom',
        show: true,
        textStyle: {
            color: '#858585',
        },
        data: ["阶段1", "阶段2", "阶段3", "阶段4"]
    },
    grid: {
        borderWidth: 0
    },
    xAxis:{
            type: 'time',
            position: 'top',
            axisLine: {
                show: false
            },
            axisLabel: {
                show: true,
                textStyle: {
                    color: '#858585',
                    fontSize: 14,
                },
            },
            splitLine: {
            },
            max: 1508925966000,
            min: 1508925636000
    },
    yAxis:[
        {
            type: 'category',
            axisTick: {
                show: true,
                lineStyle: {
                    color: '#858585',
                    width: 2
                }
            },
            axisLabel: {
                show: true,
                textStyle: {
                    color: '#404d5b',
                    fontSize: 14,
                },
            },
            splitLine: {
                show: false
            },
            axisLine: {
                lineStyle: {
                    color: '#858585',
                },
            },
            data: ["阶段1", "阶段2", "阶段3", "阶段4"]
        },
        {
            type: 'category',
            axisTick: {
                show: true,
                lineStyle: {
                    color: '#858585',
                    width: 2
                }
            },
            axisLabel: {
                show: true,
                textStyle: {
                    color: '#404d5b',
                    fontSize: 14,
                },
            },
            splitLine: {
                show: false
            },
            axisLine: {
                lineStyle: {
                    color: '#858585',
                },
            },
            data: ["", "", "", "", "", "", ""]
        },
    ],
    series: [
        {
            type: 'bar',
            stack: 1,
            name: '阶段4',
            markLine: {
                symbol: 'none',
                itemStyle: {
                    normal: {
                        lineStyle: {
                            type: 'solid',
                            width: 8,
                        },
                    },
                    emphasis: {
                        lineStyle: {
                            width: 15,
                        }
                    }
                },
                data: [
                    [
                        {xAxis: 1508925789000, yAxis: "阶段4", tooltip: 
                            {
                                endTime: '2017-10-25 18:03:42',
                                eventName:"阶段4",
                                sip:"53.53.53.2",
                                startTime: '2017-10-25 18:03:09'
                            }
                        },
                        {xAxis: 1508925822000, yAxis: "阶段4"}
                    ]
                ]
            }
        },
        {
            type: 'bar',
            stack: 1,
            name: "阶段3",
            markLine: {
                symbol: 'none',
                itemStyle: {
                    normal: {
                        lineStyle: {
                            type: 'solid',
                            width: 8,
                        },
                    },
                    emphasis: {
                        lineStyle: {
                            width: 15,
                        }
                    }
                },
                data: [
                    [
                        {xAxis: 1508925720000, yAxis: "阶段3", tooltip: 
                            {
                                endTime: '2017-10-25 18:03:19',
                                eventName:"阶段3",
                                sip:"53.53.53.2",
                                startTime: '2017-10-25 18:02:00'
                            }
                        },
                        {xAxis: 1508925799000, yAxis: "阶段3"}
                    ]
                ]
            }
        },
        {
            type: 'bar',
            stack: 1,
            name: "阶段2",
            markLine: {
                symbol: 'none',
                itemStyle: {
                    normal: {
                        lineStyle: {
                            type: 'solid',
                            width: 8,
                        },
                    },
                    emphasis: {
                        lineStyle: {
                            width: 15,
                        }
                    }
                },
                data: []
            }
        },
        {
            type: 'bar',
            stack: 1,
            name: '阶段1',
            markLine: {
                symbol: 'none',
                itemStyle: {
                    normal: {
                        lineStyle: {
                            type: 'solid',
                            width: 8,
                        },
                    },
                    emphasis: {
                        lineStyle: {
                            width: 15,
                        }
                    }
                },
                data: [
                    [
                        {xAxis: 1508925696000, yAxis: "阶段1", tooltip: 
                            {
                                endTime: '2017-10-25 18:05:06',
                                eventName:"阶段1",
                                sip:"53.53.53.2",
                                startTime: '2017-10-25 18:01:36'
                            }
                        },
                        {xAxis: 1508925906000, yAxis: "阶段1"}
                    ]
                ]
            }
        }
    ]
};