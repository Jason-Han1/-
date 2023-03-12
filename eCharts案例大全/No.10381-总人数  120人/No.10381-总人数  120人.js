let data = [{
    "name": "年龄层50岁以上",
    "value": 16
}, {
    "name": "年龄层18-28岁",
    "value": 18
}, {
    "name": "年龄层29-40岁",
    "value": 29
}, {
    "name": "年龄层41-50",
    "value": 12
}];
let color = ["#41A0F9", "#3F82FF", "#32BEF7", "#70ECF8"]
option = {
    backgroundColor: '#fff',
    animation: true,
    title: {
        text: "总人数  120人",
        x: "center",
        y: "85%",
        textStyle: {
            color: "#333",
            fontSize: 20,
            fontWeight: "normal",
        },
        subtextStyle: {
            color: "#666",
            fontSize: 20,
            fontWeight: "normal",
            align: "center"
        }
    },
    legend: {
        textStyle: {
            color: "#999",
            fontSize: 14
        },
        itemHeight: 13,
        itemWidth: 13,
        icon: 'rect',
        bottom: "0",
        padding: [30, 60],
        itemGap: 40,
        data: ["年龄层50岁以上", "年龄层18-28岁", "年龄层29-40岁", "年龄层41-50"]
    },
    series: [{
        type: "pie",
        center: ["50%", "50%"],
        radius: ["25%", "50%"],
        color: color,
        startAngle: 150,
        labelLine: {
            normal: {
                length: 25,
                length2: 60,
                lineStyle: {
                    color: '#ECECED'
                }
            }
        },
        label: {
            normal: {
                formatter: "{per|{d}%}\n\n{b|{b}}  ",
                padding: [0, -70, 0, -50],
                rich: {
                    b: {
                        color: "#999",
                        fontSize: 14,
                    },
                    per: {
                        color: "#333",
                        fontSize: 16,
                    }
                },
                textStyle: {
                    color: "#fff",
                    fontSize: 20
                }
            }
        },
        data: data
    }]
}