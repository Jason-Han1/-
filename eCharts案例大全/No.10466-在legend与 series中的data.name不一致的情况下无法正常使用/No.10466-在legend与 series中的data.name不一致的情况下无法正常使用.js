option = {
    title : {
        text: '班级分数统计',
        subtext: '纯属虚构',
        x:'center'
    },
    tooltip : {
        trigger: 'item',
        formatter: "{b} : {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        left: 'left',
        data: ['语文','数学','英语']
    },
    series : [
        {
            name: '',
            type: 'pie',
            radius : '55%',
            center: ['50%', '60%'],
            data:[
                {value:335, name:'张三_语文_335'},
                {value:235, name:'张三_数学_235'},
                {value:310, name:'李四_语文_310'},
                {value:311, name:'李四_数学_311'},
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
