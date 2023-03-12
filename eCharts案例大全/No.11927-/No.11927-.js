option = {
    backgroundColor: '#202632',
    tooltip: {
        show: false
    },
    series: [{
        type: 'pie',
        // center: ['50%','64%'],
        radius: ['32%', '65%'],
        label: {
            normal: {
                color: '#fff',
                formatter: '{b}'
            }
        },
        labelLine: {
            length: 10,
            length2: 60,
        },
        data: [{
            value: 15,
            name: '上刊数',
            itemStyle: {
                normal: {
                    color: {
                        colorStops: [{
                            offset: 0,
                            color: '#43F2A6' // 0% 处的颜色
                        }, {
                            offset: 1,
                            color: '#15CF7E' // 100% 处的颜色
                        }],
                    }
                }

            }
        }, {
            value: 12,
            name: '下刊数',
            itemStyle: {
                normal: {
                    color: {
                        colorStops: [{
                            offset: 0,
                            color: '#FFBB3D' // 0% 处的颜色
                        }, {
                            offset: 1,
                            color: '#FC6827' // 100% 处的颜色
                        }],
                    }
                }
            }
        }, {
            value: 8,
            name: '上下刊数',
            itemStyle: {
                normal: {
                    color: {
                        colorStops: [{
                            offset: 0,
                            color: '#7AB7F2' // 0% 处的颜色
                        }, {
                            offset: 1,
                            color: '#3B8EF5' // 100% 处的颜色
                        }],
                    }
                }
            }
        }]
    }, {
        type: 'pie',
        radius: ['70%', '77%'],
        //center: ['50%','64%'],
        label: {
            normal: {
                show: false
            }
        },
        labelLine: {
            length: 5,
            length2: 5,
        },
        itemStyle: { //图形样式
            normal: {
                borderColor: '#1e2239',
                borderWidth: 4,
            },
        },
        data: [{
            value: 15,
            name: '上刊数',
            itemStyle: {
                normal: {
                    color: {
                        colorStops: [{
                            offset: 0,
                            color: '#43F2A6' // 0% 处的颜色
                        }, {
                            offset: 1,
                            color: '#15CF7E' // 100% 处的颜色
                        }],
                    }
                }

            }
        }, {
            value: 12,
            name: '下刊数',
            itemStyle: {
                normal: {
                    color: {
                        colorStops: [{
                            offset: 0,
                            color: '#FFBB3D' // 0% 处的颜色
                        }, {
                            offset: 1,
                            color: '#FC6827' // 100% 处的颜色
                        }],
                    }
                }
            }
        }, {
            value: 8,
            name: '上下刊数',
            itemStyle: {
                normal: {
                    color: {
                        colorStops: [{
                            offset: 0,
                            color: '#7AB7F2' // 0% 处的颜色
                        }, {
                            offset: 1,
                            color: '#3B8EF5' // 100% 处的颜色
                        }],
                    }
                }
            }
        }]
    }]
};