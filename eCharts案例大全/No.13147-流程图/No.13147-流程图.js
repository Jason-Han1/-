var data = [
            {
                name: "LCD段",
                textValue: 300,
                value: [0, 5], category: 0,
                itemStyle: {
                    color: 'green'
                },
            }, {
                name: "UPPER段",
                textValue: 300,
                value: [0, 25], category: 0,
                itemStyle: {
                    color: 'green'
                },
            }, {
                name: "组测段",
                value: [30, 5], category: 0,
                textValue: 300,
                itemStyle: {
                    color: 'green'
                },
                label: {
                    normal: {
                        show: true,
                        position: 'bottom',
                        textStyle: {
                            fontSize: 18,
                            fontWeight: 'bold',
                        }
                    }
                },
            }, {
                name: "",
                textValue: 300,
                value: [30, 25], category: 0,
                itemStyle: {
                    color: 'transparent'
                }
            }, {
                name: "",
                textValue: 300,
                value: [60, 5], category: 0,
                itemStyle: {
                    color: 'transparent'
                }
            }, {
                name: "包装段",
                textValue: 300,
                value: [60, 25], category: 0,
                itemStyle: {
                    color: 'green'
                }
            }];
        var option = {
            tooltip: {},
            xAxis: {
                show: false,
                type: 'value',
                max:60,
            },
            yAxis: {
                show: false,
                type: 'value',
                max:30
            },
            series: [
                {
                    type: 'graph',
                    layout: 'none',
                    coordinateSystem: 'cartesian2d',
                    symbolSize: 25,
                    categories: [],
                    label: {
                        normal: {
                            show: true,
                            position: 'top',
                            textStyle: {
                                fontSize: 18,
                                fontWeight: 'bold',
                            },
                            formatter: function (params) {
                                return !params.data.name ? '' : params.data.name + ' ' + params.data.textValue + '台'
                            }
                        }
                    },
                    edgeSymbol: ['circle', 'arrow'],
                    edgeSymbolSize: [4, 10],
                    data: data,
                    itemStyle: {
                        normal: {
                            label: {
                                textStyle: {
                                    color: 'rgb(114,153,201)'
                                }
                            }
                        }
                    },
                },
                {
                    type: 'lines',
                    coordinateSystem: 'cartesian2d',
                    effect: {
                        show: true,
                        smooth: false,
                        trailLength: 0,
                        symbol: "arrow",
                        symbolSize: 12
                    },
                    lineStyle: {
                        normal: {
                            color: '#00ffff',
                            width: 10,
                            curveness: 0
                        }
                    },
                    data: [
                        [{
                            coord: [0, 5]
                        }, {
                            coord: [30, 5],
                        }],
                        [{
                            coord: [0, 25]
                        }, {
                            coord: [30.2, 25],
                        }],
                        [{
                            coord: [30, 25]
                        }, {
                            coord: [30, 5],
                        }],
                        [{
                            coord: [30, 5]
                        }, {
                            coord: [60.2, 5],
                        }],
                        [{
                            coord: [60, 5]
                        }, {
                            coord: [60, 25],
                        }],
                    ]
                }]
        };