option = {
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: 'shadow', // 默认为直线，可选为：'line' | 'shadow'
        },
    },
    legend: {
        data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎'],
    },
    xAxis: [
        {
            type: 'category',
            data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
        },
    ],
    yAxis: [
        {
            type: 'value',
        },
    ],
    series: [
        {
            name: '直接访问',
            type: 'bar',
            stack: '总量',
            label: {
                show: false,
                // position: 'insideRight'
            },
            data: [320, 302, 301, 334, 390, 330, 320],
        },
        {
            name: '邮件营销',
            type: 'bar',
            stack: '总量',
            label: {
                show: false,
                // position: 'insideRight'
            },
            data: [120, 132, 101, 134, 90, 230, 210],
        },
    ],
};
