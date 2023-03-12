option = {
    backgroundColor: '#080b30',//设置底色

    grid: {
        top: '15%',
        left: '5%',
        right: '5%',
        bottom: '15%',
        // containLabel: true
    },
    xAxis: [{
        type: 'category',
        axisLine: {
            show: true,
            lineStyle: {
                color: 'rgb(94,178,214)'
            },
        },
        splitArea: {
            // show: true,
            color: '#f00',
            lineStyle: {
                color: '#f00'
            },
        },
        axisLabel: {
            color: 'rgb(94,178,214)'
        },
        splitLine: {
            show: false
        },
        boundaryGap: false,
        data: ['6-11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24'],

    }],

    yAxis: [{
        type: 'value',
        min: 0,
        // max: 140,
        splitNumber: 4,
        splitLine: {
            show: false,
            lineStyle: {
                color: 'rgb(94,178,214)'
            }
        },
        axisLine: {
            show: false,
            lineStyle: {
                color: 'rgb(94,178,214)'
            },
        },
        axisLabel: {
            show: false,
            margin: 20,
            textStyle: {
                color: '#d1e6eb',

            },
        },
        axisTick: {
            show: true,
        },
    }],
    series: [{
            name: '近14天游客数量',
            type: 'line',
            // smooth: true, //是否平滑
            showAllSymbol: true,
            // symbol: 'image://./static/images/guang-circle.png',
            symbol: 'circle',
            symbolSize: 9, //点大小
            lineStyle: {
                normal: {
                    color: 'rgb(73,145,180)',//"#6c50f3",
                    width: 5 //设置折线宽度
                },
            },
            label: {//折线上文字样式
                show: true,
                position: 'top',
                textStyle: {
                    color: 'rgb(53,247,255)'//'#6c50f3',
                }
            },
            itemStyle: {
                color: 'rgb(53,247,255)',//"#6c50f3",//设置
                borderColor: "#fff",
                borderWidth: 0,
                shadowColor: 'rgba(0, 0, 0, .3)',
                shadowBlur: 0,
                shadowOffsetY: 2,
                shadowOffsetX: 2,
            },
            
            areaStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: 'rgb(58,65,59)'
                        },
                        {
                            offset: 1,
                            color: 'rgba(108,80,243,0)'
                        }
                    ], false),
                    shadowColor: 'rgba(108,80,243, 0.9)',
                    shadowBlur: 2
                }
            },
            data: [{//单独设置最大值点的样式
                    value : 1502,
                    symbolSize: 12,
                    //自定义标签样式，仅对该数据项有效
                    label: {
                        textStyle: {
                                color: 'rgb(254,192,6)'//'#6c50f3',
                            }
                    },
                    //自定义特殊 itemStyle，仅对该数据项有效
                    itemStyle:{
                        color: 'rgb(254,192,6)',//"#6c50f3",
                    }
                }, 
            1205, 1332, 1281, 1378, 1214, 1205, 1332, 1281, 1378, 1214, 1281,
            {//单独设置第二大点的样式
                value : 1398,
                symbolSize: 12,
                    //自定义标签样式，仅对该数据项有效
                    label: {
                        textStyle: {
                                color: 'rgb(207,255,138)'//'#6c50f3',
                            }
                    },
                    //自定义特殊 itemStyle，仅对该数据项有效
                    itemStyle:{
                        color: 'rgb(207,255,138)',//"#6c50f3",
                    }
            }, 1214]
    
        },

    ]
};