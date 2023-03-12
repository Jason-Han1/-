option = {
    title: {
        text: '七日累积任务趋势',
        textStyle: {
        	 align: 'right',
            color: '#A3C0DF',
            fontSize: 14,
        },
        right: '10%',
        top: '20%',
    },
    backgroundColor: '#0f375f',
    animation: false,
    grid: {
        top: "25%",
        bottom: "10%"//也可设置left和right设置距离来控制图表的大小
    },
    xAxis: {
        data: [
            "10.21",
            "10.20",
            "10.19",
            "10.18",
            "10.17",
            "10.16",
            "10.15"
        ],
        axisLine: {
            show: true, //隐藏X轴轴线
            lineStyle: {
                color: '#2D455A'
            }
        },
        axisTick: {
            show: false //隐藏X轴刻度
        },
        axisLabel: {
            show: true,
            margin: 14,
            fontSize: 14,
            textStyle: {
                color: "#A3C0DF" //X轴文字颜色
            }
        },
         
    },
    yAxis: [
        {
            type: "value",
            gridIndex: 0,
            min: 0,
            max: 100,
            interval: 25,
            // splitNumber: 4,
            splitLine: {
                show: true,
                lineStyle: {
                    type: 'dashed',
                    color: '#2B4359',
                    width: 2
                },
                
            },
            axisTick: {
                show: false
            },
            axisLine: {
                show: true,
                lineStyle: {
                    color: '#2D455A'
                }
            },
            axisLabel: {
                show: true,
                margin: 14,
                fontSize: 14,
                textStyle: {
                    color: "#A3C0DF" //X轴文字颜色
                }
            },
        },
    ],
    series: [
        {
            name: "主营业务",
            type: "bar",
            barWidth: 14,
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: "#00FFE3"
                        },
                        {
                            offset: 1,
                            color: "#4693EC"
                        }
                    ])
                }
            },
            data: [20, 80, 100, 40, 34, 90, 60],
            z: 10,
            zlevel: 0,
        },
        {
            // 分隔
            type: "pictorialBar",
            itemStyle: {
                normal:{
                    color:"#0F375F"
                }
            },
            symbolRepeat: "fixed",
            symbolMargin: 6,
            symbol: "rect",
            symbolClip: true,
            symbolSize: [18, 2],
            symbolPosition: "start",
            symbolOffset: [1, -1],
            // symbolBoundingData: this.total,
            data: [20, 80, 100, 40, 34, 90, 60],
            width: 20,
            z: 0,
            zlevel: 1,
        },
        {
            name: "外框",
            type: "bar",
            barGap: "-110%", // 设置外框粗细
            data: [100, 100, 100, 100, 100, 100, 100],
            barWidth: 18,
            itemStyle: {
                normal: {
                    color: "transparent", // 填充色
                    barBorderColor: "#2D465C", // 边框色
                    barBorderWidth: 1, // 边框宽度
                    // barBorderRadius: 0, //圆角半径
                    label: {
                        // 标签显示位置
                        show: false,
                        position: "top" // insideTop 或者横向的 insideLeft
                    }
                }
            },
            z: 0
        },
        {
            name: "销售水量",
            type: "line",
            smooth: true, //平滑曲线显示
            showAllSymbol: false, //显示所有图形。
            symbolSize: 0,
            lineStyle: {
                color: '#182733',
                width: 0,
            },
            areaStyle:{
                color: 'rgba(5,140,255, 0.2)'
            },
            data: [20, 80, 100, 40, 34, 90, 60],
            z: 5,
        }
    ]
};