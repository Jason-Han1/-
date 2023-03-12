option = {
    xAxis: [
        {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        position:"top"},
        {type: 'category',
        data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
        position:"bottom"}
    ],
    yAxis: {
        type: 'value'
    },
    series: [{
        data: [820, 932, 901, 934, 1290, 1330, 1320],
        type: 'line'
    }]
};