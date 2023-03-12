option = {
    title: {
        text: '舆情一级指标雷达图',
        x: 'center',
        y: 'bottom',
    },
    tooltip: {},
    radar: {
        // shape: 'circle',
        indicator: [
           { name: '热度', max: 100},
           { name: '聚焦热度', max: 100},
           { name: '内容强度', max: 100},
           { name: '扩散度', max: 100},
           { name: '情感度', max: 100},
           { name: '可信度', max: 100}
        ]
    },
    series: [{
        name: '舆情一级指标',
        type: 'radar',
        // areaStyle: {normal: {}},
        itemStyle: {normal: {areaStyle: {type: 'default'}}},
        data : [
            {
                value : [78.33, 83.75, 72.5, 86.0, 45.0, 92.7],
                name : '舆情一级指标',
            },
            // {
            //     value : [88, 55, 44, 88, 33, 92.7],
            //     name : '舆情二级指标'
            // },
        ]
    }]
};