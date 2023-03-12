option = {
    tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b}: {c} ({d}%)'
    },
    legend: {
        orient: 'vertical',
        left: 10,
        data: ['#0188fb']
    },
    series: [
        {
            name: '#0188fb',
            color:['#0188fb'],
            type: 'pie',
            radius: ['50%', '70%'],
            avoidLabelOverlap: false,
            tooltip:{
                trigger:'item',
                formatter:(param)=>{
                    // origin color #0188fb
                    // emphasis color is #0195ff
                    console.log(param)
                    return param.color
                }
            },
            label: {
                show: false,
                position: 'center'
                
            },
            labelLine: {
                show: false
            },
            data: [
                {value: 335, name: '#0188fb'}
            ]
        }
    ]
};
