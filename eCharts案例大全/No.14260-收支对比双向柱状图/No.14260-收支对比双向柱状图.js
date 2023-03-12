option = {
    backgroundColor: "#ffffff",
    color: ["#37A2DA", "#FF9F7F"],
    legend: {
        orient: 'vertical',
        x: '90%',
        top: '48%',
        data: ['收入', '支出']

    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    grid: {
        right: '14%',
        containLabel: true
    },
    xAxis: [{
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        axisTick: {
            alignWithLabel: true
        }
    }],
    yAxis: [{
        type: 'value'
    }],
    series: [{
        name: '收入',
        type: 'bar',
        stack: '总量',
        barWidth: '70%',
        label: {
            normal: {
                show: true,
                position: 'top'
            }
        },
        data: [320, 100, 200, 270, 320, 250, 360]
    }, {
        name: '支出',
        type: 'bar',
        stack: '总量',
        barWidth: '70%',
        label: {
            normal: {
                show: true,
                position: 'bottom'
            }
        },
        data: [-120, -132, -100, -130, -300, -230, -360]
    }]
};