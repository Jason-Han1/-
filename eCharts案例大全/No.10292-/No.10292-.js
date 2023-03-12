option = {
    backgroundColor:'#05224D',
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        x: 'left',
        data:['未完成','处理中','完成','正常处理','逾期处理','逾期完成','正常完成'],
        textStyle: {
            color: '#fff'
        },
        
    },
    series: [
        {
            name:'访问来源',
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
                    show: false
                }
            },
            data:[
                {value:335, name:'未完成', selected:true},
                {value:679, name:'处理中'},
                {value:1548, name:'完成'}
            ]
        },
        {
            name:'访问来源',
            type:'pie',
            radius: ['40%', '55%'],

            data:[
                {value:335, name:'未完成'},
                {value:544, name:'正常处理'},
                {value:135, name:'逾期处理'},
                {value:251, name:'逾期完成'},
                {value:1297, name:'正常完成'}
                ]
                
        }
    ]
};