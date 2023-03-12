option = {
    backgroundColor: "#fff",
    color: ["#37A2DA"],


    tooltip: {
        trigger: 'axis'
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
    },
    yAxis: {
        x: 'center',
        type: 'value',
    },
    series: [{
        name: '销量',
        type: 'line',
        data: [20, 80, 51, 90, 80, 30, 20]
    }]
};