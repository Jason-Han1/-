option = {
    title : {
        text: '各部门人力成本占比',
        //subtext: '纯属虚构',
        x:'left'
    },
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        left: 'right',
        data: ['运营中心','技术中心','人力资源中心','物流中心','行政部','海涛事业部','风险管理部','财务中心']
    },
    series : [
        {
            name: '访问来源',
            type: 'pie',
            radius : '55%',
            center: ['50%', '60%'],
            data:[
                {value:335, name:'运营中心'},
                {value:310, name:'技术中心'},
                {value:234, name:'人力资源中心'},
                {value:135, name:'物流中心'},
                {value:150, name:'行政部'},
                {value:148, name:'海涛事业部'},
                {value:248, name:'风险管理部'},
                {value:148, name:'财务中心'}
            
        
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
