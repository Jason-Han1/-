option = {
    title : {
        text: '星座前五名分布',
        subtext: '大一新生数据汇总',
        x:'center'
    },
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        left: 'left',
        data: ['天秤座','双鱼座','狮子座','处女座','双子座']
    },
    series : [
        {
            name: '星座名称',
            type: 'pie',
            radius : '55%',
            center: ['50%', '60%'],
            data:[
                {value:495, name:'天秤座'},
                {value:408, name:'双鱼座'},
                {value:375, name:'狮子座'},
                {value:373, name:'处女座'},
                {value:370, name:'双子座'}
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
