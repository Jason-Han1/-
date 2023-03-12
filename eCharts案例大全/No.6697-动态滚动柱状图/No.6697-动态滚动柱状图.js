option = {
    backgroundColor: '#2c3e50',
    title: {
        top: 0,
        left: 0,
        text: "异常企业与罚款",
        subtext: "",
        textStyle: {
            color: "#fff"
        }
    },
    tooltip: {
        trigger: "axis"
        // axisPointer: {
        //   type: "cross",
        //   crossStyle: {
        //     color: "red"
        //   }
        // }
    },
    legend: {
        data: ["超标排放企业数", "超量排放企业数", "罚款总金额"],
        right: "0",
        icon: "circle",
        textStyle: {
            color: "#fff"
        }
    },
    grid: {
        left: "2%",
        right: "2%",
        bottom: "0%",
        containLabel: true
    },
    xAxis: [{
        type: "category",
        data: [
            "1月",
            "2月",
            "3月",
            "4月",
            "5月",
            "6月",
            "7月",
            "8月",
            "9月",
            "10月",
            "11月",
            "12月"
        ],
        axisPointer: {
            type: "shadow"
        },
        axisLabel: {
            textStyle: {
                color: "#fff"
            },
            margin: 18
        },
        splitLine: {
            show: false
        },
        axisLine: {
            //  改变x轴颜色
            lineStyle: {
                color: "#fff"
            }
        },
        axisTick: {
            //坐标轴刻度相关设置。
            show: false
        }
    }],
    dataZoom: [
        //滑动条
        {
            xAxisIndex: 0, //这里是从X轴的0刻度开始
            show: true, //是否显示滑动条，不影响使用
            type: "slider", // 这个 dataZoom 组件是 slider 型 dataZoom 组件
            startValue: 0, // 从头开始。
            endValue: 8, // 一次性展示6个
            height: 8, //组件高度
            bottom: 18,
            borderColor: "rgba(43,48,67,.8)",
            fillerColor: "#19D4AE",
            showDataShadow: false, //是否显示数据阴影 默认auto
            backgroundColor: "#f4f6f8",
            showDetail: false, //即拖拽时候是否显示详细数值信息 默认true
            realtime: false, //是否实时更新
            filterMode: "filter"
        }
    ],
    yAxis: [{
            type: "value",
            nameTextStyle: {
                color: "#fff"
            },
            name: "数量(个)",
            // min: 0,
            // max: 250,
            interval: 50,
            axisLabel: {
                formatter: "{value}",
                textStyle: {
                    color: "#fff"
                }
            },
            splitLine: {
                show: false
            },
            axisLine: {
                //  改变x轴颜色
                lineStyle: {
                    color: "#fff"
                }
            },
            axisTick: {
                //坐标轴刻度相关设置。
                show: false
            }
        },
        {
            type: "value",
            nameTextStyle: {
                color: "#fff"
            },
            name: "金额(万)",
            // min: 0,
            // max: 25,
            interval: 5,
            axisLabel: {
                formatter: "{value}",
                textStyle: {
                    color: "#fff"
                }
            },
            splitLine: {
                show: false
            },
            axisLine: {
                //  改变x轴颜色
                lineStyle: {
                    color: "#fff"
                }
            },
            axisTick: {
                //坐标轴刻度相关设置。
                show: false
            }
        }
    ],
    series: [{
            name: "超标排放企业数",
            type: "bar",
            itemStyle: {
                normal: {
                    color: "#96edc1"
                    // barBorderRadius: [10, 10, 0, 0]
                }
            },
            barMaxWidth: 20,
            data: [
                2.0,
                4.9,
                7.0,
                23.2,
                25.6,
                76.7,
                135.6,
                162.2,
                32.6,
                20.0,
                6.4,
                3.3
            ]
        },
        {
            name: "超量排放企业数",
            itemStyle: {
                normal: {
                    color: "#b6c2ff"
                    // barBorderRadius: [10, 10, 0, 0]
                }
            },
            barMaxWidth: 20,
            type: "bar",
            data: [
                2.6,
                5.9,
                9.0,
                26.4,
                28.7,
                70.7,
                175.6,
                182.2,
                48.7,
                18.8,
                6.0,
                2.3
            ]
        },
        {
            name: "罚款总金额",
            type: "line",
            smooth: true,
            yAxisIndex: 1,
            itemStyle: {
                normal: {
                    color: "#FFE180"
                }
            },
            data: [
                2.0,
                2.2,
                3.3,
                4.5,
                6.3,
                10.2,
                20.3,
                23.4,
                23.0,
                16.5,
                12.0,
                6.2
            ]
        }
    ]
};


setInterval(function() {
    // 每次向后滚动一个，最后一个从头开始。
    if (option.dataZoom[0].endValue == 12) {
        option.dataZoom[0].endValue = 8;
        option.dataZoom[0].startValue = 0;
    } else {
        option.dataZoom[0].endValue = option.dataZoom[0].endValue + 1;
        option.dataZoom[0].startValue = option.dataZoom[0].startValue + 1;
    }
    myChart.setOption(option);
}, 2000);
window.addEventListener("resize", () => {
    // 自动渲染echarts
    myChart.resize();
});