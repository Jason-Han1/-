option = {
    backgroundColor:'#fff',
    title : {
       text: '各检查类型违规占比',
        subtext: '各检查类型违规占比'
    },
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)",

    },
   color: ['#96cfdf','#79bcd0','#569db2','#2690af','#0a85a8', '#96dcc3', '#5ac59e', '#439476', '#346654'],
    legend: {
        
        //orient: 'vertical',
        x: 'center',
       // align: 'left'
       data:['食品批发商','商场超市','便利店','食杂店','食品贸易商',
        '网络食品销售商','食品自动售货销售商','冷冻（藏）仓库食品销售商','其他食品销售经营者'],
               
    },
    series: [
         
        {
            name:'各检查类型违规占比',
            type:'pie',
            radius: ['0', '30%'],
            //color: ['#00FF00', '#B22222', '#00CDCD'],
            label: {
                normal: {
                    formatter: '{b}\n{d}%'
                },
          
            },
            data:[
                {value:35, name:'食品批发商',selected:true},
                {value:79, name:'商场超市'},
                {value:35, name:'便利店'},
                {value:79, name:'食杂店'},
                {value:88, name:'食品贸易商'},
                {value:79, name:'网络食品销售商'},
                {value:35, name:'食品自动售货销售商'},
                {value:79, name:'冷冻（藏）仓库\n食品销售商'},
                {value:35, name:'其他食品销售经营者'},
         
            ]
        }
    ]
};