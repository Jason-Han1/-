option = {
    title: {
        text: '分别展示数据走势'
    },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data:['最高温度', '平均温度', '最低温度']
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
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
        type: 'value'
    },
    series: [
        {
            name:'最高温度',
            type:'line',
            step: 'start',
            data:[120, 132, 101, 134, 90, 230, 210]
        },
        {
            name:'平均温度',
            type:'line',
            step: 'middle',
            data:[220, 282, 201, 234, 290, 430, 410]
        },
        {
            name:'最低温度',
            type:'line',
            step: 'end',
            data:[450, 432, 401, 454, 590, 530, 510]
        }
    ]
};
