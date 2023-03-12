let zfgzqkData = [{
    name: "入监改造难度",
    value: 15,
    nameVal: '难'
}]
var value = zfgzqkData[0].value;
var nameVal = zfgzqkData[0].nameVal
var colorRegionRate = (value / 100).toFixed(2);
var {
    bgColor,
    level
} = detectionData(value, nameVal);
var colors = [
    [0.05, '#fa2000'],
    [0.10, '#fa3200'],
    [0.15, '#ef4412'],
    [0.20, '#fa5a00'],
    [0.25, '#f87203'],
    [0.30, '#fa9400'],
    [0.35, '#faa500'],
    [0.40, '#f8b203'],
    [0.45, '#fac100'],
    [0.50, '#e7b31b'],
    [0.55, '#f5d00f'],
    [0.60, '#d2c432'],
    [0.65, '#eee727'],
    [0.70, '#c8d246'],
    [0.75, '#d1e74f'],
    [0.80, '#c1e75f'],
    [0.85, '#bbe765'],
    [0.90, '#b6e768'],
    [0.95, '#b4e76b'],
    [1, '#b1e76d']
];
var colorList = [];
colors.forEach((item, key) => {
    if (colorRegionRate >= item[0]) {
        colorList.push(item);
    } else {
        colorList.push([item[0], "#fff"]);
    }
});
option = {
    backgroundColor: "#000",
    tooltip: {
        show: false,
        position: "inside",
        formatter: "小于20%有发展空间<br>20%~40%为健康<br>40%~60%为预警<br>大于60%为过度",
        textStyle: {
            fontSize: 10,
        },
    },
    series: [{
            name: "刻度",
            type: "gauge",
            center: ["40%", "68%"],
            radius: '70%',
            min: 0, //最小刻度
            max: 100, //最大刻度
            splitNumber: 8, //刻度数量
            startAngle: 180,
            endAngle: 0,
            axisLine: {
                show: true,
                lineStyle: {
                    width: 0,
                    shadowBlur: 1,
                    color: colorList,
                },
            }, //仪表盘轴线
            axisLabel: {
                show: false,
                color: "#0ab7ff",
                fontSize: 15,
                distance: -50,
                formatter: function(v) {
                    return v + "分";
                },
            }, //刻度标签。
            axisTick: {
                show: true,
                splitNumber: 5,
                lineStyle: {
                    color: 'auto',
                    width: 2,
                },
                length: -10,
            }, //刻度样式
            splitLine: {
                show: false,
                length: -0,
                lineStyle: {
                    color: "red",
                },
            }, //分隔线样式
            pointer: { //仪表盘指针
                show: false,
            },
            detail: {
                offsetCenter: [0, '-8%'], // x, y，单位px
                textStyle: { // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                    color: '#fff',
                    fontSize: 20,
                },
                // formatter: '{value}分'
                formatter: function(v) {
                    return v + "分";
                },
            },
            title: {
                show: false,
            },
            data: zfgzqkData
        },
        {
            name: "虚线",
            type: "gauge",
            center: ["40%", "68%"],
            radius: '63%',
            min: 0, //最小刻度
            max: 100, //最大刻度
            splitNumber: 8, //刻度数量
            startAngle: 180,
            endAngle: 0,
            axisLine: {
                show: true,
                lineStyle: {
                    width: 0,
                    shadowBlur: 1,
                    color: colors,
                },
            },
            //仪表盘轴线
            axisLabel: {
                show: false,
                color: "#0ab7ff",
                fontSize: 15,
                distance: -50,
                formatter: function(v) {
                    return v + "分";
                },
            },
            //刻度标签。
            axisTick: {
                show: true,
                splitNumber: 5,
                lineStyle: {
                    color: 'auto',
                    width: 2,
                },
                length: -1,
            }, //刻度样式
            splitLine: {
                show: false,
                length: -1,
                lineStyle: {
                    color: "#fff",
                },
            }, //分隔线样式
            pointer: { //仪表盘指针
                show: false,
            },
            detail: {
                show: false,
                offsetCenter: [0, '-8%'], // x, y，单位px
                textStyle: { // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                    color: '#fff',
                    fontSize: 20,
                },
                formatter: '{value}分'
            },
            title: {
                show: false,
            },
            data: zfgzqkData
        },
        {
            type: "gauge",
            radius: '60%',
            center: ["40%", "68%"],
            splitNumber: 0, //刻度数量
            startAngle: 180,
            endAngle: 0,
            axisLine: {
                show: true,
                lineStyle: {
                    width: 20,
                    color: [
                        [1, new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                                offset: 0,
                                color: "#fa1900"
                            },
                            {
                                offset: 0.5,
                                color: "#fac300"
                            },
                            {
                                offset: 1,
                                color: "#b3e76b"
                            }
                        ])]
                    ],
                },
            },
            //分隔线样式。
            splitLine: {
                show: false,
            },
            axisLabel: {
                show: false,
            },
            axisTick: {
                show: false,
            },
            pointer: {
                show: false,
                length: "80%",
                width: "20%",
            },
            title: {
                show: true,
                offsetCenter: ['180%', "-80%"], // x, y，单位px
                textStyle: {
                    color: "#fff",
                    fontSize: 14,
                },
            },
            //仪表盘详情，用于显示数据。
            detail: {
                show: true,
                offsetCenter: ['180%', "-30%"],
                color: "#ffffff",
                padding: [8, 10],
                backgroundColor: bgColor,
                borderRadius: 25,
                formatter: function(value) {
                    return level;
                },
                textStyle: {
                    fontSize: 12,
                },
            },
            data: zfgzqkData,
        },
    ],
};

function detectionData(value, nameVal) {
    if (value < 60) {
        bgColor = '#c42937'
    } else if (value >= 60 && value < 90) {
        bgColor = '#d1b42c';
    } else if (value >= 90) {
        bgColor = '#67af61';
    }
    var level = '改造难度：' + nameVal
    return {
        bgColor: bgColor,
        level: level
    }
}