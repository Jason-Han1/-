option = {
    title : {
        text: '狗主人养宠物的原因',
        subtext: '数据来源：镝次元数据',
        x:'center'
    },
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        left: 'left',
        data: ['纯粹就是爱好，喜欢宠物','精神寄托，增加乐趣','爱心收养','陪伴家中老人、孩子','别人送出的礼物','出于好奇和冲动','看家护院','看别人养了，也想养']
    },
    series : [
        {
            name: '养狗原因',
            type: 'pie',
            radius : '60%',
            center: ['50%', '60%'],
            data:[
                {value:52, name:'纯粹就是爱好，喜欢宠物'},
                {value:21, name:'精神寄托，增加乐趣'},
                {value:15, name:'爱心收养'},
                {value:5.2, name:'陪伴家中老人、孩子'},
                {value:2.7, name:'别人送出的礼物'},
                {value:0.7, name:'出于好奇和冲动'},
                {value:0.7, name:'看家护院'},
                {value:0.3, name:'看别人养了，也想养'},
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
