option = {
    legend: {
                bottom: '85%',
                right:'3%',
                textStyle: {
                    color: 'rgb(63,80,124)',
                    fontSize: 14
                },
                selectedMode:false,
                data: ['不坐公交', '坐公交']
            },
            grid: {
                left: '-5%',
                right: '1%',
                bottom: '10%',
                containLabel: true
            },

            yAxis: {
                show:false
            },
            xAxis: [{
                    type: 'category',
                    axisTick: {
                        show: false
                    },
                    axisLine: {
                        show: true,
                        lineStyle: {
                            color: 'rgb(148,158,219)',
                            width: 2
                        }
                    }, 
                    axisLabel: {
                        color: 'rgb(63,80,124)',
                        fontWeight: 'bold',
                        fontSize: 12,
                        interval:0   
                    },
                    data: ['站点站站点', '站点站点站点', '站点站点站点', '站站点站点站', '站点站点站点']
                }, {
                    type: 'category',
                    show: false,
                    axisLine: {
                        show: false,
                        lineStyle: {
                            color: 'rgb(148,158,219)',
                            width: 2
                        }
                    },
                    data: ['站点1', '站点2', '站点3', '站点4', '站点5']
                },

            ],
            series: [{
                    name: '不坐公交',
                    type: 'bar',
                    xAxisIndex: 1,

                    itemStyle: {
                        normal: {
                            show: true,
                    //     color: 'rgb(255,71,5)',
                            // color: new echarts.graphic.LinearGradient(2, 0, 1, 0, [{//4个参数用于配置渐变色的起止位置, 这4个参数依次对应右/下/左/上四个方位
                            //     offset: 0,
                            //     color: 'rgb(254,42,18)'
                            // }, {
                            //     offset: 1,
                            //     color: 'rgb(253,137,83)'
                            // }, {
                            //     offset: 2,
                            //     color: 'rgb(253,137,83)'
                            // }],false),
                            color: {
                                type: 'radial',
                                x: 0.5,
                                y: 0.6,//圆心 x, y
                                r: 3,//半径
                                colorStops: [{
                                    offset: 0, color: 'rgb(254,42,18)' // 0% 处的颜色
                                }, {
                                    offset: 1, color: 'rgb(253,137,83)' // 100% 处的颜色
                                }],
                                globalCoord: true // 缺省为 false
                            },
                            barBorderRadius: 50,
                            borderWidth: 0,
                            borderColor: '#333',
                        }
                    },
                    label: {
                        normal: {
                            show: true,
                            position: 'top',
                            textStyle: {
                                color: 'rgb(63,80,124)',
                                fontSize: 14
                            }
                        }
                    },
                    barWidth: '20%',
                    data: [43, 33, 53, 23, 57]
                }, {
                    name: '坐公交',
                    type: 'bar',
                    itemStyle: {
                        normal: {
                            show: true,
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: 'rgb(55,220,231)'
                            }, {
                                offset: 1,
                                color: 'rgb(0,88,241)'
                            }],false),
                            barBorderRadius: 50,
                            borderWidth: 0,
                            borderColor: '#333',
                        }
                    },
                    label: {
                        normal: {
                            show: true,
                            position: 'top',
                             distance: 0, //文字距离柱状图的距离像素
                            textStyle: {
                                color: 'rgb(63,80,124)',
                                fontSize: 14
                            }
                        }
                    },
                    zlevel: 5,
                    barWidth: '20%',
                    data: [8, 15, 10, 15, 10]
        }

    ]
};