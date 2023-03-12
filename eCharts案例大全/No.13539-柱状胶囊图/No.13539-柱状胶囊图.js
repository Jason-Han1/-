option = {
    legend: {
        data: ["图例1", "图例2", "图例3"]
    },
    xAxis: [{
        type: "category",
        data: ["内蒙古", "浙江", "辽宁", "吉林", "黑龙江", "安徽", "福建"],
    }, {
        type: 'category',
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            show: false
        },
        splitArea: {
            show: false
        },
        splitLine: {
            show: false
        },
        data: ["内蒙古", "浙江", "辽宁", "吉林", "黑龙江", "安徽", "福建"]
    }],
    yAxis: {
        type: "value"
    },
    series: [{
        type: "bar",
        itemStyle: {
            normal: {
                color: "rgba(255,255,255,0.25)",
                barBorderRadius: 20,
                borderColor: "#fc0"
            }
        },
        barWidth: 30,
        xAxisIndex: 0,
        data: [1000, 1000, 1000, 1000, 1000, 1000, 1000]
    }, {
        name: "图例1",
        type: "bar",
        xAxisIndex: 1,
        zlevel: 3,
        barWidth: 20,
        itemStyle: {
            barBorderRadius: 20,
        },
        barGap: '-100%',
        data: ["375", "200", "25", "190", "90", "240", "420"]
    }, {
        name: "图例2",
        type: "bar",
        xAxisIndex: 1,
        zlevel: 2,
        barWidth: 20,
        itemStyle: {
            barBorderRadius: 20,
        },
        data: ["555", "300", "150", "300", "150", "410", "610"]
    }, {
        name: "图例3",
        type: "bar",
        xAxisIndex: 1,
        zlevel: 1,
        barWidth: 20,
        itemStyle: {
            barBorderRadius: 20,
        },
        data: ["655", "500", "200", "470", "230", "690", "1000"]
    }]
}