 var option = {
        postion:'200',
        backgroundColor: '#1C2129', //画布背景
        title: {
            text: '饱和度时变趋势',
            x: "center",
            y: "-5",
            textStyle: {
                fontSize: 16,
                color: '#fff'
            }
        },
        legend: {
            icon: 'line',
            top: 20,
            textStyle: {
            color: "#fff",
            data:['原方案','建议方案'] 
        },

        itemWidth: 10,  // 设置宽度
        itemHeight: 10, // 设置高度
        },
        tooltip: {
            trigger: 'axis',
        },
        xAxis: { //x轴
            type: 'category',
            boundaryGap: false, //坐标轴两边留白策略
            data: ['06:00', '07:00', '08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00',
                '16:00', '17:00', '18:00',
                '20:00', '21:00', '22:00', '23:00', '23:55'
            ],
            axisLabel: {
                interval: 0,
                rotate: -40,
                textStyle: {
                    fontSize: 12,
                    color: '#fff'
                }
            },
            axisLine: {
                lineStyle: {
                    color: '#fff'
                }
            },
        },
        yAxis: { //y轴
            min: 0,
            type: 'value',
            splitLine: {
                show: true,
                lineStyle: {
                    type: 'dashed'
                }
            },
            axisLabel: {
                textStyle: {
                    fontSize: 12,
                    color: '#fff'
                },
            },
            axisLine: {
                "show": false,
                lineStyle: {
                    color: '#fff'
                }
            },
        },
        series: [
            {
                name: '原方案',
                data: [0.3, 0.9, 0.7, 1.1, 0.5, 0.4, 0.3, 0.8, 0.9, 0.6, 0.5, 0.7, 0.9, 0.5, 0.8, 0.7, 0.9, 0.8, 0.3
                ],
                type: 'line',
                smooth: true, //折线是否平滑
                areaStyle: {
                    opacity: 0
                },
                itemStyle: {
                    normal: {
                        color: "#197CD8", //小圆点的颜色
                        lineStyle: {
                            color: "#197CD8" //折线的颜色
                        }
                    }
                },
            },
            {
                name: '建议方案',
                data: [0.4, 0.7, 0.5, 0.9, 0.6, 0.5, 0.4, 0.3, 0.7, 0.4, 0.4, 0.6, 0.7, 0.4, 0.6, 0.5, 0.7, 0.6,0.2
                ],
                type: 'line',
                smooth: true, //是否平滑
                areaStyle: {
                    opacity: 0
                },
                itemStyle: {
                    normal: {
                        color: "#2B9F50", //小圆点的颜色
                        lineStyle: {
                            color: "#2B9F50" //折线的颜色
                        }
                    }
                },
            },
        ]
    };