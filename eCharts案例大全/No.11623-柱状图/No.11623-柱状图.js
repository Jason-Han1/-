    var gain = 0.9;
    var gap = 0;
    var myColor = ['#e63810', '#ff6b00', '#e3b61f', '#13b5b1', '#e3b61f', '#ff6b00'];
    var myBgColor = ['rgba(230,56,16,0.2)', 'rgba(255,107,0,0.2)', 'rgba(227,182,31,0.2)', 'rgba(19,181,177,0.2)', 'rgba(19,181,177,0.2)', 'rgba(19,181,177,0.2)'];
    //柱子数据
    var data = [8, 15, 10, 6, 20, 30];
    var option = {
        backgroundColor: 'rgba(255,255,255)',
        grid: {
            left: '0%',
            top: '0%',
            right: '2%',
            bottom: '5%'
        },
        xAxis: [{
            type: 'category',
            axisLabel: {
                textStyle: {
                    color: "rgba(238,238,238,0.8)",
                    fontSize: 12,
                }
            },
            axisTick: {
                show: false
            },
            axisLine: {
                show: false
            },
            splitNumber: 6,
            data: ['01', '02', '03', '04', '05', '06']
        }, {
            type: 'category',
            axisTick: {
                show: false
            },
            splitNumber: 6,
            axisLine: {
                show: false
            },
            data: []
        }, ],
        yAxis: {
            type: 'value',
            show: false,
            axisTick: {
                show: false
            },
            axisLine: {
                show: false
            },

        },
        series: [{
                type: 'bar',
                xAxisIndex: 1,
                itemStyle: {
                    normal: {
                        show: true,
                        color: 'rgba(238,238,238,0.8)',
                        barBorderRadius: 50,
                        borderWidth: 0,
                        borderColor: '#333',
                    }
                },
                barWidth: 12,
                data: [33, 33, 33, 33, 33, 22]
            },
            {
                type: 'bar',
                itemStyle: {
                    normal: {
                        show: true,
                        color: function(params) {
                             var num=myColor.length;
                            
                             return new echarts.graphic.LinearGradient(
                                0, 0, 0, 1,
                                [{
                                        offset: 0,
                                        color: '#06B5D7'
                                    }, //柱图渐变色
                                    {
                                        offset: 0.5,
                                        color: myColor[params.dataIndex%num]
                                    }, //柱图渐变色
                                    {
                                        offset: 1,
                                        color: myColor[params.dataIndex%num]
                                    }, //柱图渐变色
                                ]
                            )
                        },
                        barBorderRadius: 50,
                        borderWidth: 0,
                        borderColor: '#333',
                    }
                },
                label: {
                    normal: {
                        show: false,

                    }
                },
                barWidth: 12,
                data: data
            }
        ]
    };