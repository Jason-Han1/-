color = ['#009688',
'#1e9fff',
'#5fb878',
'#ffb980',
'#d87a80'
]

option = {
    backgroundColor: "",
    legend: {
        data: ['项目1', '项目2', '项目3', '项目4'],
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        axisLine: { //  改变x轴颜色
            lineStyle: {
                color: '#009688',
                width:2
            }
        },
        axisLabel: { //  改变x轴字体颜色和大小
            textStyle: {
                color: "#999999"
            }
        }
    },
    yAxis: {
        type: 'value',
        axisLine: { //  改变y轴颜色
            show: true,
            lineStyle: {
                color: '#009688',
                width:2
            }
        },
        axisLabel: { //  改变y轴字体颜色和大小
            //formatter: '{value} m³ ', //  给y轴添加单位
            textStyle: {
                color: "#999999"
            },
        },
        axisTick: {
            show: false
        },
          splitArea:{
							show:true,
						},
        splitLine: {
            show: true
        }
    },
    series: [{
        type: 'line',
        smooth: true,
        symbol: 'emptyCircle',
        symbolSize: 7,
        markPoint: {
            symbol: "circle"
        },
        name: '项目1',
        data: [1220, 1352, 1401, 1834, 1690, 1630, 1620],
        itemStyle: {
            normal: {
                color: color[0],
                borderColor: color[0],
                borderWidth: 2
            }
        },
        lineStyle: {
            normal: {
                width: 2,
                color: color[0],
                shadowColor: "#327BFA",
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
                    color: color[0], // 0% 处的颜色
                }, {
                    offset: 1,
                    color: '#ffffff' // 100% 处的颜色
                }],
                global: false // 缺省为 false
            }
        }
    }]
};