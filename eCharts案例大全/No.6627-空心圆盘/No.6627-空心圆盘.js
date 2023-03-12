let title = "11个" //中间的标题
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
] //颜色数组
let seriesData = [{
        name: "片区1",
        value: "7",
    },
    {
        name: "片区2",
        value: "9",
    },
    {
        name: "片区3",
        value: "5",
    },
    {
        name: "片区4",
        value: "5",
    },
    {
        name: "片区5",
        value: "5",
    },
    {
        name: "片区6",
        value: "5",
    },
] // 数据数组

let outRadius = ["20", "60%"] //外圆半径
let innerRadius = ["62%", "64%"] //内圆半径

let length = 10//外圈 折现1 长度
let length2 = 25//外圈 折现2 长度
                       
option =
    option = {
        // 背景填充色
        backgroundColor: "#000",
        title: {
            text: title,
            left: "center",
            top: "49%",
            textStyle: {
                fontSize: 14,
                color: "#fff",
                fontWeight: "400",
            },
        },
        color: colorList,
        tooltip: {
            trigger: "item",
            formatter: "{b} : {c} ({d}%)",
        },
        calculable: true,
        series: [{
                name: "外圆",
                type: "pie",
                selectedMode: "single",
                //外圆半径
                radius: outRadius,
                label: {
                    normal: {
                        show: true,
                        position: "inner", //显示在扇形上
                        formatter: "{c}", //显示内容
                        textStyle: {
                            color: "white", // 改变标示文字的颜色
                            fontSize: 12, //文字大小
                            fontWeight: "bold",
                        },
                    },
                },

                labelLine: {
                    normal: {
                        length: length,
                        length2: length2,
                        smooth: true,
                        lineStyle: {
                            width: 2,
                        },
                    },
                },
                data: seriesData
            },
            {
                name: "内圆",
                type: "pie",
                //内圆半径
                radius: innerRadius,
                label: {
                    normal: {
                        textStyle: {
                            fontSize: 14,
                        },
                        formatter: (param) => {
                            let str = `${param.name}\n${Math.round(param.percent)}%`
                            return str
                        },
                    },
                },
                labelLine: {
                    normal: {
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
            },
        ],
    }