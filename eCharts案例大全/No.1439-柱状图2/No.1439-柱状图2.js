option = {
    backgroundColor: "#013A54",
    barWidth: 15,
    xAxis: {
        type: 'value',
        splitLine: {
            
            lineStyle: {
                color: "rgba(255,255,255,0.2)",
                 type: 'dashed'
            }
        },
        axisTick: {
            show: false
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
        data: ['55岁以上', '46-55岁', '36-45岁','26-35岁','18-25岁'],
        splitLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLine: { //  改变y轴颜色
            lineStyle: {
                color: '#2c4054'
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
             barWidth : 45,
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
                        color: 'rgba(24,144,255,1)'
                    }, {
                        offset: 1,
                        color: 'rgba(24,144,255,0)'
                    }]),
                    barBorderRadius:15
                   
                }
            },
            data: [ 35, 170, 210, 260, 40]
        }
    ]
};