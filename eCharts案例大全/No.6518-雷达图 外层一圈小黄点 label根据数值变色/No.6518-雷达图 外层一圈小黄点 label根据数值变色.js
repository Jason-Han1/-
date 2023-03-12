let list = [{
        "name": "剥落",
        "num": 0
    },
    {
        "name": "风化",
        "num": 0
    }, {
        "name": "沉降",
        "num": 0
    }, {
        "name": "位移",
        "num": 0
    }, {
        "name": "裂缝",
        "num": 13
    }, {
        "name": "坍塌",
        "num": 0
    }, {
        "name": "倾斜",
        "num": 0
    }, {
        "name": "渗水",
        "num": 0
    }, {
        "name": "鼓胀",
        "num": 6
    }, {
        "name": "应力",
        "num": 0
    }, {
        "name": "松动",
        "num": 1
    }
]

let lineColor = "rgba(236, 105, 65, 1)" //线条颜色
let areaColor = "rgba(236, 105, 65, 0.2)" //面积颜色
let max = list[0].num; //最大值
list.forEach(item => {
    max = item.num > max ? item.num : max;
});
let seriesData = [{
    value: [],
    name: "",
    symbol: "none",
    lineStyle: {
        normal: {
            color: lineColor,
            width: 2
        }
    },
    areaStyle: {
        normal: {
            color: areaColor
        }
    }
}];

list.forEach((item, index) => {
    let value = [];
    value[index] = max;
    seriesData[0].value[index] = item.num; //雷达数据线
    // 外圈 黄色的 小点点
    seriesData.push({
        value: value,
        symbol: "circle",
        symbolSize: 4,
        lineStyle: {
            normal: {
                color: "transparent"
            }
        },
        itemStyle: {
            normal: {
                color: "rgb(255,230,13)"
            }
        }
    });
});
let indicatorList = [];
list.map((item, index) => {
    let obj = {
        name: item.name,
        max: max,
        num: item.num
    };
    indicatorList.push(obj);
});
option = {
    backgroundColor: "#999",
    radar: {
        center: ["50%", "50%"],
        radius: ["0", "50%"],
        shape: "circle",
        name: {
            // label 数值不为0 的 改变颜色
            formatter: (value, indicator) => {
                let text =
                    indicator.num > 0 ?
                    "{light|" +
                    indicator.name +
                    "}\n{b|" +
                    indicator.num +
                    "}" :
                    "{dark|" +
                    indicator.name +
                    "}\n{b|" +
                    indicator.num +
                    "}";
                return text;
            },
            rich: {
                a: {
                    //外圈标签字体颜色
                    fontSize: 16
                },
                b: {
                    marginTop: "4px",
                    fontSize: 18,
                    color: "rgb(215, 234, 245)",
                    fontFamily: "fashionSimplifiedFont"
                },
                light: {
                    fontSize: 16,
                    color: "rgb(185, 191, 133)"
                },
                dark: {
                    fontSize: 16,
                    color: "rgb(69, 112, 141)"
                }
            }
        },
        axisLabel: {
            show: false,
            fontSize: 18,
            color: "rgb(185, 191, 133)",
            fontStyle: "normal",
            fontWeight: "normal"
        },
        splitArea: {
            areaStyle: {
                color: "transparent"
            }
        },
        axisLine: {
            show: true,
            lineStyle: {
                color: "rgb(9, 53, 77)"
            }
        },
        splitLine: {
            show: true,
            lineStyle: {
                color: "rgb(9, 53, 77)"
            }
        },
        indicator: indicatorList
    },
    series: [{
        type: "radar",
        data: seriesData
    }]
}