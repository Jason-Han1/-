var xData = [
    "学校食堂",
    "重大活动保障单位",
    "社会餐饮",
    "食品安全示范街",
    "中央厨房",
    "互联网餐饮",
];
var yData_all = [
    1036,
    3693,
    2962,
    3810,
    2519,
    1915
];
var yData_online = [
    709,
    1917,
    2455,
    2610,
    1719,
    1433
];
var yData_offline = [
    327,
    1776,
    507,
    1200,
    800,
    482
];


var barMaxWidth = 16;
var normalColor = "#ffffff";
var fontSize = 12;

option = {
    backgroundColor: "#344b58",
    "tooltip": {
        "trigger": "axis",
        "axisPointer": {
            "type": "shadow",
            textStyle: {
                color: "#fff"
            }

        },
        confine: true,
        textStyle: {
            fontSize: fontSize,
        },
        extraCssText: "width:120px;height:120px",
    },
    //标题
    title: {
        show: true, //显示策略，默认值true,可选为：true（显示） | false（隐藏）
        text: "设备状态", //主标题文本，'\n'指定换行
        x: "center", //水平安放位置，默认为'left'，可选为：'center' | 'left' | 'right' | {number}（x坐标，单位px）
        y: "5%", //垂直安放位置，默认为top，可选为：'top' | 'bottom' | 'center' | {number}（y坐标，单位px）
        textAlign: null, //水平对齐方式，默认根据x设置自动调整，可选为： left' | 'right' | 'center
        textStyle: {
            fontSize: 18,
            color: "#ffffff",
        },
    },
    legend: {
        type: "scroll",
        right: "10%",
        top: "15%",
        textStyle: {
            color: "#ffffff",
            fontSize: 10,
        },
        // data: datas.legendData,
    },
    grid: [{
        left: "6%",
        bottom: "8%",
        top: "25%",
        right: "6%",
        containLabel: true,
    }, ],
    xAxis: {
        type: "category",
        axisLabel: {
            show: true,
            textStyle: {
                color: normalColor, //更改坐标轴文字颜色
                fontSize: fontSize, //更改坐标轴文字大小
            },
        },
        axisLine: {
            lineStyle: {
                color: normalColor, //更改坐标轴颜色
            },
        },
        data: xData,
    },
    yAxis: [{
        type: "value",
        name: "",
        nameTextStyle: {
            color: normalColor,
        },
        position: "left",
        //设置坐标轴字体颜色和宽度
        axisLine: {
            show: false,
            lineStyle: {
                color: normalColor,
                width: 1,
            },
        },
        //设置网格线颜色
        splitLine: {
            show: true,
            lineStyle: {
                color: ["#3D5CBB"],
                width: 1,
                type: "solid",
            },
        },
    }, ],
    "series": [{
            "name": "在线",
            "type": "bar",
            "stack": "总量",
            "barMaxWidth": barMaxWidth,
            "barGap": "10%",
            "itemStyle": {
                "normal": {
                    "color": {
                        type: 'linear',
                        x: 0,
                        y: 0,
                        x2: 0,
                        y2: 1,
                        colorStops: [{
                            offset: 0,
                            color: '#0BF4E4' // 0% 处的颜色
                        }, {
                            offset: 1,
                            color: '#0081FD' // 100% 处的颜色
                        }],
                        global: false // 缺省为 false
                    }
                }
            },
            "data": yData_online,
        },

        {
            "name": "不在线",
            "type": "bar",
            "stack": "总量",
            "itemStyle": {
                "normal": {
                    "color": {
                        type: 'linear',
                        x: 0,
                        y: 0,
                        x2: 0,
                        y2: 1,
                        colorStops: [{
                            offset: 0,
                            color: '#FDF302' // 0% 处的颜色
                        }, {
                            offset: 1,
                            color: '#FDAB02' // 100% 处的颜色
                        }],
                        global: false // 缺省为 false
                    },
                    "barBorderRadius": 0
                }
            },
            "data": yData_offline
        }, {
            "name": "总数",
            "type": "line",
            symbolSize: 10,
            symbol: 'circle',
            "itemStyle": {
                "normal": {
                    "color": '#70F75F',
                    "barBorderRadius": 0,
                }
            },
            lineStyle: {
                normal: {
                    width: 4,
                    color: {
                        type: 'linear',
                        x: 0,
                        y: 0,
                        x2: 0,
                        y2: 1,
                        colorStops: [{
                            offset: 0,
                            color: '#70F75F' // 0% 处的颜色
                        }, {
                            offset: 1,
                            color: '#70F75F' // 100% 处的颜色
                        }],
                        global: false // 缺省为 false
                    }
                }
            },
            "data": yData_all
        },
    ]
}