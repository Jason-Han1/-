option = {
    backgroundColor:'#fff',
    title : {
       text: '北新大道9号站水位预警次数',
       textStyle:{fontSize:18},
        left:220,
        top:90,
    },
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)",

    },
    legend: {
        orient: 'vertical',
        x: 'right',
        left:600,
        top:140,
        data:['封孔水位','保障水位','警戒水位','风险提示'],
                textStyle: {
            color: '#000'
        }
    },
    series: [
         
        {
            name:'北新大道9号站水位预警次数',
            type:'pie',
            radius: ['0', '25%'],
            center:['35%','30%'],
            color: [ '#ed400b','#ff9933','#ff9999','#61A0A8'],
            
            label: {
                normal: {
                    formatter: '{b}:{c}次\n{d}%'
                },
          
            },
            data:[
                {value:2, name:'封孔水位'},
                {value:2, name:'保障水位'},
                {value:5, name:'警戒水位'},
                {value:8, name:'风险提示'}
         
            ]
        }
    ]
};