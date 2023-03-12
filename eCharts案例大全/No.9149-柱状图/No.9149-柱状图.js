option = {
    color: ['#7EBD4F', '#BD974F', '#E69147', '#7A3BF2', '#4FACBD', '#7887D9', '#E592E8'],
    legend: {
        top: '10%',
        x: 'center',
        data: ['低能见度1', '低能见度2', '低能见度3', '低能见度4', '低能见度5', '低能见度6']
    },
    tooltip: {
        show: true
    },
    grid: {
        left: '10%',
        right: '10%',
        top: '20%',
        bottom: '20%',
        containLabel: true
    },
    xAxis: [{
        type: 'category'
    }],
    yAxis: {
        type: 'value',
        axisLabel: {
            textStyle: {
                fontSize: 12,
                color: '#4D4D4D'
            }
        },
        axisTick: {
            show: false
        },
        splitLine: {
            show: false
        }
    },
    series: [{
            name: '低能见度1',
            type: 'bar',
            barWidth: '7%',
            // barGap: '50%',
            data: [{
                value: 15
            }]
        },
        {
            name: '低能见度2',
            type: 'bar',
            barWidth: '7%',
            data: [{
                value: -20
            }]
        },
        {
            name: '低能见度3',
            type: 'bar',
            barWidth: '7%',
            data: [{
                value: 20
            }]
        },
        {
            name: '低能见度4',
            type: 'bar',
            barWidth: '7%',
            data: [{
                value: -20
            }]
        },
        {
            name: '低能见度5',
            type: 'bar',
            barWidth: '7%',
            data: [{
                value: 44
            }]
        },
        {
            name: '低能见度6',
            type: 'bar',
            barWidth: '7%',
            data: [{
                value: 18
            }]
        },
        {
            name: '低能见度7',
            type: 'bar',
            barWidth: '7%',
            data: [{
                value: -22
            }]
        }

    ]
};