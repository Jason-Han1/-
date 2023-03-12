option = {
    backgroundColor:'#fff',
    title : {
       text: '企业注销情况分析',
       textStyle:{fontSize:18}
    },
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)",

    },
    legend: {
        left:10,
        top:35,
        data:['申请注销','自动注销','吊销注销'],
                textStyle: {
            color: '#000'
        }
    },
    series: [
         
        {
            name:'各类型注销数量占比',
            type:'pie',
            radius: ['0', '35%'],
            center:['24%','30%'],
            color: ['#e72325', '#98e002', '#2ca3fd'],
            label: {
                normal: {
                    formatter: '{b}\n{d}%'
                },
          
            },
            data:[
                {value:35, name:'吊销注销'},
                {value:79, name:'自动注销'},
                {value:98, name:'申请注销',selected:true}
         
            ]
        }
    ]
};