app.title = '堆叠柱状图';

option = {
    tooltip: {
        trigger: 'axis',
        axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'none' // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    legend: {
        data: ['邮件营销', '联盟广告', '视频广告']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: [{
        type: 'category',
        data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
        axisTick: {
            show: false
        },
        axisLine: {
            show: false
        },
    }],
    yAxis: [{
        splitLine: {
            show: true
        },
        axisTick: {
            show: false
        },
        axisLine: {
            show: true
        },
        axisLabel: {
            show: true
        },
        type: 'value'
    }],
    series: [{
            name: '邮件营销',
            // type: 'bar',
            type: 'pictorialBar',
            stack: '广告',
            data: [120, 132, 101, 134, 90, 230, 210],
            // symbol: 'path://M0,10 L10,10 C5.5,10 5.5,5 5,0 C4.5,5 4.5,10 0,10 z',
            itemStyle: {
                normal: {
                    opacity: 0.5
                },
                emphasis: {
                    opacity: 1
                }
            }
        },
        {
            name: '联盟广告',
            // type: 'bar',
            type: 'pictorialBar',
            stack: '广告',
            // symbol: 'path://M0,10 L10,10 C5.5,10 5.5,5 5,0 C4.5,5 4.5,10 0,10 z',
            itemStyle: {
                normal: {
                    opacity: 0.5
                },
                emphasis: {
                    opacity: 1
                }
            },
            data: [220 + 120, 182 + 132, 191 + 101, 234 + 134, 290 + 90, 330 + 230, 310 + 210]
        },
        {
            name: '视频广告',
            // type: 'bar',
            type: 'pictorialBar',
            stack: '广告',
            // symbol: 'path://M0,10 L10,10 C5.5,10 5.5,5 5,0 C4.5,5 4.5,10 0,10 z',
            itemStyle: {
                normal: {
                    color: '#00E1EB',
                    opacity: 0.5,
                },
                emphasis: {
                    opacity: 1
                }
            },
            data: [150 + 220 + 120, 232 + 182 + 132, 201 + 191 + 101, 154 + 234 + 134, 190 + 330 + 230, 330, 410 + 310 + 210]
        }
    ]
};