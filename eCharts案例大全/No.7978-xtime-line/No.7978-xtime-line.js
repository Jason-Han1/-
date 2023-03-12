option = {
    title: {
        text: '折线图堆叠'
    },
    tooltip: {
        trigger: 'axis',
        //   formatter: "{a} : {c}",
    },
    legend: {
        data: ['邮件营销', '联盟广告', '视频广告', '直接访问', '搜索引擎']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    toolbox: {
        feature: {
            saveAsImage: {}
        }
    },
    xAxis: {
        type: 'time',
        boundaryGap: false,
        // data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
    },
    yAxis: {
        type: 'value'
    },
    series: [
        {
            name: '邮件营销',
            type: 'line',
            stack: '总量',
            data: [
                ['2020-01-01 00:00:00', 120],
                ['2020-01-02 00:00:00', 20],
                ['2020-01-02 00:00:00', 180],

            ]
        },
        {
            name: '联盟广告',
            type: 'line',
            stack: '总量',
            data: [
                ['2020-01-01 00:00:00', 120],
                ['2020-01-02 00:00:00', 80],
                ['2020-01-02 00:00:00', 180],

            ]
        },
        
    ]
};