option = {
    title: {
        text: '折线图堆叠'
    },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data: ['邮件营销', '联盟广告', '视频广告', '直接访问', '搜索引擎']
    },
    grid: [{
            bottom: '55%'
        },
        {
            top: '55%'
        }
    ],
    dataZoom: [{
        xAxisIndex: [0, 1]
    }],
    xAxis: [{
            type: 'category',
            boundaryGap: false,
            data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
            gridIndex: 0,
            show: false
        },
        {
            type: 'category',
            boundaryGap: false,
            data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
            gridIndex: 1
        },
    ],
    yAxis: [{
            type: 'value',
            gridIndex: 0
        },
        {
            type: 'value',
            gridIndex: 1
        }
    ],
    series: [{
            name: '邮件营销',
            type: 'line',
            stack: '总量',
            data: [1, 200, 101, 134, 90, 230, 210],
            xAxisIndex: 1,
            yAxisIndex: 1
        },
        {
            name: '联盟广告',
            type: 'line',
            stack: '总量',
            data: [1, 2, 191, 234, 290, 330, 310]
        },
        {
            name: '视频广告',
            type: 'line',
            stack: '总量',
            data: [150, 232, 201, 154, 190, 330, 410]
        },
        {
            name: '直接访问',
            type: 'line',
            stack: '总量',
            data: [320, 332, 301, 334, 390, 330, 320]
        },
        {
            name: '搜索引擎',
            type: 'line',
            stack: '总量',
            data: [820, 932, 901, 934, 1290, 1330, 1320]
        }
    ]
};