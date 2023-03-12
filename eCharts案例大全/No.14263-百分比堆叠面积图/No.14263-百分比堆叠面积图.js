option = {
    backgroundColor: "#fff",
    color: ["#37A2DA", "#32C5E9", "#67E0E3", "#9FE6B8", ],
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data: ['邮件', '联盟', '视频', '搜索']
    },
    grid: {
        containLabel: true
    },
    xAxis: [{
        type: 'category',
        boundaryGap: false,
        data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
    }],
    yAxis: [{
        type: 'value'
    }],
    series: [{
        name: '邮件',
        type: 'line',
        stack: '总量',
        areaStyle: {
            normal: {}
        },
        data: [100, 140, 100, 100, 130, 90, 110]
    }, {
        name: '联盟',
        type: 'line',
        stack: '总量',
        areaStyle: {
            normal: {}
        },
        data: [230, 300, 300, 140, 190, 180, 160]
    }, {
        name: '视频',
        type: 'line',
        stack: '总量',
        areaStyle: {
            normal: {}
        },
        data: [550, 430, 500, 530, 390, 500, 410]
    }, {
        name: '搜索',
        type: 'line',
        stack: '总量',
        areaStyle: {
            normal: {}
        },
        data: [620, 630, 600, 730, 790, 730, 820]
    }]
};