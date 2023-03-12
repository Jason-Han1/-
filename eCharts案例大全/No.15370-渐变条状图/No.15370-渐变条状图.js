var data = [53, 85, 60, 45, 53];
var xMax = 100;
var axisColor = '#fff';
option = {
    tooltip: {
        show: true,
        formatter: "{b} <br> {c}件"

    },

    xAxis: [{
        axisTick: {
            show: false,
            // color:'#fff',
        },
        axisLine: {
            show: false,
        },
        axisLabel: {
            show: false
                //color:'#fff',
        },
        splitLine: {
            show: false,
            // color:'#fff',
        }
    }],
    yAxis: [{
        type: 'category',
        data: ['其他来源', '质检电话', '12345', '12315', '12301', ],

        axisTick: {
            // color:'#fff',
            show: false,
        },
        axisLine: {
            //  color:'#fff',
            show: false,
        },
        axisLabel: {
            textStyle: {
                color: '#fff',
            }
        }

    }],
    series: [{
        name: ' ',
        type: 'bar',
        barWidth: 16,
        silent: true,
        itemStyle: {
            normal: {
                color: '#0B2A54',
                barBorderRadius: [0, 5, 5, 0],

            }

        },
        barGap: '-100%',
        barCategoryGap: '50%',
        data: data.map(function(d) {
            return xMax
        }),
    }, {
        name: ' ',
        type: 'bar',
        barWidth: 16,
        label: {
            normal: {
                show: true,
                position: 'top',
                formatter: '{c}%',
            }
        },
        data: [{
            value: 53,
            itemStyle: {
                normal: {
                    barBorderRadius: [0, 10, 10, 0],
                    color: {
                        type: 'bar',
                        colorStops: [{
                            offset: 0,
                            color: 'rgba(11,42,84,.3)' // 0% 处的颜色
                        }, {
                            offset: 1,
                            color: '#ffa800' // 100% 处的颜色
                        }],
                        globalCoord: false, // 缺省为 false

                    }
                }
            }
        }, {
            value: 53,
            itemStyle: {
                // normal:{color:'#b250ff',barBorderRadius:[0,10,10,0],}
                normal: {
                    barBorderRadius: [0, 10, 10, 0],
                    color: {
                        type: 'bar',
                        colorStops: [{
                            offset: 0,
                            color: 'rgba(11,42,84,.3)' // 0% 处的颜色
                        }, {
                            offset: 1,
                            color: '#b250ff' // 100% 处的颜色
                        }],
                        globalCoord: false, // 缺省为 false

                    }
                }
            }
        }, {
            value: 53,
            itemStyle: {
                // normal:{color:'#4f9aff',barBorderRadius:[0,10,10,0],}
                normal: {
                    barBorderRadius: [0, 10, 10, 0],
                    color: {
                        type: 'bar',
                        colorStops: [{
                            offset: 0,
                            color: 'rgba(11,42,84,.3)' // 0% 处的颜色
                        }, {
                            offset: 1,
                            color: '#4f9aff' // 100% 处的颜色
                        }],
                        globalCoord: false, // 缺省为 false

                    }
                }
            }
        }, {
            value: 53,
            itemStyle: {
                // normal:{color:'#4bf3ff',barBorderRadius:[0,10,10,0],  },
                normal: {
                    barBorderRadius: [0, 10, 10, 0],
                    color: {
                        type: 'bar',
                        colorStops: [{
                            offset: 0,
                            color: 'rgba(11,42,84,.3)' // 0% 处的颜色
                        }, {
                            offset: 1,
                            color: '#4bf3ff' // 100% 处的颜色
                        }],
                        globalCoord: false, // 缺省为 false

                    }
                }

            }
        }, {

            value: 53,
            itemStyle: {
                // normal:{color:'#ffa800',barBorderRadius:[0,10,10,0],}
                normal: {
                    barBorderRadius: [0, 10, 10, 0],
                    color: {
                        type: 'bar',
                        colorStops: [{
                            offset: 0,
                            color: 'rgba(11,42,84,.3)' // 0% 处的颜色
                        }, {
                            offset: 1,
                            color: '#ffa800' // 100% 处的颜色
                        }],
                        globalCoord: false, // 缺省为 false

                    }
                }
            }
        }, ],
    }]
};