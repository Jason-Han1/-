option = {
    tooltip: {
        trigger: "axis"
    },
    color: ["#50b6bb", "#f2a6a6", "#b18ea6"],
    legend: {
        data: ["高危", "中危", "其他"],
        itemGap: 10,
        itemWidth: 15,
        itemHeight: 12
    },
    xAxis: [{
        name: "",
        type: "category",
        axisTick: {
            show: false,
            alignWithLabel: false
        },
        axisLabel: {
            textStyle: {
              color: '#273553'
            }
        },
        data: ["01", "02", "03", "04", "05", "06"]
    }],
    yAxis: [{
        type: "value",
        name: "数量",
        minInterval: 1,
        axisLabel: {
            textStyle: {
              color: '#273553'
            }
        },
        splitLine: {
            show: false // 分割线
        }
    }],
    series: [{
        data: [5, 3, 5, 7, 5, 6],
        name: "高危",
        stack: "one",
        type: "bar",
        barWidth: 35,
        label: {
            show: true
        }
    }, {
        data: [2, 5, 7, 5, 6, 5],
        name: "中危",
        stack: "one",
        type: "bar",
        barWidth: 35,
        label: {
            show: true
        }
    }, {
        data: [5, 7, 5, 6, 5, 2],
        name: "其他",
        stack: "one",
        type: "bar",
        barWidth: 35,
        label: {
            show: true
        }
    }]
}