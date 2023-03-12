option = {
    title: {
        text: '报名人数统计',
       
    },
    legend: {
        right: '5',
        icon: 'roundRect',
        itemHeight:6,
        itemWidth:20,
        orient: 'horizontal',
    },
    xAxis: {
        
        axisLabel: {
            color: 'rgba(0, 0, 0, 0.3)',
            fontSize: 14,
          },
        data: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    },
    yAxis: {
        
        axisLabel: {
            color: 'rgba(0, 0, 0, 0.3)',
            fontSize: 14,
          },
    },
    tooltip: {
        trigger: 'axis',
    },
    series: [
        {
            name: '学历类1',
            type: 'line',
            symbol: 'none',
            data: [334, 320, 430, 410, 282, 291, 390],
        },
        {
            name: '学历类2',
            type: 'line',
            symbol: 'none',
            data: [234, 220, 330, 310, 182, 191, 290],
        },
        {
            name: '学历类3',
            type: 'line',
            symbol: 'none',
            data: [184, 170, 280, 260, 132, 141, 240],
        },
        {
            name: '学历类4',
            type: 'line',
            symbol: 'none',
            data: [134, 120, 230, 210, 82, 91, 190],
        },
        {
            name: '学历类5',
            type: 'line',
            symbol: 'none',
            data: [84, 70, 180, 160, 32, 41, 140],
        },
    ],
};
