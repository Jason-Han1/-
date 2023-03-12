option = {
    backgroundColor: '#193d57',
    tooltip: {
        trigger: 'item',
    },
    xAxis: {
        data: ["入职", "离职", "培训"],
        axisTick: {
            show: false
        },
        axisLine: {
            show: false
        },
        axisLabel: {
            textStyle: {
                color: '#888'
            },
            margin: 20, //刻度标签与轴线之间的距离。
        },

    },
    yAxis: {
        splitLine: {
            show: true,
            lineStyle: {
                color: '#3e5f73',
                type: 'solid'
            }
        },
        axisTick: {
            show: false
        },
        axisLine: {
            show: false
        },
        axisLabel: {
            textStyle: {
                color: '#888'
            },
        }
    },
    series: [
        //下半截柱状图
        {
            type: 'bar',
            barWidth: 100,
            barGap: '-100%',
            itemStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(0,0,0,1,
                            [{
                                    offset: 0,
                                    color: "rgba(70,193,195,1)" 
                                },
                                {
                                    offset: 1,
                                     color: "rgba(70,193,195,0)" 
                                }
                            ],
                            false
                        )
                    }
                },
            data: [190,182,151]
        }, 
        
        { // 替代柱状图 默认不显示颜色，是最下方柱图（邮件营销）的value值 - 20 
            type: 'bar',
            barWidth: 100,
            barGap: '-100%',
            stack: '柱状图高度',
            itemStyle: {
                color: 'transparent'
            },
            data: [190, 182, 151]
        },
        //头部菱形
        {
            "type": "pictorialBar",
            "symbol": 'diamond',
            "symbolPosition": "end",
            "symbolSize": [100, 45],
            "symbolOffset": [0, -23],
            "z": 12,
            "itemStyle": {
                "normal": {
                    color: new echarts.graphic.LinearGradient(0,0,0,1,
                        [{
                                offset: 0,
                                color: "#55beff" 
                            },
                            {
                                offset: 1,
                                 color: "#56bfff" 
                            }
                        ],
                        false
                    ),
                }
            },
            "data": [340,294,272]
        },
        //中间菱形
        {
            "name": "",
            "type": "pictorialBar",
            "symbol": 'diamond',
            "symbolSize": [100, 45],
            "symbolOffset": [0, -17],
            "symbolPosition": "end",
            "itemStyle": {
                "normal": {
                    color: new echarts.graphic.LinearGradient(0,0,0,1,
                        [{
                                offset: 0,
                                color: "#51fffc"
                            },
                            {
                                offset: 1,
                                color: "#4efff5"
                            }
                        ],
                        false
                    ),
                }
            },
            "z": 12,
            "data": [193,185,154]
        },
        
        {
            name: '2019',
            type: 'bar',
            barWidth: 100,
            barGap: '-100%',
            stack: '柱状图高度',
            "itemStyle": {
                        "normal": {
                            color: new echarts.graphic.LinearGradient(0,0,0,1,
                                [{
                                        offset: 0,
                                        color: "#3f98cf"
                                    },
                                    {
                                        offset: 1,
                                        color: "rgba(63,152,207,0)"
                                    }
                                ],
                                false
                            ),
                        }
                    },
            data: [150,112,121]
        } 

    ]
};