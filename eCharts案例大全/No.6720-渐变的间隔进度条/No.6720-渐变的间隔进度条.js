const grayBar = [100, 100, 100]
option = {
    backgroundColor: 'black',
    grid: {
        left: '-50px', // 距离dom间距
        right: '31px',
        top: '7%',
        bottom: '1%',
        containLabel: true,
    },
    xAxis: [{
        type: "value",
        axisPointer: {
            type: "shadow"
        },
        // 横坐标 分割线等取消显示
        axisTick: {
            show: false
        },
        axisLine: {
            show: false
        },
        splitLine: {
            show: false
        },
        axisLabel: {
            show: false,

        }
    }],
    yAxis: [{
            type: "category",
            inverse: true,
            axisLabel: {
                verticalAlign: "bottom",
                align: "left",
                padding: [0, 10, 10, 6],
                textStyle: {
                    fontSize: 14,
                    color: "white",
                    fontFamily: "Source Han Sans CN"
                },
                formatter(value, index) {
                    index += 1;
                    return `{rank${index}|No.${index}} {text1|${value}}`;

                },
                rich: {
                    rank1: {
                        width: 36,
                        height: 20,
                        color: '#FD4844',
                        align: 'center',
                    },
                    rank2: {
                        width: 36,
                        height: 20,
                        color: '#FBA13A',
                        align: 'center',
                    },
                    rank2: {
                        width: 36,
                        height: 20,
                        color: '#56E7FD',
                        align: 'center',
                    },
                    rank4: {
                        // padding: [0, 0, 0, 4],
                    },
                },
            },
            // 纵坐标数据
            data: ["威锋网", "当时的", "是的"],

            yAxisIndex: 0,
            // 横坐标 分割线等取消显示
            axisTick: {
                show: false
            },
            axisLine: {
                show: false
            }
        },

        {
            type: "category",
            inverse: true,
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                show: true,
                inside: false,
                verticalAlign: "bottom",
                // 位置 上右下左
                padding: [0, 10, 2, -40],
                lineHeight: "40",
                textStyle: {
                    fontSize: 16,
                    color: "white",
                    fontFamily: "SourceHanSansCN-Regular"
                }
            },
            // 统计的总量 用纵坐标模拟
            data: [61, 6, 8],
        },

    ],
    series: [
        // {
        //     name: "",
        //     type: 'pictorialBar',
        //     // stack: "总量",
        //     symbol: 'fixed',
        //     symbolSize: [30, 10],
        //     symbolMargin: 5,
        //     symbolRepeat: 'repeat',
        //     // type: "bar",
        //     // 宽度
        //     barWidth: 6,
        //     // 堆叠
        //     data: [6, 6, 8],
        //     itemStyle: {
        //         normal: {
        //             show: true,
        //             color: ['red'],
        //         }
        //     }
        // },
        {
            show: true,
            type: 'pictorialBar',
            symbol: 'fixed',
            symbolSize: [7, 10],
            symbolMargin: 5,
            symbolRepeat: 'repeat',
          
            barWidth: 6, // 统计条宽度
            itemStyle: {
                normal: {
                    color: 'black',
                },
            },
            z: 3,

            data: [61, 62, 18],

        },

        {
            show: true,
            
            type: 'pictorialBar',
            symbol: 'fixed',
            symbolSize: [10, 10],
            symbolMargin: 5,
            symbolRepeat: 'repeat',
            barGap: '-100%',

            barWidth: 6, // 统计条宽度
            itemStyle: {
                normal: {
                    color: '#274882',
                },
            },
            z: 1,

            data: grayBar,

        },
        {
            show: true,
            
            type: 'bar',
              
            barGap: '-100%',
            barWidth: '10px', // 统计条宽度
            max: 1,
            labelLine: {
                show: false,
            },
            z: 2,
            itemStyle: {
                normal: {

                    color: {
                        // type: 'linear',
                        // x: 0,
                        // y: 0,
                        // x2: 0,
                        // y2: 1,
                        colorStops: [{
                                offset: 0,
                                color: '#57E9FF', // 0% 处的颜色
                            },
                            {
                                offset: 1,
                                color: '#4BEBBB', // 100% 处的颜色
                            },
                        ],
                        globalCoord: false, // 缺省为 false
                    }

                },
            },
            data: [61, 62, 18],
        },


    ]
};