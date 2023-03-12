option = {
    title: {
        text: '基础雷达图',
        show: false
    },
    tooltip: {},
    legend: {
        data: ['关注数', '认领人数'],
        textStyle: {
            fontSize: 20
        },
        x: '200',
        y: '20'
    },
    radar: {
        // shape: 'circle',
        name: {
            textStyle: {
                fontSize:30,
                color: 'black'
                //color: '#fff',
                //backgroundColor: '#999',
                //borderRadius: 3,
                //padding: [3, 5]
            }
        },
        indicator: [
            { name: '公益服务', max: 6500},
            { name: '服务中心工作', max: 16000},
            { name: '团结员工', max: 30000},
            { name: '岗位标杆', max: 38000},
            { name: '其他', max: 52000},
        ]
    },
    series: [{
        name: '关注数',
        type: 'radar',
        //areaStyle: {normal: {color: 'rgba(12,62,129,0)'}},
        data: [
            {
                value: [4300, 10000, 28000, 35000, 50000, 19000],
                name: '预算分配（Allocated Budget）',
                    //label: {
                    //    show: true,
                    //    textStyle: {
                    //        fontSize: 20
                    //    },
                    //    formatter: function(params) {
                    //        return params.value;
                    //    }
                    //},
                    //areaStyle: {}
            },
        ]
    },{
        name: '认领人数',
        type: 'radar',
        data: [
            {
                value: [5000, 14000, 28000, 31000, 42000, 21000],
                name: '实际开销（Actual Spending）',
                    //label: {
                    //    show: true,
                    //    textStyle: {
                    //        fontSize: 20
                    //    },
                    //    formatter: function(params) {
                    //        return params.value;
                    //    }
                    //},
                    //areaStyle: {}
            }
            ]
    }]
};