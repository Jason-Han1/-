option = {
    title: {
        text: "子弹图示例"
    },
    yAxis: [{
        type: 'category',
        data: ['利润'],
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        }
    }, {
        type: 'category',
        data: [''],
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        }
    }],
    xAxis: {
        type: 'value',
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        }
    },
    tooltip: {
        formatter: '{a}: {c}'
    },
    legend: {
        data: ['差', '良', '优', '利润'],
        selectedMode: false
    },
    grid: {
        containLabel: true,
        top: 50,
        left: 0,
        rigth: 0,
        bottom: 0
    },
    series: [{
        name: "差",
        data: [60],
        type: 'bar',
        yAxisIndex: 0,
        stack: "range",
        silent: true,
        barWidth: "90%",
        color: "#F5B4AE"
    }, {
        name: "良",
        data: [30],
        type: 'bar',
        yAxisIndex: 0,
        stack: "range",
        silent: true,
        barWidth: "90%",
        color: "#FADCA9"
    }, {
        name: "优",
        data: [10],
        type: 'bar',
        yAxisIndex: 0,
        stack: "range",
        silent: true,
        barWidth: "90%",
        color: "#BFE9C3"
    }, {
        name: "利润",
        data: [75],
        type: 'bar',
        yAxisIndex: 1,
        barWidth: "50%",
        color: "#434778",
        z: 3,
        markLine: {
            // silent:true,
            animation: false,
            symbol: "",
            label: {
                show: false
            },
            lineStyle: {
                normal: {
                    width: 8,
                    type: "solid",
                    color: "#000000"
                },
                emphasis: {
                    width: 8,
                    type: "solid",
                    color: "#000000"
                }
            },
            data: [{
                xAxis: 85,
                tooltip: {
                    formatter: '目标值: {c}'
                }
            }]
        }
    }]
};

setInterval(function () {
    option.series[3].data[0] = Math.random() * 100;
    myChart.setOption(option, true);
},2000);