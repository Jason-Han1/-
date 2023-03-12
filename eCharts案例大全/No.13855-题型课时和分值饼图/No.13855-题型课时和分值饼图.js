option = {
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        x: 'left',
        data:['阅读理解','完形填空','语法填空','短文改错','英语写作','词汇']
    },
    series: [
        {
            name:'题型分值',
            type:'pie',
            selectedMode: 'single',
            radius: [0, '30%'],

            label: {
                normal: {
                    position: 'inner'
                }
            },
            labelLine: {
                normal: {
                    show: true
                }
            },
            data:[
                
                {value:10, name:'阅读理解'},
                {value:10, name:'完形填空'},
                {value:5, name:'语法填空'},
                {value:5, name:'短文改错'},
                {value:5, name:'英语写作'},
                {value:3, name:'词汇'},
            ]
        },
        {
            name:'所需课时',
            type:'pie',
            radius: ['40%', '55%'],

            data:[
                {value:40, name:'阅读理解'},
                {value:30, name:'完形填空'},
                {value:15, name:'语法填空'},
                {value:10, name:'短文改错'},
                {value:25, name:'英语写作'},
                {value:10, name:'词汇'},
               
            ]
        }
    ]
};