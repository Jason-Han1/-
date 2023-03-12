option = {
    title : {
        text: '某站点用户访问来源',
        subtext: '纯属虚构',
        x:'center'
    },
    color:['#0092da',"#f6ab41","#264df4","#0fac03","#0018aa","#e63168","#8b21e4"],
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    // legend: {
    //     orient: 'vertical',
    //     left: 'left',
    //     data: ['直接访问','邮件营销','联盟广告','视频广告','搜索引擎']
    // },
    series : [
        {
            name: '温室气体排放类型',
            type: 'pie',
            radius : '55%',
            center: ['50%', '60%'],
            label: {
                normal: {
                    formatter: '{b} :\n {per|{c}} {per|({d}%)}',
                     rich: {
                        per: {
                            color: '#333',
                            fontSize:14,
                            padding: [5,3, 5,0],
                            align: 'left'
                        }
                     }
                }
            },
            data:[
                {value:335, name:'直接排放(范围1)'},
                {value:310, name:'电力间接排放(范围2)'}
            ]
        }
    ]
};
