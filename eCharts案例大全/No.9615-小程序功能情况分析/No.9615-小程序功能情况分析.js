option = {
    tooltip: {
        trigger: "item",
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        orient: "vertical",
        x: "left",
        data: ["小程序到期", "展示公司与产品", "未使用小程序", "小程序功能未启用或有异常", "商城类小程序", "小程序内无内容"]
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
                    value: 7,
                    name: "小程序到期小程序到期-7(3.66%)"
                },
                {
                    value: 28,
                    name: "展示公司与产品-28(14.66%)"
                },
                {
                    value: 73,
                    name: "未使用小程序-73(38.22%)"
                },
                {
                    value: 26,
                    name: "小程序功能未启用或有异常-26(13.61%)"
                },
                {
                    value: 41,
                    name: "商城类小程序-41(21.47%)"
                },
                {
                    value: 16,
                    name: "小程序内无内容-16(8.38%)"
                }
            ]
        }
    ]
};