option = {
    title : {
        text: '其他来源讨论对象',
       
        x:'center'
    },
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        left: 'left',
        data: ['舆论','司法','媒体','舆论与司法关系','事件人物']
    },
    series : [
        {
            name: '访问来源',
            type: 'pie',
            radius : '55%',
            center: ['50%', '60%'],
            data:[
                {value:4, name:'舆论'},
                {value:5, name:'司法'},
                {value:4, name:'媒体'},
                {value:3, name:'舆论与司法关系'},
                {value:0, name:'事件人物'}
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