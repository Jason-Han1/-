option = {
    title: {
        text: "请求耗时分布",
        subtext: '50分位：1ms\n90分位：2ms\n95分位：3ms\n99分位：6ms',
        x: 'center',
        y: '25%',
        textStyle: {
            color: "black",
            fontSize: 20,
            fontWeight: 'normal'
        },
        subtextStyle: {
            color: "red",
            fontSize: 14,
            fontWeight: 'normal'
        }
    },
    series: [{
        name: '请求成功率',
        type: 'gauge',
        startAngle: 225,
        endAngle: -45,
        min: 90,
        max: 100,
        splitNumber: 10,
        axisTick: {
            show: true
        },
        splitLine: {
            show: true
        },
        axisLabel: {
            show: true
        },
        title: {
            show: true,
            offsetCenter: [0, '70%'],
            color: 'black',
            fontSize: 22,
            fontWeight: 'bold'
        },
        detail: {
            formatter: '{value}%\n请求成功率',
            fontSize: 20
        },
        axisLine: {
            lineStyle: {
                width: 25,
                color: [
                    [0.5, 'red'],
                    [0.9, 'orange'],
                    [1, 'green']
                ]
            }
        },
        itemStyle: {
            color: 'white',
            borderColor: 'black',
            shadowBlur: 2,
            opacity: 1
        },
        data: [{
            value: 100,
            name: 'redis-common'
        }]
    }]
};

setInterval(function() {
    option.series[0].data[0].value = (Math.random() * 100).toFixed(2) - 0;
    myChart.setOption(option, true);
}, 2000);