var option = {
    backgroundColor: "rgba(2, 18, 65, 0.5)",
    textStyle: {
        color: "#c0c3cd",
        fontSize: 14,
    },
    toolbox: {
        show: false,
        feature: {
            saveAsImage: {
                backgroundColor: "#031245",
            },
            restore: {},
        },
        iconStyle: {
            borderColor: "#c0c3cd",
        },
    },
    legend: {
        top: 10,
        itemWidth: 8,
        itemHeight: 8,
        icon: "circle",
        left: "center",
        padding: 0,
        textStyle: {
            color: "#c0c3cd",
            fontSize: 14,
            padding: [2, 0, 0, 0],
        },
    },
    color: [
        "#63caff",
        "#49beff",
        "#03387a",
        "#03387a",
        "#03387a",
        "#6c93ee",
        "#a9abff",
        "#f7a23f",
        "#27bae7",
        "#ff6d9d",
        "#cb79ff",
        "#f95b5a",
        "#ccaf27",
        "#38b99c",
        "#93d0ff",
        "#bd74e0",
        "#fd77da",
        "#dea700",
    ],
    grid: {
        containLabel: true,
        left: 10,
        right: 10,
        bottom: "10%",
        top: 30,
    },
    xAxis: {
        nameTextStyle: {
            color: "#c0c3cd",
            padding: [0, 0, -10, 0],
            fontSize: 12,
        },
        axisLabel: {
            color: "#c0c3cd",
            fontSize: 12,
            interval: 0,
        },
        axisTick: {
            lineStyle: {
                color: "#384267",
                width: 1,
            },
            show: true,
        },
        splitLine: {
            show: false,
        },
        axisLine: {
            lineStyle: {
                color: "#384267",
                width: 1,
                type: "solid",
            },
            show: true,
        },
        data: [
            "1234\n地区1",
            "1234\n地区2",
            "1234\n地区3",
            "1234\n地区4",
            "1234\n地区2",
            "1234\n地区3",
            "1234\n地区4",
        ],
        type: "category",
    },
    yAxis: {
        nameTextStyle: {
            color: "#c0c3cd",
            padding: [0, 0, 0, 0],
            fontSize: 12,
        },
        axisLabel: {
            color: "#c0c3cd",
            fontSize: 14,
        },
        axisTick: {
            lineStyle: {
                color: "#384267",
                width: 1,
            },
            show: true,
        },
        splitLine: {
            show: false,
            lineStyle: {
                color: "#384267",
                type: "dashed",
            },
        },
        axisLine: {
            lineStyle: {
                color: "#384267",
                width: 1,
                type: "solid",
            },
            show: true,
        },
        name: "单位：万",
        splitNumber: 3,
        // boundaryGap:[0,1] //boundaryGap是坐标轴两端空白策略，数组内数值代表百分比
    },
    dataZoom: [{
            type: "slider",
            show: true,
            xAxisIndex: [0],
            start: 1,
            end: 135,
            bottom: 0, //距离底部的距离
            height: 18,
            handleStyle: {
                color: "#d3dee5",
            },
            textStyle: {
                color: "#fff",
                fontSize: "10px"
            },
        },
        // {
        //   type: "inside",
        //   xAxisIndex: [0],
        //   start: 1,
        //   end: 135,
        //   bottom: 0, //距离底部的距离
        //   height: 20,
        // },
    ],
    series: [{
            data: [200, 85, 112, 275, 305, 415, 741, 405],
            type: "bar",
            barMaxWidth: "auto",
            barWidth: 30,
            itemStyle: {
                color: {
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    type: "linear",
                    global: false,
                    colorStops: [{
                            offset: 0,
                            color: "#0b9eff",
                        },
                        {
                            offset: 1,
                            color: "#63caff",
                        },
                    ],
                },
            },
            label: {
                show: true,
                position: "top",
                distance: 10,
                color: "#fff",
            },
        },
        {
            data: [1, 1, 1, 1, 1, 1, 1, 1],
            type: "pictorialBar",
            barMaxWidth: "20",
            symbol: "diamond",
            symbolOffset: [0, "50%"],
            symbolSize: [30, 15],
        },
        {
            data: [200, 85, 112, 275, 305, 415, 741, 405],
            type: "pictorialBar",
            barMaxWidth: "20",
            symbolPosition: "end",
            symbol: "diamond",
            symbolOffset: [0, "-50%"],
            symbolSize: [30, 12],
            zlevel: 2,
        },
        {
            data: [741, 741, 741, 741, 741, 741, 741, 741],
            type: "bar",
            barMaxWidth: "auto",
            barWidth: 30,
            barGap: "-100%",
            zlevel: -1,
        },
        {
            data: [1, 1, 1, 1, 1, 1, 1, 1],
            type: "pictorialBar",
            barMaxWidth: "20",
            symbol: "diamond",
            symbolOffset: [0, "50%"],
            symbolSize: [30, 15],
            zlevel: -2,
        },
        {
            data: [741, 741, 741, 741, 741, 741, 741, 741],
            type: "pictorialBar",
            barMaxWidth: "20",
            symbolPosition: "end",
            symbol: "diamond",
            symbolOffset: [0, "-50%"],
            symbolSize: [30, 12],
            zlevel: -1,
        },
    ],
    tooltip: {
        trigger: "axis",
        show: false,
    },
};