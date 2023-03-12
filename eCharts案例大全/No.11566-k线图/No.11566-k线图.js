option = {
    tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    xAxis: {
        data: ['2017-10-24', '2017-10-25', '2017-10-26', '2017-10-27']
    },
    yAxis: {},
    series: [
        {
            type: 'bar',
            itemStyle: {
                color: '#32C896'
            },
            data:   [30, 35, 40, 35]
           
        },
        {
            type: 'k',
            barWidth: 10,
            data: [
                [28, 30, 20, 45],
                [33, 35, 30, 55],
                [36, 38, 33, 40],
                [38, 40, 32, 42]
            ]
         },
    ]
};
