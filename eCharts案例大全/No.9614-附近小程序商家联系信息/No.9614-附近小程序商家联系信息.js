option = {
    tooltip: {
        trigger: "item",
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        orient: "vertical",
        x: "left",
        data: ["商家地址及联系电话齐全", "商家无联系电话"]
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
            name: "数量",
            type: "pie",
            radius: "55%",
            center: ["50%", "60%"],
            data: [
                {
                    value: 142,
                    name: "商家地址及联系电话齐全"
                },
                {
                    value: 43,
                    name: "商家无联系电话"
                }
            ]
        }
    ]
};