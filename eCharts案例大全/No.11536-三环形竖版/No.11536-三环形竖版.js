options = [
    {
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)",
        confine:true,
    },  
    title:[{
    text: '构成情况',
                textStyle:{
                // 	fontSize:12,
                color: '#4DCEF8',
                },
                left:'center',
                top:'0',    },
                {
    text: '西药',
                textStyle:{
                // 	fontSize:12,
                color: '#4DCEF8',
                },
                left:'center',
                top:'50%',      
                }] ,
    series:[
        {
            name:'西药',
            type:'pie',
            radius: ['50%', '70%'],
            center: ['50%', '60%'],
            avoidLabelOverlap: true,
            label: {
                normal: {
                    show: true,
                     textStyle: {
                            color: '#4DCEF8',
                            fontSize: 12,
                            lineHeight:24
                        },
                    // position: 'left'
                },
                emphasis: {
                    show: true,
                    textStyle: {
                        fontSize: '14',
                        fontWeight: 'bold'
                    }
                }
            },

            data:[
                {value:70, name:'九龙湖镇'},
                {value:310, name:'澥浦镇'},
                {value:310, name:'骆驼街道'},
                {value:310, name:'贵驷街道'},
                {value:310, name:'蛟川街道'},
                {value:310, name:'庄市街道'},
                {value:310, name:'招宝山街道'},
            ],

        }
    ]
},
    {
 tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)",
        confine:true,
    },   
    title: {
    text: '中成药',
                textStyle:{
                // 	fontSize:12,
                color: '#4DCEF8',
                },
                left:'center',
                top:'50%',     },
    series:[
        {
            name:'核查指令',
            type:'pie',
            radius: ['50%', '70%'],
            center: ['50%', '60%'],
            avoidLabelOverlap: true,
            label: {
                normal: {
                    show: true,
                     textStyle: {
                            color: '#4DCEF8',
                            fontSize: 12,
                            lineHeight:24
                        },
                    // position: 'left'
                },
                emphasis: {
                    show: true,
                    textStyle: {
                        fontSize: '14',
                        fontWeight: 'bold'
                    }
                }
            },

            data:[
                {value:70, name:'九龙湖镇'},
                {value:310, name:'澥浦镇'},
                {value:310, name:'骆驼街道'},
                {value:310, name:'贵驷街道'},
                {value:310, name:'蛟川街道'},
                {value:310, name:'庄市街道'},
                {value:310, name:'招宝山街道'},
            ],

        }
    ]
},{
 tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)",
        confine:true,
    },   
    title: {
    text: '中草药',
                textStyle:{
                // 	fontSize:12,
                color: '#4DCEF8',
                },
                left:'center',
                top:'50%',     },
    series:[
        {
            name:'请求服务',
            type:'pie',
            radius: ['50%', '70%'],
            center: ['50%', '60%'],
            avoidLabelOverlap: true,
            label: {
                normal: {
                    show: true,
                     textStyle: {
                            color: '#4DCEF8',
                            fontSize: 12,
                            lineHeight:24
                        },
                    // position: 'left'
                },
                emphasis: {
                    show: true,
                    textStyle: {
                        fontSize: '14',
                        fontWeight: 'bold',
                        color:'',
                    }
                }
            },

            data:[
                {value:70, name:'九龙湖镇'},
                {value:310, name:'澥浦镇'},
                {value:310, name:'骆驼街道'},
                {value:310, name:'贵驷街道'},
                {value:310, name:'蛟川街道'},
                {value:310, name:'庄市街道'},
                {value:310, name:'招宝山街道'},
            ],

        }
    ]
}
]