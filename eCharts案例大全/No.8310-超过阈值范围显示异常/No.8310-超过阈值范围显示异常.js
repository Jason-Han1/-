option = {
    title: {
        text: "",
        textStyle: {
            fontWeight: "normal",
            fontSize: 14
        }
    },
    tooltip: {
        trigger: 'axis',
        backgroundColor: 'rgba(0,0,0,.1)',
        textStyle: {
            color: "#666"
        },
        formatter: '{a}<br/>{c}' + '%'
    },
    grid: {
        top: 40,
        left: 60,
        bottom: 40,
        right: 50
    },
    xAxis: {
        type: 'category',
        axisLabel: {
            textStyle: {
                color: "#666",
                fontSize: 14
            }
        },
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        // nameLocation:'bottom',
        splitLine: {
            show: false
        },
        data: ['05/06', '05/07', '05/08', '05/09', '05/10', '05/11', '05/12']
    },
    yAxis: {
        type: 'value',
        min: 0,
        max: 100,
        axisLabel: {
            show: true
        },
        axisLabel: {
            textStyle: {
                color: "#666",
                fontSize: 14
            },
            formatter: function(val) {
                return val + '%';
            }
        },
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        splitLine: {
            lineStyle: {
                type: 'dashed'
            }
        },
        interval: 20,
    },
    visualMap: {
        top: 10,
        right: 10,
        textGap: 5,
        itemWidth: 15,
        show: false,
        orient: 'horizontal',
        left: 'center',
        pieces: [{
                gt: 0,
                lte: 20,
                color: '#fe3f0c',
                // areaStyle: 'rgba(82,209,176,.2)'
            }, {
                gt: 20,
                lte: 90,
                color: '#52d1b0',
                // areaStyle: 'rgba(231,177,48,.2)'
            },
            {
                gt: 90,
                lte: 100,
                color: '#fe3f0c',
                // areaStyle: 'rgba(254,63,12,.2)'
            },
            {
                gt: 100,
                color: '#fe3f0c'
            }
        ],
    },
    series: {
        name: '',
        type: 'line',
        markLine: {
            silent: true,
            symbol: false,
            data: [{
                    yAxis: 20,
                    lineStyle: {
                        normal: {
                            color: "#fe460d",
                            width: 1,
                            type: "dashed"
                        }
                    },
                    itemStyle: {
                        normal: {
                            label: {
                                // position: 400,
                                formatter: function(
                                    params
                                ) {
                                    return (
                                        params
                                        .value +
                                        "%"
                                    );
                                }
                            }
                        }
                    }
                },
                {
                    yAxis: 90,
                    lineStyle: {
                        normal: {
                            color: "#fe460d",
                            width: 1,
                            type: "dashed"
                        }
                    },
                    itemStyle: {
                        normal: {
                            label: {
                                // position: 400,
                                formatter: function(
                                    params
                                ) {
                                    return (
                                        params
                                        .value +
                                        "%"
                                    );
                                }
                            }
                        }
                    }
                }
            ]
        },
        data: [2, 46, 99, 8, 76, 52, 97]
    }
};