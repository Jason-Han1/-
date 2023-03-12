let list = [{
        "BHLX": "0",
        "BHLX_DESC": "沉降",
        "CHILDREN": [{
                "ZT": "0",
                "ZTMC": "可控",
                "COUNT": 0
            },
            {
                "ZT": "1",
                "ZTMC": "轻微",
                "COUNT": 0
            },
            {
                "ZT": "2",
                "ZTMC": "严重",
                "COUNT": 1
            },
            {
                "ZT": "3",
                "ZTMC": "非常严重",
                "COUNT": 0
            }
        ]
    },
    {
        "BHLX": "01",
        "BHLX_DESC": "坍塌",
        "CHILDREN": [{
                "ZT": "0",
                "ZTMC": "可控",
                "COUNT": 1
            },
            {
                "ZT": "1",
                "ZTMC": "轻微",
                "COUNT": 1
            },
            {
                "ZT": "2",
                "ZTMC": "严重",
                "COUNT": 0
            },
            {
                "ZT": "3",
                "ZTMC": "非常严重",
                "COUNT": 0
            }
        ]
    },
    {
        "BHLX": "61",
        "BHLX_DESC": "倾斜",
        "CHILDREN": [{
                "ZT": "0",
                "ZTMC": "可控",
                "COUNT": 1
            },
            {
                "ZT": "1",
                "ZTMC": "轻微",
                "COUNT": 0
            },
            {
                "ZT": "2",
                "ZTMC": "严重",
                "COUNT": 0
            },
            {
                "ZT": "3",
                "ZTMC": "非常严重",
                "COUNT": 1
            }
        ]
    }
]
let colorArr = ["#00bd8d", "#ffff00", "#ffb508", "#ff4c4c"];
let xAxisData = [];
let legendData = ["可控", "轻微", "严重", "非常严重"];
let ary = [{
        name: "可控",
        data: []
    },
    {
        name: "轻微",
        data: []
    },
    {
        name: "严重",
        data: []
    },
    {
        name: "非常严重",
        data: []
    }
];
list.map(item => {
    xAxisData.push(item.BHLX_DESC);
    ary[0].data.push(item.CHILDREN[0].COUNT);
    ary[1].data.push(item.CHILDREN[1].COUNT);
    ary[2].data.push(item.CHILDREN[2].COUNT);
    ary[3].data.push(item.CHILDREN[3].COUNT);
});


let seriesData = getSeries(legendData, ary, colorArr);

function getSeries(legendData, data, colorArr) {
    let series = [];
    legendData.forEach((item, index) => {
        series.push({
            name: item,
            type: "bar",
            stack: "jcbh",
            barWidth: "20%",
            itemStyle: {
                normal: {
                    color: colorArr[index]
                }
            },
            data: data[index].data
        });
    });
    return series;
}

option = {
    backgroundColor:"#333",
    tooltip: {
        trigger: "axis",
        axisPointer: {
            type: "shadow",
        },
        textStyle: {
            align: "left",
        },
    },
    legend: {
        data: legendData,
        icon: "circle",
        // rect
        itemWidth: 10,
        itemHeight: 10,
        top: 0,
        right: 70,
        textStyle: {
            color: "#999",
        },
    },
    grid: {
        left: "20px",
        right: "70px",
        top: "50px",
        bottom: "10px",
        containLabel: true,
    },
    xAxis: {
        type: "category",
        data: xAxisData,
        name: "病害类型",
        nameTextStyle: {
            color: "#4F81F1",
            verticalAlign: "top",
        },
        axisLine: {
            lineStyle: {
                color: "#4F81F1",
            },
        },
        axisTick: {
            alignWithLabel: true,
            lineStyle: {
                color: "#4F81F1",
            },
        },
        axisLabel: {
            color: "#4F81F1",
        },
    },
    yAxis: {
        minInterval: 1,
        type: "value",
        name: "条",
        // nameRotate: 90,
        // nameLocation: "center",
        // nameGap: 40,
        nameTextStyle: {
            color: "#999",
        },
        axisLine: {
            lineStyle: {
                color: "#4F81F1",
            },
        },
        axisTick: {
            alignWithLabel: true,
            lineStyle: {
                color: "#4F81F1",
            },
        },
        axisLabel: {
            color: "#4F81F1",
        },
        splitLine: {
            lineStyle: {
                color: "#4F81F1",
                type: "dotted",
            },
        },
    },
    series: seriesData
}