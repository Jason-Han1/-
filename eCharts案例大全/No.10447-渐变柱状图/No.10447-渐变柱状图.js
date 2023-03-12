option = {
    // tooltip : {
    //     trigger: 'axis',
    //     axisPointer : {            // 坐标轴指示器，坐标轴触发有效
    //         type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
    //     },
    //     formatter: function (params) {
    //         var tar = params[1];
    //         return tar.name + '<br/>' + tar.seriesName + ' : ' + tar.value;
    //     }
    // },
    backgroundColor: "#344b58",
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: {
        type: 'category',
        splitLine: {
            show: false
        },
        data: ['回访\n总数', '非常\n满意', '基本\n满意', '未表态', '不满意'],

        axisTick: {
            show: false
        },
        axisLine: {
            lineStyle: {
                color: 'rgba(131,141,148,0.2)',
                width: 2
            }
        },

        axisLabel: {
            color: 'rgba(255,255,255,0.7)',
            fontSize: 22
        },

    },
    yAxis: {
        type: 'value',
        axisTick: {
            show: false
        },
        axisLine: {
            show: false
        },
        axisLabel: {
            show: false
        },
        splitLine: {
            show: false
        }
    },
    series: [{
            name: '满意度',
            type: 'bar',
            stack: '总量',
            barWidth: 20,

            itemStyle: {
                normal: {
                    barBorderColor: 'rgba(0,0,0,0)',
                    color: 'rgba(0,0,0,0)'
                },
                emphasis: {
                    barBorderColor: 'rgba(0,0,0,0)',
                    color: 'rgba(0,0,0,0)'
                }
            },
            data: [0, 1700, 1400, 1200, 300]
        },
        {
            name: '满意度',
            type: 'bar',
            stack: '总量',
            barWidth: 20,
            label: {
                normal: {
                    show: true,
                    position: 'top',
                    fontSize: 20,
                    fontWeight: 400,
                    color: 'rgba(255,255,255,0.75)'
                }
            },
            itemStyle: {
                normal: {
                    color: function(params) {
                        if (params.dataIndex === 0) {
                            return {
                                type: 'linear',
                                x: 0,
                                y: 0,
                                x2: 0,
                                y2: 1,
                                colorStops: [{
                                    offset: 0,
                                    color: 'rgba(35,157,250,1)' // 0% 处的颜色
                                }, {
                                    offset: 1,
                                    color: 'rgba(35,157,250,0)' // 100% 处的颜色
                                }],
                                global: false // 缺省为 false
                            }

                        } else {
                            return {
                                type: 'linear',
                                x: 0,
                                y: 0,
                                x2: 0,
                                y2: 1,
                                colorStops: [{
                                    offset: 0,
                                    color: 'rgba(192,247,255,1)' // 0% 处的颜色
                                }, {
                                    offset: 1,
                                    color: 'rgba(192,247,255,0.2)' // 100% 处的颜色
                                }],
                                global: false // 缺省为 false
                            }
                        }
                    }
                }
            },
            data: [2900, 1200, 300, 200, 900]
        }
    ]
};