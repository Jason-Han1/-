option = {
    backgroundColor: '#112842',
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
            crossStyle: {
                color: '#999'
            }
        }
    },
    toolbox: {
        feature: {
            saveAsImage: {
                show: true
            }
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: [{
        type: 'category',
        data: ['Before transparency', 'After transparency'],
        axisPointer: {
            type: 'shadow'
        }
    }],
    yAxis: [
        {
            type: 'value',
            name: 'Exchange ratio',
            scale: true,
            boundaryGap: [0.5, 0.5],
            axisLabel: {
                formatter: '{value} '
            }
        }
    ],
    series: [
        {
            name: 'Exchange ratio',
            type: 'bar',
            data: [6.600, 6.75],
            label: {
                normal: {
                    show: true,
                    position: 'top'
                }
            },
            itemStyle: {
                normal: {
                    color: '#F6E46D'
                }
            }
        }
    ]
};