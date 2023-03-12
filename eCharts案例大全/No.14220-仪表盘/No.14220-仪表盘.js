option = {
    backgroundColor: "#ffffff",
    color: ["#37A2DA", "#32C5E9", "#67E0E3"],
    series: [{
        name: '业务指标',
        type: 'gauge',
        detail: {
            formatter: '{value}%'
        },
        axisLine: {
            show: true,
            lineStyle: {
                width: 30,
                shadowBlur: 0,
                color: [
                    [0.3, '#67e0e3'],
                    [0.7, '#37a2da'],
                    [1, '#fd666d']
                ]
            }
        },
        data: [{
            value: 50,
            name: '完成率',
        }]

    }]
};

app.timeTicket = setInterval(function() {
    option.series[0].data[0].value = (Math.random() * 100).toFixed(2) - 0;
    myChart.setOption(option, true);
}, 2000);