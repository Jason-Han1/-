option = {
    color: ['#FE6903', '#5796FF'],
    backgroundColor: '#fff',
    
    tooltip : {
        formatter: "{b}：{c}%"
    },
    
    
    legend: {
        orient: 'vertical',
        left: 'right',
        data: ['女', '男']
    },
    series: [
        {
            name: '',
            type: 'pie',
            radius: '80%',
            center: ['40%', '48%'],
            data:[
                {value:45, name:'女'},
                {value:55, name:'男'}
            ],
            emphasis: {
                itemStyle: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            },
            label: {
                normal: {
                    show: false,
                }
            }
        }
    ]
};