var line1 = ["a", "1", "2", "4"];
var line2 = ["b", "2", "3"];
var line3 = ["b", "2", "3"];
var ydata1 = [60, 40, 40, 15];
var ydata2 = [40, 22, 33];
var ydata3 = [40, 52, 93];
var data1 = [30, 20, 10, 5];
var data2 = [20, 14, 36];
var data3 = [50, 33, 55, 66];
option = {
    color: ['rgb(69, 214, 100)'],
    title: {
        text: "听说认知图谱",
        left: 'center',
    },
    grid: [{
            x: "10%",
            y: "30%",
            width: "27%",
            height: "56%",
        },
        {
            x: "37%",
            y: "30%",
            width: "27%",
            height: "56%",
        },
        {
            x: "64%",
            y: "30%",
            width: "27%",
            height: "56%",
        },
    ],
    legend: {
        data: ['优秀学生认知积分线'],
        selectedMode: true,
        selected:false,
        top: '20%'
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
            },
            name: "认知得分(分)",
            splitLine: {
                lineStyle: {
                    type: "dotted",
                    color: "#e5eaef",
                },
            },
            axisLabel: {
                fontSize: 14,
                color: "#999",
            },
            nameTextStyle: {
                fontSize: 14,
                color: "#666",
            },
            min: 0,
            max: 100,
        },
        {
            gridIndex: 1,
            type: "value",
            axisLine: {
                show: true,
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
            },
            min: 0,
            max: 100,
        },
        {
            gridIndex: 2,
            type: "value",
            axisLine: {
                show: true,
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
            },
            min: 0,
            max: 100,
        },
    ],
    series: [{
            name: '优秀学生认知积分线',
            xAxisIndex: 0,
            yAxisIndex: 0,
            data:ydata1,
            type: "line",
            symbol: "none",
            lineStyle: {
                color: "rgb(69, 214, 100)",
            },
            smooth: true,
        },
        {
            xAxisIndex: 0,
            yAxisIndex: 0,
            data: data1,
            type: "line",
            symbol: "none",
            lineStyle: {
                color: "rgb(55, 199, 242)",
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
                            color: "#fff",
                        },
                        {
                            offset: 1,
                            color: "rgb(135, 219, 243)",
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
                color: "rgb(69, 214, 100)",
            },
            smooth: true,
        },
        {
            xAxisIndex: 1,
            yAxisIndex: 1,
            data: data2,
            type: "line",
            symbol: "none",
            lineStyle: {
                color: "#ff6600",
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
                            color: "#fff",
                        },
                        {
                            offset: 1,
                            color: "#ffa51f",
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
                color: "rgb(69, 214, 100)",
            },
            smooth: true,
        },
        {
            xAxisIndex: 2,
            yAxisIndex: 2,
            data: data3,
            type: "line",
            symbol: "none",
            lineStyle: {
                color: "#ff7f7f",
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
                            color: "#fff",
                        },
                        {
                            offset: 1,
                            color: "#ff9a9a",
                        },
                    ],
                },
            },
        },
    ],
    tooltip: [{
        show: true,
        trigger: "axis",
        axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: "line", // 默认为直线，可选为：'line' | 'shadow'
        },
        formatter: "{b}:{c}<br>{b1}:{c1}",
    }, ],
}