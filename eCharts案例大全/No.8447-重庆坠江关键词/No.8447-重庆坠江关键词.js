option = {
    tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b}: {c} ({d}%)'
    },
    title:{
       text:'r=3000，θ=30°',
       height:40,
       left:270
       
    },
    legend: {
        orient: 'vertical',
        left: 10,
        data: ['驾车行程时间', '公交行程时间', '步行时间1', '公交开行时间',
            '步行时间2'
        ]
    },
    grid:{
         top:100,
    },
    series: [{
            name: '行程时间分布',
            type: 'pie',
            selectedMode: 'single',
            radius: [0, '30%'],

            label: {
                position: 'inner'
            },
            labelLine: {
                show: false
            },
            data: [{
                    value: 21,
                    name: '驾车行程时间',
                    selected: true
                },
                {
                    value: 40,
                    name: '公交行程时间'
                },
   
            ]
        },
        {
            name: '行程时间分布',
            type: 'pie',
            radius: ['40%', '55%'],
            label: {
                formatter: '{a|{a}}{abg|}\n{hr|}\n  {b|{b}：}{c}  {per|{d}%}  ',
                backgroundColor: '#eee',
                borderColor: '#aaa',
                borderWidth: 1,
                borderRadius: 4,
                // shadowBlur:3,
                // shadowOffsetX: 2,
                // shadowOffsetY: 2,
                // shadowColor: '#999',
                // padding: [0, 7],
                rich: {
                    a: {
                        color: '#999',
                        lineHeight: 22,
                        align: 'center'
                    },
                    // abg: {
                    //     backgroundColor: '#333',
                    //     width: '100%',
                    //     align: 'right',
                    //     height: 22,
                    //     borderRadius: [4, 4, 0, 0]
                    // },
                    hr: {
                        borderColor: '#aaa',
                        width: '100%',
                        borderWidth: 0.5,
                        height: 0
                    },
                    b: {
                        fontSize: 16,
                        lineHeight: 33
                    },
                    per: {
                        color: '#eee',
                        backgroundColor: '#334455',
                        padding: [2, 4],
                        borderRadius: 2
                    }
                }
            },
            data: [
             {
                    value: 22,
                    name: '步行时间1'
                },
                {
                    value: 9,
                    name: '步行时间2'
                },
                {
                    value: 9,
                    name: '公交开行时间'
                },


               
            ]
        },
    ]
};