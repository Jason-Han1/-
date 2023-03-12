option = {
    color: ["rgba(0,183,238, 1)", "rgba(86,199,60, 1)"],
    tooltip: {
        show: true,
        trigger: "item",
    },
    backgroundColor: '#fff',
    title: {
        text: '题型平均得分率',
        left: 'center',
        textStyle: {
            color: '#333333'
        }
    },
    radar: {
        center: ["50%", "50%"],
        radius: "70%",
        startAngle: 90,
        splitNumber: 4,
        shape: "circle",
        splitArea: {
            areaStyle: {
                color: ["transparent"]
            }
        },
        name: {
            color: '#999'
        },
        axisLine: {
            show: true,
            lineStyle: {
                type: "dashed",
                color: "#d1d1d1"
            }
        },
        splitLine: {
            show: true,
            lineStyle: {
                type: "dashed",
                color: "#d1d1d1"
            }
        },
        indicator: [{
            name: "听短对话",
            max: 100
        }, {
            name: "听长对话",
            max: 100
        }, {
            name: "听力填空",
            max: 100
        }, {
            name: "完型选择",
            max: 100
        }, {
            name: "阅读选择",
            max: 100
        }, {
            name: "阅读填空",
            max: 100
        }, {
            name: "句子填空",
            max: 100
        }, {
            name: "翻译填空",
            max: 100
        }, {
            name: "作文",
            max: 100
        }]
    },
    series: [{
        name: "通过率(%)",
        type: "radar",
        symbol: "circle",
        symbolSize: 10,
        areaStyle: {
            normal: {
                color: "rgba(86,199,60, 0.3)"
            }
        },
        itemStyle: {
            color: 'rgba(255,255,255, 1)',
            borderColor: '#2aba3f',
            borderWidth: 3,
        },
        lineStyle: {
            normal: {
                color: "#2aba3f",
                width: 3
            }
        },
        label: {
            normal: {
                show: true,
                color: '#000',
            }
        },
        data: [
            [80, 50, 55, 80, 50, 80, 100, 99, 90],
        ]


    }]
};