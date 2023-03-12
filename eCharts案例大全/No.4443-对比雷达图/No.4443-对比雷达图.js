let testdata = [47, 53, 57, 32, 46]
let formaldata = [46, 41, 35, 40, 40]

option = {
    backgroundColor: '#060400',
    tooltip: {},
    color: ["#b38200", "#1890ff"],
    legend: {
        orient: "vertical",
        y: "center", //可设定图例在上、下、居中
        left: 0,
        icon: 'circle',
        inverse: true,
        data: ["测试一", "测试二"],
        textStyle: {
            color: "#fff",
            fontSize: 16
        },
    },
    radar: {
        name: {
            textStyle: {
                color: "rgba(255, 255, 255, 0.8)",
                backgroundColor: "rgba(0, 0, 0, 0)",
                borderRadius: 3,
                padding: [3, 5],
                fontSize: 20
            },
        },
        splitArea: {
            show: false,
        },
        // y轴线

        indicator: [{
                name: "模式一",
                max: 100,
                axisLabel: {
                    show: true,
                    inside: true,

                    textStyle: {
                        color: "#fff", // 坐标轴刻度文字的样式
                    },
                },
                axisTick: {
                    show: true,
                    inside: true,
                },
                axisLine: {
                    lineStyle: {
                        color: ["rgba(255,255,255,.8)"],
                    },
                },
            },
            {
                name: "模式二",
                max: 100,
                axisLabel: {
                    show: false
                }
            },
            {
                name: "模式三",
                max: 100,
                axisLabel: {
                    show: false
                }
            },
            {
                name: "模式四",
                max: 100,
                axisLabel: {
                    show: false
                }
            },
            {
                name: "模式五",
                max: 100,
                axisLabel: {
                    show: false
                }
            }
        ],
        splitLine: {

            show: true,
            lineStyle: {
                width: 1,
                color: "#102340", // 图表背景网格线的颜色
            },
        },
        center: ["50%", "60%"],
        axisLine: {
            // 坐标轴线
            show: true, // 默认显示，属性show控制显示与否testdata
            lineStyle: {
                // color: ["#102340"],
                color: ["#102340"],
            }
        }
    },
    series: [{
        name: "",
        type: "radar",
        // areaStyle: {normal: {}},
        data: [{
                value: testdata,
                name: "测试一",
                label: {
                    show: true,
                    formatter: function(params) {
                        return params.value;
                    },
                },
            },
            {
                value: formaldata,
                name: "测试二",
                label: {
                    show: true,
                    formatter: function(params) {
                        return params.value;
                    },
                },
            },
        ],
    }, ],
}