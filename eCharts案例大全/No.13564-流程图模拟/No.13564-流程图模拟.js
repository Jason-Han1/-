option = {
            title: {
                text: '流程图模拟'
            },
            tooltip: {},
            xAxis: {
                type : 'value',
                boundaryGap : false,
                show: false,
            },
            yAxis: {
                type : 'value',
                show: false,
            },
            series: [
                {
                    type: 'graph',
                    layout: 'none',
                    coordinateSystem: 'cartesian2d',
                    symbolSize: 40,
                    label: {
                        normal: {
                            show: true
                        }
                    },
                    data: [{
                        name: '零售',
                        value: [10, 20],
                    }, {
                        name: '统一平台',
                        value: [10, 10],
                        tooltip: {
                            formatter: '1245元',
                        },
                    },{
                        name: '家居',
                        value: [0, 0],
                    }, {
                        name: '旅游',
                        value: [20, 0]
                    }],
                },
                {
                    name: 'lineDemo',
                    type: 'lines',
                    symbol: ['none', 'none'],
                    symbolSize: 10,
                    coordinateSystem: 'cartesian2d',
                    effect: {
                        show: true,
                        period: 6,
                        trailLength: 0,
                        symbolSize: 15,
                        symbol: 'arrow',
                    },
                    label: {
                        show: true,
                        position: 'middle',
                    },
                    lineStyle: {
                        normal: {
                            color:'green',
                            width: 2,
                            opacity: 1,
                            curveness: 0
                        }
                    },
                    data: [{
                        name: '1350笔',
                        coords: [[10.5, 20], [10.5, 10]],
                    }, {
                        name: '1240笔',
                        coords: [[9.5, 10], [9.5, 20]],
                    }, {
                        name: '1545笔',
                        coords: [[0, 0.5], [9.5, 10]],
                    }, {
                        name: '1978笔',
                        coords: [[10, 9.5], [0.5, 0]],
                        label: {
                            padding: [0, 0, -20, 0],
                        },
                    }, {
                        name: '1989笔',
                        coords: [[10, 9.5], [19.5, 0]],
                        label: {
                            padding: [0, 0, -20, 0],
                        },
                    }, {
                        name: '1345笔',
                        coords: [[20, 0.5], [10.5, 10]],
                    }]
                }
            ]
        };