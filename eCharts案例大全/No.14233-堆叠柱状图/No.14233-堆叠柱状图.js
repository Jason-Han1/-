option = {
    backgroundColor: "#ffffff",
    color: ["#37A2DA", "#FF9F7F"],
    legend: {
        data: ['女生', '男生']

    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    grid: {
        containLabel: true
    },
    xAxis: [{
        type: 'category',
        data: ['篮球', '排球', '足球', '羽毛球', '乒乓球', '跆拳道'],
        axisTick: {
            alignWithLabel: true
        }
    }],
    yAxis: [{
        type: 'value'
    }],
    series: [{
        name: '男生',
        type: 'bar',
        stack: '总量',
        barWidth: '70%',
        data: [14, 10, 16, 7, 15, 9]
    }, {
        name: '女生',
        type: 'bar',
        stack: '总量',
        barWidth: '70%',
        data: [12, 14, 6, 13, 4, 9]
    }]
};