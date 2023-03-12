var uploadedDataURL = "/asset/get/s/data-1632193925365-lVNappqkf.xlsx";

option = {
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: 'shadow', // 默认为直线，可选为：'line' | 'shadow'
        },
    },

    // legend.data项数量与dataset中数据列一致
    legend: {
        data: ['直接访问', '搜索引擎', '邮件营销', '联盟广告', '视频广告', '百度', '谷歌', '必应', '其他'],
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true,
    },
    xAxis: [
        {
            type: 'category',
        },
    ],
    yAxis: [
        {
            type: 'value',
        },
    ],

    // series中配置项的数量与dataset中数据列一致
    series: [
        {
            type: 'line',
        },
        {
            type: 'line',
        },
        {
            type: 'bar',
            stack: '广告',
        },
        {
            type: 'bar',
            stack: '广告',
        },
        {
            type: 'bar',
            stack: '广告',
        },
        {
            type: 'bar',
            stack: '搜索引擎',
        },
        {
            type: 'bar',
            stack: '搜索引擎',
        },
        {
            type: 'bar',
            stack: '搜索引擎',
        },
        {
            type: 'bar',
            stack: '搜索引擎',
        },
    ],

    // 列为横轴
    dataset: {
        source: [
            ['ttt', '直接访问', '搜索引擎', '邮件营销', '联盟广告', '视频广告', '百度', '谷歌', '必应', '其他'],
            ['周一', 100, 200, 30, 40, 50, 60, 70, 80, 90],
            ['周二', 200, 300, 40, 50, 60, 70, 80, 90, 10],
            ['周三', 300, 400, 50, 60, 70, 80, 90, 10, 20],
        ],
    },
};
