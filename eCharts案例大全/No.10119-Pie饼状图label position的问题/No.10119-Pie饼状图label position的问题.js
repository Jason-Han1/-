option = {
    color: [
        "#f37021",
        "#ffc000",
        "#70ad47",
        "#9e480e"
    ],
    title: {
        text: "各区间分布",
        x: "center",
        y: 18
    },
    tooltip: {
        trigger: "item",
        formatter: "{b} : {c} ({d}%)"
    },
    legend: {
        x: "center",
        y: "bottom",
        data: [
            "<10",
            "10~30",
            "30~90",
            ">=90"
        ]
    },
    series: [{
        name: "",
        type: "pie",
        radius: "74%",
        center: [
            "50%",
            "53%"
        ],
        data: [{
                value: 2921,
                name: "<10"
            },
            {
                value: 19126,
                name: "10~30"
            },
            {
                value: 21060,
                name: "30~90"
            },
            {
                value: 28015,
                name: ">=90"
            }
        ],
        itemStyle: {
            normal: {
                borderWidth: 2,
                borderColor: "#fff",
                label: {
                    position: "inner",
                    formatter: "{b}\n{d}%",
                    textStyle: {
                        fontSize: 12
                    }
                },
                labelLine: {
                    show: false
                }
            }
        }
    }]
}