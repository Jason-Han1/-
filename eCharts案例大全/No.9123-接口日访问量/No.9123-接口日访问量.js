option = {
     title : {
        text: '接口日访问量',
        x:'center'
    },
     
    legend: {
          bottom: 14,
    },
    tooltip: {},
    dataset: {
        source: [
            ['product', '访问量', '数据量'],
            ['06时', 43.3, 15.8],
            ['08时', 83.1, 73.4],
            ['10时', 86.4, 45.2],
            ['12时', 72.4, 53.9],
            ['14时', 72.4, 63.9],
            ['16时', 72.4, 53.9],
            ['18时', 72.4, 53.9],
            ['20时', 72.4, 20.9],
            ['22时', 72.4, 53.9],
            ['00时', 43.3, 15.8],
            ['02时', 83.1, 73.4],
            ['04时', 83.1, 73.4],
        ]
    },
    xAxis: {type: 'category'},
    yAxis: {},
    // Declare several bar series, each will be mapped
    // to a column of dataset.source by default.
    series: [
        {type: 'bar',
            color:'#ff9600',
            barWidth:'10'
        },
        {type: 'bar',
        color:'#1092f0',
        barWidth:'10'
        },
        
       
    ]
};
