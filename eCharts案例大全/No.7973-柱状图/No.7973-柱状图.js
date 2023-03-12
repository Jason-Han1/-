option = {
    tooltip: {
        trigger: "axis",
        axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: "shadow" // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    legend: {
        right: "0%",
        data: ["直接访问", "邮件营销"]
    },
    grid: {
        left: "3%",
        right: "4%",
        bottom: "3%",
        containLabel: true
    },
    xAxis: [{
        type: "category",
        data: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"]
    }],
    yAxis: [{
        type: "value"
    }],
    series: [{
            name: "直接访问",
            type: "bar",

            barGap: "0", // 柱图间距
            itemStyle: {
                normal: {
                    color: "#409DFF"
                }
            },
            data: [320, 332, 301, 334, 390, 330, 320]
        },
        {
            name: "邮件营销",
            type: "bar",
            barGap: "0", // 柱图间距
            itemStyle: {
                normal: {
                    color: "#FF70A3"
                }
            },
            data: [120, 132, 101, 134, 90, 230, 210]
        }
    ]
}