option = {
    backgroundColor:'#fff',
    title : {
       text: '投诉举报立案分析',
       textStyle:{fontSize:18},
        left:220,
        top:40,
    },
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)",

    },
    legend: {
        orient: 'vertical',
        x: 'right',
        left:500,
        top:90,
        data:['研制','生产','流通','餐饮服务/使用','其他'],
                textStyle: {
            color: '#000'
        }
    },
    series: [
         
        {
            name:'投诉举报立案数',
            type:'pie',
            radius: ['0', '35%'],
            center:['24%','30%'],
            color: [ '#ed400b','#55a4ee','#e59be1','#35a17a','#ef9376'],
            
            label: {
                normal: {
                    formatter: '{b}:{c}次\n{d}%'
                },
          
            },
            data:[
                {value:150, name:'其他'},
                {value:300, name:'餐饮服务/使用'},
                {value:250, name:'流通'},
                {value:350, name:'生产'},
                {value:200, name:'研制',selected:true}
         
            ]
        }
    ]
};