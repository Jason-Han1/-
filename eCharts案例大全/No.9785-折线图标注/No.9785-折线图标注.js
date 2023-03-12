var chartData = {
    name: 'theDemo',
    lower: [],
    upper: [],
    timestamp: [],
    value: [],

};
for (var i = 0; i < 1000; i++) {
    chartData.value[i] = Math.ceil(Math.random() * 10);
    chartData.lower[i] = chartData.value[i] - 1
    chartData.upper[i] = chartData.value[i] + 2
    chartData.timestamp[i] = i + 1
}
var markData = []
var option = {
    title: {
        show: true,
        text: chartData.name,
        textStyle: {
            fontSize: 14
        },
        top: 10
    },
    grid: {
        left: 40,
        right: 40
    },
    xAxis: {
        type: "category",
        boundaryGap: false,
        data: chartData.timestamp
    },
    brush: {
        toolbox: ["lineX", "clear"],
        transformable: false,
        seriesIndex: "all",
        throttleType: "debounce",
        xAxisIndex: 0,
        throttleDelay: 1000,
        brushMode: "multiple",
        // brushStyle: {
        //     color: "transparent",
        //     borderWidth: 0
        // }
    },
    tooltip: {
        show: false,
    },
    yAxis: [{
        type: "value"
    }],

    series: [{
            name: "line",
            type: "line",
            data: chartData.value,
            symbol: "none",
            lineStyle: {
                color: "#00a2ff",
                width: 1
            },
            showSymbol: false,
            sampling: "average",
            showAllSymbol: false,
            markArea: {
                data: markData
            }
        },
        {
            name: "line",
            type: "line",
            data: chartData.anomaly,
            symbol: "none",
            lineStyle: {
                color: "red",
                width: 1
            },
            showSymbol: false,
            sampling: "average",
            showAllSymbol: false
        },
        {
            name: "lineBtm",
            type: "line",
            stack: "lb", // 两根线这个字段值设置就会叠加
            data: chartData.lower,
            symbol: "none",
            lineStyle: {
                color: "transparent"
            },
            showSymbol: false,
            sampling: "average",
            showAllSymbol: false
        },
        {
            name: "lineTop",
            type: "line",
            areaStyle: {
                color: "#bedbff"
            }, // 设置此属性就会填充颜色
            stack: "lb",
            data: chartData.upper,
            symbol: "none",
            lineStyle: {
                color: "transparent"
            },
            showSymbol: false,
            sampling: "average",
            showAllSymbol: false
        }
    ]
};
myChart.setOption(option)
myChart.off("brush");
myChart.on("brushSelected", params => {

    if (params.batch[0].areas.length > 0) {
        var xSelect = params.batch[0].areas[0].coordRange;
        markData.push([{
                xAxis: chartData.timestamp[xSelect[0]],
                itemStyle: {
                    color: "rgba(255,70,70,0.3)"
                }
            },
            {
                xAxis: chartData.timestamp[xSelect[1]]
            }
        ]);
        console.log(xSelect) //选中区域起点和终点
        myChart.setOption(option);
    }

})