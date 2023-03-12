option = {
    angleAxis: {
        type: 'category',
        data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
        z: 10,
        axisLine: {
            lineStyle: {
                color: '#44FCF7'
            }
        },
        axisLabel: {
            color: '#06D3CD'
        }
    },
    radiusAxis: {
        axisLine: {
            lineStyle: {
                color: '#44FCF7'
            }
        },
        axisLabel: {
          color: '#3697AD',
          align: 'center',
        },
        splitLine: {
            lineStyle: {
                color: '#3697AD'
            }
        },
    },
    polar: {
    },
    series: [{
        type: 'bar',
        data: [
            {
                value: 1500,
                itemStyle: {
                    normal: {
                         color: {
                            type: 'linear',
                            x: 0,
                            y: 1,
                            x2: 1,
                            y2: 0,
                            colorStops: [{
                                offset: 0, color: 'rgba(8, 228, 222, 0.2)' // 0% 处的颜色
                            }, {
                                offset: 0.6, color: '#FFFC00' // 100% 处的颜色
                            }],
                        }
                    }
                }
            }, 
            {
                value: 1500,
                itemStyle: {
                    normal: {
                         color: {
                            type: 'linear',
                            x: 0,
                            y: 0.4,
                            x2: 1,
                            y2: 0,
                            colorStops: [{
                                offset: 0, color: 'rgba(8, 228, 222, 0.2)' // 0% 处的颜色
                            }, {
                                offset: 0.6, color: '#FFFC00' // 100% 处的颜色
                            }],
                        }
                    }
                }
            }, 
            {
                value: 1500,
                itemStyle: {
                    normal: {
                         color: {
                            type: 'linear',
                            x: 0,
                            y: 0,
                            x2: 0.6,
                            y2: 0.6,
                            colorStops: [{
                                offset: 0, color: 'rgba(8, 228, 222, 0.2)' // 0% 处的颜色
                            }, {
                                offset: 1, color: '#FFFC00' // 100% 处的颜色
                            }],
                        }
                    }
                }
            },
            {
                value: 1500,
                itemStyle: {
                    normal: {
                         color: {
                            type: 'linear',
                            x: 0,
                            y: 0,
                            x2: 0.2,
                            y2: 1.2,
                            colorStops: [{
                                offset: 0, color: 'rgba(8, 228, 222, 0.2)' // 0% 处的颜色
                            }, {
                                offset: 0.6, color: '#FFFC00' // 100% 处的颜色
                            }],
                        }
                    }
                }
            }, 
            {
                value: 1500,
                itemStyle: {
                    normal: {
                         color: {
                            type: 'linear',
                            x: 1,
                            y: 0,
                            x2: 0,
                            y2: 1,
                            colorStops: [{
                                offset: 0, color: 'rgba(8, 228, 222, 0.2)' // 0% 处的颜色
                            }, {
                                offset: 0.6, color: '#FFFC00' // 100% 处的颜色
                            }],
                        }
                    }
                }
            }, 
            {
                value: 1500,
                itemStyle: {
                    normal: {
                         color: {
                            type: 'linear',
                            x: 1,
                            y: 0.4,
                            x2: 0,
                            y2: 0,
                            colorStops: [{
                                offset: 0, color: 'rgba(8, 228, 222, 0.2)' // 0% 处的颜色
                            }, {
                                offset: 0.6, color: '#FFFC00' // 100% 处的颜色
                            }],
                        }
                    }
                }
            }, 
            {
                value: 1500,
                itemStyle: {
                    normal: {
                         color: {
                            type: 'linear',
                            x: 0.78,
                            y: 1,
                            x2: 0,
                            y2: 0,
                            colorStops: [{
                                offset: 0, color: 'rgba(8, 228, 222, 0.2)' // 0% 处的颜色
                            }, {
                                offset: 0.6, color: '#FFFC00' // 100% 处的颜色
                            }],
                        }
                    }
                }
            }],
        coordinateSystem: 'polar',
        name: 'A',
        stack: 'a',
        itemStyle: {
            normal: {
                 color: {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 1,
                    y2: 1,
                    colorStops: [{
                        offset: 0.3, color: '#FFFC00' // 0% 处的颜色
                    }, {
                        offset: 1, color: 'rgba(8, 228, 222, 0.2)' // 100% 处的颜色
                    }],
                    global: false // 缺省为 false
                }
            }
        }
    }],
    legend: {
        show: true,
        data: ['A', 'B', 'C']
    }
};
