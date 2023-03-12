option = {
    tooltip : {
        formatter: "{a} <br/>{b} : {c}%"
    },
    series: [
        {
            name: '数据指标',
            type: 'gauge',
            axisLine: {
                lineStyle: {
                    color: [[0.4, 'red'],[0.8, 'yellow'],[1, 'green']]
                },
            },
            detail: {formatter:'{value}%'},
            data: [{value: 92, name: '健康率'}]
        }
    ]
};
