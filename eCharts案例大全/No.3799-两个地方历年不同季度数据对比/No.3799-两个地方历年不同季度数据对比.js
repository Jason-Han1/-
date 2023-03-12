let listAry = [{
        "NF": "2019",
        "DATA": [{
                "CZID": "1",
                "CZMC": "北京街道",
                "DATA": [{
                    "CZID": "1",
                    "NF": "2019",
                    "DYCYSR": 14493.0, //第一产业
                    "DECYSR": 316955.0, //第二产业
                    "DSCYSR": 276547.0 //第三产业
                }]
            },
            {
                "CZID": "2",
                "CZMC": "南京镇",
                "DATA": [{
                    "CZID": "2",
                    "NF": "2019",
                    "DYCYSR": 77712.0,
                    "DECYSR": 2187269.0,
                    "DSCYSR": 544368.0
                }]
            }
        ]
    },
    {
        "NF": "2018",
        "DATA": [{
            "CZID": "2",
            "CZMC": "南京镇",
            "DATA": [{
                "CZID": "2",
                "NF": "2018",
                "DYCYSR": 69289.0,
                "DECYSR": 1983189.0,
                "DSCYSR": 559546.0
            }]
        }]
    }
]

var emphasisStyle = {
    itemStyle: {
        shadowBlur: 10,
        shadowColor: 'rgba(255,255,255,1)'
    }
};


let yAxisData = [];
let legendList = [{
        name: "第一产业",
        color: "#ffc580",
        leftList: [],
        rightList: [],
    },
    {
        name: "第二产业",
        color: "#00bfbf",
        leftList: [],
        rightList: [],
    },
    {
        name: "第三产业",
        color: "#8080ff",
        leftList: [],
        rightList: [],
    },
];

// 遍历 返回值 和 图例 将 返回值的数据放入到 图例里面
listAry.map((item) => {
    yAxisData.push(item.NF);
    // 获取列数据
    legendList.map((itemInner, indexInner) => {
        // listAry 遍历两遍   每一次 legendList 执行三遍
        switch (indexInner) {
            case 0: //处理 第一产业数据
                // 某一年两个地点 只有 一个地点 有数据
                if (item.DATA.length == 1) {
                    if (item.DATA[0].CZMC == "北京街道") {
                        itemInner.leftList.push(item.DATA[0].DATA[0].DYCYSR);
                        itemInner.rightList.push(0);
                    } else {
                        itemInner.leftList.push(0);
                        itemInner.rightList.push(item.DATA[0].DATA[0].DYCYSR);
                    }
                } else {
                    // 某一年两个地点 都有数据
                    itemInner.leftList.push(item.DATA[0].DATA[0].DYCYSR);
                    itemInner.rightList.push(item.DATA[1].DATA[0].DYCYSR);
                }
                break;
            case 1: //处理 第二产业数据
                if (item.DATA.length == 1) {
                    if (item.DATA[0].CZMC == "北京街道") {
                        itemInner.leftList.push(item.DATA[0].DATA[0].DECYSR);
                        itemInner.rightList.push(0);
                    } else {
                        itemInner.leftList.push(0);
                        itemInner.rightList.push(item.DATA[0].DATA[0].DECYSR);
                    }
                } else {
                    itemInner.leftList.push(item.DATA[0].DATA[0].DECYSR);
                    itemInner.rightList.push(item.DATA[1].DATA[0].DECYSR);
                }
                break;
            case 2: //处理 第三产业数据
                if (item.DATA.length == 1) {
                    if (item.DATA[0].CZMC == "北京街道") {
                        itemInner.leftList.push(item.DATA[0].DATA[0].DSCYSR);
                        itemInner.rightList.push(0);
                    } else {
                        itemInner.leftList.push(0);
                        itemInner.rightList.push(item.DATA[0].DATA[0].DSCYSR);
                    }
                } else {
                    itemInner.leftList.push(item.DATA[0].DATA[0].DSCYSR);
                    itemInner.rightList.push(item.DATA[1].DATA[0].DSCYSR);
                }
                break;
        }
    });
});

