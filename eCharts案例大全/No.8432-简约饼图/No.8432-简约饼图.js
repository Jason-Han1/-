option = {
    backgroundColor: '#10286B',
    title: [{
        text: `12%`,
        subtext: '同期增长',
        top: '40%',
        left: '26%',
        textStyle: {
            width: 280,
            color: '#02fdb5',
            fontSize: 18
        },
        subtextStyle: {
            color: '#c1dbed',
            fontSize: 16
        },
        itemGap: 5
    }, {
        text: `12%`,
        subtext: '同期增长',
        top: '40%',
        left: '59%',
        textStyle: {
            width: 280,
            color: '#02fdb5',
            fontSize: 18
        },
        subtextStyle: {
            color: '#c1dbed',
            fontSize: 16
        },
        itemGap: 5
    }],
    series: [{
        name: 'pie1',
        type: 'pie',
        clockWise: true,
        radius: [70, 75],
        center: ['33%', '50%'],
        itemStyle: {
            normal: {
                labelLine: {
                    show: false
                }
            }
        },
        hoverAnimation: false,
        data: [{
            value: 80,
            name: 'completed',
            itemStyle: {
                normal: {
                    borderWidth: 5,
                    borderColor: { 
                        colorStops: [{
                            offset: 0,
                            color: '#1d54f7' // 0% 处的颜色
                        }, {
                            offset: 1,
                            color: '#68eaf9' // 100% 处的颜色
                        }]
                    },
                    color: { // 完成的圆环的颜色
                        colorStops: [{
                            offset: 0,
                            color: '#1d54f7' // 0% 处的颜色
                        }, {
                            offset: 1,
                            color: '#68eaf9' // 100% 处的颜色
                        }]
                    }
                }
            },
            label: {
                position: 'center',
                color: '#fff',
                formatter: function(params, ticket, callback) {
                    return '{s1|计划种植} \n {s2|22.3} {s3|万亩}';
                },
                rich: {
                    s1: {
                        fontSize: 18,
                        color: '#ffffff',
                        padding: [8, 0]
                    },
                    s2: {
                        fontSize: 18,
                        fontWeight: 'bold',
                        color: '#ffffff'
                    },
                    s3: {
                        fontSize: 15,
                        color: '#ffffff'
                    }
                }
            }
        }, {
            name: 'gap',
            value: 20,
            itemStyle: {
                normal: {
                    label: {
                        show: false
                    },
                    labelLine: {
                        show: false
                    },
                    color: 'rgba(0, 0, 0, 0)',
                    borderColor: 'rgba(0, 0, 0, 0)',
                    borderWidth: 0
                }
            }
        }]
    },{
        name: 'pie2',
        type: 'pie',
        clockWise: true,
        radius: [70, 75],
        center: ['66%', '50%'],
        itemStyle: {
            normal: {
                labelLine: {
                    show: false
                }
            }
        },
        hoverAnimation: false,
        data: [{
            value: 80,
            name: 'completed',
            itemStyle: {
                normal: {
                    borderWidth: 5,
                    borderColor: { 
                        colorStops: [{
                            offset: 0,
                            color: '#1d54f7' // 0% 处的颜色
                        }, {
                            offset: 1,
                            color: '#68eaf9' // 100% 处的颜色
                        }]
                    },
                    color: { // 完成的圆环的颜色
                        colorStops: [{
                            offset: 0,
                            color: '#1d54f7' // 0% 处的颜色
                        }, {
                            offset: 1,
                            color: '#68eaf9' // 100% 处的颜色
                        }]
                    }
                }
            },
            label: {
                position: 'center',
                color: '#fff',
                formatter: function(params, ticket, callback) {
                    return '{s1|计划种植} \n {s2|22.3} {s3|万亩}';
                },
                rich: {
                    s1: {
                        fontSize: 18,
                        color: '#ffffff',
                        padding: [8, 0]
                    },
                    s2: {
                        fontSize: 18,
                        fontWeight: 'bold',
                        color: '#ffffff'
                    },
                    s3: {
                        fontSize: 15,
                        color: '#ffffff'
                    }
                }
            }
        }, {
            name: 'gap',
            value: 20,
            itemStyle: {
                normal: {
                    label: {
                        show: false
                    },
                    labelLine: {
                        show: false
                    },
                    color: 'rgba(0, 0, 0, 0)',
                    borderColor: 'rgba(0, 0, 0, 0)',
                    borderWidth: 0
                }
            }
        }]
    }]
}