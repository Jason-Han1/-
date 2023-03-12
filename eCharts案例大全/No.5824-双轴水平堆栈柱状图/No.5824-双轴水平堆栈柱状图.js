let yAxisData = [];
let legendList = [{
        name: "农、林、牧、渔业",
        color: "#5B90FA",
        leftList: [],
        rightList: [],
    },
    {
        name: "文化旅游业",
        color: "#5AD9A6",
        leftList: [],
        rightList: [],
    },
    {
        name: "工业",
        color: "#F6BD16",
        leftList: [],
        rightList: [],
    },
    {
        name: "房地产业",
        color: "#945FB9",
        leftList: [],
        rightList: [],
    },
    {
        name: "商业",
        color: "#1E9593",
        leftList: [],
        rightList: [],
    },
    {
        name: "服务业",
        color: "#FF98C3",
        leftList: [],
        rightList: [],
    },
    {
        name: "其他",
        color: "#BCDEDF",
        leftList: [],
        rightList: [],
    },
];
let listAry = [{
        "NF": "2019",
        "DATA": [{
            "CZID": "1",
            "CZMC": "左半部分",
            "DATA": [{
                "CZID": "1",
                "NF": "2019",
                "NLMY": 14493.0,
                "WHLYY": 26179.0,
                "GYSR": 253030.0,
                "FDCY": 63925.0,
                "SYSR": 45541.0,
                "FWYSR": 49322.0,
                "QTSR": 155505.0
            }]
        }]
    },
    {
        "NF": "2018",
        "DATA": [{
            "CZID": "2",
            "CZMC": "右半部分",
            "DATA": [{
                "CZID": "2",
                "NF": "2018",
                "NLMY": 0.0,
                "WHLYY": 0.0,
                "GYSR": 2064514.0,
                "FDCY": 0.0,
                "SYSR": 0.0,
                "FWYSR": 0.0,
                "QTSR": 0.0
            }]
        }]
    }
]

