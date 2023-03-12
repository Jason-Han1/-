option = {
    title: {
        text: "药品收入分析",
        x: "center"
    },
    tooltip: {
        trigger: "item",
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        x: "left",
        data: ["中药", "西药", "草药"]
    },
    label: {
        normal: {
            formatter: "{b} ({d}%)",
            position: "insideTopRight"
        }
    },
    labelLine: {
        normal: {
            smooth: .6
        }
    },
    toolbox: {
        show: !0,
        feature: {
            mark: {
                show: !0
            },
            dataView: {
                show: !0,
                readOnly: !1
            },
            magicType: {
                show: !0,
                type: ["pie", "funnel"]
            },
            restore: {
                show: !0
            },
            saveAsImage: {
                show: !0
            }
        }
    },
    calculable: !0,
    series: [{
        name: "药品类别",
        type: "pie",
        roseType: "area",
        label: {
            normal: {
                show: !0
            },
            emphasis: {
                show: !0
            }
        },
        lableLine: {
            normal: {
                show: !0
            },
            emphasis: {
                show: !0
            }
        },
        data: [{
            value: 305,
            name: "西药"
        }, {
            value: 234,
            name: "中药"
        }, {
            value: 145,
            name: "草药"
        }]
    }]
};