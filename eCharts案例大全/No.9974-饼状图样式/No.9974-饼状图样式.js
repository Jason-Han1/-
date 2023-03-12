option = {
    backgroundColor: '#fff',
    tooltip: {
       
        trigger: 'item',
        formatter: "{b} : {c} ({d}%)"
    },
    grid: {
        y2: 50,
        y: 20
    },
    series: [{
        name: '论文数量',
        type: '',
        radius: '55%',
        center: ['50%', '50%'],
        label: {
            show: true,
            formatter: '{b}\n{c}%',
             textStyle:{
                color:'#000',
                fontSize:18
            
            }
        },
        data: [{
                value: 90,
                name: '十分公司'
            },
            {
                value: 85,
                name: '七分公司'
            },
            {
                value: 80,
                name: '内江分公司'
            },
            {
                value: 80,
                name: '达州分公司'
            },
            {
                value: 75,
                name: '海南分公司'
            },
            {
                value: 70,
                name: '第二分公司'
            },
            {
                value: 70,
                name: '三分公司'
            },
            {
                value: 70,
                name: '四分公司'
            },
            {
                value: 70,
                name: '达州分公司'
            },
            {
                value: 70,
                name: '自贡分公司'
            }
        ]
    }]
};