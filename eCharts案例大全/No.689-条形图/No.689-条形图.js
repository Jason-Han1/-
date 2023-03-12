option = {
    backgroundColor: "#0f375f",
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
        data: ['巴西', '印尼', '美国', '中国'],
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
                        color: 'rgba(61,126,235,1)'
                    }, {
                        offset: 1,
                        color: 'rgba(61,126,235,0)'
                    }]),
                    borderColor: new echarts.graphic.LinearGradient(1, 0, 0, 0, [{
                        offset: 0,
                        color: 'rgba(160,196,225,1)'
                    }, {
                        offset: 1,
                        color: 'rgba(61,126,235,1)'
                    }]),
                    borderWidth: 2
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
                        color: 'rgba(15,197,243,1)'
                    }, {
                        offset: 1,
                        color: 'rgba(15,197,243,0)'
                    }]),
                    borderColor: new echarts.graphic.LinearGradient(1, 0, 0, 0, [{
                        offset: 0,
                        color: 'rgba(180,240,255,1)'
                    }, {
                        offset: 1,
                        color: 'rgba(15,197,243,1)'
                    }]),
                    borderWidth: 2
                }
            },
            data: [12, 23, 35, 100]
        }
    ]
};