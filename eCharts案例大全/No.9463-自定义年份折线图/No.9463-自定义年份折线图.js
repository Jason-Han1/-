option = {
    xAxis: [{
        type: 'category',
        data: ['2019年', '1月', '2月'],
        axisPointer: {
            type: 'shadow'
        }
    }],
    yAxis: [{
        type: 'value'
    }],
    series: [{
            name: '蒸发量',
            type: 'line',
            data: [2.0, 4.9, 7.0]
        },
        {
            name: '降水量',
            type: 'line',
            data: [2.6, 5.9, 9.0],
            markLine: {
                lineStyle: {
                    color:'red'
                },
                data: [
                    {
                        name: 'Y 轴值为 100 的水平线',
                        yAxis: 6
                    }
                ]
            }
        }
    ]
};