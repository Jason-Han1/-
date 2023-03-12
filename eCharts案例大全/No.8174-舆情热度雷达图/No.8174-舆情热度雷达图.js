option = {
    title: {
        text: '舆情热度雷达图',
        x: 'center',
        y: 'bottom',
    },
    tooltip: {},
    radar: {
        // shape: 'circle',
        indicator: [
           { name: '焦度', max: 100},
           { name: '持续度', max: 100},
           { name: '灵敏度', max: 100},
        ]
    },
    series: [{
        name: '热度',
        type: 'radar',
        // areaStyle: {normal: {}},
        itemStyle: {normal: {areaStyle: {type: 'default'}}},
        data : [
            {
                value : [100, 70, 65],
                name : '热度',
            },
            // {
            //     value : [88, 55, 44, 88, 33, 92.7],
            //     name : '舆情二级指标'
            // },
        ]
    }]
};