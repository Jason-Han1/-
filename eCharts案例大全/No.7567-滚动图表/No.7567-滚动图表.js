var textColor = "#a8a8a8",
    color1 = "#7d8dff",
    color2 = "#5567ff",
    shadowColor = "rgba(95,113,255,0.42)",
    borderColor = "#f5f5f5",
    yNames = ["aaaaa", "bbbbbb", "ccccccc", "dddddd", "eeeee", 'fffff', 'gggg', 'hhhh', 'iiiiii', 'jjjjjjj'],
    dataList = [10, 20, 30, 40, 50, 60, 70, 10, 20, 30, 40],
    option = {
        animationEasing: "cubicOut",
        backgroundColor: "#fff",
        title: {
            show: false,
        },
        tooltip: {
            trigger: "item",
            formatter: "{b0}: {c0}%",
        },
        grid: {
            containLabel: true,
            top: "0%",
            left: 0,
            right: 95,
            bottom: "0%",
        },
        yAxis: [{
            type: "category",
            inverse: true,
            axisLine: {
                show: false,
            },
            splitLine: {
                show: true,
                lineStyle: {
                    color: borderColor,
                },
            },
            axisTick: {
                show: false,
            },
            axisLabel: {
                color: textColor,
            },
            data: yNames,
        }, ],
        xAxis: {
            type: "value",
            min: 0,
            max: 100,
            name: "填报完成度",
            nameTextStyle: {
                color: textColor,
            },
            axisTick: {
                show: false,
            },
            nameTextStyle: {
                color: textColor,
            },
            axisLine: {
                // show: false
                lineStyle: {
                    color: borderColor,
                },
            },
            splitLine: {
                show: false,
            },
            axisLabel: {
                color: textColor,
            },
        },
        series: [{
            name: "填报完成度",
            type: "bar",
            barWidth: 10,
            data: dataList,
            // barCategoryGap:50,
            animationDuration: 800,
            itemStyle: {
                normal: {
                    show: true,
                    barBorderRadius: [0, 5, 5, 0],
                    color: new echarts.graphic.LinearGradient(
                        0,
                        0,
                        1,
                        0,
                        [{
                                offset: 0,
                                color: color1,
                            },
                            {
                                offset: 1,
                                color: color2,
                            },
                        ],
                        false
                    ),
                    shadowBlur: 7,
                    shadowOffsetY: 2,
                    shadowColor,
                },
                emphasis: {},
            },
            label: {
                normal: {
                    show: false,
                },
            },
        }, ],
        dataZoom: [{
            show: true,
            type: "inside",
            fillerColor: "#ddd",
            showDetail: false,
            showDataShadow: false,
            borderColor: "transparent",
            backgroundColor: "transparent",
            right: 0,
            width: 6,
            zoomLock: true,
            yAxisIndex: [0],
            maxValueSpan: 6,
            minValueSpan: 6,
            moveOnMouseWheel: true,
            zoomOnMouseWheel: false,
            throttle: 100,
            filterMode: "empty",
            orient: "vertical",
            fillerColor: "#ddd",
            showDetail: false,
            showDataShadow: false,
            borderColor: "transparent",
            backgroundColor: "transparent",
            lineStyle: {
                opacity: 0,
            },
            handleStyle: {
                opacity: 0,
            },
            textStyle: {
                fontSize: 0,
            },
        }, ],
        animationDurationUpdate: 100,
    }