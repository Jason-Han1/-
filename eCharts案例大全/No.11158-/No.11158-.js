option = {
    tooltip: {
        trigger: "axis",
        axisPointer: {
            type: "shadow"
        }
    },
    legend: {
        data: ["空调", "洗衣机", "冰箱", "总和", "空调和洗衣机"]
    },
    toolbox: {
        show: true,
        orient: "vertical",
        x: "right",
        y: "center",
        feature: {
            mark: {
                show: true
            },
            dataView: {
                show: true,
                readOnly: true
            },
            magicType: {
                show: false,
                type: ["line", "bar", "stack", "tiled"]
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
    xAxis: [
        {
            type: "category",
            data: ["1月", "2月", "3月"]
        }
    ],
    yAxis: [
        {
            type: "value"
        }
    ],
    series: [
        {
            name: "空调",
            type: "bar",
            data: [37, 58, 97]
        },
        {
            name: "洗衣机",
            type: "bar",
            stack: "广告",
            data: [27, 134, 46]
        },
        {
            name: "冰箱",
            type: "bar",
            stack: "广告",
            data: [80, 133, 129]
        },
        {
            name: "总和",
            type: "bar",
            
            data: [144, 325, 272]
        },
        {
            name: "空调和洗衣机",
            type: "bar",
            data: [78, 85, 36]
        }
    ]
}