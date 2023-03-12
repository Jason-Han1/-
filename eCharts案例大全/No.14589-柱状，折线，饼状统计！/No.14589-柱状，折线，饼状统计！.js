var radarDataAvg = [120, 350, 150, 350, 80, 120, 350, 450, 250, 380, 220, 120];
var weekLineData = ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'];

option = {
    color: ['#3398DB', '#ff733f'],
    grid: {
        left: '1%',
        right: '30%',
        top: '16%',
        bottom: '6%',
        containLabel: true
    },
    xAxis: {
        type: 'category',
        data: weekLineData,
    },
    yAxis: {
        name: '全年统计',
        type: 'value',
    },
    series: [{
        name: '1',
        type: 'bar',
        label: {
            normal: {
                show: true,
                position: 'top',
                formatter: '{c}'
            }
        },
        "barMaxWidth": 35, //柱状宽
        data: radarDataAvg
    }, {
        name: '2',
        smooth: true,
        type: 'line',
        lineStyle: {
            normal: {
                width: 2, //设置线宽
                shadowColor: 'rgba(0,0,0,0.4)'
            }
        },
        data: radarDataAvg
    }, {
        type: 'pie',
        center: ['85%', '50%'],
        radius: ['25%', '40%'],
        data: [{
            value: radarDataAvg[11],
            label: {
                normal: {
                    position: 'center',
                    formatter: '{d} %',
                    textStyle: {
                        color: '#87CEFA',
                        fontSize: 20
                    }
                }
            }
        }, {
            value: 100,
            name: '',
            itemStyle: {
                normal: {
                    color: '#999'
                }
            },
            label: {
                normal: {
                    position: 'center',
                    textStyle: {
                        color: '#87CEFA',
                        fontSize: 20
                    },
                    formatter: '\n十二月'
                }
            }
        }]
    }]
};

// 点击事件
myChart.on('click', function(params) {
    if (params.componentType === 'series' && params.seriesType === 'bar') {
        var dataIndex = params.dataIndex;
        myChart.setOption({
            series: [{
                name: '1',
                type: 'bar',
                "barMaxWidth": 35, //柱状宽
                data: radarDataAvg
            }, {
                name: '2',
                smooth: true,
                type: 'line',
                lineStyle: {
                    normal: {
                        width: 2, //设置线宽
                        shadowColor: 'rgba(0,0,0,0.4)'
                    }
                },
                data: radarDataAvg
            }, {
                type: 'pie',
                center: ['85%', '50%'],
                radius: ['25%', '40%'],
                data: [{
                    value: radarDataAvg[dataIndex],
                    label: {
                        normal: {
                            position: 'center',
                            formatter: '{d} %',
                            textStyle: {
                                color: '#87CEFA',
                                fontSize: 20
                            }
                        }
                    }
                }, {
                    value: 100,
                    name: '',
                    itemStyle: {
                        normal: {
                            color: '#999'
                        }
                    },
                    label: {
                        normal: {
                            position: 'center',
                            textStyle: {
                                color: '#87CEFA',
                                fontSize: 20
                            },
                            formatter: '\n' + weekLineData[dataIndex]
                        }
                    }
                }]
            }]
        })
    }
});