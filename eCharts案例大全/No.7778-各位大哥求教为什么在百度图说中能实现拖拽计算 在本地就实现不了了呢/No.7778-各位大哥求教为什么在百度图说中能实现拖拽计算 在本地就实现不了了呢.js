 option = {
    title: {
        text: "面积模式的南丁格尔玫瑰图",
        x: "center"
    },
    tooltip: {
        trigger: "item",
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        x: "center",
        y: "bottom",
        data: ["粮油、食品类", "饮料类", "烟酒类", "服装、鞋帽、针纺织品类", "化妆品类", "金银珠宝类", "日用品类", "体育、娱乐用品类", "书报杂志类", "家用电器和音像器材类", "文化办公用品类", "通讯器材类", "石油及制品类", "汽车类"]
    },
    toolbox: {
        show: true,
        feature: {
            mark: {
                show: true
            },
            dataView: {
                show: true,
                readOnly: true
            },
            restore: {
                show: true
            },
            saveAsImage: {
                show: true
            }
        }
    },
    series: [
        {
            name: "面积模式",
            type: "pie",
            radius: [30, 90],
            center: ["50%", "50%"],
            roseType: "area",
            data: [
                {
                    value: 15002,
                    name: "粮油、食品类"
                },
                {
                    value: 240,
                    name: "饮料类"
                },
                {
                    value: 2684,
                    name: "烟酒类"
                },
                {
                    value: 28393,
                    name: "服装、鞋帽、针纺织品类"
                },
                {
                    value: 8257,
                    name: "化妆品类"
                },
                {
                    value: 7274,
                    name: "金银珠宝类"
                },
                {
                    value: 2572,
                    name: "日用品类"
                },
                {
                    value: 2345,
                    name: "体育、娱乐用品类"
                },
                {
                    value: 522,
                    name: "书报杂志类"
                },
                {
                    value: 12931,
                    name: "家用电器和音像器材类"
                },
                {
                    value: 4901,
                    name: "文化办公用品类"
                },
                {
                    value: 2702,
                    name: "通讯器材类"
                },
                {
                    value: 51035,
                    name: "石油及制品类"
                },
                {
                    value: 124728,
                    name: "汽车类"
                }
            ]
        }
    ],
    color: ["#ff7f50", "rgb(135, 206, 250)", "#da70d6", "#32cd32", "#6495ed", "#ff69b4", "#ba55d3", "#cd5c5c", "#ffa500", "#40e0d0", "#1e90ff", "#ff6347", "#7b68ee", "#00fa9a", "#ffd700", "#6699FF", "#ff6666", "#3cb371", "#b8860b", "#30e0e0"],
    calculableColor: "rgba(255,165,0,0.6)",
    calculableHolderColor: "#ccc",
    calculable: true
}  // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
