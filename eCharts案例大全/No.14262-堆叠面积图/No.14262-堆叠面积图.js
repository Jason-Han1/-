option = {
    backgroundColor: "#fff",
    color: ["#37A2DA", "#32C5E9", "#67E0E3", "#9FE6B8", ],

    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data: ['邮件', '联盟', '视频',  '搜索']
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
        data: [120, 132, 201, 234, 90, 230, 210]
    }, {
        name: '联盟',
        type: 'line',
        stack: '总量',
        areaStyle: {
            normal: {}
        },
        data: [220, 182, 291, 364, 440, 330, 410]
    }, {
        name: '视频',
        type: 'line',
        stack: '总量',
        areaStyle: {
            normal: {}
        },
        data: [550, 332, 501, 554, 490, 730, 610]
    }, {
        name: '搜索',
        type: 'line',
        stack: '总量',
        areaStyle: {
            normal: {}
        },
        data: [620, 732, 901, 734, 1290, 1330, 1320]
    }]
};