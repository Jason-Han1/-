option = {
    backgroundColor: "#ffffff",
    color: ["#37A2DA", "#FF9F7F"],
    legend: {
        data: ['支出', '收入'],
        x:"43%",
    },
    grid: {
        containLabel: true
    },
    xAxis: [{
        type: 'value'
    }],
    yAxis: [{
        type: 'category',
        axisTick: {
            show: false
        },
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    }],
    series: [{
        name: '收入',
        type: 'bar',
        stack: '总量',
        label: {
            normal: {
                show: true,
                position: 'right'
            }
        },
        data: [320, 202, 241, 274, 290, 250, 380]
    }, {
        name: '支出',
        type: 'bar',
        stack: '总量',
        label: {
            normal: {
                show: true,
                position: 'left'
            }
        },
        data: [-120, -132, -101, -134, -290, -230, -310]
    }]
};