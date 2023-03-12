option = {
    tooltip: {
        trigger: 'axis',
        axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    legend: {
        data: ['直接访问', '邮件营销', '联盟广告'],
        right: '10%',
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: {
        type: 'category',
        splitLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
    },
    yAxis: {
        type: 'value',
        splitLine: {
            show: false
        },
        axisTick: {
            show: false
        }
    },
    series: [{
            name: '直接访问',
            itemStyle: {
                normal: {
                    color: '#28C1FF',
                    barBorderRadius: [20, 20, 0, 0], // 圆角（左上、右上、右下、左下）
                }
            },
            // 柱子间的间距
            barCategoryGap: '40%',
            type: 'bar',
            data: [320, 332, 301, 334, 390, 330, 320]
        },
        {
            name: '邮件营销',
            itemStyle: {
                barBorderRadius: [20, 20, 0, 0], // 圆角（左上、右上、右下、左下）
                color: "#FAA13D"
            },
            type: 'bar',
            data: [120, 132, 101, 134, 90, 230, 210]
        },
        {
            name: '联盟广告',
            itemStyle: {
                barBorderRadius: [20, 20, 0, 0], // 圆角（左上、右上、右下、左下）
                color: "#81D32A"
            },
            type: 'bar',
            data: [220, 182, 191, 234, 290, 330, 310]
        },

    ]
};