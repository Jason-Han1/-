//全省学校类型占比

option = {
    title : {
        text: '全省学校类型分布图',
        subtext: '内部数据',
        x:'center'
    },
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        left: 'left',
        data: ['幼儿园','中小学','中职学校','高等院校']
    },
    series : [
        {
            name: '投保量',
            type: 'pie',
            radius : '55%',
            center: ['50%', '60%'],
            data:[
                {value:500000, name:'幼儿园'},
                {value:4100000, name:'中小学'},
                {value:2300000, name:'中职学校'},
                {value:1700000, name:'高等院校'},
           
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