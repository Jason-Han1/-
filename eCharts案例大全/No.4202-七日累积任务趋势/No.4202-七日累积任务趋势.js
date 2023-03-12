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
    tooltip: {},
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
            // min: 0,
            // max: 100,
            // interval: 25,
            // splitNumber: 4,
            splitLine: {
                show: false,
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
        { // 蓝柱背景色
                    name: '',
                    type: 'pictorialBar',
                    symbol: 'rect',
                    symbolOffset: [-10, 0],
                    itemStyle: {
                        normal: {
                            color: '#1F4683'
                        }
                    },

                    z: 2,
                    symbolRepeat: true,
                    symbolMargin: '2!',
                    symbolSize: 15,
                    data: [-20, 40, 50, -40, -34, 50, 10].map(function(item) {
                        return item < 0 ? Math.min(-30, item) : item > 0 ? Math.max(30, item) : 0
                    }),
                    barCategoryGap: 100,
                    animationEasing: 'elasticOut',
                    animationDelay: function (dataIndex, params) {
                        return params.index * 30;
                    },
                    minInterval: 1
                },  

        { // 蓝柱   重庆市
                    // name: datas.lastYear, // blue bar
                    type: 'pictorialBar',
                    symbol: 'rect',
                    symbolOffset: [-10, 0],
                    itemStyle: {
                        normal: {
                            color:"#00FFE3"
                        }
                    },
                    symbolRepeat: true,
                    symbolMargin: '2!',
                    symbolSize: 15,
                    symbolClip: true,
                    data: [-20, 40, 50, -40, -34, 48, 10],
                    animationEasing: 'elasticOut',
                    animationDelay: function (dataIndex, params) {
                        return params.index * 30 * 1.1
                    },
                    minInterval: 1,
                    z: 3

                },
                { //紫柱背景色
                    name: '',
                    type: 'pictorialBar',
                    symbol: 'rect',
                    symbolOffset: [10, 0],
                    itemStyle: {
                        normal: {
                            color: '#1F4683'
                        }
                    },

                    z: 2,
                    symbolRepeat: true,
                    symbolMargin: '2!',
                    symbolSize: 15,
                    data: [20, -40, -50, 40, 34, -50, -10].map(function(item) {
                        return item < 0 ? Math.min(-30, item) : item > 0 ? Math.max(30, item) : 0
                    }),
                    barCategoryGap: 100,
                    animationEasing: 'elasticOut',
                    animationDelay: function (dataIndex, params) {
                        return params.index * 30;
                    },
                    minInterval: 1
                },  

                { // 紫柱   重庆市
                    // name: datas.lastYear, // blue bar
                    type: 'pictorialBar',
                    symbol: 'rect',
                    symbolOffset: [10, 0],
                    itemStyle: {
                        normal: {
                            color:"#636DFF"
                        }
                    },
                    symbolRepeat: true,
                    symbolMargin: '2!',
                    symbolSize: 15,
                    symbolClip: true,
                    data: [20, -40, -50, 40, 34, -50, -10],
                    animationEasing: 'elasticOut',
                    animationDelay: function (dataIndex, params) {
                        return params.index * 30 * 1.1
                    },
                    minInterval: 1,
                    z: 3

                },

    ]
};