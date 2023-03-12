option = {
    backgroundColor:'#042032',
    legend: {
        data: ['折线图', '柱状图'],
        x: '200px', // 对齐方式
        itemGap: 200, // item之间的距离
    },
    xAxis: {
        type: 'category',
        data: ['2013', '2014', '2015', '2016'],
        splitLine: {
            show: false
        },
        color:'#fff'
    },
    yAxis: {
        type: 'value',
        max: 300,
        color:'#fff',
        splitLine: {
            show: false
        }
    },
    series: [
        { // 背景色
            type: 'pictorialBar',
            stack: '总量',
            symbol: 'roundRect',
            symbolSize: [40, 5],
            symbolMargin: 1,
            symbolRepeat: 'repeat',
            symbolBoundingData: 300,
            z: -10,
            data: [300, 300, 300, 300],
            itemStyle: {
                normal: {
                    color: '#243f51'
                }
            }
        },
        { // 数据显示颜色
            type: 'pictorialBar',
            symbol: 'roundRect',
            stack: '总量',
            symbolSize: [40, 5],
            symbolMargin: 1,
            symbolRepeat: 'repeat',
            z: -1,
            data: [18, 100, 120, 220],
           
            itemStyle: {
                normal: {
                    color:'#00FFF5',
                }
            }
        },
     
    ]
};