option = {
    title: {
        text: '舆情聚焦热度雷达图',
        x: 'center',
        y: 'bottom',
    },
    tooltip: {},
    radar: {
        // shape: 'circle',
        indicator: [
           { name: '聚焦度', max: 100},
           { name: '聚焦焦度', max: 100},
           { name: '聚焦持续度', max: 100},
           { name: '聚焦灵敏度', max: 100},
        ]
    },
    series: [{
        name: '聚焦热度',
        type: 'radar',
        // areaStyle: {normal: {}},
        itemStyle: {normal: {areaStyle: {type: 'default'}}},
        data : [
            {
                value : [80, 100, 70, 65],
                name : '聚焦热度',
            },
            // {
            //     value : [88, 55, 44, 88, 33, 92.7],
            //     name : '舆情二级指标'
            // },
        ]
    }]
};