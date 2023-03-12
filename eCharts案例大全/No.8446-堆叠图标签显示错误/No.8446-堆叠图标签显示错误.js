option = {
    tooltip: {
        trigger: 'axis',
        axisPointer: {            // 坐标轴指示器，坐标轴触发有效
            type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    legend: {
        data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎', '百度', '谷歌', '必应', '其他']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: [
        {
            type: 'category',
            data: ['周一', '周二']
        }
    ],
    yAxis: [
        {
            type: 'value'
        }
    ],
    label: {
        show: true,
    },
    series: [
        {
            name: '邮件营销',
            type: 'bar',
            stack: '广告',
            data: [100, 132]
        },
        {
            name: '联盟广告',
            type: 'bar',
            stack: '广告',
            data: [22000, 182]
        },
        {
            name: '视频广告',
            type: 'bar',
            stack: '广告',
            data: [150, 232]
        },
    ]
};
