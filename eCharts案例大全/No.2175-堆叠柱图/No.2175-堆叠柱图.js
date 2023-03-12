option = {
    //color: ["#70DDFF", "#FF9F6A", "#20D469", "#D083FF", "#FF8282", "#769CFF", "#FFCF55"],
    color: ["#37A1DA", "#31C5E9", "#67E0E3", "#9FE7B8", "#FEDB5B", "#FF9F7F", "#FB7293"],
    title: {
        text: "近24小时访问时长",
        textStyle: { color: "#000000", fontSize: 20, fontWeight: "normal" },
        x: "center",
        top: "2%"
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: { type: 'shadow' }
    },
    legend: {
        // width: "60%",
        top: "10%",
    },
    grid: {
        top: "24%",
        bottom: "8%",
        left: "8%",
        right: "8%"
    },
    xAxis: {
        type: 'category',
        boundaryGap: true,
        axisLine: {
            lineStyle: { color: '#C4C4C4' }
        },
        axisLabel: {
            textStyle: { color: '#333333', fontSize: 13 }
        },
        data: ['00:00', '01:00', '02:00', '03:00', '04:00', '05:00', '06:00', '07:00', '08:00', '09:00']
    },
    yAxis: {
        name: "分钟",
        nameTextStyle: { color: "#333333", fontSize: 13 },
        type: 'value',
        splitLine: {
            lineStyle: { color: "#C4C4C4", type: "dashed" }
        },
        axisLine: { show: false },
        axisTick: { show: false },
        axisLabel: {
            textStyle: { color: '#333333', fontSize: 13 }
        }
    },
    series: [{
        name: "page1",
        type: 'bar',
        stack: 'all',
        barWidth: "40%",
        data: [5, 3, 8, 9, 3, 7, 7, 1, 3, 2]
    }, {
        name: "page2",
        type: 'bar',
        stack: 'all',
        barWidth: "40%",
        data: [3, 4, 5, 2, 1, 10, 6, 1, 1, 1]
    }, {
        name: "page3",
        type: 'bar',
        stack: 'all',
        barWidth: "40%",
        data: [1, 3, 2, 4, 4, 2, 10, 9, 1, 6]
    }, {
        name: "page4",
        type: 'bar',
        stack: 'all',
        barWidth: "40%",
        data: [1, 10, 9, 8, 6, 9, 3, 2, 2, 7]
    }, {
        name: "page5",
        type: 'bar',
        stack: 'all',
        barWidth: "40%",
        data: [8, 5, 10, 2, 2, 4, 6, 7, 9, 2]
    }, {
        name: "page6",
        type: 'bar',
        stack: 'all',
        barWidth: "40%",
        data: [9, 10, 7, 5, 8, 1, 8, 1, 6, 7]
    }, {
        name: "page7",
        type: 'bar',
        stack: 'all',
        barWidth: "40%",
        data: [10, 5, 5, 7, 6, 2, 4, 2, 6, 6]
    }]
};