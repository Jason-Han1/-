option = {
    title:{
        text:'租赁收入达成',
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
            ['product', '实际季租率', '目标收入', '计划季租率','达成率'],
            ['一季度', 143.3, 185.8, 200, 190],
            ['二季度', 183.1, 173.4, 200, 170],
            ['三季度', 186.4, 165.2, 200, 175],
            ['四季度', 172.4, 153.9, 200, 180]
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
       
        min:0,
        interval:20,
        axisLabel:{
            formatter:'{value}%'
        }
    }],
    series: [
        {type: 'bar',},
        {type: 'bar',},
        {type: 'bar',},
        {type: 'line',
            color:'#F57838',
            smooth:true
        }
    ]
};