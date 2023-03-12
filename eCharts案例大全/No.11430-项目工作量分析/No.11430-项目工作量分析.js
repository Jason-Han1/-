option = {
    backgroundColor:'#fff',

    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)",

    },
    legend: {
        center:50,
      
        data:['有合同','无合同'],
                textStyle: {
            color: '#000'
        }
    },
    series: [
         
        {
            name:'各类型注销数量占比',
            type:'pie',
            radius: ['0', '50%'],
            center:['50%','30%'],
            color: ['#e72325', '#98e002', '#2ca3fd'],
            label: {
                normal: {
                    formatter: '{b}: {c}个\n{d}%'
                },
          
            },
            data:[
        
                {value:79, name:'无合同'},
                {value:98, name:'有合同',selected:true}
         
            ]
        }
    ]
};