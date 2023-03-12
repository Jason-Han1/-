option = {
    backgroundColor: '#fff',
    color: ["rgba(0,183,238, 1)", "rgba(86,199,60, 1)"],
    tooltip: {
        show: true,
        trigger: "item",
        extraCssText: 'background: #fff; border-radius: 0;box-shadow: 0 0 3px rgba(0, 0, 0, 0.2);color: #333;',
    },
    radar: {
        center: ["50%", "50%"],
        radius: "70%",
        startAngle: 90,
        splitNumber: 4,
        // shape: "circle",
        splitArea: {
            areaStyle: {
                color: ["transparent"]
            }
        },
        axisLabel: {
            show: false,
            fontSize: 20,
            color: "#000",
            fontStyle: "normal",
            fontWeight: "normal"
        },
        axisLine: {
            show: true,
            lineStyle: {
                color: "#e6e6e6"
            }
        },
        splitLine: {
            show: true,
            lineStyle: {
                color: "#e6e6e6"
            }
        },
        name: {
            formatter: '{value}',
            textStyle: {
              color: '#333'  
            },
        },
        indicator: [{
                name: '<100次',
                max: 6500
            },
            {
                name: '100-500次',
                max: 16000
            },
            {
                name: '500-1000次',
                max: 30000
            },
            {
                name: '1000-1500次',
                max: 38000
            },
            {
                name: '1500-2000次',
                max: 52000
            },
            {
                name: '≥ 2000次',
                max: 25000
            }
        ]
    },

    series: [{
        name: "预算分配（Allocated Budget）",
        type: "radar",
        symbol: "circle",
        symbolSize:9,
        areaStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(
                    0,
                    0,
                    0,
                    1,
                    [{
                            offset: 0,
                            color: '#FFA002'
                        },
                        {
                            offset: 1,
                            color: '#FFD505'
                        }
                    ],
                    false
                ),
            }
        },
        itemStyle: {
            color: '#FFBE04',
            borderColor: '#fff',
            borderWidth: 2,
        },
        lineStyle: {
            normal: {
                color: "#FFBE04",
                width: 2
            }
        },
        data: [
            [5000, 14000, 28000, 31000, 42000, 21000]
        ]
    }]


};