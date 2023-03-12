option = {
    backgroundColor: "#0f375f",
    legend: {
        data: ["采样人数", "检测人数"],
        top: "5%",
        // right: '10',
        textStyle: {
            color: "rgba(250,250,250,0.6)",
            fontSize: 16
        }
    },
    barWidth: 15,
    xAxis: {
        type: 'value',
        splitLine: {
            lineStyle: {
                color: "rgba(255,255,255,0.2)"
            }
        },
        axisTick: {
            show: false
        },
        axisLine: { //  改变x轴颜色
            lineStyle: {
                color: '#26D9FF'
            }
        },
        axisLabel: { //  改变x轴字体颜色和大小
            textStyle: {
                color: "rgba(250,250,250,0.6)",
                fontSize: 16
            }
        }
    },
    yAxis: {
        type: 'category',
        data: ['天山路街道', '胜利路街道', '昆仑路街道', '银河路街道','金龙镇街道'],
        splitLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLine: { //  改变y轴颜色
            lineStyle: {
                color: '#26D9FF'
            }
        },
        axisLabel: { //  改变y轴字体颜色和大小
            //formatter: '{value} m³ ', //  给y轴添加单位
            textStyle: {
                color: "rgba(250,250,250,0.6)",
                fontSize: 16
            }
        }
    },
    series: [{
            type: 'bar',
            name: "采样人数",
            itemStyle: {
                normal: {
                    label: {
                        show: false, //开启显示
                        position: 'right', //在上方显示
                        textStyle: { //数值样式
                            color: "rgba(250,250,250,0.6)",
                            fontSize: 16,
                            fontWeight: 600
                        }
                    },
                    color: new echarts.graphic.LinearGradient(1, 0, 0, 0, [{
                        offset: 0,
                        color: 'rgba(61,126,235,1)'
                    }, {
                        offset: 1,
                        color: 'rgba(61,126,235,0)'
                    }]),
                    borderWidth: 2,
                    barBorderRadius:15
                }
            },
            data: [19, 29, 39, 81,56]
        },
        {
            type: 'bar',
            name: "检测人数",
            itemStyle: {
                normal: {
                    label: {
                        show: false, //开启显示
                        position: 'right', //在上方显示
                        textStyle: { //数值样式
                            color: "rgba(250,250,250,0.6)",
                            fontSize: 16,
                            fontWeight: 600
                        }
                    },
                    color: new echarts.graphic.LinearGradient(1, 0, 0, 0, [{
                        offset: 0,
                        color: 'rgba(15,197,243,1)'
                    }, {
                        offset: 1,
                        color: 'rgba(15,197,243,0)'
                    }]),
                    borderWidth: 2,
                    barBorderRadius:15
                }
            },
            data: [12, 23, 35, 100,45]
        }
    ]
};