option = {
    title: {
        text: '抗疫牺牲人员职务与数量图',
        subtext: '截止2020年3月20日',
        x: 'center'
    },
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        x: 'center',
        y: 'bottom',
        data: ['公安人员', '行政村', '公务员', '医护人员', '志愿者', '工人', '保安', '教职工', '央企干部', '城管', '街道办主任']
    },
    toolbox: {
        show: true,
        feature: {
            mark: {
                show: true
            },
            dataView: {
                show: true,
                readOnly: false
            },
            magicType: {
                show: true,
                type: ['pie', 'funnel']
            },
            restore: {
                show: true
            },
            saveAsImage: {
                show: true
            }
        }
    },
    calculable: true,
    series: [{
            name: '半径模式',
            type: 'pie',
            radius: [20, 110],
            center: ['25%', '50%'],
            roseType: 'radius',
            label: {
                normal: {
                    show: true
                },
                emphasis: {
                    show: true
                }
            },
            lableLine: {
                normal: {
                    show: true
                },
                emphasis: {
                    show: true
                }
            },
            data: [{
                    value: 82,
                    name: '公安人员'
                },
                {
                    value: 81,
                    name: '行政村'
                },
                {
                    value: 78,
                    name: '公务员'
                },
                {
                    value: 53,
                    name: '医护人员'
                },
                {
                    value: 21,
                    name: '志愿者'
                },
                {
                    value: 8,
                    name: '工人'
                },
                {
                    value: 3,
                    name: '保安'
                },
                {
                    value: 2,
                    name: '教职工'
                },
                {
                    value: 2,
                    name: '央企干部'
                },
                {
                    value: 2,
                    name: '城管'
                },
                {
                    value: 1,
                    name: '街道班主任'
                }
            ]
        },
        {
            name: '面积模式',
            type: 'pie',
            radius: [30, 110],
            center: ['75%', '50%'],
            roseType: 'area',
            data: [{
                    value: 82,
                    name: '公安人员'
                },
                {
                    value: 81,
                    name: '行政村'
                },
                {
                    value: 78,
                    name: '公务员'
                },
                {
                    value: 53,
                    name: '医护人员'
                },
                {
                    value: 21,
                    name: '志愿者'
                },
                {
                    value: 8,
                    name: '工人'
                },
                {
                    value: 3,
                    name: '保安'
                },
                {
                    value: 2,
                    name: '教职工'
                },
                {
                    value: 2,
                    name: '央企干部'
                },
                {
                    value: 2,
                    name: '城管'
                },
                {
                    value: 1,
                    name: '街道班主任'
                }
            ]
        }
    ]
};