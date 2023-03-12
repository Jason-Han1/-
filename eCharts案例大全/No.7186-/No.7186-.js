var seven_day_date = new Date();
var seven_day_data = [];
for (var i = 0; i < 7; i++) {
    var month = seven_day_date.getMonth() + 1;
    var day = seven_day_date.getDate();
    seven_day_date = new Date(
        seven_day_date.getTime() - 1000 * 60 * 60 * 24
    );
    seven_day_data.push(addZero(month) + "." + addZero(day));
}
seven_day_data.reverse();
// 补零
function addZero(data) {
    if (data < 10) {
        data = "0" + data;
    }
    return data;
}
var XData = seven_day_data;
var YData = [50, 23, 65, 36, 85, 43, 60];
option = {
    backgroundColor: "#031A32",
    tooltip: {},
    grid: {
        left: 80,
        top: 120,
        right: 80,
        bottom: 120
    },
    tooltip: {
        trigger: "axis",
        axisPointer: {
            type: "shadow"
        }
    },
    xAxis: [{
        type: "category",
        axisLine: {
            //坐标轴轴线相关设置。数学上的x轴
            show: true,
            lineStyle: {
                color: "#233e64"
            }
        },
        axisLabel: {
            //坐标轴刻度标签的相关设置
            textStyle: {
                fontSize: 14, // 让字体变小
                color: "#50A2C1"
            }
        },
        axisTick: {
            show: true,
            alignWithLabel: true
        },
        data: XData
    }],
    yAxis: [{
        type: "value",
        name: "体重/kg",
        nameTextStyle: {
            color: "#50A2C1",
            fontSize: 14,
            align: "left",
            padding: [0, 0, 5, 0]
        },
        splitLine: {
            show: true,
            //  改变轴线颜色
            lineStyle: {
                // 使用深浅的间隔色
                color: ["#3d5269"]
            }
        },
        axisLine: {
            show: false
        },
        axisLabel: {
            textStyle: {
                fontSize: 14, // 让字体变小
                color: "#50A2C1"
            }
        }
    }],
    series: [{
        name: "体重/kg",
        type: "line",
        smooth: true, //是否平滑曲线显示
        symbolSize: 0,
        lineStyle: {
            color: "#F93D7E",
            width: 4
        },
        itemStyle: {
            //折线拐点标志的样式
            color: "#F93D7E"
        },
        data: YData
    }]
}