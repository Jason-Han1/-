app.title = '老店拜访回顾';

option = {
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        x: 'left',
        data:['赚的更多','政策有吸引力','希望尝试新品牌','给我有力的支持']
    },
    series: [
        {
            name:'访问来源',
            type:'pie',
            selectedMode: 'single',
            radius: [0, '40%'],

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
                {value:160, name:'赚的更多', selected:true},
                {value:70, name:'政策有吸引力'},
                {value:80, name:'希望尝试新品牌'},
                {value:122, name:'给我有力的支持'}
            ]
        },
        {
            name:'访问来源',
            type:'pie',
            radius: ['55%', '65%'],

            data:[
                {value:183, name:'赚的更多', selected:true},
                {value:87, name:'政策有吸引力'},
                {value:173, name:'希望尝试新品牌'},
                {value:111, name:'给我有力的支持'}
            ]
        }
    ]
};