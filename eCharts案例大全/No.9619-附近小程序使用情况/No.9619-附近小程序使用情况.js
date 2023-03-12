option = {
    tooltip: {
        trigger: "item",
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        orient: "vertical",
        x: "left",
        data: ["使用小程序的商家", "没有使用小程序的商家"]
    },
    toolbox: {
        show: true,
        feature: {
            mark: {
                show: true
            },
            dataView: {
                show: true,
                readOnly: true
            },
            restore: {
                show: true
            },
            saveAsImage: {
                show: true
            }
        }
    },
    calculable: true,
    series: [
        {
            name: "商家数量",
            type: "pie",
            radius: "55%",
            center: ["50%", "60%"],
            data: [
                {
                    value: 111,
                    name: "使用小程序的商家"
                },
                {
                    value: 74,
                    name: "没有使用小程序的商家"
                }
            ]
        }
    ]
};