option = {
    title: {
        text: ''
    },
    tooltip: {},
    legend: {
        data: ['厂家A']
    },
    toolbox: {
        show : true,
        feature : {
            mark : {show: true},
            dataZoom : {show: true},
            dataView : {show: true, readOnly: false},
            restore : {show: true},
            saveAsImage : {show: true}
        }
    },
    radar: {
        // shape: 'circle',
        indicator: [
           { name: '崔单响应速度', max: 6500},
           { name: '历史履约次数', max: 16000},
           { name: '历史供货金额', max: 30000},
           { name: '历史延误次数', max: 38000}
        ]
    },
    series: [{
        name: '预算 vs 开销（Budget vs spending）',
        type: 'radar',
        // areaStyle: {normal: {}},
        data : [
            {
                value : [4300, 10000, 28000, 35000, 50000, 19000],
                name : '预算分配（Allocated Budget）'
            }
        ]
    }]
};