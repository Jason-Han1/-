let colorList = [
    "#5a91fb",
    "#5ad9a7",
    "#5c7091",
    "#f7bd16",
    "#e86452",
    "#6ec9eb",
    "#955eb9",
    "#ff9944",
    "#1e9593",
    "#ff99c3",
    "#81511c",
    "#7d0022",
    "#556fb5",
    "#009944",
    "#0068b7",
]

let seriesData = [{
        name: "倾斜",
        value: 1,
    },
    {
        name: "坍塌",
        value: 1,
    },
    {
        name: "沉降",
        value: 1,
    },
]

let radius = ["30%", "60%"] //半径
option = {
    title: {
        text: "10个",
        left: "center",
        top: "50%",
        textStyle: {
            fontSize: 28,
            color: "#333",
            fontWeight: "400",
        },
    },
    color: colorList,
    tooltip: {
        trigger: "item",
        formatter: "{b} : {c} <br> ({d}%)",
    },
    calculable: true,
    series: [{
        type: "pie",
        radius: radius,
        hoverAnimation: false,
        label: {
            normal: {
                textStyle: {
                    fontSize: 14,
                },
                formatter: (param) => {
                    let str = `${param.name}\n${Math.round(param.percent)}%`
                    return str;
                },
            },
        },
        labelLine: {
            normal: {
                length: 5,
                length2: 25,
                smooth: true,
                lineStyle: {
                    width: 2,
                },
            },
        },
        itemStyle: {
            normal: {
                shadowBlur: 30,
                shadowColor: "rgba(0, 0, 0, 0.4)",
            },
        },
        data: seriesData
    }, ],
}