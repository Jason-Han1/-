option = {
    backgroundColor:'#123456',
        grid: {
            top: '20%',
            right: '0%',
            left: '12%',
            bottom: '10%'
        },
        xAxis: [{
            type: 'category',
            data: ['优惠卡', '爱心卡', '普通卡'],
            axisLine: {
                lineStyle: {
                    color: 'rg0ba(255,255,255,0.1)'
                }
            },
            axisLabel: {
                margin: 0,
                color: '#e2e9ff',
                textStyle: {
                    fontSize: 12,
                },
            },
        }],
        yAxis: [{
            axisLabel: {
                formatter: '{value}',
                color: '#e2e9ff',
            },
            axisLine: {
                show: false
            },
            splitNumber:4,
            splitLine: {
                lineStyle: {
                    color: 'rgba(255,255,255,0.12)'
                }
            }
        }],
        series: [
        {
            type: 'bar',
            data: [{value:533330,name:'学生卡'}],
            barWidth: '5%',
            barGap:'400%',
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: 'rgba(0,244,255,1)' // 0% 处的颜色
                    }, {
                        offset: 1,
                        color: 'rgba(0,77,167,1)' // 100% 处的颜色
                    }], false),
                    barBorderRadius: [30, 30, 30, 30],
                    shadowColor: 'rgba(0,160,221,1)',
                    shadowBlur: 4,
                }
            },
            label: {
                normal: {
                    show: true,
                    color: '#fff',
                    lineHeight: 20,
                    width: 70,
                    height: 20,
                    fontSize: 8,
                    backgroundColor: 'rgba(0,160,221,0.1)',
                    borderRadius: 200,
                    position: ['-11', '-40'],
                    distance: 1,
                    formatter: function (params) {
                        return params.name+'：'+params.value+'\n' + '     {b|}';
;
                    },
                    rich: {
                        b: {
                            width: 1,
                            height: 20,
                            borderWidth: 1,
                            borderColor: '#234e6c',
                            align: 'left',
                            fontSize: 8,
                        },
                    }
                }
            }},
        {
            type: 'bar',
            data: [{value:415610,name:'成人卡'}],
            barWidth: '5%',
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: 'rgba(0,244,255,1)' // 0% 处的颜色
                    }, {
                        offset: 1,
                        color: 'rgba(0,77,167,1)' // 100% 处的颜色
                    }], false),
                    barBorderRadius: [30, 30, 30, 30],
                    shadowColor: 'rgba(0,160,221,1)',
                    shadowBlur: 4,
                }
            },
             label: {
                normal: {
                    show: true,
                    color: '#fff',
                    lineHeight: 20,
                    width: 70,
                    height: 20,
                    fontSize: 8,
                    backgroundColor: 'rgba(0,160,221,0.1)',
                    borderRadius: 200,
                    position: ['-11', '-40'],
                    distance: 1,
                    formatter: function (params) {
                        return params.name+'：'+params.value+'\n' + '     {b|}';
;
                    },
                    rich: {
                        b: {
                            width: 1,
                            height: 20,
                            borderWidth: 1,
                            borderColor: '#234e6c',
                            align: 'left',
                            fontSize: 8,
                        },
                    }
                }
            }
        },
        {
            type: 'bar',
            data: [{value:533330,name:'学生卡'}, {value:415610,name:'成人卡'}, {value:3231931,name:'老人卡'}],
            barWidth: '5%',
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: 'rgba(0,244,255,1)' // 0% 处的颜色
                    }, {
                        offset: 1,
                        color: 'rgba(0,77,167,1)' // 100% 处的颜色
                    }], false),
                    barBorderRadius: [30, 30, 30, 30],
                    shadowColor: 'rgba(0,160,221,1)',
                    shadowBlur: 4,
                }
            },
             label: {
                normal: {
                    show: true,
                    color: '#fff',
                    lineHeight: 20,
                    width: 70,
                    height: 20,
                    fontSize: 8,
                    backgroundColor: 'rgba(0,160,221,0.1)',
                    borderRadius: 200,
                    position: ['-11', '-40'],
                    distance: 1,
                    formatter: function (params) {
                        return params.name+'：'+params.value+'\n' + '     {b|}';
;
                    },
                    rich: {
                        b: {
                            width: 1,
                            height: 20,
                            borderWidth: 1,
                            borderColor: '#234e6c',
                            align: 'left',
                            fontSize: 8,
                        },
                    }
                }
            }
        },
        {
            type: 'bar',
            data: [{value:533330,name:'员工卡'}],
            barWidth: '5%',
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: 'rgba(0,244,255,1)' // 0% 处的颜色
                    }, {
                        offset: 1,
                        color: 'rgba(0,77,167,1)' // 100% 处的颜色
                    }], false),
                    barBorderRadius: [30, 30, 30, 30],
                    shadowColor: 'rgba(0,160,221,1)',
                    shadowBlur: 4,
                }
            },
             label: {
                normal: {
                    show: true,
                    color: '#fff',
                    lineHeight: 20,
                    width: 70,
                    height: 20,
                    fontSize: 8,
                    backgroundColor: 'rgba(0,160,221,0.1)',
                    borderRadius: 200,
                    position: ['-11', '-40'],
                    distance: 1,
                    formatter: function (params) {
                        return params.name+'：'+params.value+'\n' + '     {b|}';
;
                    },
                    rich: {
                        b: {
                            width: 1,
                            height: 20,
                            borderWidth: 1,
                            borderColor: '#234e6c',
                            align: 'left',
                            fontSize: 8,
                        },
                    }
                }
            }
        },
        ]
    };