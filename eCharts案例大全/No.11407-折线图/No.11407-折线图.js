option = {
    tooltip: {
        trigger: 'axis'
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '10%',
        containLabel: true
    },
    toolbox: {
        feature: {
            saveAsImage: {}
        }
    },
        legend: {
        bottom: '10',
        itemWidth: 30,
        itemHeight: 6,
        data: ['tolal.avg', 'use.avg','swap.avg','share.avg','chae.avg','buffer.avg']
    },
    xAxis: [{
        axisLine: {
            show: true
        },
        axisTick: {
         show: true
        },
        axisLabel: {
            rotate: 50
        },
        splitLine: {
            show: true,
            lineStyle: {
                color: '#CCC'
            }
        },
        data: ['15:30', '15:45', '16:00', '16:15']
    }],
    yAxis: {
          show:false,
        type: 'value'
    },
    series: [
      
        {
            name: 'tolal.avg',
            type: 'line',
            step:"start",
            itemStyle: {
                color: '#58e1cd',
                borderColor: '#5b9bd5',
                borderWidth: 4
            },
            lineStyle: {
                width: 4
            },
            data: [3, 3.5, 4, 5]
        },
        {
            name: 'use.avg',
            type: 'line',
                    step:"middle",
            itemStyle: {
                color: '#e95057',
                borderColor: '#ed7d31',
                borderWidth: 4
            },
            lineStyle: {
                width: 4
            },
            data: [5, 7, 9, 11]
        },
        {
            name: 'swap.avg',
            type: 'line',
                                step:"middle",
            itemStyle: {
                color: '#d2db71',
                borderColor: '#5b9bd5',
                borderWidth: 4
            },
            lineStyle: {
                width: 4
            },
            data: [8, 9.5, 10,13]
        },
        {
            name: 'share.avg',
            type: 'line',
                                step:"middle",
            itemStyle: {
                color: '#5f7df4',
                borderColor: '#ed7d31',
                borderWidth: 4
            },
            lineStyle: {
                width: 4
            },
            data: [10, 11, 14, 16]
        },
        
        {
            name: 'chae.avg',
            type: 'line',
                                step:"middle",
            itemStyle: {
                color: '#5b9bd5',
                borderColor: '#5b9bd5',
                borderWidth: 4
            },
            lineStyle: {
                width: 4
            },
            data: [13, 15, 17, 18]
        },
        {
            name: 'buffer.avg',
            type: 'line',
                                step:"end",
            itemStyle: {
                color: '#2535ae',
                borderColor: '#ed7d31',
                borderWidth: 4
            },
            lineStyle: {
                width: 4
            },
            data: [17, 18, 22, 25]
        }
    ]
};
