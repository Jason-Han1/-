option = {
    title: {
        text: '舆情情感度雷达图',
        x: 'center',
        y: 'bottom',
    },
    tooltip: {},
    radar: {
        // shape: 'circle',
        indicator: [
           { name: '情感指数', max: 100},
           { name: '离散度', max: 100},
           { name: '活力度', max: 100},
        ]
    },
    series: [{
        name: '情感度',
        type: 'radar',
        // areaStyle: {normal: {}},
        itemStyle: {normal: {areaStyle: {type: 'default'}}},
        data : [
            {
                value : [45, 90, 90],
                name : '情感度',
            },
            // {
            //     value : [88, 55, 44, 88, 33, 92.7],
            //     name : '舆情二级指标'
            // },
        ]
    }]
};