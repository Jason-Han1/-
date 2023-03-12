option = {
    title : {
        text: 'TTTTT',
        subtext: '100',
        x:'center',
        top: 'center'
        
    },
    tooltip : {
        trigger: 'item',
        formatter: "{b} : {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        left: 'left',
        data: ['AAA','BBB','CCC','DDD','EEE']
    },
    series : [
        {
            type: 'pie',
            radius: ['40%', '70%'],
            center: ['50%', '50%'],
            data:[
                {value:335, name:'AAA'},
                {value:310, name:'BBB'},
                {value:234, name:'CCC'},
                {value:135, name:'DDD'},
                {value:1548, name:'EEE'}
            ],
            itemStyle: {
                emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }
    ]
};
