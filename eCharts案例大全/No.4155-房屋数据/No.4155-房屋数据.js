option = {
    color: ['#37a2da','#32c5e9','#9fe6b8','#ffdb5c','#ff9f7f'],
    backgroundColor: '#fff',
    
    tooltip : {
        formatter: "{b}：{c}%"
    },
    
    
    legend: {
        orient: 'vertical',
        left: 'left',
        data: ['空置', '自住', '出租', '商用', '其他']
    },
    series: [
        {
            name: '',
            type: 'pie',
            radius: '80%',
            center: ['60%', '48%'],
            data:[
                {value:14, name:'空置'},
                {value:16, name:'自住'},
                {value:35, name:'出租'},
                {value:30, name:'商用'},
                {value:5, name:'其他'}
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