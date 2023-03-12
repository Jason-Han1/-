option = {
    color: ['#3398DB','#675bba'],
    tooltip : {
        trigger: 'axis',
        formatter: "{a}<br>{b}:{c}",
        axisPointer: {
            type: 'cross'
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis : [
        {
            type : 'category',
            name: '项目类型',
            data : ['工程类', '货物类', '服务类', '投融资类', '其他'],
            axisTick: {
                alignWithLabel: true
            }
        }
    ],
    yAxis : [
        {
            type : 'value',
            name:'项目数'
        }
    ],
    series : [
        {
            name:'项目数',
            type:'bar', 
            barWidth: '60%',
            data:[10, 52, 100, 60, 50]
        },
        {
            name:'项目数1',
            type:'line',
            
            data:[10, 52, 100, 60, 50]
        }
    ]
};