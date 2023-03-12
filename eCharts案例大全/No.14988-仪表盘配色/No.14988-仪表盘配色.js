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
        	show: true,
            lineStyle: {
                width: 30,
                shadowBlur: 0,
                color: [[0.3, '#6ced91'],[0.7, '#06a8fd'],[1, '#fe6b7d']]
            }
        },
            data: [{value: 50, name: '完成率'}]
        }
    ]
};

setInterval(function () {
    option.series[0].data[0].value = (Math.random() * 100).toFixed(2) - 0;
    myChart.setOption(option, true);
},2000);
