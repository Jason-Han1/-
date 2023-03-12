/*
有阴影的折线图
*/

option = {
    backgroundColor: '#fff',//设置折线阴影
    xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
        type: 'value'
    },
    series: [{
        data: [700, 780, 820, 820, 900, 930, 1320],
        type: 'line',
        smooth: true,//设置折线阴影
        symbol: 'none',//设置折线阴影
        lineStyle: {
            color: '#3275FB',
            width: 3,
            shadowColor: 'rgba(0, 0, 0, 0.3)',//设置折线阴影
            shadowBlur: 15,//设置折线阴影
            shadowOffsetY: 20,//设置折线阴影
        },
    }]
};