console.log("legendList", legendList)
console.log("yAxisData", yAxisData)
let maxNum = 0; //  计算出 每一行的 和的最大值
let sumList = [];
// 计算出 每一行的 和
listAry.map((item) => {
    item.DATA.map((itemInner) => {
        let obj = itemInner.DATA[0];
        let sum = obj.DYCYSR + obj.DECYSR + obj.DSCYSR;
        itemInner.total = sum;
        sumList.push(sum);
    });
});

console.log("listAry", listAry)
console.log("sumList", sumList)
maxNum = Math.max(...sumList) + 200;
let bgLeft = [{
    name: "进度条背景",
    type: "bar",
    stack: "1",
    data: [],
      
    barWidth: 25,
    itemStyle: {
        color: "#0b2940",
    },
}, ];
let bgRight = [{
    name: "进度条背景",
    type: "bar",
    stack: "2",
    xAxisIndex: 2,
    yAxisIndex: 2,
    data: [],
    barWidth: 25,
    itemStyle: {
        color: "#0b2940",
    },
}, ];
// 构造左右 总和 数组 -> 将每一行的总和  放到数组-> 为了 获取背景的长度
let totalList = [];
yAxisData.map((item) => {
    let obj = {
        leftTotal: 0,
        rightTotal: 0,
    };
    totalList.push(obj);
});


console.log("totalList", totalList)
listAry.map((item, index) => {
    if (item.DATA.length == 1) {
        if (item.DATA[0].CZMC == "北京街道") {
            totalList[index].leftTotal = item.DATA[0].total;
            totalList[index].rightTotal = 0;
        } else {
            totalList[index].leftTotal = 0;
            totalList[index].rightTotal = item.DATA[0].total;
        }
    } else {
        totalList[index].leftTotal = item.DATA[0].total;
        totalList[index].rightTotal = item.DATA[1].total;
    }
});
totalList.map((item) => {
    bgLeft[0].data.push(maxNum - item.leftTotal);
    bgRight[0].data.push(maxNum - item.rightTotal);
    // bgLeft[0].data.push(maxNum);
    // bgRight[0].data.push(maxNum);
});
console.log("bgLeft", bgLeft)
console.log("bgRight", bgRight)

let legend = [];
let seriesData = [];
let seriesDataLeft = [];
let seriesDataRight = [];
// 拼凑数据
legendList.map((item) => {
    legend.push(item.name);
    let objLeft = {
        name: item.name,
        type: "bar",
        barWidth: 25,
        emphasis: emphasisStyle,
        stack: "1",
        itemStyle: {
            normal: {
                color: item.color,
            },
        },
        label: {
            normal: {
                show: false,
            },
        },
        data: item.leftList,
    };
    let objRight = {
        name: item.name,
        type: "bar",
        xAxisIndex: 2,
        yAxisIndex: 2,
        barWidth: 25,
        emphasis: emphasisStyle,
        stack: "2",
        z: 100,
        itemStyle: {
            normal: {
                color: item.color,
            },
        },
        data: item.rightList,
    };
    seriesDataLeft.push(objLeft);
    seriesDataRight.push(objRight);
});

console.log("seriesDataLeft", seriesDataLeft)
console.log("seriesDataRight", seriesDataRight)
seriesData = [
    ...seriesDataLeft,
    ...bgLeft,
    ...seriesDataRight,
    ...bgRight,
];

console.log("seriesData", seriesData)
let textColor = "#fff";
let lineColor = "rgba(255,255,255,0.2)";

