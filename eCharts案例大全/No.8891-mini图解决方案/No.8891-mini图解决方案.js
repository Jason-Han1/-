option = {
    title: {
        text: 'mini图解决方案',
    },
    grid: [
        {x: '7%', y: '7%', width: '30%', height: '1%'},
       
    ],
    tooltip: {
        formatter: '{a}: ({c})'
    },
    xAxis: [
        {show: false, data: [1,2,3]},
    ],
    yAxis:{show: false},
    series: [
        {
            name: 'I',
            type: 'line',
            xAxisIndex: 0,
            yAxisIndex: 0,
            data: [10,11,10],
           
        }
    ]
};