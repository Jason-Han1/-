option = {
   
    color:['#a8ea52','#5dceb0','#ff7f21','#cada81','#94adcb','#bbbbbb','#bbbbbb'],
 
    calculable: true,
    series: [{
        name: '漏斗图',
        type: 'funnel',
        left: '10%',
        top: 60,
        //x2: 80,
        bottom: 60,
        width: '80%',
       sort: 'ascending', 
        min: 0,
        max: 100,
        minSize: '0%',
        maxSize: '100%', 
        gap: 2,
        label: {
            show: true,
            position: 'inside'
        },
        labelLine: {
            length: 10,
            lineStyle: {
                width: 1,
                type: 'solid'
            }
        },
        itemStyle: {
            borderColor: '#fff',
            borderWidth: 1
        },
        emphasis: {
            label: {
                fontSize: 20
            }
        },
        data: [{
                value: 30,
               name: '700-650'
            },
            {
                value: 20,
                name: '800-700'
            },
            {
                value:10,
                name: '>800'
            },
            {
                value: 40,
               name: '650-500'
            },
            {
                value: 50,
                name: '400-300',
                
            },
            {
                value: 60,
                name: '300-200',
                
            },
            {
                value: 70,
                name: '<200',
                
            }
        ]
    }]
};