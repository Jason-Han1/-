option = {
    tooltip: {
        trigger: 'item',
        formatter: '{b}: {c} ({d}%)'
    },
    color: ['#0091FF','#CD7070'],
    backgroundColor: '#0b2058',
    series: [
        {
            type: 'pie',
            radius: ['70%', '80%'],
            avoidLabelOverlap: false,
            label: {
                show: false,
                position: 'center'
            },
            
            labelLine: {
                show: false
            },
            data: [
                {value: 335, name: '正常设备'},
                {value: 310, name: '报警设备'},
            ]
        }
    ]
};
