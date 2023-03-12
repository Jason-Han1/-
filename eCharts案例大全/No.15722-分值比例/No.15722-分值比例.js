option = {
    title: {
        text: '分值比例'
    },
    legend: {
        x: "right",
        data: ["60分以下", "60~70分的比例", "70~80分的比例", "80~90分的比例", "90~100分的比例"]
    },
    label: {
        normal: {
            formatter: "{b} ({d}%)",
            position: "insideTopRight"
        }
    },
    toolbox: {
        show: !0,
        itemGap: 5,
        right: 20,
        bottom: 20,
        feature: {
            dataView: {
                show: !0,
                readOnly: !1
            },
            magicType: {
                show: !0,
                type: ["pie", "funnel"]
            },
            saveAsImage: {
                show: !0,
                name: '问卷调查分值比例饼状图'
            }
        }
    },
    series: {
        name: '问卷分值比例饼状图',
        type: 'pie',
        startAngle: 10,
        minAngle: 5,
        roseType: 'angle',
        itemStyle: {
            emphasis: {
                //阴影的大小
                shadowBlur: 50,
                // 阴影水平方向上的偏移
                shadowOffsetX: 0,
                // 阴影垂直方向上的偏移
                shadowOffsetY: 0,
                // 阴影颜色
                shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
        },
        data: [{
            value: 10,
            name: '60分以下'
        }, {
            value: 30,
            name: '60~70分的比例'
        }, {
            value: 20,
            name: '70~80分的比例'
        }, {
            value: 10,
            name: '80~90分的比例'
        }, {
            value: 30,
            name: '90~100分的比例'
        }]
    }
};