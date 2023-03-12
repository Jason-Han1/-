option = {
    title: [{
        text: '代理库今日期初余额券别统计',
        right: '35%',
        top:10,
        textStyle:{
            fontSize:20,
            color:'#333'
        }
    },{
        text: '单位：万元',
        right: '35%',
        top:35,
        textStyle:{
            fontSize:20,
            color:'#333'
        }
    }],
    tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c} ({d}%)'
    },
    legend: {
        orient: 'vertical',
        right: '10%',
        top:'45%',
        itemGap:20,
        textStyle:{
            fontSize:16
        },
        data: ['100元原封新券', '100元回笼券', '100元专用钞', '其他券别']
    },
    color:['#5b9bd5','#ed7d31','#a9d18e','#ffc000'],
    series: [
        {
            name: '访问来源',
            type: 'pie',
            radius: '50%',
            center: ['30%', '55%'],
            label:{
                position:'inside',
                color:'#111',
                fontSize:16,
                formatter: '{b}: {d}'
            },
            data: [
                {value: 335, name: '100元原封新券'},
                {value: 310, name: '100元回笼券'},
                {value: 234, name: '100元专用钞'},
                {value: 135, name: '其他券别'}
            ],
            emphasis: {
                itemStyle: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }
    ]
};
