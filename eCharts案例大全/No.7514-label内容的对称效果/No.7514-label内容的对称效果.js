option = {
    color: ['#FF5C5C','#FFC000','#17B1B9','#08B0F9'],
    series: [
        {
            type: 'pie',
            radius: ['30%', '35%'],
            labelLine: {
                show: true,
                length: 15, // 第一段线 长度
                length2: 105, // 第二段线 长度 
            },
            label:{
                 color:'#000',
                fontSize: 8,
                padding:[-2,-110,2,-110],
                formatter:[
                        '{d|{d}%}',
                        '{c|{c}}万元',
                        '{b|{b}}',
                    ].join('\n'),
                rich:{
                    c:{
                        fontSize: 19,
                        color:'#000',
                        padding:[4,4,-2,0],
                    },
                   b: {
                       padding:[8,0,0,0],
                       color:'#000',
                       fontSize: 10,
                   },
                   d:{
                       color:'#000',
                       fontSize: 10,
                       padding:[-15,70,15,70],
                   }
                }
            },
            data: [
                {value: 1500, name: '政府'},
                {value: 1200, name: '其他'},
                {value: 1300, name: '混合'},
                {value: 1400, name: '企业'}
            ]
        }
    ]
};
