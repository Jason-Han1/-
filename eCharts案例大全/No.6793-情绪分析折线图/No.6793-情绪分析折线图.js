var firstLineData = [33, 45, 255, 21, 35, 24, 13];
var secondLineData = [252, 124, 123, 63, 16, 63, 145];
var thirdLineData = [14, 53, 111, 180, 24, 152, 231];
var fourthLineData = [45, 215, 25, 214, 90, 34, 53];
var seven_day_data = [];
var seven_day_date = new Date();

for (var i = 0; i < 7; i++) {
    var month = seven_day_date.getMonth() + 1;
    var day = seven_day_date.getDate() - 1;
    seven_day_date = new Date(
        seven_day_date.getTime() - 1000 * 60 * 60 * 24
    );
    seven_day_data.push(addZero(month) + "." + addZero(day));
}
seven_day_data.reverse();

function addZero(data) {
    if (data < 10) {
        data = "0" + data;
    }
    return data;
}
option = {
    backgroundColor: '#031A32',
    tooltip: {
        show: true,
        trigger: "axis",
        axisPointer: {
            animation: false,
            type: "line",
            axis: "x",
        },
    },
    legend: {
        icon: 'roundRect',
        top: 30,
        right: '8%',
        itemHeight: 5,
        itemWidth: 20,
        textStyle: {
            color: "#00FCF9",
            fontSize: 14,
        },
    },
    grid: [{
        left: '8%',
        right: '8%',
        top: '12%',
        bottom: '12%',
    }, ],
    xAxis: [{
        type: "category",
        name: "",
        color: "#00FCF9",
        axisLabel: {
            show: true,
            color: "#73D6FF",
            fontSize: 14,
        },
        axisTick: {
            show: true,
            alignWithLabel: true,
        },
        axisLine: {
            show: true,
            lineStyle: {
                color: "#3d5269",
                width: 1,
            },
        },
        data: seven_day_data,
    }, ],
    yAxis: [{
        name: "次数",
        type: "value",
        gridIndex: 0,
        // scale: true,
        nameTextStyle: {
            color: "#73D6FF",
            fontSize: 14,
            align: "left",
            padding: [0, 0, 0, -20],
        },
        axisLabel: {
            showMinLabel: true,
            textStyle: {
                color: "#73D6FF",
                fontSize: 14,
            },
        },
        splitLine: {
            show: true,
        },
        axisLine: {
            show: true,
            lineStyle: {
                color: "#3d5269",
                width: 1,
            },
        },
        axisTick: {
            show: true,
        },
        minInterval: 1,
    }, ],
    series: [{
            name: "高兴",
            type: "line",
            smooth: true,
            lineStyle: {
                color: "#B708B7",
                width: 2,
            },
            itemStyle: {
                color: "#B708B7",
            },
            symbolSize: 0,
            data: firstLineData,
        },
        {
            name: "愤怒",
            type: "line",
            smooth: true,
            lineStyle: {
                color: "#4790A3",
                width: 2,
            },
            itemStyle: {
                color: "#4790A3",
            },
            symbolSize: 0,
            data: secondLineData,
        },
        {
            name: "悲伤",
            type: "line",
            smooth: true,
            lineStyle: {
                color: "#78A747",
                width: 2,
            },
            itemStyle: {
                color: "#78A747",
            },
            symbolSize: 0,
            data: thirdLineData,
        },
        {
            name: "平静",
            type: "line",
            smooth: true,
            lineStyle: {
                color: "#FFCCCC",
                width: 2,
            },
            itemStyle: {
                color: "#FFCCCC",
            },
            symbolSize: 0,
            data: fourthLineData,
        },
    ],
};