option = {
    backgroundColor: "",
    color: [
        "#F7B502",
        "#148AC5"
    ],
    title: {
        text: "Block Won",
        left: "9%",
        top: "4%",
        textStyle: {
            color: "#fffff",
            fontSize: "14"
        }
    },
    legend: {
        orient: "vertical",
        data: [{
                name: "老客户总数",
                icon: "circle"
            },
            {
                name: "新客户总数",
                icon: "circle"
            }
        ],
        right: 0,
        top: "4%",
        textStyle: {
            color: "#FFFFF"
        }
    },
    grid: {
        left: "4%",
        right: "8%",
        bottom: "10%",
        top: "14%",
        containLabel: true
    },
    tooltip: {
        trigger: "axis",
        axisPointer: {
            type: "shadow"
        },
        textStyle: {
            align: 'left'
        }
    },

    xAxis: [{
        type: "category",
        data: [
            "2018-11",
            "2018-12",
            "2019-01",
            "2019-02",
            "2019-03",
            "2019-04",
            "2019-05",
            "2019-06",
            "2019-07",
            "2019-08",
            "2019-09",
            "2019-10",
            "2019-11",
            "2019-12",
            "2020-01",
            "2020-02",
            "2020-03",
            "2020-04",
            "2020-05"
        ],
        axisTick: {
            show: true
        },
        axisLabel: {
            show: true,
            textStyle: {
                color: "#FFFFF",
                fontSize: 14
            },
            formatter: "{value}"
        },
        axisLine: {
            show: true
        }
    }],
    yAxis: [{
        type: "value",
        axisTick: {
            show: true
        },
        axisLine: {
            show: true
        },
        axisLabel: {
            show: true,
            textStyle: {
                color: "#FFFFF",
                fontSize: 14
            }
        },
        splitLine: { //网格线
            show: true,
            lineStyle: {
                color: "rgba(255,255,255,0.2)"
            }
        }
    }],
    series: [{
            name: "老客户总数",
            type: "bar",
            stack: "总量",
            barWidth: "60%",
            data: [
                110,
                70,
                90,
                130,
                210,
                90,
                120,
                110,
                70,
                90,
                130,
                210,
                90,
                120,
                120,
                110,
                70,
                90,
                130
            ]
        },
        {
            name: "新客户总数",
            type: "bar",
            stack: "总量",
            barWidth: "70%",
            data: [
                120,
                140,
                160,
                130,
                140,
                110,
                70,
                90,
                130,
                210,
                90,
                120,
                120,
                110,
                70,
                90,
                130,
                190,
                99
            ]
        }
    ]
};