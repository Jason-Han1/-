var line1 = ["a", "b", "c", "d"];//知识点名称·1
var line2 = ["e", "f", "g","h"];//知识点名称·2
var line3 = ["i", "j", "k","l"];//知识点名称·3
var ydata1 = [60, 40, 40, 15];//优秀认知积分线·1
var ydata2 = [15, 22, 33,23];//优秀认知积分线·2
var ydata3 = [23, 52, 93,85];//优秀认知积分线·3
var data1 = [80, 50, 60, 30];//积分线·1
var data2 = [30, 14, 36,13];//积分线·2
var data3 = [13, 33, 55, 93];//积分线·3
var youCol = '#70fd71';//优秀认知积分线颜色
var oneCol = '#33f8ff';//数据·1颜色
var twoCol = '#6dd5ff';//数据·2颜色
var threeCol = '#3385ff';//数据·3颜色
var oneShaw = '#0191d2';//数据·1颜色
var twoShaw = '#2082d1';//数据·2颜色
var threeShaw = '#205fd5';//数据·3颜色
var backCol = '#042696';//背景色

option = {
    color:['#61e15e'],
    backgroundColor: backCol,
    title: {
        text: "",
        left: 'center',
    },
    grid: [{
            x: "5%",
            y: "30%",
            width: "30%",
            height: "60%",
        },
        {
            x: "35%",
            y: "30%",
            width: "30%",
            height: "60%",
        },
        {
            x: "65%",
            y: "30%",
            width: "30%",
            height: "60%",
        },
    ],
    legend: {
        data: ['优秀学生认知积分线'],
        selectedMode: true,
        selected: false,
        top: '20%',
        right: 'right',
        textStyle: {
            color: '#fff'
        }
    },
    xAxis: [{
            gridIndex: 0,
            type: "category",
            data: line1,
            name: "",
            nameLocation: "center",
            axisTick: {
                show: false,
            },
            axisLine: {
                lineStyle: {
                    color: "#ccc",
                },
                show: false
            },
            boundaryGap: false,
            axisLabel: {
                color: "transparent",
            },
        },
        {
            gridIndex: 1,
            type: "category",
            data: line2,
            name: "",
            nameLocation: "center",
            axisTick: {
                show: false,
            },
            axisLine: {
                lineStyle: {
                    color: "#ccc",
                },
                show: false
            },
            boundaryGap: false,
            axisLabel: {
                color: "transparent",
            },
        },
        {
            gridIndex: 2,
            type: "category",
            data: line3,
            name: "",
            nameLocation: "center",
            axisTick: {
                show: false,
            },
            axisLine: {
                lineStyle: {
                    color: "#ccc",
                },
                show: false
            },
            boundaryGap: false,
            axisLabel: {
                color: "transparent",
            },
        },
    ],
    yAxis: [{
            gridIndex: 0,
            type: "value",
            axisLine: {
                lineStyle: {
                    color: "#ccc",
                },
                show: false
            },
            name: "认知得分(分)",
            splitLine: {
                lineStyle: {
                    type: "dotted",
                    color: "#e5eaef",
                },
                show: false
            },
            axisLabel: {
                fontSize: 14,
                color: "#999",
                show: false
            },
            nameTextStyle: {
                fontSize: 14,
                color: "#666",
                show: false
            },
            min: 0,
            max: 100,
            show: false
        },
        {
            gridIndex: 1,
            type: "value",
            axisLine: {
                show: false,
                lineStyle: {
                    color: "#e0e7ff",
                },
            },
            axisTick: {
                show: false,
            },
            axisLabel: {
                show: false,
            },
            splitLine: {
                lineStyle: {
                    type: "dotted",
                    color: "#e5eaef",
                },
                show: false
            },
            min: 0,
            max: 100,
        },
        {
            gridIndex: 2,
            type: "value",
            axisLine: {
                show: false,
                lineStyle: {
                    color: "#e0e7ff",
                },
            },
            axisTick: {
                show: false,
            },
            axisLabel: {
                show: false,
            },
            splitLine: {
                lineStyle: {
                    type: "dotted",
                    color: "#e5eaef",
                },
                show: false
            },
            min: 0,
            max: 100,
        },
    ],
    series: [{
            name: '优秀学生认知积分线',
            xAxisIndex: 0,
            yAxisIndex: 0,
            data: ydata1,
            type: "line",
            symbol: "none",
            lineStyle: {
                color: {
                    type: "linear",
                    x: 0,
                    y: 0,
                    x2: 1,
                    y2: 0,
                    colorStops: [{
                            offset: 0,
                            color: 'transparent',
                        },
                        {
                            offset: 0.1,
                            color: youCol,
                        },
                        {
                            offset: 1,
                            color: youCol,
                        },
                    ],
                },
                shadowColor: 'rgba(0,0,0,0.5)',
                shadowBlur: 8,
                shadowOffsetY: 18
            },
            smooth: true,
        },
        {
            xAxisIndex: 0,
            yAxisIndex: 0,
            data: data1,
            type: "line",
            symbol: "none",
            smooth: true,
            lineStyle: {
                color: {
                    type: "linear",
                    x: 0,
                    y: 0,
                    x2: 1,
                    y2: 0,
                    colorStops: [{
                            offset: 0,
                            color: 'transparent',
                        },
                        {
                            offset: 0.1,
                            color: oneCol,
                        },
                        {
                            offset: 1,
                            color: oneCol,
                        },
                    ],
                },
            },
            areaStyle: {
                color: {
                    type: "linear",
                    x: 0,
                    y: 1,
                    x2: 0,
                    y2: 0,
                    colorStops: [{
                            offset: 0,
                            color: backCol,
                        },
                        {
                            offset: 1,
                            color: oneShaw,
                        },
                    ],
                },
            },
        },
        {
            name: '优秀学生认知积分线',
            xAxisIndex: 1,
            yAxisIndex: 1,
            data: ydata2,
            type: "line",
            symbol: "none",
            lineStyle: {
                color: {
                    type: "linear",
                    x: 0,
                    y: 0,
                    x2: 1,
                    y2: 0,
                    colorStops: [{
                            offset: 0,
                            color: youCol,
                        },
                        {
                            offset: 1,
                            color: youCol,
                        }],
                },
                shadowColor: 'rgba(0,0,0,0.5)',
                shadowBlur: 8,
                shadowOffsetY: 18
            },
            smooth: true,
        },
        {
            xAxisIndex: 1,
            yAxisIndex: 1,
            data: data2,
            type: "line",
            symbol: "none",
            smooth: true,
            lineStyle: {
                color: {
                    type: "linear",
                    x: 0,
                    y: 0,
                    x2: 1,
                    y2: 0,
                    colorStops: [{
                            offset: 0,
                            color: twoCol,
                        },
                        {
                            offset: 1,
                            color: twoCol,
                        },
                    ],
                },
            },
            areaStyle: {
                color: {
                    type: "linear",
                    x: 0,
                    y: 1,
                    x2: 0,
                    y2: 0,
                    colorStops: [{
                            offset: 0,
                            color: backCol,
                        },
                        {
                            offset: 1,
                            color: twoShaw,
                        },
                    ],
                },
            },
        },
        {
            name: '优秀学生认知积分线',
            xAxisIndex: 2,
            yAxisIndex: 2,
            data: ydata3,
            type: "line",
            symbol: "none",
            lineStyle: {
                color: {
                    type: "linear",
                    x: 0,
                    y: 0,
                    x2: 1,
                    y2: 0,
                    colorStops: [{
                            offset: 0,
                            color: youCol,
                        },
                        {
                            offset: 0.9,
                            color: youCol,
                        },{
                            offset: 1,
                            color: 'transparent',
                        }],
                },
                shadowColor: 'rgba(0,0,0,0.5)',
                shadowBlur: 8,
                shadowOffsetY: 18
            },
            smooth: true,
        },
        {
            xAxisIndex: 2,
            yAxisIndex: 2,
            data: data3,
            type: "line",
            symbol: "none",
            smooth: true,
            lineStyle: {
                color: {
                    type: "linear",
                    x: 0,
                    y: 0,
                    x2: 1,
                    y2: 0,
                    colorStops: [{
                            offset: 0,
                            color: threeCol,
                        },
                        {
                            offset: 0.9,
                            color: threeCol,
                        },
                        {
                            offset: 1,
                            color: 'transparent',
                        },
                    ],
                },
            },
            areaStyle: {
                color: {
                    type: "linear",
                    x: 0,
                    y: 1,
                    x2: 0,
                    y2: 0,
                    colorStops: [{
                            offset: 0,
                            color: backCol,
                        },
                        {
                            offset: 1,
                            color: threeShaw,
                        },
                    ],
                },
            },
        },
    ],
    tooltip: [{
        show: false,
        trigger: "axis",
        axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: "line", // 默认为直线，可选为：'line' | 'shadow'
        },
        formatter: "{b}:{c}<br>{b1}:{c1}",
    }, ],
}