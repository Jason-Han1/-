option = {
    color: ['#32c5e9','#9fe6b8','#ffdb5c','#ff9f7f','#fb7293','#e7bcf3','#8378ea'],
    backgroundColor: '#fff',
    
    tooltip : {
        formatter: "{b}：{c}%"
    },
    
    
    legend: {
        orient: 'vertical',
        left: 'right',
        data: ['汉', '回', '壮', '苗', '土家', '蒙古', '彝']
    },
    series: [
        {
            name: '',
            type: 'pie',
            radius: ['50%', '80%'],
            center: ['40%', '48%'],
            data:[
                {value:75, name:'汉'},
                {value:3, name:'回'},
                {value:6, name:'壮'},
                {value:3, name:'苗'},
                {value:3, name:'土家'},
                {value:5, name:'蒙古'},
                {value:5, name:'彝'}
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