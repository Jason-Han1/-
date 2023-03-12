
option = {
    color:['#FFE253','#4AE2FF','#155089'],
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    
    series: [
        {
            name:'访问来源',
            type:'pie',
            selectedMode: 'single',
            radius: [0, '40%'],

           
            label: {
                normal: {
                    position: 'inner',
                    formatter:"{b}:\n{d}%"
                }
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            data:[
                {value:335, name:'地方税'},
                {value:679, name:'增值税纳税人'},
                {value:1548, name:'小微企业'}
            ]
        },
        {
            name:'访问来源',
            type:'pie',
            radius: ['50%', '65%'],    
             label: {
                normal: {
                   
                    formatter:"{b}:\n{d}%"
                }
            },
            data:[
                {value:135, name:'地方税'},
                {value:1048, name:'增值税纳税人'},
                {value:251, name:'小微企业'}
            ]
        }
    ]
};