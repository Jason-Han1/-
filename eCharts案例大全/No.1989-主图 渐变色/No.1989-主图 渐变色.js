option = {
    backgroundColor: "#0f375f",
    barWidth: 15,
    xAxis: {
         type: 'category',
        data: ['响水大', '滨海南', '滨海北', '东海马陵山', '徐州贾汪', '响水陈家港'],
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
        type: 'value',
        splitLine: {
            // show: false
            lineStyle: {
                color: '#ccc',
                // width:'1px'
            }
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
                        // show: true, //开启显示
                        position:"insideRight", //在上方显示
                        textStyle: { //数值样式
                            color: "#FFFFFF",
                            fontSize: 16,
                            fontWeight: 600
                        }
                    },
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: '#00c0f9'
                    }, {
                        offset: 1,
                        color: '#013684'
                    }]),
                    // barBorderRadius:15
                   
                }
            },
            data: [19, 29, 39, 81, 29, 39]
        }
    ]
};