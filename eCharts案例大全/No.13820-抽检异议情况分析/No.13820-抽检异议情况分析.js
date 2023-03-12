option = {
    backgroundColor:'#fff',
    title : {
       text: '抽检异议情况分析',
        subtext: '各环节异议通过占比'
    },
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)",

    },
    legend: {
        
        orient: 'vertical',
        x: 'right',
       itemWidth: 14,
        itemHeight: 14,
        align: 'left',
    
        data:['生产','流通','餐饮'],
                textStyle: {
            color: '#000'
        }
    },
    series: [
         
        {
            name:'各环节异议通过占比',
            type:'pie',
            radius: ['0', '55%'],
            color: ['#00FF00', '#B22222', '#00CDCD'],
            label: {
                normal: {
                    formatter: '{b}\n{d}%'
                },
          
            },
            data:[
                {value:35, name:'生产'},
                {value:79, name:'流通'},
                {value:88, name:'餐饮',selected:true}
         
            ]
        }
    ]
};