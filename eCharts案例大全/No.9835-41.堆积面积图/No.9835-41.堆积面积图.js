option = {
    legend: {},
    dataset: {
        source: [
            ['title', '邮件营销', '联盟广告', '视频广告'],
            ['周一', 120, 220, 150],
            ['周二', 132, 182, 232],
            ['周三', 101, 191, 201],
            ['周四', 134, 234, 154],
            ['周五', 90, 290, 190],
            ['周六', 230, 330, 330],
            ['周日', 210, 310, 410]
        ]
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'none'
        }
    },
    xAxis: {
        type: 'category',
        boundaryGap: false
    },
    yAxis: {},
    series: [{
        type: 'line',
        stack: true,
        areaStyle: {
            opacity: "0.4"
        }
    }, {
        type: 'line',
        stack: true,
        areaStyle: {
            opacity: "0.4"
        }
    }, {
        type: 'line',
        stack: true,
        areaStyle: {
            opacity: "0.4"
        }
    }]
};