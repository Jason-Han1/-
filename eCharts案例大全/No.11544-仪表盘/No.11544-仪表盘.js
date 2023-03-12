option = {
    tooltip : {
        formatter: "{a} <br/>{b} : {c}%"
    },
    toolbox: {
        feature: {
            restore: {},
            saveAsImage: {}
        }
    },
    series: [
        {
            name: '业务指标',
            type: 'gauge',
            splitNumber:1,
            detail: {formatter:'{value}%'},
            data: [{value: 50, name: '完成率'}],
            axisLine: {
                lineStyle: {
                    width: 30,
                    opacity:0
                }
            },
            splitLine: {
                show: false
            },
            axisTick: {
                length: 30,
                splitNumber: 100,
                lineStyle: {
                    width: 3,
                    // 给点颜色
                    color: '#555'
                }
            },
        }
    ]
};

// setInterval(function () {
    option.series[0].data[0].value = (Math.random() * 100).toFixed(2) - 0;
    myChart.setOption(option, true);
// },2000);
