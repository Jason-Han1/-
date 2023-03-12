option = {
    backgroundColor: '#0e1c47',
    series: [
        {
            name: '',
            type: 'pie',
            zlevel: 2,
            radius: ['37%', '50%'],
            center: ['45%', '50%'],
            color: [
                '#c9c138',
                '#26a1cd',
            ],
            label: {
                show: false,
            },
            labelLine: {
                show: false,
            },
            tooltip: {
                show: false,
            },
            data: [
                {
                    value: 41,
                    name: '',
                },
                {
                    value: 20,
                    name: '',
                },
            ],
        },
        {
            name: 'title',
            type: 'pie',
            zlevel: 3,
            hoverAnimation: false,
            legendHoverLink: false,
            radius: ['43%', '50%'],
            center: ['45%', '50%'],
            color: [
                '#f3e64a', 
                '#2dbbed', 
                ],
            label: {
                show: true,
             formatter:'{bb|{b}:}{cc|{c}}\n{dd|{d}%}',
//                 formatter: (params) => {
//                     return `
//  ${params.name}: ${params.data.value}个
// ${params.percent}%
//  `;
//                 },
                rich:{
                    bb:{
                        height:300,
                        align:"left",                     
                        fontSize:40 , 
 verticalAlign:'middle',  
  fontFamily:'siyuan',     
                    },
                                   cc:{
                        height:300,
                        align:"left",                     
                        fontSize:40 , 
 verticalAlign:'middle',  
    fontFamily:'dsDigital2',         
                    },
                    dd:{
                        height:300,
                        align:"left",                        
                        fontSize:40,
 verticalAlign:'middle',
   fontFamily:'dsDigital2',     
                    }
                },
                padding:[0,-30],
                textStyle:{
                    lineHeight:70
                }
            },
            labelLine: {
                show: true,
                // showAbove:true,
                length: 30,
                length2: 50,
                
            },
            itemStyle: {
                shadowBlur: 10,
                shadowColor: 'rgba(0, 0, 0, 0.3)',
            },
            data: [
                {
                    value: 41,
                    name: '低级',
                    label: {
                        color: '#f3e64a',
                    },
                },
                {
                    value: 20,
                    name: '中级',
                    label: {
                        color: '#2dbbed',
                    },
                },
            ],
        },
    ],
};