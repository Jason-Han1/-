option = {
    xAxis: [{
        data: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
        axisLabel: {
            interval: 0,
            show: false
        },
    },{
        data: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
        axisLabel: {
            interval: 0,
            show: true
        },
        axisLine: {
          show: false  
        },
        axisTick: {
            show: false
        },
        gridIndex: 1
    }],
    yAxis: [{
        type: 'value',
        show: true
    },{
        gridIndex: 1,
        show: false,
    }],
    grid: [{
        width: '80%',
        left: '10%'
    },{
        left: '13.3%',
        width: '80%'
    }],
    series: [
        {
            type: 'bar',
            barWidth: 10,
            data: [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120],
            itemStyle: {
                barBorderRadius: 10,
                color: {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [{
                        offset: 0, color: '#37FFF9' // 0% 处的颜色
                    }, {
                        offset: 1, color: 'rgba(0, 222, 215, 0.2)' // 100% 处的颜色
                    }],
                }
            }
            
        },
        {
            type: 'bar',
            barWidth: 10,
            data: [5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60],
            itemStyle: {
                barBorderRadius: 10,
                color: {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [{
                        offset: 0, color: '#FF5624' // 0% 处的颜色
                    }, {
                        offset: 1, color: 'rgba(255, 86, 36, 0.2)' // 100% 处的颜色
                    }],
                }
            }
        },
    ]
};
