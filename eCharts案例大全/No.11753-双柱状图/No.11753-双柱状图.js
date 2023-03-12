function randomNumArr(count, min, max) {
    var arr = [];
    for (var i = 0; i < count; i++) {
        arr.push(Math.round((Math.random() * (max - min)) + min))
    }
    return arr;
}
var shiji = {
    normal: {
        show: true,
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
            offset: 0,
            color: '#FFFF00'
        }, {
            offset: 1,
            color: '#00E6FF'
        }]),
        barBorderRadius: 50,
        borderWidth: 0
    }
};
var yusuan = {
    normal: {
        show: true,
        color: new echarts.graphic.LinearGradient(1, 0, 0, 0, [{
            offset: 0,
            color: '#00C6FF'
        }, {
            offset: 1,
            color: '#0072FF'
        }]),
        barBorderRadius: 50,
        borderWidth: 0,
    }
};
option = {
    tooltip: {
        trigger: 'axis',
        axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    legend: {
        data: ["实际", "预算"]
    },
    grid: {
        left: '3%',
        right: '5%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: [{
        data: ["1月", "2月", "3月", "4月", "5月","6月", "7月", "8月", "9月", "10月","11月", "12月"],
        splitLine: {
            show: false
        },
        axisLabel: {
            interval: 0,
            rotate: 25
        }
    }],
    yAxis: [{
        type: 'value',
        name: '',
        splitLine: {
            lineStyle: {
                type: 'dashed'
            }
        }
    }],
    series: [{
        type: 'bar',
        barWidth: "20%",
        name: '实际',
        itemStyle: shiji,
        data: [28,30,66,86,67,40,19,20,66,86,167,140]
    }, {
        type: 'bar',
        barWidth: "20%",
        name: '预算',
        itemStyle: yusuan,
        data: [32,40,46,80,67,20,17,20,46,120,67,120]
    }]
};