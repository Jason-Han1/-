option = {
    color: ['#37a2da','#32c5e9','#9fe6b8','#ffdb5c'],
    backgroundColor: '#fff',
    
    tooltip : {
        formatter: "{b}：{c}%"
    },
    
    
    legend: {
        orient: 'vertical',
        left: 'left',
        data: ['外地', '本地', '出租车', '其他']
    },
    series: [
        {
            name: '',
            type: 'pie',
            radius: '80%',
            center: ['60%', '48%'],
            data:[
                {value:15, name:'外地'},
                {value:40, name:'本地'},
                {value:30, name:'出租车'},
                {value:15, name:'其他'}
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