listAry.map((item) => {
    yAxisData.push(item.NF);
    // 获取列数据
    legendList.map((itemInner, indexInner) => {
        switch (indexInner) {
            case 0:
                if (item.DATA.length == 1) {
                    if (item.DATA[0].CZMC == "左半部分") {
                        itemInner.leftList.push(item.DATA[0].DATA[0].NLMY);
                        itemInner.rightList.push(0);
                    } else {
                        itemInner.leftList.push(0);
                        itemInner.rightList.push(item.DATA[0].DATA[0].NLMY);
                    }
                } else {
                    itemInner.leftList.push(item.DATA[0].DATA[0].NLMY);
                    itemInner.rightList.push(item.DATA[1].DATA[0].NLMY);
                }
                break;
            case 1:
                if (item.DATA.length == 1) {
                    if (item.DATA[0].CZMC == "左半部分") {
                        itemInner.leftList.push(item.DATA[0].DATA[0].WHLYY);
                        itemInner.rightList.push(0);
                    } else {
                        itemInner.leftList.push(0);
                        itemInner.rightList.push(item.DATA[0].DATA[0].WHLYY);
                    }
                } else {
                    itemInner.leftList.push(item.DATA[0].DATA[0].WHLYY);
                    itemInner.rightList.push(item.DATA[1].DATA[0].WHLYY);
                }
                break;
            case 2:
                if (item.DATA.length == 1) {
                    if (item.DATA[0].CZMC == "左半部分") {
                        itemInner.leftList.push(item.DATA[0].DATA[0].GYSR);
                        itemInner.rightList.push(0);
                    } else {
                        itemInner.leftList.push(0);
                        itemInner.rightList.push(item.DATA[0].DATA[0].GYSR);
                    }
                } else {
                    itemInner.leftList.push(item.DATA[0].DATA[0].GYSR);
                    itemInner.rightList.push(item.DATA[1].DATA[0].GYSR);
                }
                break;
            case 3:
                if (item.DATA.length == 1) {
                    if (item.DATA[0].CZMC == "左半部分") {
                        itemInner.leftList.push(item.DATA[0].DATA[0].FDCY);
                        itemInner.rightList.push(0);
                    } else {
                        itemInner.leftList.push(0);
                        itemInner.rightList.push(item.DATA[0].DATA[0].FDCY);
                    }
                } else {
                    itemInner.leftList.push(item.DATA[0].DATA[0].FDCY);
                    itemInner.rightList.push(item.DATA[1].DATA[0].FDCY);
                }
                break;
            case 4:
                if (item.DATA.length == 1) {
                    if (item.DATA[0].CZMC == "左半部分") {
                        itemInner.leftList.push(item.DATA[0].DATA[0].SYSR);
                        itemInner.rightList.push(0);
                    } else {
                        itemInner.leftList.push(0);
                        itemInner.rightList.push(item.DATA[0].DATA[0].SYSR);
                    }
                } else {
                    itemInner.leftList.push(item.DATA[0].DATA[0].SYSR);
                    itemInner.rightList.push(item.DATA[1].DATA[0].SYSR);
                }
                break;
            case 5:
                if (item.DATA.length == 1) {
                    if (item.DATA[0].CZMC == "左半部分") {
                        itemInner.leftList.push(item.DATA[0].DATA[0].FWYSR);
                        itemInner.rightList.push(0);
                    } else {
                        itemInner.leftList.push(0);
                        itemInner.rightList.push(item.DATA[0].DATA[0].FWYSR);
                    }
                } else {
                    itemInner.leftList.push(item.DATA[0].DATA[0].FWYSR);
                    itemInner.rightList.push(item.DATA[1].DATA[0].FWYSR);
                }
                break;
            case 6:
                if (item.DATA.length == 1) {
                    if (item.DATA[0].CZMC == "良渚街道") {
                        itemInner.leftList.push(item.DATA[0].DATA[0].QTSR);
                        itemInner.rightList.push(0);
                    } else {
                        itemInner.leftList.push(0);
                        itemInner.rightList.push(item.DATA[0].DATA[0].QTSR);
                    }
                } else {
                    itemInner.leftList.push(item.DATA[0].DATA[0].QTSR);
                    itemInner.rightList.push(item.DATA[1].DATA[0].QTSR);
                }
                break;
        }
    });
});
let maxNum = 0; //  计算出 每一行的 和的最大值
let sumList = [];
// 计算出 每一行的 和
listAry.map((item) => {
    item.DATA.map((itemInner) => {
        let obj = itemInner.DATA[0];
        let sum =
            obj.FDCY + obj.GYSR + obj.NLMY + obj.QTSR + obj.SYSR + obj.WHLYY;
        itemInner.total = sum;
        sumList.push(sum);
    });
});
maxNum = Math.max(...sumList) + 200;
let bgLeft = [{
    name: "进度条背景",
    type: "bar",
    stack: "1",
    data: [],
    barWidth: 25,
    barGap: "-100%",
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
    barGap: "-100%",
    itemStyle: {
        color: "#0b2940",
    },
}, ];
// 将每一行的放到数组
let totalList = [];
yAxisData.map((item) => {
    let obj = {
        leftTotal: 0,
        rightTotal: 0,
    };
    totalList.push(obj);
});
listAry.map((item, index) => {
    if (item.DATA.length == 1) {
        if (item.DATA[0].CZMC == "左半部分") {
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
});

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

seriesData = [
    ...seriesDataLeft,
    ...bgLeft,
    ...seriesDataRight,
    ...bgRight,
];
let textColor = "#fff";
let lineColor = "rgba(255,255,255,0.2)";

var option = {
    baseOption: {
        backgroundColor:"#999",
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
                let str = `${params[0].name}<br/>`;
                params.map((item, index) => {
                    if (item.seriesName != "进度条背景") {
                        str += `${item.marker}${item.seriesName}${item.value}<br/>`;
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
            right: "5%",
            itemWidth: 80,
            itemHeight: 5,
            itemGap: 30,
            icon: "horizontal",
            textStyle: {
                color: "#ffffff",
                fontSize: 16,
            },
            data: legend,
        },
        grid: [{
                show: false,
                left: "5%",
                top: "20%",
                bottom: "8%",
                containLabel: true,
                width: "37%",
            },
            {
                show: false,
                left: "51%",
                top: "20%",
                bottom: "8%",
                width: "0%",
            },
            {
                show: false,
                right: "2%",
                top: "20%",
                bottom: "8%",
                containLabel: true,
                width: "37%",
            },
        ],
        xAxis: [{
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
                gridIndex: 1,
                show: false,
            },
            {
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
        yAxis: [{
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
                },
                data: yAxisData,
            },
            {
                gridIndex: 1,
                type: "category",
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
                gridIndex: 2,
                type: "category",
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
                },
                data: yAxisData,
            },
        ],
        series: [],
    },
    options: [{
        series: seriesData,
    }, ],
};