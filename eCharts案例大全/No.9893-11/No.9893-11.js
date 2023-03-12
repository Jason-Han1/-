option = {
    backgroundColor:'#fff',
    animation: true,
    title: {
        text: 24,
        subtext: "业务域",
        x: "center",
        y: "center",
        textStyle: {
            color: "#333",
            fontSize: 60,
            fontWeight: "normal",
            align: "center",
            width: "200px"
        },
        subtextStyle: {
            color: "#333",
            fontSize: 20,
            fontWeight: "normal",
            align: "center"
        }
    },
    legend: {
        width: "70%",
        left: "center",
        textStyle: {
            color: "#5b5b5b",
            fontSize: 14
        },
        icon: "circle",
        right: "0",
        bottom: "0",
        padding: [30, 30],
        itemGap: 20,
        data: ["物资管理","招标非招标采购管理","生产运行管理","营销管理","未知","项目管理","财务管理","工程管理", "法律合同管理","其他业务领域"]
    },
    series: [{
        type: "pie",
        center: ["50%", "50%"],
        radius: ["45%", "59%"],
        color: ["#FEE449", "#00FFFF", "#00FFA8", "#9F17FF", "#FFE400", "#F76F01", "#01A4F7", "#FE2C8A",'#9be088','#ffd22f','#f8a36f','#ff5371'],
       // 'color' :['#26a3ff','#5fd3eb','#26cecd','#34e1c1','#26cd7b','#9be088','#ffd22f','#f8a36f','#ff5371','#eb7bcf','#9f5ce3','#a18aef'],
        startAngle: 135,
        labelLine: {
            normal: {
                length: 25
            }
        },
        label: {
            normal: {
                formatter: "{b|{b}:}  {per|{d}%} ",
                backgroundColor: "rgba(255, 147, 38, 0)",
                borderColor: "transparent",
                borderRadius: 4,
                rich: {
                    a: {
                        color: "#999",
                        lineHeight: 22,
                        align: "center"
                    },
                    hr: {
                        borderColor: "#aaa",
                        width: "100%",
                        borderWidth: 1,
                        height: 0
                    },
                    b: {
                        color: "#4b4b4b",
                        fontSize: 14,
                        lineHeight: 33
                    },
                    c: {
                        fontSize: 14,
                        color: "#eee"
                    },
                    per: {
                        color: "#5b5b5b",
                        fontSize: 12,
                        padding: [5, 8],
                        borderRadius: 2
                    }
                },
                textStyle: {
                    color: "#fff",
                    fontSize: 16
                }
            }
        },
        emphasis: {
            label: {
                show: true,
                formatter: "{b|{b}:}  {per|{d}%}  ",
                backgroundColor: "rgba(255, 147, 38, 0)",
                borderColor: "transparent",
                borderRadius: 4,
                rich: {
                    a: {
                        color: "#999",
                        lineHeight: 22,
                        align: "center"
                    },
                    hr: {
                        borderColor: "#aaa",
                        width: "100%",
                        borderWidth: 1,
                        height: 0
                    },
                    b: {
                        color: "#4b4b4b",
                        fontSize: 18,
                        lineHeight: 33
                    },
                    c: {
                        fontSize: 14,
                        color: "#eee"
                    },
                    per: {
                        color: "#5b5b5b",
                        fontSize: 25,
                        padding: [5, 6],
                        borderRadius: 2
                    }
                }
            }
        },
        data: [{
            name: "物资管理",
            value: 133
        }, {
            name: "招标非招标采购管理",
            value: 101
        }, {
            name: "生产运行管理",
            value: 10
        }, {
            name: "营销管理",
            value: 155
        }, {
            name: "未知",
            value: 532
        }, {
            name: "项目管理",
            value: 1217
        }, {
            name: "财务管理",
            value: 284
        }, {
            name: "工程管理",
            value: 24
        }, {
            name: "法律合同管理",
            value: 73
        }, {
            name: "其他业务领域",
            value: 17
        }]
    }, {
        type: "pie",
        center: ["50%", "50%"],
        radius: ["38%", "39%"],
        label: {
            show: false
        },
        data: [{
            value: 78,
            name: "实例1",
            itemStyle: {
                normal: {
                    color: {
                        x: 0,
                        y: 0,
                        x2: 1,
                        y2: 0,
                        type: "linear",
                        global: false,
                        colorStops: [{
                            offset: 0,
                            color: "#9F17FF"
                        }, {
                            offset: 0.2,
                            color: "#01A4F7"
                        }, {
                            offset: 0.5,
                            color: "#FE2C8A"
                        }, {
                            offset: 0.8,
                            color: "#FEE449"
                        }, {
                            offset: 1,
                            color: "#00FFA8"
                        }]
                    }
                }
            }
        }]
    }]
}