option = {
    color:['#6633cc', '#3366cc', '#0099cc'],
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        x: 'left',
        data:['直达','营销广告','搜索引擎']
    },
    calculable : true,
    series: [
        {
            name:'访问来源',
            type:'pie',
            selectedMode: 'single',
            radius: ["20%", '70%'],
             roseType : 'radius',
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
                {value:535, name:'直达'},
                {value:679, name:'营销广告'},
                {value:648, name:'搜索引擎'}
            ]
        }
    ]
};