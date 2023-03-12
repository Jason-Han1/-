let xData = ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月", "13月", "14月", "15月"];
let webLeftData = [3, 20, 62, 34, 55, 65, 33, 12, 23, 34, 43, 23, 32, 43, 21];
let webRightData = [13, 10, 52, 44, 25, 35, 63, 23, 43, 34, 32, 21, 12, 21, 31];
let appLeftData = [21, 38, 43, 19, 36, 26, 59, 12, 43, 21, 12, 44, 34, 12, 45];
let appRightData = [11, 38, 23, 39, 66, 66, 79, 23, 34, 21, 34, 45, 43, 12, 43];
let textColor = "blue";

option = {
    baseOption: {
        timeline: {
            show: false,
            top: 0,
            data: [0],
        },
        tooltip: {
            trigger: "axis",
            axisPointer: {
                type: "cross",
            },
        },
        legend: {
            right: 0,
            icon: "diamond",
            itemWidth: 12,
            itemHeight: 12,
            data: ["网页端", "移动端"],
            textStyle: {
                color: "#F2FBFF",
                fontSize: 12,
            },
        },
        color: ["#004CFF", "#00BBFF"],
        grid: [{
                show: false,
                top: "12%",
                left: 10,
                bottom: 0,
                width: "40%",
                containLabel: true,
            },
            {
                show: false,
                left: "52.5%",
                top: "12%",
                bottom: 0,
                width: "0%",
            },
            {
                show: false,
                right: 10,
                top: "12%",
                bottom: 0,
                containLabel: true,
                width: "40%",
            },
        ],
        xAxis: [{
                type: "value",
                position: "top",
                inverse: true,
                axisLine: {
                    show: false,
                },
                axisTick: {
                    show: false,
                },
                axisLabel: {
                    show: true,
                    color: textColor,
                },
                splitLine: {
                    show: false,
                },
            },
            {
                gridIndex: 1,
                show: false,
            },
            {
                gridIndex: 2,
                position: "top",
                axisLine: {
                    show: false,
                },
                axisTick: {
                    show: false,
                },
                axisLabel: {
                    show: true,
                    color: textColor,
                },
                splitLine: {
                    show: false,
                },
            },
        ],
        yAxis: [{
                type: "category",
                inverse: true,
                axisLine: {
                    show: false,
                },
                axisTick: {
                    show: false,
                },
                axisLabel: {
                    show: false,
                },
                data: xData,
            },
            {
                gridIndex: 1,
                type: "category",
                inverse: true,
                position: "left",
                axisLine: {
                    show: false,
                },
                axisTick: {
                    show: false,
                },
                axisLabel: {
                    show: true,
                    padding: [30, 0, 0, 0],
                    textStyle: {
                        color: "blue",
                        fontSize: 12,
                    },
                    align: "center",
                },
                data: xData.map(function(value) {
                    return {
                        value: value,
                        textStyle: {
                            align: "center",
                        },
                    };
                }),
            },
            {
                gridIndex: 2,
                type: "category",
                inverse: true,
                axisLine: {
                    show: false,
                },
                axisTick: {
                    show: false,
                },
                axisLabel: {
                    show: false,
                },
                data: xData,
            },
        ],
    },
    options: [{
        series: [{
                name: "网页端",
                type: "line",
                stack: "1",
                areaStyle: {
                    normal: {
                        color: "#004CFF",
                    },
                },
                data: webLeftData,
            },
            {
                name: "移动端",
                type: "line",
                stack: "1",
                areaStyle: {
                    normal: {
                        color: "#00BBFF",
                    },
                },
                data: appLeftData,
            },
            {
                name: "网页端",
                type: "line",
                stack: "2",
                areaStyle: {
                    normal: {
                        color: "#004CFF",
                    },
                },
                xAxisIndex: 2,
                yAxisIndex: 2,
                data: webRightData,
            },
            {
                name: "移动端",
                type: "line",
                stack: "2",
                areaStyle: {
                    normal: {
                        color: "#00BBFF",
                    },
                },
                xAxisIndex: 2,
                yAxisIndex: 2,
                data: appRightData,
            },
        ],
    }, ],
};