option = {
    title:{
        text:'应收回款率',
        top:'5%',
        left:'5%'
    },
    grid:{
        left:'10%',
        right:'15%',
        top:'20%',
        bottom:'15%'
    },
    legend: {
        top:'5%'
    },
    tooltip: {},
    dataset: {
        source: [
            ['product', '营业收入', '营业支出', '毛利率','达成率'],
            ['一季度', 143.3, 185.8, 193.7, 190],
            ['二季度', 183.1, 173.4, 155.1, 170],
            ['三季度', 186.4, 165.2, 182.5, 175],
            ['四季度', 172.4, 153.9, 139.1, 180]
        ]
    },
    xAxis: {
        type: 'category',
        
    },
    yAxis: [{
        type:'value',
        name:'金额（万元）',
        min:50,
        interval:50
    },{
        type:'value',
        name:'达成率',
        min:0,
        interval:20,
        axisLabel:{
            formatter:'{value}%'
        }
    }],
    series: [
        {type: 'bar',
        itemStyle:{
            color:new echarts.graphic.LinearGradient(0,1,0,0,[{
                offset:0,
                color:'#102C3A'
            },{
                offset:1,
                color:'#FC5757'
            }])
        }  
        },
        {type: 'bar',
             itemStyle:{
            color:new echarts.graphic.LinearGradient(0,1,0,0,[{
                offset:0,
                color:'#102C3A'
            },{
                offset:1,
                color:'#A3D04D'
            }])
        }
        },
        {type: 'bar',
            itemStyle:{
            color:new echarts.graphic.LinearGradient(0,1,0,0,[{
                offset:0,
                color:'#102C3A'
            },{
                offset:1,
                color:'#47E8EE'
            }])
        }
        },
        {type: 'line',
            color:'#F57838',
            smooth:true
        }
    ]
};