option = {
    backgroundColor: "#a73e5c",
    color: ['#ffd285', '#ff733f', '#ec4863'],
    title: {
        text: '本周空气质量指数',
        x: '5%',
        top: '3%',
        textStyle: {
            color: '#ffd285'
        }
    },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        x: 200,
        top: '3%',
        textStyle: {
            color: '#ffd285',
        },
        data: ['上海', '濮阳', '北京']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: {
        type: 'category',
        "axisLine": {
            lineStyle: {
                color: '#c0576d'
            }
        },
        axisLabel: {
            textStyle: {
                color: '#ffd285'
            }
        },
        boundaryGap: false,
        data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
    },
    yAxis: {
        "axisLine": {
            lineStyle: {
                color: '#c0576d'
            }
        },
        splitLine: {
            show: true,
            lineStyle: {
                color: '#c0576d'
            }
        },
        axisLabel: {
            textStyle: {
                color: '#ffd285'
            }
        },
        type: 'value'
    },
    series: [{
        name: '上海',
        type: 'line',

        data: [90, 50, 39, 50, 120, 82, 80]
    }, {
        name: '濮阳',
        type: 'line',

        data: [70, 162, 50, 87, 90, 147, 60]
    }, {
        name: '北京',
        type: 'line',

        data: [290, 335, 80, 132, 187, 330, 39]
    }]
};