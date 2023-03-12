// 主要是为了将折线图中一些并不常用的配置项进行配置，从而对配置更加熟悉
option = {
    title: {
        top: "10%",
        textStyle: {
            fontSize: 19,
            color: "rgba(211, 32, 32, 1)",
            fontWeight: "bold",
            lineHeight: 13
        },
        subtextStyle: {
            fontSize: 20,
            color: "rgba(142, 115, 115, 1)",
            fontStyle: "normal",
            fontWeight: "bold",
            align: "center",
            verticalAlign: "middle",
            lineHeight: 14
        },
        subtext: "副标题",
        text: "测试用例的标题",
        textAlign: "center",
        left: "50%",
        right: "45%",
        bottom: "0%",
        backgroundColor: "rgba(255, 255, 255, 1)"
    },
    xAxis: {
        type: "category",
        data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        axisLine: {
            show: true,
            lineStyle: {
                color: '#666'
            }
        },
    },
    legend: {
        icon: 'circle',
        top: '5%',
        right: '5%',
        itemWidth: 6,
        itemGap: 20,
        textStyle: {
            color: '#556677'
        }
    },
    tooltip: {
        show: true,
        trigger: 'axis', //坐标轴触发，主要在柱状图，折线图等会使用类目轴的图表中使用
        //'item' 数据项图形触发，主要在散点图，饼图等无类目轴的图表中使用。
    },
    yAxis: {
        type: 'value',
        max: 2000,
        min: 300,
        axisTick: {
            show: true
        },
        axisLine: {
            show: true,
            lineStyle: {
                color: '#666'
            }
        },
        axisLabel: {
            textStyle: {
                color: '#556677'
            }
        },
        splitLine: {
            show: false
        }
    },
    series: [{
        data: [820, 932, 901, 934, 1290, 1330, 1320],
        type: "line",
        name: "测试用例",
        cursor: "auto",
        clip: true,

        label: {
            show: true,
            position: "top",
            distance: 5,
            rotate: -1,
            offset: [0, 3.5],
            color: "rgba(89, 84, 84, 1)",
            fontStyle: "italic",
            fontWeight: "bold",
            fontFamily: "sans-serif",
            fontSize: 14,
            align: "center",
            verticalAlign: "bottom",
            lineHeight: 12,
            backgroundColor: "rgba(255, 255, 255, 1)",
            borderColor: "rgba(234, 222, 222, 1)",
            borderWidth: 2.5,
            borderRadius: [1, 1, 1, 1],
            padding: [2, 2, 2, 2],
            shadowColor: "rgba(218, 174, 174, 1)",
            shadowBlur: 1,
            shadowOffsetX: 1,
            shadowOffsetY: 1
        },
        itemStyle: {
            color: "rgba(254, 186, 186, 1)",
            borderColor: "rgba(237, 119, 119, 1)",
            borderWidth: 1,
            borderType: "solid",
            shadowBlur: 0,
            shadowColor: "rgba(99, 22, 22, 1)",
            shadowOffsetX: 0,
            shadowOffsetY: 0
        },
        lineStyle: {
            color: "rgba(179, 52, 52, 1)",
            width: 2,
            type: "dashed",
            shadowBlur: 1,
            shadowColor: "rgba(174, 89, 89, 1)",
            shadowOffsetX: 5,
            shadowOffsetY: 6,
            opacity: 0.32
        },
        areaStyle: {
            color: "rgba(228, 169, 169, 1)",
            shadowBlur: 0,
            shadowColor: "rgba(218, 200, 200, 1)",
            shadowOffsetX: 15,
            shadowOffsetY: 15,
            opacity: 0.5
        },
        symbol: "triangle",
        symbolSize: 15,
        symbolRotate: 15,
        symbolKeepAspect: false,
        symbolOffset: [1, -3],
        showSymbol: true,
        showAllSymbol: false,
        hoverAnimation: true,
        legendHoverLink: true,
        showSymbol: true,//默认是true 如果设置成false那么label也不会显示
    }]
}