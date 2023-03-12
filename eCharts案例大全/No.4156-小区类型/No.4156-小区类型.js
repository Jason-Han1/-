option = {
    color: ['#26D3F7','#2076ED','#FF6401'],
    backgroundColor: '#fff',
    
    tooltip : {
        formatter: "{b}：{c}%"
    },
    
    
    legend: {
        orient: 'vertical',
        left: 'left',
        data: ['混合式', '开放式', '封闭式']
    },
    series: [
        {
            name: '',
            type: 'pie',
            radius: ['50%', '80%'],
            center: ['60%', '48%'],
            data:[
                {value:45, name:'混合式'},
                {value:30, name:'开放式'},
                {value:25, name:'封闭式'}
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