var data = [
    ['/', '市场', '政府'],
    ["凤阳", 3, 3],
    ["全椒", 1, 3],
    ["来安", 2, 1],
    ["南谯", 3, 2],
    ["定远", 2, 1],
    ["明光", 1, 0.5],
    ["天长", 3, 3],
    ["琅琊", 1, 3],
]
var series = [];
var le = data[0].length - 1;
while (le--) {
    series.push({
        type: "line",
        smooth: true,
        symbol: "circle",
        symbolSize: 8, //标记的大小
    })

}
var option = {
    legend: {
        textStyle: {
            color: "#fff"
        }
    },
    backgroundColor: "#1D4160",
    color: ["#FED857", '#53FFAC'],
    tooltip: {
        trigger: 'axis',
        axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'line' // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    grid: {
        left: "10%",
        right: "10%",
        bottom: "40",
        containLabel: true
    },
    xAxis: [{
        type: 'category',
        axisLine: {
            lineStyle: {
                color: "#D0E4E3"
            }
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            show: true,
            textStyle: {
                color: "#D0E4E3" // X轴文字颜色
            }
        },
    }],
    yAxis: [{
        name:"项目总数(个)",
        nameTextStyle:{
            color:"#D0E4E3"
        },
        splitLine: {
            lineStyle:{
                color:"#2C577C"
            }
        },
        axisTick: {
            show: false
        },
        axisLine: {
            show: false
        },
        axisLabel: {
            show: true,
            textStyle: {
                color: "#D0E4E3" // X轴文字颜色
            }
        },
    }],
    dataZoom: [{
        show: true,
        height: 14,
        xAxisIndex: [0],
        bottom: 15,
        start: 10,
        end: 60,
        handleIcon: "path://M306.1,413c0,2.2-1.8,4-4,4h-59.8c-2.2,0-4-1.8-4-4V200.8c0-2.2,1.8-4,4-4h59.8c2.2,0,4,1.8,4,4V413z",
        handleSize: "110%",
        handleStyle: {
            color: "#fff"
        },
        textStyle: {
            color: "#fff"
        },
        borderColor: "#376a96"
    }],
    dataset: {
        source: data
    },
    series: series
};