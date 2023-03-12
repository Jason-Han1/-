var fontSize = 10;
var normalColor = "#ffffff";
var xData = ["广东", "重庆", "甘肃", "云南", "贵州", "湖北"];
var yData = [460, 350, 320, 240, 220, 200];

var option = {
    backgroundColor: "#2b3c7a",
    title: {
        show: true, //显示策略，默认值true,可选为：true（显示） | false（隐藏）
        text: "连续在线排位", //主标题文本，'\n'指定换行
        x: "center", //水平安放位置，默认为'left'，可选为：'center' | 'left' | 'right' | {number}（x坐标，单位px）
        y: "5%", //垂直安放位置，默认为top，可选为：'top' | 'bottom' | 'center' | {number}（y坐标，单位px）
        textAlign: null, //水平对齐方式，默认根据x设置自动调整，可选为： left' | 'right' | 'center
        textStyle: {
            fontSize: 18,
            color: "#ffffff",
        },
    },
    tooltip: {
        trigger: "axis",
        confine: true,
        textStyle: {
            fontSize: fontSize,
        },
        extraCssText: "width:120px;height:120px",
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
        data: xData,
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
    },
    yAxis: {
        name: "单位：个数",
        triggerEvent: true,
        splitLine: {
            show: false,
        },
        axisTick: {
            show: false,
        },
        axisLine: {
            show: true,
            lineStyle: {
                color: normalColor,
            },
        },
        axisLabel: {
            show: true,
            textStyle: {
                color: normalColor,
                fontSize: fontSize,
            },
        },
    },
    // color: ["#e54035"],
    series: [{
        name: "",
        barMinHeight: 10,
        type: "pictorialBar",
        barCategoryGap: "10%",
        // symbol: 'path://M0,10 L10,10 L5,0 L0,10 z',
        symbol: "path://M0,10 L10,10 C5.5,10 5.5,5 5,0 C4.5,5 4.5,10 0,10 z",
        itemStyle: {
            normal: {
                //barBorderRadius: 5,
                //渐变色
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: "#E6E70A",
                    },
                    {
                        offset: 0.5,
                        color: "#0081FD",
                    },
                    {
                        offset: 1,
                        color: "#0081FD",
                    },
                ]),
            },
        },
        label: {
            normal: {
                show: true,
                position: "top",
                textStyle: {
                    color: "#fff",
                    fontSize: fontSize + 2,
                },
            },
        },
        data: yData,
        z: 10,
    }, ],
};