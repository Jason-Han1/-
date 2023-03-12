option = {
    "color": [
            "#516b91",
            "#59c4e6",
            "#edafda",
            "#93b7e3",
            "#a5e7f0",
            "#cbb0e3"
        ],
    legend: {
        data: ['门店', '线上总计', '第三方'],
        left:10
        
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: {
        type: 'value',
        boundaryGap: [0, 0.01]
    },
    yAxis: {
        type: 'category',
        data: ['水饺', '粽子', '冰激凌', '月饼', '食品', '咖啡']
    },
    series: [
        {
            name: '门店',
            type: 'bar',
            data: [18203, 23489, 29034, 104970, 131744, 630230]
        },
        {
            name: '线上总计',
            type: 'bar',
            data: [19325, 23438, 31000, 121594, 134141, 681807]
        },
        {
            name: '第三方',
            type: 'bar',
            data: [19325, 23438, 31000, 121594, 134141, 681807]
        }
    ]
};
