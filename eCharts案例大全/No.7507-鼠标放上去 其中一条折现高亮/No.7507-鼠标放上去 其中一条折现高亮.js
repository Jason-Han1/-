option = {
    backgroundColor: '#080b30',
    // backgroundColor: '#fff',
    title: {
        text: '参数的用法',
        textStyle: {
            align: 'center',
            color: 'rgba(255,255,255, 1)',
            fontSize: 20,
        },
        top: '5%',
        left: 'center',
    },
    legend: {
        //标题
        data: ['营销一部', '营销二部'] 
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type:'cross',
            // 中心线条的颜色
            lineStyle: {
                color: {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [{
                        offset: 0,
                        color: 'rgba(0, 255, 233,0)'
                    }, {
                        offset: 0.5,
                        color: 'rgba(255, 255, 255,1)',
                    }, {
                        offset: 1,
                        color: 'rgba(0, 255, 233,0)'
                    }],
                    global: false
                }
            },
        },
    },
    grid: {
        top: '5%',
        left: '5%',
        right: '5%',
        bottom: '15%',
        containLabel: true
    },
    xAxis: [{
        type: 'category',
        axisLine: {
            show: true
        },
        splitArea: {
            show: true,
            color: '#f00',
            lineStyle: {
                color: '#f00'
            },
        },
        axisLabel: {
            // type: "category",
            color: '#ff4a00',
            rotate: 45,
            // fontSize: "22px",
            // textStyle: {
            //  color: "#999",
            // },
            // margin: "14",
        },
        splitLine: {
            show: false  //x轴栅格线显示隐藏  false 隐藏
        },
        boundaryGap: false,
        data: ['1月', '2月', '3月', '4月', '5月', '6月'],
        //x轴与值间距
        axisTick:{
            show:false,  //是否显示坐标轴刻度。
        },
        offset:10,
    }],

    yAxis: [{
        type: 'value',
        min: 0,
        // max: 140,
        splitNumber: 4,
        splitLine: {
            show: true,
            lineStyle: {
                color: 'rgba(255,255,255,0.1)'
            }
        },
        axisLine: {
            show: false,
        },
        axisLabel: {
            show: false,
            margin: 20,
            textStyle: {
                color: '#d1e6eb',

            },
        },
        axisTick: {
            show: false,
        },
    }],
    series: [{
            name: '营销一部',
            type: 'line',
            smooth: true, //是否平滑
            showAllSymbol: true,
            // symbol: 'image://./static/images/guang-circle.png',
            symbol: 'circle',
            symbolSize: 25,
            lineStyle: {
                normal: {
                    color: "#6c50f3",
                    shadowColor: 'rgba(0, 0, 0, .3)',
                    shadowBlur: 0,
                    shadowOffsetY: 5,
                    shadowOffsetX: 5,
                },
            },
            label: {
                show: true,
                position: 'top',
                textStyle: {
                    color: '#6c50f3',
                }
            },
            itemStyle: {
                // 改变折现点的border 和折现点圆的颜色
                color: "yellow",
                borderColor: "pink",
                borderWidth: 3,
                shadowColor: 'rgba(0, 0, 0, .3)',
                shadowBlur: 0,
                shadowOffsetY: 2,
                shadowOffsetX: 2,
            },
            tooltip: {
                show: false
            },
            areaStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: 'rgba(108,80,243,0.3)'
                        },
                        {
                            offset: 1,
                            color: 'rgba(108,80,243,0)'
                        }
                    ], false),
                    shadowColor: 'rgba(108,80,243, 0.9)',
                    shadowBlur: 20
                }
            },
            data: [502.84, 205.97, 332.79, 281.55, 398.35, 214.02, ]
        },
        {
            name: '营销二部',
            type: 'line',
            smooth: true, //是否平滑
            showAllSymbol: true,
            // symbol: 'image://./static/images/guang-circle.png',
            symbol: 'circle',
            symbolSize: 25,
            lineStyle: {
                normal: {
                    color: "#00ca95",
                    shadowColor: 'rgba(0, 0, 0, .3)',
                    shadowBlur: 0,
                    shadowOffsetY: 5,
                    shadowOffsetX: 5,
                },
            },
            label: {
                show: true,
                position: 'top',
                textStyle: {
                    color: '#00ca95',
                }
            },

            itemStyle: {
                color: "#00ca95",
                borderColor: "#fff",
                borderWidth: 3,
                shadowColor: 'rgba(0, 0, 0, .3)',
                shadowBlur: 0,
                shadowOffsetY: 2,
                shadowOffsetX: 2,
            },
            tooltip: {
                show: false
            },
            areaStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: 'rgba(0,202,149,0.3)'
                        },
                        {
                            offset: 1,
                            color: 'rgba(0,202,149,0)'
                        }
                    ], false),
                    shadowColor: 'rgba(0,202,149, 0.9)',
                    shadowBlur: 20
                }
            },
            data: [281.55, 398.35, 214.02, 179.55, 289.57, 356.14, ],
        },
    ]
};
// 鼠标放上去的效果  加粗选中的图表坐标点和线
myChart.on('mouseover', function (params) {
    myChart.setOption({
        series:{
            name:params.seriesName,
            symbolSize:12,
            lineStyle:{
                width:12
            }
        }
    })
});
myChart.on('mouseout', function (params) {
    myChart.setOption({
        series:{
            name:params.seriesName,
            symbolSize:2,
            lineStyle:{
                width:2
            }
        }
    })
});

























