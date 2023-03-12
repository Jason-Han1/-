option = {
    tooltip:{
        trigger:'none'
    },
    series: [
        {
             silent:true,
             z:1,
            startAngle:0,
            type: 'pie',
            radius: ['50%', '70%'],
            label: {
                show: false,
            },
            data: [
                {value: 50,itemStyle:{color:'#3477F6',borderColor:'#3477F6',  }},
                {value: 30,itemStyle:{color:{
                     type: 'linear',
                    x: 0,
                    x2: 1,
                    y: 0,
                    y2: 0,
                    colorStops: [
                    {
                        offset: 0, color: '#3477F6' // 0% 处的颜色
                    },
                     {
                        offset: 0.3, color: '#3477F6' // 0% 处的颜色
                    },
                    {
                        offset: 1, color: '#FF708B' // 100% 处的颜色
                    }
                    ],
                    global: false // 缺省为 false
                },
                }},
                {value: 20,itemStyle:{color:'white'}},
            ]
        },
         {
               z:2,
                 silent:true,
         startAngle:0,
          
            type: 'pie',
            radius: ['50%', '60%'],
            label: {
                show: false,
            },
            itemStyle:{
              color:{
                     type: 'linear',
                    x: 0,
                    x2: 1,
                    y: 0,
                    y2: 0,
                    colorStops: [
                    {
                        offset: 0, color: '#FF708B80' // 0% 处的颜色
                    },
                     
                    {
                        offset: 1, color: '#FF708B' // 100% 处的颜色
                    }
                    ],
                    global: false // 缺省为 false
                }  
            },
            data: [
                {value: 79,itemStyle:{color:'white',borderColor:"white"}},
                {value: 1,itemStyle:{color:'#00000000'}},
                {value: 20, itemStyle:{color:'white'}},
            ]
        },
         {
               z:3,
                 silent:true,
             startAngle:0,
        
            type: 'pie',
            radius: '50%',
            data: [
                {value: 1, },
            ],
            
            itemStyle:{
                color:'white',
                shadowColor: '#BCC9DF',
                shadowBlur: 10
            },
            label:{
                show:true,
                formatter:'80%',
                position:'center',
                textStyle:{
                    color:'#333333',
                    fontSize:20
                }
            }
        },
    ]
};