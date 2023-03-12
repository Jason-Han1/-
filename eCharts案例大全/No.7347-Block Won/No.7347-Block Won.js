option = {
    backgroundColor: "#0B0D13",
    color: [
        "#F7B502",
        "#148AC5",
        "#34D7D1",
        "#F53D55",
        "#265CA5",
        "#62499D",
        "#6DCFDD",
        "#3E7500"
    ],
    title: {
        text: "Block Won",
        left: "9%",
        top: "4%",
        textStyle: {
            color: "#fff",
            fontSize: "22"
        }
    },
    legend: {
        orient: "vertical",
        data: [{
                name: "t01102",
                icon: "circle"
            },
            {
                name: "t01100",
                icon: "circle"
            },
            {
                name: "t02600",
                icon: "circle"
            },
            {
                name: "t01108",
                icon: "circle"
            },
            {
                name: "t01118",
                icon: "circle"
            },
            {
                name: "t01020",
                icon: "circle"
            },
            {
                name: "t0211603",
                icon: "circle"
            },
            {
                name: "t0235596",
                icon: "circle"
            }
        ],
        right: 0,
        top: "4%",
        textStyle: {
            color: "#DFDFDF"
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
            "88712",
            "88713",
            "88714",
            "88715",
            "88716",
            "88717",
            "88718",
            "88719",
            "88720",
            "88721",
            "88722",
            "88723",
            "88724",
            "88725",
            "88726",
            "88727",
            "88728",
            "88729",
            "88730"
        ],
        axisTick: {
            show: false
        },
        axisLabel: {
            show: true,
            textStyle: {
                color: "#DFDFDF",
                fontSize: 14
            },
            formatter: "{value}"
        },
        axisLine: {
            show: false
        }
    }],
    yAxis: [{
        type: "value",
        axisTick: {
            show: false
        },
        axisLine: {
            show: false
        },
        axisLabel: {
            show: true,
            textStyle: {
                color: "#DFDFDF",
                fontSize: 14
            }
        },
        splitLine: { //网格线
            show: false,
            lineStyle: {
                color: "rgba(255,255,255,0.2)"
            }
        }
    }],
    series: [{
            name: "t01102",
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
            name: "t01100",
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
        },
        {
            name: "t02600",
            type: "bar",
            stack: "总量",
            barWidth: "70%",
            data: [
                90,
                160,
                70,
                110,
                70,
                90,
                130,
                110,
                120,
                110,
                70,
                90,
                130,
                90,
                120,
                150,
                90,
                140,
                137
            ]
        },
        {
            name: "t01108",
            type: "bar",
            stack: "总量",
            barWidth: "70%",
            data: [
                60,
                130,
                140,
                110,
                70,
                90,
                120,
                110,
                70,
                90,
                130,
                130,
                210,
                90,
                120,
                183,
                103,
                80,
                180
            ]
        },
        {
            name: "t01118",
            type: "bar",
            stack: "总量",
            barWidth: "70%",
            data: [
                60,
                130,
                140,
                110,
                70,
                90,
                120,
                110,
                70,
                90,
                130,
                130,
                210,
                90,
                120,
                183,
                103,
                80,
                180
            ]
        },
        {
            name: "t01020",
            type: "bar",
            stack: "总量",
            barWidth: "70%",
            data: [
                60,
                130,
                140,
                110,
                70,
                90,
                120,
                110,
                70,
                90,
                130,
                130,
                210,
                90,
                120,
                183,
                103,
                80,
                180
            ]
        },
        {
            name: "t0211603",
            type: "bar",
            stack: "总量",
            barWidth: "70%",
            data: [
                60,
                130,
                140,
                110,
                70,
                90,
                120,
                110,
                70,
                90,
                130,
                130,
                210,
                90,
                120,
                183,
                103,
                80,
                180
            ]
        },
        {
            name: "t0235596",
            type: "bar",
            stack: "总量",
            barWidth: "70%",
            data: [
                60,
                130,
                140,
                110,
                70,
                90,
                130,
                120,
                110,
                70,
                90,
                130,
                210,
                90,
                120,
                183,
                103,
                80,
                180
            ]
        }
    ]
};