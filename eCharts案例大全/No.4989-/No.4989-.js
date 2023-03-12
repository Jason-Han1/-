

myChart.setOption({
    backgroundColor: '#fff',
    grid: {
        left: "10%", //距离左边的距离
        right: "13%", //距离右边的距离
        bottom: "10%", //距离下边的距离
        top: "8%" //距离上边的距离
    },

    tooltip: {
        trigger: "axis",
        axisPointer: {
            type: "shadow",
            crossStyle: {
                color: "#999"
            }
        },
    },
    xAxis: [{
        type: "category",
        data: ['2018', '2019', '2020', ],
         axisLabel: {
            show: true,
            textStyle: {
                fontSize: 9,
                color: "#C9C8CD" //X轴文字颜色
            }
          },
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        }
    }],
    yAxis: [{
            type: "value",
             axisLabel: {
            show: true,
            textStyle: {
                fontSize: 9,
                color: "#C9C8CD" //X轴文字颜色
            }
          },
            splitLine: {
                lineStyle: {
                    color: "#C9C8CD"
                }
            },
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            }
        },
        {
            type: "value",
             axisLabel: {
            show: true,
            textStyle: {
                fontSize: 9,
                color: "#C9C8CD" //X轴文字颜色
            }
          },
            splitLine: {
                show: false
            },
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            }
        }
    ],
    
    legend: {
        icon: 'pin',
        orient: 'horizontal',
        align: 'left',
        top: 10,
        right: '0',
        itemWidth: 10,
        itemHeight: 2,
          textStyle:{
            fontSize:8
          },
    },
    series: [{
            name: "无杠杆自由现金流（FCFF）",
            type: "bar",
            data: [-119344.57, -135331.16, -152576.18],
            barGap: '-100%',
            barCategoryGap: '60%',
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: '#2D99FF'
                        },
                        {
                            offset: 1,
                            color: '#C7E3FC'
                        }
                    ])
                },
            },
        },
        {
            name: "增长率（FCFF）",
            type: "line",
            smooth: true,
            yAxisIndex: 1,
            data: [-0, -0.13, -0.13],
            itemStyle: {
                normal: {
                    color: "#53D09E"
                }
            }
        }
    ]
})

