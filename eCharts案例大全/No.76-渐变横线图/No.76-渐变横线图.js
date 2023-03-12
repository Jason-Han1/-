/** 
 * 
 * 作者: GhostCat
 * 博客: https://gcat.cc
 * 描述: 渐变著柱状图
 * 
 */
let xLabel = ['语文','数学','英语','科学','历史']
option = {
    tooltip:{},
    backgroundColor: '#0f375f',
    animation: false,
    grid: {
        top: "25%",
        bottom: "10%"//也可设置left和right设置距离来控制图表的大小
    },
    xAxis: {
        data: xLabel,
        axisLine: {
            show: true, //隐藏X轴轴线
            lineStyle: {
                color: '#11417a'
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
                    color: '#113763',
                    width: 1
                },
            },
            axisTick: {
                show: false
            },
            axisLine: {
                show: true,
                lineStyle: {
                    color: '#11417a'
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
            barWidth: 20,
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: "#07ecd9"
                        },
                        {
                            offset: 1,
                            color: "#034881"
                        }
                    ])
                }
            },
            data: [20, 80, 100, 40, 34, 90, 60],
            z: 10,
            zlevel: 0,
            "label": {
                "show": true,
                "position": "top",
                "distance": 10,
                fontSize:16,
                "color": "#01fff4"
            }
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
            symbolSize: [20, 2],
            symbolPosition: "start",
            symbolOffset: [0, -1],
            // symbolBoundingData: this.total,
            data: [20, 80, 100, 40, 34, 90, 60],
            width: 25,
            z: 0,
            zlevel: 1,
        },
    ]
};