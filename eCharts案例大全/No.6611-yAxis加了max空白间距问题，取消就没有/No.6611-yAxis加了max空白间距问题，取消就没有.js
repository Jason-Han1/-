option = {
    title: {
        text: 'Awesome Chart'
    },
    grid: {
        left: "0%",
        right: "9%",
        bottom: "3%",
        top: "6%",
        containLabel: true
    },
    xAxis: {
        type: 'value',
        show: false
    },
    yAxis: [{
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
        splitNumber: 12,
        max: 21,
        inverse: true,
        axisTick: {
            show: false
        },
    }],
    series: [{
        type: 'bar',
        data: [0, 191, 234, 290, 330, 310],
        barMaxWidth: 6,
        barMinHeight: 5,
    }]
};