option = {
    color:['#2bf666'],
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
            crossStyle: {
                color: '#999'
            }
        }
    },

    legend: {
        data: ['蒸发量', '降水量']
    },
    xAxis: [{
        type: 'category',
        data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
    }],
    yAxis: [{
        type: 'value',
    }, ],
    visualMap: {
        show: false,
        type: 'piecewise',
        seriesIndex: 1, //控制series 对应的区域
        pieces: [{
            gt: 10,
            color: 'green'
        }, {
            gt: 0,
            lte: 10,
            color: 'red'
        }]
    },
    series: [{
            name: '降水量',
            type: 'line',
            //visualMap:false,无效
            data: [2.6, 5.9, 9.0, 2.4, 8.7, 7.7, 15.6, 18.2, 4.7, 8.8, 6.0, 2.3]
        },
        {
            name: '平均温度',
            type: 'line',
            data: [2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2]
        }
    ]
};