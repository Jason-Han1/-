option = {
    title: {
        text: '贫困特征雷达图'
    },
    tooltip: {},
    legend: {
        data: ['普通学生', '该生']
    },
    radar: {
        // shape: 'circle',
        name: {
            textStyle: {
                color: '#fff',
                backgroundColor: '#999',
                borderRadius: 3,
                padding: [3, 5]
           }
        },
        indicator: [
           { name: '平均成绩', max: 6500},
           { name: '月均消费', max: 16000},
           { name: '挂科数量', max: 30000},
           { name: '最高成绩', max: 38000},
           { name: '单笔消费额度', max: 52000},
           { name: '月均消费频次', max: 25000}
        ]
    },
    series: [{
        name: '',
        type: 'radar',
        // areaStyle: {normal: {}},
        data : [
            {
                value : [4300, 10000, 28000, 35000, 50000, 19000],
                name : '普通学生'
            },
             {
                value : [5000, 14000, 28000, 31000, 42000, 21000],
                name : '该生'
            }
        ]
    }]
};