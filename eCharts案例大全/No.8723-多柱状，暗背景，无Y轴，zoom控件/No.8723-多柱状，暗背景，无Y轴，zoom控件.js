var data = [
    ['/', '补缴逾期', '未按月发放工资', '未开设专户', '未缴纳保证金'],
    ["凤阳", 1, 3, 4, 2],
    ["全椒", 1, 3, 4, 2],
    ["来安", 1, 3, 4, 2],
    ["南谯", 1, 3, 499, 2],
    ["定远", 199, 399, 499, 299],
    ["明光", 1, 3, 499, 2],
    ["天长", 1, 3, 4, 2],
    ["琅琊", 1, 3, 4, 2],
]
var series = [];
var le = data[0].length - 1;
while (le--) {
    series.push({
        type: "bar",
        barWidth: "15%",
        label: {
            show: true,
            position: "top",
            color: "#fff"
        },
    })

}
var option = {
    legend: {
        textStyle: {
            color: "#fff"
        }
    },
    backgroundColor: "#1D4160",
    color: ["#26BBFF", '#53FFAC', '#3F7EEF', '#AA72FF'],
    tooltip: {
        trigger: 'axis',
        axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
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
        data: data.xAxis
    }],
    yAxis: [{
        show: false
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