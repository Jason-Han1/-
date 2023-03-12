option = {
    backgroundColor: '#0b2058',
    legend: {
        data: ["正常", "报修"],
        top: "2%",
        x: "75%",
        icon: 'stack',
        itemWidth: 20,
        itemHeight: 4,
        textStyle: {
            color: "#CFDCFF",
            fontSize: 10,
        }
    },
    tooltip: {
        trigger: 'axis'
    },
    grid: {
        top: '20%',
        right: '5%',
        left: '10%',
        bottom: '10%'
    },

    xAxis: {
        data: ['急诊科', '妇科', '心内科', '神经内科', '儿科', '骨科', '耳鼻喉科', '手术室', '妇科', '心内科', '神经内科', '儿科', '骨科', '耳鼻喉科', '手术室', '妇科', '心内科', '神经内科', '儿科', '骨科', '耳鼻喉科', '手术室'],
        axisLine: { //  改变y轴颜色
            lineStyle: {
                color: '#1A5BCA',
                width: 2
            }
        },
        axisLabel: { //  改变y轴字体颜色和大小
            // formatter: '{value} m³ ', //  给x轴添加单位
            textStyle: {
                color: "#CFDCFF",
                fontSize: 10
            }
        },
        axisTick: { //坐标轴刻度相关设置。
            show: false,
        },
        
        boundaryGap: false
    },
    yAxis: {
        axisLine: { //  改变y轴颜色
            lineStyle: {
                color: 'red',
                width: 2
            }
        },
        axisLabel: { //  改变y轴字体颜色和大小
            // formatter: '{value} m³ ', //  给y轴添加单位
            textStyle: {
                color: "#CFDCFF",
                fontSize: 10
            }
        },
        axisTick: { //坐标轴刻度相关设置。
            show: false,
        },
        splitLine: {
            show: false
        },
        splitArea: {
            show: true,
            areaStyle: {
                color: ["#062261", "#0d2a6d"]
            }
        }
    },
    dataZoom:[{ //放大 缩小
        type: 'inside'
    }],
    series: [{
        name: '正常',
        type: 'line',
        smooth: true,
        showAllSymbol: true,
        symbol: 'circle',
        symbolSize: 6,
        lineStyle: {
            normal: {
                color: "#066CF0",
                width: 2
            },
        },
        itemStyle: { //点的颜色
            color: "#066CF0",
            borderColor: "#066CF0",
            borderWidth: 2,
        },
        areaStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: '#189FF8',
                        opacity: 0.2
                    },
                    {
                        offset: 1,
                        color: '#0b2058',
                        opacity: 0
                    }
                ], false),
            }
        },

        data: [220, 182, 191, 234, 290, 330, 310, 422, 182, 191, 234, 290, 330, 310, 422, 182, 191, 234, 290, 330, 310, 422]
    }, {
        name: '报修',
        type: 'line',
        smooth: true,
        showAllSymbol: true,
        symbol: 'circle',
        symbolSize: 6,
        lineStyle: {
            normal: {
                color: "#DF5151",
                width: 2
            },
        },
        itemStyle: { //点的颜色
            color: "#DF5151",
            borderColor: "#DF5151",
            borderWidth: 2,
        },
        data: [20, 12, 11, 23, 20, 30, 30, 42, 12, 11, 23, 20, 30, 30, 42, 12, 11, 23, 20, 30, 30, 42]
    }]
};