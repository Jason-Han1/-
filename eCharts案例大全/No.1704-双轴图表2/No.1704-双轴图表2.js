option = {
    "backgroundColor": "",
    "color": [
        "#F6856E",
        "#FFC533",
        "#56C994",
        "#72A9FE",
        "#ffa43a"
    ],
    "title": {
    },
    "legend": {
        "orient": "horizontal",
        "data": [
            {
                "name": "高危"
            },
            {
                "name": "中危"
            },
            {
                "name": "安全"
            },
            {
                "name": "未知"
            },
            {
                "name": "中招率"
            }
        ],
        "left": 0,
        "top": "4%",
        "textStyle": {
            "color": "#666",
            "fontSize": 14
        }
    },
    "grid": {
         left: '2%',
                    right: '4%',
                    bottom: '6%',
                    top:'16%',
        "containLabel": true
    },
    "tooltip": {
        "trigger": "axis",
        "axisPointer": {
            "type": "shadow"
        },
        "textStyle": {
            "align": "left"
        }
    },
    "xAxis": [
        {
            "type": "category",
            "data": [
                '产品部', '技术部', '销售部', '人事部', '售前部', '售后部', '市场部', '平台部', '测试部', '运维部'
            ],
            "axisTick": {
                "show": false,
                
            },
            "axisLine": {
                "show": true,
                lineStyle: {
                                color: '#cdd5e2'
                            }
            },
            "axisLabel": {
                "show": true,
                "textStyle": {
                    "color": "#282828",
                    "fontSize": 14
                },
                "formatter": "{value}"
            },
            
        }
    ],
    "yAxis": [
        {
            "type": "value",
            "max": "30",
            "axisTick": {
                "show": false
            },
            "axisLine": {
                "show": true,
                lineStyle: {
                                color: '#cdd5e2'
                            }
            },
            "axisLabel": {
                "show": true,
                "textStyle": {
                    "color": "#282828",
                    "fontSize": 14
                }
            },
            "splitLine": {
                "show": false,
                "lineStyle": {
                    "color": "rgba(255,255,255,0.2)"
                }
            }
        },
        {
                        type: "value",
                        name: "百分比",
                        "max": "100",
                        nameTextStyle: {
                            color: "#666666"
                        },
                        position: "right",
                        axisLine: {
                            lineStyle: {
                                color: '#cdd5e2'
                            }
                        },
                        splitLine: {
                            show: false,
                        },
                        axisLabel: {
                            show: true,
                            formatter: "{value} %", //右侧Y轴文字显示
                            textStyle: {
                                color: "#666666",
                                 fontSize:14,
                            }
                        }
                    }
    ],
     dataZoom: [
    {
        show: true,
        realtime: true,
        "height": 12,
        start: 0,
        end: 70,
         bottom:'2%',
    },
    {
        type: 'inside',
        realtime: true,
        "height": 12,
        start: 0,
        end: 70
    }
],
    "series": [
        // {symbol: 'circle'},
        {
            "name": "高危",
            "type": "bar",
            "stack": "总量",
            "barWidth": "40%",
            "data": [
                "2",
                "3",
                "4",
                "5",
                "2",
                "3",
                "4",
                "5",
                "2",
                "3",
            ],
            itemStyle: {
                                   normal: {
                                        label: {
                                             show: true, //开启显示
                                        // 
                                             textStyle: { //数值样式
                                                       color: '#333',
                                                  fontSize: 14
                                             }
                                        }
                                   }
            }

        },
        {
            "name": "中危",
            "type": "bar",
            "stack": "总量",
            "barWidth": "40%",
            "data": [
                "2",
                "3",
                "4",
                "5",
                "2",
                "3",
                "4",
                "5",
                "2",
                "3",
            ],
            itemStyle: {
                                   normal: {
                                        label: {
                                             show: true, //开启显示
                                             textStyle: { //数值样式
                                                       color: '#333',
                                                  fontSize: 14
                                             }
                                        }
                                   }
            }

        },
        {
            "name": "安全",
            "type": "bar",
            "stack": "总量",
            "barWidth": "40%",
            "data": [
                "2",
                "3",
                "8",
                "5",
                "2",
                "3",
                "4",
                "5",
                "2",
                "3",
            ],
            itemStyle: {
                                   normal: {
                                        label: {
                                             show: true, //开启显示
                                             textStyle: { //数值样式
                                                       color: '#333',
                                                  fontSize: 14
                                             }
                                        }
                                   }
            }

        },
        {
            "name": "未知",
            "type": "bar",
            "stack": "总量",
            "barWidth": "40%",
            "data": [
               "2",
                "3",
                "4",
                "5",
                "5",
                "3",
                "4",
                "5",
                "2",
                "3",
            ],
            itemStyle: {
                                   normal: {
                                        label: {
                                             show: true, //开启显示
                                        //      position: 'top', //在上方显示
                                             textStyle: { //数值样式
                                                  color: '#333',
                                                  fontSize: 14
                                             }
                                        }
                                   }
            }

        },
        {
                        name: "中招率",
                        type: "line",
                        yAxisIndex: 1, //使用的 y 轴的 index，在单个图表实例中存在多个 y轴的时候有用
                        smooth: false, //平滑曲线显示
                        symbol: "circle", //标记的图形为实心圆
                        symbolSize: 8, //标记的大小
                        itemStyle: {
                            normal: {
                                color: '#ffa43a',
                                borderColor: 'rgba(255, 234, 0, 0.5)',  //圆点透明 边框
                                borderWidth: 7
                            },

                        },
                        lineStyle: {
                            color: "#ffa43a"
                        },
                        data: ["20",
                "30",
                "40",
                "50",
                "20",
                "30",
                "40",
                "50",
                "20",
                "30",]
                    }
        // {
        //     "name": "中招率",
        //     "type": "line",
        //     symbol: 'circle',  
        //     "data": [
        //         "20",
        //         "30",
        //         "40",
        //         "50",
        //         "20",
        //         "30",
        //         "40",
        //         "50",
        //         "20",
        //         "30",
        //     ],

        // }
    ]
}