option = {
    tooltip: {
        trigger: "item",
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
   legend: {
        orient: "vertical",
        x: "left",
        data: ["未知", "商城类", "展示类"]
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
            name: "小程序类别",
            type: "pie",
            radius: "55%",
            center: ["50%", "60%"],
            data: [
                {
                    value: 22,
                    name: "未知-22(19.82%)"
                },
                {
                    value: 34,
                    name: "商城类-34-(30.63%)"
                },
                {
                    value: 55,
                    name: "展示类-55(49.55%)"
                }
            ]}
        ]
};