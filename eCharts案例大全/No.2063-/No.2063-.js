option = {
    tooltip: {
        trigger: "item",
        formatter: function (param) {
            return `<span>${(param.value[1] * 1).toFixed(1)}℃<br>${param.seriesName}<span>`;
        },
    },
    legend: {
        orient: "horizontal",
        left: "center",
        bottom: "10",
        itemHeight: 6,
        itemWidth: 6,
        data: [
            // 0: 低体温(重度) 1:低体温(中度) 2:低体温(轻度) 3:正常 4:低热 5:中度发烧 6:高热 7:过高热
            {
                name: "低体温",
                icon: "circle",
                textStyle: {
                    color: "#666",
                },
            },
            {
                name: "低体温",
                icon: "circle",
                textStyle: {
                    color: "#666",
                },
            },
            {
                name: "低体温",
                icon: "circle",
                textStyle: {
                    color: "#666",
                },
            },
            {
                name: "正常",
                icon: "circle",
                textStyle: {
                    color: "#666",
                },
            },
            {
                name: "低热",
                icon: "circle",
                textStyle: {
                    color: "#666",
                },
            },
            {
                name: "中度发烧",
                icon: "circle",
                textStyle: {
                    color: "#666",
                },
            },
            {
                name: "过高热",
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
        right: "4%",
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
        // splitNumber: 10,  // 没有 min 和max 控制横线条数

        min: function (value) {
            // 有max min 就minInterval 控制线的条数
            console.log(value, "123");
            // return value.min;
            return 30;
        },
        max: function (value) {
            // return value.max;
            return 45;
        },
        minInterval: 0.1, //设置成1保证坐标轴分割刻度显示成整数。
    },
    series: [
        // 0: 低体温(重度) 1:低体温(中度) 2:低体温(轻度) 3:正常 4:低热 5:中度发烧 6:高热 7:过高热
        {
            name: "低体温",
            type: "scatter",
            dataType: "xx",
            data: [
                [1, 38],
                [1, 39],
            ],
            symbol: "circle",
            symbolSize: 10,
            showAllSymbol: true,
            lineStyle: {
                //设置折线色颜色
                color: "#8898F6",
            },
            itemStyle: {
                //设置折线折点的颜色,
                normal: {
                    color: "#8898F6",
                    // label: { show: true }
                },
            },
            emphasis: {
                label: {
                    show: true,
                    formatter: function (param) {
                        return param.data[3];
                    },
                    position: "bottom",
                },
            },

            // markLine: {
            //     symbol: ["none", "none"],
            //     label: { show: false },
            //     data: [{ xAxis: 1 }, { xAxis: 3 }, { xAxis: 5 }, { xAxis: 7 }],
            // },

            markLine: {
                // silent: true,
                lineStyle: {
                    color: "#333",
                },
                data: [
                    {
                        yAxis: 36.25,
                    },
                    {
                        yAxis: 37.25,
                    },
                    {
                        yAxis: 38.25,
                    },
                    {
                        yAxis: 39.25,
                    },
                ],
            },
        },
        {
            name: "低体温",
            type: "scatter",
            dataType: "xx",
            data: [
                [1, 38],
                [1, 39],
            ],
            symbol: "circle",
            symbolSize: 10,
            showAllSymbol: true,
            lineStyle: {
                //设置折线色颜色
                color: "#8898F6",
            },
            itemStyle: {
                //设置折线折点的颜色,
                normal: {
                    color: "#8898F6",
                    // label: { show: true }
                },
            },
            // emphasis: {
            //   label: {
            //     show: true,
            //     formatter: function (param) {
            //       return param.data[3];
            //     },
            //     position: "bottom",
            //   },
            // },

            // markLine: {
            //   symbol: ["none", "none"],
            //   label: { show: false },
            //   data: [{ xAxis: 1 }, { xAxis: 3 }, { xAxis: 5 }, { xAxis: 7 }],
            // },

            // markLine: {
            //   // silent: true,
            //   lineStyle: {
            //     color: "#333",
            //   },
            //   data: [
            //     {
            //       yAxis: 36.25,
            //     },
            //     {
            //       yAxis: 37.25,
            //     },
            //     {
            //       yAxis: 38.25,
            //     },
            //     {
            //       yAxis: 39.25,
            //     },
            //   ],
            // },
        },
        {
            name: "低体温",
            type: "scatter",
            dataType: "xx",
            data: [
                // [1, 38],
                // [1, 39],
            ],
            symbol: "circle",
            symbolSize: 10,
            showAllSymbol: true,
            lineStyle: {
                //设置折线色颜色
                color: "#8898F6",
            },
            itemStyle: {
                //设置折线折点的颜色,
                normal: {
                    color: "#8898F6",
                    // label: { show: true }
                },
            },
            // emphasis: {
            //   label: {
            //     show: true,
            //     formatter: function (param) {
            //       return param.data[3];
            //     },
            //     position: "bottom",
            //   },
            // },

            // markLine: {
            //   symbol: ["none", "none"],
            //   label: { show: false },
            //   data: [{ xAxis: 1 }, { xAxis: 3 }, { xAxis: 5 }, { xAxis: 7 }],
            // },

            // markLine: {
            //   // silent: true,
            //   lineStyle: {
            //     color: "#333",
            //   },
            //   data: [
            //     {
            //       yAxis: 36.25,
            //     },
            //     {
            //       yAxis: 37.25,
            //     },
            //     {
            //       yAxis: 38.25,
            //     },
            //     {
            //       yAxis: 39.25,
            //     },
            //   ],
            // },
        },
        {
            // markLine: {
            //   silent: true,
            //   lineStyle: {
            //     color: "#333",
            //   },
            //   data: [
            //     {
            //       yAxis: 35.15,
            //     },
            //     {
            //       yAxis: 36.15,
            //     },
            //     {
            //       yAxis: 37.15,
            //     },
            //     {
            //       yAxis: 38.15,
            //     },
            //   ],
            // },
            name: "正常",
            type: "scatter",
            data: [
                // [5, 38],
                // [5, 40],
            ],
            symbol: "circle",
            symbolSize: 10,
            showAllSymbol: true,
            lineStyle: {
                color: "#77CEC1",
            },
            itemStyle: {
                //设置折线折点的颜色,
                normal: {
                    color: "#77CEC1",
                    // label: { show: true }
                },
            },
        },
        {
            name: "低热",
            type: "scatter",
            data: [
                // [2, 37],
                // [2, 39],
            ],
            symbol: "circle",
            symbolSize: 10,
            showAllSymbol: true,
            lineStyle: {
                color: "#F5BC3F",
            },
            itemStyle: {
                //设置折线折点的颜色,
                normal: {
                    color: "#F5BC3F",
                    // label: { show: true }
                },
            },
            // emphasis: {
            //   label: {
            //     show: true,
            //     formatter: function (param) {
            //       return param.data[3];
            //     },
            //     position: "bottom",
            //   },
            // },
        },
        {
            name: "中度发烧",
            type: "scatter",
            data: [],
            symbol: "circle",
            symbolSize: 10,
            showAllSymbol: true,
            lineStyle: {
                color: "#D36033",
            },
            itemStyle: {
                //设置折线折点的颜色,
                normal: {
                    color: "#D36033",
                    // label: { show: true }
                },
            },
            // emphasis: {
            //   label: {
            //     show: true,
            //     formatter: function (param) {
            //       return param.data[3];
            //     },
            //     position: "bottom",
            //   },
            // },
        },
        {
            name: "高热",
            type: "scatter",
            data: [],
            symbol: "circle",
            symbolSize: 10,
            showAllSymbol: true,
            lineStyle: {
                color: "#B74320",
            },
            itemStyle: {
                //设置折线折点的颜色,
                normal: {
                    color: "#B74320",
                    // label: { show: true }
                },
            },
            // emphasis: {
            //   label: {
            //     show: true,
            //     formatter: function (param) {
            //       return param.data[3];
            //     },
            //     position: "bottom",
            //   },
            // },
        },
        {
            name: "过高热",
            type: "scatter",
            data: [],
            symbol: "circle",
            symbolSize: 10,
            showAllSymbol: true,
            lineStyle: {
                color: "#8D3216",
            },
            itemStyle: {
                //设置折线折点的颜色,
                normal: {
                    color: "#8D3216",
                    // label: { show: true }
                },
            },
            // emphasis: {
            //   label: {
            //     show: true,
            //     formatter: function (param) {
            //       return param.data[3];
            //     },
            //     position: "bottom",
            //   },
            // },
        },
    ],
};