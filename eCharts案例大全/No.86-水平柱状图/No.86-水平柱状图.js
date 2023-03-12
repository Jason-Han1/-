option = {
    backgroundColor: "#0f375f",
    barWidth: 15,
    xAxis: {
        type: 'value',
        splitLine: {
            show: false,
            lineStyle: {
                color: "rgba(255,255,255,0.2)",
                 type: 'dashed'
            }
        },
        axisTick: {
            show: false
        },
        axisLine: { //  改变x轴颜色
            show:true,
            lineStyle: {
                color: "rgba(255,255,255,0.8)"
            }
        },

        axisLabel: { //  改变x轴字体颜色和大小
            show:false,
            textStyle: {
                color: "rgba(250,250,250,0.6)",
                fontSize: 16
            }
        }
    },
    yAxis: {
        type: 'category',
        data: ['12-26', '12-27', '12-28', '12-29', '12-30'],
        splitLine: {
            show:true,
            lineStyle: {
                color: "rgba(255,255,255,0.2)",
                 type: 'dashed'
            }
        },
        axisTick: {
            show: false
        },
        axisLine: { //  改变y轴颜色
            show:false
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
             barWidth : 25,
            itemStyle: {
                normal: {
                    label: {
                        show: true, //开启显示
                        position:"insideRight", //在上方显示
                        textStyle: { //数值样式
                            color: "#FFFFFF",
                            fontSize: 16,
                            fontWeight: 600
                        }
                    },
                    color: new echarts.graphic.LinearGradient(1, 0, 0, 0, [{
                        offset: 0,
                        color: 'rgba(47,248,255,.8)'
                    }, {
                        offset: 1,
                        color: 'rgba(47,248,255,0)'
                    }]),
                    // barBorderRadius:15
                   
                }
            },
            data: [19, 29, 39, 81, 29]
        }
    ]
};