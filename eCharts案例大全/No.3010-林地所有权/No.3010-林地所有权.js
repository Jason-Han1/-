option = {
    color: ['#8D7AE5', '#6F9BE4', '#45D236', '#DDB05D'],
    legend: {
        orient: 'horizontal',
        left: 'center',
        top:'bottom',
        icon:'circle',
        data: ['国有', '个人', '集体', '其它']
    },
    series: [
        {
            name: '轮次',
            type: 'pie',
            radius: ['50%', '80%'],
            avoidLabelOverlap: false,
            label: {
                show: true,
                position: 'inside',
                fontSize:'16',
                color:'#fff',
                formatter: (params) => {
                    return `${params.percent}%`
                }
            },
            emphasis: {
                label: {
                    show: true,
                    fontSize: '20',
                    fontWeight: 'bold'
                }
            },
            labelLine: {
                show: false
            },
            data: [
                {value: 335, name: '国有'},
                {value: 310, name: '个人'},
                {value: 234, name: '集体'},
                {value: 135, name: '其它'}
            ]
        }
    ]
};