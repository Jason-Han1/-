option = {
    backgroundColor: 'rgba(0,0,0,1)',
    title: [{
            text: '年份分布',
            left: '25%',
            top: '20',
            textStyle: {
                color: '#fff',
                fontSize: 12,
                fontWeight: 'normal',
            }
        },
        {
            text: '洲市分布',
            left: '70%',
            top: '20',
            textStyle: {
                color: '#fff',
                fontSize: 12,
                fontWeight: 'normal',
            }
        },
    ],
    tooltip:[
        {
                trigger: 'axis',
                formatter:"{c} 起",
                borderColor:'#4ddfd3',
                borderWidth:1,
                backgroundColor:'rgba(77,223,221,0.2)',
                color:'#fff',
                borderRadius:10,
            },
        ],
            
    xAxis: [{
            "show": true,
            "axisLine": {
                lineStyle: {
                    color: '#06d3c4',
                }
            },
            axisLabel: {
                textStyle: {
                    color: '#fff'
                },
                interval:0
            },
            splitLine: {
                show: true,
                lineStyle: {
                    color: '#06d3c4',
                    opacity: 0.3,
                    type: 'dashed',
                }
            },
            axisTick:{
                show:true,
                alignWithLabel:true,
            },
            boundaryGap: false,//坐标轴两边留白
            data: [2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018],
            gridIndex: 1,

        },
        {
            max:15,
            "show": true,
             "axisLine": {
                lineStyle: {
                    color: '#06d3c4',
                }
            },
            axisLabel: {
                textStyle: {
                    color: '#fff'
                },
                interval:0
            },
            splitLine: {
                show: true,
                lineStyle: {
                    color: '#06d3c4',
                    opacity: 0.3,
                    type: 'dashed',
                }
            },
            axisTick:{
                show:true,
                alignWithLabel:true,
            },
            boundaryGap: false,
            data: ['昆明', '保山', '曲靖', '楚雄', '昭通', '大理', '普洱', '红河', '玉溪', '文山', '德宏', '版纳', '丽江', '迪庆', '怒江', '临沧']
        }
    ],
    yAxis: [{
            min: 0,
            max: 300,
            "axisLine": {
                lineStyle: {
                    color: '#06d3c4',
                }
            },
            splitLine: {
                show: true,
                lineStyle: {
                    color: '#06d3c4',
                    opacity: 0.1,
                }
            },
            "axisTick": {
                "show": false,
                lineStyle: {
                    color: '#06d3c4',
                }
            },
            axisLabel: {
                textStyle: {
                    color: '#06d3c4',
                    opacity: 0.4
                }
            },
            gridIndex: 1
        },
        {
            min: 0,
            max: 300,
            "axisLine": {
                lineStyle: {
                    color: '#06d3c4',
                }
            },
            splitLine: {
                show: true,
                lineStyle: {
                    color: '#06d3c4',
                    opacity: 0.1,
                }
            },
            "axisTick": {
                "show": false,
                lineStyle: {
                    color: '#06d3c4',
                }
            },
            axisLabel: {
                textStyle: {
                    color: '#06d3c4',
                    opacity: 0.4
                }
            },

        },
    ],
    grid: [{
        left: '50%'
    }, {
        right: '55%'
    }],
    series: [{
            type: 'line',
            symbol: 'circle',
            symbolSize: 8,
            itemStyle: {
                normal: {
                    color: '#4ddfd3',
                    opacity: 0.5,
                    lineStyle: {
                        color: "#4ddfd3",
                        width: 1
                    },
                    areaStyle: {
                        //color: '#94C9EC'
                        color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                            offset: 0,
                            color: 'rgba(77,223,221,0.3)'
                        }, {
                            offset: 1,
                            color: 'rgba(77,223,221,0.6)'
                        }]),
                    }
                }
            },
            data: [220, 182, 191, 234, 290, 33, 22,120,220, 182, 191, 234, 290, 33, 22,120],
            xAxisIndex: 1,
            yAxisIndex: 1
        },
        {
            type: 'line',
            symbol: 'circle',
            symbolSize: 8,
            itemStyle: {
                normal: {
                    color: '#4ddfd3',
                    opacity: 0.5,
                    lineStyle: {
                        color: "#4ddfd3",
                        width: 1
                    },
                    areaStyle: {
                        //color: '#94C9EC'
                        color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                            offset: 0,
                            color: 'rgba(77,223,221,0.3)'
                        }, {
                            offset: 1,
                            color: 'rgba(77,223,221,0.6)'
                        }]),
                    }
                }
            },
            data: [220, 182, 191, 234, 290, 33, 22,120]
        }
    ]
};