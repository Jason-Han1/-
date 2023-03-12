//图形路径
const symbols = [
    "path://M66.1,35.7L100,49.8v128.7l-33.9-12.7L66.1,35.7z", //左边
    "path://M133.9,35.7L100,49.8v128.7l33.9-12.7V35.7z", //右边
    "path://M66.1,35.7L100,21.5l33.9,14.1L100,49.8L66.1,35.7z", //菱形
]
//源数据
const data = [{
    label: "治安",
    value: 500
}, {
    label: "交通",
    value: 400
}, {
    label: "人脸",
    value: 500
}]
//数据最大值（需要结合源数据取最大值过程不在此编写，可使用lodash）
const maxData = 1000;
//横坐标数值
const xAxisData = data.map((e) => {
    return e.label
})
//图形颜色
const colorList = ["#5f55ed59", "#f8954359", "#47d69d59"]
//图形边框颜色
const borderColorList = ["#5f55ed", "#f89543", "#47d69d"]
//图形顶部颜色
const colorTopList = ["#5571f659", "#f1d57759", "#3fdfc159"]
//图形顶部框颜色 
const colorBorderTopList = ["#5f55ed", "#fd7d3d", "#25cd75"]
//图形底部颜色
const colorBottomList = ["#437ffa", "#fee266", "#35c9c7"]
//图形实体顶部颜色
const topColorList = ["#5571f6", "#f1d577", "#3fdfc1"]
//图形柱体颜色
const barColorList = ["#7148ea", "#fd7d3d", "#25cd75"]
//左右框数值
const leftAndRightData = []
//顶部框数值
const topBorderData = []
//底部框数值
const bottomBorderData = []
//顶部实体数值
const topData = []
//图形柱体数值
const barData = []
for (var i = 0; i < data.length; i++) {
    leftAndRightData.push({
        name: data[i].label,
        value: maxData,

        itemStyle: {
            color: colorList[i],
            borderColor: borderColorList[i]
        }
    })
    topBorderData.push({
        name: data[i].label,
        value: maxData,
        symbolPosition: "end",
        itemStyle: {
            color: colorTopList[i],
            borderColor: colorBorderTopList[i]
        }
    })
    bottomBorderData.push({
        name: data[i].label,
        value: maxData,
        itemStyle: {
            color: colorBottomList[i]
        }
    })
    topData.push({
        name: data[i].label,
        value: data[i].value,
        symbolPosition: "end",
        itemStyle: {
            color: topColorList[i]
        }
    })
    barData.push({
        name: data[i].label,
        value: data[i].value,
        label: {
            show: true,
            position: "bottom",
            distance: 60,
            color: barColorList[i],
            fontSize: 40
        },
        itemStyle: {
            color: new window.echarts.graphic.LinearGradient(
                0, 0, 0, 1,
                [{
                    offset: 0,
                    color: barColorList[i]
                }, {
                    offset: 1,
                    color: colorBottomList[i]
                }]
            )

        }
    })
}
//顶部框数值


option = {
    backgroundColor: "#020C33",
    xAxis: [{
        data: xAxisData,
        axisTick: {
            show: false
        },
        axisLine: {
            show: false
        },
        axisLabel: {
            show: true,
            margin: 30,
            fontSize: 20,
            color: "#707FB3"
        }
    }],
    yAxis: {
        splitLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLine: {
            show: false
        },
        axisLabel: {
            show: false
        }
    },
    grid: {
        show: false,
        height: 200
    },
    series: [{
            name: "左边",
            type: "pictorialBar",
            symbolSize: ["50%", "100%"],
            symbolOffset: [-70, 20],
            barWidth: 100,
            silent: true,
            z: 12,
            symbol: symbols[0],
            data: leftAndRightData
        },
        {
            name: "右边",
            type: "pictorialBar",
            symbolSize: ["50%", "100%"],
            symbolOffset: [-20, 20],
            barWidth: 100,
            silent: true,
            z: 12,
            symbol: symbols[1],
            data: leftAndRightData
        },
        // //菱形顶部框
        {
            name: "",
            type: "pictorialBar",
            symbolSize: [100, 40],
            symbolOffset: [0, 0],
            silent: true,
            symbol: symbols[2],
            data: topBorderData
        },

        // // //菱形底部实体
        {
            "name": "",
            "type": "pictorialBar",
            symbolSize: [101, 38],
            symbolOffset: [0, 20],
            silent: true,
            "z": 12,
            symbol: symbols[2],
            "data": bottomBorderData
        },
        // // //菱形顶部实体
        {
            "name": "",
            "type": "pictorialBar",
            symbolSize: [99, 45],
            symbolOffset: [0, -23],
            "z": 16,
            silent: true,
            symbol: symbols[2],
            "data": topData,
             animationDuration: 1000,
            animationDelay: function (idx) {
    // 越往后的数据延迟越大
    return idx * 500;
}
        },

        // // //柱形实体
        {
            "type": "bar",
            "silent": true,
            "barWidth": 100,
            "barGap": "-100%",
            z: 13,
            "data": barData,
            animationDuration: 1000,
            animationDelay: function (idx) {
    // 越往后的数据延迟越大
    return idx * 500;
}
        }


    ]
}