var option = {
    baseOption: {
        backgroundColor: '#080b30',
        timeline: {
            show: false,
            top: 0,
            data: [],
        },
        tooltip: {
            trigger: "axis",
            axisPointer: {
                type: "none",
            },
            textStyle: {
                align: "left",
            },
            formatter: (params) => {
                let name = "";
                if (params[0].axisIndex == 0) {
                    name = "北京";
                } else {
                    name = "南京";
                }
                let str = `${name} ${params[0].name}<br/>`;
                params.map((item, index) => {
                    if (item.seriesName != "进度条背景") {
                        str += `${item.marker}${item.seriesName} ${item.value} 万元<br/>`;
                    }
                });
                return str;
            },
        },
        title: {
            text: "",
            left: "center",
            color: "green",
        },
        legend: {
            top: "5%",
            itemWidth: 40,
            itemHeight: 5,
            itemGap: 30,
            align: "right",
            icon: "horizontal",
            textStyle: {
                color: "#ffffff",
                fontSize: 16,
            },
            data: legend,
        },
        grid: [{
                show: false,
                left: "-6%", //为了把中间的Y轴年份显示出来
                right: "5%",
                top: "15%",
                bottom: "8%",
                containLabel: true,
                width: "52%",
            },
            {
                show: false,
                left: "51%",
                top: "15%",
                bottom: "8%",
                width: "0%",
            },
            {
                show: false,
                right: "-6%",
                top: "15%",
                bottom: "8%",
                containLabel: true,
                width: "52%",
            },
        ],
        xAxis: [{
                // 'value' 数值轴，适用于连续数据。 Y轴
                type: "value",
                inverse: true,
                axisLine: {
                    show: false,
                },
                axisTick: {
                    show: false,
                },
                position: "top",
                axisLabel: {
                    show: false,
                    color: textColor,
                },
                splitLine: {
                    show: false,
                    lineStyle: {
                        color: lineColor,
                    },
                },
            },
            {
                type: "value",
                gridIndex: 1,
                show: false,
            },
            {
                type: "value",
                gridIndex: 2,
                axisLine: {
                    show: false,
                },
                axisTick: {
                    show: false,
                },
                position: "top",
                axisLabel: {
                    show: false,
                    color: textColor,
                },
                splitLine: {
                    show: false,
                    lineStyle: {
                        color: lineColor,
                    },
                },
            },
        ],
        // 设置三个Y轴 隐藏掉 左右两个 轴Label
        yAxis: [{
                // 'category' 类目轴，适用于离散的类目数据。
                //  为该类型时类目数据可自动从 series.data 或 dataset.source 中取，或者可通过 xAxis.data 设置类目数据。
                // X轴
                type: "category",
                inverse: true,
                position: "right",
                axisLine: {
                    show: false,
                    lineStyle: {
                        color: lineColor,
                    },
                },
                axisTick: {
                    show: false,
                },
                axisLabel: {
                    show: false,
                    textStyle: {
                        color: "#ffffff",
                        fontSize: 20,
                    },
                },
                data: yAxisData,
            },
            {
                type: "category",
                gridIndex: 1,
                inverse: true,
                position: "left",
                axisLine: {
                    show: false,
                },
                axisTick: {
                    show: false,
                },
                axisLabel: {
                    show: true,
                    padding: [0, 0, 0, 0],
                    textStyle: {
                        color: "#ffffff",
                        fontSize: 20,
                    },
                    align: "center",
                },
                data: yAxisData.map(function(value) {
                    return {
                        value: value,
                        textStyle: {
                            align: "center",
                        },
                    };
                }),
            },
            {
                type: "category",
                gridIndex: 2,
                inverse: true,
                position: "left",
                axisLine: {
                    show: false,
                    lineStyle: {
                        color: lineColor,
                    },
                },
                axisTick: {
                    show: false,
                },
                axisLabel: {
                    show: false,
                    textStyle: {
                        color: "#ffffff",
                        fontSize: 20,
                    },
                },
                data: yAxisData,
            },
        ],
        series: seriesData,
    },

};