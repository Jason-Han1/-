option = {
    title: {
        text: '全国新闻记者各分类人数',
        subtext: '数据来源：中国记协'
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    legend: {
        data: ['2017年']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: {
        type: 'value',
        name: '人',
    },
    yAxis: {
        type: 'category',
        data: ['新闻网站记者','电台、电视台和新闻电影制片厂记者','通讯社记者','期刊记者','报纸记者','总记者数']
    },
    series: [
        {
            name: '2017年',
            type: 'bar',
            data: [1406, 136224, 2849, 6324, 84761, 231564]
        },
    ]
};
