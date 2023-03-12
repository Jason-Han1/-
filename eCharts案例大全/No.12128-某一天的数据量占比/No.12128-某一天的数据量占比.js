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
            name: '2019-02-12 任务分析',
            type: 'gauge',
            detail: {formatter:'{value}%'},
            data: [{value: 87.5, name: '分析成功率'}]
        }
    ]
};
myChart.setOption(option, true);