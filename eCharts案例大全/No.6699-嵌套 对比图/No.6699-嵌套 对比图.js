option = {
    title: {
        text: "",
    },
    tooltip: {
        trigger: "axis",
        show: true,
        formatter: function(params) {
            //设置滑过显示小圆点以及对应数据的位置 方便看数
            var result = params[0].name + "<br>";
            params.forEach(function(item) {
                result +=
                    '<span style="display:inline-block;margin-right:5px;border-radius:10px;width:9px;height:9px;background-color:' +
                    item.color +
                    '"></span>';
                result +=
                    item.seriesName +
                    ": " +
                    '<span style="color:#fff">' +
                    item.data +
                    "</span><br>";
            });

            return result;
        },
    },
    grid: {
        left: "0",
    },
    legend: {
        data: ["供应预测", "供应实际", "需求预测", "需求实际"],
        textStyle: {
            color: "#606266",
        },
        padding: 20,
        margin: 20,
    },
    toolbox: {
        show: false,
    },
    calculable: true,
    grid: {
        y: 70,
        y2: 30,
        x2: 60,
        tooltip: {
            show: true,
        },
    },
    yAxis: [{
        name: "数量",
        nameTextStyle: {
            color: "#606266",
        },
        splitLine: {
            show: true
        }, //去除网格线
        type: "value",
        axisLabel: {
            show: true,
            interval: 0,
            textStyle: {
                color: "#606266",
            },
        },
        axisTick: {
            show: false,
        },
        axisLine: {
            show: false
        },
    }, ],

    xAxis: [
        //x轴只显示一个就可以 对应 xAxisIndex: 0,A***数
        {
            name: "时间",
            nameTextStyle: {
                color: "#606266",
            },
            type: "category",
            axisLabel: {
                interval: 0,
                textStyle: {
                    color: "#606266",
                },
                show: true,
            },
            axisTick: {
                show: false,
            },
            axisLine: {
                lineStyle: {
                    color: "#fff",
                },
                show: false,
            },
            data: ["7/1", "7/2", "7/3", "7/4", "7/5", "7/6", "7/7"], // 日期X轴
        },
        {
            type: "category",
            show: false,
            axisLabel: {
                interval: 0,
                textStyle: {
                    color: "#606266",
                },
                show: true,
            },
            axisTick: {
                show: false,
            },
            axisLine: {
                lineStyle: {
                    color: "#fff",
                },
                show: false,
            },
            data: ["7/1", "7/2", "7/3", "7/4", "7/5", "7/6", "7/7"], // 日期X轴
        },
    ],
    series: [{
            name: "供应预测",
            type: "bar",
            barGap: "0",
            barCategoryGap: "20%",
            xAxisIndex: 0,
            itemStyle: {
                normal: {
                    color: "#D0D5DD",
                    label: {
                        show: false,
                        textStyle: {
                            color: "#F56C6C"
                        }
                    },
                },
            },
            data: [51, 52, 53, 54, 55, 56, 57], //output_dash_data,
        },
        {
            name: "供应实际",
            type: "bar",
            barGap: "30%",
            barCategoryGap: "30%",
            xAxisIndex: 1,
            itemStyle: {
                normal: {
                    color: "#409EFF",
                    label: {
                        show: false,
                        textStyle: {
                            color: "#27727B"
                        }
                    },
                },
            },
            data: [41, 43, 44, 45, 46, 47, 48], //output_solid_data,
        },
        {
            name: "需求预测",
            type: "bar",

            xAxisIndex: 0,
            itemStyle: {
                normal: {
                    color: "#D0D5DD",
                    label: {
                        show: false,
                        textStyle: {
                            color: "#DCDFE6"
                        }
                    },
                },
            },
            data: [71, 78, 73, 79, 74, 79, 70], //need_dash_data,
        },
        {
            name: "需求实际",
            type: "bar",
            xAxisIndex: 1,
            itemStyle: {
                normal: {
                    color: "#FE6B00",
                    label: {
                        show: false,
                        textStyle: {
                            color: "#909399"
                        }
                    },
                },
            },
            data: [64, 68, 69, 68, 64, 69, 60], //need_solid_data,
        },
    ],
}