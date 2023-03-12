let xData = ['海陵区','高港区','姜堰区','泰兴市','靖江区','兴化市']
option = {
    backgroundColor: "#344b58",
    tooltip: {
        trigger: "axis",
        axisPointer: {
            type: "shadow",
            textStyle: {
                color: "#fff"
            }

        },
    },
    calculable: true,
    grid: {
        left: "10%",
        // "top":0,
        bottom: "16%",
        right: "2%"
    },
    xAxis: [{
        type: "category",
        axisLine: {
            lineStyle: {
                color: 'rgba(255,255,255,.5)'
            }
        },
        splitLine: {
            "show": false
        },
        axisTick: {
            "show": false
        },
        splitArea: {
            "show": false
        },
        axisLabel: {
            "interval": 0,
            color: 'rgba(255,255,255,0.7)',
            fontSize: 20
        },
        data: xData,
    }],
    yAxis: [{
        type: "value",
        name: '(件)',
        nameTextStyle: {
            color: 'rgba(255,255,255,0.8)',
            fontSize: 20,
            padding: [0, 60, 0, 0]
        },
        splitLine: {
            "show": false
        },
        axisLine: {
            "show": false
        },
        axisTick: {
            "show": false
        },
        axisLabel: {
            interval: 0,
            color: 'rgba(255,255,255,0.5)',
            fontSize: 20

        },
        splitArea: {
            show: false
        },

    }],
    series: [{
            name: "女",
            type: "bar",
            barWidth: 14,
            barGap:'85%',
            label: {
                show:true,
                position:'top',
                fontSize: 24,
                fontWeight: 'bold',
                color:'rgba(255, 255, 255, 1)'
            },
            itemStyle: {
                normal: {
                    barBorderRadius:2,
                    color: {
                        type: 'linear',
                        x: 0,
                        y: 0,
                        x2: 0,
                        y2: 1,
                        colorStops: [{
                            offset: 0,
                            color: 'rgba(97, 255, 255, 1)' // 0% 处的颜色
                        }, {
                            offset: 0.5,
                            color: 'rgba(50, 146, 194, 0.65)' // 100% 处的颜色
                        }, {
                            offset: 1,
                            color: 'rgba(50, 146, 194, 0)' // 100% 处的颜色
                        }],
                        global: false // 缺省为 false
                    }
                }
            },
            data: [
                709,
                1917,
                2455,
                2610,
                1719,
                1433
            ],
        },
        {
            name: "风女",
            type: "bar",
            barWidth: 14,
            barGap:'85%',
            label: {
                show:true,
                position:'top',
                fontSize: 24,
                fontWeight: 'bold',
                color:'rgba(255, 255, 255, 1)'
            },
            itemStyle: {
                normal: {
                    color: {
                        type: 'linear',
                        x: 0,
                        y: 0,
                        x2: 0,
                        y2: 1,
                        colorStops: [{
                            offset: 0,
                            color: 'rgba(217, 251, 255, 1)' // 0% 处的颜色
                        }, {
                            offset: 0.5,
                            color: 'rgba(106, 130, 142, 0.65)' // 100% 处的颜色
                        }, {
                            offset: 1,
                            color: 'rgba(106, 130, 142, 0)' // 100% 处的颜色
                        }],
                        global: false // 缺省为 false
                    }
                }
            },
            data: [
                300,
                500,
                700,
                400,
                600,
                1200
            ]
        }
    ]
}