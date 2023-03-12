option = {
    title: {
        text: '各专业网签率'
    },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data: ['网络新媒体', '新闻学', '新闻学专升本', '数字出版']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    toolbox: {
        feature: {
            saveAsImage: {}
        }
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['3.5', '3.11', '3.16', '3.18', '3.29','4.1']
    },
    yAxis: {
        type: 'value',
        axisLabel: {
            show: true,
            interval: 'auto',
            formatter: '{value} %' //纵坐标百分比
        }
    },
    series: [{
            name: '网络新媒体',
            type: 'line',
            //stack: '100',
            data: [6.87, 7.3, 7.63, 7.63, 14.5, 15.27]
        },
        {
            name: '新闻学',
            type: 'line',
            // stack: '100',
            data: [6.78, 6.78, 6.78, 6.78, 16.95, 18.64]
        },
        {
            name: '新闻学专升本',
            type: 'line',
            // stack: '100',
            data: [6.06, 7.58, 12.12, 12.12, 24.24, 28.79]
        },
        {
            name: '数字出版',
            type: 'line',
            // stack: '100',
            data: [5.66, 15.09, 35.85, 60.38, 75.47, 75.47]
        }
    ]
};