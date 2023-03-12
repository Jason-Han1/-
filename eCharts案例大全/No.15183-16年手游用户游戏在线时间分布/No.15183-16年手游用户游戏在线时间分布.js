option = {
    backgroundColor: '#5580A1',
    tooltip:{},
    title: {
        text: '16年手游用户游戏在线时间分布占比（%）',
        subtext:'数据来源：DataEye2016中国移动游戏行业年度报告'
    },
    series: [{
        name: '在线分布',
        type: 'pie',
        radius: '55%',
        data: [{
            value: 8,
            name: '小1于10分钟'
        }, {
            value: 28,
            name: '10~30分钟'
        }, {
            value: 37,
            name: '30~60分钟'
        }, {
            value: 19,
            name: '1~2小时'
        }, {
            value: 6,
            name: '2~4小时'
        }, {
            value: 2,
            name: '大于4小时'
        }],
        itemStyle: {
            normal: {
                shadowBlur: 200,
                shadowOffsetX: 0,
                shadowOffsetY: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
        }
    }]
};