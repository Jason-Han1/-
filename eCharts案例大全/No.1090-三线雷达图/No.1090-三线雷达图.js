var value = ["120", "50", "90"];
var indicator = [
    {max: "200", name: "第一产业"},
    {max: "200", name: "第二产业"},
    {max: "200", name: "第三产业"}
 ];
option = {
    backgroundColor:"#061740",
    grid: {
        x: 0,
        y: 0,
        x2: 0,
        y2: 0,
        top: '15%',
        left: '3%',
        right: '3%',
        bottom: '3%',
        containLabel: true,
    },
    tooltip: {
        trigger: 'item',
        axisPointer: {
            type: 'cross',
            crossStyle: {
                color: '#999'
            }
        }
    },
    radar: {
        radius: "90%", //大小
        nameGap: 1, // 图中工艺等字距离图的距离
        center: ["50%", "50%"], // 图的位置
        name: {
            textStyle: {
                color: "#24adfe",
               fontSize: "1rem",
            },
            formatter: function(name) {
                return name;
            }
        },
        indicator: indicator,
        axisLine: {
            lineStyle: {
                color: "rgba(153, 209, 246, 0.2)", //轴颜色

            }
        },
        splitArea: {
            show: false,
            areaStyle: {
                color: "rgba(36,173,254,1)" // 图表背景的颜色
            }
        },
        splitLine: {
            show: true,
            lineStyle: {
                width: 1,
                color: "rgba(153, 209, 246, 0.2)" // 网格的颜色
            }
        }
    },
    series: [
        {
            name: "GDP三产构成",
            type: "radar",
            symbol: "angle",
            itemStyle: {
                normal: {
                    areaStyle: { type: "default" }
                }
            },
            data: [
                {
                    symbol: "circle", //圆点
                    symbolSize: 2, //圆点大小
                    value: value,
                    areaStyle: { color: "rgba(64, 205, 241, 0.2)" },
                    itemStyle: {
                        normal: {
                            borderWidth:0.5,
                            color: "#22e4fe",
                            borderColor: "#22e4fe"
                        }
                    },
                    lineStyle: {
                        color: "rgba(146, 225, 255, 1)",
                        width: 0.5
                    }
                }
            ]
        }
    ]
};
