app.title = '环形图';

option = {
    color:['#E1EFFA','#008EFE'],
    series: [
        {
            name:'访问来源',
            type:'pie',
            radius: ['60%', '70%'],
            hoverAnimation:false,
            avoidLabelOverlap: false,
            label: {
                normal: {
                    show: true,
                    position: 'center',
                    formatter:[
                        '{a|总活跃天数}',
                        '{b|80天}'
                        ].join('\n'),
                    rich:{
                        a:{
                            color:'black',
                            fontSize:35,
                        },
                        b:{
                          color:'#008EFE',
                          fontSize:55,
                        },
                        
                    },
                },
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            data:[
                {value:20, name:'直接访问'},
                {value:80, name:''},
            
            ]
        }
    ]
};