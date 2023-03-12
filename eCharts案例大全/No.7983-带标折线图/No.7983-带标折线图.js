option = {
    backgroundColor: "#0f375f",
    xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        axisLine: { //  改变x轴颜色
            lineStyle: {
                color: '#26D9FF'
            }
        },
        axisLabel: { //  改变x轴字体颜色和大小
            textStyle: {
                color: "rgba(250,250,250,0.6)",
                fontSize: 16
            },
        },
        axisTick:{
            show: false
        },
        splitLine: {
            show: false,
            lineStyle: {
                color: ['#315070'],
                width: 1,
                type: 'solid'
            }
        }
    },
    yAxis: {
        type: 'value',
        axisLine: { //  改变y轴颜色
            show: false,
            lineStyle: {
                color: '#26D9FF'
            }
        },
        axisLabel: { //  改变y轴字体颜色和大小
            //formatter: '{value} m³ ', //  给y轴添加单位
            textStyle: {
                color: "rgba(250,250,250,0.6)",
                fontSize: 16
            },
        },
        axisTick:{
            show: false
        },
        splitLine: {
            show: true,
            lineStyle: {
                color: ['#315070'],
                width: 1,
                type: 'solid'
            }
        }
    },
    series: [{
        smooth: true,
        symbol: 'circle',
        symbolSize: 7,
        markPoint:{
          symbol:"circle"  
        },
        markLine:{
            symbol:"none",
            label:{
                normal:{
                    color:"#fff",
                    backgroundColor: 'rgba(228,0,54,70)',
                    fontSize:16,
                    padding: 4,
                    borderRadius:4,
                    show:true,
                    position:'start',
                    distance:4
                }
            },
            lineStyle:{
                type:"solid",
                color:'rgba(228,0,54,60)',
                width:2
            },
            data: [{
                yAxis: 400
            }]
        },
        data: [220, 332, 601, 234, 490, 730, 590],
        type: 'line',
        itemStyle: {
            normal: {
                label: {
                    show: true,
                    color: "#fff",
                    fontSize: 12
                },
                color: "#294E8F",
                borderColor: "3D7EEB",
                borderWidth: 2,
            }
        },
        lineStyle: {
            normal: {
                width: 2,
                color: "#327BFA",
                shadowColor: "#3D7EEB",
                shadowBlur: 10
            }
        },
        areaStyle: {
            color: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [{
                    offset: 0.5,
                    color: 'rgba(61,126,235,0.5)' // 0% 处的颜色
                }, {
                    offset: 1,
                    color: 'rgba(61,126,235,0)' // 100% 处的颜色
                }],
                global: false // 缺省为 false
            }
        }
    }]
};