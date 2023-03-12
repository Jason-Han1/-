option = {
    tooltip: {
        trigger: 'item'
    },
    legend: {
        top: '5%',
        right: '10%',
        top: 'center',
        width: 50,
    },
    color:['#2B95FF', '#FC5757','#FFA700'],
    series: [
        {
            name: '访问来源',
            type: 'pie',
            radius: ['40%', '70%'],
            center:['40%', '50%'],
            avoidLabelOverlap: false,
            label: {
                show: false,
                position: 'center'
            },
            emphasis: {
                label: {
                    show: true,
                    fontSize: '40',
                    fontWeight: 'bold'
                }
            },
            labelLine: {
                show: false
            },
            data: [
                {value: 1048, name: '一产占比：50%'},
                {value: 735, name: '二产占比：25%'},
                {value: 580, name: '三产占比：25%'},
            ]
        }
    ]
};