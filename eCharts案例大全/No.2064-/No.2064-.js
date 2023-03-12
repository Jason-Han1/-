option  = {
    cwl: "mmol/L",
    tooltip: {
        borderColor: "#f00",
        trigger: "item",
        formatter: function (param) {
            console.log(param, '============== // name: "mmHg",');
            return `<span>${(param.value[1] * 1).toFixed(1)}${glu_option.cwl}<br>${param.seriesName
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
                name: "血糖\n偏低",
                icon: "circle",
                textStyle: {
                    color: "#666",
                },
            },
            {
                name: "血糖\n正常",
                icon: "circle",
                textStyle: {
                    color: "#666",
                },
            },
            {
                name: "轻度\n偏高",
                icon: "circle",
                textStyle: {
                    color: "#666",
                },
            },
            {
                name: "血糖\n偏高",
                icon: "circle",
                textStyle: {
                    color: "#666",
                },
            },
            {
                name: "严重\n过高",
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
            show: false,
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
    yAxis: [
        {
            type: "value",
            // name: "mmHg",
            splitArea: {
                show: true,
            },

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
                    color: "#ccc",
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
        {
            name: "降雨量(mm)",
            nameLocation: "start",
            max: 5,
            type: "value",
            inverse: true,
            axisLine: {
                lineStyle: {
                    color: "#ccc",
                },
            },
            axisTick: {
                show: false,
            },
        },
    ],
    series: [
        {
            type: "scatter",
            name: "严重\n过低",
            data: [
                [1, 20],
                [1, 60],
            ],
            symbol: "circle",
            symbolSize: 10,
            showAllSymbol: true,
            lineStyle: {
                //设置折线色颜色
                color: "#66CDFB",
            },
            itemStyle: {
                //设置折线折点的颜色,
                normal: {
                    color: "#66CDFB",
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
            name: "血糖\n偏低",
            type: "scatter",
            data: [
                [5, 60],
                [5, 80],
            ],
            symbol: "circle",
            symbolSize: 10,
            showAllSymbol: true,
            lineStyle: {
                color: "#01C7BE",
            },
            itemStyle: {
                //设置折线折点的颜色,
                normal: {
                    color: "#01C7BE",
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
            name: "血糖\n正常",
            type: "scatter",
            data: [],
            symbol: "circle",
            symbolSize: 10,
            showAllSymbol: true,
            lineStyle: {
                color: "#90D049",
            },
            itemStyle: {
                //设置折线折点的颜色,
                normal: {
                    color: "#90D049",
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
            name: "轻度\n偏高",
            type: "scatter",
            data: [],
            symbol: "circle",
            symbolSize: 10,
            showAllSymbol: true,
            lineStyle: {
                color: "#FCD70A",
            },
            itemStyle: {
                //设置折线折点的颜色,
                normal: {
                    color: "#FCD70A",
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
            name: "血糖\n偏高",
            type: "scatter",
            data: [],
            symbol: "circle",
            symbolSize: 10,
            showAllSymbol: true,
            lineStyle: {
                color: "#FD961B",
            },
            itemStyle: {
                //设置折线折点的颜色,
                normal: {
                    color: "#FD961B",
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
            name: "严重\n过高",
            type: "scatter",
            data: [],
            symbol: "circle",
            symbolSize: 10,
            showAllSymbol: true,
            lineStyle: {
                color: "#EB6700",
            },
            itemStyle: {
                //设置折线折点的颜色,
                normal: {
                    color: "#EB6700",
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