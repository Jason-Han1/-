var option = {
    legend: {
        show:false
    },
    grid: {
        show:false
    },
    xAxis: {
        type: 'value',
        scale: true,
        min: 0,
        max: 100,
        splitNumber: 10,
        boundaryGap: ['20%', '20%'],
        axisLabel: {
            show: true,
            interval: 0,
            margin: 6,
            formatter: function(value, index) {
                if (index % 5 === 0) {
                    return value + '%';
                } else {
                    return '';
                }
            }
        },
        axisTick: {
            show: true,
            interval: 10,
            lineStyle: {
                color: '#EBF6FE' //'#EBF6FE'
            },
        },
        axisLine: {
            show: false,
            lineStyle: {
                color: '#EBF6FE' //'#EBF6FE','{value} %'
            }
        },
        splitLine: {
            show: false
        },
    },
    yAxis: [{
        type: 'category',
        axisTick: {
            show: false,
            lineStyle: {
                color: 'blue'
            }
        },
        axisLine: {
            show: false,
            lineStyle: {
                color: 'blue',
            }
        },
        data: ['']
    }, {
        show: false,
        type: 'category',
        axisTick: {
            show: false,
        },
        axisLine: {
            show: false,
        },
        data: ['']
    }],
    series: [{
            name: '异常名录', //#EBF6FE'
            type: 'bar',
            yAxisIndex: 1,
            barWidth: 150,
            silent: true,
            itemStyle: {
                normal: {
                    show: true,
                    color: {
                        type: 'linear',
                        x: 0,
                        y: 0,
                        x2: 1,
                        y2: 0,
                        colorStops: [{
                            offset: 0,
                            color: '#EBF6FE' // 0% 处的颜色
                        }, {
                            offset: 1,
                            color: '#EBF6FE' // 100% 处的颜色
                        }],
                        globalCoord: false // 缺省为 false
                    },
                    barBorderRadius: 100,
                    borderWidth: 0,
                    borderColor: '#333',
                },
            },
            barGap: '-100%',
            barCategoryGap: '1%',
            tooltip: {
                show: true,
                //trigger: 'none'
                //alwaysShowContent:true
            },
            data: [100]
        }, {
            name: '异常名录',
            type: 'bar',
            stack: '总量',
            silent: false,
            barWidth: 110,
            itemStyle: {
                normal: {
                    barBorderColor: 'rgba(0,0,0,0)',
                    color: 'rgba(0,0,0,0)'
                },
                emphasis: {
                    barBorderColor: 'rgba(0,0,0,0)',
                    color: 'rgba(0,0,0,0)'
                }
            },
            barGap: '-100%',
            tooltip: {
                show: true,
                trigger: 'none'
                    //alwaysShowContent:true
            },
            data: [2]
        }, {
            name: '违法处罚',
            type: 'bar',
            barWidth: 120,
            silent: false,
            stack: '总量',
            itemStyle: {
                normal: {
                    show: true,
                    color: {
                        type: 'linear',
                        x: 0,
                        y: 0,
                        x2: 1,
                        y2: 0,
                        colorStops: [{
                            offset: 0,
                            color: '#5471C4' // 0% 处的颜色
                        }, {
                            offset: 1,
                            color: '#E51D81' // 100% 处的颜色
                        }],
                        globalCoord: false // 缺省为 false
                    },
                    barBorderRadius: [180, 0, 0, 180],
                    borderWidth: 0,
                    borderColor: '#333',
                }
            },
            barGap: '-100%',
            barCategoryGap: '1%',
            data: [73],
            markPoint: {
                //symbol:'image://E:/CESH/GSCharts/img/123.png',
                data: [{
                    type: 'max',
                    name: '违法处罚',
                    fontSize: 100,
                    symbolSize: [80, 70],
                    symbolOffset: [0, '-136%'],
                    label: {
                        name: '%',
                        normal: {
                            show: true,
                            fontSize: 30,
                            color: '#ffffff',
                            offset: [0, -8],
                            formatter: '{c}%'
                        }
                    }

                }]
            }
        }

    ]
};