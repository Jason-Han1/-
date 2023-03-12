option = {
    xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
        type: 'value',
        splitLine: {
            show: false
        }
    },
    series: [
        {
            data: [120, 200, 150, 80, 70, 110, 130],
            type: 'bar',
            stack: 'a'
        },
        {
            data: [120, 200, 150, 80, 70, 110, 130],
            type: 'bar',
            stack: 'a'
        },
        {
            data: [120, 200, 150, 80, 70, 110, 130],
            type: 'bar',
            stack: 'a'
        },
        {
            data: [120, 120, 120, 120, 120, 120, 120, 120],
            type: 'bar',
            stack: 'b',
            barWidth: 10,
            barGap: '8%',
            label: {
                show: true,
                formatter () { 
                    return '我'
                },
                backgroundColor: '#1ac6a5',
                padding: 5,
                borderRadius: 20,
                position: 'top'
            },
            itemStyle: {
                color: '#f3f3f3'
            }
        }
    ]
};
