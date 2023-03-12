var historyData = [{
    name: "1班",
    // data: {
    //     years: 40.82,
    //     month: 25.33,
    //     weeks: 40.82
    // }
    data: [40.82, 25.33, 40.82]
}, {
    name: "2班",
    data: {
        years: 37.16,
        month: 39.25,
        weeks: 45
    }
}, {
    name: "3班",
    data: [44.82, 40.48, 35]
    // data: {
    //     years: 44.82,
    //     month: 40.48,
    //     weeks: 35
    // }
}, {
    name: "4班",
    // data: {
    //     years: 43.73,
    //     month: 42.80,
    //     weeks: 50
    // }
    data: [43.73, 42.80, 50]
}]
// {
//     years: [40.82, 37.16, 44.68, 43.73],
//     month: [40.82, 37.16, 44.68, 43.73],
//     weeks: [40.82, 37.16, 44.68, 43.73]
// }
var xData = [];
// var yearsData = [],
//     monthData = [],
//     weeksData = [];
historyData.map(function(a, b) {
    xData.push(a.name);
});
// console.log(yearsData, monthData, weeksData)
option = {
    backgroundColor: '#012A5C',
    tooltip: {
        trigger: 'axis'
    },
    color: ["#00cb00", "#FFFF00", "#52FFFF"],
    grid: {
        left: '3%',
        right: '3%',
        bottom: '0',
        containLabel: true
    },
    xAxis: {
        type: 'category',
        axisLine: {
            lineStyle: {
                color: '#1b4264' // 边线的颜色
            }
        },
        axisLabel: {
            textStyle: {
                fontSize: 14,
                color: '#fff'
            },
            margin: 10 // 文字与上侧的间距
        },
        axisTick: {
            show: false // 是否显示坐标轴刻度
        },
        boundaryGap: false,
        data: xData
    },
    yAxis: {
        type: 'value',
        splitNumber: 3,
        splitLine: {
            lineStyle: {
                color: "#1b4264"
            }
        },
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            formatter: "{value}",
            margin: 10, // 间距
            textStyle: {
                fontSize: 12,
                color: "#fff",
            }
        }
    },
    series: [{
            name: '年',
            type: 'line',
            symbol: "none", // 去除小圆点
            data: [40.82, 37.16, 44.68, 43.73]
        },
        {
            name: '月',
            type: 'line',
            symbol: "none",
            data: [25.33, 39.25, 40.48, 42.80]
        },
        {
            name: '周',
            type: 'line',
            symbol: "none",
            data: [20, 45, 35, 50]
        }
    ]
};