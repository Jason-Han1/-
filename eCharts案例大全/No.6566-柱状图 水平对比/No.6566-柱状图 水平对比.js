let list = [{

        "NAME": "其他",
        "UNSOLVEDNUM": "3",
        "ERRORNUM": "37",
    },
    {

        "NAME": "挹江门",
        "UNSOLVEDNUM": "19",
        "ERRORNUM": "3",
    },

]



let colorList = ["#f7a335", "#01cb67", ]

let yAxisData = []
let seriesData1 = []
let seriesData2 = []
list.map((item, index) => {
    yAxisData.push(item.NAME)
    seriesData1.push(item.UNSOLVEDNUM)
    seriesData2.push(item.ERRORNUM)
})

seriesData1
option = {
    backgroundColor: "#333",
    color: colorList,
    tooltip: {
        trigger: "axis",
        axisPointer: {
            type: "shadow",
        },
        formatter: (params) => {
            console.log("params", params);
            let str = ``;
            params.map((item, index) => {
                str += `${item.marker}${item.seriesName}${Math.abs(
                    item.value
                  )}<br/>`;
            });

            return str;
        },
        textStyle: {
            align: "left",
        },
    },
    legend: {
        data: ["未解除异常数量", "异常数量"],
        top: -5,
        textStyle: {
            color: "#fff",
        },
    },
    grid: {
        left: 10,
        right: 10,
        top: 20,
        bottom: 10,
        containLabel: true,
    },
    xAxis: [{
        type: "value",
        axisLine: {
            lineStyle: {
                color: "rgba(255,255,255,0.12)",
            },
        },
        splitLine: {
            show: false,
            lineStyle: {
                color: "rgba(255,255,255,0.1)",
            },
        },
        axisLabel: {
            formatter: (value) => {
                return Math.abs(value);
            },
            color: "#fff",
            fontSize: 14,
        },
    }, ],
    yAxis: [{
        type: "category",
        axisTick: {
            show: false, //不显示坐标轴刻度线
        },
        axisLabel: {
            margin: 20,
            fontSize: 14,
            textStyle: {
                color: "#e2e9ff",
            },
        },
        splitLine: {
            show: false,
            lineStyle: {
                color: "rgba(255,255,255,0.1)",
            },
        },
        axisLine: {
            show: false,
            lineStyle: {
                color: "rgba(255,255,255,0.12)",
                width: 2,
            },
        },
        data: yAxisData,
    }, ],
    series: [{
            name: "未解除异常数量",
            type: "bar",
            barWidth: 10,
            stack: "总量",
            label: {
                normal: {
                    show: false,
                    formatter: (params) => {
                        return -params.value;
                    },
                },
            },
            data: seriesData1,
        },
        {
            name: "异常数量",
            type: "bar",
            barWidth: 10,
            stack: "总量",
            label: {
                normal: {
                    show: false,
                },
            },
            data: seriesData2,
        },
    ],
}