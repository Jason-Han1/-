option = {
    color: ['#37a2da','#32c5e9','#9fe6b8','#ffdb5c','#ff9f7f','#fb7293','#e7bcf3','#8378ea'],
    backgroundColor: '#fff',
    
    tooltip : {
        formatter: "{b}：{c}%"
    },
    
    
    legend: {
        orient: 'vertical',
        left: 'left',
        data: ['一般修剪', '浇水', '除草', '绿篱修剪', '病虫害防治', '施肥', '伐除', '其他']
    },
    series: [
        {
            name: '',
            type: 'pie',
            radius: '80%',
            center: ['60%', '48%'],
            data:[
                {value:40, name:'一般修剪'},
                {value:30, name:'浇水'},
                {value:25, name:'除草'},
                {value:18, name:'绿篱修剪'},
                {value:10, name:'病虫害防治'},
                {value:5, name:'施肥'},
                {value:4, name:'伐除'},
                {value:3, name:'其他'}
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