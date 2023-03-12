option = {
    color: ['rgba(241, 105, 34, 0.6)'],
     legend: {
        data: ['低压','差值', '高压'],
        show: false
    },
    grid: {
        containLabel: true
    },
    xAxis: {
        type: 'category',
        axisTick:{
          show: false  
        },
         axisLine: {
            show: true,
            lineStyle: {
                width: 2,
                color: new echarts.graphic.LinearGradient(
                    0, 0, 1, 0, [{
                            offset: 0,
                            color: 'rgba(35, 128, 255, 0)'
                        },
                        {
                            offset: 0.5,
                            color: 'rgba(103, 167, 255, 1)'
                        },
                        {
                            offset: 1,
                            color: 'rgba(35, 128, 255, 0)'
                        }
                    ]
                )
            }
        },
        axisLabel: {
            show: true,
            rotate: 90,
            color: 'rgba(255,255,255,0.8)',
            fontSize: 16,
            formatter: function (params){
                return params
            }
        },
        data: ['专员', '主管', '经理助理', '副经理','经理', '地区总助','地区副总', '项目总经理', '地区总经理','高级经理', '集团副总', '决策委']
    },
    yAxis: {
        type: 'value',
        min: 0, // y轴可设置最小值，当然你也可以设置最大值max
        max: 15,
        interval: 3,    // 刻度线的距离
        axisLabel: {
            show: true,
            color: 'rgba(255,255,255,0.8)',
            fontSize: 16
        },
        axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            splitLine: {
                show: true,
                lineStyle: {
                    color: new echarts.graphic.LinearGradient(
                        0, 0, 1, 0, [{
                                offset: 0,
                                color: 'rgba(255, 255, 255, 0)'
                            },
                            {
                                offset: 0.5,
                                color: 'rgba(255, 255, 255, 0.4)'
                            },
                            {
                                offset: 1,
                                color: 'rgba(255, 255, 255, 0)'
                            }
                        ]
                    )
                }
            },
    },
    series: [{
        name: '低压',
        type: 'bar',
        stack: '血压',
        label: {
            normal: {
                show: false,
                position: 'insideTop',    // 底部文字显示设置
                color: '#333'
            }
        },
        data: [1, 1, 2, 2.5, 3, 4.3, 5, 5.2, 6, 7, 9.5, 11],
        itemStyle: {
            normal: {
                color: 'transparent'        // 底部设置为透明，就可以不显示了
            }
        }
    }, {
        name: '差值',
        type: 'bar',
        stack: '血压',
        label: {
            normal: {
                show: false,
                position: 'top'
            }
        },
        data: [14, 14, 13, 12.5, 12, 10.7, 10, 9.8, 9, 8, 5.5, 4]            // 显示的这一部分柱状图，应该为血压最大值-最小值的差值
    },{
        name: '低压2',
        type: 'scatter',
        label: {
            normal: {
                show: false,
                position: 'insideTop',    // 底部文字显示设置
                color: '#333'
            }
        },
        data: [1.5, 1.5, 2.5, 3, 3.5, 4.8, 5.5, 5.7, 6.5, 7.5, 10, 11.5],
        itemStyle: {
            normal: {
                color: '#00ff00'        // 底部设置为透明，就可以不显示了
            }
        }
    }]
};