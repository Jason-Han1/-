option = {
    title: {
        text: '基础雷达图'
    },
    tooltip: {},
    legend: {
        data: ['学校', '学院', '年级', '班级', '平均']
    },
    radar: {
        // shape: 'circle',
        indicator: [
           { name: 'html', max: 6500},
           { name: 'css', max: 30000},
           { name: 'javascript', max: 38000},
           { name: 'java', max: 52000},
           { name: 'php', max: 25000},
           { name: 'c', max: 25000},
           { name: 'c++', max: 25000},
           { name: 'react', max: 25000},
           { name: 'vue', max: 25000},
           { name: 'angular', max: 26000}
        ]
    },
    series: [{
        name: '预算 vs 开销（Budget vs spending）',
        type: 'radar',
        // areaStyle: {normal: {}},
        data : [
            {
                value : [4300, 10000, 28000, 35000, 20000, 19000, 19000, 19000, 19000, 19000],
                name : '学校'
            },
             {
                value : [5000, 14000, 28000, 31000, 22000, 21000, 19000, 19000, 19000, 19000],
                name : '学院'
            },
             {
                value : [3000, 4000, 2800, 3100, 4200, 2100, 19000, 19000, 19000, 19000],
                name : '年级'
            },
             {
                value : [1000, 13000, 21000, 22000, 22000, 21000, 19000, 19000, 19000, 19000],
                name : '班级'
            },
             {
                value : [5000, 11000, 18000, 11000, 12000, 21000, 19000, 19000, 19000, 19000],
                name : '平均'
            }
        ]
    }]
};