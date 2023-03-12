option = {
    title: {
        text: '舆情扩散度雷达图',
        x: 'center',
        y: 'bottom',
    },
    tooltip: {},
    radar: {
        // shape: 'circle',
        indicator: [
           { name: '阅读人次', max: 100},
           { name: '讨论人次', max: 100},
           { name: '转发量', max: 100},
           { name: '评论量', max: 100},
           { name: '点赞量', max: 100},
        ]
    },
    series: [{
        name: '扩散度',
        type: 'radar',
        // areaStyle: {normal: {}},
        itemStyle: {normal: {areaStyle: {type: 'default'}}},
        data : [
            {
                value : [85, 65, 80, 100, 100],
                name : '扩散度',
            },
            // {
            //     value : [88, 55, 44, 88, 33, 92.7],
            //     name : '舆情二级指标'
            // },
        ]
    }]
};