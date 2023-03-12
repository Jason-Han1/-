    option = {
    backgroundColor:'#002248',
    title: {
            textStyle: {
                        color: 'rgba(255, 255, 255, 0.8)'
            },
        text: '销售中心当月、全年累计统计',
        subtext: '单位：百万'
    },
    legend: {
            textStyle: {
                color: 'rgba(255, 255, 255, 0.8)'
            },
    },
    tooltip: {},
    dataset: {
        source: [
            ['product', '同比1', '预算', '实际'],
            ['当月', 13.3, 25.8, 33.7],
            ['全年累计', 83.1, 73.4, 55.1],
        ]
    },
    xAxis: {
                axisLine:{
            lineStyle: {
            color: 'rgba(255, 255, 255, 0.8)'
                    },
    },
    type: 'category'},
    yAxis: {
            axisLine:{
            lineStyle: {
            color: 'rgba(255, 255, 255, 0.8)'
            },
    },
    },
    // Declare several bar series, each will be mapped
    // to a column of dataset.source by default.
    series: [
        {type: 'bar'},
        {type: 'bar'},
        {type: 'bar'}
    ]
};

        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
