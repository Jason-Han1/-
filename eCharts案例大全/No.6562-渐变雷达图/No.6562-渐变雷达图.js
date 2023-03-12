let list = [{
        "NAME": "本体保存状况",
        "YCSL": 1,
        "WJCYCSL": 1
    },
    {
        "NAME": "要素管理",
        "YCSL": 10,
        "WJCYCSL": 1
    },
    {
        "NAME": "环境",
        "YCSL": 0,
        "WJCYCSL": 0
    },
    {
        "NAME": "违建",
        "YCSL": 0,
        "WJCYCSL": 0
    },
    {
        "NAME": "其他",
        "YCSL": 0,
        "WJCYCSL": 0
    }
]

let colorList = ["rgba(204,152,204,0.6)", "rgba(128,254,254,0.6)"]

let errorData = []; //异常数量
let unSolvedErrorData = []; //未解除异常数量
let indicator = [];
let max = 0;
let maxAry = [];
list.map(item => {
    maxAry.push(item.YCSL);
    maxAry.push(item.WJCYCSL);
});
max = Math.max(...maxAry); //获取最大值

list.map(item => {
    errorData.push(item.YCSL);
    unSolvedErrorData.push(item.WJCYCSL);
    let obj = {
        name: item.NAME,
        max: max > 0 ? max : 1
    };
    indicator.push(obj);
});

let seriesData = [{
        value: errorData,
        name: "异常数量"
    },
    {
        value: unSolvedErrorData,
        name: "未解除异常数量"
    }
]

option = {
    backgroundColor: "#333",
    tooltip: {},
    grid: {
        left: 0,
        top: 0,
    },
    legend: {
        bottom: 0,
        itemWidth: 12,
        itemHeight: 12,
        data: [{
                name: "异常数量",
                textStyle: {
                    color: "rgb(204,152,204)",
                },
            },
            {
                name: "未解除异常数量",
                textStyle: {
                    color: "rgb(128,254,254)",
                },
            },
        ],
    },
    color: colorList,
    radar: {
        radius: "60%",
        splitNumber: 5,
        axisLine: {
            lineStyle: {
                color: "#fff",
                opacity: 0.2,
            },
        },
        splitLine: {
            lineStyle: {
                color: "#fff",
                opacity: 0.2,
            },
        },
        splitArea: {
            areaStyle: {
                color: "rgba(127,95,132,.3)",
                opacity: 1,
                shadowBlur: 45,
                shadowColor: "rgba(0,0,0,.5)",
                shadowOffsetX: 0,
                shadowOffsetY: 15,
            },
        },
        indicator: indicator,
        name: {
            textStyle: {
                color: "#679FC0"
            },
        },
    },
    series: [{
        name: "",
        type: "radar",
        symbolSize: 0,
        areaStyle: {
            normal: {
                shadowBlur: 13,
                shadowColor: "rgba(0,0,0,.2)",
                shadowOffsetX: 0,
                shadowOffsetY: 10,
                opacity: 1,
            },
        },
        data: seriesData,
    }, ],
}