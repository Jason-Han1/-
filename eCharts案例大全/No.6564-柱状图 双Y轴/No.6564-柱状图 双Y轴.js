let xAxisData = [
    "环境整治",
    "拆迁",
    "保护展示",
    "清理拆除",
    "维修加固",
    "结构检测和加固",
]
let seriesData = [{
        type: "bar",
        name: "经费统计",
        barWidth: 20,
        data: [123, 291, 0, 65, 4400.02, 0],
    },
    {
        type: "bar",
        name: "数量统计",
        barWidth: 20,
        yAxisIndex: 1,
        data: [3, 1, 0, 1, 2, 0],
    },
]
let colorList = ["#5dc4ff", "#ffda5d"]


option = {
    backgroundColor: "#333",
    color: colorList,
    tooltip: {
        trigger: "axis",
        axisPointer: {
            type: "shadow",
        },
        textStyle: {
            align: "left",
        },
        formatter: (params) => {
            let str = `${params[0]["axisValueLabel"]}<br/>`;
            let nameList = ["万元", "个"];
            params.map((item, index) => {
                str += `${item.marker}${item.seriesName} ${item.value}${nameList[index]}<br/>`;
            });
            return str;
        },
    },
    legend: {
        y: 0,
        right: 80,
        icon: "rect",
        itemWidth: 10,
        itemHeight: 2,
        textStyle: {
            color: "#679FC0",
        },
    },
    grid: {
        top: "20",
        bottom: "50",
        left: "80",
        right: "50",
    },
    xAxis: {
        type: "category",
        data: xAxisData,
        axisLine: {
            lineStyle: {
                color: "#679FC0",
            },
        },
        axisTick: {
            show: false,
        },
        axisLabel: {
            textStyle: {
                color: "#679FC0",
                fontSize: 12,
            },
            interval: 0,
            rotate: 40,
        },
    },
    yAxis: [{
            type: "value",
            name: "经费统计(万元)",
            nameRotate: 90,
            nameLocation: "center",
            nameGap: 50,
            axisTick: {
                show: false,
            },
            splitLine: {
                show: false,
            },
            axisLine: {
                lineStyle: {
                    color: "#679FC0",
                },
            },
        },
        {
            type: "value",
            name: "数量(个)",
            nameRotate: 90,
            nameLocation: "center",
            nameGap: 25,
            axisTick: {
                show: false,
            },
            splitLine: {
                show: false,
            },
            axisLine: {
                lineStyle: {
                    color: "#679FC0",
                },
            },
        },
    ],
    series: seriesData,
}