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
            detail: {formatter:'{value}%'},
            axisLine: {
                lineStyle: {
                    width: 25,
                    color: [
                        [0.5, new echarts.graphic.LinearGradient(
                            0, 0, 1, 0, [
                                {offset: 0, color: 'red'},
                                {offset: 1, color: 'orange'}
                            ]
                        )],
                        [1, new echarts.graphic.LinearGradient(
                            0, 0, 1, 0, [
                                {offset: 0, color: 'orange'},
                                {offset: 1, color: 'green'}
                            ]
                        )]
                    ]
                }
            },
            itemStyle: {
              color:'white',
              borderColor:'black',
              shadowBlur:2,
              opacity:1
            },
            data: [{value: 50, name: ''}]
        }
    ]
};

setInterval(function () {
    option.series[0].data[0].value = (Math.random() * 100).toFixed(2) - 0;
    myChart.setOption(option, true);
},2000);
