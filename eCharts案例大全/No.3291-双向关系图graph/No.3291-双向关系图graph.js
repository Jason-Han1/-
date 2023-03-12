option = {
    title: {
        text: 'Graph 简单示例'
    },
    tooltip: {},
    animationDurationUpdate: 1500,
    animationEasingUpdate: 'quinticInOut',
    series: [
        {
            type: 'graph',
            layout: 'none',
            symbolSize: 50,
            roam: true,
            label: {
                show: true
            },
            edgeSymbol: ['circle', 'arrow'],
            edgeSymbolSize: [4, 10],
            edgeLabel: {
                fontSize: 20
            },
            data: [{
                name: '节点1',
                x: 300,
                y: 300
            }, {
                name: '节点2',
                x: 800,
                y: 300
            }, {
                name: '节点3',
                x: 550,
                y: 100
            }, {
                name: '节点4',
                x: 450,
                y: 380
            }],
            links: [
                {
                    source: '节点1',
                    target: '节点3',
                    label: {
                        show: true,
                        color: '#FF29D0',
                        offset: [120,0]
                    },
                    lineStyle: {
                        color: {
                            type: 'linear',
                            colorStops: [{
                                offset: 0, color: '#2BD8FF' // 0% 处的颜色
                            }, {
                                offset: 0, color: '#FF29D0' // 100% 处的颜色
                            }],
                            global: false // 缺省为 false
                        }
                    }
                },
                {
                    source: '节点3',
                    target: '节点1',
                    label: {
                        show: true,
                        color: '#2BD8FF',
                        offset: [-120,0]
                    },
                    lineStyle: {
                        color: {
                            type: 'linear',
                            colorStops: [{
                                offset: 0, color: '#2BD8FF' // 0% 处的颜色
                            }, {
                                offset: 1, color: '#FF29D0' // 100% 处的颜色
                            }],
                            global: false // 缺省为 false
                        }
                    }
                },
                {
                    source: '节点2',
                    target: '节点3',
                    label: {
                        show: true,
                        color: '#FF29D0',
                        offset: [120,0]
                    },
                    lineStyle: {
                        color: {
                            type: 'linear',
                            colorStops: [{
                                offset: 0, color: '#2BD8FF' // 0% 处的颜色
                            }, {
                                offset: 0, color: '#FF29D0' // 100% 处的颜色
                            }],
                            global: false // 缺省为 false
                        }
                    }
                },
                {
                    source: '节点3',
                    target: '节点2',
                    label: {
                        show: true,
                        color: '#2BD8FF',
                        offset: [-120,0]
                    },
                    lineStyle: {
                        color: {
                            type: 'linear',
                            colorStops: [{
                                offset: 0, color: '#2BD8FF' // 0% 处的颜色
                            }, {
                                offset: 1, color: '#FF29D0' // 100% 处的颜色
                            }],
                            global: false // 缺省为 false
                        }
                    }
                },
                {
                    source: '节点3',
                    target: '节点2',
                    label: {
                        show: true,
                        color: '#2BD8FF',
                        offset: [-120,0]
                    },
                    lineStyle: {
                        color: {
                            type: 'linear',
                            colorStops: [{
                                offset: 0, color: '#2BD8FF' // 0% 处的颜色
                            }, {
                                offset: 1, color: '#FF29D0' // 100% 处的颜色
                            }],
                            global: false // 缺省为 false
                        }
                    }
                },
                {
                    source: '节点3',
                    target: '节点4',
                    label: {
                        show: true,
                        color: '#2BD8FF',
                        offset: [-120,0]
                    },
                    lineStyle: {
                        color: {
                            type: 'linear',
                            colorStops: [{
                                offset: 0, color: '#2BD8FF' // 0% 处的颜色
                            }, {
                                offset: 1, color: '#FF29D0' // 100% 处的颜色
                            }],
                            global: false // 缺省为 false
                        }
                    }
                },
                {
                    source: '节点4',
                    target: '节点3',
                    label: {
                        show: true,
                        color: '#FF29D0',
                        offset: [120,0]
                    },
                    lineStyle: {
                        color: {
                            type: 'linear',
                            colorStops: [{
                                offset: 0, color: '#2BD8FF' // 0% 处的颜色
                            }, {
                                offset: 0, color: '#FF29D0' // 100% 处的颜色
                            }],
                            global: false // 缺省为 false
                        }
                    }
                },
                
            ],
            lineStyle: {
                opacity: 0.9,
                width: 2,
                curveness: 0
            }
        }
    ]
};