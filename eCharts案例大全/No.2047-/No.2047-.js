option = {
    cwl: "mmHg",
    tooltip: {
        trigger: "item",
        formatter: function (param) {
            console.log(param, "param===");
            return `<span>${(param.value[1] * 1).toFixed(0)}ss<br>${param.seriesName
                }<span>`;
        },
    },
    legend: {
        orient: "horizontal",
        left: "center",
        bottom: "10",
        itemHeight: 6,
        itemWidth: 6,
        data: [
            {
                name: "严重\n过低",
                icon: "circle",
                textStyle: {
                    color: "#666",
                },
            },
            {
                name: "低\n血压",
                icon: "circle",
                textStyle: {
                    color: "#666",
                },
            },
            {
                name: "正常\n血压",
                icon: "circle",
                textStyle: {
                    color: "#666",
                },
            },
            {
                name: "正常\n高值",
                icon: "circle",
                textStyle: {
                    color: "#666",
                },
            },
            {
                name: "一级\n血压",
                icon: "circle",
                textStyle: {
                    color: "#666",
                },
            },
            {
                name: "二级\n血压",
                icon: "circle",
                textStyle: {
                    color: "#666",
                },
            },
            {
                name: "三级\n血压",
                icon: "circle",
                textStyle: {
                    color: "#666",
                },
            },
        ],
        textStyle: {
            color: "rgba(0,0,0,.3)",
            fontSize: 10,
            fontWeight: 300,
            padding: [0, 1],
        },
        selectedMode: false,
    },
    // 内容距离边框
    grid: {
        top: "2%", // 等价于 y: '16%'
        left: "1%",
        right: "2%",
        bottom: "20%",
        containLabel: true,
    },
    xAxis: {
        type: "category",
        boundaryGap: false,
        offset: 0,
        data: ["", "07/10", "07/11", "07/12", "07/13", "07/14", "07/15", "07/16"],

        axisLine: {
            lineStyle: {
                color: "#ccc",
            },
        },
        //  改变x轴字体颜色和大小
        axisLabel: {
            interval: 0,
            textStyle: {
                color: "#999999",
                fontSize: "10",
            },
        },
        //网格样式
        splitLine: {
            show: true,
            interval: "auto",
            lineStyle: {
                color: ["#ccc"],
                width: 1,
                type: "solid",
            },
        },
        axisTick: {
            show: false,
        },
    },
    yAxis: {
        type: "value",
        // name: "mmHg",

        minInterval: 1, //设置成1保证坐标轴分割刻度显示成整数。
        // y轴颜色
        axisLine: {
            lineStyle: {
                color: "#ccc",
            },
        },
        //  改变y轴字体颜色和大小
        axisLabel: {
            formatter: "{value}", //  给y轴添加单位
            textStyle: {
                color: "#999999",
                fontSize: "12",
            },
        },
        // y轴线
        splitLine: {
            lineStyle: {
                color: "#ccc",
            },
        },
        axisTick: {
            show: false,
        },
    },
    series: [
        {
            name: "严重\n过低",
            type: "line",
            data: [
                [1, 20],
                [1, 60],
            ],
            symbol: "circle",
            symbolSize: 10,
            showAllSymbol: true,
            lineStyle: {
                //设置折线色颜色
                color: "#63CFFA",
            },
            itemStyle: {
                //设置折线折点的颜色,
                normal: {
                    color: "#63CFFA",
                    // label: { show: true }
                },
            },
        },
        {
            name: "低\n血压",
            type: "line",
            data: [
                [5, 60],
                [5, 80],
            ],
            symbol: "circle",
            symbolSize: 10,
            showAllSymbol: true,
            lineStyle: {
                color: "#02C4C3",
            },
            itemStyle: {
                //设置折线折点的颜色,
                normal: {
                    color: "#02C4C3",
                    // label: { show: true }
                },
            },
        },
        {
            name: "正常\n血压",
            type: "line",
            data: [],
            symbol: "circle",
            symbolSize: 10,
            showAllSymbol: true,
            lineStyle: {
                color: "#91D049",
            },
            itemStyle: {
                //设置折线折点的颜色,
                normal: {
                    color: "#91D049",
                    // label: { show: true }
                },
            },
        },
        {
            name: "正常\n高值",
            type: "line",
            data: [],
            symbol: "circle",
            symbolSize: 10,
            showAllSymbol: true,
            lineStyle: {
                color: "#FFD900",
            },
            itemStyle: {
                //设置折线折点的颜色,
                normal: {
                    color: "#FFD900",
                    // label: { show: true }
                },
            },
        },
        {
            name: "一级\n血压",
            type: "line",
            data: [],
            symbol: "circle",
            symbolSize: 10,
            showAllSymbol: true,
            lineStyle: {
                color: "#FF9615",
            },
            itemStyle: {
                //设置折线折点的颜色,
                normal: {
                    color: "#FF9615",
                    // label: { show: true }
                },
            },
        },
        {
            name: "二级\n血压",
            type: "line",
            data: [],
            symbol: "circle",
            symbolSize: 10,
            showAllSymbol: true,
            lineStyle: {
                color: "#A30F04",
            },
            itemStyle: {
                //设置折线折点的颜色,
                normal: {
                    color: "#A30F04",
                    // label: { show: true }
                },
            },
        },
        {
            name: "三级\n血压",
            type: "line",
            data: [],
            symbol: "circle",
            symbolSize: 10,
            showAllSymbol: true,
            lineStyle: {
                color: "#A30F04",
            },
            itemStyle: {
                //设置折线折点的颜色,
                normal: {
                    color: "#A30F04",
                    // label: { show: true }
                },
            },
        },
    ],
};