option={
    backgroundColor: '#fff',
      grid: {
        top: "20%",
        bottom: "15%",
        left:"5%",
        right:"5%"
      },
    tooltip: {
        trigger: "axis",
        extraCssText: 'background: #fff; border-radius: 0;box-shadow: 0 0 10px 0 rgba(49,144,255,0.30);color: #333;',
        axisPointer: {
            type: 'shadow',
            shadowStyle: {
                color: '#ffffff',
                shadowColor: 'rgba(49,144,255,0.30)',
                shadowBlur: 5,
            }
        }
    },
    legend: {
        data: ["销售量", "业务1", "业务2"],
        top: "2%",
        right:'60',
        icon:"circle",
        itemGap: 10, // 各个item之间的间隔，单位px，默认为10，
        itemWidth: 8, // 图例图形宽度
        itemHeight: 8, // 图例图形高度
        textStyle: {
            color: "#666",
            fontSize: 12,
            fontFamily:"SourceHanSansCN-Normal"
        }
    },
    xAxis: {
        type: 'category',
        data: ["区域1", "区域2", "区域3", "区域4", "区域5", "区域6"],
        axisLine: {
            show: false, //隐藏X轴轴线
        },
        axisTick: {
            show: false //隐藏X轴刻度
        },
        axisLabel: {
            show: true,
            textStyle: {
                color: "#666",
                fontSize: 12,
                fontFamily:"PingFangSC-Regular"
            }
        },
        splitArea: {
            show: false
        },
        boundaryGap: true,
    },
    yAxis: [{
        type: "value",
        name: "单位（%）",
        nameTextStyle: {
            color: "#666",
            fontSize: 12,
            fontFamily:"SourceHanSansCN-Normal",
            padding:[0,0,0,20]
        },
        splitLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLine: {
            show: false,
        },
        axisLabel: {
            show: true,
            textStyle: {
                color: "#666",
                fontSize: 12,
                fontFamily:"HelveticaNeue"
            }
        },

    }
    ],
    series: [{
        name: "销售量",
        type: "line",
        zlevel: 10,
        smooth: true, //平滑曲线显示
        showAllSymbol: true, //显示所有图形。
        symbol: "circle", //标记的图形为实心圆
        symbolSize: 9, //标记的大小
        itemStyle: {
            //折线拐点标志的样式
            color: "#FFC92A",
            borderColor: "#fff",
            borderWidth: 2,
            width: 2,
        },
        lineStyle: {
            color: "#FFC92A",
            width:4,
        },
        data: [42, 35, 89, 78, 56, 93]
    },
     { // For shadow
            type: 'bar',
            barWidth: 20,
            itemStyle: {
                normal: {
                    color: 'rgba(242,246,246,0.7)',
                }
            },
            barGap:'-100%',
            barCategoryGap:'40%',
            data: [100,100,100,100,100,100],
            animation: false
        },
        {
            name: "业务1",
            type: "bar",
            zlevel: 10,
            barWidth: 20,
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: "#3D9FFF"
                    },
                        {
                            offset: 1,
                            color: "#41D7F3"
                        }
                    ]),
                shadowBlur: 12,
				shadowColor: 'rgba(137,201,255,0.50)',
				shadowOffsetX: 5,
				shadowOffsetY: 5
                }
            },
            data: [74, 93, 62, 38, 63, 95]
        }
    ]
};