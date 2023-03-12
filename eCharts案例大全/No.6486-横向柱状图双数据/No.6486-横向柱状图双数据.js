option = {
    backgroundColor: "#283449",
    legend: {
        data: ["产出", "销售量"],
        top: "5%",
        right: '10',
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
                color: '#3c4654'
            }
        },
        axisLabel: { //  改变x轴字体颜色和大小
            textStyle: {
                color: "rgba(250,250,250,0.5)",
                fontSize: 16
            }
        }
    },
    yAxis: {
        type: 'category',
        data: ['巴西', '印尼', '美国', '中国'],
        splitLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLine: { //  改变y轴颜色
            lineStyle: {
                color: '#3c4654'
            }
        },
        axisLabel: { //  改变y轴字体颜色和大小
            //formatter: '{value} m³ ', //  给y轴添加单位
            textStyle: {
                color: "rgba(250,250,250,0.5)",
                fontSize: 16
            }
        }
    },
    series: [{
            type: 'bar',
            name: "产出",
            itemStyle: {
                normal: {
                    label: {
                        show: true, //开启显示
                        position: 'right', //在上方显示
                        textStyle: { //数值样式
                            color: "rgba(250,250,250,0.6)",
                            fontSize: 16,
                            fontWeight: 600
                        }
                    },
                    color: new echarts.graphic.LinearGradient(1, 0, 0, 0, [{
                        offset: 0,
                        color: 'rgba(45,130,255,1)'
                    }, {
                        offset: 1,
                        color: 'rgba(85,209,255,1)'
                    }]),
                    
                    borderWidth: 0,
                    barBorderRadius: [0, 30, 30, 0], //圆角大小
                }
            },
            data: [19, 29, 39, 81]
        },
        {
            type: 'bar',
            name: "销售量",
            itemStyle: {
                normal: {
                    label: {
                        show: true, //开启显示
                        position: 'right', //在上方显示
                        textStyle: { //数值样式
                            color: "rgba(250,250,250,0.6)",
                            fontSize: 16,
                            fontWeight: 600
                        }
                    },
                    color: new echarts.graphic.LinearGradient(1, 0, 0, 0, [{
                        offset: 0,
                        color: 'rgba(255,172,52,1)'
                    }, {
                        offset: 1,
                        color: 'rgba(255,206,93,1)'
                    }]),
                   
                    borderWidth: 0,
                    barBorderRadius: [0, 30, 30, 0], //圆角大小
                }
            },
            data: [12, 23, 35, 100]
        }
    ]
};