let list = [{

        "DLNAME": "机构与能力",
        "AFFECT": [{
                "KEY": "0",
                "NAME": "负面",
                "COUNT": 0
            },
            {
                "KEY": "1",
                "NAME": "正面",
                "COUNT": 0
            },
            {
                "KEY": "2",
                "NAME": "中性",
                "COUNT": 1
            }
        ]
    },
    {

        "DLNAME": "保护管理",
        "AFFECT": [{
                "KEY": "0",
                "NAME": "负面",
                "COUNT": 1
            },
            {
                "KEY": "1",
                "NAME": "正面",
                "COUNT": 0
            },
            {
                "KEY": "2",
                "NAME": "中性",
                "COUNT": 1
            }
        ]
    },

    {

        "DLNAME": "旅游与游客管理",
        "AFFECT": [{
                "KEY": "0",
                "NAME": "负面",
                "COUNT": 0
            },
            {
                "KEY": "1",
                "NAME": "正面",
                "COUNT": 1
            },
            {
                "KEY": "2",
                "NAME": "中性",
                "COUNT": 1
            }
        ]
    },
    {

        "DLNAME": "宣传展示利用",
        "AFFECT": [{
                "KEY": "0",
                "NAME": "负面",
                "COUNT": 0
            },
            {
                "KEY": "1",
                "NAME": "正面",
                "COUNT": 1
            },
            {
                "KEY": "2",
                "NAME": "中性",
                "COUNT": 1
            }
        ]
    },

]

let yAxisData = []
let seriesPositive = []
let seriesNegative = []
let seriesNeutral = []
list.map((item, index) => {
    yAxisData.push(item.DLNAME)
    seriesNegative.push(item.AFFECT[0].COUNT)
    seriesPositive.push(item.AFFECT[1].COUNT)
    seriesNeutral.push(item.AFFECT[2].COUNT)
})
let colorList = ["#99ffcc", "#ffcc33", "#ff6666"]

option = {
    backgroundColor: "#333",
    tooltip: {
        trigger: "axis",
        axisPointer: {
            type: "shadow" // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    color: colorList,
    grid: {
        top: 0,
        left: 30,
        right: 40,
        bottom: 10,
        containLabel: true
    },
    xAxis: {
        minInterval: 1,
        type: "value",
        axisLine: {
            lineStyle: {
                color: "#51688a"
            }
        },
        axisTick: {
            alignWithLabel: true,
            lineStyle: {
                color: "#51688a"
            }
        },
        axisLabel: {
            color: "#fff"
        },
        splitLine: {
            show: false,
            lineStyle: {
                color: "#51688a",
                type: "dotted"
            }
        }
    },
    yAxis: {
        type: "category",
        data: yAxisData,
        axisLine: {
            lineStyle: {
                color: "#51688a"
            }
        },
        axisTick: {
            alignWithLabel: true,
            lineStyle: {
                color: "#51688a"
            }
        },
        axisLabel: {
            color: "#fff"
        },
        splitLine: {
            show: false,
            lineStyle: {
                color: "#51688a",
                type: "dotted"
            }
        }
    },
    series: [{
            name: "正面",
            type: "bar",
            barWidth: 20,
            stack: "总量",
            label: {
                show: false,
                position: "insideRight"
            },
            data: seriesPositive
        },
        {
            name: "中性",
            type: "bar",
            barWidth: 20,
            stack: "总量",
            label: {
                show: false,
                position: "insideRight"
            },
            data: seriesNeutral
        },
        {
            name: "负面",
            type: "bar",
            barWidth: 20,
            stack: "总量",
            label: {
                show: false,
                position: "insideRight"
            },
            data: seriesNegative
        }
    ]
}