option = {
    xAxis: {
        type: 'category',
        data: ['5/13 01:00', '5/13 02:00', '5/13 03:00', '5/13 04:00']
    },
    yAxis: {
        type: 'value'
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    legend: {
        data: ['注册成功', '注册失败', '登录成功', '登录失败', '心跳成功', '心跳失败'],
        align: 'left',
        left: 10
    },
    series: [{
            name: '注册成功',
            stack: '1',
            data: [1, 3, 2, 8],
            type: 'bar'
        },
        {
            name: '注册失败',
            stack: '1',
            data: [1, 2, 8, 8],
            type: 'bar'
        },
        {
            name: '登录成功',
            stack: '1',
            data: [2, 5, 3, 5],
            type: 'bar'
        },
        {
            name: '登录失败',
            stack: '1',
            data: [6, 15, 17, 6],
            type: 'bar'
        },
        {
            name: '心跳成功',
            stack: '1',
            data: [12, 5, 10, 7],
            type: 'bar'
        },
        {
            name: '心跳失败',
            stack: '1',
            data: [38, 30, 20, 26],
            type: 'bar'
        }
    ]
};