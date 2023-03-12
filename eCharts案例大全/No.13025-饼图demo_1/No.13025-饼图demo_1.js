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
        data:['男性职员','女性职员'],
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
            color: ['#009BF9', '#FFAC00'],
            label: {
                normal: {
                    position:'inner',
                    formatter: '{b}\n{d}%',
                    textStyle: {
                        color: '#ffffff',
                        fontSize: 14
                    }
                },
          
            },
            data:[
                {value:222, name:'男性职员'
                },
                {value:235, name:'女性职员'},
         
            ]
        }
    ]
};