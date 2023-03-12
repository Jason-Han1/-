option = {
    backgroundColor: "#fff",
    color: ["#37A2DA", "#32C5E9", "#67E0E3", "#9FE6B8", "#FFDB5C", "#ff9f7f", "#fb7293", "#E062AE", "#E690D1", "#e7bcf3", "#9d96f5", "#8378EA", "#96BFFF"],
    tooltip: {
        trigger: 'axis',
    },
    legend: {
        x: 'center',
        data: ['邮件', '联盟', '视频', '直接', '线下', '媒体', '校园', '捆绑']
    },
    grid: {
        y: "10%",
        containLabel: true
    },

    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
    },
    yAxis: {
        type: 'value'
    },
    series: [{
            name: '邮件',
            type: 'line',
            smooth: true,
            symbolSize: 1,
            symbol: 'circle',
            data: [120, 82, 101, 134, 90, 230, 210]
        }, {
            name: '联盟',
            type: 'line',
            smooth: true,
            symbolSize: 1,
            symbol: 'circle',
            data: [220, 182, 191, 234, 290, 330, 310]
        }, {
            name: '视频广告',
            type: 'line',
            smooth: true,
            symbolSize: 1,
            symbol: 'circle',
            data: [150, 232, 201, 154, 190, 330, 310]
        }, {
            name: '直接',
            type: 'line',
            smooth: true,
            symbolSize: 1,
            symbol: 'circle',
            data: [240, 236, 301, 334, 240, 330, 320]
        }, {
            name: '线下',
            type: 'line',
            smooth: true,
            symbolSize: 1,
            symbol: 'circle',
            data: [132, 161, 184, 190, 230, 210, 120, ]
        }, {
            name: '媒体',
            type: 'line',
            smooth: true,
            symbolSize: 1,
            symbol: 'circle',
            data: [182, 191, 234, 290, 330, 310, 220, ]
        }, {
            name: '校园',
            type: 'line',
            smooth: true,
            symbolSize: 1,
            symbol: 'circle',
            data: [162, 101, 164, 240, 270, 356, 150, ]
        }, {
            name: '捆绑',
            type: 'line',
            smooth: true,
            symbolSize: 1,
            symbol: 'circle',
            data: [132, 201, 134, 290, 230, 220, 200, ]
        }

    ]
};